

// 001

/* CORRECT CODE: */

const inp1 = [-5.5, -70032, 9.9, 10, 10.1, 128, 10, 10.5];

function checkIfTen(input) {
  console.log(`Checking ${input} ...`);
  return input > 10 ? 'Greater than 10' : input === 10 ? 'Equal to 10' : 'Less than 10';
}

inp1.forEach(num => console.log(checkIfTen(num)));

// 002

/* CORRECT CODE: */

const inp2 = [-9, -102, 77, 444444, 0, 1, 20, 105, 20007];

function dividibleBy3(input) {
  console.log(`Checking ${input} ...`);
  return input % 9 === 0 ? 'Dividible by 9'  :  input % 3 === 0 ? 'Dividible by 3' : 'Not dividible by 3'
}

inp2.forEach(num => console.log(dividibleBy3(num)));

// 003

/* CORRECT CODE: */

const inp3 = [-5.5, -70032, 0, 21, 22, 128, -10.5, 0];

function checkIfPositive(input) {
  console.log(`Checking ${input} ...`);
  return input > 0 ? 'Positive' : input < 0 ? 'Negative' : 'Zero';
}

inp3.forEach(num => console.log(checkIfPositive(num)));

// 004

/* CORRECT CODE: */

const inp4 = ['yellow', 'Orange', 'LightBlue', 'red', 'black', 'GRAY', 'green', 'purple'];
const warm = ['yellow','orange','red','orangered','brown','pink'];
const cool = ['ligtgreen','green','aquamarine','turquoise','lightblue','blue','purple'];
const neutral = ['white','lightgray','lightgrey','gray','grey','black'];

function warmOrCool(input) {
  console.log(`Checking ${input} ...`);
  let inp = input.toLowerCase();
  return warm.includes(inp) ? 'warm' : cool.includes(inp) ? 'cool' : 'neutral';
}

inp4.forEach(color => console.log(warmOrCool(color)));

// 005

/* CORRECT CODE: */

const inp5 = ['avoCADO', 'Grapes', 'WaterMelon', 'bread', 'pumpkin', 'pepper', 'EGGS', 'GRAPES', 'onion'];
const fruit = ['orange','lemon','melon','watermelon','grapes','strawberry','avocado'];
const vegetable = ['eggplant','onion','tomato','cucumber','pepper','squash','pumpkin'];

function fruitOrVegetable(input) {
  console.log(`Checking ${input} ...`);
  let inp = input.toLowerCase();
  return fruit.includes(inp) ? 'fruit' : vegetable.includes(inp) ? 'vegetable' 
                                       : 'not a fruit and not a vegetable';
}

inp5.forEach(food => console.log(fruitOrVegetable(food)));

// 006

/* CORRECT CODE: */

console.log(0);

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3)
        },300)
    },200)
},400);

console.log(4);

// right answer: 0, 4, 1, 2, 3

// 007

/* CORRECT CODE: */

console.log(`q7:`,1);

setTimeout(() => {
    console.log(`q7:`,2);
}, 100);

console.log(`q7:`,3);

setTimeout(() => {
    console.log(`q7:`,4);
}, 50);

console.log(`q7:`,5);

// right answer: 1,3,5,4,2

// 008

/* CORRECT CODE: */

console.log(`q8:`,1);

setTimeout(() => {
    console.log(`q8:`,2);
}, 0);

console.log(`q8:`,3);

setTimeout(() => {
    console.log(`q8:`,4);
}, 100);

console.log(`q8:`,5);

// right answer: 1,3,5,2,4

// 009

/* CORRECT CODE: */

console.log(`q9:`,1);

setTimeout(() => {
    
    setTimeout(() => {
        console.log(`q9:`,2);
    }, 400);
    
    console.log(`q9:`,3);
    
    setTimeout(() => {
        console.log(`q9:`,4);
    }, 100);
    
},400)

console.log(`q9:`,5);

// right answer: 1,5,3,4,2

// 010

/* CORRECT CODE: */

let n1 = 77;

function doubleTimeout(n) {
    console.log(`Starting from ${n} ...`);
    setTimeout(() => {
        n *= 2;
        console.log(n);
        setTimeout(() => {
            n *= 3;
            console.log(n);
        },3000);
    },2000);

}

doubleTimeout(n1);

// 011

/* CORRECT CODE: */

function nestedTimeout() {
    
    setTimeout(() => {
        console.log('Howdy!');
        setTimeout(() => {
            console.log('World!');
        },1500);
    },2500);

}

nestedTimeout();

// 012

/* CORRECT CODE: */

const btnStop12 = document.querySelector('#q012 > .btn');
let timerId12;

function onDocLoad12() {
  timerId12 = setTimeout(() => {

    btnStop12.classList.add('orange');
    timerId12 = setTimeout(() => {

      btnStop12.classList.replace('orange','blue');

    }, 2000)
  }, 5000)
}

document.addEventListener('DOMContentLoaded',onDocLoad12);
btnStop12.addEventListener('click',() => {clearTimeout(timerId12)});

// 013

/* CORRECT CODE: */

const btnStop13 = document.querySelector('#q013 > .btn');
let timerId13;

function onDocLoad13() {
  timerId13 = setTimeout(() => {

    btnStop13.classList.add('monospace');
    timerId13 = setTimeout(() => {

      btnStop13.classList.replace('monospace','times-new-roman');
      timerId13 = setTimeout(() => {
          
          btnStop13.classList.remove('times-new-roman');

      },2500)

    }, 2500)
  }, 4500)
}

document.addEventListener('DOMContentLoaded',onDocLoad13);
btnStop13.addEventListener('click',() => {clearTimeout(timerId13)});

// 14

/* CORRECT CODE: */

const flowers = ['rose','forget-me-not','tulip','iris','sunflower'];

function prettyFlower(flower) {
  console.log(`Here is your pretty ${flower}`)
}

function uglyFlower(flower) {
  console.log(`Here is your ugly ${flower}`)
}

function getFlower(callback) {
  console.log("Wait a second for the surprize ...")
  setTimeout(() => {
    let ix = Math.floor(Math.random() * flowers.length);
    callback(flowers[ix]);
  },1000)
}

getFlower(prettyFlower)
getFlower(uglyFlower)

// 15

/* CORRECT CODE: */

const presents = ['free delivery','rubber duck','10 sheq for the next purchase','colorful catalog']

function nextMonth(present) {
  console.log(`In the next month you'll get ${present}`)
}

function givePresent(present) {
  console.log(`Please, get from us ${present}`)
}

function orderInInternetShop(present,callback) {
  console.log("Thanks, we've got your order");
  setTimeout(() => {
    console.log("Your order is ready, sorry for the delay,");
    callback(present);
  })
}

presents.forEach(pre => {
  orderInInternetShop(pre,nextMonth);
  orderInInternetShop(pre,givePresent);
})

// 16

/* CORRECT CODE: */

const numAr = [2, 5, 10, 3, 4]

function waitMoreHours(num) {
  console.log(`You can wait ${num} hours more`)
}

function waitMoreMinutes(num) {
  console.log(`You can wait ${num} minutes more`)
}

function waitMoreSeconds(num) {
  console.log(`You can wait ${num} seconds more`)
}

function queueAtADentist(num,callback) {
  console.log("Welcome to the queue at the Dentist's");
  setTimeout(() => {
    console.log(`You've already waited for so long,`)
    callback(num);
  })
}

numAr.forEach(n => {
    queueAtADentist(n,waitMoreHours);
    queueAtADentist(n,waitMoreMinutes);
    queueAtADentist(n,waitMoreSeconds);
})

// 17

/* CORRECT CODE: */

const fruits = ['apple', 'Banana', 'APple', 'kiwi', 'pineapple'];

const filteredFruits = fruits.filter(fruit => /apple/i.test(fruit));
console.log(filteredFruits);

// 18

/* CORRECT CODE: */

const countries = ['usa', 'netherlands', 'jAPAN', 'BRazIL', 'israel', 'czech republic'];

const capitalizedCountries = countries.map(country => {
      return /(an|il|el|ic)$/i.test(country)
      ? country.split(' ').map(c => c[0].toUpperCase() + c.slice(1).toLowerCase()).join(' ')
      : country;
    })
    console.log(capitalizedCountries);

// 19

/* CORRECT CODE: */

const vehicles = ['Car', 'bicycle', 'Carrot', 'motorcycle', 'raceCAR'];

const filteredVehicles = vehicles.filter(vehicle => /car/i.test(vehicle));
console.log(filteredVehicles);

// 20

/* CORRECT CODE: */

const words = ['Hello', 'Good', 'Morning', 'World', 'O-lala','Ai!'];

const replacedWords = words.map(word => word.replace(/[oi]/ig, 'X'));
console.log(replacedWords);

// 21 

/* CORRECT CODE: */

const verbs = ['Running', 'Swimming', 'Eating', 'jumpING', 'Playing Bingo'];

const filteredAndTransformed = verbs.filter(verb => /ing$/i.test(verb)).map(verb => verb.toLowerCase());
console.log(filteredAndTransformed);

// 22

/* CORRECT CODE: */

const phones = ['053-456-66-77', '055-123-23-23', '055-555-5555', '09-678-6789'];

const hiddenPhones = phones.map(ph => ph.replace(/\d/g,'*'));
console.log(hiddenPhones);

// 23

/* RIGHT ANSWER: Infinite loop */

// 24

/* RIGHT ANSWER: The starting point or condition where the function returns without a recursive call */

// 25

/* RIGHT ANSWER: The point at which the recursion stops */

// 26

/* RIGHT ANSWER: Recursion can lead to infinite loops if not implemented correctly */

// 27

/* RIGHT ANSWER: 120 */

// 28

/* RIGHT ANSWER: To define the terminating condition. */

// 29

/* RIGHT ANSWER: function sum(n) {
    if (n <= 1) return 1;
      else return n + sum(n - 1);
   } */

// 30

/* RIGHT ANSWER: All of the mentioned functions can be implemented using recursion */

// 31

/* RIGHT ANSWER: The condition that stops the recursion */

// 32

/* RIGHT ANSWER: When a function calls itself */

// 33

/* CORRECT CODE: */

let reg33 = /.(jpg|png|pdf)/

// 34

/* CORRECT CODE: */

let reg34 = /http(s:|:)\/\//

// 35

/* CORRECT CODE: */

const str35 = ['sour','SWEET','aMAZING','OBVIOUS','Awesome','usual','Imaginative','Real']

function startsWithVowel(str) {
  return /^[aeiou]/i.test(str)
}

str35.forEach(str => console.log(startsWithVowel(str)));

// 36

/* CORRECT CODE: */

const str36 = ['sour','SWEET','aMAZING','OBVIOUS','Awesome','usual','Imaginative','Real']

function endsWithLowerCase(str) {
  return /[a-z]$/.test(str)
}

str36.forEach(str => console.log(endsWithLowerCase(str)));

// 37

/* CORRECT CODE: */

const str37 = ['sour','SWEET','aMAZING','OBVIOUS','Awesome','usual','Imaginative','Real']

function startsWithCapital(str) {
  return /^[A-Z]/.test(str)
}

str37.forEach(str => console.log(startsWithCapital(str)));

// 38

/* CORRECT CODE: */

const str38 = ['Nice','4u','precious','&%*',' -','555-5555','','w0nder']

function containsDigits(str) {
  return /\d/.test(str)
}

str38.forEach(str => console.log(containsDigits(str)));

// 39

/* CORRECT CODE: */

const str39 = ['Nice','4u','precious','&%*',' -','555-5555','','w0nder']

function onlyLowerCaseLetters(str) {
  return !/[^a-z]/.test(str)
}

str39.forEach(str => console.log(onlyLowerCaseLetters(str)));

// 40

/* CORRECT CODE: */

let reg40 = /(apple|banana)/i

// 41

/* CORRECT CODE: */

let reg41 = /(^cat|dog$)/

// 42

/* CORRECT CODE: */

const regex42 = /[^A-Z]/;
const str42 = 'HELLO';
console.log(!regex42.test(str42));

// 43

/* CORRECT CODE: */

const regex43 = /t$/;
const str43 = 'let';
console.log(regex43.test(str43));

// 44

/* CORRECT CODE: */

const regex44 = /^A/;
const str44 = 'Apple';
console.log(regex44.test(str44));

// 45

/* CORRECT CODE: */

let regex45 = /[\d]/g;
let str45 = `The old price is 45 sheq, the new price is 44.99 sheq`;
str45 = str45.replace(regex45,'$');
console.log(str45);

// 46

/* CORRECT CODE: */

let regex46 = /[aeiou]/g;
let str46 = `Ashdod is a beautiful white city on Mediterranean sea.`;
console.log(str46.replace(regex46,'*'));

// 47

/* CORRECT CODE: */

let str47 = `The main function of a bow is to send an arrow onto a target,
but what if you have no more ARROWS?`;
console.log(str47.replace(/(bow|arrow)/ig,'action'));

// 48

/* CORRECT CODE: */

const str48_first = ['Or Python or JavaScript','JavaScript is a powerful language',
'JS is developing and advancing','I like JS'];
const str48_second = ['Or Python or JavaScript','JAVASCRIPT is a powerful language',
'JS is developing and advancing','I like JS'];

function checkIfAnyBeginsWithJavaScript(ar) {
  let regexp48 = new RegExp("^JavaScript");
  return ar.some(str => regexp48.test(str));
}

console.log(checkIfAnyBeginsWithJavaScript(str48_first));
console.log(checkIfAnyBeginsWithJavaScript(str48_second));

// 49

/* CORRECT CODE: */

class Rectangle49 {
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }

  perimeter() {
    return 2 * this.width + 2 * this.height;
  }
}

// To check the code:
setTimeout(() => {

  const r = new Rectangle49(4,5);
  console.log(`perimeter: ${r.perimeter()}`);

},7000)

// 50

/* CORRECT CODE: */
class Rectangle50 {
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }

  perimeter(){
    return 2 * this.width + 2 * this.height;
  }

  area(){
    return this.width * this.height;
  } 
}

const rec50 = new Rectangle50(5,10);
console.log(rec50.area());

// 51

/* CORRECT CODE: */
class Rectangle51 {
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }

  area(){
    return this.width * this.height;
  } 
}

// 52

/* CORRECT CODE: */
class Circle52 {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea(){
    return Math.PI * this.radius ** 2;
  } 

}

const myCircle52 = new Circle52(5);
const area52 = myCircle52.calculateArea();
console.log(area52);

// 53

/* CORRECT CODE: */
class Person53 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce(){
    console.log(`Hi, my name is ${this.name} 
    and I am ${this.age} years old.`)
  } 

}

const myPerson53 = new Person53('Alice',25);
myPerson53.introduce();

// 54

/* CORRECT CODE: */
class Animal54 {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound(){
    console.log(`The ${this.name} says ${this.sound}`)
  } 

}

const myAnimal54 = new Animal54('Lion','roar');
myAnimal54.makeSound();

// 55

/* CORRECT CODE: */
class Circle55 {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea(){
    return Math.PI * this.radius ** 2;
  } 

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

}

class Cylinder55 extends Circle55 {
  constructor(radius,height) {
    super(radius);
    this.height = height;
  }

  calculateArea() {
    return 2 * super.calculateArea() + this.height * super.perimeter();
  }

  calculateVolume() {
    return Math.PI * this.radius**2 * this.height;
  }

}

const myCylinder55 = new Cylinder55(3,5);
console.log(`Area: ${myCylinder55.calculateArea()}`)
console.log(`Volume: ${myCylinder55.calculateVolume()}`)

// 56

/* CORRECT CODE: */
class Rectangle56 {
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square56 extends Rectangle56 {
  constructor(width) {
    super(width,width);
  }
  calculatePerimeter() { return this.width * 4}
}

const mySquare56 = new Square56(5);
console.log(mySquare56.calculateArea());
console.log(mySquare56.calculatePerimeter());

// 57

/* CORRECT CODE: */
class Animal57 {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`The animal named ${this.name} is ${this.age} years old`)
  }

}

class Dog57 extends Animal57 {
  constructor(name,age) {
    super(name,age);
  }

  bark() {'Whooof!'}

}

// 58

/* CORRECT CODE: */

const lightBulb58 = {
  
  powerWatt: 60,
  voltage: 230,
  /* Method of an object should not be an arrow function,
  as it's "this" would point to the global object */
  showCharacteristics: function() {
    console.log(`Light bulb power: ${this.powerWatt},
    potential: ${this.voltage}V`)
  }
  
}

lightBulb58.showCharacteristics();

// 59

/* CORRECT CODE: */

class Rectangle59 {
  
  constructor(w,h) {
    this.width = w;
    this.height = h;
  }
  
  area() {
    return this.width * this.height;
  }
  
}

class Square59 extends Rectangle59 {
  
  constructor(width) {
    super(width,width);
    this.side = width;
  }
  
  area() {
    return this.side ** 2;
  }
}

// Just to check
const s = new Square59(6);
console.log(`area: ${s.area()}`);

// 60

/* CORRECT CODE: */

const todayTravel60 = {
  
  from: ['Raanana','Kfar-Saba'],
  to: ['Kfar-saba','Raanana'],
  distanceKm: [6,6],
  timeHour: [0.9,0.8],
  /* Method of an object should not be an arrow function,
  as it's "this" would point to the global object */
  avgSpeed: function() {
    
    let totalDistance = this.distanceKm.reduce((tot,dist) => tot+dist);
    let totalTime = this.timeHour.reduce((tot,time) => tot+time);
    return (totalDistance/totalTime).toFixed(1);
  }
  
}

console.log(`avg speed: ${todayTravel60.avgSpeed()}`);

// 61

/* CORRECT CODE: */

let seconds61 = 0;

const intervalId61 = setInterval(() => {
  
  console.log(`sec:`,++seconds61);
  if (seconds61 >= 16) clearInterval(intervalId61);
  
}, 1000);

// 62

/* CORRECT CODE: */

let count62 = 5;

const intervalId62 = setInterval(() => {
  console.log(count62--);

  if (count62 <= 0) {
    console.log('Boom!');
    clearInterval(intervalId62);
  }
}, 1000);

// 63

/* CORRECT CODE: */

let sec63 = 0;

const intervalId63 = setInterval(() => {

  sec63 += 3;
  console.log(`Hello, world! (sec: ${sec63})`);

  if (sec63 >= 9) clearInterval(intervalId63);

}, 3000);

// 64

/* CORRECT CODE: */

let intervalId64 = setInterval(() => {

  console.log(`Hello, world, again!`);

}, 3000);

setTimeout(() => {
  clearInterval(intervalId64);
},9000)

// 65

/* CORRECT CODE: */

function startTimeouts() {
  let myTimeouts = [];
  
  function printHelloWorld() {
    console.log('Hello, World!');
  }

  function schedulePrint(delay) {
      return setTimeout(printHelloWorld, delay);
  }
  
  function clearAllTimeouts() {
      myTimeouts.forEach(timeout => clearTimeout(timeout));
  }

  for (let i = 1; i <= 5; i++) {
      const timeoutId = schedulePrint(i * 1000); 
      // multiplying by 1000 to convert seconds to milliseconds
      myTimeouts.push(timeoutId);
    }
    
    setTimeout(clearAllTimeouts, 5000);
  }
  
  startTimeouts();
// 66
  
/* CORRECT CODE: */

const fruits66 = ['banana','grapes','avocado','pineapple','apple','orange','lemon']
function fruitIntervals(ar) {
  let ix = 0;

  let intervalId66 = setInterval(() => {

    console.log(`fruit[${ix}]: ${ar[ix]}`);
    ix++;
    if (ix >= ar.length) clearInterval(intervalId66);

  },1000)
}

fruitIntervals(fruits66);

// 67

/* RIGHT ANSWER: || */

// 68

/* RIGHT ANSWER: 'Yes' */

// 69

/* RIGHT ANSWER: class */

// 70

/* RIGHT ANSWER: constructor() {} */

// 71

/* RIGHT ANSWER: [...arr] */

// 72

/* RIGHT ANSWER: [1,2,3,4,5] */

// 73

/* CORRECT CODE */

const arr731 = [1, 2, 3];
const arr732 = [...arr731];
console.log(arr732);

// 74

/* CORRECT CODE */

function sum74(...args) {
  return args.reduce((sum,arg) => sum + arg);
}

console.log(`sum74(5,46,7) = `,sum74(5,46,7));
console.log(`sum74(-3,11,29,0.1,3.5) = `,sum74(-3,11,29,0.1,3.5));

// 75

/* CORRECT CODE */

function concat75(...args) {
  return args.reduce((str,arg) => {return str+arg},'')
}

console.log(`concat75('Bye-bye',',','alligator') = `,concat75('Bye-bye',',','alligator'));
console.log(`concat75('You ','and ','me',' - ','we ') = `,concat75('You ','and ','me',' - ','we '));

// 76

/* CORRECT CODE */

function multipl76(...args) {
  return args.reduce((res,arg) => {
    return arg === 0 ? res : res*arg
  },1)
}

console.log(`multipl76(7,8,9,0) = `,multipl76(7,8,9,0));
console.log(`multipl76(-1,0.5,20,23,7) = `,multipl76(-1,0.5,20,23,7));

// 77

/* CORRECT CODE */

const person77 = { firstName77: 'John', lastName77: 'Doe', age77: 30 };

const { firstName77, lastName77 } = person77;

// 78

/* CORRECT CODE */

let a = 5; 
let b = 8;

[a, b] = [b, a]

console.log(`a = ${a}, b = ${b}`)

// 79

/* CORRECT CODE */

const person79 = { name79: 'John', age79: 25, profession79: 'developer' }

const { name79, profession79, age79 } = person79;

// 80

/* CORRECT CODE */

let a80 = 4, b80 = 9, c80 = 7;

let maxNum = a80 >= b80 && a80 >= c80 ? a80 
: b80 >= a80 && b80 >= c80 ? b80 : c80; 

// the option with less comparisons, but the result may be less readable:
// let maxNum80 = a80 > b80 ? (a80 > c80 ? a80 : c80) : (b80 > c80 ? b80 : c80);

// 81

/* CORRECT CODE */

const persons81 = [
  {name:'Dani',age:'11',hasDrivingLicense:false},
  {name:'Dvora',age:'20',hasDrivingLicense:false},
  {name:'Romi',age:'16',hasDrivingLicense:false},
  {name:'Bracha',age:'101',hasDrivingLicense:true},
]

persons81.forEach((p,ix) => {
  persons81[ix].recommendation = p.age < 16 
  ? 'You cannot drive, baby' : p.hasDrivingLicense
  ? 'Drive as you wish!' : 'Go learn driving!';
})

// 82

/* CORRECT CODE */

const colors82 = ['red','green','red','yellow','yellow','red','white','white']

colors82.forEach((color,ix) => {
  colors82[ix] = color === 'red' ? 'purple' : color === 'white'
      ? 'lightblue' : color === 'green' ? 'turqouise' : 'green';
})

// 83

/* CORRECT CODE */

function countdown83(n) {
  
  let cnt = n;
  console.log(`cnt = ${cnt}`)
  
  function t () {
    if (cnt > 1)
    setTimeout(() => {
  cnt--;
  console.log(`cnt = ${cnt}`)
  t();
},1000)
}

t();

}

countdown83(15);

// 84

/* CORRECT CODE */

const showSeconds = document.querySelector('#q084  .seconds > div');
const showChamshir = document.querySelector('#q084  .chamshir > div');
const rows84 = ['היא חיכתה שם יפהפיה','כל כולה אומרת פנויה',
'קרובה, מרגשת','שהחלטתי לגשת','ולתפוס לי מיד חניה']

let sec = 0, ix = 0;
showSeconds.innerText = sec;

let intervalId84 = setInterval(() => {
  sec++;
  showSeconds.innerText = sec;
  showChamshir.innerText += rows84[ix] + '\n';
  ix = ix >= rows84.length - 1 ? 0 : ix+1;
},1000);

setTimeout(() => {
  clearInterval(intervalId84);
},7000)

// 85

/* RIGHT ANSWER: Each answer is right */

// 86

const ar86 =  ['A cat','The Dog','%new name%','The % of them is big','Big Bang']
console.log(ar86.map(str => /^[%?A-C]/.test(str)).join(','))   

/* RIGHT ANSWER: true,false,true,false,true */

// 87

const ar87 = ['A Cat','The Dog','%Cat And Mouse%','The % Of Them Is Big','Big Bang']
let reg87 = /[A\-D]/
console.log(ar87.map(str => reg87.test(str)).join(','))   

/* RIGHT ANSWER: true,true,true,false,false */

// 88

/* CORRECT CODE */

function factorial88(n) {

  if (n === 0) return 1;

  return n * factorial88(n-1);

}

console.log(`factorial: `,factorial88(7));
console.log(`factorial: `,factorial88(0));
console.log(`factorial: `,factorial88(1));

// 89

/* CORRECT CODE */

function countdown89(n) {

  if (n <= 1) return console.log(n);

  console.log(n);
  countdown89(n-1);
}

console.log(`countdown: `);
countdown89(7);
console.log(`countdown: `);
countdown89(1);

// 90

/* CORRECT CODE */

class Car90 {
  constructor(brand,model) {
    this.brand = brand;
    this.model = model;
  }

  getFullDescription() {
    return `This is ${this.brand}, model: ${this.model}`
  }
}

// 91

/* CORRECT CODE */

class Person91 {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}

const person91 = new Person91('John',25);

// 92

/* RIGHT ANSWER: both a && b */

// 93

/* RIGHT ANSWER: ^ */

// 94

/* CORRECT CODE */

let reg94 = new RegExp(/^\s|\s$/)

// 95

/* CORRECT CODE */

let reg95 = RegExp(/^a|t$/,"i")

// 96

/* CORRECT CODE */

const btnStop96 = document.querySelector('#q096 .btn');
const showSmileys96 = document.querySelector('#q096 .smileys > div');
let timerId96 = setInterval(() => {
  showSmileys96.innerText += '😃';
},2500)

btnStop96.addEventListener('click',() => {clearInterval(timerId96)});

// 97

/* RIGHT ANSWER: Setting a delay (in milliseconds) and executing a function repeatedly. */

// 98

/* CORRECT CODE */

const arr98 = [1, 2, 3];
const newArr98 = [...arr98, 4];
console.log('newArr98: \n',newArr98);

// 99

/* CORRECT CODE */

const arr991 = [1, 2];
const arr992 = [3, 4];
const newArr99 = [...arr991, ...arr992];
console.log('newArr99: \n', newArr99);

// 100

/* CORRECT CODE */

const grapes100 = {color:'white',taste:'very sweet',weightKg: 34};
const newGrapes100 = {...grapes100};
console.log('newGrapes100: \n', newGrapes100);

// 101

/* CORRECT CODE */

const arr101 = [1, 2, [3, 4, ['five', 'six']]];
const [,two,[,,[,six]]] = arr101;

console.log(six)
console.log(two)

// 102

/* CORRECT CODE */

const person102 = {
  name: 'John Doe',
  age: 30
};

const {name102, age102} = person102;

// 103

/* CORRECT CODE */

const arr103 = [1, 2, 3, 4];

const [var1031,...arr1032] = arr103;

// 104

/* CORRECT CODE */

const [fruit1041,fruit1042,...remainingFruits104] = ['apple', 'banana', 'orange', 'grape'];

// 105

/* CORRECT CODE */

const [firstName105, lastName105, age105] = ['John', 'Doe', 30];

// 106

/* CORRECT CODE */

const ar106 = ['apple', 'banana', 'orange'] 
const obj106 = {greenFruit:'avocado',
               yellowFruit:'lemon',
               orangeFruit: 'persimmon'}
const [greenFruit, yellowFruit, orangeFruit] = ar106; 
const {greenFruit : greenFruit2, yellowFruit : yellowFruit2, 
       orangeFruit : orangeFruit2} = obj106; 



