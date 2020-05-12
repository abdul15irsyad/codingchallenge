// 1. find the missing numbers
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array2 = [2, 6, 4, 3, 1, 9, 8, 10]

let findMissing = (arr1, arr2) => {
  let missingElements = []
  for (let i = 0; i < arr1.length; i++) {
    if (index(arr2, arr1[i]) == -1) missingElements[missingElements.length] = arr1[i]
  }
  return missingElements
}

let index = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (value == arr[i]) return i
  }
  return -1
}

console.log('missing element is :', findMissing(array1, array2))

// 2. sum of pairs
let array = [1, 2, 10, 4, 5, 6, 7, 3, 9]
let number = 8

let sumOfPairs = (array, number) => {
  let allPairs = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i == j) continue
      if (array[i] + array[j] == number) {
        allPairs[allPairs.length] = [array[i], array[j]]
        array[i] = array[j] = undefined
      }
    }
  }
  return allPairs
}

console.log('all pairs :', sumOfPairs(array, number))

// 3. delete duplicates
array = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 1, 4, 2, 8, 10]

let deleteDuplicates = (array) => {
  let deletedArray = []
  for (let i = 0; i < array.length; i++) {
    if (index(deletedArray, array[i]) == -1) deletedArray[deletedArray.length] = array[i]
  }
  return deletedArray
}

console.log('delete duplicates :', deleteDuplicates(array))

// 4. reverse in place
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let reverseArray = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[(array.length - 1) - i]] = [array[(array.length - 1) - i], array[i]]
  }
  return array
}

console.log('reverse in place :', reverseArray(array))