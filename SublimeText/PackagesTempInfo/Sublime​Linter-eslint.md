##### SublimeLinter-eslint

Лінтер надає доступ до інтерфейсу ESLint
https://github.com/eslint/eslint
https://eslint.org


Для використання лінтеру необхідно встановити eslint через пакетний менеджер
npm глобально або як модуль в проекті:

```shell
npm install -g eslint // global
npm install -D eslint // local
```

SublimeLinter з коробки здатен розпізнавати typescript, vue, svelte, html, json
і надсилає їх в eslint. Якщо налаштовувати виконуваний файл вручну,
SublimeLinter надсилатиме в eslint тільки файли js. Для ручного визначення,
які файли SublimeLinter надсилатиме в eslint, можна в налаштуваннях прописати
області видимості (властивість "selector"):

```json
{
  "linters": {
    "eslint": {
      "selector": "source.ts, source.js - meta.attribute-with-value"
    }
  }
}
```

Конфігурація для JS: source.js - meta.attribute-with-value
Конфігурація для TS: source.ts, source.js - meta.attribute-with-value
Конфігурація для Vue: text.html.vue, source.js - meta.attribute-with-value


###### Налаштування eslint

Встановити і одразу сконфігурувати eslint можна, якщо в кореневій теці проекту
запустити команду:

```shell
npm init @eslint/config
```

В результаті з'явиться файл .eslintrc.{js,yml,json} з приблизним вмістом:

```json
{
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

Тут "semi" є назвою правила, перший елемент масиву - тип відображення (off - 
правило вимкнене/warn/error).

Другий спосіб налаштувати уже встановлений лінтер - блок "eslintConfig" у файлі
package.json.


###### Пріоритетність зчитування налаштувань

1. .eslintrc.js   : синтаксис JavaScript, експортує об'єкт (module.exports = {})
2. .eslintrc.cjs  : синтаксис JavaScript (ESM) ("type":"module" в package.json)
3. .eslintrc.yaml : синтаксис yaml
4. .eslintrc.yml  : синтаксис yaml
5. .eslintrc.json : синтаксис json, але з підтримкою js-коментарів
6. package.json   : об'єкт з ключем "eslintConfig"


Усі файли крім package.json дозволяють робити коментарі. Лінтер шукає дані файли,
починаючи з каталогу, в якому розташований файл, що перевіряється на даний
момент, аж до кореня операційної системи, також перевіряє домашню директорію
користувача і застосовує усі правила, вказані в усіх файлах. Щоб зупинити пошук
конфігураційних файлів на певному каталозі, у файлі з цього каталогу потрібно
прописати:

```json
{
    "root": true
}
```

При конфлікті правил перевагу має те правило, яке прописане у файлі, що є більш
вкладеним.


###### Властивості об’єкта налаштувань (.eslintrc.{js,yml,json})

env            лексичне оточення для лінтера, можна вибрати декілька. Значень
               дуже багато, повний список:
               https://eslint.org/docs/latest/user-guide/configuring/language-options
               Також лексичне оточення або довільні змінні можна визначити для
               конкретного файла у коментарі.
```json
{
  "env": {
    "browser": true,
    "node": true
  }
}
```

extends        масив рядків або рядок, який вказує шлях до конфігурації, яка
               буде наслідуватися (напр. eslint:recommended або eslint:all).
               Префікс eslint-config- у назві розширення можна не вказувати, так
               напр. "airbnb" буде прийнято, як "eslint-config-airbnb". Для
               використання розширень їх потрібно додаткови встановлювати, напр.
               npm init @eslint/config. eslint:recommended активує підмножину
               правил, які запобігають основним проблемам, eslint:all активує
               усі правила (не рекомендовано для production, бо в кожній новій
               версії може бути багато змін).

ignorePatterns патерни, які вказують на файли і директорії, які ігноруються
               лінтером. Параметри, вписані у файлі .eslintignore мають перевагу
               над ignorePatterns

noInlineConfig якщо true, забороняє конфігураційні коментарі у файлах

overrides      об'єкт, який дозволяє перевизначити правила для окремої категорії
               файлів, додати або прибрити файли з цієї категорії. Області
               "overrides" допускає усі ключі, що існують у конфігу, за винятком
               "root" та "ignorePatterns".
```json
{
  "rules": {
    "quotes": ["error", "double"]
  },

  "overrides": [
    {
      "files": ["bin/*.js", "lib/*.js"],
      "excludedFiles": "*.test.js",
      "rules": {
        "quotes": ["error", "single"]
      }
    }
  ]
}
```

parser         парсер коду для лінтера

parserOptions  об'єкт з налаштуваннями парсера.

parserOptions.ecmaVersion   версія ECMAScript

parserOptions.sourceType    "script"/"module"

parserOptions.allowReserved дозвіл на використання зарезервованих слів як
                            змінних (для ecmaVersion 3)

parserOptions.ecmaFeatures  об'єкт з додатковими налаштуванями (globalReturn /
                            impliedStrict / jsx)

plugins        масив рядків, де рядок - це ім'я або шлях до плагіна. Плагіни
               потрібно доставляти окремо. В назвах плагінів можна пропускати
               префікс "eslint-plugin-", наприклад писати "react" замість
               "eslint-plugin-react".

root           вказує, чи потрібно шукати файли налаштувань вище по ієрархії.
               Якщо true - лінтер вважає даний файл найвищим і припиняє пошуки.

rules          об'єкт з правилами для перевірки, дані правила перезаписують
               правила розширень, вказаних у "extends".

settings       об'єкт із "розшареними" властивостями, які використовуються
               плагінами для указання інформації, яка має бути спільною для усіх
               правил


###### Ігнорування коду

Код можна ігнорувати за допомогою властивості ignorePatterns об'єкту налаштувань,
властивості eslintIgnore файлу package.json або файлу .eslintignor, який має
синтаксис .gitignore.


###### Маніпуляція над правилами

Кожне правило може приймати одне з трьох значень:

1. "off" / 0
2. "warn" / 1
3. "error" / 2

Правила можна конфігурувати у властивості "rules" об'єкта налаштувань або за
допомогою коментарів у конкретному файлі, який перевіряється.

```js
/* eslint eqeqeq: "off", curly: "error" */

/* eslint quotes: ["error", "double"], curly: 2 */

/* eslint eqeqeq: "off", curly: "error" -- Here's a description about why this configuration is necessary. */

/* eslint eqeqeq: "off", curly: "error"
    --------
    Here's a description about why this configuration is necessary. */

/* eslint eqeqeq: "off", curly: "error"
 * --------
 * This will not work due to the line above starting with a '*' character.
 */
```

Відключення перевірки для шматка коду:
```js
/* eslint-disable */

alert('foo');

/* eslint-enable */
```

Відключення перевірки певного правила:
```js
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
```

Відключення перевірки певного рядка коду:
```js
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

/* eslint-disable-next-line */
alert('foo');

alert('foo'); /* eslint-disable-line */
```

Відключення перевірки кількох правил на одному рядку:
```js
alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

alert('foo'); /* eslint-disable-line no-alert, quotes, semi */

/* eslint-disable-next-line no-alert, quotes, semi */
alert('foo');

/* eslint-disable-next-line
  no-alert,
  quotes,
  semi
*/
alert('foo');
```


###### Вастивості об'єкта налаштувань (eslint.config.js)

Файл eslint.config.js є експериментальною опцією, розташовуєьтся у корені
проекту. Файл має вигляд: export default [{…}]

files                         Масив патернів, які вказують на файли, які
                              потрібно перевіряти

ignores                       Масив патернів, які вказують на файли, які
                              не потрібно перевіряти
```js
export default [
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "!**/eslint.config.js"],
    rules: {
      semi: "error"
    }
  }
];
```

languageOptions               об'єкт з налаштуваннями JavaScript

languageOptions.ecmaVersion   версія стандарту мови, "latest"/рік/номер
                              "latest"

languageOptions.globals       Об’єкт, що визначає додаткові об’єкти, які слід
                              додати до глобальної області під час лінтування.

languageOptions.parser        Або об'єкт, який має метод parse(), або рядок,
                              який вказує ім'я парсеру в плагіні
                              "@/espree"

languageOptions.parserOptions об'єкт з додатковими властивостями для парсера

languageOptions.sourceType    тип коду: "script"/"module"/"commonjs"
                              default: "module" for .js/.mjs files
                                       "commonjs" for .cjs files

linterOptions                 Об’єкт з властивостями лінтера

linterOptions.noInlineConfig  вказує, чи дозволена inline-конфігурація

linterOptions.reportUnusedDisableDirectives A Boolean value indicating if unused
                                            disable directives should be tracked
                                            and reported.

plugins                       Об'єкт з парами name-value для плагінів

processor                     Або об'єкт, який має методи preprocess()/
                              postprocess(), або рядок, який вказує ім'я
                              процесору в плагіні

rules                         Об'єкт з правилами

settings                      Об'єкт з парами name-value з інформацією, яка має
                              бути доступна для усіх правил


Повний список правил доступний за адресою:
https://eslint.org/docs/latest/rules/