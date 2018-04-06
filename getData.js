const request = require('request-promise-native');
const fs = require('fs');

const _loadData = () => {
  const str = fs.readFileSync('./config/app-data.json');
  return JSON.parse(str);
};

const _saveData = (data) => {
  fs.writeFileSync('./config/app-data.json', JSON.stringify(data));
};

const _pokeRequest = async (id) => {
  const res = await request(`http://pokeapi.co/api/v2/pokemon/${id}`);
  const data = JSON.parse(res);

  const types = data.types.reduce((accum, typeDatum) => {
    accum[typeDatum.slot-1] = typeDatum.type.name
    return accum;
  }, []);

  const abilities = data.abilities.map((abilityDatum) => {
    return { id: abilityDatum.slot, name: abilityDatum.ability.name};
  });

  const stats = data.stats.map((statDatum) => {
    return { name: statDatum.stat.name, num: statDatum['base_stat'] }
  });

  const name = data.name;
  return {abilities, stats, types, name, id};
};

// THE BELOW FUNCTION REQUESTS, MANIPULATES, AND
// REWRITES ALL THE APP DATA. WITH GREAT POWER...
// (async function getPokemonData(id) {
//   const data = _loadData();
//   const pokeObj = data[id-1];
//
//   if (!data[id-1]) return;
//
//   if (typeof pokeObj.abilities[0] === 'string') {
//     console.log(`Skipping id: ${id}`);
//   } else {
//     console.log(`Attempting to scrape id: ${id}`);
//     const newData = await _pokeRequest(id);
//
//     data[id-1] = newData;
//     console.log(data[id-1])
//     _saveData(data);
//   }
//
//   getPokemonData(id+1);
// })(1);

// THE BELOW FUNCTION REQUESTS, MANIPULATES, AND
// REWRITES ALL THE APP DATA. WITH GREAT POWER...
// (async function abilities(id) {
//   const str = fs.readFileSync('./config/abilities.json');
//   const data = JSON.parse(str);
//
//   if (data[id]) {
//     console.log(`skipping ${id} as already exists`);
//     abilities(id+1);
//     return;
//   }
//
//   const res = await request(`http://pokeapi.co/api/v2/ability/${id}`);
//   const ability = JSON.parse(res);
//   if (ability.detail || data[ability.id]) {
//     console.log(`skipping ${id} as doesn't exist on api`);
//     abilities(id+1);
//     return;
//   }
//
//   console.log(`setting ${id}`, ability.effect_entries[0]['short_effect']);
//   data[ability.id] = ability.effect_entries[0]['short_effect'];
//
//   fs.writeFileSync('./config/abilities.json', JSON.stringify(data));
//
//   abilities(id+1);
// })(1);
