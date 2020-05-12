module.exports = (list) => {
  let result = []
  let arrayLength = list.length
  for (let i = 0; i < arrayLength; i++) {
    let randomIndex = Math.floor(Math.random() * list.length)
    result.push(list[randomIndex])
    list = list.filter(x => x != list[randomIndex])
  }
  return result
}