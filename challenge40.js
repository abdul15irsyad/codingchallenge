let challenge40 = (coders, coins) => {
  let full, back, front
  full = back = front = Math.max.apply(null, coins)
  for (let i = 0; i < coders.length; i++) {
    if (coders[i] == 3 && coins[i] < full) full = coins[i]
    else if (coders[i] == 2 && coins[i] < back) back = coins[i]
    else if (coders[i] == 1 && coins[i] < front) front = coins[i]
  }
  return full < back + front ? full : back + front
}

let [coders, coins] = [[3, 1, 2, 3, 1], [9, 5, 2, 7, 6]]
console.log(challenge40(coders, coins))