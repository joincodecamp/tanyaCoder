let value = "30 Days of Javascript "
console.log(value)
console.log("length: ", value.length)
console.log(value.toUpperCase())
console.log(value.toLowerCase())
console.log("substr: " ,value.substr(1,20))
console.log( "substring: " , value.substring(1,21))
console.log(" using slice" , value.slice(0,3))
console.log("include method" ,value.includes("Script"))
console.log('split', value.split())
console.log('array', value.split(' '));

let social ="facebook, google, apple, IBM, oracle, Amazon"
console.log("split array: ", social.split(","))

console.log("replace: " , value.replace('Javascript', 'Python'))
console.log("index avlue: ", value.charAt(15))
console.log("ASCII value: ", value.charCodeAt("J"))
console.log( " find position index value: ",value.indexOf('a'))
console.log(" last index value: ",value.lastIndexOf('a'))    

let sentence  =" You cannot end a sentence with because because because is a conjunction"
console.log( " find position index value: ",sentence.indexOf('because'))
console.log(" last index value: ",sentence.lastIndexOf('because'))
console.log(" search value: ", sentence.search("because"))   


trimvalue ="               30 days of javascript  "
console.log("trim use cut whitespace: ",trimvalue.trim(''))

console.log(" startwith(): ", value.startsWith('30 Days of Javascript')) 
console.log(" endwith(): ", value.endsWith('30 Days of Javascript')) 

let find = /a/gi

console.log(value.match('a'))
console.log( " find all a: ",value.match(find))

let string = '30 Days of'
console.log( "string concat: ",string.concat("JavaScript"))

console.log( " repeat: ",value.repeat(2))


// level2


console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log('1\t 1\t 2\t 2\n2\t 2\t 3\t 3\n1\t 1\t 2\t 2\n2\t 2\t 3\t 3\n')

let num = (Math.random () * 100)
console.log( "random value 1-100: ", num)

let num1 = Math.random() * (100 - 50) + 50;
console.log('random 50-100: ', num1)

let num2 = Math.random() * 225;
console.log('random 0-225: ', num2)



// let randomNum = Math.random()   
// let result = randomNum * 100

// console.log(result)
 let string1 = 'You cannot end a sentence with because because because is a conjunction'
console.log('slice out: ', string1.substring(31, 54));
 console.log( " find position index value: ",string1.indexOf('b'))
 console.log( " find position index value: ",string1.lastIndexOf('e'))
//  console.log( string1.slice)

 let n1 ="10"
 let n2 =10
//  let n3 = n1===n2
//  console.log(n3)
let n3 = parseInt('10')==10
console.log(n3)


// level 3

let set ="Love is the best thing in this world.Some found their love and some are still looking for their love"

console.log(set)
console.log(set.search('love'))




let number = prompt('Enter number')
console.log(number)











