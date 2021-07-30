// Mongoose - бібліотека ODM (Object Data Modelling), яка співставляє об'єкти
// класів і документи колекцій баз даних.

  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

  // дебаг для mongoose
  mongoose.set('debug',true);

  // оголошення класу (моделі)
  const Cat = mongoose.model('Cat', { name: String }); // Cat -> cats

  // при створенні екземпляра класу mongoose перевіряє відповідність полів до
  // заданої схеми і зайві не зберігає.
  // При використанні mongoose створювати колекцію не треба, вона створиться
  // автоматично: Cat -> cats

  const kitty = new Cat({ name: 'Zildjian' });

  // зберегти екземпляр класу в бд
  kitty.save()
       .then(() => console.log('meow'));

// Для використання повноцінних класів з методами потрібно розбити оголошення на
// дві частини (з прикладу зверху):
  // тут оголошення властивостей
  const schema = mongoose.Schema({
    name: String
  });
  // тут оголошення методів
  schema.methods.meow = function(){
    console.log(this.get('name')); // 'Zildjian'
  }
  // а тут видозмінене оголошення
  const Cat = mongoose.model('Cat', schema);
  // перевірка роботи
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save()
       .then(kitty.meow())
       .then(() => console.log('meow'));

// Методи, прописані через schema.methods є методами екземплярів класу. Щоб
// метод належав власне класу (для виклику через User.method), потрібно
// прописати schema.statics.method.

// Схема детальніше
  // Приклад з вкладеним об'єктом
  const userSchema = new Schema({
    name: String,
    age: Number,
    company: {
      name: String,
      employee: [String], // тип - масив рядків
      date: Date
    }
  });
  // значення за замовчуваням
  const userSchema = new Schema({
    name: {
      type: String,
      default: "NoName"
    },
    age: {
      type: Number,
      default: 22
    }
  });

// Валідація.
  // required              : обов'язкова наявність значення властивості
  // min и max             : допустимі міжі для числових значень
  // minlength и maxlength : допустимі межі довжини рядків
  // enum                  : рядок повинен бути одним зі вказаних у масиві
  // match                 : рядок повинен відповідати регулярному виразу
  const userScheme = new Schema({
    name: {
      type: String,
      required: true,
      minlength:3,
      maxlength:20
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max:100
    }
  });

// Виключення стандартного поля версіонування (__v)
const userScheme = new Schema(
  {name: String, age: Number},
  { versionKey: false }
);

// CRUD - Create, read, update and delete
  // save()
  const user = new User({name: "Tom", age: 34});
  user.save(function(err){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log("Сохранен объект user", user);
  });

  // User.create()
  const mongoose = require("mongoose"),
        Schema   = mongoose.Schema;
  mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });
  const userSchema = new Schema({
    name: {
      type: String,
      required: true,
      minlength:3,
      maxlength:20
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max:100
    }
  });
  const User = mongoose.model("User", userSchema);
  User.create({name: "Tom", age: 34}, function(err, doc){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log("Сохранен объект user", doc);
  });

  // find()
  const mongoose = require("mongoose"),
        Schema   = mongoose.Schema;
  mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });
  const userScheme = new Schema({name: String, age: Number}, {versionKey: false}),
        User       = mongoose.model("User", userScheme);
  User.find({}, function(err, docs){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(docs);
  });

  // findOne()
  User.findOne({name: "Tom"}, function(err, doc){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(doc);
  });

  // findById()
  const id = "588a0f8c9151d23ce47bf98d";
  User.findById(id, function(err, doc){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(doc);
  });

  // deleteMany()
  const mongoose = require("mongoose"),
        Schema   = mongoose.Schema;
  mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });
  const userScheme = new Schema({name: String, age: Number}, {versionKey: false}),
        User       = mongoose.model("User", userScheme);
  User.deleteMany({age:33}, function(err, result){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(result);
  });

  // deleteOne()
  User.deleteOne({name:"Bill"}, function(err, result){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(result);
  });

  // findOneAndDelete() - повертає видалений документ
  User.findOneAndDelete({name:"Bill"}, function(err, doc){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log("Удален пользователь ", doc);
  });

  // findByIdAndDelete()
  let id = "588a0f8c9151d23ce47bf98d";
  User.findByIdAndDelete(id, function(err, doc){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log("Удален пользователь ", doc);
  });

  // updateOne() / updateMany()
  User.updateOne({name: "Tom"}, {name: "Tom Smith"}, function(err, result){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(result);
  });

  // findByIdAndUpdate() - повертає старий документ
  mongoose.set("useFindAndModify", false);
  const id = "588b2d6fc7d95503980ecf99";
  User.findByIdAndUpdate(id, {name: "Sam", age: 25}, function(err, user){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log("Обновленный объект", user);
  });
  // для повернення нового:
  User.findByIdAndUpdate(id, {name: "Bilbo Baggins", age: 111},
                             {new: true},
                             function(err, user){…});

  // findOneAndUpdate
  mongoose.set("useFindAndModify", false);
  User.findOneAndUpdate({name: "Sam"},
                        {name: "Bill", age:24},
                        {new: true},
                        function(err, user){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log("Обновленный объект", user);
  });