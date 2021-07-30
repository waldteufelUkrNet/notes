// можливий синтаксис на колбеках або на промісах. Якщо вказувати другим
// агрументом колбек, проміс не повертається

////////////////////////////////////////////////////////////////////////////////
// Способи підключитися до бд

const MongoClient = require('mongodb').MongoClient,
      url         = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  let db = client.db('dbName');
  let collection = db.collection('collectionName');
});

const MongoClient = require('mongodb').MongoClient,
      url         = 'mongodb://localhost:27017/dbName';
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let collection = db.collection('collectionName');
});

const MongoClient  = require('mongodb').MongoClient,
      dbUrl        = 'mongodb://localhost:27017/',
      mongoClient  = new MongoClient(dbUrl);
mongoClient.connect(function(err, client) {
  if (err) return console.log(err);
  app.locals.collection = client.db("dbName").collection("collectionName");
});

// варіант на промісах
async function mongoMain(){
  await mongoClient.connect();
  dbClient = mongoClient;
  app.locals.collection = mongoClient.db("meng").collection("users"); // !!!
  app.listen(3000, function(){
    console.log('server listen on port ' + port)
  });
}
mongoMain()
  .catch(console.error)

// приклад обробки запиту на промісах
  app.get('/api/users', function(req,res){
    const collection = req.app.locals.collection; // !!!
    let result = collection.find({}).toArray();
    result.then(
      function onResult(users){
        res.send(JSON.stringify(users));
      },
      function onError(error){
        console.log("error", error);
      }
    );
  });
////////////////////////////////////////////////////////////////////////////////

const MongoClient = require('mongodb').MongoClient,
      url         = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  // створити об'єкт для роботи з бд
  let db = client.db('w3s');

  // додати в бд колекцію
  db.createCollection("customers", function(err,result){
    if (err) throw err;
    console.log('db created');
    db.close();
  });

  // додати об'єкт в бд (створиться колекція, якщо її ще нема)
  // insertOne/Many повертає об'єкт з результатом зміни бази res, він має
  // властивості, які можна прочитати
  // insertOne({}, function(err, result) {…});
  // insertMany([{},{},{}], function(err, result) {…});
  let myobj = {name: "Company Inc", address: "Highway 37"};
  db.collection("customers").insertOne(myobj, function(err, result) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

  // пошук - findOne({},function(err,result){…}) - result - знайдений об'єкт
  //         find({}).toArray(function(err,result){…});
  //         find({},{ projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err,result){…});
  db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });

  // deleteOne/deleteMany/findOneAndDelete - result.value - знайдений об'єкт
  db.collection("customers").deleteOne({ address: 'Mountain 21' }, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });

  // delete collection, result == boolean
  db.collection("customers").drop(function(err, result) {…});
  db.dropCollection("customers", function(err, result) {…});

  // updateOne/updateMany/findOneAndUpdate - result.value - знайдений об'єкт
  let myquery = { address: "Valley 345" },
      newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});