Sequelize
================================================================================

Зміст
--------------------------------------------------------------------------------

- [xxx](#xxx)
    - [xxx](#xxx)
    - [Закриття підключення](#close)


- [Посилання](#links)


Що це таке                                                    <i id="about"></i>
--------------------------------------------------------------------------------

Sequelize - це ORM-бібліотека для додатків на Node.js, яка здійснює
співставлення таблиць БД і відношень між ними і класами. Взаємодіє з MySQL,
Postgres, MariaDB, SQLiete, MS SQL Server.


Установка
--------------------------------------------------------------------------------

Установка пакета з npmjs.com:

```shell
npm install --save sequelize
```


Підключення
--------------------------------------------------------------------------------

Створення об'єкту підключення:

```js
const Sequelize = require("sequelize");
const sequelize = new Sequelize("database_name", "root", "password", {
  dialect : "mysql",
  host    : "localhost",
  port    : "1433"
});
```

dialect може приймати значення: mysql, mariadb, sqlite, postgres, mssql
host за замовчуванням "localhost", тому якщо він "localhost", його можна явно не
вказувати
port за замовчуванням 1433, тому, якщо він рівний 1433, його можна не вказувати


### Підключення до MySQL

Для роботи з MySQL потрібно встановити модуль **mysql2**

```shell
npm install --save mysql2
```

```js
const Sequelize = require("sequelize");
const sequelize = new Sequelize("database_name", "root", "password", {
  dialect : "mysql"
});
```


### Підключення до MS SQL Server

Для роботи з MS SQL Server потрібно встановити модуль **tedious**

```shell
npm install --save tedious
```

```js
const Sequelize = require("sequelize");
const sequelize = new Sequelize("database_name", "root", "password", {
  dialect : "mssql"
});
```

При створенні підключення до MSSQL Server може виникнути низка проблем через
конфігурацію сервера, тому його треба додатово налаштовувати.

1. Увімкнення TCP/IP.
   Панель керування -> Адміністрування -> Управління комп'ютером у відкритій
   вкладці: Служби і застосунки -> SQL Server Configuration Manager -> SQL
   Server Network Configuration, далі вибираємо потрібний сервер і вмикаємо йому
   протокол TCP/IP.
2. Увімкнення змішаної аутентифікації.
   В програмі SQL Server Managemen Studio підключаємося до сервера і переходимо
   в налаштування: Properties -> Security -> SQL Server and Windows
   Authentication mode


### Підключення до postgres

Для роботи з Postgres  потрібно встановити модуль **pg**

```shell
npm install --save pg
```

```js
const Sequelize = require("sequelize");
const sequelize = new Sequelize("database_name", "root", "password", {
  dialect : "postgres"
});
```


Моделі
--------------------------------------------------------------------------------

Моделі описують структури даних, що зберігаються в БД, через них відбувається
взаємодія з БД.

### Способи визначення моделей

#### метод **define()**

```js
const User = sequelize.define("user", { // "user" - назва моделі, таблиця в БД
  id: {                                 // відповідно буде названа як "users"
    type          : Sequelize.INTEGER,
    autoIncrement : true,
    primaryKey    : true,
    allowNull     : false // default: true
  },
  name: {
    type      : Sequelize.STRING,
    allowNull : false
  },
  age: {
    type      : Sequelize.INTEGER,
    allowNull : false
  }
});
```


#### наслідування класу Model і виклик методу init()

```js
class User extends Model {}
User.init({
  id: {
    type          : Sequelize.INTEGER,
    autoIncrement : true,
    primaryKey    : true,
    allowNull     : false
  },
  name: {
    type      : Sequelize.STRING,
    allowNull : false
  },
  age: {
    type      : Sequelize.INTEGER,
    allowNull : false
  }
}, {
  sequelize,
  modelName : "user"
});
```

приклад файлу-модулю:

```js
import { Sequelize } from 'sequelize'
export default class User extends Sequelize.Model {
  static init = (sequelize) => {
    return super.init({
      // …
    }, {
      sequelize,
      timestamps: false,
    })
  }
}
```


### Синхронізація з БД

Перед початком роботи з БД, потрібно переконатися, що таблиці в БД відповідають
заявленим моделям.

```js
sequelize.sync().then(result => {
  console.log(result);
})
.catch(err => console.log(err));
```

Крім власне полів моделі в таблиці будуть створюватися два додаткових поля:
createdAt та updatedAt, які матимуть тип datenime і вказуватимуть на дату
створення/модифікацію таблиці. Якщо ці поля не потрібні, треба задати параметр
**timestamps: false** або в оголошенні об'єкту підключення (для всіх моделей),
або у конкнетній.

```js
const Sequelize = require("sequelize");
const sequelize = new Sequelize("usersdb", "root", "123456", {
  dialect : "mysql",
  host    : "localhost",
  define  : {
    timestamps: false
  }
});
const User = sequelize.define("user", {
  // …
});
sequelize.sync({force: true}).then(result=>console.log(result))
.catch(err=> console.log(err));
```

{force: true} використовується для того, щоб видалити таблиці і створити їх
наново (напр. якщо вони не відповідали дійсності).


Запити до бази даних
--------------------------------------------------------------------------------

### Додавання даних

Метод **create()** приймає об'єкт для запису, повертає записаний об'єкт

```js
User.create({
  name : "Tom",
  age  : 35
}).then(res => {
  const user = {id: res.id, name: res.name, age: res.age}
  console.log(user);
}).catch(err => console.log(err));
```


### Отримання даних

Метод **findAll()** повертає усе, що є в таблиці, у формі масиву об'єктів

```js
User.findAll({raw:true}).then(users=>{
  console.log(users);
}).catch(err => console.log(err));
```

{raw:true} - не обов'язковий параметр, який дозволяє отримати дані без
додаткових метаданих

**Фільтрація**

```js
User.findAll({where:{name: "Tom"}, raw: true })
.then(users => {
  console.log(users);
}).catch(err => console.log(err));
```

Метод **findByPk()** повертає один об'єкт з підходящим первинним ключем

```js
User.findByPk(2)
.then(user => {
    if(!user) return;
    console.log(user.name);
}).catch(err => console.log(err));
```

Метод **findOne()** повертає один об'єкт з підходящим критерієм вибірки

```js
User.findOne({where: {name: "Tom"}})
.then(user => {
    if(!user) return;
    console.log(user.name, user.age);
}).catch(err => console.log(err));
```


### Оновлення даних

Метод **update()** приймає об'єкт з новими даними і об'єкт-критерій вибірки

```js
User.update({ age: 36 },
            { where: {
              name: "Bob"
            }
}).then((res) => {
  console.log(res);
});
```

### Видалення даних

Метод **destroy()** приймає об'єкт-критерій вибірки для видалення

```js
User.destroy({
  where: {
    name: "Bob"
  }
}).then((res) => {
  console.log(res);
});
```


Зв'язок "один до багатьох"
--------------------------------------------------------------------------------

### Створення

Наприклад, 1 компанія, яка випускає багато товарів.
Головна таблиця - companies,
залежна таблиця - products, в ній повинен бути foreign key, в якому
буде посил на primary key таблиці companies.

В sequelize для встановлення зв'язку "один до багатьох" потрібно прописати
метод **hasMany(SlaveModel, {…})** в ГОЛОВНІЙ моделі, тоді за замовчуванням у
залежній таблиці створиться стовпчик ім'я_головної_моделі+Id (companyId)

```js
const Sequelize = require("sequelize");
const sequelize = new Sequelize("store", "root", "123456", { … });
const Product = sequelize.define("product", { … });
const Company = sequelize.define("company", { … });
Company.hasMany(Product, { onDelete: "cascade" });
 
sequelize.sync({force:true}).then(()=>{
  console.log("Tables have been created");
}).catch(err=>console.log(err));
```


### Основні операції

1. Додавання значень в залежну таблицю з головної і їх зв'язування - через
стовпчик залежної таблиці **ім'я_головної_моделі+Id** (companyId):

```js
Company.create({ name: "Apple"}).then(company => {
  Product.create({name:"iPhone XS", price: 400, companyId: company.id})
         .catch(err => console.log(err));
}).catch(err => console.log(err));
```

2. Додавання значень в залежну таблицю з головної і їх зв'язування - через метод
головної моделі **create+Залежна_модель+()** ( createProduct() ):

```js
Company.findByPk(1).then(company => {
  if(!company) return console.log("Company not found");
  company.createProduct({name:"iPhone X", price: 300})
         .catch(err => console.log(err));
}).catch(err => console.log(err));
```

2. Отримання усіх зв'язаних об'єктів залежної моделі з головної моделі - за
допомогою метода головної моделі **get+Залежна_модель+s()** ( getProducts() ):

```js
Company.findByPk(1).then(company => {
  if(!company) return console.log("Company not found");
  company.getProducts()
         .then(res => {
           for(let i=0; i<res.length; i++)
             console.log(res[i].name, " - ", company.name);
         })
         .catch(err => console.log(err));
}).catch(err => console.log(err));
```


Зв'язок "один до одного""
--------------------------------------------------------------------------------

### Створення

Наприклад, 1 команда - 1 тренер.
Тут не можливо чітко визначити, яка таблиця "головніша", тому залежність
оформлюється програмістом виходячи із загальної логіки застосунку.

В умовно головну модель прописується метод **hasOne()**

```js
const Coach = sequelize.define("coach", { … });
const Team = sequelize.define("team", { … });
Coach.hasOne(Team, { onDelete: "cascade"});
```

В результаті у залежній таблиці teams буде створено додатковий стовпчик coachId,
який буде foreign key і вказуватиме на стовпчик id таблиці coaches.


### Основні операції

1. Додавання зв'язаних даних - метод **set+Залежна_модель+()**

```js
Coach.create({ name: "Tom Smith"})
     .then(coach => {
       Team.create({name:"Real Madrid"}).then(team => {
         coach.setTeam(team).catch(err => console.log(err));
       });
     }).catch(err => console.log(err));
```

2. Отримання зв'язаних даних - метод **get+Залежна_модель+()**

```js
Coach.findByPk(1)
     .then(coach => {
       if(!coach) return console.log("Coach not found");
       coach.getTeam()
            .then(team => {
              console.log(coach.name, "-", team.name);
            });
     });
```

3. Отримання усіх даних разом зі зв'язаними

```js
Coach.findAll({
    attributes: ["name"],   // стовпчик name таблиці coaches
    include: [{
      model: Team,
      attributes: ["name"]  // стовпчик name таблиці teams
    }]
  }).then(coaches => {
      for(coach of coaches){
        console.log(coach.name, "-", coach.team.name);
      }
});
```


Зв'язок "батато до багатьох"
--------------------------------------------------------------------------------

### Створення

Наприклад, студенти і курси: один студент може відвідувати багато курсів, на
кожному курсі може бути багато студентів.

Для організації зв'язку "батато до багатьох" на рівні БД потрібно створити
проміжну таблицю, тому в sequelize потрібно створити проміжну модель і
використати метод **belongsToMany()** для обох моделей, в результаті якого в
проміжній таблиці з'являться два нових стовпчики studentId та courseId, які
будуть зовнішніми ключами, що вказують на відповідні таблиці.

```js
const Sequelize = require("sequelize");
const sequelize = new Sequelize("univer", "root", "123456", { … });
const Student = sequelize.define("student", { … });
const Course = sequelize.define("course", { … });

// проміжна модель
const Enrolment = sequelize.define("enrolment", {id …, grade …});
 
Student.belongsToMany(Course, {through: Enrolment});
Course.belongsToMany(Student, {through: Enrolment});
 
sequelize.sync({force:true}).then(()=>{
  console.log("Tables have been created");
}).catch(err=>console.log(err));
```


### Основні операції

1. Додавання зв'язаних даних - метод add+Ім'я_моделі+()

```js
Course.create({ name: "JavaScript"});
Student.create({ name: "Tom"});

Student.findOne({where: {name: "Tom"}})
       .then(student => {
           if(!student) return;

           Course.findOne({where: {name: "JavaScript"}})
               .then(course => {
                   if(!course) return;
                   student.addCourse(course, {through:{grade:1}});
           });
       });
```




2. Отримання зв'язаних даних




3. Видалення зв'язаних даних
















Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Metanit: Sequelize](https://metanit.com/web/nodejs/9.1.php)