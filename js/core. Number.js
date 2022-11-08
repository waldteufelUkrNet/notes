//Метод num.toFixed(n) – округлення числа до заданої точності, повертає рядок:
  let n = 12.345;
  console.log( n.toFixed(2) );  // "12.35"
  console.log( n.toFixed(0) );  // "12"
  console.log( n.toFixed(5) );  // "12.34500"
  console.log( +n.toFixed(5) ); // 12.34500


// До методів чисел можна звертатися напряму, але після цілого числа потрібно
// ставити додаткову крапку або пробіл:
  console.log( 12.34.toFixed(1) ); // 12.3
  console.log( 12 .toFixed(1) );   // 12.0
  console.log( 12..toFixed(1) );   // 12.0
  console.log( (12).toFixed(1) );  // дужки теж допустимі
  console.log( 6.35.toFixed(1) );  // 6.3 !!! через безкінечність дробу у
                                   // двійковій системі втрачається точність


// Функція isFinite(n) - перевірка на не NaN/Infinity/-Infinity
// (перевірка на справжні числа і відсіювання спецзначень):
  console.log( isFinite(1) );        // true
  console.log( isFinite("1") );      // true
  console.log( isFinite("str") );    // false
  console.log( isFinite(Infinity) ); // false
  console.log( isFinite(NaN) );      // false


// Перевірка на NaN:
// 1. Метод isNaN() – перетворює аргумент в число і повертає true, якщо NaN:
  let n = 0 / 0;
  console.log( isNaN(n) );     // true
  console.log( isNaN("12") );  // false
  console.log( isNaN("str") ); // true

// 2. Якщо число не рівне саме собі, то воно NaN (NaN не рівне нічому і собі
// теж. Будь-яка операція з NaN повертає NaN):
  let n = 0 / 0;
  if (n !== n) console.log( 'n = NaN!' );


// Порожній рядок, рядок з пробілів будуть перетворені в 0, тому вважатимуться
// числами. false, true, null також будуть вважатися числами. Якщо потрібна
// чітка перевірка на не число, замість isNaN() потрібно використовувати функцію
// isNumeric():

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

// Метод num.toString(n) - переведення з 10-ї, 8-ї, 16-ї систем числення в іншу
// (від 2 до 36), повертає рядок:
  console.log( 255..toString(16) );        // ff
  console.log( 4..toString(2) );           // 100
  console.log( 1234567890..toString(36) ); // kf12oi


// Побітове або ^ відкине дробову частину:
  console.log( 12,3^0 );      // 12
  console.log( 1,2 + 2,3^0 ); // 3 !!! пріоритет у ^ менше, ніж у +


// Округлення до заданої точності (точніше, ніж num.toFixed(n)):
  Math.round(n*10)/10;


// Math.floor – округлення вниз:
  console.log( Math.floor(3.1) );   // 3
  console.log ( Math.floor(-1.2) ); // -2


// Math.ceil - округлення вверх:
  console.log( Math.ceil(3.1) ); // 4


// Math.round – округлення до ближнього цілого:
  console.log( Math.round(3.1) ); // 3

// Math.pow(x, exp) - підносить число в степінь, повертає x^exp:
  console.log(Math.pow(2,3) );     // 8
  console.log(Math.pow(4, -1/2) ); // 0.5


  Math.trunc(x)        // видалення дробової частини без округлення
  Math.acos(x)         // повертає арккосинус x (в радіанах)
  Math.asin(x)         // повертає арксинус x (в радіанах)
  Math.atan(x)         // повертає арктангенс x (в радіанах)
  Math.atan2(y, x)     // повертає кут до крапки (y, x)
  Math.sin(x)          // розраховує синус x
  Math.cos(x)          // розраховує косинус x
  Math.tan(x)          // повертає тангенс x
  Math.sqrt(x)         // повертає квадратний корінь x
  Math.log(x)          // повертає натуральний (по основі e) логарифм x
  Math.abs(x)          // повертає абсолютне значення числа
  Math.exp(x)          // повертає ex, де e – основа натуральних логарифмів
  Math.max(a, b, c...) // повертає найбільший зі списку аргументів
  Math.min(a, b, c...) // повертає найменший зі списку аргументів
  Math.random()        // повертає псевдовипадкове число в інтервалі [0,1) –
                       // тобто між 0 (включно) и 1 (не включно). Генератор
                       // випадкових чисел ініціюється поточним часом.


// toLocaleString() - для красивого виводу чисел в стандарті ECMA 402:
  let number = 123456789;
  console.log( number.toLocaleString() ); // 123 456 789


function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}




// подання числа у експоненційній формі
console.log(12.67.toExponential(4)); // 1.2670e+1

console.log(12.67.toPrecision(3)); // 12.7