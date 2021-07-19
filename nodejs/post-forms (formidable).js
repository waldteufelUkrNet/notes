const http       = require('http'),
      formidable = require('formidable'),
      fs         = require('fs');


http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    let form = new formidable.IncomingForm();

    // поля форми доступні у об'єкті fields, файли - files
    form.parse(req, function (err, fields, files) {
      let oldpath = files.filetoupload.path;
      let newpath = 'C:/Users/noname/Desktop/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write("<label>Ім'я</label><br>");
    res.write('<input type="text" name="userName" /><br><br>');
    res.write('<label>Вік</label><br>');
    res.write('<input type="number" name="userAge" /><br><br>');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);