function nextBigger(number){
  //code
  
  // no bigger number can be composed
  if (number < 10) return -1
  
  
  //convert to string array
  
  
  const num2Str = number.toString()
  let str2Arr = num2Str.match(/\d/g)
  
  // no bigger number can be composed check
  let noHitCount = 0
  
  
  //iterate from the last element to find the index of a digit with greater number after it
  let keyIndex = 0
  for (let i = 0; i < str2Arr.length - 1; i++) {
    
    const index = str2Arr.length - 1 - i
    const greaterNum = parseInt(str2Arr[index])
    const lessNum = parseInt(str2Arr[index - 1])
    if (greaterNum > lessNum) {
      keyIndex = index - 1
      break;
    } else {
      noHitCount++
    }
    
  }
  
  if (noHitCount === str2Arr.length - 1) return -1

  //find the index of the next higher number of that digit
  //starting from the keyIndex to the last digit
  //  separate
  const str2ArrSegment = str2Arr.splice(keyIndex, str2Arr.length-keyIndex)
  //  iterate
  let leastDiff = Infinity
  let leastDiffIndex = 0
  for (let i = 1; i < str2ArrSegment.length; i++) {
    const keyDigit = parseInt(str2ArrSegment[0])
    const compareDigit = parseInt(str2ArrSegment[i])
    let diff = 0
    if (keyDigit < compareDigit) {
      diff = compareDigit - keyDigit
      if (leastDiff > diff) {
        leastDiff = diff
        leastDiffIndex = i
      }
    }
    
  }
  
  //swap the key index with the next higher number
  const temp = str2ArrSegment[0]
  str2ArrSegment[0] = str2ArrSegment[leastDiffIndex]
  str2ArrSegment[leastDiffIndex] = temp
  
  //separate the first element and sort the rest ascendingly
  const fElem = str2ArrSegment.splice(0,1)[0]

  str2ArrSegment.sort()
  
  //combine, join, and convert to number
  str2Arr = [...str2Arr, fElem, ...str2ArrSegment]
  return parseInt(str2Arr.join(''))
  
}

console.log(nextBigger(927))