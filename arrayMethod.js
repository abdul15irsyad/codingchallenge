let array = [1, 2, 3, 4, 5]
console.log('array:', array)

// concat
let arrayConcat = array.concat(6, 7, 8)
console.log('array Concat:', arrayConcat)

// every
let arrayEvery = array.every(item => item < 10)
console.log('array Every:', arrayEvery)

// fill
let temp = [...array]
let arrayFill = array.fill(10, 1, 3)
console.log('array Fill:', arrayFill)
array = temp

// filter
let arrayFilter = array.filter(item => item % 2 == 1)
console.log('array Filter:', arrayFilter)

// find
let arrayFind = array.find(item => item == 2)
console.log('array Find 2:', arrayFind)
let arrayNotFound = array.find(item => item == 9)
console.log('array Not Found:', arrayNotFound)

// find index
let arrayFindIndex = array.findIndex(item => item == 3)
console.log('array Find Index from 3 :', arrayFindIndex)

// for each
let arrayForEach = []
array.forEach(item => arrayForEach.push(item * 2))
console.log('array forEach:', arrayForEach)

// includes
let arrayIncludes = array.includes(1, 0)
console.log('array Includes:', arrayIncludes)

// index of
let element = 3
let arrayIndexOf = array.indexOf(element)
console.log(`array Index Of ${element}:`, arrayIndexOf)

// is array
let arrayIsArray = Array.isArray(array)
console.log('array Is Array:', arrayIsArray)

// join
let arrayJoin = array.join()
console.log('array Join:', arrayJoin)

// keys
let arrayKeys = array.keys()
console.log('array Keys:', arrayKeys)

// length
let arrayLength = array.length
console.log('array Length:', arrayLength)

// map
let arrayMap = array.map(item => item * 2)
console.log('array map:', arrayMap)

// reduce
let arrayReduce = array.reduce((total, item) => total + item)
console.log('array Reduce:', arrayReduce)

// reduce right
let arrayReduceRight = array.reduceRight((total, item) => total - item)
console.log('array ReduceRight:', arrayReduceRight)

// reverse
let arrayReverse = array.reverse()
console.log('array Reverse:', arrayReverse)
array.reverse()