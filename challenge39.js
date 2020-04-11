let challenge39 = (input) => {
  if (isPalindrome(input)) return 0
  for (let i = 0, added = ''; i < input.length; i++) {
    added += input[i]
    if (isPalindrome(input + added.split('').reverse().join(''))) return added.length
  }
}
let isPalindrome = (input) => input == input.split('').reverse().join('')

console.log(challenge39('list'))