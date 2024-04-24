 //  problem 1  given a string ,reverse each worl in the string 
var str="Saree jahan se acha Pakistan Hamara"
function reveredWordOfString(value){
var savedStrArray=value.split(" ").map(function(word){
   return   word.split("").reverse().join("")
})
   console.log(savedStrArray.join(" "))
}
reveredWordOfString(str);

//problem 2  how to check if an object is an array or not
function checkArray(elem){
    console.log(Array.isArray(elem))
}
checkArray([]);
checkArray({})

//problem 3 how to empty an array in js ?
// do not reset it ,and do not through to pop each value

function MakeArrayEmpty(array){
    array.length = 0;
}
MakeArrayEmpty([1,2,3,4,5,6])

//problem 4 how would you check if a number is integer
//do not use Number.isInteger for this

function checkInteger(num){
 if(num%1==0) return console.log("integer")
 else console.log("Not!")
}
checkInteger(5.6)

//problem 5  duplicate element of an array
function duplicateTheArray(value){
    console.log(value.concat(value))
}
duplicateTheArray([1,2,3,4,5])

//problem 6  reverse a number
function reverseNumber(value){
    var res = value.toString().split("").reverse().join("")
    var num =Number(res);
    console.log(num)
}
reverseNumber(15)
//another method
function reverseKaro(num){
    var rev=0;
    while(num>0){
        var rem= num % 10 ;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    return rev
}
console.log(reverseKaro(1234))

//problem 7  write a js function that checks whether a passed 
//string is palindrome or not

function palindromeChecker(value){
    var res= value.split("").reverse().join("");
    if(value===res) return console.log("It is palendrome")
    else return console.log("It is not a palindrome string")
}
palindromeChecker('lool')

//problem 8 write a js function that returns a passed string 
//with letteres in alphabatical orders

function orderAlphabatically(value){
    var sorted = value.split("").sort().join("");
    console.log(sorted)
}
orderAlphabatically("waleed")

//problem 9 write a function which converts the first letter
// of each word of the string as uppercase

function makeUppercase(value){
   var res = value.split(" ").map((elem)=>{
    return elem.charAt(0).toUpperCase() + elem.substring(1) 
   })
   return res.join(" ")
}
console.log(makeUppercase("kesy ho bhaiyo sb bariya h k nahi"))

//problem 10 write a js function to get the number of occurences
//of each letter in spacified string

function countOccurences(value){
    var occurences={}
  value.split("").forEach(elem => {
    if(occurences.hasOwnProperty(elem)==false){
        occurences[elem]=1
    }
    else{
        occurences[elem]++;
    }
 });
 return console.log(occurences)
}
countOccurences("waleed")

//problem 11 loop an array and add(+) all mebers of it
 function addArrayItemsThroughLoop(value){
    var result= 0;
    value.forEach(elem=>{
        result = result + elem
    })
    return console.log(result)
 }
 addArrayItemsThroughLoop([1,2,3,4,5])

 //problem 12 in an array of numbers and strings only add(+)
 //those which are numbers and not strings
 
 function addOnlyNumbers(value){
    var result=0;
    value.map(elem=>{
        if(typeof elem === 'number'){
            result = result + elem
        }
    })
    return console.log(result)
 }
 addOnlyNumbers(["waleed",1,"ahmad",34,88])

 //problem 13 loop an array of objects and remove all objects
 //which dont have gender's value male
 var arrayOfObjects= [
    {name:"waleed",gender:"male"},
    {name:"halima",gender:"female"},
    {name:"ahmad",gender:"male"},
    {name:"halima sultan",gender:"female"}
 ]
 //this is a method but this method creates a new array for that
function removeFemales(value){
    var filteredArray=value.filter(function(elem){
        return elem.gender === 'male'
    })
    return console.log(filteredArray)
}
removeFemales(arrayOfObjects)
//if we want changes within actual array so 
//by using following method we can do that

function removeFemaleGenders(value){
    //count non males
    //remove one by one no male genders 
    //we cannot use forEach for this purpose bcz harsh 
    //bhaiya n btaya tha k vo jb remove kry ga items ko to
    //index shifting ki vjha se element miss ho jayeingy 
var count= 0;
value.forEach(function(elem){
    if(elem.gender !== 'male') count ++;
})
    for(var i=0;i<count;i++){
        for(var j=0;j<value.length;j++){
            if(value[j].gender !=='male'){
                value.splice(j,1)
            }
        }
    }
    return console.log(value)
}
removeFemaleGenders(arrayOfObjects)

//problem 14 write a js function to clone an array
//first method
function cloneArr(value){
    var newArr=[...value]
    console.log(newArr)
}
cloneArr([1,2,3,4])

//2nd method
function cloneAnArray(value){
    var newArr= []
    value.forEach(function(elem){
        newArr.push(elem)
    })
    return console.log(newArr)
}
cloneAnArray([1,3,5,6,7,8])

//3rd method   we can also do it by using map 
//like newarray.map(...code)

//problem 15 write a js function which returns type of any
//any arguments which will passed in it
function typeTeller(value){
    if(Array.isArray(value)) console.log("Array")
    else console.log(typeof(value))
}
typeTeller(['waleed'])

//problem 15 write a js function to get the 
//first elem of array. Passing a parameter 'n' 
//will return the first n elemenets of an array

function returnElements(arr,n=1){
    var res = arr.splice(0,n)
    console.log(res)
}
returnElements([1,2,3,4,5,6,7,8,9],6)

//an other posibilty is we can use for loop for this
//thk h bhaiyo


//problem 16 print the last n elements of an array

function returnLastElements(arr,n){
    for(var i=0;i<n;i++){
        console.log(arr[arr.length-1-i])
    }
}
returnLastElements([1,2,4,5],2)

//problem 17 write a js function to find the 
//most frequent item of an array

function findFreqElem(value){
   var freq = {};
   value.forEach(elem=>{
      if(freq.hasOwnProperty(elem)) freq[elem] ++;
      else freq[elem]=1;
   })
   var res = Object.keys(freq).reduce((acc,next)=>{
    return freq[acc] > freq[next] ? acc : next
   })
   console.log(res)
}
findFreqElem([1,2,3,4,3,3,5,2,7,"waleed","ali","ali","ali","ali"])

//problem 18 write a js function to shuffle an array

function shuffleArray(value){
    var shuffleArea = value.length
  while(shuffleArea>0){
    shuffleArea--
    var indexToBeChanged = Math.floor(Math.random()*shuffleArea)
    var temp = value[shuffleArea]
    value[shuffleArea]= value[indexToBeChanged]
    value[indexToBeChanged]  = temp
  }
  console.log(value)
}
shuffleArray([1,2,3,4,5])

//problem 19 write a javascript function to compute the union of 
//two arrays

function union(arr1,arr2){
    console.log([...new Set(arr1.concat(arr2))])
}
union([1,2,3,4,5],[2,4,6,7])
