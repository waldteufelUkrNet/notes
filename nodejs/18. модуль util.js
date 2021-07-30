////////////////////////////////////////////////////////////////////////////////

  let util = require('util');

  console.log( util.inspect(obj) ); // красиве виведення об'єкту

  let str = util.format('My %s %d %j', 'qwerty', 123, {test1:'test'}); // формування рядка

  util.inherits(childClass, parentClass) // наслідування