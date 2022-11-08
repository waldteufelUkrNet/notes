////////////////////////////////////////////////////////////////////////////////
// https://socket.io/

/* ↓↓↓ initialization ↓↓↓ */
  // Server-side: Express.js
  const express    = require('express'),
        app        = express(),
        http       = require('http'),
        server     = http.createServer(app),
        { Server } = require("socket.io"),
        io         = new Server(server);

  io.on('connection', (socket) => {
    // ...

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  });
  server.listen(3000, () => {
    console.log('listening on *:3000');
  });

  // Client-side: browser
  let socket = io();
/* ↑↑↑ initialization ↑↑↑ */

/* ↓↓↓ event emitter / event listener ↓↓↓ */
  // для клієнта і для сервера код однаковий
  socket.emit('custom name', msg);

  socket.on('custom name', msg => {
    // ...
  });

  // одноразова подія
  socket.once(eventName, listener)
  // вимкнення обробника
  socket.off(eventName, listener)
  // вимкнення обробників, якщо без аргумента - усіх обробників
  socket.removeAllListeners([eventName])
  // спрацювання на будь-яку подію
  socket.onAny(listener)
  // спрацювання на будь-яку подію, обробник встає в початок списку обробників
  socket.prependAny(listener)
  // вимкнення усіх (або конкретного) onAny-обробника
  socket.offAny([listener])

  // якщо на сервері використовувати socket.emit('name', msg), вийде зв'язок
  // тет-а-тет. Для масової передачі:
  // 1. генерувати подію не на сокеті, а на екземплярі сокет-серверу. Дані
  // передаватимуться усім, включно з клієнтом-передавачем:
  io.emit('custom name', msg);

  // 2. використовувати broadcast на сокеті. Дані передадуться всім, крім
  // клієнта-відправника:
  socket.broadcast.emit('custom name', msg);

  // 3. socket.to() - аналогічно до broadcast:
  socket.to('some room').emit('some event');

  // Acknowledgements - можливість додати колбек
    // server-side
    io.on("connection", (socket) => {
      socket.on("update item", (arg1, arg2, callback) => {
        console.log(arg1); // 1
        console.log(arg2); // { name: "updated" }
        callback({
          status: "ok"
        });
      });
    });

    // client-side
    socket.emit("update item", "1", { name: "updated" }, (response) => {
      console.log(response.status); // ok
    });

  // Volatile events - плаваючі події (якщо пропало з'єднання -
  // подія не відбудеться)
  socket.volatile.emit("hello", "might or might not be received");
/* ↑↑↑ event emitter / event listener ↑↑↑ */

/* ↓↓↓ Server ↓↓↓ */
  const express = require('express'),
        http    = require('http'),
        Server  = require("socket.io").Server,
        io      = new Server( http.createServer( express() ) );

  // кількість підключених клієнтів
  io.engine.clientsCount;

  // кількість відкритих сокетів (інколи не те саме, що і clientsCount):
  io.of("/").sockets.size;

  // генерація sid
  const uuid = require("uuid");
  io.engine.generateId = (req) => {
    return uuid.v4(); // must be unique across all Socket.IO servers
  }

  // перебір сокетів?, key == id
  for ( key in io.engine.clients) {
    console.log('key                      : ', key);
    console.log('io.engine.clients[key].id: ', io.engine.clients[key].id);
  }

  // МЕТОДИ
  // socketsJoin - приєднання певних сокетів до певних кімнат

  // make all Socket instances join the "room1" room
  io.socketsJoin("room1");
  // make all Socket instances in the "room1" room join the "room2" and "room3"
  // rooms
  io.in("room1").socketsJoin(["room2", "room3"]);
  // make all Socket instances in the "room1" room of the "admin" namespace join
  // the "room2" room
  io.of("/admin").in("room1").socketsJoin("room2");
  // this also works with a single socket ID
  io.in(theSocketId).socketsJoin("room1");

  // socketsLeave - відключення певних сокетів від певних кімнат

  // make all Socket instances leave the "room1" room
  io.socketsLeave("room1");
  // make all Socket instances in the "room1" room leave the "room2" and "room3"
  // rooms
  io.in("room1").socketsLeave(["room2", "room3"]);
  // make all Socket instances in the "room1" room of the "admin" namespace
  // leave the "room2" room
  io.of("/admin").in("room1").socketsLeave("room2");
  // this also works with a single socket ID
  io.in(theSocketId).socketsLeave("room1");

  // disconnectSockets - виключення сокетів

  // make all Socket instances disconnect
  io.disconnectSockets();
  // make all Socket instances in the "room1" room disconnect (and discard the
  // low-level connection)
  io.in("room1").disconnectSockets(true);
  // make all Socket instances in the "room1" room of the "admin" namespace
  // disconnect
  io.of("/admin").in("room1").disconnectSockets();
  // this also works with a single socket ID
  io.of("/admin").in(theSocketId).disconnectSockets();

  // fetchSockets - запит наявних сокетів, масив об'єктів

  // return all Socket instances
  const sockets = await io.fetchSockets();
  // return all Socket instances in the "room1" room of the main namespace
  const sockets = await io.in("room1").fetchSockets();
  // return all Socket instances in the "room1" room of the "admin" namespace
  const sockets = await io.of("/admin").in("room1").fetchSockets();
  // this also works with a single socket ID
  const sockets = await io.in(theSocketId).fetchSockets();

  for (const socket of sockets) {
    console.log(socket.id);
    console.log(socket.handshake);
    console.log(socket.rooms);
    console.log(socket.data); // об'єкт для обміну даними між Socket.IO-серверами
    socket.emit(/* ... */);
    socket.join(/* ... */);
    socket.leave(/* ... */);
    socket.disconnect(/* ... */);
  }

  // Events
  // 1. connection
/* ↑↑↑ Server ↑↑↑ */

/* ↓↓↓ Socket (server-side) ↓↓↓ */
  // ідентифікатор сокету
  socket.id;

  // якщо відомо ідентифікатор іншого сокету, йому можна відправити повідомлення
  io.on("connection", socket => {
    socket.on("private message", (anotherSocketId, msg) => {
      socket.to(anotherSocketId).emit("private message", socket.id, msg);
    });
  });

  // інформація по "рукостисканню"
  socket.handshake
  {
    headers: /* the headers of the initial request */
    query: /* the query params of the initial request */
    auth: /* the authentication payload */
    time: /* the date of creation (as string) */
    issued: /* the date of creation (unix timestamp) */
    url: /* the request URL string */
    address: /* the ip of the client */
    xdomain: /* whether the connection is cross-domain */
    secure: /* whether the connection is secure */
  }

  // список кімнат, в яких присутній даний сокет
  socket.rooms

  // об'єкт для обміну даними між Socket.IO-серверами
  socket.data

  // Events
  // 1. disconnect
  // 2. disconnecting
/* ↑↑↑ Socket (server-side) ↑↑↑ */

/* ↓↓↓ Socket (client-side) ↓↓↓ */
  // ідентифікатор сокету
  socket.id;

  // показує, чи сокет підключений
  socket.connected;

  // Events
  // 1. connect - після підключення/перепідключення
  // 2. connect_error - 1. the low-level connection cannot be established
  //                  - 2. the connection is denied by the server in a
  //                       middleware function
  // 3. disconnect
/* ↑↑↑ Socket (client-side) ↑↑↑ */