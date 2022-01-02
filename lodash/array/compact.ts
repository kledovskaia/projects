type TCompact = <T>(array: T[]) => T[];
const compactFor: TCompact = (array) => {
  const result = [];
  for (const item of array) {
    if (item) result.push(item)
  }
  return result
}
const compactFilter: TCompact = (array) => array.filter(item => item)

console.log(compactFilter([0, 1, false, 2, '', 3]))
// => [1, 2, 3]