// методи рядків не видозмінюють рядок, а повертають новий!
// '', "", ``
// `` - позначення багаторядкового рядка + можливість інтерполяції

// Інтерполяція:
  let apples  = 2,
      oranges = 3;
  console.log(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5



// Властивість str.length – повернення довжини рядка:
  console.log( "Hello!".length ); // 6


// Метод str.toUpperCase() – повернення рядку у верхньому регістрі:
  let hello = "Hello!";
  console.log( hello.toUpperCase() ); // "HELLO!"


// Метод str.toLowerCase() – повернення рядку у нижньому регістрі:
  console.log("Інтерфейс"[0].toLowerCase()); // 'і'


// str.charAt() – доступ до конкретного символу:
  let str = "jQuery";
  console.log( str.charAt(0) ); // "j"


// str[] – доступ до конкретного символу:
  let str = "Я - браузер!";
  console.log( str[0] ); // "Я"


// відмінність між charAt() та str[]:
  console.log( "".charAt(0) ); // пустий рядок
  console.log( "" [0] );       // undefined


// indexOf("xхх", n) – повертає позицію, на якій знаходиться підрядок ххх, або
// -1, якщо збігів не знайдено, n – не обов'язковий аргумент, який вказує з якої
// позиції починати шукати. Пошук регістрозалежний. Якщо "хxх" декілька, буде
// виведена позиція першого.
  let str = "Widget with id";
  console.log( str.indexOf("Widget") ); // 0
  console.log( str.indexOf("id") );     // 1
  console.log( str.indexOf("widget") ); // -1
  console.log( str.indexOf("id", 2) )   // 12


// lastIndexOf("xхх", n) – те саме, що і indexOf("xхх", n), тільки проводить
// пошук з кінця.
  let str = "Widget with id";
  console.log( str.lastIndexOf("id") )  // 12


// Перевірка на наявність шуканого:
// побітовий оператор не (~n) рівний нулю тільки тоді, коли n == -1, а -1 – це
// умова відсутності збігів. Тому якщо ~n==0, умова if не виконається.
  let str = "Widget";
  if (~str.indexOf("get")) {
    console.log('співпадіння є!' );
  }


// Пошук усіх співпадінь здійснюється через цикл:
  let str = "Ослик Иа-Иа посмотрел на виадук", // де шукаємо
      target = "Иа",                           // що шукаємо
      pos = 0;                                 // початкова позиція
  while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log( foundPos );                   // знайшли на цій позиції
    pos = foundPos + 1;                        // продовжуємо пошук з наступної
  }


// Метод substr (start, length) повертає підрядок з позиції start з довжиною у
// символах length. Якщо аргументу length нема – то до кінця. Приймає перший
// мінусовий аргумент — тоді відраховування позиції відбувається з кінця.

// Метод substring(start, end) повертає підрядок з позиції start включно до end
// не включно. Якщо аргументу end нема – то до кінця. Мінусові аргументи
// інтерпретуються в 0. Якщо перший аргумент більше другого, вони автоматично
// міняються місцями.

// Метод slice(start, end) повертає підрядок з позиції start включно до end не
// включно. Якщо аргументу end нема – то до кінця (аналогічно до
// substring(start, end), але додатково може приймати мінусові значення (щоб
// виводити значення з кінця рядку). Якщо перший аргумент більше другого —
// результатом буде пустий рядок.

  //       +  0  1  2  3  4  5  6  7  8  9 10 11
  let str = ' m  y  T  e  s  t  S  t  r  i  n  g';
  //       - 12 11 10  9  8  7  6  5  4  3  2  1

  console.log( str.substr(2,6) );     // 'TestSt'
  console.log( str.substr(-3,2) );    // 'in'

  console.log( str.substring(2,6) );  // 'Test'
  console.log( str.substring(6,2) );  // 'Test'
  console.log( str.substring(-6,2) ); // 'my'

  console.log( str.slice(2,6) );      // 'Test'
  console.log( str.slice(6,2) );      // ''
  console.log( str.slice(-1,-6) );    // ''
  console.log( str.slice (-6,-1) );   // 'Strin'


// String.fromCharCode(code) повертає символ Unicode
// (код -> буква):
  console.log( String.fromCharCode(65,66,67) ); // 'ABC'


// String.fromCodePoint(code) повертає символ Unicode, покращений варіант
// String.fromCharCode(code), працює коректно із сурогатними парами
// (код -> буква):
  console.log( String.fromCodePoint(65,66,67) ); // 'ABC'


// Метод str.charCodeAt(pos) повертає код Unicode-символу
// (буква -> код):
  console.log( "абрикос".charCodeAt(0) ); // 1072, код букви 'а'


// Метод str.CodePointAt(pos) повертає код Unicode-символу, покращений варіант
// str.charCodeAt(pos), працює коректно із сурогатними парами
// (буква -> код):
  console.log( "абрикос".charCodeAt(0) ); // 1072, код букви 'а'


// Метод str.localeCompare(str2) порівнює рядки не за лексикографічним
// порівнянням, а за алфавітним, коректним для конкретної мови. Повертає -1,
// якщо str1 < str2, 1, якщо str1 > str2 та 0, якщо вони рівні. Має два
// додаткові параметри: мова порівняння (за замовчуванням береться з оточення)
// та додаткові правила порівняння (як от регістрочутливість).
  let str = "Ёлки";
  console.log( str.localeCompare("Яблони") ); // -1


// Метод str.replace('str1','str2') замінює підрядок str1 на підрядок str2
  let str = 'abcdef';
  console.log( str.replace('cd','CD') ); // 'abCDef'


// Метод str.trim() прибирає пробіли на початку і в кінці рядка
  let str = ' abc ';
  console.log( str.trim() ); // 'abc'


// Метод str.normalise() – покращена підтримка Unicode (для сурогатних пар):
console.log( "S\u0307\u0323" == "S\u0323\u0307" );      // false, хоча візуально символи однакові
console.log( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
console.log("S\u0307\u0323".normalize().length);        // 1, нормалізовано до 1-го символу
console.log( "S\u0307\u0323".normalize() == "\u1e68" ); // true


// Метод str1.includes(str2 [, from]) – перевіряє, чи в рядку str1 міститься
// str2, повертає true/false;  from – не обов’язковий агрумент, визначає
// позицію, з якої шукати
  console.log( 'abcdefg'.includes('cde') ) // true


// Метод str1.endsWith(str2) – повертає true, якщо рядок str1 закінчується
// рядком str2
  console.log( 'abcdefg'.endsWith('cde') ) // false


// Метод str1.startsWith(str2) – повертає true, якщо рядок str1 починається
// рядком str2
  console.log( 'abcdefg'.startsWith('cde') ) // false


// Метод str.repeat(times) – повторює рядок str times разів
  consol.log( 'a'.repeat(3) ) // 'aaa'