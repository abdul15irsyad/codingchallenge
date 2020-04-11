function challenge35(number,method){
  number = number.toString().split('')
  var result
  method=='additive' ? result=0 : result=1
  for(var a of number){
    a = parseInt(a)
    if(method == 'additive')
      result += a
    else if(method == 'multiplicative')
      result *= a
  }
  console.log(result)
  return result>9 ? challenge35(result,method) : result
}

var additive = challenge35(8326962,'additive')
var multiplicative = challenge35(8326962,'multiplicative')
console.log(additive)
console.log(multiplicative)