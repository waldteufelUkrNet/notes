const express = require("express"),
      app     = express();

app.listen(3000);

// створюємо парсер для даних в форматі json
const jsonParser = express.json();

app.post("/user", jsonParser, function(request, response){
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);   // відповідь у форматі об'єкта
  response.json(request.body); // відправляємо дані назад, теж в JSON

// по суті відповідь можна слати і стандартним response.send(request.body), бо
// він робить наступне:
// 1. для заголовка "Content-Type" виставляє значення "application/json"
// 2. перетворює дані за допомогою JSON.stringify()
// 3. робить response.send()

});