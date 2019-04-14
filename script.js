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


//Check for Anagrams
function isAnagram(s1, s2) {
    var str1 = s1.toLowerCase().split("").sort().join("");
    var str2 = s2.toLowerCase().split("").sort().join("");
return str1 === str2? true : false
}


//Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
function XO(str) {
    let x = str.toLowerCase().split('').filter(x => x === 'x').length;
    let o = str.toLowerCase().split('').filter(x => x === 'o').length;
    return x === o;
}


//function that alternates the case of the characters in a string.
function alternatingCaps(str) {
    return str.split('').map((c, i) => {
        return (i % 2 === 0) ? c.toUpperCase() : c.toLowerCase();
    }).join('');
}


//Check String for Spaces
function hasSpaces(str) {
    return str.includes(" ")
}


//Capitalize the First Letter of Each Word
function makeTitle(str) {
	return str
        .split(' ')
        .map(word =>  word[0].toUpperCase() + word.substr(1)).join(' ');
}