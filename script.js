//Binary to Decimal
function binaryToDecimal(x, base) {
    var parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0 }
    return parsed;
  }
  //In binary, radix is always 2
  console.log(binaryToDecimal(' 0xF', 2));
  console.log(binaryToDecimal(' 00011111000', 2));
  console.log(binaryToDecimal('321', 2));


  //Decimal to binary
  function decimalToBinary(number) {
    return number.toString(2);
  }
  console.log(decimalToBinary(345));


  //Removes duplicates from an array
function removeDups(arr) {
    let newArr=[...new Set(arr)];
    return newArr;
}
console.log(removeDups(["John", "Taylor", "John"]));
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups([1, 0, 1, 0, "John", "Taylor", "John" ]));


//Find the Missing Number
function missingNums(arr) {
    var sum = arr.reduce((a, b) => a + b);
    return 55 - sum;
  }
console.log(missingNums([1,2,5,8,9,10,3,7,4]))

//Multiple of 100
function divisible(num) {
	return num % 100 == 0? true :false;
}

//Return the Next Number from the Integer Passed
function addition(num) {
	return num +=1;
}

//Return the Middle Character(s) of a String
function getMiddle(str) {
	if(str.length%2 == 0){
		return str.charAt(str.length/2-1) + str.charAt(str.length/2)
	}return str.charAt(str.length/2)
}

//Is the Word Singular or Plural?
function isPlural(word) {
	return word.endsWith("s")? true: false
}

//Char-to-ASCII
function ctoa(c) {
    return c.charCodeAt();
}

//Return the Last Element in an Array
function getLastItem(arr) {
	return arr[arr.length -1];
}


//Factorize a Number
function factorize(num) {
	let factors = []
	for (i = 1; i <= num; i++) {
		if (num % i === 0) {
			factors.push(i)
		}
	}
	return factors
}


//Return the Sum of the Two Smallest Numbers
function sumTwoSmallestNums(arr) {
	let numbers= arr.slice().sort((a,b) => a-b).slice(0,2);
	return numbers[0] + numbers[1];
}


//