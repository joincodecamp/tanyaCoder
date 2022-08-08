const firstName = "tanya"
const lastName = "kashyap"
const country = "india"
const city = "mohali"
const age = 20;
const isMarried = false;
const year = new Date().getFullYear();
console.log(year);

let vars = [firstName, lastName, country, city, age, isMarried, year];
vars.forEach(function (element) {
    console.log(typeof element);
});


let a = "10"
let b =10
let c = a===b
console.log(c)

console.log (parseInt('9.8')==10)

let z =10
let x= 5
let y =3
let A = z>x&&x>y
console.log(A)

console.log("5...")

console.log('1', 4>3)
console.log( '2',4>=3)
console.log('3',4<3)
console.log('4',4<=3)
console.log('5',4==4)
console.log('6',4===4)
console.log('77',4!=4)
console.log('7',4!==4)
console.log('8',4!="4")
console.log('9',4=="4")
console.log('10',4==="4")

let fst = "python"
let scd ="jargon"
let d =true
let r =console.log(fst.length)
 let  q = console.log(scd.length)
 console.log('falsy', r !== q)
let l = (r==q && !d)

console.log("falsyy: ",l)


let now = new Date()
console.log(now) 
console.log("year: ",now.getFullYear())
console.log( "month: ",now.getMonth())
console.log( "date: ",now.getDate())
console.log( "day: ",now.getDay())
console.log( "hour: ",now.getHours())



const Xmas95 = new Date('December 25, 1995 11:15:30');
const seconds = Xmas95.getSeconds();

console.log(seconds);


// level 2


// let base = Number(prompt("enter base of the triangle"));
// let height = Number(prompt("enter height of the triangle"));
// let area = 0.5 * base * height;
// console.log(`the area of the triangle is ${area}`);



// let sidea = Number(prompt("enter side a"));

// let sideb = Number(prompt("enter side b"));


// let sidec = Number(prompt("enter side c"));

// let perimeter = sidea+ sideb+ sidec;
// console.log(`perimeter is ${perimeter}`);


let my = 21
let your =18
let sum =my-your
console.log(`i am ${sum} years older than you`);


const now1= new Date('August 3, 2022') 
console.log('gg', now1.getTime());



let YYYMMDD = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`
console.log( "YYYMMDD: ",YYYMMDD)

let m = new Date()
m.setSeconds(2020)
console.log(m.getHours())

 
console.log(m)

