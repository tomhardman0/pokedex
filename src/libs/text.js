const capitaliseSingle = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

const capitalise = (str) => {
  const newStr = str.replace('-', ' ');
  const splitCapitalise = newStr.split(' ').map(capitaliseSingle);
  return splitCapitalise.join(' ');
};

export default {
  capitaliseSingle: capitaliseSingle,
  capitalise: capitalise
}
