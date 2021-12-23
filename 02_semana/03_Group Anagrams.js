var groupAnagrams = function(strs) {
    let hash = {};

  strs.forEach(str => {
    let letters = str.split('').sort();

    hash[letters] ? hash[letters].push(str) : hash[letters] = [str];

  });
  const keys = Object.keys(hash);
  const values = keys.map((index) => hash[index]);
  return values;
};