const fetch = require('axios');
const fs = require('fs');

class PopulateData {
  constructor() {
    this.baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  }

  async getAllPokemon() {
    try {
      const response = await fetch.get(`${this.baseUrl}?limit=151&offset=0`);
      const data = response.data.results.map((item, index) => {
        return { name: item.name, id: index+1 };
      });
      this.writeJson(data)
    } catch (e) {
      console.log(e);
    }
  }

  writeJson(data) {
    const json = JSON.stringify(data);
    fs.writeFileSync('./test.json', json, 'utf8');
  }

  readJson() {
    return JSON.parse(fs.readFileSync('./test.json', 'utf8'))
  }

  populateAllPokemon() {
    this.missingIds().forEach((id, index) => {
      setTimeout(() => {
        this.getPokemon(id-1);
      }, index * 10000);
    });
  }

  async getPokemon(index) {
    const allData = this.readJson();
    const currentPokemon = allData[index];

    if (currentPokemon.types) return;

    try {
      console.log(`${this.baseUrl}/${index+1}`)
      const response = await fetch.get(`${this.baseUrl}/${index+1}`);
      currentPokemon.types = response.data.types.map((type) => type.type.name);
      allData[index] = currentPokemon;
      this.writeJson(allData);
    } catch (e) {
      console.log(e);
    }
  }

  missingIds() {
    const allData = this.readJson();
    const missing = allData.map((datum) => {
      if (!datum.types) return datum.id;
    }).filter((thing) => thing);
    console.log(missing);
    return missing;
  }

}

const getClass = new PopulateData();
if (process.argv[2] === 'm') {
  getClass.missingIds();
} else if (process.argv[2]) {
  getClass.getPokemon(Number(process.argv[2]))
} else {
  getClass.populateAllPokemon()
}
