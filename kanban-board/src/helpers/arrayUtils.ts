export const moveItem = <T>(array: T[], from: number, to: number) => {
  const item = array[from]
  return insertItemTo(removeItemFrom(array, from), item, to)
}

const removeItemFrom = <T>(array: T[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}
const insertItemTo = <T>(array: T[], item: T, index: number) => {
  if (!index || index < 0 || index > array.length)
    throw new Error('Invalid index')
  return [...array.slice(0, index), item, ...array.slice(index + 1)]
}
