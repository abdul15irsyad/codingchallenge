function challenge36(list){
  var listresult = []
  list.sort((a,b)=> a-b)
  for(var i=0;i<list.length;i++){
    var multiplelist = []
    multiplelist.push(list[i])
    while(list[i] === list[i+1]){
      multiplelist.push(list[i+1])
      i++
    }
    listresult.push(multiplelist)
  }
  return listresult
}

var list = [1,3,5,2,3,2,1,3]
var result = challenge36(list) 
console.log(result)