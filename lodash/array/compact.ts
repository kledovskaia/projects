type TCompact = <T>(array: T[]) => T[];
const compactFor: TCompact = (array) => {
  const result = [];
  for (const item of array) {
    if (item) result.push(item)
  }
  return result
}
const compactFilter: TCompact = (array) => array.filter(item => item)
const compactReduce: TCompact = <T>(array: T[]): T[] => array.reduce((res, item) => (item ? [...res, item] : res), [] as T[])

console.log(compactReduce([0, 1, false, 2, '', 3]))
// => [1, 2, 3]