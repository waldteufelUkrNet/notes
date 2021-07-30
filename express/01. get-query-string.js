// В express при get-запиті поля запиту можна отримати з властивості request.query
// http://localhost:3000/about?id=1234&name=vasja

const express = require("express"),
      app     = express();

app.listen(3000);

app.get("/about", function(request, response){
  let id       = request.query.id,
      userName = request.query.name;
});