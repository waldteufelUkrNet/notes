!!! на npmjs є документація по `eslint-plugin-jsdoc` ознайомитися!
!!! eslint-plugin-html - пакет для перевірки js в html-файлах

ESLint
================================================================================


Зміст
--------------------------------------------------------------------------------

- [Info                                                                 ](#info)
- [Конфігурація eslint                                                ](#config)
  - [Об'єкт налаштувань (`eslint.config.js`)                           ](#prop1)
    - [Список властивостей `eslint.config.js`                     ](#prop1-list)
    - [Підключення готових конфігурацій (аналог `"extends"`)         ](#presets)
  - [Об’єкт налаштувань (`.eslintrc.{js,yml,json}`)                    ](#prop2)
    - [Пріоритетність зчитування налаштувань                        ](#priority)
    - [Список властивостей `.eslintrc.{js,yml,json}`              ](#prop2-list)
- [Маніпуляція над правилами                                ](#fileManipulation)
- [Правила                                                             ](#rules)
- [Посилання                                                           ](#links)


Info                                                           <i id="info"></i>
--------------------------------------------------------------------------------

Лінтер для перевірки правопису js-файлів.

Для роботи в Sublime Text потрібен пакет `SublimeLinter-eslint`.

Для використання лінтеру необхідно встановити `eslint` через пакетний менеджер
npm глобально або як модуль в проекті:

```cmd
npm install -g eslint
npm install -D eslint
```

Певні файли можна ігнорувати за допомогою:

1. властивості `ignores` об'єкту налаштувань `eslint.config.js`
2. властивості `ignorePatterns` об'єкту налаштувань `.eslintrc.{js,yml,json}`
3. властивості `eslintIgnore` файлу `package.json`
4. файлу `.eslintignore`, який має синтаксис `.gitignore`.


Конфігурація eslint                                          <i id="сonfig"></i>
--------------------------------------------------------------------------------

Починаючи з версії ESlint 9.0.0 в лінтері змінено підхід до конфігураційних
файлів. Так, раніше для налаштувань використовувалися файли
`.eslintrc{.js, .cjs, .yaml, .yml, .json}` або ключ `"eslintConfig"` у файлі
`package.json`, то тепер використовується один файл - `eslint.config.js`.


### Об'єкт налаштувань (`eslint.config.js`)                   <i id="prop1"></i>


Файл `eslint.config.js` є експериментальною опцією, розташовується в корені
проекту. До версії 9.0.0 вимкнений за замовчуванням, з версії 9.0.0 стає
дефолтним.

Файл має структуру масиву об'єктів:

- для `"type":"module"`: `export default [{…},{…},…]`
- для CommonJS format: `module.exports = [{…},{…},…]`

Для CommonJS формату також є можливість огорнути налаштування у проміс, який
повертає масив:

```js
module.exports = (async () => {
  const someDependency = await import("some-esm-dependency");
  return [
    // ... use `someDependency` here
  ];
})();
```

Якщо в масиві присутні кілька об'єктів, що стосуються тих самих файлів, і їхні
правила конфліктують, ці об'єкти об'єднуються, нижні об'єкти перезаписують або
доповнюють (де це можливо) конфліктуючі правила верхніх об'єктів:

```js
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        MY_CUSTOM_GLOBAL: "readonly"
      }
    }
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        it: "readonly",
        describe: "readonly"
      }
    }
  }
];
// для файлів з каталогу test об'єкт globals мвтиме вигляд
// {
//   MY_CUSTOM_GLOBAL: "readonly",
//   it: "readonly",
//   describe: "readonly"
// }
```


#### Список властивостей `eslint.config.js`              <i id="prop1-list"></i>

01. `files` Масив патернів, які вказують на файли, які потрібно перевіряти.
    Патерни використовують синтаксис `minimatch` та прописуються відносно файлу
    `eslint.config.js`. За замовчуванням ESLint перевіряє файли `**/*.js`,
    `**/*.cjs` та  `**/*.mjs`.

02. `ignores` Масив патернів, які вказують на файли, які не потрібно перевіряти.
    **default:** `["**/node_modules/", ".git/"]`

    ```js
    export default [
      {
        files: ["src/**/*.js"],
        ignores: [
          "**/*.config.js",
          "!**/eslint.config.js",
          "dir-to-exclude/**",
          "!node_modules/",          // unignore `node_modules/` directory
          "node_modules/*",          // ignore its content
          "!node_modules/mylibrary/" // unignore `node_modules/mylibrary` directory
        ],
        rules: {
          semi: "error"
        }
      }
    ];
    ```

03. `languageOptions` об'єкт з налаштуваннями JavaScript:

    - `ecmaVersion` версія стандарту мови, `"latest"`/рік/номер
      **default:** `"latest"`

    - `globals` Об’єкт, що визначає додаткові об’єкти, які слід додати до
      глобальної області під час лінтування (аналог `env` у старій версії
      конфігів). ESlint не має передналаштованих наборів глобальних змінних, їх
      треба доставити самостійно:

      ```cmd
      npm i --save-dev globals
      ```

      ```js
      import globals from "globals";
      export default [
        {
          files: ["**/*.js"],
          languageOptions: {
            globals: {
              var1: "writable",  // змінна var1 доступна на запис
              var2: "readonly"   // змінна var доступна тільки на читання
              Promise: "off",    // відключити Promise API
              ...globals.browser // додати console.log() та інші браузерні фішки
            }
          }
        }
      ];
      ```

      Крім визначення глобальних змінних через файли конфігів, ці самі дії можна
      виконати за допомогою коментарів:

      ```js
      /* eslint-env node, mocha */
      /* global var1:writable, var2:writable */
      ```

    - `parser` Об'єкт, який має метод `parse()` або `parseForESLint()`

      ```js
      import babelParser from "@babel/eslint-parser";
      export default [
        {
          files: ["**/*.js", "**/*.mjs"],
          languageOptions: { parser: babelParser }
        }
      ];
      ```

      **default:** `espree`

    - `parserOptions` об'єкт з додатковими властивостями для парсера (напр.
      вимкнення певних властивостей мови)

    - `sourceType` тип JS-коду:
      - `"script"` Your code has a shared global scope and runs in non-strict
        mode
      - `"module"` Your code has a module scope and is run in strict mode
      - `"commonjs"` Your code has a top-level function scope and runs in
        non-strict mode

      **default:** `"module"` для `.js`/`.mjs`
                   `"commonjs"` для `.cjs`

04. `linterOptions` Об’єкт з властивостями лінтера

    - `noInlineConfig` логічне значення, яке вказує, чи дозволена inline-
      конфігурація (керування правилами через коментарі в коді)

    - `reportUnusedDisableDirectives` логічне значення, яке вказує, чи потрібно
      відстежувати і повідомляти про не використовувані директиви відключення.
      Disable directives such as `/*eslint-disable*/` and
      `/*eslint-disable-next-line*/` are used to disable ESLint rules around
      certain portions of code. As code changes, it’s possible for these
      directives to no longer be needed because the code has changed in such a
      way that the rule is no longer triggered. You can enable reporting of
      these unused disable directives by setting the
      `reportUnusedDisableDirectives` option to true.

05. `plugins` Об'єкт з парами name-value для плагінів, дозволяє розширювати
    функціонал eslint, наприклад додати `jsdoc` для перевірки коментарів:

    ```cmd
    npm i --save-dev eslint-plugin-jsdoc
    ```

    ```js
    import jsdoc from "eslint-plugin-jsdoc";
    export default [
      {
        files: ["**/*.js"],
        plugins: {
          jsdoc: jsdoc
        },
        rules: {
          "jsdoc/require-description": "error",
          "jsdoc/check-values": "error"
        }
      }
    ];
    ```

06. `processor` Або об'єкт, який має методи `preprocess()`/`postprocess()`, або
     рядок, який вказує ім'я процесору в плагіні

07. `rules` Об'єкт з правилами

08. `settings` Об'єкт з парами name-value з інформацією, яка має бути доступна
    для усіх правил


#### Підключення готових конфігурацій (аналог `"extends"`)  <i id="presets"></i>

ESLint має 2 готових пресети правил:

- `js.configs.recommended`
- `js.configs.all`

Для їх підключення потрібно встановити пакет `@eslint/js`:

```cmd
npm i --save-dev @eslint/js
```

```js
import js from "@eslint/js";
export default [
  js.configs.recommended,
  {
    rules: {
      semi: ["warn", "always"]
    }
  }
];
```

Також пресет можна застосувати лше для конкретного набору файлів:

```js
import js from "@eslint/js";
export default [
  {
    files: ["**/src/safe/*.js"],
    ...js.configs.recommended
  }
];
```


### Об’єкт налаштувань (`.eslintrc.{js,yml,json}`)            <i id="prop2"></i>

Встановити і одразу сконфігурувати `eslint` можна, якщо в кореневій теці проекту
запустити команду:

```cmd
npm init @eslint/config
```

В результаті з'явиться файл `.eslintrc.{js,yml,json}`.

Ще один спосіб налаштувати уже встановлений лінтер - блок `"eslintConfig"` у
файлі `package.json`.


#### Пріоритетність зчитування налаштувань                 <i id="priority"></i>

1. `.eslintrc.js` - синтаксис JS, експортує об'єкт (module.exports = {})
2. `.eslintrc.cjs` -  синтаксис JS (ESM) (`"type":"module"` в package.json)
3. `.eslintrc.yaml` - синтаксис yaml
4. `.eslintrc.yml`  - синтаксис yaml
5. `.eslintrc.json` - синтаксис json, але з підтримкою js-коментарів
6. об'єкт з ключем `"eslintConfig"` у файлі `package.json`  

Лінтер шукає дані файли, починаючи з каталогу, в якому розташований файл, що
перевіряється на даний момент, аж до кореня операційної системи, також перевіряє
домашню директорію користувача і застосовує усі правила, вказані в усіх файлах.
Щоб зупинити пошук конфігураційних файлів на певному каталозі, у файлі з цього
каталогу потрібно прописати:

```json
{ "root": true }
```

При конфлікті правил перевагу має те правило, яке прописане у файлі, що є більш
вкладеним.

Усі файли крім `package.json` дозволяють робити коментарі.


#### Список властивостей `.eslintrc.{js,yml,json}`       <i id="prop2-list"></i>

01. `env` лексичне оточення для лінтера, можна вибрати декілька. Значень дуже
    багато, повний список: <https://eslint.org/docs/latest/user-guide/configuring/language-options>
    Також лексичне оточення або довільні змінні можна визначити для конкретного
    файла у коментарі.

    ```json
    {
      "env": {
        "browser": true,
        "node": true
      }
    }
    ```

02. `extends` масив рядків або рядок, який вказує шлях до конфігурації, яка буде
    наслідуватися (напр. `eslint:recommended` або `eslint:all`). Префікс
    `eslint-config-` у назві розширення можна не вказувати, так напр.
    `"airbnb"` буде прийнято, як `"eslint-config-airbnb"`. Для використання
    розширень їх потрібно додатково встановлювати, напр.
    `npm init @eslint/config`. `eslint:recommended` активує підмножину правил,
    які запобігають основним проблемам, `eslint:all` активує усі правила (не
    рекомендовано для production, бо в кожній новій версії може бути багато
    змін).

03. `ignorePatterns` патерни, які вказують на файли і директорії, які
    ігноруються лінтером. Параметри, вписані у файлі `.eslintignore` мають
    перевагу над `ignorePatterns`.

04. `noInlineConfig` якщо `true`, забороняє конфігураційні коментарі у файлах.

05. `overrides` об'єкт, який дозволяє перевизначити правила для окремої
    категорії файлів, додати або прибрати файли з цієї категорії. Властивість
    `"overrides"` допускає усі ключі, що існують у конфігу, за винятком `"root"`
    та `"ignorePatterns"`.

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

06. `parser` парсер коду для лінтера.

07. `parserOptions` об'єкт з налаштуваннями парсера:

    - `ecmaVersion` версія ECMAScript

    - `sourceType` тип JS: `"script"`/`"module"`

    - `allowReserved` дозвіл на використання зарезервованих слів як змінних (для
      ecmaVersion 3)

    - `ecmaFeatures` об'єкт з додатковими налаштуванями
      (`globalReturn` / `impliedStrict` / `jsx`)

08. `plugins` масив рядків, де рядок - це ім'я або шлях до плагіна. Плагіни
    потрібно доставляти окремо. В назвах плагінів можна пропускати префікс
    `"eslint-plugin-"`, наприклад писати `"react"` замість
    `"eslint-plugin-react"`.

09. `root` вказує, чи потрібно шукати файли налаштувань вище по ієрархії. Якщо
    `true` - лінтер вважає даний файл найвищим і припиняє пошуки.

10. `rules` об'єкт з правилами для перевірки, дані правила перезаписують правила
    розширень, вказаних у `"extends"`.

11. `settings` об'єкт із "розшареними" властивостями, які використовуються
    плагінами для вказання інформації, яка має бути спільною для усіх правил.


Маніпуляція над правилами                          <i id="fileManipulation"></i>
--------------------------------------------------------------------------------

Кожне правило може приймати одне з трьох значень:

1. "off" / 0
2. "warn" / 1
3. "error" / 2

Правила можна конфігурувати у властивості `"rules"` об'єкта налаштувань або за
допомогою коментарів у конкретному файлі, який перевіряється.

```js
/* eslint eqeqeq: "off", curly: "error" */

/* eslint quotes: ["error", "double"], curly: 2 */

/* eslint eqeqeq: "off", curly: "error" -- Here's a description about why this
configuration is necessary. */

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

Повний список правил доступний за адресою:
https://eslint.org/docs/latest/rules/


Правила                                                       <i id="rules"></i>
--------------------------------------------------------------------------------


### Possible Problems

01. `array-callback-return` Вимагає `return` у колбеках методів масивів.

    **standard- autofix- manualfix+**

02. `constructor-super`

    **standard+ autofix- manualfix-**

03. `for-direction`

    **standard+ autofix- manualfix-**

04. `getter-return`

    **standard+ autofix- manualfix-**

05. `no-async-promise-executor`

    **standard+ autofix- manualfix-**




06. `no-await-in-loop`

    **standard- autofix- manualfix-**

07. `no-class-assign`

    **standard- autofix- manualfix-**

08. `no-compare-neg-zero`

    **standard- autofix- manualfix-**

09. `no-cond-assign`

    **standard- autofix- manualfix-**

10. `no-const-assign`

    **standard- autofix- manualfix-**

11. `no-constant-binary-expression`

    **standard- autofix- manualfix-**

12. `no-constant-condition`

    **standard- autofix- manualfix-**

13. `no-constructor-return`

    **standard- autofix- manualfix-**

14. `no-control-regex`

    **standard- autofix- manualfix-**

15. `no-debugger`

    **standard- autofix- manualfix-**

16. `no-dupe-args`

    **standard- autofix- manualfix-**

17. `no-dupe-class-members`

    **standard- autofix- manualfix-**

18. `no-dupe-else-if`

    **standard- autofix- manualfix-**

19. `no-dupe-keys`

    **standard- autofix- manualfix-**

20. `no-duplicate-case`

    **standard- autofix- manualfix-**

21. `no-duplicate-imports`

    **standard- autofix- manualfix-**

22. `no-empty-character-class`

    **standard- autofix- manualfix-**

23. `no-empty-pattern`

    **standard- autofix- manualfix-**

24. `no-ex-assign`

    **standard- autofix- manualfix-**

25. `no-fallthrough`

    **standard- autofix- manualfix-**

26. `no-func-assign`

    **standard- autofix- manualfix-**

27. `no-import-assign`

    **standard- autofix- manualfix-**

28. `no-inner-declarations`

    **standard- autofix- manualfix-**

29. `no-invalid-regexp`

    **standard- autofix- manualfix-**

30. `no-irregular-whitespace`

    **standard- autofix- manualfix-**

31. `no-loss-of-precision`

    **standard- autofix- manualfix-**

32. `no-misleading-character-class`

    **standard- autofix- manualfix-**

33. `no-new-native-nonconstructor`

    **standard- autofix- manualfix-**

34. `no-new-symbol`

    **standard- autofix- manualfix-**

35. `no-obj-calls`

    **standard- autofix- manualfix-**

36. `no-promise-executor-return`

    **standard- autofix- manualfix-**

37. `no-prototype-builtins`

    **standard- autofix- manualfix-**

38. `no-self-assign`

    **standard- autofix- manualfix-**

39. `no-self-compare`

    **standard- autofix- manualfix-**

40. `no-setter-return`

    **standard- autofix- manualfix-**

41. `no-sparse-arrays`

    **standard- autofix- manualfix-**

42. `no-template-curly-in-string`

    **standard- autofix- manualfix-**

43. `no-this-before-super`

    **standard- autofix- manualfix-**

44. `no-undef`

    **standard- autofix- manualfix-**

45. `no-unexpected-multiline`

    **standard- autofix- manualfix-**

46. `no-unmodified-loop-condition`

    **standard- autofix- manualfix-**

47. `no-unreachable`

    **standard- autofix- manualfix-**

48. `no-unreachable-loop`

    **standard- autofix- manualfix-**

49. `no-unsafe-finally`

    **standard- autofix- manualfix-**

50. `no-unsafe-negation`

    **standard- autofix- manualfix-**

51. `no-unsafe-optional-chaining`

    **standard- autofix- manualfix-**

52. `no-unused-private-class-members`

    **standard- autofix- manualfix-**

53. `no-unused-vars`

    **standard- autofix- manualfix-**

54. `no-use-before-define`

    **standard- autofix- manualfix-**

55. `no-useless-backreference`

    **standard- autofix- manualfix-**

56. `require-atomic-updates`

    **standard- autofix- manualfix-**

57. `use-isnan`

    **standard- autofix- manualfix-**

58. `valid-typeof`

    **standard- autofix- manualfix-**


### Suggestions

001. `accessor-pair`

     **standard- autofix- manualfix-**

002. `arrow-body-style`

     **standard- autofix- manualfix-**

003. `block-scoped-var`

     **standard- autofix- manualfix-**

004. `camelcase`

     **standard- autofix- manualfix-**

005. `capitalized-comments`

     **standard- autofix- manualfix-**

006. `class-methods-use-this`

     **standard- autofix- manualfix-**

007. `complexity`

     **standard- autofix- manualfix-**

008. `consistent-return`

     **standard- autofix- manualfix-**

009. `consistent-this`

     **standard- autofix- manualfix-**

010. `curly`

     **standard- autofix- manualfix-**

011. `default-case`

     **standard- autofix- manualfix-**

012. `default-case-last`

     **standard- autofix- manualfix-**

013. `default-param-last`

     **standard- autofix- manualfix-**

014. `dot-notation`

     **standard- autofix- manualfix-**

015. `eqeqeq`

     **standard- autofix- manualfix-**

016. `func-name-matching`

     **standard- autofix- manualfix-**

017. `func-names`

     **standard- autofix- manualfix-**

018. `func-style`

     **standard- autofix- manualfix-**

019. `grouped-accessor-pairs`

     **standard- autofix- manualfix-**

020. `guard-for-in`

     **standard- autofix- manualfix-**

021. `id-denylist`

     **standard- autofix- manualfix-**

022. `id-length`

     **standard- autofix- manualfix-**

023. `id-match`

     **standard- autofix- manualfix-**

024. `init-declarations`

     **standard- autofix- manualfix-**

025. `logical-assignment-operators`

     **standard- autofix- manualfix-**

026. `max-classes-per-file`

     **standard- autofix- manualfix-**

027. `max-depth`

     **standard- autofix- manualfix-**

028. `max-lines`

     **standard- autofix- manualfix-**

029. `max-lines-per-function`

     **standard- autofix- manualfix-**

030. `max-nested-callbacks`

     **standard- autofix- manualfix-**

031. `max-params`

     **standard- autofix- manualfix-**

032. `max-statements`

     **standard- autofix- manualfix-**

033. `multiline-comment-style`

     **standard- autofix- manualfix-**

034. `new-cap`

     **standard- autofix- manualfix-**

035. `no-alert`

     **standard- autofix- manualfix-**

036. `no-array-constructor`

     **standard- autofix- manualfix-**

037. `no-bitwise`

     **standard- autofix- manualfix-**

038. `no-caller`

     **standard- autofix- manualfix-**

039. `no-case-declarations`

     **standard- autofix- manualfix-**

040. `no-confusing-arrow`

     **standard- autofix- manualfix-**

041. `no-console`

     **standard- autofix- manualfix-**

042. `no-continue`

     **standard- autofix- manualfix-**

043. `no-delete-var`

     **standard- autofix- manualfix-**

044. `no-div-regex`

     **standard- autofix- manualfix-**

045. `no-else-return`

     **standard- autofix- manualfix-**

046. `no-empty`

     **standard- autofix- manualfix-**

047. `no-empty-function`

     **standard- autofix- manualfix-**

048. `no-empty-static-block`

     **standard- autofix- manualfix-**

049. `no-eq-null`

     **standard- autofix- manualfix-**

050. `no-eval`

     **standard- autofix- manualfix-**

051. `no-extend-native`

     **standard- autofix- manualfix-**

052. `no-extra-bind`

     **standard- autofix- manualfix-**

053. `no-extra-boolean-cast`

     **standard- autofix- manualfix-**

054. `no-extra-label`

     **standard- autofix- manualfix-**

055. `no-extra-semi`

     **standard- autofix- manualfix-**

056. `no-floating-decimal`

     **standard- autofix- manualfix-**

057. `no-global-assign`

     **standard- autofix- manualfix-**

058. `no-implicit-coercion`

     **standard- autofix- manualfix-**

059. `no-implicit-globals`

     **standard- autofix- manualfix-**

060. `no-implied-eval`

     **standard- autofix- manualfix-**

061. `no-inline-comments`

     **standard- autofix- manualfix-**

062. `no-invalid-this`

     **standard- autofix- manualfix-**

063. `no-iterator`

     **standard- autofix- manualfix-**

064. `no-label-var`

     **standard- autofix- manualfix-**

065. `no-labels`

     **standard- autofix- manualfix-**

066. `no-lone-blocks`

     **standard- autofix- manualfix-**

067. `no-lonely-if`

     **standard- autofix- manualfix-**

068. `no-loop-func`

     **standard- autofix- manualfix-**

069. `no-magic-numbers`

     **standard- autofix- manualfix-**

070. `no-mixed-operators`

     **standard- autofix- manualfix-**

071. `no-multi-assign`

     **standard- autofix- manualfix-**

072. `no-multi-str`

     **standard- autofix- manualfix-**

073. `no-negated-condition`

     **standard- autofix- manualfix-**

074. `no-nested-ternary`

     **standard- autofix- manualfix-**

075. `no-new`

     **standard- autofix- manualfix-**

076. `no-new-func`

     **standard- autofix- manualfix-**

077. `no-new-wrappers`

     **standard- autofix- manualfix-**

078. `no-nonoctal-decimal-escape`

     **standard- autofix- manualfix-**

079. `no-object-constructor`

     **standard- autofix- manualfix-**

080. `no-octal`

     **standard- autofix- manualfix-**

081. `no-octal-escape`

     **standard- autofix- manualfix-**

082. `no-param-reassign`

     **standard- autofix- manualfix-**

083. `no-plusplus`

     **standard- autofix- manualfix-**

084. `no-proto`

     **standard- autofix- manualfix-**

085. `no-redeclare`

     **standard- autofix- manualfix-**

086. `no-regex-spaces`

     **standard- autofix- manualfix-**

087. `no-restricted-exports`

     **standard- autofix- manualfix-**

088. `no-restricted-globals`

     **standard- autofix- manualfix-**

089. `no-restricted-imports`

     **standard- autofix- manualfix-**

090. `no-restricted-properties`

     **standard- autofix- manualfix-**

091. `no-restricted-syntax`

     **standard- autofix- manualfix-**

092. `no-return-assign`

     **standard- autofix- manualfix-**

093. `no-script-url`

     **standard- autofix- manualfix-**

094. `no-sequences`

     **standard- autofix- manualfix-**

095. `no-shadow`

     **standard- autofix- manualfix-**

096. `no-shadow-restricted-names`

     **standard- autofix- manualfix-**

097. `no-ternary`

     **standard- autofix- manualfix-**

098. `no-throw-literal`

     **standard- autofix- manualfix-**

099. `no-undef-init`

     **standard- autofix- manualfix-**

100. `no-undefined`

     **standard- autofix- manualfix-**

101. `no-underscore-dangle`

     **standard- autofix- manualfix-**

102. `no-unneeded-ternary`

     **standard- autofix- manualfix-**

103. `no-unused-expressions`

     **standard- autofix- manualfix-**

104. `no-unused-labels`

     **standard- autofix- manualfix-**

105. `no-useless-call`

     **standard- autofix- manualfix-**

106. `no-useless-catch`

     **standard- autofix- manualfix-**

107. `no-useless-computed-key`

     **standard- autofix- manualfix-**

108. `no-useless-concat`

     **standard- autofix- manualfix-**

109. `no-useless-constructor`

     **standard- autofix- manualfix-**

110. `no-useless-escape`

     **standard- autofix- manualfix-**

111. `no-useless-rename`

     **standard- autofix- manualfix-**

112. `no-useless-return`

     **standard- autofix- manualfix-**

113. `no-var`

     **standard- autofix- manualfix-**

114. `no-void`

     **standard- autofix- manualfix-**

115. `no-warning-comments`

     **standard- autofix- manualfix-**

116. `no-with`

     **standard- autofix- manualfix-**

117. `object-shorthand`

     **standard- autofix- manualfix-**

118. `one-var`

     **standard- autofix- manualfix-**

119. `one-var-declaration-per-line`

     **standard- autofix- manualfix-**

120. `operator-assignment`

     **standard- autofix- manualfix-**

121. `prefer-arrow-callback`

     **standard- autofix- manualfix-**

122. `prefer-const`

     **standard- autofix- manualfix-**

123. `prefer-destructuring`

     **standard- autofix- manualfix-**

124. `prefer-exponentiation-operator`

     **standard- autofix- manualfix-**

125. `prefer-named-capture-group`

     **standard- autofix- manualfix-**

126. `prefer-numeric-literals`

     **standard- autofix- manualfix-**

127. `prefer-object-has-own`

     **standard- autofix- manualfix-**

128. `prefer-object-spread`

     **standard- autofix- manualfix-**

129. `prefer-promise-reject-errors`

     **standard- autofix- manualfix-**

130. `prefer-regex-literals`

     **standard- autofix- manualfix-**

131. `prefer-rest-params`

     **standard- autofix- manualfix-**

132. `prefer-spread`

     **standard- autofix- manualfix-**

133. `prefer-template`

     **standard- autofix- manualfix-**

134. `quote-props`

     **standard- autofix- manualfix-**

135. `radix`

     **standard- autofix- manualfix-**

136. `require-await`

     **standard- autofix- manualfix-**

137. `require-unicode-regexp`

     **standard- autofix- manualfix-**

138. `require-yield`

     **standard- autofix- manualfix-**

139. `sort-imports`

     **standard- autofix- manualfix-**

140. `sort-keys`

     **standard- autofix- manualfix-**

141. `sort-vars`

     **standard- autofix- manualfix-**

142. `spaced-comment`

     **standard- autofix- manualfix-**

143. `strict`

     **standard- autofix- manualfix-**

144. `symbol-description`

     **standard- autofix- manualfix-**

145. `vars-on-top`

     **standard- autofix- manualfix-**

146. `yoda`

     **standard- autofix- manualfix-**


### Layout & Formatting

01. `array-bracket-newline`

    **standard- autofix- manualfix-**

02. `array-bracket-spacing`

    **standard- autofix- manualfix-**

03. `array-element-newline`

    **standard- autofix- manualfix-**

04. `arrow-parens`

    **standard- autofix- manualfix-**

05. `arrow-spacing`

    **standard- autofix- manualfix-**

06. `block-spacing`

    **standard- autofix- manualfix-**

07. `brace-style`

    **standard- autofix- manualfix-**

08. `comma-dangle`

    **standard- autofix- manualfix-**

09. `comma-spacing`

    **standard- autofix- manualfix-**

10. `comma-style`

    **standard- autofix- manualfix-**

11. `computed-property-spacing`

    **standard- autofix- manualfix-**

12. `dot-location`

    **standard- autofix- manualfix-**

13. `eol-last`

    **standard- autofix- manualfix-**

14. `func-call-spacing`

    **standard- autofix- manualfix-**

15. `function-call-argument-newline`

    **standard- autofix- manualfix-**

16. `function-paren-newline`

    **standard- autofix- manualfix-**

17. `generator-star-spacing`

    **standard- autofix- manualfix-**

18. `implicit-arrow-linebreak`

    **standard- autofix- manualfix-**

19. `indent`

    **standard- autofix- manualfix-**

20. `jsx-quotes`

    **standard- autofix- manualfix-**

21. `key-spacing`

    **standard- autofix- manualfix-**

22. `keyword-spacing`

    **standard- autofix- manualfix-**

23. `line-comment-position`

    **standard- autofix- manualfix-**

24. `linebreak-style`

    **standard- autofix- manualfix-**

25. `lines-around-comment`

    **standard- autofix- manualfix-**

26. `lines-between-class-members`

    **standard- autofix- manualfix-**

27. `max-len`

    **standard- autofix- manualfix-**

28. `max-statements-per-line`

    **standard- autofix- manualfix-**

29. `multiline-ternary`

    **standard- autofix- manualfix-**

30. `new-parens`

    **standard- autofix- manualfix-**

31. `newline-per-chained-call`

    **standard- autofix- manualfix-**

32. `no-extra-parens`

    **standard- autofix- manualfix-**

33. `no-mixed-spaces-and-tabs`

    **standard- autofix- manualfix-**

34. `no-multi-spaces`

    **standard- autofix- manualfix-**

35. `no-multiple-empty-lines`

    **standard- autofix- manualfix-**

36. `no-tabs`

    **standard- autofix- manualfix-**

37. `no-trailing-spaces`

    **standard- autofix- manualfix-**

38. `no-whitespace-before-property`

    **standard- autofix- manualfix-**

39. `nonblock-statement-body-position`

    **standard- autofix- manualfix-**

40. `object-curly-newline`

    **standard- autofix- manualfix-**

41. `object-curly-spacing`

    **standard- autofix- manualfix-**

42. `object-property-newline`

    **standard- autofix- manualfix-**

43. `operator-linebreak`

    **standard- autofix- manualfix-**

44. `padded-blocks`

    **standard- autofix- manualfix-**

45. `padding-line-between-statements`

    **standard- autofix- manualfix-**

46. `quotes`

    **standard- autofix- manualfix-**

47. `rest-spread-spacing`

    **standard- autofix- manualfix-**

48. `semi`

    **standard- autofix- manualfix-**

49. `semi-spacing`

    **standard- autofix- manualfix-**

50. `semi-style`

    **standard- autofix- manualfix-**

51. `space-before-blocks`

    **standard- autofix- manualfix-**

52. `space-before-function-paren`

    **standard- autofix- manualfix-**

53. `space-in-parens`

    **standard- autofix- manualfix-**

54. `space-infix-ops`

    **standard- autofix- manualfix-**

55. `space-unary-ops`

    **standard- autofix- manualfix-**

56. `switch-colon-spacing`

    **standard- autofix- manualfix-**

57. `template-curly-spacing`

    **standard- autofix- manualfix-**

58. `template-tag-spacing`

    **standard- autofix- manualfix-**

59. `unicode-bom`

    **standard- autofix- manualfix-**

60. `wrap-iife`

    **standard- autofix- manualfix-**

61. `wrap-regex`

    **standard- autofix- manualfix-**

62. `yield-star-spacing`

    **standard- autofix- manualfix-**


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Домашня сторінка](https://eslint.org)
2. [Гітхаб](https://github.com/eslint/eslint)
3. [Лінтер можна налаштувати на роботу з Prettier](https://github.com/prettier/eslint-config-prettier)
4. [Список правил](https://eslint.org/docs/latest/rules/)
