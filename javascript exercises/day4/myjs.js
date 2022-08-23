// let day = prompt('What day is today ?')

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is Friday')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day.')
// }


// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }

// let num = prompt('enter numer');

// if (num%2==0)
// console.log(`${num} is even number`)
// else

// console.log(`${num} is odd number`)

// let score = Number(prompt("enter your score"));
// switch (true) {
//     case score > 80:
//         console.log("A");
//         break;
//     case score > 70:
//         console.log("B");
//         break;
//     case score > 60:
//         console.log("C");
//         break;
//     case score > 50:
//         console.log("D");
//         break;
//     case (score < 50):
//         console.log("F");
//         break;
//     default:
//         console.log("no score assigned")
// 



// let a = 'JavaScript' 
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b)


// let a = 10
// function hello(){
//     let a = 10
//     console.log(" local", a)

// }

// hello();
// console.log(" global", a)


// function letsLearnScope() {
//    gravity = 9.81
//     console.log( "gh",gravity)
//     if (true){
//     let gravity = 9.81
//         console.log(gravity) 
//       }
//       console.log(gravity)
  
//   }
 
//   letsLearnScope()
//   console.log( "gxkkk",gravity)
   
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))
// console.log(sum)


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)

// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)

// console.log(sum)


// const number = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(number.sort())


// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','Russia']
// let firstIndexPosRussiaExist = countries.findIndex(country => {
//   return country.includes("Russia")
// });
// console.log(firstIndexPosRussiaExist);

// // let firstCountry6Chars = countries.find(country => {
// //   return country.length === 6
// // });
// // console.log(firstCountry6Chars);

// // let firstIndexPosCountry6Chars = countries.findIndex(country => {
// //   return country.length === 6
// // });
// // console.log(firstIndexPosCountry6Chars);

// let isCountryIncludesLand = countries.some(country => {
//   return country.toLowerCase().includes("Norway")
// })
// console.log(isCountryIncludesLand);


// let isSomelength6 = countries.some(country => {
//   return country.length > 6;
// })
// console.log(isSomelength6)


// let joinCountries = countries.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// })
// console.log(joinCountries);


// const getStringList = (arr) => {
//   let nn = arr.filter(item => {
//       return typeof item === "string"
//   })
//   return nn;
// }

// let nn = getStringList(["victor", "hj", 5, "kenneth"]);
// console.log(nn);

// let countriesStartingWithE = countries.filter(country => {
//   return country[0] === "E";
// })
// console.log(countriesStartingWithE);

// const products = [{
//   product: 'banana',
//   price: 3
// },
// {
//   product: 'mango',
//   price: 6
// },
// {
//   product: 'potato',
//   price: ' '
// },
// {
//   product: 'avocado',
//   price: 8
// },
// {
//   product: 'coffee',
//   price: 10
// },
// {
//   product: 'tea',
//   price: ''
// }
// ]
// let totalPrice = products.map(product => {
//   return product.price;
// }).filter(price => {
//   return price > 0;
// }).reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// })
// console.log(totalPrice);

//  let sumOfProducts = products.reduce((accumulator, currentValue) => {
//      if (products.price > 0) {
//          return accumulator + currentValue.price
//      }
//  })
//  console.log(sumOfProducts);

//  const countriess = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'italy', 'spain', 'germany', 'portugal', 'england', 'netherland', 'belgium', 'france', 'nigeria', 'U.S.A'];

//  const categorizeCountries = (countriess) => {
//   let coun = countriess.filter(country => {
//       return country.toLowerCase().includes("ia") || country.toLowerCase().includes("land");
//   })
//   return coun;
// }
// console.log(categorizeCountries(countriess));
// s
// const getFirstTenCountries = (countriess) => {
//   let firstTen = [];
//   firstTen = countriess.map(country => {
//       return country;
//       })
//   return firstTen;
// }

// console.log(getFirstTenCountries(countriess));

// const companies = new Set()
// console.log(companies)
//  setInterval(0){}

let set = new Set();
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);


const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const sets = new Set(languages)
console.log(sets)

const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies)
let countries = ["nigeria", "U.S.A", "germany", "england", "italy"]
let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
// console.log(map.size)


