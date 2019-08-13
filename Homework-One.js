const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;
const firstSum = addTwoNumbers(5, 4)
console.log(firstSum)

const remainderTwoNumbers = (numOne, numTwo) => numOne % numTwo;
const firstRemainder = remainderTwoNumbers(7, 5)
console.log(firstRemainder)

function areaOfTriangle(base, height) {
        if (base < 0 || height < 0) {
          return 'You need positive integers to calculate area!';
        }
        return (base * height)/2;
      }
      

const firstTriangleArea = areaOfTriangle(10, 10)
console.log(firstTriangleArea)

function maxRangeTriangleEdge(side1, side2) {
    if (side1 < 0 || side2 < 0) {
        return 'You need positive integers to calculate edge!'
    }
    return (side1 + side2) - 1 
}

const firstRangeTriangleEdge = maxRangeTriangleEdge(6, 9)
console.log(firstRangeTriangleEdge)


const incrementByOne = (num) => ++num

const FirstIncrementbyOne = incrementByOne(6)
console.log(FirstIncrementbyOne)
    
 function divisibleBy200Check(num) {
    if  (num % 200 !== 0)
    {
       return false
    }
    else
    {
         return true
    }
 }
const FirstDivisibleBy200Check = divisibleBy200Check(4)
console.log(FirstDivisibleBy200Check)

function checkIfEmptyString(string) {
    if (string === "") {
        return true

    }
    return false
}


const firstEmptyStringCheck = checkIfEmptyString('')

console.log(firstEmptyStringCheck)

function CompareLengthofTwoStrings(string1, string2) {
    if (string1.length === string2.length) {
        return true
    }
    return false
}

const firstStringLemghtComparison = CompareLengthofTwoStrings('bad', 'red')

console.log(firstStringLemghtComparison)




function checkIfplural(string1) {
   if (string1.slice(-1) === 's') {
       return true
   }
   return false

} 

const firstPluralCheck = checkIfplural('rat')
console.log(firstPluralCheck)

function calculateExponent(baseNum, exponentNum) {
    if (baseNum < 0 || exponentNum < 0) {
      return 'You need positive integers to calculate exponent!';
    }
    return Math.pow(baseNum, exponentNum);
  }

const firstcalculateExponent = calculateExponent(3, 3)
console.log(firstcalculateExponent)