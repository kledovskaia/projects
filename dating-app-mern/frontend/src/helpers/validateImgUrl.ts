export const validateImgUrl = (path: string) => {
  const pattern = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/
  return pattern.test(path)
}
