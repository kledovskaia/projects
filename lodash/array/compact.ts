type TCompact = <T>(array: T[]) => T[];
const compact: TCompact = (array) => {
  const result = [];
  for (const item of array) {
    if (item) result.push(item)
  }
  return result
}

console.log(compact([0, 1, false, 2, '', 3]))
// => [1, 2, 3]