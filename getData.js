const request = require('request-promise-native');
const fs = require('fs');

const _loadData = () => {
  const str = fs.readFileSync('./config/app-data.json');
  return JSON.parse(str);
};

const _saveData = (data) => {
  fs.writeFileSync('./config/app-data.json', JSON.stringify(data));
}

const _pokeRequest = async (id) => {
  const res = await request(`http://pokeapi.co/api/v2/pokemon/${id}`);
  const data = JSON.parse(res);

  const types = data.types.reduce((accum, typeDatum) => {
    accum[typeDatum.slot-1] = typeDatum.type.name
    return accum;
  }, []);

  console.log(types)

  const abilities = data.abilities.map((abilityDatum) => {
    return { id: abilityDatum.slot, name: abilityDatum.ability.name};
  });

  const stats = data.stats.map((statDatum) => {
    return { name: statDatum.stat.name, num: statDatum['base_stat'] }
  });

  return {abilities, stats, types};
};

const doIt = () => {

  const initialId = 1;

  const recurse = async (id) => {
    const data = _loadData();
    const pokeObj = data[id-1];

    if (!data[id-1]) return;

    if (typeof pokeObj.types[0] === 'string') {
      console.log(`Skipping id: ${id}`);
    } else {
      console.log(`Attempting to scrape id: ${id}`)
      const newData = await _pokeRequest(id);
      const newObj = {
        ...pokeObj,
        ...newData
      };

      data[id-1] = newObj;
      _saveData(data);
    }

    recurse(id+1);
  }

  recurse(initialId);

}

doIt();
// _pokeRequest(1);
