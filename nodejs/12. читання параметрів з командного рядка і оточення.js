////////////////////////////////////////////////////////////////////////////////

// 1. варіант:

  console.log(process.argv); // argv[0] - шлях до node.exe
                             // argv[1] - шлях до виконуваного скрипта
                             // argv[2], …, argv[n] - передані аргументи

//  запуск: node server.js port=3000

// 2. варіант - модуль minimist + node:

  let argv = require('minimist').argv;

// cmd: node server.js --port=3000 або
//      node server.js port 3000

// Webstorm: у полі "Application parameters" поставити --port=3000

// 3. варіант - модуль minimist + supervisor:

// cmd: supervisor -- server.js --port=3000

// Webstorm: у полі "Path to Node" вказати шлях до supervisor.cmd,
//           у полі "Node Parameters" прописати --

// 4. варіант - змінні оточення. Ці змінні доступні в коді в process.env:

// cmd: set DEBUG=some_name

// Webstorm: у полі "Environment variables" додати змінну NODE_ENV
// (для express вона рівна або production, або development)