================================================================================
MySQL
================================================================================

робота в MySQL 8.0 Command Line Client - Unicode
--------------------------------------------------------------------------------
показати наявні бази даних:
```sql
show databases; 
```

створити бд:
```sql
create database test;
```

перейти в бд:
```sql
use test;
```

створити таблицю (аналог колекції в MongoDB):
```sql
create table users (id integer auto_increment primary key, name varchar(30), age integer);
```

додати запис в таблицю:
```sql
insert into users (name, age) values ('Tom', 34);
```

вивести дані таблиці в консоль:
```sql
select * from users;
```

робота в MySQL Shell
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

БАЗИ ДАНИХ
--------------------------------------------------------------------------------
створення бд (видасть помилку, якщо бд уже існує):
```sql
create database database_name;
```

створення бд, якщо її ще нема:
```sql
create database if not exists database_name;
```

використання бд:
```sql
use database_name;
```

видалення бд:
```sql
drop database database_name;
```

ТАБЛИЦІ
--------------------------------------------------------------------------------
створення таблиці:
```sql
create table table_name (
  column_name-1 data_type-1 column_attributes-1,
  …
  column_name-n data_type-n column_attributes-n
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

видалення таблиці:
```sql
drop table table_name;
```

ТИПИ ДАНИХ
--------------------------------------------------------------------------------
### символьні
  **char(n)**    рядок фіксованої довжини. Якщо в таблицю зберігатиметься
                 значення менше n, то недостатні символи будуть зайняті
                 пробілами. Тип char може зберігати до 255 байт.  
  **varchar(n)** рядок змінної довжини. Недостатні символи не заповнюються
                 пробілами. Тип varchar може зберігати до 65535 байт.  
  **tinytext**   текст довжиною до 255 байт.  
  **text**       текст довжиною до 65 кб.  
  **mediumtext** текст довжиною до 16 мб.  
  **largetext**  текст довжиною до 4 гб.

### числові
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
                         точності від -3.4028*10^38 до 3.4028*10^38, займає 4
                         байта, може приймати форму float(m,d), де m - загальна
                         кількість цифр, d - кількість цифр після коми.  
  **double**             = real = double precision зберігає дробові числа з
                         плаваючою крапкою подвійної точності від -1.7976*10^308
                         до 1.7976*10^308, займає 8 байт. Також може приймати
                         форму double(m,d) по аналогії до float(m,d).

### для роботи з датами
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
> зберігатимуть дані, привівши їх до стандартного формату.***

### складані типи
  **enum** зберігає 1 значення зі списку допустимих значень. Займає 1-2 байти.  
  **set**  може зберігати до 64 значень з певного списку допистимих значень.
           Займає 1-8 байт.

### бінарні типи
  **tinyblob**   зберігає бінарні дані у вигляді рядка довжиною до 255 байт.  
  **blob**       зберігає бінарні дані у вигляді рядка довжиною до 65 кілобайт.  
  **mediumblob** зберігає бінарні дані у вигляді рядка довжиною до 16 мегабайт.  
  **largeblob**  зберігає бінарні дані у вигляді рядка довжиною до 4 гігабайт.

### бінарні типи
  **tinyblob**   зберігає бінарні дані у вигляді рядка довжиною до 255 байт.  
  **blob**       зберігає бінарні дані у вигляді рядка довжиною до 65 кілобайт.  
  **mediumblob** зберігає бінарні дані у вигляді рядка довжиною до 16 мегабайт.  
  **largeblob**  зберігає бінарні дані у вигляді рядка довжиною до 4 гігабайт.


АТРИБУТИ СТОВПЧИКІВ І ТАБЛИЦЬ
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

### Атрибут PRIMARY KEY
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
### Атрибут AUTO_INCREMENT
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

### Атрибут UNIQUE
вказує на те, що у даному стовпчику зберігаються унікальні, не повторювані
значення на всю таблицю.

### Атрибути NULL и NOT NULL
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

### Атрибут DEFAULT визначає значення за замовчуванням.

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

### Атрибут CHECK
робить перевірку, на підходящість значень для збереження в таблиці.

```sql
CREATE TABLE Customers
(
  Id INT AUTO_INCREMENT,
  Age INT DEFAULT 18 CHECK(Age >0 AND Age < 100), -- <-
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
  CHECK((Age > 0 AND Age<100) AND (Email !='') AND (Phone !=''))
);
```

### Оператор CONSTRAINT
вказує імена для обмежень, визначається на рівні таблиці.  
Смисл у іменах обмежень в тому, що за допомогою них можна встановлювати, змімати
або змінювати обмеження для запису даних в таблицю. Обмеження можна встановити
на ***PRIMARY KEY, CHECK, UNIQUE*** та ***FOREIGN KEY.***

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
  CONSTRAINT customers_pk PRIMARY KEY(Id),              -- <-
  CONSTRAINT customer_phone_uq UNIQUE(Phone),           -- <-
  CONSTRAINT customer_age_chk CHECK(Age >0 AND Age<100) -- <-
);
```

ЗОВНІШНІ КЛЮЧІ FOREIGN KEY
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
  FOREIGN KEY (CustomerId)  REFERENCES Customers (Id)
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

ЗМІНА ТАБЛИЦІ
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

ОПЕРАЦІЇ З ДАНИМИ
--------------------------------------------------------------------------------
### INSERT - додавання даних

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

> ***якщо стовпчик має дефолтне значення або підтримує NULL, його можна не
передавати, або, навпаки, явно передати ключові слова DEFAULT i NULL***

множинне додавання даних:

```sql
INSERT Products(ProductName, Manufacturer, Price, ProductCount)
VALUES
('iPhone 8', 'Apple', 51000, 3),
('P20 Lite', 'Huawei', 34000, 4),
('Galaxy S8', 'Samsung', 46000, 2);
```

### SELECT - вибірка даних

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

### WHERE - фільтрація даних

```sql
WHERE умова
```

#### типи умов:
|символ|значення   |символ|значення        |
|------|-----------|------|----------------|
|=     |рівність   |\>    |менше           |
|!=    |не рівність|<=    |більше або рівно|
|<>    |не рівність|\>=   |менше або рівно |
|<     |більше     |      |                |

***при порівнянні регістр символів не має значення***

### логічні оператори AND, OR, NOT
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

### UPDATE - оновлення даних

```sql
UPDATE ім''я_таблиці
SET стовпчик1 = значення1, стовпчик2 = значення2, ... стовпчикN = значенняN
[WHERE умова_оновлення]
```
```sql
UPDATE Products SET Price = Price + 3000; -- збільшити усі ціни на 3000

UPDATE Products SET Manufacturer = 'Samsung Inc.' WHERE Manufacturer = 'Samsung';

UPDATE Products
SET Manufacturer = 'Samsung',
    ProductCount = ProductCount + 3
WHERE Manufacturer = 'Samsung Inc.';

UPDATE Products
SET ProductCount= DEFAULT
WHERE Manufacturer = 'Huawei';
```

### DELETE - видалення даних

```sql
DELETE FROM ім''я_таблиці
[WHERE умова_видалення]
```
```sql
DELETE FROM Products WHERE Manufacturer='Huawei';
DELETE FROM Products WHERE Manufacturer='Apple' AND Price < 60000;
DELETE FROM Products;
```

ЗАПИТИ
--------------------------------------------------------------------------------

### DISTINCT - вибірка унікальних значень (відкидаються повтори)

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
INSERT INTO Products  (ProductName, Manufacturer, ProductCount, Price)
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

ОПЕРАТОРИ ФІЛЬТРАЦІЇ
--------------------------------------------------------------------------------

### IN - вибір підходящого

```sql
WHERE вираз [NOT] IN (вираз)
```
```sql
--  вибрати усі записи, де виробниками є 'Samsung', 'HTC', 'Huawei'
SELECT * FROM Products WHERE Manufacturer IN ('Samsung', 'HTC', 'Huawei');
-- вибрати усі записи, де виробниками не є 'Samsung', 'HTC', 'Huawei'
SELECT * FROM Products WHERE Manufacturer NOT IN ('Samsung', 'HTC', 'Huawei');
```

### BETWEEN - діапазон значень

```sql
WHERE вираз [NOT] BETWEEN початкове_значення AND кінцеве_значення
```
```sql
SELECT * FROM Products WHERE Price BETWEEN 20000 AND 50000;
SELECT * FROM Products WHERE Price NOT BETWEEN 20000 AND 50000;
SELECT * FROM Products WHERE Price * ProductCount BETWEEN 90000 AND 150000;
```

### LIKE - простий шаблон рядка

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


### REGEXP - регулярний вираз

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

### IS NULL - вибірка NULL

```sql
SELECT * FROM Products WHERE ProductCount IS NULL;
SELECT * FROM Products WHERE ProductCount IS NOT NULL;
```

СОРТУВАННЯ
--------------------------------------------------------------------------------

### ORDER BY       - сортування за зростанням
### ORDER BY … AST - сортування за зростанням (вказане явно)

```sql
SELECT * FROM Products ORDER BY Price AST;

SELECT ProductName, ProductCount * Price AS TotalSum
FROM Products
ORDER BY TotalSum;

SELECT ProductName, Price, ProductCount
FROM Products
ORDER BY ProductCount * Price;
```

### ORDER BY … DEST - сортування за спаданням

```sql
SELECT ProductName, ProductCount
FROM Products
ORDER BY ProductCount DESC;
```

### сортування за кількома стовпчиками:

```sql
SELECT ProductName, Price, Manufacturer
FROM Products
ORDER BY Manufacturer, ProductName;

SELECT ProductName, Price, Manufacturer
FROM Products
ORDER BY Manufacturer ASC, ProductName DESC;
```

ОТРИМАННЯ ДІАПАЗОНА
--------------------------------------------------------------------------------

### LIMIT

```sql
LIMIT [offset,] rowcount
```
```sql
SELECT * FROM Products LIMIT 3;    -- взяти 3 перших рядка (1,2,3)
SELECT * FROM Products LIMIT 2, 3; -- пропустити 2, взяти 3 (3,4,5)
```

АГРЕГАТНІ ФУНКЦІЇ
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
SELECT COUNT(Manufacturer) FROM Products (ігнор NULL);
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
FROM Products
```

ГРУПУВАННЯ
--------------------------------------------------------------------------------

```sql
SELECT стовпчики
FROM таблиця
[WHERE умова_фільтрації_рядків]
[GROUP BY стовпчики_для_згрупування]
[HAVING умова_фільтрації_груп]
[ORDER BY стовпчики_для_сортування]
```

### GROUP BY
визначає, як будуть групуватися рядки.

