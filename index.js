// JavaScript
// ES5 va ES6
// ESMASCRIPT

// js 0 dan boshlan saniydi!

// console.log('Hello world!');
// alert("Nma Gap!")
// confirm('Frontendmi?')
// prompt('Ismini yoz!')
// console.log("O'zbekiston")

// var va let/const = o'zgaruvchi

// var eskirgan nega? XXX
// sababi u ES5 da ishlatilgan

// let/const ES6

// 2 ta proyekt
// bittasida ismimmi hohlagancha ozgartirsam boladi
// 2 chisida 1 qoyganimmi otmen qlomiman

// let ism = 'bobur';
// console.log(ism);

// ism = 'font-fayt';
// console.log(ism);

// const ism1 = 'bobur';
// console.log(ism1)

// ism1 = 'sardor';
// console.log(ism1);

// let yosh = prompt('yoshini yoz qotir!')
// alert(yosh)

// let sayt = prompt('saytga nom ber!')
// document.title = sayt

// let rang = prompt('inglizcha rang yoz')
// document.body.style.backgroundColor = rang

// data types - ma'lumot turlari
// 1. string - text/yozuvla = "" ''
// 2. number - son = 0987654321
// 3. boolean - true/false = ha/yoq

// 4. [] - array = ko'plikda
// 5. {} - object = bitta

// 6. null = 0
// 7. undefined = topilmadi

// 8. bigInt = 1920s
// 9. symbol = Symbol()(*&^%$#@!)

// JS da matematika
// let a = 10;
// let x = 9876543;
// let y = 100;

// let javob = a + x * y;
// console.log(javob);

// BMI
// let ves = 80;
// let boy = 1.8;
// let bmi = ves / (boy * boy);

// console.log(bmi);

// let bmi = prompt('bmi yoz?')

// if (bmi <= 19){
//     alert("sliwkom ozg'insan!")
//     document.body.style.backgroundColor = 'dodgerblue'
// } else if (bmi > 19 && bmi <= 25) {
//     alert("norm")
//     document.body.style.backgroundColor = 'pink'
// } else if (bmi > 25) {
//     alert("to'nka")
//     document.body.style.backgroundColor = 'black'
// } else {
//     alert("Error")
//     document.body.style.backgroundColor = 'red'
// }

// prompta yosh yozasila
// agar yosh 18 dan kichkina bosa klubga kiromasin
// aks holda 18 dan kotta va 40 dan kichik bosa kirsin
// aks holda 40 dan kotta bosa yosham o'tib qopti bosin
// mabodo error!

// operatorlar
// matematik - + * / = < > %
// arifmetik:
// ++(increment) +1
// --(decrement) -1
// && va
// || yoki
// >= <=

//  ==
// ===

// let son1 = 10
// let son2 = "10"

// console.log(son1 == son2);
// console.log(son1 === son2);

// function

function plusOne() {
  let son = 0;
  son++;
  console.log(son);
}

function hello() {
  console.log('hello');
}
hello();

function math() {
  let son1 = prompt('son birni yoz');
  let son2 = prompt('son ikkini yoz');

  const javob = son1 * son2;

  alert('Javob: ' + javob);
}

function plus() {
  let a = prompt('son yoz');
  let b = prompt('son yoz');
  const javob = Number(a) + Number(b);
  alert('Javob: ' + javob);
}


function minus() {
  let a1 = prompt('son yoz')
  let b1 = prompt('son yoz')
  const javob = Number(a1) - Number(b1)
  alert('Javob:' + javob)
}


function bolish() {
  let a2 = prompt('son yoz')
  let b2 = prompt('son yoz')
  const javob = Number(a2) / Number(b2)
  alert('Javob:' + javob)
}