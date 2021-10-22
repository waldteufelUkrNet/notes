// створення об’єктів:
  let оbj = new Object(); // синтаксис «конструктор об’єкту»
  let оbj = {};           // синтаксис «літерал об’єкту»

  let person = {};                    // створення об'єкту
  person.name = 'Вася';               // додавання пари властивість – значення
  person.age = 25;                    // додавання пари властивість – значення
  person['улюблена музика'] = 'Джаз'; // додавання пари властивість – значення
  person.улюблена музика = 'Джаз';    // ??? помилка
  delete person.age;                  // видалення пари властивість – значення


// Якщо ключ має значення, яке береться зі змінної з таким же іменем, як і ключ,
// можна провести скорочення запису:

  let name    = '…',
      age     = '…',
      address = '…';
  let user = {
    name,      // замість name: name
    age,       // замість age: age
    address    // замість address: address
  }


// Пар "властивість - значення" може бути багато. Один об'єкт може містити інший
// об'єкт:
  let next = '…';
  let user = {
    name    : "Jon",
    surname : "Smith",
    jobs    : {
      first               : "Makler",
      "second job"        : "Brocker" // якщо з пробілом – то в лапках
      [next]              : "qqq"     // вираховувана властивість (значення
                                      // візьме зі змінної next), ідентично:
                                      // user.joobs[next] = '…'
      [next + 'someText'] : "qqq"     // user.jobs.nextsomeText = "qqq"
    }
  };


// • Ключ – завжди рядок, якщо ні – JS автоматично приведе його до рядка. Ключі
//   можна писати в одинарних, подвійних рядках, або взагалі без них.
// • obj.key = obj[key]
//   Якщо ім'я властивості зберігається у змінній, єдиний спосіб до неї
//   звернутися – через obj[key]. Доступ через крапку (obj.key) – тільки тоді,
//   коли програміст на етапі створення об'єкта знає назву властивості. Якщо
//   властивість формується динамічно, то вона записується у змінну і потім
//   доступна через obj[key]:

  let person = {};
  person.age = 25;
  let key = "age";
  console.log( person[key] );


// Якщо потрібно перевірити, чи є в об'єкті певна пара, використовують оператор
// in:
  if ("name" in obj) {
    console.log( "властивість name існує!" );
  }

// або порівнюють пару з undefined:
  let person = {
    name: "Василь"
    test = undefined;
  };
  console.log( person.lalala === undefined ); // true, такої властивості нема
  console.log( person.name === undefined );   // false, така властивість є
  console.log( person.test === undefined );   // true, але test насправді є,
                                              // тому краще користуватися
                                              // оператором in:
  console.log( "test" in person);             // true


// перевірка, чи властивість є рідною (фільтрація прототипів)
  obj.hasOwnProperty(key);


// перебирання елементів об'єкту - оператор for … in (ігнорує символи, перебирає
// свої методи і прототипно успадковані):
  let obj = {
    firstName : "John",
    lastName  : "Smith",
    age       : 25
  };
  for (let key in obj) {   // key – ім'я властивості
    console.log(obj[key]); // obj[key] – значення
  }


// перебирання властивостей об'єкта відбувається у тому порядку, в якому вони
// прописувалися, але якщо назви властивостей – числа, вони перебиратимуться як
// числа, за зростанням. Щоб цього уникнути, достатньо перед цифрою поставити
// знак плюс (такі числа перестають бути цілочисельними – тобто такими, що
// можуть бути переформатовані в рядок і потім назад і при цьому не змінять
// значення):
  let codes = {
    "+7"  : "Московія",
    "+38" : "Україна",
    "+1"  : "США"
  };


// визначення кількості властивостей об'єкта:
  let counter = 0;
  for (let key in obj) {
    counter++;
  }
  console.log( "Усього властивостей: " + counter );


// перевірка на пустоту:
  function isObjectEmpty(obj) {
    for (let key in obj) {
      return false
    }
    return true
  }


// Під час копіювання об'єкту копіюються не дані, а посилання на пам'ять, де
// вони зберігаються:
  let user = {
    name: 'Василь'
  };
  let admin = user;         // копіюємо об'єкт
  admin.name = 'Петрусь';   // змінили дані через admin
  console.log(user.name);         // 'Петрусь', зміни видно в user


// Якщо потрібно зробити клон об'єкта:
// 1. Перебір властивостей
  let user = {
    name : "Вася",
    age  : 30
  };
  let clone = {};           // новий пустий об'єкт
  for (let key in user) {
    clone[key] = user[key]; // копіювання властивостей user в clone
  }

// 2. метод Object.assign()
  let clone = Object.assign({}, user);

// Проте, якщо властивість об’єкта теж об’єкт, то ці два способи лише скопіюють
// посилання на об’єкти, а не зроблять клон. Для глибокого клонування вкладених
// об’єктів потрібно робити перевірку, чи не є властивість об’єктом.

// 3. Зробити клон об’єкта разом із прапорами властивостей:
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));


// Передача усіх пар "ключ - значення" з об’єктів src в перший об’єкт target.
// Якщо пари повторюються, вони перезаписуються. Цей метод бачить Symbol();
  Object.assign(target, src1, src2, … );


Object.keys(obj)                  // повертає масив ключів, ігнорує символи,
                                  // ігнорує прототипно успадковані властивості,
Object.values(obj)                // повертає масив значень, ігнорує символи,
Object.entries(obj)               // повертає масив пар [ключ, значення],
                                  // ігнорує символи.
Object.getOwnPropertyNames(obj)   // аналогічний до Object.keys(obj)
Object.getOwnPropertySymbols(obj) // повертає масив усіх символів об'єкта (без
                                  // властивостей).
Reflect.ownKeys(obj)              // повертає усі ключі, включаючи символи.


// Object.is(value1, value2) – аналог строгого порівняння, але із особливостями:
  console.log( Object.is(+0,-0) );   // false
  console.log( +0 === -0 );          // true
  console.log(Object.is(NaN, NaN) ); // true
  console.log( NaN === NaN );        // false


// Сортування об’єктів по полю:
// 1й варіант
  obj.sort(function(a,b){
    return a.name – b.name
  })

// 2й варіант
  obj.sort( sortObjByField("name") );
  function sortObjByField(field){
    return function(a,b) {
      return a[field] – b[field] ? 1 : -1
    }
  }


// Використання методів масивів для об’єктів – через
// Object.fromEntries( Object.entries(obj).someArrayMethod() ):
  let prices = {
    banana : 1,
    orange : 2,
    meat   : 4,
  };

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );

  console.log(doublePrices.meat); // 8


// • При "розкритті" властивостей об'єкту в консолі браузер завжди виводить їх
//   поточні (на момент розкриття) значення. Так відбувається тому, що вивід не
//   робить "копію" поточного вмісту, а лише зберігає посилання на об'єкт.