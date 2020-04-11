let challenge238 = (candies) => {
  let total = candies.reduce((a,b)=>a+b)
  let perBag = total/3
  return total%3==0 ? checkCandies2(candies,perBag) : 'No'
}
let checkCandies2 = (candies,perBag) => {
  candies = candies.filter(candy=>candy!=perBag)
  let temp = candies[0]
  if(temp>perBag) return 'No'
  let addedIndex = [0]
  for(let i=1;i<candies.length;i++){
    temp += candies[i]
    addedIndex.push(i)
    temp = temp>perBag ? candies[0] : temp
    if(temp%perBag==0){
      let newCandies = candies.filter((v,index)=>addedIndex.indexOf(index)==-1)
      if(newCandies.length==0){
        return 'Yes'
      }else{
        return checkCandies2(newCandies,perBag)
      }
    }
  }
  return 'No'
}

let candies = [2,5,1,1,4]
console.log(challenge238(candies))