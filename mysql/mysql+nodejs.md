MySQL + Node.js
================================================================================

Зміст
--------------------------------------------------------------------------------

- [Підключення](#connect)
    - [Створення підключення](#create)
    - [Закриття підключення](#close)
- [Запити](#queries)
    - [Базовий синтаксис](#basics)
    - [Параметризація запитів](#param)
- [Promise API](#promises)
- [Основні операції з даними](#crud)
    - [Створення бази даних](#dbases)
    - [Створення таблиць](#tables)
    - [Додавання даних](#insert)
    - [Додавання множини даних](#insertArr)
    - [Отримання даних](#get)
    - [Фільтрація даних](#felter)
    - [Оновлення](#update)
    - [Видалення](#delete)
- [Пули підключень](#pools)
    - [Створення пулу підключень і закриття усіх підключень](#createPool)
    - [Запити до БД через пули](#crud-pools)
    - [Promise API](#promises-pools)
- [Посилання](#links)


Підключення                                                 <i id="connect"></i>
--------------------------------------------------------------------------------

Установка пакета з npmjs.com

```shell
npm install --save mysql2
```

### Створення підключення                                    <i id="create"></i>

Метод **createConnection()** створює об'єкт підключення.
Приймає об'єкт з налаштуваннями і повертає об'єкт підключення.

```js
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "usersdb", // якщо не вказати, підключення буде до усього сервера
  password: "пароль_від_сервера"
  // …
});
````

Метод **connection.connect()** створює підключення об'єкту підключення до СУБД

```js
connection.connect(function(err){
  if (err) {
    return console.error("Помилка: " + err.message);
  }
  else {
    console.log("Підключення до MySQL успішно встановлено");
  }
});
```

Якщо при підключенні виникає помилка

```cmd
Client does not support authentication protocol requested by server; consider
upgrading MySQL client
```

в MySQL Workbench потрібно виконати наступну команду:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```


### Закриття підключення                                      <i id="close"></i>

Метод **connection.end()**. Цей метод гарантує, що перед закриттям підключення
будуть виконані усі активні запити.

```js
connection.end(function(err) {
  if (err) {
    return console.log("Помилка: " + err.message);
  }
  console.log("Підключення закрито");
});
```

Метод **connection.destroy()** обриває підключення, не зважаючи на активні запити

Якщо не викликати обрив підключення, воно залишатиметься активним, поки його не
закриє сервер.


Запити                                                      <i id="queries"></i>
--------------------------------------------------------------------------------

### Базовий синтаксис                                        <i id="basics"></i>

Метод **connection.query(sqlString, callback)**
Даний метод неявно викликає **connection.connect()**, тому явно його викликати
не обов'язково

```js
connection.query("SELECT * FROM users",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // дані
    console.log(fields);  // мета-дані полів
});
```

Метод **connection.execute(sqlString, callback)** аналогічний до query()


### Параметризація запитів                                    <i id="param"></i>

Параметризація потрібна для того, щоб уникнути sql-ін'єкцій в ситуації, коли в
запит потрібно вставляти дані, які надходять ззовні. Для цього замість даних
в запиті ставляться плейсхолери - знаки запитання, на місце яких під час
виконання запиту будуть вставлені дані

```js
  const mysql = require("mysql2");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "usersdb2",
    password: "123456"
  });

  const user = ["Tom", 29];
  const sql = "INSERT INTO users(name, age) VALUES(?, ?)";

  connection.query(sql, user, function(err, results) {
      if(err) console.log(err);
      else console.log("Дані додано");
  });

  connection.end();
```


Promise API                                                <i id="promises"></i>
--------------------------------------------------------------------------------

Для створення проміса під час створення об'єкта connection викликають його
метод **promise()**:

```js
const mysql = require("mysql2");
  const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "123456"
}).promise();
 
connection.query("SELECT * FROM users")
          .then(result =>{
            console.log(result);
          })
          .catch(err =>{
            console.log(err);
          });
```

Основні операції з даними                                      <i id="crud"></i>
--------------------------------------------------------------------------------


### Створення бази даних                                     <i id="dbases"></i>

```js
const mysql = require("mysql2");
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456"
});
 
connection.query("CREATE DATABASE usersdb2",
  function(err, results) {
    if(err) console.log(err);
    else console.log("База даних створена");
});
 
connection.end();
```


### Створення таблиць                                        <i id="tables"></i>

```js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "123456"
});

const sql = `create table if not exists users(
  id int primary key auto_increment,
  name varchar(255) not null,
  age int not null
)`;

connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log("Таблиця створена");
});
connection.end();
```


### Додавання даних                                          <i id="insert"></i>

```js
const sql = `INSERT INTO users(name, age) VALUES('Sam', 31)`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


### Додавання множини даних                               <i id="insertArr"></i>

```js
const users = [
  ["Bob", 22],
  ["Alice", 25],
  ["Kate", 28]
];
const sql = `INSERT INTO users(name, age) VALUES ?`;
 
connection.query(sql, [users], function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


### Отримання даних                                             <i id="get"></i>

```js
const sql = `SELECT * FROM users`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
    const users = results;
    for(let i=0; i < users.length; i++){
      console.log(users[i].name);
    }
});
```


### Фільтрація даних                                         <i id="felter"></i>

```js
const sql = `SELECT * FROM users WHERE name=? AND age=?`;
const filter = ["Tom", 29];
connection.query(sql, filter, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


### Оновлення                                                <i id="update"></i>

```js
const sql = `UPDATE users SET age=? WHERE name=?`;
const data = [34, "Tom"];
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


### Видалення                                                <i id="delete"></i>

```js
const sql = "DELETE FROM users WHERE name=?";
const data = ["Sam"];
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


Пули підключень                                               <i id="pools"></i>
--------------------------------------------------------------------------------

Пули підключень дозволяють пришвидшити процес за рахунок повторного використання
уже існуючих підключень. Коли до БД надсилається запит, з пулу вибирається
вільне підключення, або створюється нове, якщо вільних нема і не перевищено
ліміт підключень. Це економить час на створення нових підключень. Якщо в одному
методі написано кілька звернень в БД через пул підключень, нема жодної гарантії,
що запити киконаються у строгому порядку, бо в пулі усі запити виконуються
асинхронно.


### Створення пулу підключень і закриття усіх підключень <i id="createPool"></i>

Метод **mysql.createPool()** створює пул:

```js
const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,  // максимальна кількість підключень
    host: "localhost",
    user: "root",
    password: "пароль_від_сервера_mysql", 
    database: "usersdb"
});
```

Метод **pool.end()** закриває усі підключення:
Тут, як і в пулах, нема гарантії, що спочатку виконаються запити, а потім закриється з'єднання, може бути і навпаки, це треба враховувати.

```js
pool.end(function(err) {
  if (err) {
    return console.log(err.message);
  }
});
```

### Запити до БД через пули                              <i id="crud-pools"></i>

Аналогічні до звичайних запитиів, тільки замість об'єкта з'єднання створюється
пул і виклик методів відповідно робиться не від об'єкта **connection.query()**,
а від пулу **pool.query()**.


### Promise API                                      <i id="promises-pools"></i>
Пули, так само як і об'єкти підключень, підтримують проміси. Проміси запобігають
вищевказаній проблемі асинхронних звернень в пулах і закриття пулів перед
завершенням запитів.

```js
const mysql = require("mysql2");
  
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "123456"
}).promise();
 
 
pool.execute("UPDATE users SET age=age+1 WHERE name=?", ["Stan"])
    .then(result =>{ 
      console.log(result[0]);
      return pool.execute("SELECT * FROM users"); // вкладений запит
    })
    .then(result =>{
      console.log(result[0]);
      pool.end();
    })
    .then(()=>{
      console.log("пул закрито");
    })
    .catch(function(err) {
      console.log(err.message);
    });
```


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Metanit: Node.js + MySQL](https://metanit.com/web/nodejs/8.1.php)
2. [W3Schools: MySQL Tutorial](https://www.w3schools.com/mysql/default.asp)