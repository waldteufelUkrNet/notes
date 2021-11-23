MySQL
================================================================================

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

ТАБЛИЦІ
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
                         точності від -3.4028×10^38 до 3.4028×10^38, займає 4
                         байта, може приймати форму float(m,d), де m - загальна
                         кількість цифр, d - кількість цифр після коми.  
  **double**             = real = double precision зберігає дробові числа з
                         плаваючою крапкою подвійної точності від -1.7976×10^308
                         до 1.7976×10^308, займає 8 байт. Також може приймати
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
зберігатимуть дані, привівши їх до стандартного формату.***

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

### Оператор CONSTRAINT
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

### WHERE - фільтрація даних (фільтрвція рядків в таблиці)

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
SET ProductCount = DEFAULT
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

### [NOT] BETWEEN … AND - діапазон значень

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


ГРУПУВАННЯ
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

### GROUP BY
визначає, як будуть групуватися рядки. Потрібен, якщо в select іде вибірка по
одному або кільком стовпчиках і використовуються агрегатні функції.  

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

###  HAVING
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


ПІДЗАПИТИ
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

#### Корелюючі і не корелюючі підзапити

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


ПІДЗАПИТИ В ОСНОВНИХ КОМАНДАХ SQL
--------------------------------------------------------------------------------

### SELECT

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


#### Набори значень

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


#### Підзапит як стовпчик

```sql
SELECT *, 
(SELECT ProductName FROM Products WHERE Id=Orders.ProductId) AS Product 
FROM Orders;
```


### INSERT

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


### UPDATE

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

### DELETE

```sql
DELETE FROM Orders
WHERE ProductId=(SELECT Id FROM Products WHERE ProductName='Galaxy S8');
```


Оператор EXISTS
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


З'ЄДНАННЯ ТАБЛИЦЬ
--------------------------------------------------------------------------------

### Неявне з'єднання

Наприклад, є три таблиці: Products, Customers, Orders. В таблиці Orders є
зовнішні ключі, які вказують на дві інші таблиці:

```sql
FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE,
FOREIGN KEY (CustomerId) REFERENCES Customers(Id) ON DELETE CASCADE
```

Для з'єднання таблиць Orders і Customers:
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


### Inner Join

повертає тільки ті рядки з таблиць, які підпадають під умову

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


### Outer Join

повертає усі рядки таблиці

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


### UNION

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


ФУНКЦІЇ ДЛЯ РОБОТИ З РЯДКАМИ
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

приклід викорастання рядкових функцій у вибірках:
```sql
SELECT UPPER(LEFT(Manufacturer,2)) AS Abbreviation,
CONCAT(ProductName, ' - ',  Manufacturer) AS FullProdName
FROM Products
ORDER BY Abbreviation;
```


ФУНКЦІЇ ДЛЯ РОБОТИ З ЧИСЛАМИ
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


ФУНКЦІЇ ДЛЯ РОБОТИ З ДАТАМИ І ЧАСОМ
--------------------------------------------------------------------------------




ФУНКЦІЇ CASE, IF, INFULL, COALESCE
--------------------------------------------------------------------------------








1. [Metanit: Руководство по MySQL](https://metanit.com/sql/mysql/)
2. [Metanit: Node.js + MySQL](https://metanit.com/web/nodejs/8.1.php)