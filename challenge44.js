let challenge44 = (list, x) => {
  let sorted = [...list].sort((a, b) => a - b)
  let index = list.indexOf(x)
  for (let i = 0; i < list.length; i++) {
    [list[index], list[i]] = [list[i], list[index]]
    if (JSON.stringify(list) == JSON.stringify(sorted)) return `Swapped ${sorted.join(" ")}`
    [list[index], list[i]] = [list[i], list[index]]
  }
  return `Not Swapped`
}

console.log(challenge44([4, 7, 2, 3], 4))