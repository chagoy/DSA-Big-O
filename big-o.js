/* BIG O DRILLS */

function isEven(value){
  if (value % 2 == 0){ //o1
    return true;
  }
  else
    return false; //o1
}
//SOLUTION: constant time O(1)
//only doing one operation

function areYouHere(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) { //O(n)
        const el1 = arr1[i]; //O(1)
        for (let j=0; j<arr2.length; j++) {//O(n)
            const el2 = arr2[j]; //O(1)
            if (el1 === el2) return true;//O(1)
        }
    }
    return false;//O(1)
}
//SOLUTION: polynomial time O(n^2)
//there is a nested loop within our original loop. therefore this is a polynomial time complexity. 

function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) { //0(n)
        array[i] *= 2; //0(1)
    }
    return array; //0(1)
}
//SOLUTION: linear time 0(n)
//multiplying each array element is a constant time action, but the loop is linear in that the longer our loop gets the longer our function will take to get done

function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) { //0(n)
        if (array[i] === item) { //0(1)
            return i; // 0(1)
        }
    }
}
//SOLUTION: linear time 0(n)
//we run a basic loop which is linear and run a check. this is a constant time to check if they equal and returning it is also constant. 

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) { //0(n)
        for(let j = i+1; j < arr.length; j++) { //0(n^2)
            console.log(arr[i] + ", " +  arr[j] ); //0(1)
        }
    }
}
//SOLUTION: polynomial time 0(n^2) 
//we have 2 nested loops which will increase the time it takes to complete our function. 

function generateFib(num) {
    let result = []; //0(n)
    for (let i = 1; i <= num; i++) { //O(n)
  
      // we're adding the first item
      // to the result list, append the
      // number 0 to results
      if (i === 1) { //0(1)
        result.push(0); //0(1)
      }
      // ...and if it's the second item
      // append 1
      else if (i == 2) { //0(1)
        result.push(1); //0(1)
      }
  
      // otherwise, sum the two previous result items, and append that value to results.
      else { //0(1)
        result.push(result[i - 2] + result[i - 3]); //0(1)
      }
    }
    // once the for loop finishes
    // we return `result`.
    return result; //0(1)
  }
//SOLUTION: linear time 0(n)
//while a long function, we run one basic looop which is a linear action that will take as long as it's given limit is. inside we do checks which always take the same amount of time.  

function efficientSearch(array, item) {
    let minIndex = 0; //O(1)
    let maxIndex = array.length - 1; //O(1)
    let currentIndex; //O(1)
    let currentElement; //O(1)

    while (minIndex <= maxIndex) { //O(log n)
        currentIndex = Math.floor((minIndex + maxIndex) / 2); //O(1)
        currentElement = array[currentIndex]; //O(1)

        if (currentElement < item) { //O(1)
            minIndex = currentIndex + 1; //O(1)
        }
        else if (currentElement > item) { //O(1)
            maxIndex = currentIndex - 1; //O(1)
        }
        else { //O(1)
            return currentIndex; //O(1)
        }
    }
    return -1; //O(1)
}
//SOLUTION: logarithmic time O(log n)
//we have a search function where we split the array in half each time to cut down on search

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; //O(1)
}
//SOLUTION: constant time 0(1)
//basic function where there is only one action and it will always take the same amount of time

function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) { //O(1)
        return false; //O(1)
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) { //0(n)
        if (n % i == 0) return false;
    }
    return true;
}
//SOLUTION: linear time 0(n)
//we need to search through all numbers until we get to our 'n' before we find out whether the number is prime. it will take longer depending on how many numbers there are. 


/*=================================================================================
Exercise 1 - Counting Sheep

Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

Input: 3
Output:
	3 - Another sheep jump over the fence
	2 - Another sheep jump over the fence
	1 - Another sheep jump over the fence
*/

/*
 * @function countSheep
 * @desc     Recursive program that counts how many sheep jumps over the fence. 
 * @param    {number} num - the number sheep 
 * @returns  
 * @display  displays how many sheep jumped over the fence
 */

function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}

//SOLUTION: linear time. O(n)
//time to complete the function will depend on the number that is given

/*=================================================================================
Exercise 2: Array Double
Write a function that takes an array as input which contains an unknown set of numbers, 
and outputs an array with each input value doubled. Test your solution by trying a 
handful of different arrays. For example,
Input: [1, 2, 3]
Output: [2, 4, 6]
*/
function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}

//SOLUTION: linear time. 0(n)
//while completing a simple operation, we have to iterate through all the indexes in order to complete the function

/*=================================================================================
Exercise 3 - Reverse String

Write a program that reverses a string. Take a string as input, 
reverse the string, and return the new string.

Input: 'tauhida'
Output: adihuat
*/

function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

//SOLUTION: linear, 0(n)
//we use recursion to go through a string, each time accessing the index and passing in a part of the string to the original function. the complexity relies solely on the length of the string. 

/*=================================================================================
Exercise 4 - Triangular Number

Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
 1st     2nd             3rd             nth?  

1st trianular number = 1
2nd = (1+2) = 3
3rd = (1+2+3) = 6 
5th = (1+2+3+4+5) = 15

Input: 5
Output: 15

*/
//Should always return n*(n+1)/2
function triangle(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}

//SOLUTION: linear. O(n)
// we are going through our number and returning it, then passing in the same number subtracted by 1. this function will decrease in time or increase based on the size of the number passed in.

/*=================================================================================
Exercise 5 - String Splitter

Split a string based upon a separator (similar to String.prototype.split).

Input: '1/21/2018'
Output: 1212018 OR ["1", "21", "2018"]
*/
function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
		//you don't have to return an array, you can return a string as an array of 
		//character 
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
	//all these are valid syntax
	//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
	//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}
//SOLUTION: linear 0(n)
// the time will change depending on the length of the stream and the amount of separators found inside of the string

/*=================================================================================
Exercise 6 - Binary Representation

Write a recursive function that prints out the binary representation of a given number. 
For example the program should take 3 as an input and print 11 as output, or 25 as an input 
and print 11001 as an output. Note that the binary representation of 0 should be 0. 

Input: 25
Output: 11001
*/
function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the reminder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; //base case - at some point the divisions will lead to 0
    }
}

//SOLUTION: linear
//these functions will increase with the longer the original number

/*=================================================================================
Exercise 7 - Factorial

Write a recursive program that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number 
between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

Input: 5
Output: 120

*/
function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

//SOLUTION: linear
//this will continue to run until the original input reaches 0. 

/*=================================================================================
Exercise 8 - Fibonacci

Write a recursive program that prints the fibonacci sequence of a given number. 
The fibonnaci sequence a series of numbers in which each number is the sum of the 
two preceding numbers. 
For example the 7th fibonacci number in a fibonaci sequence is  13. 
The sequence looks as follows: 1 1 2 3 5 8 13.

Input: 7
Output: 13
*/
function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}
//SOLUTION: exponential O(n^2)
//we run 2 recursive functions to generate a sum between our input

/*=================================================================================
Exercise 9 - Anagrams

An anagram is any word or phrase that exactly reproduces the letters in another order. 
Write a program that creates an anagram (listing all the rearrangements of a word) of a given word. 
For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, 
and non-words like tsae.

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
For example, given east, use e as a prefix and you would place e in front of all six permutations of ast 
— ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. 
Continue this way until you find all the anagrams for east. There should be 24 of them.

Input: 
Output: 

*/

function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    //console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}

//SOLUTION: polynomial O(n^2)
//we will be looping over each index of our input. we will have to call it for each input index we are given increasing the time of the function. 

/* ==============================
Exercise 10: Animal Hierarchy
Step through the code and find the input to the program, input to each recursive calls, 
output of each recursive calls and the output of the program. The purpose of this 
exercise is not for you to copy paste the code and find out the output but rather 
step through each line, analyze each step to understand how recursion works.
*/

const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}
//SOLUTION: polynomial O(n^3)
//we take an input, loop over it twice and then call our recursive function to build up our node

/*=================================================================================*/
/*
Exercise 11: Organization Chart
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the hierarchy.
*/

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}

//SOLUTION: exponential 0(2^n)
//we basically just keep traversing the 


function main(){
	//console.log('#1 - count sheep');
	//countSheep(5);

	//console.log('#2 - Array Doubler');
	//let arr = [10,5,3,4];
	//console.log(double_all(arr));

	//console.log('#3 - Reverse String');
	//console.log(reverseString("tauhida"));

	//console.log('#4 - nth Triangular Number');
	//console.log(triangle(5));

	//console.log('#5 - String Splitter');
	//console.log(split('1/21/2018', '/'));

	//console.log('#6 - Binary Representation');
	//console.log(convertToBinary(25));

	//console.log('#7 - Anagrams');
	//printAnagram("east");

	//console.log('#8 - animalHierarchy');
	//console.log(traverse(animalHierarchy, null));

	//console.log('#9 - Factorial');
	//console.log(factorial(5)); //120

	//console.log('#10 - Fibonacci');
	//console.log(fibonacci(7));

	console.log('#11 - Organization Chart');
	console.log(traverseA(organization));
	//console.log(traverseB(organization));

}
main()


//Exercise 1 - Counting Sheep
/*
 * @function countSheepLoop
 * @desc     Iterative program that counts how many sheep jumps over the fence. 
 * @param    {number} num - the number sheep 
 * @returns  
 * @display  displays how many sheep jumped over the fence
 */

function countSheepLoop(num){
    for(let i=num; i>0; i--){
        console.log(`counting sheeps ${i}`);
    }
}
countSheepLoop(10);

//SOLUTION: linear O(n)

/*====================================================================
//Exercise 2: Take an array as input which contains an unknown set of numbers,
//and output an array which doubles the values of each item in that array. Test
//your solution by trying a handful of different arrays. Don't worry about
//error checking to make sure that the array you're given is valid input.
//Editorial comment: Obviously arr.map() is the normal way to do this.
*/
function double_all(arr) {
    var ret = Array(arr.length);
    for (var i = 0; i < arr.length; ++i) {
        ret[i] = arr[i] * 2;
    }
    return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

//SOLUTION: linear 0(n)

/*====================================================================*/
//Exercise 3: Take a string as input, reverse the string, and return the new
//string.
//Direct transformation of the tail-recursive form.
function reverse_tail(str) {
    var accumulator = "";
    while (str !== "") {
    	accumulator = str[0] + accumulator;
    	str = str.slice(1);
    }
    return accumulator;
}

//SOLUTION: linear 0(n)

/*====================================================================*/
//Exercise 4: Calculates the nth triangular number.
//Should always return n*(n+1)/2
function triangle(n) {
    var tot = 0;
    for (var i = 1; i <= n; ++i) {
	    tot += n;
    }
    return tot;
}

//SOLUTION: linear O(n)
/*====================================================================*/
//Exercise 5: Split a string based upon a separator (similar to
//String.prototype.split).
//Editorial comment: There are more efficient ways to do this, but this is a
//fairly direct translation of the recursive version.
function split(str, sep) {
    var ret = [];
    while (true) {
        var idx = str.indexOf(sep);
        if (idx == -1) break;
	ret.push(str.slice(0, idx))
	str = str.slice(idx + sep.length);
    }
    ret.push(str);
    return ret;
}
//SOLUTION: linear 0(n)
 

/*=================================================================================
Exercise 6 - Binary Representation

Write a recursive function that prints out the binary representation of a given number. 
For example the program should take 3 as an input and print 11 as output, or 25 as an input 
and print 11001 as an output. Note that the binary representation of 0 should be 0. 
*/
function convertToBinaryIter(num){
    var binary = '';
    while(num>0){
        let rem = Math.floor(num%2);
        binary = rem + binary;
        num = Math.floor(num/2);
    }
    return binary;


}
console.log(convertToBinaryIter(124)); //1111100

//SOLUTION: exponential O(n^2)

/*=================================================================================
Exercise 7 - Factorial

Write a recursive program that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number 
between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
*/
function factorialIterative(number){
   let fact = 1;
   for (let i = 1; i <= number; i++){
       fact *= i;
   }
   return fact;
}
console.log(factorialIterative(5));

//SOLUTION: linear 0(n)

/*=================================================================================
Exercise 8 - Fibonacci

Write a recursive program that prints the fibonacci sequence of a given number. 
The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers. 
For example the 7th fibonacci number in a fibonaci sequence is  13. The sequence looks as follows: 1 1 2 3 5 8 13.

*/

function fibonacciIterative(number){
    let num1 = 1;
    let num2 = 0;
    let fib = null;
    while(number > 0){
        fib = num1;
        num1 = num1+num2;
        num2 = fib;
        number--;
    }
    return num2;

}
//SOLUTION: linear 0(n)
//print the whole sequence


//******** ES6 makes it a bit easier*****
function fibonacciIterative2(number){
    let [num1, num2] = [1,0];
    while(number-- > 0){
        [num1, num2] = [num2+num1, num1]
    }
    return num2;

}
console.log(fibonacciIterative2(3));

//SOLUTION: linear 0(n)

/*=================================================================================
Exercise 9 - Anagram

Too tidious to do this iteratively
*/

/*
Exercise 8 - Animal Heirarchy

Analyze it recursivly - no iterative version needed

*/

/*=================================================================================
Exercise 10 - Animal hierarchy
A program to analyze and understand recursion
No need to solve it iteratively


/*=================================================================================*/
/*
Exercise 11: Organization Chart
No need to have an iterative version of this
*/