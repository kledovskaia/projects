type TChunk = <T>(arr: T[], size?: number) => T[][];
const chunkFor: TChunk = (array, size = 1) => {
  const resLength = Math.ceil(array.length / size);
  let res = new Array(resLength);
  for (let i = 0, s = 0; i < resLength; i++, s += size) {
    const e = (s + size) > array.length ? array.length : (s + size);
    res[i] = array.slice(s, e);
  }
  return res;
}

console.log(chunkFor(['a', 'b', 'c', 'd'], 2))
// => [['a', 'b'], ['c', 'd']]
 
console.log(chunkFor(['a', 'b', 'c', 'd'], 3))
// => [['a', 'b', 'c'], ['d']]

export { chunkFor as chunk }