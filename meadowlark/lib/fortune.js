const fortunes = [
  'Знать и не делать - всё равно что не знать',
  'Окончание обучения - начало деградации',
  'Иди туда, где страшно',
]

const getRandomFortune = () => {
  const idx = Math.floor(Math.random() * fortunes.length)
  return fortunes[idx]
}

module.exports = { getRandomFortune }
