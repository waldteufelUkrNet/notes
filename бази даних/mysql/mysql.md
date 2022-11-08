MySQL
================================================================================

Зміст
--------------------------------------------------------------------------------

Частина 1-ша. MySQL.
--------------------------------------------------------------------------------

- [робота в MySQL Shell                                                ](#Shell)
- [БАЗИ ДАНИХ                                                         ](#dbases)
- [ТАБЛИЦІ                                                            ](#tables)
- [ТИПИ ДАНИХ                                                      ](#datatypes)
    - [символьні                                                     ](#symbols)
    - [числові                                                       ](#numbers)
    - [для роботи з датами                                             ](#dates)
    - [складані типи                                               ](#complexes)
    - [бінарні типи                                                   ](#binary)
- [АТРИБУТИ СТОВПЧИКІВ І ТАБЛИЦЬ                                        ](#attr)
    - [Атрибут PRIMARY KEY                                           ](#primary)
    - [Атрибут AUTO_INCREMENT                                        ](#autoinc)
    - [Атрибут UNIQUE                                                   ](#uniq)
    - [Атрибути NULL и NOT NULL                                         ](#null)
    - [Атрибут DEFAULT                                               ](#default)
    - [Атрибут CHECK                                                   ](#check)
    - [Оператор CONSTRAINT                                        ](#constraint)
- [ЗОВНІШНІ КЛЮЧІ FOREIGN KEY                                        ](#foreign)
- [ЗМІНА ТАБЛИЦІ                                                      ](#change)
- [ОПЕРАЦІЇ З ДАНИМИ                                          ](#dataoperations)
    - [INSERT - додавання даних                                       ](#insert)
    - [SELECT - вибірка даних                                         ](#select)
    - [WHERE - фільтрація даних (фільтрація рядків в таблиці)          ](#where)
        - [типи умов                                              ](#wheretypes)
    - [логічні оператори AND, OR, NOT                             ](#and-or-not)
    - [UPDATE - оновлення даних                                       ](#update)
    - [DELETE - видалення даних                                       ](#delete)
- [ЗАПИТИ                                                            ](#queries)
    - [DISTINCT - вибірка унікальних значень                        ](#distinct)
- [ОПЕРАТОРИ ФІЛЬТРАЦІЇ                                                ](#filtr)
    - [IN - вибір підходящого                                             ](#in)
    - [[NOT] BETWEEN … AND - діапазон значень                        ](#between)
    - [LIKE - простий шаблон рядка                                      ](#like)
    - [REGEXP - регулярний вираз                                      ](#regexp)
- [СОРТУВАННЯ                                                           ](#sort)
    - [ORDER BY - сортування за зростанням                           ](#orderby)
    - [ORDER BY … DEST - сортування за спаданням                   ](#orderdest)
    - [сортування за кількома стовпчиками:                          ](#polysort)
- [ОТРИМАННЯ ДІАПАЗОНА                                                 ](#range)
    - [LIMIT                                                           ](#limit)
- [АГРЕГАТНІ ФУНКЦІЇ                                                     ](#agr)
- [ГРУПУВАННЯ                                                          ](#group)
    - [GROUP BY                                                      ](#groupby)
    - [HAVING                                                         ](#having)
- [ПІДЗАПИТИ                                                      ](#subqueries)
    - [Корелюючі і не корелюючі підзапити                       ](#queriessorts)
- [ПІДЗАПИТИ В ОСНОВНИХ КОМАНДАХ SQL                    ](#subqueriesincommands)
    - [SELECT                                                      ](#subselect)
        - [Набори значень                                               ](#sets)
        - [Підзапит як стовпчик                               ](#subquerycolumn)
    - [INSERT                                                      ](#subinsert)
    - [UPDATE                                                      ](#subupdate)
    - [DELETE                                                      ](#subdelete)
- [Оператор EXISTS                                                    ](#exists)
- [З'ЄДНАННЯ ТАБЛИЦЬ                                              ](#jointables)
    - [Неявне з'єднання                                          ](#defaultjoin)
    - [Inner Join                                                  ](#innerjoin)
    - [Outer Join                                                  ](#outerjoin)
    - [Сross Join                                                  ](#crossjoin)
    - [Self Join                                                    ](#selfjoin)
    - [UNION                                                           ](#union)
- [ФУНКЦІЇ ДЛЯ РОБОТИ З РЯДКАМИ                                      ](#sttfunc)
- [ФУНКЦІЇ ДЛЯ РОБОТИ З ЧИСЛАМИ                                      ](#numfunc)
- [ФУНКЦІЇ ДЛЯ РОБОТИ З ДАТАМИ І ЧАСОМ                              ](#datefunc)
- [ФУНКЦІЇ CASE, IF, INFULL, COALESCE                             ](#conditions)
    - [CASE - WHEN - THEN - ELSE - END                                  ](#case)
    - [IF                                                                 ](#if)
    - [IFNULL                                                         ](#ifnull)
    - [COALESCE                                                     ](#coalesce)


Частина 2-га. MySQL + Node.js
--------------------------------------------------------------------------------

- [Підключення MySQL в Node.js                                  ](#node-connect)
    - [Створення підключення                                     ](#node-create)
    - [Закриття підключення                                       ](#node-close)
- [Запити                                                       ](#node-queries)
    - [Базовий синтаксис                                         ](#node-basics)
    - [Параметризація запитів                                     ](#node-param)
- [Promise API                                                 ](#node-promises)
- [Основні операції з даними                                       ](#node-crud)
    - [Створення бази даних                                      ](#node-dbases)
    - [Створення таблиць                                         ](#node-tables)
    - [Додавання даних                                           ](#node-insert)
    - [Додавання множини даних                                ](#node-insertArr)
    - [Отримання даних                                              ](#node-get)
    - [Фільтрація даних                                          ](#node-felter)
    - [Оновлення                                                 ](#node-update)
    - [Видалення                                                 ](#node-delete)
- [Пули підключень                                                ](#node-pools)
    - [Створення пулу підключень і закриття усіх підключень  ](#node-createPool)
    - [Запити до БД через пули                               ](#node-crud-pools)
    - [Promise API                                       ](#node-promises-pools)


- [Посилання                                                           ](#links)


робота в MySQL Shell                                          <i id="Shell"></i>
--------------------------------------------------------------------------------

MySQL Shell підтримує три мови введення команд: JS, puthon, sql. для
переключення між командами використовуються наступні команди:
```sql
  \js
  \py
  \sql
```

підключення до бази даних
```sql
\connect username@host:port
```

за замовчуванням використовується:
```sql
\connect root@localhost:3306
```


БАЗИ ДАНИХ                                                   <i id="dbases"></i>
--------------------------------------------------------------------------------

показати наявні бази даних:
```sql
show databases; 
```

створення бд (видасть помилку, якщо бд уже існує):
```sql
create database database_name;
```

створення бд, якщо її ще нема:
```sql
create database if not exists database_name;
```

створити таблицю:
```sql
create table users (
  id integer auto_increment primary key,
  name varchar(30),
  age integer);
```

використання бд:
```sql
use database_name;
```

видалення бд:
```sql
drop database database_name;
```

ТАБЛИЦІ                                                      <i id="tables"></i>
--------------------------------------------------------------------------------

створення таблиці:
```sql
create table table_name (
  column_name_1 data_type_1 column_attributes_1,
  …
  column_name_n data_type_n column_attributes_n
)
```
перейменування таблиці:
```sql
rename table old_name to new_name;
```

показати список наявних таблиць:
```sql
show tables;
```

повністю очистити таблицю:
```sql
truncate table table_name;
```

видалення таблиці:
```sql
drop table table_name;
```

додати запис в таблицю:
```sql
insert into users (name, age) values ('Tom', 34);
```

вивести дані таблиці в консоль:
```sql
select * from users;
```


ТИПИ ДАНИХ                                                <i id="datatypes"></i>
--------------------------------------------------------------------------------

### символьні                                               <i id="symbols"></i>

  **char(n)**    рядок фіксованої довжини. Якщо в таблицю зберігатиметься
                 значення менше n, то недостатні символи будуть зайняті
                 пробілами. Тип char може зберігати до 255 байт.  
  **varchar(n)** рядок змінної довжини. Недостатні символи не заповнюються
                 пробілами. Тип varchar може зберігати до 65535 байт.  
  **tinytext**   текст довжиною до 255 байт.  
  **text**       текст довжиною до 65 кб.  
  **mediumtext** текст довжиною до 16 мб.  
  **largetext**  текст довжиною до 4 гб.


### числові                                                 <i id="numbers"></i>

  **tinyint**            цілі числа від -128 до 127, займає 1 байт.  
  **bool**               = boolean = tinyint(1) зберігає 0 або 1 (false/true).  
  **tinyint unsigned**   цілі числа від 0 до 255, займає 1 байт.  
  **smallint**           цілі числа від -32768 до 32767, займає 2 байти.  
  **smallint unsigned**  цілі числа від 0 до 65535, займає 2 байти.  
  **mediumint**          цілі числа від -8388608 до 8388607, займає 3 байти.  
  **mediumint unsigned** цілі числа від 0 до 16777215, займає 3 байти.  
  **int**                цілі числа від -2147483648 до 2147483647, займає 4
                         байти.  
  **int unsigned**       цілі числа від 0 до 4294967295, займає 4 байти.  
  **bigint**             цілі числа від -9223372036854775808 до
                         9223372036854775807, займає 8 байти.  
  **bigint unsigned**    цілі числа від 0 до 18446744073709551615, займає 8байт.  
  **decimal(p,s)**       = dec = numeric = fixed зберігає числа із заданою
                         точністю має два параметри: precision - максимальна
                         кількість цифр у числі (від 1 до 65), scale -
                         максимальна кількість цифр після коми (від 0 до
                         precision), за замовчуванням - 0.  
  **float**              зберігає дробові числа з плаваючою крапкою одинарної
                         точності від -3.4028×10^38 до 3.4028×10^38, займає 4
                         байта, може приймати форму float(m,d), де m - загальна
                         кількість цифр, d - кількість цифр після коми.  
  **double**             = real = double precision зберігає дробові числа з
                         плаваючою крапкою подвійної точності від -1.7976×10^308
                         до 1.7976×10^308, займає 8 байт. Також може приймати
                         форму double(m,d) по аналогії до float(m,d).


### для роботи з датами                                       <i id="dates"></i>

  **date**      зберігає дати від 1 січня 1000 до 31 грудня 9999.
                За замовчуванням використовує формат yyyy-mm-dd. Займає 3 байти.  
  **time**      зберігає час від -838:59:59 до 838:59:59. За замовчуванням
                використовує формат hh:mm:ss. Займає 3 байти.  
  **datetime**  зберігає дату і час від 00:00:00 1 січня 1000 до 23:59:59 31
                грудня 9999. Має формат yyyy-mm-dd hh:mm:ss.Займає 8 байт.  
  **timestamp** зберігає дату і час у діапазоні від 1970-01-01 00:00:01 UTC до
                2038-01-19 03:14:07. Займає 4 байти.  
  **year**      зберігає рік. Діапазон від 1901 до 2155. Займає 1 байт.

> ***date і time можуть сприймати спрощені формати, напр. yy-mm-dd, але
зберігатимуть дані, привівши їх до стандартного формату.***


### складані типи                                         <i id="complexes"></i>

  **enum** зберігає 1 значення зі списку допустимих значень. Займає 1-2 байти.  
  **set**  може зберігати до 64 значень з певного списку допустимих значень.
           Займає 1-8 байт.


### бінарні типи                                             <i id="binary"></i>

  **tinyblob**   зберігає бінарні дані у вигляді рядка довжиною до 255 байт.  
  **blob**       зберігає бінарні дані у вигляді рядка довжиною до 65 кілобайт.  
  **mediumblob** зберігає бінарні дані у вигляді рядка довжиною до 16 мегабайт.  
  **largeblob**  зберігає бінарні дані у вигляді рядка довжиною до 4 гігабайт.


АТРИБУТИ СТОВПЧИКІВ І ТАБЛИЦЬ                                  <i id="attr"></i>
--------------------------------------------------------------------------------

атрибути стовпчиків пишуться після назви і типу стовпчика:
```sql
USE productsdb;
CREATE TABLE Customers
(
  Id INT PRIMARY KEY,   -- <-
  Age INT,
  FirstName VARCHAR(20),
  LastName VARCHAR(20)
);
```

атрибути на рівні таблиць пишуться після оголошень стовпчиків:
```sql
USE productsdb;
CREATE TABLE Customers
(
  Id INT,
  Age INT,
  FirstName VARCHAR(20),
  LastName VARCHAR(20),
  PRIMARY KEY(Id)       -- <-
);
```


### Атрибут PRIMARY KEY                                     <i id="primary"></i>

задає первинний ключ таблиці, виступає в ролі унікального ідентифікатора рядка в
таблиці. Він може бути складеним з кількох стовпців одночасно, це означатиме, що
в одній таблиці не може бути двох рядків з повним збігом даних у конкретних
стовпчиках.

```sql
CREATE TABLE OrderLines
(
  OrderId INT,
  ProductId INT,
  Quantity INT,
  Price MONEY,
  PRIMARY KEY(OrderId, ProductId) -- <-
)
```


### Атрибут AUTO_INCREMENT                                  <i id="autoinc"></i>

дозволяє вказати, що в кожен наступний рядок таблиці в міру його додавання
матиме значення, на 1 більше від попереднього.

```sql
CREATE TABLE Customers
(
  Id INT PRIMARY KEY AUTO_INCREMENT, -- <-
  Age INT,
  FirstName VARCHAR(20),
  LastName VARCHAR(20)
);
```

### Атрибут UNIQUE                                             <i id="uniq"></i>

вказує на те, що у даному стовпчику зберігаються унікальні, не повторювані
значення на всю таблицю.


### Атрибути NULL и NOT NULL                                   <i id="null"></i>

вказують, чи може стовпчик приймати значення NULL. Якщо його явно не вказувати,
то за замовчуванням він буде NULL. Якщо стовпчик виступає первинним ключем він
за замовчуванням NOT NULL.

```sql
CREATE TABLE Customers
(
  Id INT PRIMARY KEY AUTO_INCREMENT, -- за замовчуванням NOT NULL
  Age INT,                           -- за замовчуванням NULL
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Email VARCHAR(30) NULL,
  Phone VARCHAR(20) NULL
);
```


### Атрибут DEFAULT визначає значення за замовчуванням.     <i id="default"></i>

```sql
CREATE TABLE Customers
(
  Id INT PRIMARY KEY AUTO_INCREMENT,
  Age INT DEFAULT 18,                -- <-
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Email VARCHAR(30) NOT NULL UNIQUE,
  Phone VARCHAR(20) NOT NULL UNIQUE
);
```


### Атрибут CHECK                                             <i id="check"></i>

робить перевірку на підходящість значень для збереження в таблиці.

```sql
CREATE TABLE Customers
(
  Id INT AUTO_INCREMENT,
  Age INT DEFAULT 18 CHECK(Age > 0 AND Age < 100), -- <-
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Email VARCHAR(30) CHECK(Email !=''),
  Phone VARCHAR(20) CHECK(Phone !='')
);
```

або

```sql
CREATE TABLE Customers
(
  Id INT AUTO_INCREMENT,
  Age INT DEFAULT 18,
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Email VARCHAR(30),
  Phone VARCHAR(20),
  CHECK((Age>0 AND Age<100) AND (Email !='') AND (Phone !=''))
);
```


### Оператор CONSTRAINT                                  <i id="constraint"></i>

вказує імена для обмежень, визначається на рівні таблиці.  
Смисл у іменах обмежень в тому, що за допомогою них можна встановлювати, змімати
або змінювати обмеження для запису даних в таблицю. Обмеження можна встановити
на ***PRIMARY KEY, CHECK, UNIQUE*** та ***FOREIGN KEY.*** По суті це псевдоніми,
за якими можна зверниутися до конкретної чарунки.

Приклад з видаленням зовнішнього ключа є трохи нижче (в розділі **Зміна
таблиці**, Додавання і видалення зовнішнього ключа).

```sql
CREATE TABLE Customers
(
  Id INT AUTO_INCREMENT,
  Age INT,
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Email VARCHAR(30),
  Phone VARCHAR(20) NOT NULL,
  CONSTRAINT customers_pk PRIMARY KEY(Id),             -- <-
  CONSTRAINT customer_phone_uq UNIQUE(Phone),          -- <-
  CONSTRAINT customer_age_chk CHECK(Age>0 AND Age<100) -- <-
);
```

ЗОВНІШНІ КЛЮЧІ FOREIGN KEY                                  <i id="foreign"></i>
--------------------------------------------------------------------------------
 
Зовнішні ключі встановлюють зв'язок між таблицями. Зовнішній ключ встановлюється
для стовпчиків із залежної таблиці і вказує на один зі стовпців головної. Як
правило зовнішній ключ вказує на первинний ключ головної таблиці. Загальна схема
на рівні таблиці:

```sql
[CONSTRAINT ім''я_обмеження]
FOREIGN KEY (стовпчик1, стовпчик2, … стовпчикN)
REFERENCES головна_таблиця (стовпчик_головної_таблиці1, стовпчик_головної_таблиці2, ... стовпчик_головної_таблиціN)
[ON DELETE дія]
[ON UPDATE дія]
```

```sql
CREATE TABLE Customers
(
  Id INT PRIMARY KEY AUTO_INCREMENT,
  Age INT,
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Phone VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE Orders
(
  Id INT PRIMARY KEY AUTO_INCREMENT,
  CustomerId INT,
  CreatedAt Date,
  CONSTRAINT orders_custonmers_fk
  FOREIGN KEY (CustomerId) REFERENCES Customers (Id)
  ON DELETE CASCADE
);
```

***ON DELETE та ON UPDATE визначають поведінку при зміні/видаленні рядка.***

Можливі варіанти значень:

**CASCADE**     автоматично видаляє/видозмінює рядки залежної таблиці  
**SET NULL**    при зміні рядка в головній таблиці у залежній для стовпчика
                зовнішнього ключа встановлює NULL (стовпчик повинен
                підтримувати установку NULL)  
**RESTRICT**    забороняє зміну/видалення рядку в головній таблиці
**NO ACTION**   = RESTRICT  
**SET DEFAULT** якщо в головній таблиці видаляється рядок, у залежній для
                стовпчика зовнішнього ключа встановлюється значення, вказане в
                атрибуті DEFAULT. Дана опція не підтримується рушієм InnoDB.


ЗМІНА ТАБЛИЦІ                                                <i id="change"></i>
--------------------------------------------------------------------------------

Для зміни уже існуючої таблиці використовується команда ALTER TABLE:

```sql
ALTER TABLE назва_таблиці
{ ADD назва_стовпчика тип_даних_стовпчика [атрибути_стовпчика] |
  DROP COLUMN назва_стовпчика |
  MODIFY COLUMN назва_стовпчика тип_даних_стовпчика [атрибути_стовпчика] |
  ALTER COLUMN назва_стовпчика SET DEFAULT значення_за_замовчуванням |
  ADD [CONSTRAINT] визначення_обмеження |
  DROP [CONSTRAINT] ім''я_обмеження
}
```

Додавання стовпчика:
```sql
ALTER TABLE Customers
ADD Address VARCHAR(50) NULL;
```

Видалення стовпчика:
```sql
ALTER TABLE Customers
DROP COLUMN Address;
```

Зміна значення за замовчуванням:
```sql
ALTER TABLE Customers
ALTER COLUMN Age SET DEFAULT 22;
```

Зміна типу стовпчика:
```sql
ALTER TABLE Customers
MODIFY COLUMN FirstName CHAR(100) NULL;
```

Додавання і видалення зовнішнього ключа:
```sql
CREATE TABLE Customers
(
  Id INT PRIMARY KEY AUTO_INCREMENT,
  Age INT,
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL
);
CREATE TABLE Orders
(
  Id INT PRIMARY KEY AUTO_INCREMENT,
  CustomerId INT,
  CreatedAt Date
);

-- додавання
ALTER TABLE Orders
ADD CONSTRAINT orders_customers_fk
FOREIGN KEY(CustomerId) REFERENCES Customers(Id);

-- видалення
ALTER TABLE Orders
DROP FOREIGN KEY orders_customers_fk;
```

Додавання і видалення первинного ключа:
```sql
CREATE TABLE Products
(
  Id INT,
  Model VARCHAR(20)
);

-- додавання
ALTER TABLE Products
ADD PRIMARY KEY (Id);

-- видалення
ALTER TABLE Products
DROP PRIMARY KEY;
```


ОПЕРАЦІЇ З ДАНИМИ                                    <i id="dataoperations"></i>
--------------------------------------------------------------------------------

### INSERT - додавання даних                                 <i id="insert"></i>

```sql
INSERT [INTO] ім''я_таблиці [(список_стовпчиків)] VALUES (значення1, значення2, ... значенняN)
```

```sql
CREATE DATABASE productsdb;
USE productsdb;
CREATE TABLE Products
(
  Id INT AUTO_INCREMENT PRIMARY KEY,
  ProductName VARCHAR(30) NOT NULL,
  Manufacturer VARCHAR(20) NOT NULL,
  ProductCount INT DEFAULT 0,
  Price DECIMAL NOT NULL
);

INSERT Products(ProductName, Manufacturer, ProductCount, Price)
VALUES ('iPhone X', 'Apple', 5, 76000);
```

множинне додавання даних:

```sql
INSERT Products(ProductName, Manufacturer, Price, ProductCount)
VALUES
('iPhone 8', 'Apple', 51000, 3),
('P20 Lite', 'Huawei', 34000, 4),
('Galaxy S8', 'Samsung', 46000, 2);
```

> ***якщо стовпчик має дефолтне значення або підтримує NULL, його можна не
передавати, або, навпаки, явно передати ключові слова DEFAULT i NULL. Стовпчики
з атрибутом AUTO_INCREMENT також можна не передавати***

```sql
INSERT Products(ProductName, Manufacturer, Price, ProductCount) 
VALUES
('Nokia 9', 'HDM Global', 41000, DEFAULT),
('Nokia 9', 'HDM Global', 41000, NULL);
```


### SELECT - вибірка даних                                   <i id="select"></i>

```sql
SELECT список_стовпчиків FROM ім''я_таблиці
```

```sql
CREATE TABLE Products
(
  Id INT AUTO_INCREMENT PRIMARY KEY,
  ProductName VARCHAR(30) NOT NULL,
  Manufacturer VARCHAR(20) NOT NULL,
  ProductCount INT DEFAULT 0,
  Price DECIMAL
);
INSERT INTO Products (ProductName, Manufacturer, ProductCount, Price)
VALUES
('iPhone X', 'Apple', 3, 76000),
('iPhone 8', 'Apple', 2, 51000),
('Galaxy S9', 'Samsung', 2, 56000),
('Galaxy S8', 'Samsung', 1, 41000),
('P20 Pro', 'Huawei', 5, 36000);

SELECT * FROM Products;                  -- показати все
SELECT ProductName, Price FROM Products; -- показати тільки певні стовпчики
```

***для виводу даних можуть використовуватися вирази, а не назви стовпчиків:***
```sql
SELECT ProductName, Price * ProductCount FROM Products;
```

***оператор AS дозволяє вивести стовпчики під іншими назвами:***
```sql
SELECT ProductName AS Title, Price * ProductCount AS TotalSum FROM Products;
```


### WHERE - фільтрація даних (фільтрвція рядків в таблиці)    <i id="where"></i>

```sql
WHERE умова
```


#### типи умов:                                          <i id="wheretypes"></i>

|символ|значення   |символ|значення        |
|------|-----------|------|----------------|
|=     |рівність   |\>    |менше           |
|!=    |не рівність|<=    |більше або рівно|
|<>    |не рівність|\>=   |менше або рівно |
|<     |більше     |      |                |

***при порівнянні регістр символів не має значення***


### логічні оператори AND, OR, NOT                       <i id="and-or-not"></i>
**пріоритетність логічних операторів:**
```
NOT > AND > OR
```
> ***дужки можуть змінювати пріоритетність***

```sql
SELECT * FROM Products WHERE Manufacturer = 'Samsung';
SELECT * FROM Products WHERE ProductCount < 3;
SELECT * FROM Products WHERE Price * ProductCount > 100000;
SELECT * FROM Products WHERE Manufacturer = 'Samsung' AND Price > 50000;
SELECT * FROM Products WHERE NOT Manufacturer = 'Samsung';
```

### UPDATE - оновлення даних                                 <i id="update"></i>

```sql
UPDATE ім''я_таблиці
SET стовпчик1 = значення1, стовпчик2 = значення2, ... стовпчикN = значенняN
[WHERE умова_оновлення]
```

**Якщо не вжити WHERE, оновляться усі дані!**

```sql
UPDATE Products SET Price = Price + 3000; -- збільшити усі ціни на 3000

UPDATE Products SET Manufacturer = 'Samsung Inc.' WHERE Manufacturer = 'Samsung';

UPDATE Products
SET Manufacturer = 'Samsung',
    ProductCount = ProductCount + 3
WHERE Manufacturer = 'Samsung Inc.';

UPDATE Products
SET ProductCount = DEFAULT
WHERE Manufacturer = 'Huawei';
```

### DELETE - видалення даних                                 <i id="delete"></i>

```sql
DELETE FROM ім''я_таблиці
[WHERE умова_видалення]
```

**Якщо не вжити WHERE, видаляться усі дані!**

```sql
DELETE FROM Products WHERE Manufacturer='Huawei';
DELETE FROM Products WHERE Manufacturer='Apple' AND Price < 60000;
DELETE FROM Products;
```


ЗАПИТИ                                                      <i id="queries"></i>
--------------------------------------------------------------------------------

### DISTINCT - вибірка унікальних значень (відкидаються повтори) <i id="distinct"></i>

```sql
USE productsdb;
DROP TABLE IF EXISTS Products;
CREATE TABLE Products
(
  Id INT AUTO_INCREMENT PRIMARY KEY,
  ProductName VARCHAR(30) NOT NULL,
  Manufacturer VARCHAR(20) NOT NULL,
  ProductCount INT DEFAULT 0,
  Price DECIMAL NOT NULL
);
INSERT INTO Products (ProductName, Manufacturer, ProductCount, Price)
VALUES
('iPhone X', 'Apple', 3, 71000),
('iPhone 8', 'Apple', 3, 56000),
('Galaxy S9', 'Samsung', 6, 56000),
('Galaxy S8', 'Samsung', 2, 46000),
('Honor 10', 'Huawei', 3, 26000);

SELECT Manufacturer FROM Products; -- -> Apple, Apple, Samsung, Samsung,Huawei
SELECT DISTINCT Manufacturer FROM Products; -- -> Apple, Samsung, Huawei
```

також можна робити вибірку по кількох стовпчиках:
```sql
SELECT DISTINCT Manufacturer, ProductCount FROM Products;
-- -> Apple 3, Samsung 6, Samsung 2, Huawei 3
```


ОПЕРАТОРИ ФІЛЬТРАЦІЇ                                          <i id="filtr"></i>
--------------------------------------------------------------------------------

### IN - вибір підходящого                                       <i id="in"></i>

```sql
WHERE вираз [NOT] IN (перелік)
```
```sql
--  вибрати усі записи, де виробниками є 'Samsung', 'HTC', 'Huawei'
SELECT * FROM Products WHERE Manufacturer IN ('Samsung', 'HTC', 'Huawei');
-- вибрати усі записи, де виробниками не є 'Samsung', 'HTC', 'Huawei'
SELECT * FROM Products WHERE Manufacturer NOT IN ('Samsung', 'HTC', 'Huawei');

SELECT * FROM Customers WHERE Country IN (SELECT Country FROM Suppliers);
```

### [NOT] BETWEEN … AND - діапазон значень                  <i id="between"></i>

```sql
WHERE вираз [NOT] BETWEEN початкове_значення AND кінцеве_значення
```
```sql
SELECT * FROM Products WHERE Price BETWEEN 20000 AND 50000;
SELECT * FROM Products WHERE Price NOT BETWEEN 20000 AND 50000;
SELECT * FROM Products WHERE Price * ProductCount BETWEEN 90000 AND 150000;
```

### LIKE - простий шаблон рядка                                <i id="like"></i>

```sql
WHERE вираз [NOT] LIKE шаблон_рядка
```

% - будь-який підрядок (навіть пустий):
```sql
WHERE ProductName LIKE 'Galaxy%' --   -> "Galaxy Ace 2" / "Galaxy S7"
```

_ - будь-який одиночний символ:
```sql
WHERE ProductName LIKE 'Galaxy S_' -- -> "Galaxy S7" / "Galaxy S8".
```

### REGEXP - регулярний вираз                                <i id="regexp"></i>

```sql
WHERE вираз [NOT] REGEXP регулярний_вираз
```

-- ^               початок рядка  
-- $               кінець рядка  
-- .               одиночний символ  
-- [символи]       будь-який один символ з переліку  
-- [символ-символ] будь-який один символ з діапазону  
-- |               розділювач шаблонів, значення повинно бути == одному із  
--                 шаблонів  

```sql
WHERE ProductName REGEXP 'Phone':         -- -> iPhone X, Nokia Phone N, iPhone
WHERE ProductName REGEXP '^Phone':        -- -> Phone 34, PhoneX
WHERE ProductName REGEXP 'Phone$':        -- -> iPhone, Nokia Phone
WHERE ProductName REGEXP 'iPhone [78]';:  -- -> або iPhone 7, або iPhone 8
WHERE ProductName REGEXP 'iPhone [6-8]';: -- -> або iPhone 6, або iPhone 7, або iPhone 8
WHERE ProductName REGEXP 'Phone|Galaxy';  -- -> або Phone, або Galaxy
```

### IS NULL - вибірка NULL                                   <i id="isnull"></i>

```sql
SELECT * FROM Products WHERE ProductCount IS NULL;
SELECT * FROM Products WHERE ProductCount IS NOT NULL;
```


СОРТУВАННЯ                                                     <i id="sort"></i>
--------------------------------------------------------------------------------

### ORDER BY       - сортування за зростанням               <i id="orderby"></i>
### ORDER BY … ASC - сортування за зростанням (вказане явно)

```sql
SELECT * FROM Products ORDER BY Price ASC;

SELECT ProductName, ProductCount * Price AS TotalSum
FROM Products
ORDER BY TotalSum;

SELECT ProductName, Price, ProductCount
FROM Products
ORDER BY ProductCount * Price;
```

### ORDER BY … DESC - сортування за спаданням             <i id="orderdest"></i>

```sql
SELECT ProductName, ProductCount
FROM Products
ORDER BY ProductCount DESC;
```

### сортування за кількома стовпчиками:                    <i id="polysort"></i>

```sql
SELECT ProductName, Price, Manufacturer
FROM Products
ORDER BY Manufacturer, ProductName;

SELECT ProductName, Price, Manufacturer
FROM Products
ORDER BY Manufacturer ASC, ProductName DESC;
```


ОТРИМАННЯ ДІАПАЗОНА                                           <i id="range"></i>
--------------------------------------------------------------------------------

### LIMIT                                                     <i id="limit"></i>

```sql
LIMIT [offset,] rowcount
```
```sql
SELECT * FROM Products LIMIT 3;    -- взяти 3 перших рядка (1,2,3)
SELECT * FROM Products LIMIT 2, 3; -- пропустити 2, взяти 3 (3,4,5)
```


АГРЕГАТНІ ФУНКЦІЇ                                               <i id="agr"></i>
--------------------------------------------------------------------------------

|назва    |значення                   |тип даних           |відношення до NULL|
|---------|---------------------------|--------------------|------------------|
|**AVG**  | середнє значення          | числа              | ігнорують NULL   |
|**SUM**  | сума                      | числа              | ігнорують NULL   |
|**MIN**  | найменше значення         | числа, рядки, дати | ігнорують NULL   |
|**MAX**  | найбільше значення        | числа, рядки, дати | ігнорують NULL   |
|**COUNT**| кількість рядків у запиті | числа, рядки, дати |                  |

```sql
SELECT AVG(Price) AS Average_Price FROM Products;
SELECT AVG(Price) FROM Products WHERE Manufacturer='Apple';
SELECT AVG(Price * ProductCount) FROM Products;

SELECT COUNT(*) FROM Products;
SELECT COUNT(Manufacturer) FROM Products; -- відкидає NULL
SELECT MIN(Price), MAX(Price) FROM Products;

SELECT SUM(ProductCount) FROM Products;
SELECT SUM(ProductCount * Price) FROM Products;
```

якщо потрібно проагрегувати рядки, виключивши повторювані значення,
використовують **DISTINC** (за замовчуванням використовується **ALL**).

комбінування агрегатних функцій:
```sql
SELECT COUNT(*) AS ProdCount,
       SUM(ProductCount) AS TotalCount,
       MIN(Price) AS MinPrice,
       MAX(Price) AS MaxPrice,
       AVG(Price) AS AvgPrice
FROM Products;
```


ГРУПУВАННЯ                                                    <i id="group"></i>
--------------------------------------------------------------------------------

Групування відбувається в рамках команди **SELECT**.

```sql
SELECT стовпчики
FROM таблиця
[WHERE умова_фільтрації_рядків]
[GROUP BY стовпчики_для_згрупування]
[HAVING умова_фільтрації_груп]
[ORDER BY стовпчики_для_сортування]
```


### GROUP BY                                                <i id="groupby"></i>

визначає, як будуть групуватися рядки. Потрібен, якщо в select іде вибірка по
одному або кількоx стовпчиках і використовуються агрегатні функції.  

```sql
-- тут результатом буде таблиця з двома стовпчиками: виробник і кількість його
-- моделей. Якщо не вжити GROUP BY Manufacturer, mySQL поверне таблицю з одним
-- рядком: в manufacturer буде виробник, вказаний у першому записі, а в
-- кількості буде сума усіх моделей усіх виробників.
SELECT Manufacturer, COUNT(*) AS ModelsCount
FROM Products
GROUP BY Manufacturer;
```

**GROUP BY** може виконувати групування за кількома стовпчиками:
```sql
SELECT Manufacturer, ProductCount, COUNT(*) AS ModelsCount
FROM Products
GROUP BY Manufacturer, ProductCount
```

**GROUP BY** повинен розташувуватися після **WHERE**, але перед **ORDER BY**.
```sql
SELECT Manufacturer, COUNT(*) AS ModelsCount
FROM Products
WHERE Price > 30000
GROUP BY Manufacturer
ORDER BY ModelsCount DESC;
```


###  HAVING                                                  <i id="having"></i>

фільтрує групи, створені перед цим **GROUP BY**. Працює аналогічно до **WHERE**,
з тією різницею, що **WHERE** фільтрує рядки, а **HAVING** - групи.

згрупувати усіх виробників, вивести тільки ті групи, де кількість моделей > 1:
```sql
SELECT Manufacturer, COUNT(*) AS ModelsCount
FROM Products
GROUP BY Manufacturer
HAVING COUNT(*) > 1;
```

**WHERE** + **HAVING** + **ORDER BY**:
```sql
SELECT Manufacturer, COUNT(*) AS Models, SUM(ProductCount) AS Units
FROM Products
WHERE Price * ProductCount > 80000
GROUP BY Manufacturer
HAVING SUM(ProductCount) > 2
ORDER BY Units DESC;
```


ПІДЗАПИТИ                                                <i id="subqueries"></i>
--------------------------------------------------------------------------------

Підзапити - це вирази select, вбудовані у інші запити sql.

```sql
CREATE TABLE Products
(
  Id INT AUTO_INCREMENT PRIMARY KEY,
  ProductName VARCHAR(30) NOT NULL,
  Manufacturer VARCHAR(20) NOT NULL,
  ProductCount INT DEFAULT 0,
  Price DECIMAL NOT NULL
);
CREATE TABLE Orders
(
  Id INT AUTO_INCREMENT PRIMARY KEY,
  ProductId INT NOT NULL,
  ProductCount INT DEFAULT 1,
  CreatedAt DATE NOT NULL,
  Price DECIMAL NOT NULL,
  FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE
);

INSERT INTO Products (ProductName, Manufacturer, ProductCount, Price)
VALUES ('iPhone X', 'Apple', 2, 76000),
('iPhone 8', 'Apple', 2, 51000),
('iPhone 7', 'Apple', 5, 42000),
('Galaxy S9', 'Samsung', 2, 56000),
('Galaxy S8', 'Samsung', 1, 46000),
('Honor 10', 'Huawei', 2, 26000),
('Nokia 8', 'HMD Global', 6, 38000);


-- тут для отримання даних з головної таблиці і запису їх у залежну
-- використовуються підзапити:
INSERT INTO Orders (ProductId, CreatedAt, ProductCount, Price)
VALUES
( 
  (SELECT Id FROM Products WHERE ProductName='Galaxy S8'),
  '2018-05-21', 
  2, 
  (SELECT Price FROM Products WHERE ProductName='Galaxy S8')
),
( 
  (SELECT Id FROM Products WHERE ProductName='iPhone X'),
  '2018-05-23',  
  1, 
  (SELECT Price FROM Products WHERE ProductName='iPhone X')
),
( 
  (SELECT Id FROM Products WHERE ProductName='iPhone 8'),
  '2018-05-21',  
  1, 
  (SELECT Price FROM Products WHERE ProductName='iPhone 8')
);
```

або знайти товари, з ціною, вищою за середню:
```sql
SELECT * FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);
```


### Корелюючі і не корелюючі підзапити                 <i id="queriessorts"></i>

Не корелюючі підзапити - це підзапити, результати яких не залежать від рядків,
які вибираються у основному запиті. Такі підзапити виконуються один раз для
усього зовнішнього запиту. Корелюючі підзапити навпаки мають результати, які
залежать від рядків, які вибираються у головному запиті.
Виконання корелюючих підзапитів сповільнює виконання усього запиту.


приклад корелюючого підзапиту:
```sql
SELECT  CreatedAt, Price, 
        (SELECT ProductName FROM Products 
        WHERE Products.Id = Orders.ProductId) AS Product
FROM Orders;
```

приклад корелюючого підзапиту з додатковими псевдонімами:
```sql
SELECT ProductName,
       Manufacturer,
       Price, 
        (SELECT AVG(Price) FROM Products AS SubProds 
         WHERE SubProds.Manufacturer=Prods.Manufacturer)  AS AvgPrice
FROM Products AS Prods
WHERE Price > 
    (SELECT AVG(Price) FROM Products AS SubProds 
     WHERE SubProds.Manufacturer=Prods.Manufacturer);
```


ПІДЗАПИТИ В ОСНОВНИХ КОМАНДАХ SQL              <i id="subqueriesincommands"></i>
--------------------------------------------------------------------------------

### SELECT                                                <i id="subselect"></i>

```sql
SELECT * FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);
```

дані зі зв'язаної таблиці краще брати за допомогою **JOIN**, це більше для
прикладу:

```sql
SELECT * FROM Products
WHERE Id NOT IN (SELECT ProductId FROM Orders);
```


#### Набори значень                                            <i id="sets"></i>

В операторах порівняння підзапити повинні повертати одне скалярне значення. Якщо
потрібно повернути набір значень, треба використовувати **ALL, SOME (SOME = ANY)**.

```sql
-- знайти товари, ціна яких менша за будь-який товар фірми Apple:
SELECT * FROM Products
WHERE Price < ALL(SELECT Price FROM Products WHERE Manufacturer='Apple');

-- це те ж саме:
SELECT * FROM Products
WHERE Price < (SELECT MIN(Price) FROM Products WHERE Manufacturer='Apple');
```

```sql
-- знайти товари, які коштують менше самого дорогого Apple:
SELECT * FROM Products
WHERE Price < ANY(SELECT Price FROM Products WHERE Manufacturer='Apple');

-- це те ж саме:
SELECT * FROM Products
WHERE Price < (SELECT MAX(Price) FROM Products WHERE Manufacturer='Apple');
```


#### Підзапит як стовпчик                            <i id="subquerycolumn"></i>

```sql
SELECT *, 
(SELECT ProductName FROM Products WHERE Id=Orders.ProductId) AS Product 
FROM Orders;
```


### INSERT                                                <i id="subinsert"></i>

визначення значення, яке буде вставлене в стовпчик:
```sql
INSERT INTO Orders (ProductId, CreatedAt, ProductCount, Price)
VALUES
( 
  (SELECT Id FROM Products WHERE ProductName='Galaxy S8'),
  '2018-05-23',  
  2, 
  (SELECT Price FROM Products WHERE ProductName='Galaxy S8')
);
```


### UPDATE                                                <i id="subupdate"></i>

встановлюване значення після **SET**:
```sql
UPDATE Orders
SET ProductCount = ProductCount + 2
WHERE ProductId IN (SELECT Id FROM Products WHERE Manufacturer='Apple');
```

частина умови **WHERE**:
```sql
UPDATE Orders
SET Price = (SELECT Price FROM Products WHERE Id=Orders.ProductId) + 3000
WHERE Id=1;
```

### DELETE                                                <i id="subdelete"></i>

```sql
DELETE FROM Orders
WHERE ProductId=(SELECT Id FROM Products WHERE ProductName='Galaxy S8');
```


Оператор EXISTS                                              <i id="exists"></i>
--------------------------------------------------------------------------------

Оператор **EXISTS** перевіряє, чи повертає підзапит яке-небудь значення. Є
індикатором того, що як мінімум один рядок підпадає під певну умову. Оскільки
повернення набору рядків не відбувається, підзапит виконується швидше, ніж
**IN**.

```sql
-- знайти усі товари, на які є замовлення:
SELECT * FROM Products
WHERE EXISTS 
(SELECT * FROM Orders WHERE Orders.ProductId = Products.Id)
```


З'ЄДНАННЯ ТАБЛИЦЬ                                        <i id="jointables"></i>
--------------------------------------------------------------------------------

### Неявне з'єднання                                    <i id="defaultjoin"></i>

Наприклад, є три таблиці: Products, Customers, Orders. В таблиці Orders є
зовнішні ключі, які вказують на дві інші таблиці:

```sql
FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE,
FOREIGN KEY (CustomerId) REFERENCES Customers(Id) ON DELETE CASCADE
```

Для з'єднання таблиць Orders і Customers обов'язково потрібне ключове слово
WHERE, без нього приєднання буде у форматі Сross Join ("усі до всіх"), тобто
якщо в Orders буде три записи і в Customers теж 3, то в результуючій таблиці
буде 3×3=9 записів, що буде абсолютною білібердою.
```sql
SELECT * FROM Orders, Customers
WHERE Orders.CustomerId = Customers.Id;
```

Для з'єднання окремих стовпчиків усіх трьох таблиць:
```sql
SELECT Customers.FirstName, Products.ProductName, Orders.CreatedAt 
FROM Orders, Customers, Products
WHERE Orders.CustomerId = Customers.Id AND Orders.ProductId=Products.Id;
```

Для скорочення довжини запиту можна скористатися псевдонімами таблиць. Якщо
потрібно вибрати усі стовпчики якоїсь таблиці, потрібно використовувати зірочку:
```sql
SELECT C.FirstName, P.ProductName, O.*
FROM Orders AS O, Customers AS C, Products AS P
WHERE O.CustomerId = C.Id AND O.ProductId=P.Id;
```


### Inner Join                                            <i id="innerjoin"></i>

повертає тільки ті рядки з усіх таблиць, які підпадають під умову

загальний синтаксис:
```sql
SELECT стовпчики
FROM таблиця1
[INNER] JOIN таблиця2  -- наявність/відсутність INNER ні на що не впливає
ON умова1
[[INNER] JOIN таблиця3
ON умова2]
```

приклад:
```sql
SELECT O.CreatedAt, O.ProductCount, P.ProductName 
FROM Orders AS O
JOIN Products AS P
ON P.Id = O.ProductId;
```

приєднання кількох таблиць:
```sql
SELECT Orders.CreatedAt, Customers.FirstName, Products.ProductName 
FROM Orders
JOIN Products ON Products.Id = Orders.ProductId
JOIN Customers ON Customers.Id = Orders.CustomerId;
```

фільтрація і сортування створеної таблиці:
```sql
SELECT Orders.CreatedAt, Customers.FirstName, Products.ProductName 
FROM Orders
JOIN Products ON Products.Id = Orders.ProductId
JOIN Customers ON Customers.Id = Orders.CustomerId
WHERE Products.Price > 45000
ORDER BY Customers.FirstName;
```


### Outer Join                                            <i id="outerjoin"></i>

повертає усі рядки однієї таблиці та рядки інших таблиць, що підпадають під
умову. Якщо в інших таблицях нема даних, що відповідають умові, у зведену
таблицю записується null.

загальний синтаксис:
```sql
SELECT стовпчики
FROM таблиця1
{LEFT|RIGHT} [OUTER] JOIN таблиця2 ON умова1      -- наявність/відсутність OUTER
[{LEFT|RIGHT} [OUTER] JOIN таблиця3 ON умова2]... -- ні на що не впливає
```

LEFT означає, що у вибірці будуть знаходитися УСІ рядки з першої/лівої таблиці
RIGHT означає, що у вибірці будуть знаходитися УСІ рядки з другої/правої таблиці

приклад:
```sql
SELECT FirstName, CreatedAt, ProductCount, Price, ProductId 
FROM Orders LEFT JOIN Customers 
ON Orders.CustomerId = Customers.Id;
```
```sql
SELECT FirstName FROM Customers
LEFT JOIN Orders ON Customers.Id = Orders.CustomerId
WHERE Orders.CustomerId IS NULL;
```


### Сross Join                                            <i id="crossjoin"></i>

повертає усі рядки усіх таблиць. Дія аналогічна до описаного вище неявного
з'єднання без ключового слова WHERE.

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
CROSS JOIN Orders;
```


### Self Join                                              <i id="selfjoin"></i>

з'єднання таблиці самої із собою.

```sql
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;
```


### UNION                                                     <i id="union"></i>

об'єднує однаково названі стовпчики різних таблиць (відкидаючи повторювані
значення - якщо без ALL)

загальний синтаксис:
```sql
SELECT_вираз1
UNION [ALL] SELECT_вираз2
[UNION [ALL] SELECT_виразN]
```

приклад:
```sql
SELECT FirstName, LastName 
FROM Customers
UNION SELECT FirstName, LastName FROM Employees;
```

**UNION** + **ORDER BY**:
```sql
SELECT FirstName AS FName, LastName
FROM Customers
UNION SELECT FirstName, LastName
FROM Employees
ORDER BY FName DESC;
```

об'єднання вибірок з однієї і тієї ж таблиці:
```sql
SELECT FirstName, LastName, AccountSum + AccountSum * 0.1 AS TotalSum 
FROM Customers WHERE AccountSum < 3000
UNION SELECT FirstName, LastName, AccountSum + AccountSum * 0.3 AS TotalSum 
FROM Customers WHERE AccountSum >= 3000;
```


ФУНКЦІЇ ДЛЯ РОБОТИ З РЯДКАМИ                                <i id="sttfunc"></i>
--------------------------------------------------------------------------------

**CONCAT** - об'єднання рядків, не рядкові значення спочатку приводить до рядків
```sql
SELECT CONCAT('Tom', ' ', 'Smith');  -- Tom Smith
```

**CONCAT_WS** - те саме, що і **CONCAT**, але 1й аргумент - роздількик
```sql
SELECT CONCAT_WS(' ', 'Tom', 'Smith', 'Age:', 34);  -- Tom Smith Age: 34
```

**LENGTH(str)**
```sql
SELECT LENGTH('Tom Smith');  -- 9
```

**LTRIM** - видаляє пробіли зліва
```sql
SELECT LTRIM('  Apple');
```

**RTRIM** - видаляє пробіли справа
```sql
  
SELECT RTRIM(' Apple    ');
```

**TRIM** - видаляє пробіли з обох боків
```sql
SELECT TRIM('  Tom Smith   ');
```

**LOCATE(find, search [, start])** - пошук підрядка у рядку, аналог **indexof**
в JS. Нуменація в SQL починається з 1! Якщо підрядок  не знайдено, повертається 0
```sql
SELECT LOCATE('om', 'Tom Smith');   -- 2
SELECT LOCATE('m', 'Tom Smith');    -- 3
SELECT LOCATE('m', 'Tom Smith', 4); -- 6
SELECT LOCATE('mig', 'Tom Smith');  -- 0
```

**LEFT** - вирізає зліва вказану кількість символів
```sql
SELECT LEFT('Apple', 3); -- App
```

**RIGHT** - вирізає справа вказану кількість символів
```sql
SELECT RIGHT('Apple', 3);    -- ple
```

**SUBSTRING(str, start [, length])** - взяття підрядка з рядка
```sql
SELECT SUBSTRING('Galaxy S8 Plus', 8),       -- S8 Plus
(SELECT SUBSTRING('Galaxy S8 Plus', 8, 2) ); -- S8
```

**SUBSTRING_INDEX(str, delimiter, count)** - вирізає підрядок з рядка по
роздільнику. count визначає, після якого за разунком роздільника обрізати
```sql
SELECT SUBSTRING_INDEX('Galaxy S8 Plus', ' ', 1),     -- Galaxy
(SELECT SUBSTRING_INDEX('Galaxy S8 Plus', ' ', 2) ),  -- Galaxy S8
(SELECT SUBSTRING_INDEX('Galaxy S8 Plus', ' ', -2) ); -- S8 Plus
```

**REPLACE(search, find, replace)** - заміна в рядку підрядка1 на підрядок2
```sql
SELECT REPLACE('Galaxy S8 Plus', 'S8 Plus', 'Note 8')   -- Galaxy Note 8
```

**INSERT(str, start, length, insert)** - з позиції start видалити length сиволів,
вставити підрядок insert
```sql
SELECT INSERT('Galaxy S9', 8, 3, 'Note 9');   -- Galaxy Note 9
```

**REVERSE** - переворот рядка
```sql
SELECT REVERSE('123456789') -- 987654321
```

**LOWER** - нижній регістр
```sql
SELECT LOWER('Apple')   -- apple
```

**UPPER** - верхній регістр
```sql
SELECT UPPER('Apple')   -- APPLE
```

**SPACE(num)** - повертає рядок, який містить вказану кількість пробілів

**REPEATE(str, count)** - мультиплікація рядка
```sql
SELECT REPEAT('ab', 5);   -- ababababab
```

**LPAD(str, length, pad)** - додає на початок рядка length кількість підрядків
pad
```sql
SELECT LPAD('Tom Smith', 13, '*');   -- ****Tom Smith
```

**RPAD(str, length, pad)** - додає в кінець рядка length кількість підрядків pad
```sql
SELECT RPAD('Tom Smith', 13, '*');   -- Tom Smith****
```

приклад викорастання рядкових функцій у вибірках:
```sql
SELECT UPPER(LEFT(Manufacturer,2)) AS Abbreviation,
CONCAT(ProductName, ' - ',  Manufacturer) AS FullProdName
FROM Products
ORDER BY Abbreviation;
```


ФУНКЦІЇ ДЛЯ РОБОТИ З ЧИСЛАМИ                                <i id="numfunc"></i>
--------------------------------------------------------------------------------

**ROUND** - округлення числа. Другий параметр - точність. Якщо вона додатня, то
відбувається округлення дробової частини. Якщо від'ємна - цілої.
```sql
SELECT ROUND(1342.345, 2),    -- 1342.35
(SELECT ROUND(1342.345, -2)); -- 1300;
```

**TRUNCATE** - обрізка дробової частини
```sql
SELECT TRUNCATE(1342.345, 2); -- 1342.34
```

**ABS** - повернення абсолютного значення числа
```sql
SELECT ABS(-123) -- 123
```

**CEILING** - повертає найменше ціле число, яке більше або рівне заданому
```sql
SELECT CEILING(-123.45),  -- -123
(SELECT CEILING(123.45)); -- 124
```

**FLOOR** - повертає найменше ціле число, яке менше або рівне заданому
```sql
SELECT FLOOR(-123.45),  -- -124
(SELECT FLOOR(123.45)); -- 123
```

**POWER** - піднесення до степеня
```sql
SELECT POWER(5, 2),   -- 25
(SELECT POWER(5, 3)); -- 125
```

**SQRT** - корінь квадратний
```sql
SELECT SQRT(225); -- 15
```

**SIGN** - повертає -1, якщо число менше 0, 0 - якщо рівне 0 і 1 - якщо більше
```sql
SELECT SIGN(-5),  -- -1
(SELECT SIGN(7)); -- 1
```

**RAND** - генерує випадкове число з плаваючою крапкою від 0 до 1
```sql
SELECT RAND(); -- 0.707365088352935
SELECT RAND(); -- 0.173808327956812
```

приклад викорастання числових функцій у вибірках:
```sql
SELECT UPPER(LEFT(Manufacturer,2)) AS Abbreviation,
CONCAT(ProductName, ' - ',  Manufacturer) AS FullProdName
FROM Products
ORDER BY Abbreviation;
```


ФУНКЦІЇ ДЛЯ РОБОТИ З ДАТАМИ І ЧАСОМ                        <i id="datefunc"></i>
--------------------------------------------------------------------------------

**NOW, SYSDATE, CURRENT_TIMESTAMP** - дата і час на основі системного годинника
```sql
SELECT NOW();               -- 2018-05-25 21:34:55
SELECT SYSDATE();           -- 2018-05-25 21:34:55
SELECT CURRENT_TIMESTAMP(); -- 2018-05-25 21:32:55
```

**CURDATE, CURRENT_DATE** - локальна дата
```sql
SELECT CURRENT_DATE();      -- 2018-05-25
SELECT CURDATE();           -- 2018-05-25
```

**CURTIME, CURRENT_TIME** - поточний час
```sql
SELECT CURRENT_TIME();  -- 20:47:45
SELECT CURTIME();       -- 20:47:45
```

**UTC_DATE** - локальна дата відносно GMT
```sql
SELECT UTC_DATE();      -- 2018-05-25
```

**UTC_TIME** - локальний час відносно GMT
```sql
SELECT UTC_TIME();      -- 17:47:45
```

**DAYOFMONTH(date)** - день місяця числом
```sql
SELECT DAYOFMONTH('2018-05-25') -- 25
```

**DAYOFWEEK(date)** - день тижня числом (неділя - 1)
```sql
SELECT DAYOFWEEK('2018-05-25') -- 6
```

**DAYOFYEAR(date)** - номер дня в році
```sql
SELECT DAYOFYEAR('2018-05-25') -- 145
```

**MONTH(date)** - місяць року числом
```sql
SELECT MONTH('2018-05-25') -- 5
```

**YEAR(date)** - рік
```sql
SELECT YEAR('2018-05-25') -- 2018
```

**QUARTER(date)** - номер квартала
```sql
SELECT QUARTER('2018-05-25') -- 2
```

**WEEK(date [, first])** - номер тижня в році, first задає 1й день тижня. Якщо
1 - понеділок, якщо 0 - неділя
```sql
SELECT WEEK('2018-05-25', 1) -- 21
```

**LAST_DAY(date)** - останній день місяця датою
```sql
SELECT LAST_DAY('2018-05-25') -- 2018-05-31
```

**DAYNAME(date)** - назва дня тижня
```sql
SELECT DAYNAME('2018-05-25') -- Friday
```

**MONTHNAME(date)** - назва місяця
```sql
SELECT MONTHNAME('2018-05-25') -- May
```

**HOUR(time)** - кількість годин
```sql
SELECT HOUR('21:25:54') -- 21
```

**MINUTE(time)** - кількість хвилин
```sql
SELECT MINUTE('21:25:54') -- 25
```

**SECOND(time)** - кількість секунд
```sql
SELECT SECOND('21:25:54') -- 54
```

**EXTRACT(unit FROM datetime)** - видобуток з дати і часу певного компоненту

unit може бути наступного виду:
  SECOND - секунди
  MINUTE - хвилини
  HOUR - години
  DAY - дні
  MONTH - місяць
  YEAR - рік
  MINUTE_SECOND - хвилини + секунди
  HOUR_MINUTE - години + хвилини
  DAY_HOUR - день + години
  YEAR_MONTH - рік + місяць
  HOUR_SECOND - години + хвидини + секунди
  DAY_MINUTE - день + години + хвилини
  DAY_SECOND - день + години + хвилини + секунди

```sql
SELECT EXTRACT( SECOND FROM '2018-05-25 21:25:54')        -- 54
SELECT EXTRACT( MINUTE FROM '2018-05-25 21:25:54')        -- 25
SELECT EXTRACT( HOUR FROM '2018-05-25 21:25:54')          -- 21
SELECT EXTRACT( DAY FROM '2018-05-25 21:25:54')           -- 25
SELECT EXTRACT( MONTH FROM '2018-05-25 21:25:54')         -- 5
SELECT EXTRACT( YEAR FROM '2018-05-25 21:25:54')          -- 2018
SELECT EXTRACT( MINUTE_SECOND FROM '2018-05-25 21:25:54') -- 2554
SELECT EXTRACT( DAY_HOUR FROM '2018-05-25 21:25:54')      -- 2521
SELECT EXTRACT( YEAR_MONTH FROM '2018-05-25 21:25:54')    -- 201805
SELECT EXTRACT( HOUR_SECOND FROM '2018-05-25 21:25:54')   -- 212554
SELECT EXTRACT( DAY_MINUTE FROM '2018-05-25 21:25:54')    -- 252125
SELECT EXTRACT( DAY_SECOND FROM '2018-05-25 21:25:54')    -- 25212554
```

**DATE_ADD(date, INTERVAL expression unit)** - додавання до дати/часу
```sql
SELECT DATE_ADD('2018-05-25', INTERVAL 1 DAY)           -- 2018-05-26
SELECT DATE_ADD('2018-05-25', INTERVAL 3 MONTH)         -- 2018-08-25
SELECT DATE_ADD('2018-05-25 21:31:27', INTERVAL 4 HOUR) -- 2018-05-26 01:31:27
```

**DATE_SUB(date, INTERVAL expression unit)** - віднімання від дати/часу
```sql
SELECT DATE_SUB('2018-05-25', INTERVAL 4 DAY) -- 2018-05-21
```

**DATEDIFF(date1, date2)** - різниця між датами в днях
```sql
SELECT DATEDIFF('2018-05-25', '2018-05-27') -- -2
SELECT DATEDIFF('2018-05-25', '2018-05-21') -- 4
SELECT DATEDIFF('2018-05-25', '2018-03-21') -- 65
```

**TO_DAYS(date)** - кількість днів з 0-го року
```sql
SELECT TO_DAYS('2018-05-25') -- 737204
```

**TIME_TO_SEC(time)** - кількість секунд з 00:00:00
```sql
SELECT TIME_TO_SEC('10:00') -- 36000
```

**DATE_FORMAT(date, format)** - форматування дати на основі шаблона
**TIME_FORMAT(date, format)** - форматування часу на основі шаблона

шаблон приймає наступні значення:
  %m: місяць в числовому форматі 01..12
  %с: місяць в числовому форматі 1..12
  %M: назва місяця (January...December)
  %b: абревіатура місяця (Jan...Dec)
  %d: день місяця в числовому форматі 00..31
  %e: день місяця в числовому форматі 0..31
  %D: номер дня місяця із суфіксом (1st, 2nd, 3rd...)
  %y: рік у вигляді двух чисел
  %Y: рік у вигляді чотирьох чисел
  %W: назва дня тижня (Sunday...Saturday)
  %a: абревіатура дня тижня (Sun...Sat)
  %H: година у форматі 00..23
  %k: година у форматі 0..23
  %h: година у форматі 01..12
  %l: година у форматі 1..12
  %i: хвилини у форматі 00..59
  %r: час у 12-ти часовому форматі (hh:mm:ss AM або PM)
  %T: час у 24-ти часовому форматі (hh:mm:ss)
  %S: секунди у форматі 00..59
  %p: AM або PM


```sql
SELECT ATE_FORMAT('2018-05-25', '%d/%m/%y')          -- 25/05/18
SELECT ATE_FORMAT('2018-05-25 21:25:54', '%d %M %Y') -- 25 May 2018
SELECT ATE_FORMAT('2018-05-25 21:25:54', '%r')       -- 09:25:54 PM
SELECT IME_FORMAT('2018-05-25 21:25:54', '%H:%i:%S') -- 21:25:24
SELECT IME_FORMAT('21:25:54', '%k:%i')               -- 21:25```
```

ФУНКЦІЇ CASE, IF, INFULL, COALESCE                       <i id="conditions"></i>
--------------------------------------------------------------------------------

### CASE - WHEN - THEN - ELSE - END                            <i id="case"></i>

перевіряє на істинність певну кількість наборів умов і у залежності від
перевірки повертає результат

```sql
SELECT ProductName, ProductCount, 
CASE
  WHEN ProductCount = 1 
    THEN 'Товар закінчується'
  WHEN ProductCount = 2 
    THEN 'Товару не достатньо'
  WHEN ProductCount = 3 
    THEN 'Є в наявності'
  ELSE 'Товару багато'
END AS Category
FROM Products;
```


### IF                                                           <i id="if"></i>

перевіряє умову і в залежності від її виконання повертає одне з двох значень

```sql
SELECT ProductName, Manufacturer,
IF(ProductCount > 3, 'Багато товару', 'Мало товару')
FROM Products;
```


### IFNULL                                                   <i id="ifnull"></i>

перевіряє значення повного виразу. Якщо воно рівне NULL, то функція поверне
значення з другого параметра

```sql
SELECT FirstName, LastName,
IFNULL(Phone, 'не определено') AS Phone,
IFNULL(Email, 'неизвестно') AS Email
FROM Clients;
```


### COALESCE                                               <i id="coalesce"></i>

приймає список значень і повертає перше з них, яке не рівне NULL

```sql
SELECT FirstName, LastName,
COALESCE(Phone, Email, 'не определено') AS Contacts
FROM Clients;
```


Підключення MySQL в Node.js                            <i id="node-connect"></i>
--------------------------------------------------------------------------------

Установка пакета з npmjs.com:

```shell
npm install --save mysql2
```

### Створення підключення                               <i id="node-create"></i>

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


### Закриття підключення                                 <i id="node-close"></i>

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


Запити                                                 <i id="node-queries"></i>
--------------------------------------------------------------------------------

### Базовий синтаксис                                   <i id="node-basics"></i>

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


### Параметризація запитів                               <i id="node-param"></i>

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


Promise API                                           <i id="node-promises"></i>
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

Основні операції з даними                                 <i id="node-crud"></i>
--------------------------------------------------------------------------------


### Створення бази даних                                <i id="node-dbases"></i>

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


### Створення таблиць                                   <i id="node-tables"></i>

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


### Додавання даних                                     <i id="node-insert"></i>

```js
const sql = `INSERT INTO users(name, age) VALUES('Sam', 31)`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


### Додавання множини даних                          <i id="node-insertArr"></i>

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


### Отримання даних                                        <i id="node-get"></i>

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


### Фільтрація даних                                    <i id="node-felter"></i>

```js
const sql = `SELECT * FROM users WHERE name=? AND age=?`;
const filter = ["Tom", 29];
connection.query(sql, filter, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


### Оновлення                                           <i id="node-update"></i>

```js
const sql = `UPDATE users SET age=? WHERE name=?`;
const data = [34, "Tom"];
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


### Видалення                                           <i id="node-delete"></i>

```js
const sql = "DELETE FROM users WHERE name=?";
const data = ["Sam"];
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
```


Пули підключень                                          <i id="node-pools"></i>
--------------------------------------------------------------------------------

Пули підключень дозволяють пришвидшити процес за рахунок повторного використання
уже існуючих підключень. Коли до БД надсилається запит, з пулу вибирається
вільне підключення, або створюється нове, якщо вільних нема і не перевищено
ліміт підключень. Це економить час на створення нових підключень. Якщо в одному
методі написано кілька звернень в БД через пул підключень, нема жодної гарантії,
що запити киконаються у строгому порядку, бо в пулі усі запити виконуються
асинхронно.


### Створення пулу підключень і закриття усіх підключень <i id="node-createPool"></i>

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
Тут, як і в пулах, нема гарантії, що спочатку виконаються запити, а потім
закриється з'єднання, може бути і навпаки, це треба враховувати.

```js
pool.end(function(err) {
  if (err) {
    return console.log(err.message);
  }
});
```

### Запити до БД через пули                         <i id="node-crud-pools"></i>

Аналогічні до звичайних запитиів, тільки замість об'єкта з'єднання створюється
пул і виклик методів відповідно робиться не від об'єкта **connection.query()**,
а від пулу **pool.query()**.


### Promise API                                 <i id="node-promises-pools"></i>
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

1. [Metanit: Руководство по MySQL](https://metanit.com/sql/mysql/)
2. [W3Schools: MySQL Tutorial](https://www.w3schools.com/mysql/default.asp)
3. [Metanit: Node.js + MySQL](https://metanit.com/web/nodejs/8.1.php)