export const isToday = (date: number) => {
  const now = new Date()
  const midnigth = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    0,
    0,
    0
  )
  return midnigth.getTime() < date
}
