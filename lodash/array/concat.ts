type TConcat = <T, K>(array: T[], ...values: K[]) => (T | K)[];
const concatFor: TConcat = (array, ...values) => {
  const result = [];
  result.push(...array);
  if (!values) return result;
  for (const value of values) {
    if (Array.isArray(value)) result.push(...value);
    else result.push(value)
  }
  return result
}

var array = [1];
var other = concatFor(array, [2], [3], [[4]]);

// TODO: *Typescript Error*
// var other = concatFor(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]