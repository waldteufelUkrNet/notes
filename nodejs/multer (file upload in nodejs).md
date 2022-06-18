Multer - завантаження файлів на сервер 
================================================================================

Зміст
--------------------------------------------------------------------------------

- [Інфо](#info)
- [Клієнтський код](#client)
    - [1й варіант: класичний submit форми.](#submit)
    - [2й варіант: fetch + FormData.](#formdata)
- [Серверний код](#server)
    - [глобальне використання](#global)
    - [локальне використання](#local)
- [API](#api)
    - [Методи](#methods)
    - [Опції multer({opts})](#opts)
    - [Збереження файла, storage:storageConfig](#storageConfig)
    - [Фільтрація файлів fileFilter](#fileFilter)
- [Посилання](#links)


Інфо                                                           <i id="info"></i>
--------------------------------------------------------------------------------

**Multer** - це розширення, яке працює поверх фреймворка **Express** і
призначене для завантаження файлів.


Клієнтський код                                              <i id="client"></i>
--------------------------------------------------------------------------------

### 1й варіант: класичний submit форми.                      <i id="submit"></i>

У цьому варіанті використовується розмітка html і стандартна подія **submit**.
Важливо вказати у формі атрибут ```enctype="multipart/form-data"```, а для усіх
інпутів вказати атрибут ```name``` він потім потрібен для **Multer**.

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label>Файл</label><br>
  <input type="file" name="file_input_name" /><br><br>
  <input type="submit" value="Send" />
</form>
```


### 2й варіант: fetch + FormData.                          <i id="formdata"></i>

Об'єкти **FormData** завжди відправляються з заголовком
```Content-Type: form/multipart```, тому відсутність атрибуту
```enctype="multipart/form-data"``` у формі не викличе помилку. Атрибут
```name``` для інпутів так само важливий.

```js
form.onsubmit = event => {
  event.preventDefault();

  const input = form.querySelector('input[type="file"]');

  if (!input.value) return;
  
  let response = await fetch('/upload', {
    method: 'POST',
    body : new FormData(form)
  });

  if (response.ok) {
    console.log('file successfully uploaded')
  } else {
    console.log('error!')
  }
}
```


Серверний код                                                <i id="server"></i>
--------------------------------------------------------------------------------

Multer можна використовувати, як глобальний міделвер, а можна визначити тільки для окремих функцій. Другий варіант безпечніший, бо запобігає заванта

Текстові поля форми доступні в **req.body**. Файл доступний через **req.file**,
якщо файлів декілька, вони запишуться масивом в **req.files**. В консолі
**req.file** матиме приблизно наступний вид:

```shell
filedata:
{
  fieldname: 'inputfile',
  originalname: 'filename.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'uploads',
  filename: 'filename.jpg',
  path: 'uploads\\filename.jpg',
  size: 22785
}
```


### глобальне використання                                   <i id="global"></i>

```js
const express = require("express"),
      multer  = require("multer"),
      app     = express();
  
app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("file_input_name"));
app.post("/upload", function (req, res, next) {
   
  let filedata = req.file;
  console.log(filedata);
  if(!filedata)
    res.send("Error");
  else
    res.send("Success");
});
app.listen(3000);
```


### локальне використання                                     <i id="local"></i>

```js
const express = require("express"),
      multer  = require("multer"),
      upload  = multer({dest:"uploads"})
      app     = express();

app.use(express.static(__dirname));
 
app.post("/upload", upload.single("file_input_name"), function (req, res, next) {
   
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Error");
    else
        res.send("Success");
});
app.listen(3000);
```


API                                                             <i id="api"></i>
--------------------------------------------------------------------------------

```js
const multer = require("multer"),
      upload = multer({dest:"uploads"});
```

### Методи                                                  <i id="methods"></i>

1. завантаження одного файлу
   ```js
   upload.single('file_input_name') 
   ```

2. завантаження кількох файлів, з обмеженням. При переповненні видасть помилку.
   ```js
   upload.array('phfile_input_nameotos', 12)
   ```

3. вибірка по окремих полях, з обмеженнями
   ```js
   upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
   ```

4. обробка текстової форми без файлів
   ```js
   upload.none()
   ```

5. Завантаження усіх файлів
   ```js
   upload.any()
   ```


### Опції multer({opts})                                       <i id="opts"></i>

1. **dest/storage** - місце збереження файлів
2. **fileFilter**   - фільтрування файлів
3. **limits**       - обмеження по завантаженню
4. **preservePath** - Зберінати повний шдях до файлів замість тільки базового
   імені


### Збереження файла, storage:storageConfig           <i id="storageConfig"></i>

```js
const express = require("express"),
      multer  = require("multer"),
      app     = express();
 
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, "uploads");
  },
  filename: (req, file, cb) =>{
    cb(null, file.originalname);
  }
});
 
app.use(multer({storage:storageConfig}).single("filedata"));
app.post("/upload", function (req, res, next) {
   
  let filedata = req.file;
  if(!filedata){
    res.send("Ошибка при загрузке файла");
  }
  else{
    res.send("Файл загружен");
  }
});
```

### Фільтрація файлів fileFilter                         <i id="fileFilter"></i>

```js
const fileFilter = (req, file, cb) => {

  if(file.mimetype === "image/png" || 
  file.mimetype === "image/jpg"|| 
  file.mimetype === "image/jpeg"){
    cb(null, true);
  }
  else{
    cb(null, false);
  }
}
app.use(multer({storage:storageConfig, fileFilter: fileFilter}).single("filedata"));
```


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Multer](https://www.npmjs.com/package/multer)
2. [Multer для AWS S3](https://www.npmjs.com/package/multer-s3)
3. [Metanit1](https://metanit.com/web/nodejs/10.1.php)
4. [Metanit2](https://metanit.com/web/nodejs/10.2.php)



