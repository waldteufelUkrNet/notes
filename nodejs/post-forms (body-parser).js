// отримка сервером даних з форми, відправленої методом POST

const express    = require("express"),
      bodyParser = require("body-parser");

const app = express();
app.listen(3000);

// створення парсеру для даних типу application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

// дані форми будуть доступні як властивості request.body.xxx
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});