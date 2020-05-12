let challenge43 = (str1, str2) => {
  if (str1 == str2) return 'Not Shifted'
  for (let i = 1; i <= str1.length; i++) {
    if (shift(str1, i, 'left') == str2) return `Left Shifted By ${i}`
    else if (shift(str1, i, 'right') == str2) return `Right Shifted By ${i}`
  }
}

let shift = (str, num, dir = 'left') => {
  num %= str.length
  if (dir == 'left') return str.substring(num) + str.substring(0, num);
  else return str.slice(0 - num) + str.substring(0, str.length - num)
}

console.log(challenge43("nextgencoder", "gencodernext"))
console.log(challenge43("nextgencoder", "odernextgenc"))