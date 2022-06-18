////////////////////////////////////////////////////////////////////////////////

// https://www.mongodb.com/
// https://docs.mongodb.com/guides/
// https://www.mongodb.com/basics/

// https://docs.mongodb.com/guides/server/install/
// https://docs.mongodb.com/manual/reference/configuration-options/

// за замовчуванням встає в директорію c:\Program Files\MongoDB\Server\5.0\bin\
// директорія бд: C:\Program Files\MongoDB\Server\5.0\data\

// mongo.exe  - клієнт         cmd: mongo --help
// mongod.exe - база даних     cmd: mongod --help

// ==========

// Для створення нової бд через cmd потрібно використати команду use nameOfNewDB
// і щось записати в базу (пусту колекцію або одразу значення в колекції).
// Без запису бд не збережеться.

// Для можливості запуску mongo в консолі з будь-якої теки, потрібно додати
// mongo до path. Налаштування -> додаткові налаштування системи -> змінні
// оточення -> path -> редагувати -> вказати шлях
// C:\Program Files\MongoDB\Server\5.0\bin

// mongod --dbpath arg // встановити шлях до бази даних
// "c:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="B:\files\work_area\DB\MongoDB"
// або, що зручніше, змінити параметри у файлі bin\mongod.cfg

// Запуск - mongo.exe

// show dbs / show databases            // показати наявні бд
// db                                   // показати активну бд
// use mydb                             // перехід у бд mydb
// db.stats()                           // статистика по бд
// db.createCollection("users")         // створити колекцію users
// db.users.drop()                      // видалити колекцію users
// db.users.renameCollection("lusers")  // перейменування колекції
// db.dropDatabase()                    // видалити бд
// show collections                     // подивитися, що є в базі


// CRUD
// INSERT
db.users.insertOne({…});           // зробити запис в базі
db.users.insertMany([{},{},… {}]); // зробити записи в базі

// FIND
db.users.find();                   // подивитися, що є в колекції
db.users.find().limit(5);          // вивести 5 перших елементів колекції
db.users.find({},{_id:0});         // вивести без _id

db.users.find({},{_id:0})          // відсортувати колекцію (без _id) по полю
        .limit(5)                  // age по зростанню взяти 5 перших
        .sort({age:1});            // елементів

db.users.find({},{_id:0})          // відсортувати колекцію (без _id) по полю
        .sort({age:-1, email: 1})  // age по спаданню, по полю email по
        .limit(5);                 // зростанню, взяти 5 перших елементів

db.users.find().skip(3).limit(2);  // пропустити 3 перші записи, вивести 4й та 5й

// $slice - аналог skip() + limit(), але додатково може працювати з масивами
// 1 параметр: аналог limit()
// 2 параметри: 1й - аналог skip(), 2й - limit()
db.users.insertOne({
  "name": "Tom",
  "age": "32",
  "languages": ["english", "german"]
});
db.users.find ({name: "Tom"}, {languages: {$slice : -1}}) // поверне цей елемент,
                                                          // але з одною мовою
                                                          // з кінця
db.users.find ({name: "Tom"}, {languages: {$slice : [-1, 1]}}); // german

db.users.find().sort({ $natural: -1 }) // відсортувати колекцію по порядку
                                       // додавання елементів в колекцію

db.users.find({age:22},{_id:0});     // вивести усі елементи колекції, у яких в
                                     // полі age вказано 22, без поля _id. Так
                                     // само, як і з сортуванням, тут можна
                                     // вказувати кілька фільтрів

db.users.find({$or:[{age:22},{name:'vasja'}]}); // вивести усі елементи колекції,
                                                // у яких або вік - 22, або ім'я
                                                // - Вася

db.users.find({age:{$eq:22}});       // db.users.find({age:22});
db.users.find({age:{$ne:22}});       // все, що не рівне 22 у полі age

db.users.find({age:{$lt:38}});       // елементи колекції, у яких в полі age
                                     // значення менші 38 (less then)
                                     // lte - менше або рівне
                                     // gt/gte - білше/більше або =

db.users.find({languages: "english"});              // пошук в полі-масиві
                                                    // одного значення
db.users.find({languages: ["english", "german"]})   // пошук у полі-масиві
                                                    // одразу кількох співпадінь

db.users.find({languages: {$all: ["english", "german"]} }) // так точно спрацьовує

db.users.find({name:{$in: ["Jhon", "Bob", "Jack"]}) // усі елементи, у яких в
                                                    // полі name - одне із
                                                    // вказаних в масиві значень
                                                    // nin - not in, антипод in

db.users.find({child: {$exists: true}}); // ті елементи, у яких є поле child

db.users.find({child:{$size:2}});  // елементи, у яких в полі size - масив з 2х
                                   // значень

db.users.find({"child.2":"Jhon"}); // елементи, у яких є поле child, в якому
                                   // сhild[2] == Jhon

db.users.find({"company.name": "microsoft"}); // елементи з об'єктом company, зі
                                              // співпадіннями в полі name цього
                                              // об'єкту

db.users.find({credits:{$elemMatch:{$lte:2}}}); // елементи, у яких в полі credits -
                                                // масив, і значення цього
                                                // масиву менші або рівні 2

// UPDATE
db.users.updateOne({filters},{what to change})// зміна поля об'єкта

db.users.updateOne({age:22},{$set:{age:25}}); // знайти елемент, що підпадає під
                                              // фільтр, і замінити йому значення
                                              // у вказаному полі. Фільтрів, як
                                              // і змінюваних полів може бути
                                              // декілька

db.users.update({name : "Tom"}, {$unset: {salary: 1, age: 1}}) // видалення поля

// (тільки для масивів)
// $push - додати ще одне значення
// $each - додати одразу кілька значень
// $pop - видалити значення з масива
// $position - місце вставки
// $slice - обрізка зайвого в масиві
// $pull - видалення значення і всіх його повторень (якщо вони є) з масиву
// $pullAll - видалення кілька значень і їх повторів з масиву

db.users.updateOne({name : "Tom"}, {$push: {languages: "russian"}})
db.users.update({name : "Tom"}, {$push: {languages: {$each: ["russian", "spanish", "italian"]}}})
db.users.update({name : "Tom"}, {$pop: {languages: -1}})

// з початку
// ["german", "spanish", "italian"] будуть вставлені в масив languages з 1-го
// індекса, і посля вставки, в масиві залишиться 5 перших елементів.
db.users.update({name : "Tom"}, {$push: {languages: {$each: ["german", "spanish", "italian"], $position:1, $slice:5}}})

db.users.update({name : "Tom"}, {$pull: {languages: "english"}})
db.users.update({name : "Tom"}, {$pullAll: {languages: ["english", "german", "french"]}})

db.users.findOneAndUpdate() // на відміну від updateOne() повертає оновлений документ

// додати неве поле в усі документи колекції
db.collection.updateMany({},{$set: {"new_field":1}})

// REPLACE
db.users.replaceOne({filters},{new object}); // повне перезатирання запису в бд

// DELETE
db.users.deleteOne/Many({filters}) // видалити один/всі записи, які підпадають під фільтр

db.users.deleteMany({age:{$gte:22}, age:{$lte:28}}); // видалити усі елементи зі
                                                     // значенням поля age в
                                                     // діапазоні 22<=d<=28

db.users.findOneAndDelete({age:21}); // на відміну від deleteOne() повертає
                                     // видалений документ


// Об'єднання команд
bulkWrite([{command},{command},{command}]); // об'єднання кількох команд
                                            // (замінити, вставити тощо. не Many!)

db.users.bulkWrite([{
  insertOne: {
    "document": {name: "Mike", age: 45, email: "mike@ukr.net"}
  }
},
{
  deleteOne: {
    filter: {age: 20}
  }
},
{
  updateOne: {
    filter: {name: "Jhon"},
    update: {$set:{email: "new@ukr.net"}}
  }
},
{
  replaceOne: {
    filter: {name: "Tom"},
    replacement: {name: "Ted"}
  }
}]);


// Пошук в бд по співпадіннях в тексті

// спочатку створюємо індекси - вказуємо в якій колекції які поля підпадають під
// пошук "text"
db.articles.createIndex({field1: "text", field2: "text", field3: "text"});

// почати пошук. Якщо в пошуку кілька слів - mongoDB не шукає стопроцентне
// співпадіння, достатньо співпадіння по одномі слову
db.articles.find({$text: {$search: "targetTextLine"}});

// Пошук із урахуванням релевантності
db.articles.createIndex({field1: "text", field2: "text", field3: "text"});
db.articles.find(
  {$text: {$search: "targetTextLine"}},
  {score: {$meta: "textScore"}}        // цифровий показник якості співпадіння
).sort({score: {$meta: "textScore"}}); // сортування по релевантності


db.users.count({age:22}) // порахувати кількість елементів з колекції users, у
                         // яких в полі age - 22
db.users.count({password:{$exists: true}}); // порахувати, у скількох є паролі

db.users.distinct("email") // отримати масив значень по полю, але без дублікатів

// агрегація - об'єднання даних, напр. із записів про покупки вирахувати суму
// усіх покупок
db.users.aggregate([
  {$match: {name: "Mike"}}, // по якому полю шукаємо
  {$group: {_id: "$name"}, shoping: {$sum: "$shoping"}} // поле name робимо унікальним,
])                                                      // сумуємо значення з полів shoping


//Завантаження з файлу (для mongosh не підходить, тільки для mongo)
// файл js:
  db.users.insertMany([
    {"name": "Alice", "age": 31, languages: ["english", "french"]},
    {"name": "Lene", "age": 29, languages: ["english", "spanish"]},
    {"name": "Kate", "age": 30, languages: ["german", "russian"]}
  ]);

// команда:
  load("D:/users.js")


// Mongo + RegExp
db.users.find({name:/T\w+/i}) // знайти усі записи, де поле name починається з T


// Курсори
// Курсори - це результат виклику методу find(). Щоб одразу не виводити результат
// вибірки, пісдя неї прописують null:

  let cursor = db.users.find(); null;
  while(cursor.hasNext()){
    obj = cursor.next();
    print(obj["name"]);
  }

// Курсори мають методи hasNext(), next(), ітератор forEach, методи sort(),
// limit(), skip(), print(), toArray():

  let cursor = db.users.find();null;
  cursor.sort({name:1}).limit(3).skip(2);null;
  cursor.forEach(function(obj){
    print(obj.name);
  })


// Оператори вибірки

// Умовні  : $eq $ne $gt $lt $gte $lte $in $nin
// Логічні : $or:  відповідність хоча б одній умові
//           $and: відповідність усім умовам
//           $not: не відповідність умові
//           $nor: не відповідність усім умовам

  db.users.find ({$and : [{name: "Tom"}, {age: 32}]})

// Масивні : $all: значення, які повинні бути в масиві
//           $size: розмір масиву
//           $elemMatch: умова відповідності для елементів масиву

  db.grades.insertMany([
    {student: "Tom", courses:[
      {name: "Java", grade: 5},
      {name: "MongoDB", grade: 4}
    ]},
    {student: "Alice", courses:[
      {name: "C++", grade: 3},
      {name: "MongoDB", grade: 5}
    ]}
  ])
  db.grades.find({courses: {$elemMatch: {name: "MongoDB", grade: {$gt: 3}}}})

// Інші    : $exists: наявність ключа
//           $type: тип ключа
//           $regex: регулярка, якій має відповідати значення поля

  db.users.find ({company: {$exists:true}});
  db.users.find ({age: {$type:"string"}});
  db.users.find ({name: {$regex:"b"}});


// Установка посилань


// 1. Ручна установка - полягає у присвоєнні _id в одній колекції і викорастання
//    цього ідентифікатора як властивості об'єкта в іншій.

  db.companies.insert({"_id" : "microsoft", year: 1974});
  db.users.insert({name: "Tom", age: 28, company: "microsoft"});
  user = db.users.findOne({name: "Tom"});
  db.companies.findOne({_id: user.company})

// 2. Автоматична установка - DBRef. Трохи не зрозумів. Код нижче в mongosh не
//    працює.

  apple=({"name" : "apple", "year": 1976})
  db.companies.insertOne(apple)

  steve = ({"name": "Steve", "age": 25, company: new DBRef('companies', apple._id)})
  db.users.insertOne(steve)

  db.companies.findOne({_id: steve.company.$id})

// Мій код - через курсори:

  apple=({"name" : "apple", "year": 1976})
  db.companies.insertOne(apple)

  ap = db.companies.find({name:"apple"});null;
  id = ap.next()["_id"];
  steve = ({"name": "Steve", "age": 25, company: new DBRef('companies', id)})
  db.users.insertOne(steve)