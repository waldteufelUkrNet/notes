##### SublimeLinter-pug-lint

https://github.com/benedfit/SublimeLinter-contrib-pug-lint

Лінтер надає доступ до інтерфейсу pug-lint (https://github.com/pugjs/pug-lint),
перевіряє синтаксис коду Pug-файлів.

Для використання лінтеру необхідно встановити pug-lint через пакетний менеджер
npm глобально або як модуль в проекті:
```shell
npm install -g pug-lint
```


###### Налаштування SublimeLinter-pug-lint

В налаштуваннях SublimeLinter лінтер прописується як "puglint".

Опції та правила прописуються у файлі з розширеннями .pug-lintrc, .pug-lintrc.js
або .pug-lintrc.json або у файлі package.json по ключу "pugLintConfig". Файл з
налаштуваннями розташовується в корені проекту, для linux він може бути
розташований глобально в директорії User. Також файл можна розмістити у
довільній директорії, але тоді потрібно вручну прописати шлях до неї у
налаштуваннях лінтеру (у властивості "args" прописати:
["--config", "/path/to/file"]).

Шлях до файлу кешується, тобто якщо потрібно створити новий файл, також потрібно
очистити кеш SublimeLInter (Tools ▶ SublimeLinter ▶ Clear Caches).
??? В SublimeText4 такого нема.


###### Налаштування конфігураційного файла

preset          застаріла опція

extends         шлях до конфігураційного файлу (відносний або абсолютний), який
                розширює поточний файл. Властивості поточного файлу мають
                перевагу над властивостями додаткового конфігу.
                string

excludeFiles    масив патернів для шляхів до файлів, які не потрібно перевіряти
                array, default ["node_modules/**"]

additionalRules масив шляхів для додаткових файлів з правилами
                array

Також у файлі конфігу прописуються правила перевірки синтаксису. Якщо правила
суперечать одне одному, вони переводяться у значення null та ігноруються, напр.:
```js
{
  "disallowSpaceAfterCodeOperator": true,
  "requireSpaceAfterCodeOperator": true  // -> null
}
```

Повний список правил доступний за адресою:
https://github.com/pugjs/pug-lint/blob/master/docs/rules.md#disallowattributeinterpolation-true
