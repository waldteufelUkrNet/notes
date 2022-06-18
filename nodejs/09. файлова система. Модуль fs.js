////////////////////////////////////////////////////////////////////////////////

__filename // звернення до файлу виконуваного модуля
__dirname  // абсолютний шлях до директорії

fs.readFile(__filename, 'utf-8', function(err,result){}); // зчитати файл,
                                                          // без 'utf-8' - Buffer
fs.writeFile('name.txt', 'data', function(err,result){}); // створити файл
fs.rename('n1.txt', 'n2.txt', function(err,result){});    // перуйменувати
fs.unlink('name.txt', function(err,result){});            // видалити

fs.stat(filePath,function(err,stats)){ // перевірка, чи існує вказаний шлях
  console.log( stats.isFile() )        // директорія чи файл?
}

// Read Files

  fs.readFile()


// Create Files

  fs.writeFile()  // method replaces the specified file and content if it
                  // exists. If the file does not exist, a new file, containing
                  // the specified content, will be created

  fs.appendFile() // method appends specified content to a file. If the file
                  // does not exist, the file will be created

  fs.open()       // method takes a "flag" as the second argument, if the flag
                  // is "w" for "writing", the specified file is opened for
                  // writing. If the file does not exist, an empty file is
                  // created

  fs.open('mynewfile2.txt', 'w', function (err, file) {...});


// Update Files

  fs.appendFile() // method appends the specified content at the end of the
                  // specified file


// Delete Files

  fs.unlink()


// Rename Files

  fs.rename()