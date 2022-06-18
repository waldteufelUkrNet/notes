////////////////////////////////////////////////////////////////////////////////

// Об'єкт EventEmitter реалізує роботу з подіями в Node.js

  const EE     = require('events').EventEmitter,
        server = new EE();

  // підписка на подію (навішування обробника)
  server.on('request', function(arg){…})

  // генерація події
  server.emit('request', {from:"Клієнт"})

// Якщо обробників кілька, вони викликаються в порядку оголошення. Вони один
// одного не перезатирають!

  emitter.listeners(event) // повертає усі обробники на дану подію
  EventEmitter.listenerCount(emitter,event) // кількість обробників

  server.emit('error'); // покладе скрипт, якщо не призначити обробник!
                        // -> throw TypeError
  server.emit('error', new Error()); // -> throw err, яка піде в обробник

  server.setMaxListeners(0) // за замовчуванням у EventEmitter є можливість
                            // встановити тільки 10 обробників. Ця команда їх
                            // відключає. Тут треба бути обережним, щоб не було
                            // втрат пам'яті.


// Наслідування від EventEmitter

// Для того, щоб у об'єктів була можливість оперувати подіями, їх треба
// прив'язати до EventEmitter:

  const util         = require("util"),
        EventEmitter = require("events");
  function User(){…}
  util.inherits(User, EventEmitter);
  const eventName = "greet";
  User.prototype.sayHi = function(data){
    this.emit(eventName, data);
  }
  let user = new User();
  user.on(eventName, function(data){
    console.log(data);
  });
  user.sayHi("uhaha…");

  // Те саме на ES6:
  const EventEmitter = require("events"),
        eventName    = "greet";
  class User extends EventEmitter {
    sayHi(data) {
      this.emit(eventName, data);
    }
  }
  let user = new User();
  user.on(eventName, function(data){
    console.log(data);
  });
  user.sayHi("uhaha…");