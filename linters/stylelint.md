Stylelint
================================================================================


Зміст
--------------------------------------------------------------------------------

- [Info                                                                 ](#info)
- [Перевірка CSS                                                   ](#css-proof)
- [Перевірка SCSS                                                 ](#scss-proof)
- [Налаштування конфігураційного файла                                ](#config)
- [Відключення перевірок                                            ](#turn-off)
- [Правила                                                             ](#rules)
- [Посилання                                                           ](#links)


Info                                                           <i id="info"></i>
--------------------------------------------------------------------------------

Лінтер здатен перевіряти коректність css-синтаксису, а також коректність усіх
тих типів синтаксисів, під які користувацькою спільнотою було написано
розширення.

Для роботи в Sublime Text потрібен пакет `SublimeLinter-stylelint`.

Для використання лінтеру необхідно встановити пакунки `postcss` і `stylelint`:

```cmd
npm install --save-dev stylelint postcss
```

Для роботи лінтеру потрібно передати об'єкт з налаштуваннями. Його можна
передати, використавши:

1. властивість `"stylelint"` у файлі `package.json`
2. файл `.stylelintrc`, який може бути у форматі Yaml або JS
3. файл `.stylelintrc{cjs,js,json,yaml,yml}`
4. файл `.stylelint.config.js`, який експортує js-об'єкт
5. файл `.stylelint.config.cjs`, який експортує js-об'єкт (в package.json
   повинен бути вказаний `"type":"module"`).
6. файл `.stylelint.config.mjs`

☩ Пробував використовувати `.stylelintrc` - інтерпретатор yaml спотикається об
  коментарі, `.stylelintrc.js` (бо деякі `message` сприймають аргументи і можна
  писати якусь js-логіку) - видає синтаксичні помилки, інтерпретатор не сприймає
  двокрапку в об'єкті. Довелося використовувати `.stylelintrc.json`.


Перевірка CSS                                             <i id="css-proof"></i>
--------------------------------------------------------------------------------

Для підключення стандартних правил перевірки css необхідно встановити додатковий
npm-модуль та вказати його в блоці `"extends"` файлу `.stylelintrc`:

```cmd
npm install --save-dev stylelint-config-standard
```

```json
{
  "extends": "stylelint-config-standard"
}
```

Для запуску перевірки коду потрібно запустити команду:

```cmd
npx stylelint "**/*.css"
```


Перевірка SCSS                                           <i id="scss-proof"></i>
--------------------------------------------------------------------------------

Для перевірки коду scss потрібно доставити пакет:

```cmd
npm install --save-dev stylelint-config-standard-scss
```

та вписати його в блок `"extends"` файлу налаштувань:

```json
{
  "extends": ["stylelint-config-standard", "stylelint-config-standard-scss"]
}
```

запуск перевірки scss-файлів через термінал:

```cmd
npx stylelint "**/*.scss"
```


Налаштування конфігураційного файла                          <i id="config"></i>
--------------------------------------------------------------------------------

Умовно властивості можна розділити на 4 підгрупи:

1. Глобальні правила, які можуть бути `Boolean`, `String`, `Array of Strings`:
   `extends`, `plugins`, `customSyntax`, `defaultSeverity`, `ignoreDisables`,
   `configurationComment`, `ignoreFiles`, `allowEmptyInput`, `cache`, `fix`.

2. Правила `report*`, які можуть бути `null`, `Boolean`, або двокомпонентним
   масивом (`[Boolean, {"except": …, "severity": …}]`): `reportNeedlessDisables`,
   `reportInvalidScopeDisables`, `reportDescriptionlessDisables`.

3. Властивість `"rules"` з переліком правил, які можуть бути `null`, `Boolean`,
   або двокомпонентним масивом (`[Boolean, {"disableFix": …, "message": …,
   "reportDisables": …, "severity": …, "ignore": …, "fix": …}]`).

4. Властивість `"overrides"` з переліком файлів, під які прописується кастомний
   синтаксис або змінюються конкретні правила
   (`[{"files": […], "customSyntax": …},{"files": […], "rules": …]`).


### Властивості конфігу

01. `allowEmptyInput`               Stylelint does not throw an error when the
                                    glob pattern matches no files. This config
                                    option should not be overridden on a
                                    per-file basis.

    **Boolean**

02. `cache`                         Збереження результатів оброблених файлів у
                                    кеші.

    **Boolean**

03. `configurationComment`          Визначає, як починається коментар-відключен-
                                    ня (тут прописується префікс).

    **String**

04. `customSyntax`                  Визначає кастомний синтаксис, назва
                                    встановленого додаткового npm-пакета.

    ```cmd
    npm install --save-dev stylelint stylelint-config-standard postcss-lit
    ```

    ```json
    {
      "extends": "stylelint-config-standard",
      "customSyntax": "postcss-lit"
    }
    ```

    **String**

05. `defaultSeverity`               Рівень помилки за замовчуванням для усіх
                                    правил.

    ```json
    {
      "defaultSeverity": "warning"
    }
    ```

    `"warning"`/`"error"`

06. `disableFix`                    Параметр другого аргумента-об'єкта в масиві
                                    аргументів до правила, забороняє
                                    автовиправлення.

    ```json
    {
      "rules": {
        "color-function-notation": ["modern", { "disableFix": true }]
      }
    }
    ```

07. `extends`                       Розширення конфігурації готовими пресетами,
                                    рядок або масив рядків. В масиві наступний
                                    пресет перезатирає попередній пресет.
                                    Пресети можуть бути іменами npm-модулів,
                                    абсолютний або відносний від файлу
                                    конфігурації файл .js/.json

    ```json
    {
      "extends": ["stylelint-config-standard", "./myExtendableConfig"],
      "rules": {
        "alpha-value-notation": "number"
      }
    }
    ```

08. `fix`                           Автовиправлення, де воно можливе.

    **Boolean**

09. `ignoreDisables`                Ігнорує коментарі-відключення правил, напр.
                                    `/* stylelint-disable block-no-empty */`

    **Boolean**

10. `ignoreFiles`                   Масив файлів, які не потрібно перевіряти.

11. `message`                       Параметр другого аргумента-об'єкта в масиві
                                    аргументів до правила, кастомне повідомлення
                                    про помилку.

    ```json
    {
      "rules": {
        "custom-property-pattern": [
          "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
          {
            "message": "Expected custom property name to be kebab-case"
          }
        ]
      }
    }
    ```

    Деякі правила підтримують аргументи для `message`:

    ```js
    // .stylelintrc.js
    {
      'color-no-hex': [true, {
        message: (hex) => `Don't use hex colors like "${hex}"`,
      }]
    }
    
    // .stylelintrc.json
    {
      "color-no-hex": [true, {
        "message": "Don't use hex colors like \"%s\""
      }]
    }
    ```

12. `overrides`                     Визначає синтаксис для специфічних типів
                                    файлів, має містити поле "files" і хоча б
                                    одну властивість, яку перезаписує.

    ```json
    {
      "rules": {
        "alpha-value-notation": "number"
      },
      "overrides": [
        {
          "files": ["*.scss", "**/*.scss"],
          "customSyntax": "postcss-scss"
        },
        {
          "files": ["components/**/*.css", "pages/**/*.css"],
          "rules": {
            "alpha-value-notation": "percentage"
          }
        }
      ]
    }
    ```

13. `plugins`                       Правила або набори правил, які підтримують
                                    методології, набори інструментів,
                                    нестандартні функції CSS або дуже специфічні
                                    випадки використання. Після підключення
                                    плагіна у секції `"rules"` потрібно
                                    увімкнути правила цього плагіна.

    ```json
    {
      "plugins": ["../some-rule-set.js"],
      "rules": {
        "some-rule-set/first-rule": "everything",
        "some-rule-set/second-rule": "nothing",
        "some-rule-set/third-rule": "everything"
      }
    }
    ```

14. `processors`                    Функції, які вбудовуються у ланцюжок команд
                                    stylelint, розробники лінтера рекомендують
                                    замісь них використовувати опцію
                                    `customSyntax`.

    **Масив імен npm-пакетів або шляхів до них.**

15. `report*`                       Ці властивості надають додаткову перевірку
                                    для коментарів, які відключають лінтер.
                                    Можуть мати значення:                   <br>
                                    `null` - конфігурація вимкнена          <br>
                                    `boolean` - перша опція                 <br>
                                    `Array` - масив з двох значень, перше -
                                      логічне, друге - об'єкт з двома ключами:
                                      `"except"` - масив правил, для якого перша
                                        опція інвертується
                                      `"severity"` - рівень помилки.

    ```json
    {
      "reportDescriptionlessDisables": [
        false,
        {
          "except": ["unit-allowed-list"],
          "severity": "warning"
        }
      ],
      "reportInvalidScopeDisables": true,
      "reportNeedlessDisables": true
    }
    ```

16. `reportDescriptionlessDisables` Сигналізує про коментар-відключення правила
                                    без пояснення. report-властивість.

    **Boolean**

17. `reportInvalidScopeDisables`    Сигналізує про коментар-відключення правила,
                                    який не співпадає з правилами, визначеними у
                                    конфігураційному об'єкті. report-властивість.
    **Boolean**

18. `reportNeedlessDisables`        Report `stylelint-disable` comments that
                                    don't actually match any lints that need to
                                    be disabled. A report* property.
    **Boolean**

19. `reportDisables`                Параметр другого аргумента-об'єкта в масиві
                                    аргументів до правила. Лінтер виводить
                                    повідомлення про помилку, навіть якщо
                                    користувач прописав коментарій, який
                                    відключає перевірку.
    **Boolean**

20. `rules`                         Об'єкт з правилами перевірки синтаксису.
                                    Жодні правила не ввімкнено за замовчуванням
                                    і немає значень за замовчуванням. Потрібно
                                    явно налаштувати кожне правило, щоб
                                    увімкнути його.
                                    Правила приймають значення:             <br>
                                      `null` - вимкнути правило             <br>
                                      просте значення                       <br>
                                      масив з двох значень                  <br>
                                    Багато правил мають додаткові налаштування,
                                    в такому випадку правило стає
                                    двокомпонентним масивом:

    ```json
    {
      "rules": {
        "selector-pseudo-class-no-unknown": [
          true,
          {
            "ignorePseudoClasses": ["global"]
          }
        ]
      }
    }
    ```

21. `severity`                      Параметр другого аргумента-об'єкта в масиві
                                    аргументів до правила, визначає рівень
                                    "серйозності" помилки, може приймати
                                    значення `warning` / `error`

    ```json
    {
      "rules": {
        "number-max-precision": [
          2,
          {
            "ignoreUnits": ["em"],
            "severity": "warning"
          }
        ]
      }
    }
    ```


Відключення перевірок                                      <i id="turn-off"></i>
--------------------------------------------------------------------------------

Відключення будь-яких перевірок:

```css
/* stylelint-disable */
a {}
/* stylelint-enable */
```

Відключення конкретних правил:

```css
/* stylelint-disable selector-max-id, declaration-no-important */
#id {
  color: pink !important;
}
/* stylelint-enable selector-max-id, declaration-no-important */
```

Відключення поточного рядку без потреби прописувати наступне увімкнення:

```css
#id { /* stylelint-disable-line */
  color: pink !important; /* stylelint-disable-line declaration-no-important */
}
```

Відключення наступного рядку без потреби прописувати наступне увімкнення:

```css
#id {
  /* stylelint-disable-next-line declaration-no-important */
  color: pink !important;
}
```

Stylelint підтримує складні шаблони вимикання та ввімкнення, що перекриваються:

```css
/* stylelint-disable */
/* stylelint-enable foo */
/* stylelint-disable foo */
/* stylelint-enable */
/* stylelint-disable foo, bar */
/* stylelint-disable baz */
/* stylelint-enable baz, bar */
/* stylelint-enable foo */
```

Причину відключення лінтера можна вказати в коментарі після двох дефісів,
відділених з обох боків пробілами:

```css
/* stylelint-disable -- Reason for disabling Stylelint. */
/* stylelint-disable foo -- Reason for disabling the foo rule. */
/* stylelint-disable foo, bar -- Reason for disabling the foo and bar rules. */
```

Для відключення перевірки цілого файлу потрібно в корені проекту створити файл
`.stylelintignore` і в ньому происати шлях:

```text
vendor/**/*.css
```

The patterns in your `.stylelintignore` file must match `.gitignore` syntax.
(Behind the scenes, node-ignore parses your patterns.) Your patterns in
`.stylelintignore` are always analyzed relative to `process.cwd()`.

Stylelint looks for a `.stylelintignore` file in `process.cwd()`. You can also
specify a path to your ignore patterns file (absolute or relative to
`process.cwd()`) using the `--ignore-path` (in the CLI) and `ignorePath` (in JS)
options.

Alternatively, you can add an `ignoreFiles` property within your configuration
object.


Правила                                                       <i id="rules"></i>
--------------------------------------------------------------------------------

Some rules and options accept regex. You can enforce these common cases:

1. kebab-case: `^([a-z][a-z0-9]*)(-[a-z0-9]+)*$`
2. lowerCamelCase: `^[a-z][a-zA-Z0-9]+$`
3. snake_case: `^([a-z][a-z0-9]*)(_[a-z0-9]+)*$`
4. UpperCamelCase: `^[A-Z][a-zA-Z0-9]+$`

Or enforce a prefix using a positive lookbehind regex. For example, `(?<=foo-)`
to prefix with `foo-`.


### Descending

01. `no-descending-specificity`  Забороняє менш специфічні селектори після більш
                                 специфічних, напр.:

    ```css
    /* invalid */
    #container a { top: 10px; }
    a { top: 0; }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignore: ["selectors-within-list"]` ігнорує менш специфічні селектори,
                                          якщо вони ідуть списком:

      ```css
      /* invalid */
      b a {}
      h1 {}
      h2 {}
      h3 {}
      a {}

      /* valid */
      b a {}
      h1, h2, h3, a {}
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**


### Duplicate

01. `declaration-block-no-duplicate-custom-properties` Забороняє дублікати
                                                       кастомних властивостей,
                                                       що вже є у блоці коду:

    ```css
    /* invalid */
    a {
      --custom-property: pink;
      --custom-property: orange;
    }
    ```

    **secondary options:**

    - `ignoreProperties: ["/regex/", /regex/, "non-regex"]` ігнорує дублікати
                                                            специфічних
                                                            властивостей

    Правило регістрозалежне.

    **standard+ autofix-**                                                  <br>
    **boolean**

02. `declaration-block-no-duplicate-properties` Забороняє дублікати стандартних
                                             властивостей, що вже є у блоці коду:

    ```css
    /* invalid */
    a {
      color: pink;
      color: orange;
    }
    ```

    **secondary options:**

    - `ignore: ["consecutive-duplicates"]` ігнорує послідовні дубльовані
                                           властивості (вони можуть
                                           використовуватися для підтримки
                                           старих браузерів)

      ```css
      /* ignore: ["consecutive-duplicates"]: valid */
      p {
        font-size: 16px;
        font-size: 1rem;
        font-weight: 400;
      }
      ```

    - `ignore: ["consecutive-duplicates-with-different-values"]`
                                        ігнорує послідовні дубльовані
                                        властивості з різними значеннями

    - `ignore: ["consecutive-duplicates-with-different-syntaxes"]`
                                        ігнорує послідовні дубльовані
                                        властивості з різними значеннями і
                                        розмірностями

    - `ignore: ["consecutive-duplicates-with-same-prefixless-values"]`
                                        ігнорує послідовні дубльовані
                                        властивості з вендорними префіксами

      ```css
      /* ignore: ["consecutive-duplicates-with-same-prefixless-values"]: valid */
      p {
        width: -moz-fit-content;
        width: fit-content;
      }
      ```

    - `ignoreProperties: ["/regex/", /regex/, "non-regex"]`
                                        ігнорує дублікати специфічних
                                        властивостей

    Правило ігнорує змінні `$sass`, `@less` та `--custom-property`.
    Для правила доступні опції `fix` та `message`.

    **standard+ autofix+**                                                  <br>
    **boolean**

03. `font-family-no-duplicate-names` Забороняє дублікати імен у властивостях
                                     `font` та `font-family`:

    ```css
    /* invalid */
    a { font-family: serif, serif; }
    ```

    **secondary options:**

    - `ignoreFontFamilyNames: ["/regex/", /regex/, "string"]`
                                        ігнорує вказані імена шрифтів

    Правило ігнорує змінні `$sass`, `@less` та `--custom-property`. Правило може
    спрацювати не коректно, якщо імена шрифтів складаються з кількох слів. Щоб
    цьому запобігти, імена шрифтів потрібно брати у лапки однакового типу.

    **standard+ autofix+**                                                  <br>
    **boolean**

04. `keyframe-block-no-duplicate-selectors` Забороняє дублікати кадрів у
                                            анімаціях:

    ```css
    /* invalid */
    @keyframes foo { 0% {} 0% {} }
    ```

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **boolean**

05. `no-duplicate-at-import-rules` Забороняє дублікати імпортів:

    ```css
    /* invalid */
    @import "a.css";
    @import "a.css";
    @import url(a.css);

    /* valid */
    @import url('a.css') projection;
    @import url('a.css') tv;
    ```

    **standard+ autofix-**                                                  <br>
    **boolean**

06. `no-duplicate-selectors` Забороняє однакові селектори:

    ```css
    /* invalid */
    .foo {} .bar {} .foo {}

    .foo, .bar, .foo {}

    a d, b > c {}
    b>c, a d {}

    a b {}
    a { & b {} }

    /* valid */
    a {}
    a, b {}

    a b {}
    a {
      & b,
      & c {}
    }
    ```

    **secondary options:**

    - `disallowInList: true | false` (default: `false`)
                                        Забороняє повтори селекторів у списках.

      ```css
      /* invalid */
      input, textarea {
        border: 2px;
      }
      textarea {
        border: 1px;
      }
      ```

    Правило не розповсюджується на однакові селектори в/зовні медіа-запитів.

    **standard+ autofix-**                                                  <br>
    **boolean**


### Empty

01. `block-no-empty` Забороняє порожні блоки коду:

    ```css
    /* invalid */
    a { }
    ```

    **secondary options:**

    - `ignore: ["comments"]` ігнорує коментарі в блоках:

      ```css
      /* invalid */
      a {
        /* foo */
      }
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**

02. `comment-no-empty` Забороняє порожні коментарі:

    ```css
    /* invalid */
    /*  */
    ```

    Правило ігнорує SCSS-подібні коментарі.

    **standard+ autofix-**                                                  <br>
    **boolean**

03. `no-empty-source`  Disallow empty sources:

    ```css
    /* invalid */
    \t\t
    \n
    ```

    **standard+ autofix-**                                                  <br>
    **boolean**


### Invalid

01. `color-no-invalid-hex` Забороняє не коректні hex-кольори (кольори повинні
    мати 3,4,6 або 8 знаків - коротка/довга форми, альфа-канал):

    ```css
    /* invalid */
    a { color: #y3 }
    ```
    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **boolean**

02. `function-calc-no-unspaced-operator` Забороняє оператор без пробілів у
                                         функції `calc`:

    ```css
    a { top: calc(1px + 2px); }
    ```

    Для правила доступна опція `fix`.

    **standard+ autofix+**                                                  <br>
    **boolean**

03. `keyframe-declaration-no-important` Забороняє директиву `!important` у
                                        ключових кадрах анімацій:

    ```css
    /* invalid */
    @keyframes foo {
      from { opacity: 0 }
      to { opacity: 1 !important }
    }
    ```

    **standard+ autofix-**                                                  <br>
    **boolean**

04. `media-query-no-invalid` Забороняє некоректні медіазапити:

    ```css
    @media not(min-width: 300px) {}
    ```

    Правило лише для CSS. Це правило не треба вмикати для SCSS, оскільки там
    інший синтаксис. Це правило добре працює з правилами
    `media-feature-name-no-unknown` та `media-feature-name-value-no-unknown`.

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **boolean**

05. `named-grid-areas-no-invalid` Disallow invalid named grid areas:

    ```css
    /* invalid */
    a { grid-template-areas: "a a a"
                             "b b a"; }
    a { grid-template-areas: "a a a"
                             "b b b b"; }
    /* valid */
    a { grid-template-areas: "a a a"
                             "b b b"; }
    ```

    **standard+ autofix-**                                                  <br>
    **boolean**

06. `no-invalid-double-slash-comments` Забороняє коментарі з подвійною скісною
                                       лінією (`//`). Це правило не стосується
                                       препроцесорів, які після компіляції
                                       перетворюють `//` на `/*  */`.

    **standard+ autofix-**                                                  <br>
    **boolean**

07. `no-invalid-position-at-import-rule` Забороняють декларації `@import` у не
                                         належних місцях:

    ```css
    /* invalid */
    a {}
    @import 'foo.css';
    ```

    `@import` повинні знаходитися на самому початку файлів, можуть бути після
    `@charset` та `@layer` або коментаря.

    ```css
    /* valid */
    @charset 'utf-8';
    @import 'foo.css';
    ```

    **secondary options:**

    - `ignoreAtRules: ["/regex/", /regex/, "string"]` Регулярки або рядки, які
                                                      дозволяють певним
                                                      директивам знаходитися
                                                      перед `@import`, напр.:

    ```regex
    ["/^--my-/", "--custom"]
    ```

    ```css
    /* valid */
    @--my-at-rule "bar.css";
    @import "foo.css";
    ```

    ```css
    /* valid */
    @--my-other-at-rule {}
    @import "foo.css";
    ```

    ```css
    /* valid */
    @--custom "bar.css";
    @import "foo.css"
    ```

    **standard+ autofix-**                                                  <br>
    **boolean**

08. `string-no-newline` Забороняє невалідні розриви рядків:

    ```css
    /* invalid */
    a {
      content: "first
        second";
    }

    /* valid */
    a {
      content: "first\\nsecond";
    }
    
    [title="nothing\
      is wrong"] {}
    ```

    **standard+ autofix-**                                                  <br>
    **boolean**


#### Irregular

01. `no-irregular-whitespace` Забороняє некоректні пробіли.

    ```css
    /* invalid */
    .firstClass .secondClass {}
    
    /* valid */
    .firstClass .secondClass {}
    ```

    **Список некоректних пробілів**

    `\u000B` - Line Tabulation (\v) - `<VT>`                                <br>
    `\u000C` - Form Feed (\f) - `<FF>`                                      <br>
    `\u00A0` - No-Break Space - `<NBSP>`                                    <br>
    `\u0085` - Next Line                                                    <br>
    `\u1680` - Ogham Space Mark                                             <br>
    `\u180E` - Mongolian Vowel Separator - `<MVS>`                          <br>
    `\uFEFF` - Zero Width No-Break Space - `<BOM>`                          <br>
    `\u2000` - En Quad                                                      <br>
    `\u2001` - Em Quad                                                      <br>
    `\u2002` - En Space - `<ENSP>`                                          <br>
    `\u2003` - Em Space - `<EMSP>`                                          <br>
    `\u2004` - Tree-Per-Em                                                  <br>
    `\u2005` - Four-Per-Em                                                  <br>
    `\u2006` - Six-Per-Em                                                   <br>
    `\u2007` - Figure Space                                                 <br>
    `\u2008` - Punctuation Space - `<PUNCSP>`                               <br>
    `\u2009` - Thin Space                                                   <br>
    `\u200A` - Hair Space                                                   <br>
    `\u200B` - Zero Width Space - `<ZWSP>`                                  <br>
    `\u2028` - Line Separator                                               <br>
    `\u2029` - Paragraph Separator                                          <br>
    `\u202F` - Narrow No-Break Space                                        <br>
    `\u205F` - Medium Mathematical Space                                    <br>
    `\u3000` - Ideographic Space

    **standard+ autofix-**                                                  <br>
    **boolean**


### Missing

01. `custom-property-no-missing-var-function` Забороняє пропускати функцію `var`.

    ```css
    /* invalid */
    :root { --foo: red; }
    a { color: --foo; }

    @property --foo {}
    a { color: --foo; }

    /* valid */
    :root { --foo: red; }
    a { color: var(--foo); }

    @property --foo {}
    a { color: var(--foo); }
    ```

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **boolean**

02. `font-family-no-missing-generic-family-keyword` Забороняє відсутнє загальне
                                                    ключове слово сімейства в
                                                    сімействах шрифтів.

    ```css
    /* invalid */
    a { font-family: Helvetica, Arial, Verdana, Tahoma; }

    /* valid */
    a { font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif; }
    ```

    **secondary options:**

    - `ignoreFontFamilies: ["/regex/", /regex/, "string"]`
                                        Регулярка або рядок, після яких не
                                        потрібна назва сімейства шрифтів.

      ```json
      ["custom-font"]
      ```

      ```css
      a { font-family: custom-font; }
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**


### Non-standatd

01. `function-linear-gradient-no-nonstandard-direction` Забороняє не стандартні
                                                        значення напрямків для
                                                        лінійних градіентів:

    ```css
    /* invalid */
    .foo { background: linear-gradient(top, #fff, #000); }

    /* valid */
    .foo { background: linear-gradient(to top, #fff, #000); }
    ```

    **standard+ autofix-**                                                  <br>
    **boolean**


### Overrides

01. `declaration-block-no-shorthand-property-overrides` Забороняє скороченням
                                        властивостей перезаписувати повні
                                        властивості:

    ```css
    /* invalid */
    a {
      padding-left: 10px;
      padding: 20px;
    }

    /* valid */
    a {
      padding: 10px;
      padding-left: 20px;
    }
    ```

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **boolean**


### Unmatchable

01. `selector-anb-no-unmatchable` Забороняє некоректні An+B селектори:

    ```css
    /* invalid */
    a:nth-child(0) {}
    a:nth-last-child(0n) {}
    a:nth-of-type(0n+0) {}
    a:nth-last-of-type(0 of a) {}

    /* valid */
    a:nth-last-of-type(0 of a) {}
    a:nth-last-child(1n) {}
    a:nth-of-type(1n+0) {}
    a:nth-last-of-type(1 of a) {}
    ```

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **boolean**


### Unknown

01. `annotation-no-unknown` Забороняє невідомі анотації:

    ```css
    /* invalid */
    a {
      color: green !imprtant;
    }

    /* valid */
    a {
      color: green !important;
    }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreAnnotations: ["/regex/", /regex/, "string"]` Дозволяє певним
                                                          анотаціям порушувати
                                                          правило:

      ```json
      ["/^--foo-/", "--bar"]
      ```

      ```css
      /* valid */
      a {
        color: green !--foo--bar;
      }
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**

02. `at-rule-no-unknown` Забороняє невідомі @-директиви:

    ```css
    /* invalid */
    @unknown {}

    /* valid */
    @charset "UTF-8";
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreAtRules: ["/regex/", /regex/, "string"]` Дозволяє визначеним у
                                        регулярці/рядку саморобним @-директивам
                                        порушувати це правило.

    ```json
    ["/^--my-/", "--custom"]
    ```

    ```css
    /* valid */
    @--my-at-rule "x.css";
    ```

    **standard+ autofix-**                                                  <br>
    **boolean**

03. `declaration-property-value-no-unknown` Забороняє невідомі значення
                                            властивостей:

    ```css
    /* invalid */
    a { top: red; }

    /* valid */
    a { top: 0; }
    ```

    Правило розраховане на стандартний синтаксис, якщо його треба розширити,
    можна використовувати додаткові опції `typesSyntax` та `propertiesSyntax`.

    Правило не розраховане на SCSS.

    **secondary options:**

    - `ignoreProperties: { "property": ["/regex/", /regex/, "non-regex"]|"/regex/"|/regex/|"non-regex" }`
                                        Об'єкт, який визначає для яких
                                        властивостей які не стандартні значення
                                        допустимі.

      ```json
      {
        "top": ["unknown"],
        "/^margin-/": "/^--foo/",
        "padding": "/.+/",
        "/.+/": "--unknown-value"
      }
      ```

      ```css
      /* valid */
      a { top: unknown; }
      a { margin-top: --foo-bar; }
      a { padding: invalid; }
      a { width: --unknown-value; }
      ```

    - `propertiesSyntax: { property: syntax }` Розширює або змінює словник
                                               синтаксису властивостей. Якщо
                                               визначення починається з `|`,
                                               воно додається. Детальніше про
                                               синтаксис css: <https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md>

      ```json
      { "size": "<length-percentage>" }
      ```

      ```css
      /* valid */
      a { size: 0; }
      a { size: 10px }
      ```

    - `typesSyntax: { type: syntax }` Розширює або змінює словник синтаксису
                                      типів. Якщо визначення починається з `|`,
                                      воно додається.

      ```json
      {
        "propertiesSyntax": { "top": "| <--foo()>" },
        "typesSyntax": { "--foo()": "--foo( <length-percentage> )" }
      }
      ```

      ```css
      a { top: --foo(0); }
      a { top: --foo(10px); }
      ```

    **standard- autofix-**                                                  <br>
    **boolean**

04. `function-no-unknown` Забороняє невідомі функції:

    ```css
    /* invalid */
    a { transform: unknown(1); }

    /* valid */
    a { transform: scale(1); }
    a { transform: --custom-function(1); }
    ```

    Правило ігнорує кастомні функції у форматі `--custom-function()`.

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreFunctions: ["/regex/", /regex/, "non-regex"]` Дозволяє ігнорувати
                                        кастомні функції, вказані у регулярці.

      ```json
      ["theme", "/^foo-/"]
      ```

      ```css
      /* valid */
      a { transform: theme(1); }
      a { transform: foo-func(1); }
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**

05. `media-feature-name-no-unknown` Забороняє невідомі імена властивостей у
                                    медіазапитах:

    ```css
    /* invalid */
    @media screen and (unknown) {}

    /* valid */
    @media (min-width: 700px) {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreMediaFeatureNames: ["/regex/", /regex/, "string"]`
                                        Дозволяє ігнорувати кастомні властивості
                                        медіазапитів, вказані у регулярці.

      ```json
      ["/^my-/", "custom"]
      ```

      ```css
      @media screen and (my-media-feature-name) {}
      @media screen and (custom: 10px) {}
      @media screen and (100px < custom < 700px) {}
      @media (min-width: 700px) and (custom: 10px) {}
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**

06. `media-feature-name-value-no-unknown` Забороняє невідомі властивості у
                                          медіазапитах:

    ```css
    /* invalid */
    @media (color: red) { top: 1px; }
    @media (width: 10) { top: 1px; }
    @media (width: auto) { top: 1px; }

    /* valid */
    @media (color: 8) { top: 1px; }
    @media (width: 10px) { top: 1px; }
    ```

    Для правила доступна опція `message`. Правило не придатне для SCSS.

    **standard- autofix-**                                                  <br>
    **boolean**

07. `no-unknown-animations` Забороняє невідомі анімації (повинні бути
                            оголошення анімацій):

    ```css
    /* invalid */
    a { animation-name: fancy-slide; }

    /* valid */
    @keyframes fancy-slide {}
    a { animation-name: fancy-slide; }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **boolean**

08. `no-unknown-custom-properties` Забороняє невідомі кастомні властивості:

    ```css
    /* invslid */
    a { color: var(--foo); }
    /* vslid */
    a { --foo: #f00; color: var(--foo); }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **boolean**

09. `property-no-unknown`

    ```css
    /* invalid */
    a {  colr: blue;}

    /* valid */
    a {  color: green;}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreProperties: ["/regex/", /regex/, "string"]`
                                        Ігнорує вказані властивості.

      ```json
      ["/^my-/", "custom"]
      ```

      ```css
      a {my-property: 10px;}
      a {custom: 10px;}
      ```

    - `ignoreSelectors: ["/regex/", /regex/, "string"]`
                                        Ігнорує властивості селекторів.

      ```json
      [":root"]
      ```

      ```css
      :root {
        my-property: blue;
      }
      ```

    - `ignoreAtRules: ["/regex/", /regex/, "string"]`
                                        Ігнорує вкладені правила у медіазапитах.

      ```json
      ["supports"]
      ```

      ```css
      @supports (display: grid) {
        a {
          my-property: 1;
        }
      }
      ```

    - `checkPrefixed: true | false` (default: `false`)
                                        Вказує, чи потрібно перевіряти вендорні
                                        префікси.

    Правило ігнорує вендорні префікси та змінні `$sass`, `@less`,
    `--custom-property`.

    **standard+ autofix-**                                                  <br>
    **boolean**

10. `selector-pseudo-class-no-unknown` Забороняє невідомі селектори псевдокласів:

    ```css
    /* invalid */
    a:hoverr {}

    /* valid */
    a:hover {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignorePseudoClasses: ["/regex/", /regex/, "non-regex"]`
                                        Ігнорує псевдокласи, вказані у регулярці.

      ```json
      ["/^--my-/", "--pseudo-class"]
      ```

      ```css
      a:--my-pseudo {}
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**

11. `selector-pseudo-element-no-unknown` Забороняє невідомі селектори
                                        псевдоелементів:

    ```css
    /* invalid */
    a::pseudo {}

    /* valid */
    a:before {}
    a::before {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignorePseudoElements: ["/regex/", /regex/, "non-regex"]`
                                        Ігнорує псевдоелементи, вказані у
                                        регулярці.

      ```json
      ["/^--my-/", "--pseudo-element"]
      ```

      ```css
      a::--my-pseudo {}
      ```


    **standard+ autofix-**                                                  <br>
    **boolean**

12. `selector-type-no-unknown` Забороняє невідомі типи селекторів:

    ```css
    /* invalid */
    unknown {}

    /* valid */
    input {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreNamespaces: ["/regex/", /regex/, "string"]`

      ```json
      ["/^my-/", "custom-namespace"]
      ```

      ```css
      custom-namespace|unknown {}
      ```

    - `ignoreTypes: ["/regex/", /regex/, "string"]`

      ```json
      ["/^my-/", "custom-type"]
      ```

      ```css
      custom-type {}
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**

13. `unit-no-unknown` Забороняє невідомі розмірності:

    ```css
    /* invalid */
    a {width: 10pixels;}

    /* valid */
    a {width: 10px;}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreUnits: ["/regex/", /regex/, "string"]`

      ```json
      ["/^--foo-/", "--bar"]
      ```

      ```css
      a {width: 10--foo--baz;}
      ```

    - `ignoreFunctions: ["/regex/", /regex/, "string"]`

      ```json
      ["foo", "/^my-/", "/^YOUR-/i"]
      ```

      ```css
      a {width: foo(1x);}
      ```

    **standard+ autofix-**                                                  <br>
    **boolean**


### Allowed, disallowed & required


#### At-rule

01. `at-rule-allowed-list` Визначає список дозволених @-директив.

    ```json
    ["extend", "keyframes"]
    ```

    ```css
    /* invalid */
    @import "path/to/file.css";
    @media screen and (max-width: 1024px) {
      a { display: none; }
    }
    /* valid */
    a { @extend placeholder; }
    @keyframes name {
      from { top: 10px; }
      to { top: 20px; }
    }
    @-moz-keyframes name {
      from { top: 10px; }
      to { top: 20px; }
    }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string`: `["array", "of", "unprefixed", "at-rules"]|"at-rule"`**

02. `at-rule-disallowed-list` Визначає список заборонених @-директив.

    ```json
    ["extend", "keyframes"]
    ```

    ```css
    /* invalid */
    a { @extend placeholder; }
    @keyframes name {
      from { top: 10px; }
      to { top: 20px; }
    }
    /* valid */
    @import "path/to/file.css";
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string`: `["array", "of", "unprefixed", "at-rules"]|"at-rule"`**

03. `at-rule-no-vendor-prefix` Забороняє вендорні префікси для @-директив:

    ```css
    /* invalid */
    @-webkit-keyframes { 0% { top: 0; } }

    /* valid */
    @keyframes { 0% { top: 0; } }
    ```

    Правило ігнорує не стандартні @-директиви, які не обробляються
    [Autoprefixer](https://github.com/postcss/autoprefixer).

    Для правила доступні опції `message` та `fix`.

    **standard+ autofix+**                                                  <br>
    **boolean**

04. `at-rule-property-required-list` Визначає список дозволених властивостей для
                                     @-директив:

    ```json
    {
      "font-face": ["font-display", "font-family", "font-style"]
    }
    ```

    ```css
    /* invalid */
    @font-face {
      font-family: 'foo';
      src: url('./fonts/foo.woff2') format('woff2');
    }
    @font-face {
      font-family: 'foo';
      font-style: normal;
      src: url('./fonts/foo.woff2') format('woff2');
    }
    /* valid */
    @font-face {
      font-display: swap;
      font-family: 'foo';
      font-style: normal;
      src: url('./fonts/foo.woff2') format('woff2');
    }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`{ "at-rule-name": ["array", "of", "properties"]|"property" }`**


#### Color

01. `color-hex-alpha` Дозволяє або забороняє альфа-канал для hex-кольорів.

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`string`: `"always"|"never"`**

02. `color-named` Дозволяє або забороняє імена кольорів.

    **secondary options:**

    - `ignore: ["inside-function"]` Ігнорує кольори всередині функцій.

      ```css
      /* valid */
      a {
        color: map-get($color, blue);
      }
      a {
        background-image: url(red);
      }
      ```

    - `ignoreProperties: ["/regex/", /regex/, "string"]` ігнорує прописані
                                                         властивості.

      ```js
      // {"color-named": "never"}
      ["/^my-/", "composes"]
      ```

      ```css
      /* valid */
      a {
        my-property: red;
      }
      a {
        composes: red from './index.css';
      }
      ```

    Правило ігнорує змінні `$sass` та `@less`.

    **standard- autofix-**                                                  <br>
    **`string`: `"always-where-possible"|"never"`**

03. `color-no-hex` Забороняє hex-кольори:

    ```css
    /* invalid */
    a { color: #000; }
    /* valid */
    a { color: black; }
    ```

    **standard- autofix-**                                                  <br>
    **boolean**


#### Comment

01. `comment-word-disallowed-list` Визначає список заборонених слів у коментарях.

    ```json
    ["/^TODO:/", "badword"]
    ```

    ```css
    /* TODO: add fallback */
    /* some badword */
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regexp`: `["array", "of", "words", /or/, "/regex/"]|"word"|"/regex/"|/regex/`**


#### Declaration

01. `declaration-no-important` Забороняє директиву `!important`.

    ```css
    /* invalid */
    a { color: pink !important; }
    a { color: pink ! important; }
    a { color: pink!important; }

    /* valid */
    a { color: pink; }
    ```

    Якщо `!important` потрібен у своїх оголошеннях, наприклад, для стилів
    користувача, їх можна безпечно додати за допомогою `postcss-safe-important`.

    **standard- autofix-**                                                  <br>
    **boolean**

02. `declaration-property-unit-allowed-list` Формує список розмірностей для
                                             властивостей.

    ```json
    {
      "font-size": ["em", "px"],
      "/^animation/": "s",
      "line-height": []
    }
    ```

    ```css
    /* invalid */
    a { font-size: 1.2rem; }
    a { animation-duration: 500ms; }
    /* valid */
    a { font-size: 1em; }
    a { animation: animation-name 5s ease; }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignore: ["inside-function"]` ігнорує розмірності всередині функцій.

      ```json
      [
        {
          "/^border/": ["px"],
          "/^background/": ["%"]
        },
        {
          "ignore": ["inside-function"]
        }
      ]
      ```

      ```css
      a {
        border: 1px solid hsla(162deg, 51%, 35%, 0.8);
      }
      a {
        background-image: linear-gradient(hsla(162deg, 51%, 35%, 0.8), hsla(62deg, 51%, 35%, 0.8));
      }
      ```

    **standard- autofix-**                                                  <br>
    **`{ "unprefixed-property-name": ["array", "of", "units"]|"unit" }`**

03. `declaration-property-unit-disallowed-list` Формує список заборонених
                                                розмірностей для властивостей.

    ```json
    {
      "font-size": ["em", "px"],
      "/^animation/": "s"
    }
    ```

    ```css
    /* invalid */
    a { font-size: 1em; }
    a { animation: animation-name 5s ease; }
    /* valid */
    a { font-size: 1.2rem; }
    a { animation: animation-name 500ms ease; }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`{ "unprefixed-property-name": ["array", "of", "units"]|"unit" }`**

04. `declaration-property-value-allowed-list` Формує список дозволених значень
                                              властивостей

    ```json
    {
      "transform": ["/scale/"],
      "whitespace": "nowrap",
      "/color/": ["/^green/"]
    }
    ```

    ```css
    /* invalid */
    a { whitespace: pre; }
    a { transform: translate(1, 1); }
    a { color: pink; }
    /* valid */
    a { whitespace: nowrap; }
    a { transform: scale(1, 1); }
    a { -webkit-transform: scale(1, 1); }
    a { color: green; }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`{ "unprefixed-property-name": ["array", "of", "values", "/regex/", /regex/]|"value"|"/regex/"|/regex/ }`**

05. `declaration-property-value-disallowed-list` Формує список заборонених
                                                 значень властивостей

    ```json
    {
      "transform": ["/scale3d/", "/rotate3d/", "/translate3d/"],
      "position": "fixed",
      "color": ["/^green/"],
      "/^animation/": ["/ease/"]
    }
    ```

    ```css
    /* invalid */
    a { position: fixed; }
    a { transform: scale3d(1, 2, 3); }
    a { -webkit-transform: scale3d(1, 2, 3); }
    a { color: green; }
    a { animation: foo 2s ease-in-out; }
    a { animation-timing-function: ease-in-out; }
    a { -webkit-animation-timing-function: ease-in-out; }

    /* valid */
    a { position: relative; }
    a { transform: scale(2); }
    a { -webkit-transform: scale(2); }
    a { color: lightgreen; }
    a { animation: foo 2s linear; }
    a { animation-timing-function: linear; }
    a { -webkit-animation-timing-function: linear; }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`{ "unprefixed-property-name": ["array", "of", "values", "/regex/", /regex/]|"value"|"/regex/"|/regex/ }`**


#### Function

01. `function-allowed-list` Визначає список дозволених функцій.

    ```json
    ["scale", "rgba", "/linear-gradient/"]
    ```

    ```css
    /* invalid */
    a { transform: rotate(1); }
    a {
      color: hsla(170, 50%, 45%, 1)
    }
    /* valid */
    a { background: red; }
    a { transform: scale(1); }
    a {
      color: rgba(0, 0, 0, 0.5);
    }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", "unprefixed", /functions/, "/regex/"]|"function"|"/regex/"|/regex/`**

02. `function-disallowed-list` Визначає список заборонених функцій.

    ```json
    ["scale", "rgba", "linear-gradient"]
    ```

    ```css
    /* invalid */
    a { transform: scale(1); }
    /* valid */
    a { background: red; }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", "unprefixed", /functions/, "regex"]|"function"|"/regex/"|/regex/`**

03. `function-url-no-scheme-relative` Забороняє scheme-relative urls (це такі
                                      url, які починаються з `//`):

    ```css
    /* invalid */
    a {
      background: url("//www.google.com/file.jpg");
    }

    /* valid */
    a {
      background: url("../file.jpg");
    }
    a {
      background: url("http://www.google.com/file.jpg");
    }
    ```

    Це правило ігнорує url-аргументи, які є змінними `$sass`, `@less`,
    `--custom-property`.

    **standard- autofix-**                                                  <br>
    **boolean**

04. `function-url-scheme-allowed-list` Визначає список дозволених url-схем.

    ```json
    ["data", "/^http/"]
    ```

    ```css
    /* invalid */
    a { background-image: url('file://file.jpg'); }

    /* valid */
    a { background-image: url('example.com/file.jpg'); }
    a { background-image: url('/example.com/file.jpg'); }
    a { background-image: url('//example.com/file.jpg'); }
    a { background-image: url('./path/to/file.jpg'); }
    a { background-image: url('http://www.example.com/file.jpg'); }
    a { background-image: url('https://www.example.com/file.jpg'); }
    a { background-image: url('HTTPS://www.example.com/file.jpg'); }
    a { background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='); }
    ```

    Правило ігнорує аргументи url без існуючої схеми, аргументи зі змінними або
    інтерполяцією змінних (`$sass`, `@less`, `--custom-property`, `#{$var}`,
    `@{var}`, `$(var)`).

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", /schemes/, "/regex/"]|"scheme"|"/regex/"|/regex/`**

05. `function-url-scheme-disallowed-list` Визначає список заборонених url-схем.

    ```json
    ["ftp", "/^http/"]
    ```

    ```css
    /* invalid */
    a { background-image: url('ftp://www.example.com/file.jpg'); }
    a { background-image: url('http://www.example.com/file.jpg'); }
    a { background-image: url('https://www.example.com/file.jpg'); }

    /* valid */
    a { background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='); }
    a { background-image: url('example.com/file.jpg'); }
    a { background-image: url('/example.com/file.jpg'); }
    a { background-image: url('//example.com/file.jpg'); }
    a { background-image: url('./path/to/file.jpg'); }
    ```

    URL-схеми складаються з цифр, букв, `+` та `-`. Вони можуть з'являтися з
    початку url і закінчуються `:`.

    Правило ігнорує аргументи url без існуючої схеми, аргументи зі змінними або
    інтерполяцією змінних (`$sass`, `@less`, `--custom-property`, `#{$var}`,
    `@{var}`, `$(var)`).

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", /schemes/, "/regex/"]|"scheme"|"/regex/"|/regex/`**


#### Length

01. `length-zero-no-unit` Забороняє розмірності (`em`, `ex`, `ch`, `vw`, `vh`,
                          `cm`, `mm`, `in`, `pt`, `pc`, `px`, `rem`, `vmin` and
                          `vmax`) для нульових значень довжин, висот, відстаней:

    ```css
    /* invalid */
    a { top: 0px }
    a { top: 0.000em }

    /* valid */
    a { top: 0 } /* no unit */
    a { transition-delay: 0s; } /* dimension */
    a { top: 1.001vh }
    ```

    **secondary options:**

    - `ignore: ["custom-properties"]` Ігнорує розмірності не стандартних
                                      розмірностей.

      ```css
      a { --x: 0px; }
      ```

    - `ignoreFunctions: ["/regex/", /regex/, "string"]`Ігнорує розмірності у
                                        функціях.

      ```json
      ["var", "/^--/"]
      ```
      ```css

      /* valid */
      a { top: var(--foo, 0px); }
      a { top: --bar(0px); }
      ```

    **standard+ autofix+**                                                  <br>
    **boolean**


#### Media feature

01. `media-feature-name-allowed-list` Визначає список дозволених властивостей
                                      медіа-запитів.

    ```json
    ["max-width", "/^my-/"]
    ```

    ```css
    /* invalid */
    @media (min-width: 50em) {}
    @media print and (min-resolution: 300dpi) {}
    @media (min-width < 50em) {}
    @media (10em < min-width < 50em) {}
    /* valid */
    @media (max-width: 50em) {}
    @media (my-width: 50em) {}
    @media (max-width > 50em) {}
    @media (10em < my-width < 50em) {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", "unprefixed", /media-features/, "regex"]|"media-feature"|"/regex/"|/regex/`**

02. `media-feature-name-disallowed-list` Визначає список заборонених
                                         властивостей медіа-запитів.

    ```json
    ["max-width", "/^my-/"]
    ```

    ```css
    /* invalid */
    @media (max-width: 50em) {}
    /* valid */
    @media (min-width: 50em) {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", "unprefixed", /media-features/, "regex"]|"media-feature"|"/regex/"|/regex/`**

03. `media-feature-name-no-vendor-prefix` Забороняє вендорні префікси у
                                          властивистях медіа-запитів.

    ```css
    /* invalid */
    @media (-webkit-min-device-pixel-ratio: 1) {}

    /* valid */
    @media (min-resolution: 96dpi) {}
    ```

    Правило ігнорує не стандартні вендорні арефікси, які не відомі
    [Autoprefixer](https://github.com/postcss/autoprefixer).


    **standard+ autofix+**                                                  <br>
    **boolean**

04. `media-feature-name-unit-allowed-list` Визначає список дозволених
                                          розмірностей у медіа-запитах.

    ```json
    {
      "width": "em",
      "/height/": ["em", "rem"]
    }
    ```

    ```css
    /* invalid */
    @media (width: 50rem) {}
    /* valid */
    @media (width: 50em) {}
    ```

    **standard- autofix-**                                                  <br>
    **`{ "name": ["array", "of", "units"]|"unit" }`**

05. `media-feature-name-value-allowed-list` Визначає список дозволених значень
                                            властивостей у медіа-запитах.

    ```json
    {
      "min-width": ["768px", "1024px"],
      "/resolution/": "/dpcm$/"
    }
    ```

    ```css
    /* invalid */
    @media screen and (min-width: 1000px) {}
    @media screen and (min-resolution: 2dpi) {}
    @media screen and (min-width > 1000px) {}
    /* valid */
    @media screen and (min-width: 768px) {}
    @media screen and (min-width: 1024px) {}
    @media screen and (orientation: portrait) {}
    @media screen and (min-resolution: 2dpcm) {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`{ "unprefixed-media-feature-name": ["array", "of", "values", "/regex/", /regex/]|"value"|"/regex/"|/regex/ }`**


#### Property

01. `property-allowed-list` Визначає список дозволених властивостей.

    ```json
    ["display", "animation", "/^background/"]
    ```

    ```css
    /* invalid */
    a { color: pink; }
    a {
      animation: my-animation 2s;
      color: pink;
    }
    /* valid */
    a { -webkit-animation: my-animation 2s; }
    a { background: pink; }
    ```

    Правило ігнорує змінні (`$sass`, `@less`, `--custom-property`).

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", /properties/, "regex"]|"property"|"/regex/"|/regex/`**

02. `property-disallowed-list` Визначає список заборонених властивостей.

    ```json
    ["text-rendering", "animation", "/^background/"]
    ```

    ```css
    /* invalid */
    a { text-rendering: optimizeLegibility; }
    /* valid */
    a { no-background: sure; }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", /properties/, "regex"]|"property"|"/regex/"|/regex/`**

03. `property-no-vendor-prefix` Забороняє вендорні префікси для властивостей.

    ```css
    /* invalid */
    a { -webkit-transform: scale(1); }
    a { -moz-columns: 2; }

    /* valid */
    a { transform: scale(1); }
    a { columns: 2; }
    a { -webkit-touch-callout: none; }
    ```

    Правило ігнорує не стандартні вендорні арефікси, які не відомі
    [Autoprefixer](https://github.com/postcss/autoprefixer).


    **secondary options:**

    - `ignoreProperties: ["/regex/", /regex/, "string"]` Ігнорує деякі
                                        властивості.

      ```json
      ["transform", "columns"]
      ```

      ```css
      a { -webkit-transform: scale(1); }
      a { -moz-columns: 2; }
      ```

    **standard+ autofix+**                                                  <br>
    **boolean**


#### Rule

01. `rule-selector-property-disallowed-list` Визначає список заборонених
                                             властивостей для конкретного
                                             селектора.

    ```json
    {
      "a": ["color", "/margin/"],
      "/foo/": "/size/"
    }
    ```

    ```css
    /* invalid */
    a { color: red; }

    /* valid */
    a { background: red; }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`{ "selector": ["array", "of", "properties", "/regex/", /regex/]|"property"|"/regex/"|/regex/}`**


#### Selector

01. `selector-attribute-name-disallowed-list` Визначає список заборонених імен
                                              атрибутів.

    ```json
    ["class", "id", "/^data-/"]
    ```

    ```css
    /* invalid */
    [class*="foo"] {}
    [id~="bar"] {}
    [data-foo*="bar"] {}

    /* valid */
    [lang~="en-us"] {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", /names/, "regex"]|"name"|"/regex/"|/regex/`**

02. `selector-attribute-operator-allowed-list` Визначає список дозволених
                                               операторів атрибутів.

    ```json
    ["=", "|="]
    ```

    ```css
    /* invalid */
    [class*="test"] {}
    [title~="flower"] {}
    [class^="top"] {}

    /* valid */
    [target] {}
    [target="_blank"] {}
    [class|="top"] {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string`: `["array", "of", "operators"]|"operator"`**

03. `selector-attribute-operator-disallowed-list` Визначає список заборонених
                                                  операторів атрибутів.

    ```json
    ["*="]
    ```

    ```css
    /* invalid */
    [class*="test"] {}

    /* valid */
    [target] {}
    [target="_blank"] {}
    [class|="top"] {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string`: `["array", "of", "operators"]|"operator"`**

04. `selector-combinator-allowed-list` Визначає список дозволених селекторів-
                                       комбінаторів.

    ```json
    [">", " "]
    ```

    ```css
    /* invalid */
    a + b {}
    a ~ b {}

    /* valid */
    a > b {}
    a b {}
    a
    b {}
    ```

    This rule normalizes the whitespace descendant combinator to be a single
    space.

    Правило ігнорує [reference combinators](https://www.w3.org/TR/selectors4/#idref-combinators).

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string`: `["array", "of", "combinators"]|"combinator"`**

05. `selector-combinator-disallowed-list` Визначає список заборонених селекторів-
                                          комбінаторів.

    ```json
    [">", " "]
    ```

    ```css
    /* invalid */
    a > b {}
    a b {}
    a
    b {}

    /* valid */
    a + b {}
    a ~ b {}
    ```

    This rule normalizes the whitespace descendant combinator to be a single
    space.

    Правило ігнорує [reference combinators](https://www.w3.org/TR/selectors4/#idref-combinators).

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string`: `["array", "of", "combinators"]|"combinator"`**

06. `selector-disallowed-list` Визначає список заборонених селекторів.

    ```json
    ["a > .foo", "/\\[data-.+]/"]
    ```

    ```css
    /* invalid */
    a > .foo {}
    a[data-auto="1"] {}
    .foo, [data-auto="1"] {}

    /* valid */
    .foo {}
    a
    >
    .foo {}
    .bar > a > .foo {}
    .data-auto {}
    a[href] {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `splitList: true | false` (default: `false`) Розбиває список селекторів на
                                                   індивідуальні селектори.

      ```json
      [".foo"]
      ```

      ```css
      /* splitList: true */
      /* invalid */
      .bar, .foo {}

      /* valid */
      .bar .foo {}
      ```

    - `ignore: ["inside-block"]` Ігнорує селектори всередині блоку `{}`.

      ```json
      [".foo"]
      ```

      ```css
      .bar {
        .foo {}
      }
      ```

    **standard- autofix-**                                                  <br>
    **`array|string|regexp`: `["array", "of", "selectors", /or/, "/regex/"]|"selector"|"/regex/"|/regex/`**

07. `selector-no-qualifying-type` Забороняє кваліфікацію селектора за типом:

    ```css
    /* invalid */
    a.foo { margin: 0 }
    a#foo { margin: 0 }
    input[type='button'] { margin: 0 }

    /* valid */
    .foo { margin: 0 }
    #foo { margin: 0 }
    input { margin: 0 }
    ```

    Селектор кваліфікується, якщо він поєднується з іншим селектором (`a.foo`,
    `a#foo`).  Це правило не регулює селектори типів, які поєднуються з іншими
    селекторами через комбінатор (наприклад, `a > .foo`, `a #foo`).

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignore: ["attribute", "class", "id"]` Дозволяє кваліфікувати за типом
                                             відповідні селектори.

    **standard- autofix-**                                                  <br>
    **boolean**

08. `selector-no-vendor-prefix` Забороняє вендорні префікси для селекторів:

    ```css
    /* invalid */
    input::-moz-placeholder {}
    :-webkit-full-screen a {}

    /* valid */
    input::placeholder {}
    :full-screen a {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreSelectors: ["/regex/", /regex/, "non-regex"]`

      ```json
      ["::-webkit-input-placeholder", "/-moz-.*/"]
      ```

      ```css
      /* valid */
      input::-webkit-input-placeholder { color: pink; }
      input::-moz-placeholder { color: pink; }
      ```

    **standard+ autofix+**                                                  <br>
    **boolean**

09. `selector-pseudo-class-allowed-list` Визначає список дозволених селекторів
                                         псевдокласів.

    ```json
    ["hover", "/^nth-/"]
    ```

    ```css
    /* invalid */
    a:focus {}
    a:first-of-type {}

    /* valid */
    a:hover {}
    a:nth-of-type(5) {}
    ```

    Правило ігнорує селектори з інтерполяцією змінних, напр. `#{$variable} {}`.

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", "unprefixed", /pseudo-classes/, "/regex/"]|"pseudo-class"|"/regex/"|/regex/`**

10. `selector-pseudo-class-disallowed-list` Визначає список заборонених
                                            селекторів псевдокласів.

    ```json
    ["hover", "/^nth-/"]
    ```

    ```css
    /* invalid */
    a:hover {}
    a:nth-of-type(5) {}
    a:nth-child(2) {}

    /* valid */
    a:focus {}
    a:first-of-type {}
    ```

    Правило ігнорує селектори з інтерполяцією змінних, напр. `#{$variable} {}`.

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", "unprefixed", /pseudo-classes/, "/regex/"]|"pseudo-class"|"/regex/"|/regex/`**

11. `selector-pseudo-element-allowed-list` Визначає список дозволених
                                           псевдоелементів.

    ```json
    ["before", "/^--my-/i"]
    ```

    ```css
    /* invalid */
    a::after {}
    a::--not-my-pseudo-element {}

    /* valid */
    a::before {}
    a::--my-pseudo-element {}
    a::--MY-OTHER-pseudo-element {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", "unprefixed", /pseudo-elements/, "/regex/"]|"pseudo-element"|"/regex/"|/regex/`**

12. `selector-pseudo-element-disallowed-list` Визначає список заборонених
                                              псевдоелементів.

    ```json
    ["before", "/^--my-/i"]
    ```

    ```css
    /* invalid */
    a::before {}
    a::--my-pseudo-element {}
    a::--MY-OTHER-pseudo-element {}

    /* valid */
    a::after {}
    a::--not-my-pseudo-element {}
    ```

    Правило ігнорує селектори з інтерполяцією змінних, напр. `::#{$variable} {}`
    та CSS2 псевдоелементи, тобто такі, що мають прафікс з однієї двокрапки `:`.

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`array|string|regex`: `["array", "of", "unprefixed", /pseudo-elements/, "/regex/"]|"pseudo-element"|"/regex/"|/regex/`**


#### Unit

01. `unit-allowed-list` Визначає список дозволених розмірностей.

    ```json
    ["px", "em", "deg"]
    ```

    ```css
    /* invalid */
    a { width: 100%; }

    /* valid */
    a { font-size: 1.2em; }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreProperties`: `{ "unit": ["property", "/regex/", /regex/]|"property"|"/regex/"|/regex/ }`
                                        Ігнорує розмірності у вказаних
                                        властивостях.

      ```json
      {
        "rem": ["line-height", "/^border/"],
        "%": ["width"]
      }
      ```

      ```css
      /* invalid */

      a { margin: 0 20rem; }
      /* valid */
      a { line-height: 0.1rem; }
      ```

      - `ignoreFunctions: ["function", "/regex/", /regex/]|"function"|"/regex/"|/regex/`
                                        Ігнорує розмірності всередині вказаних
                                        функцій.

        ```json
        ["/^hsl/", "calc"]
        ```

        ```css
        /* valid */
        a {
          border: 1px solid hsl(162deg, 51%, 35%, 0.8);
        }
        ```

    **standard- autofix-**                                                  <br>
    **`array|string`: `["array", "of", "units"]|"unit"`**

02. `unit-disallowed-list` Визначає список заборонених розмірностей.

    ```json
    ["px", "em", "deg"]
    ```

    ```css
    /* invalid */
    a { width: 100px; }

    /* valid */
    a { font-size: 1.2rem; }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreProperties`: `{ "unit": ["property", "/regex/", /regex/]|"property"|"/regex/"|/regex/ }`
  
      ```json
      {
        "px": ["font-size", "/^border/"],
        "vmin": "width"
      }
      ```

      ```css
      /* unit-disallowed-list: ["px", "vmin"] */
      /* valid */
      a { font-size: 13px; }
      ```

    - `ignoreMediaFeatureNames`: `{ "unit": ["property", "/regex/", /regex/]|"property"|"/regex/"|/regex/ }`

      ```json
      {
        "px": ["min-width", "/height$/"],
        "dpi": "resolution"
      }
      ```

      ```css
      /* unit-disallowed-list: ["px", "dpi"] */
      /* valid */
      @media (min-width: 960px) {}
      ```

    - `ignoreFunctions`: `["function", "/regex/", /regex/]|"function"|"/regex/"|/regex/`

      ```json
      ["calc", "/^translate/"]
      ```

      ```css
      /* unit-disallowed-list: ["px"] */
      /* valid */
      a { margin: calc(50% - 100px) }
      ```

    **standard- autofix-**                                                  <br>
    **`array|string`: `["array", "of", "units"]|"unit"`**


#### Value

01. `value-no-vendor-prefix` Забороняє вендорні префікси для значень
                             властивостей:

    ```css
    /* invalid */
    a { display: -webkit-flex; }

    /* valid */
    a { display: flex; }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreValues: ["string"]`

      ```json
      ["grab", "max-content"]
      ```

      ```css
      /* valid */
      cursor: -webkit-grab;
      ```

    Правило ігнорує нестандартні вендорні префікси у значеннях властивостей, які
    не обробляються [Autoprefixer](https://github.com/postcss/autoprefixer).

    **standard+ autofix+**                                                  <br>
    **boolean**


### Case

01. `function-name-case` Визначає регістр написання імен функцій.

    Верблюдна анотація, напр. `translateX` є валідною при `lower`.

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreFunctions: ["/regex/", /regex/, "non-regex"]` ігнорує написання
                                                           вказаних функцій.

    **standard+ autofix+**                                                  <br>
    **`string: "lower"|"upper"`**

02. `selector-type-case` Визначає регістр написання селекторів.

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.

    - `ignoreTypes: ["/regex/", /regex/, "non-regex"]` ігнорує написання
                                                       вказаних селекторів.

    **standard+ autofix+**                                                  <br>
    **`string: "lower"|"upper"`**

03. `value-keyword-case` Визначає регістр написання значень властивостей.

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.

    - `ignoreKeywords: ["/regex/", /regex/, "non-regex"]`
                                        Ігнорує вказані значення.

    - `ignoreProperties: ["/regex/", /regex/, "non-regex"]`
                                        Ігнорує значення вказаних властиіостей.

    - `ignoreFunctions: ["/regex/", /regex/, "non-regex"]`
                                        Ігнорує значення всередині вказаних
                                        функцій.

    - `camelCaseSvgKeywords: true | false` (default: `false`)
                                        If true, this rule expects SVG keywords
                                        to be camel case when the primary option
                                        is `"lower"`.

    Це правило ігнорує <custom-idents> відомих властивостей.  Значення ключових
    слів, які поєднані з не властивостями (наприклад, `$vars` і спеціальні
    властивості), і не відповідають основному параметру, можна ігнорувати за
    допомогою додаткового параметра `ignoreKeywords: []`.

    **standard+ autofix+**                                                  <br>
    **`string: "lower"|"upper"`**


### Empty lines

01. `at-rule-empty-line-before` Визначає наявність пустих рядків перед
                                @-директивою.

    ```css
    /* "always" */
    /* invalid */
    a {} @media {}
    a {}
    @media {}

    /* valid */
    a {}

    @media {}
    ```

    **secondary options:**

    - `except: ["after-same-name", "inside-block", "blockless-after-same-name-blockless", "blockless-after-blockless", "first-nested"]`
      Встановлює виключення, коли не потрібен пустий рядок:

      1. `"after-same-name"` - між однаковими @-директивами
      2. `"inside-block"` - в середині блоку коду `{}`
      3. `"blockless-after-same-name-blockless"` - між однаковими безблочними
         @-директивами (приклад блочної @-директиви: `@media print {}`)
      4. `"blockless-after-blockless"` - після безблочних @-директив
      5. `"first-nested"` - перед першою @-директивою, що йде в блоці коду одразу
         після відкриваючої дужки `{`

      ```json
      {
        "at-rule-empty-line-before": [
          "always",
          {"except": ["first-nested"]}
        ]
      }
      ```

      ```css
      /* invalid */
      a {
      
        @extend foo;
        color: pink;
      }

      b {
        color: pink;
        @extend foo;
      }

      /* valid */
      a {
        @extend foo;
        color: pink;
      }

      b {
        color: pink;
      
        @extend foo;
      }
      ```

    - `ignore: ["after-comment", "first-nested", "inside-block", "blockless-after-same-name-blockless", "blockless-after-blockless"]`
      Ігнорує @-директиви:

      1. `"after-comment"` - ігнорує правило після коментаря- пусті рядки можна
         ставити і можна не ставити одночасно, проблем не буде.
      2. `"first-nested"` - ігнорує правило перед першою @-директивою у блоці
         коду
      3. `"inside-block"` - ігнорує правило в блоці коду
      4. `"blockless-after-same-name-blockless"` - ігнорує правило між
         однаковими безблочними @-директивами
      5. `"blockless-after-blockless"` - ігнорує правило після безблочних
         @-директив

    - `ignoreAtRules: ["array", "of", "at-rules"]` Ігнорує специфічні
      @-директиви

    Правило ігнорує першу в документі @-директиву та `@import` в less.

    **standard+ autofix+**                                                  <br>
    **`string: "always"|"never"`**

02. `comment-empty-line-before` Визначає наявність порожнього рядку перед
                                коментарем:

    ```css
    /* "always" */
    /* invalid */
    a {}
    /* comment */

    /* valid */
    a {}

    /* comment */
    a {} /* comment */
    ```


    Правило ігнорує перший коментар в документі, коментар на одному рядку
    коментованим кодом, однорядковий коментар (`//`), якщо він підтримується
    кастомним синтаксисом, коментарі в списках селектора та значень.

    **secondary options:**

    - `except: ["first-nested"]` змінює значення правила на протилежне для
                                 першого коментаря в блоці коду, який іде одразу
                                 після відкриваючої дужки `{`

    - `ignore: ["after-comment", "stylelint-commands"]`

      1. `"after-comment"` - ігнорує коментар після іншого коментаря (коментарі
                             можна, але не обов'язково писати впритул)
      2. `"stylelint-commands"` - ігнорує коментарі `stylelint`

    - `ignoreComments: ["/regex/", /regex/, "string"]` ігнорує коментарі,
                                        вказані в регулярці.

    **standard+ autofix+**                                                  <br>
    **`string: "always"|"never"`**

03. `custom-property-empty-line-before` Визначає наявність порожнього рядку
                                        перед кастомною властивістю.

    **secondary options:**

    - `except: ["after-comment", "after-custom-property", "first-nested"]`
      змінює правило на протилежне:

      1. `"after-comment"` - після коментаря
      2. `"after-custom-property"` - після кастомної властивості
      3. `"first-nested"` - перед першою кастомною властивістю у блоці коду

    - `ignore: ["after-comment", "first-nested", "inside-single-line-block"]`
      ігнорує правило:

      1. `"after-comment"` - після коментаря
      2. `"first-nested"` - перед першою кастомною властивістю у блоці коду
      3. `"inside-single-line-block"` - в однорядковому оголошенні:

         ```css
         a { --foo: pink; --bar: red; }
         ```

    **standard+ autofix+**                                                  <br>
    **`string: "always"|"never"`**

04. `declaration-empty-line-before` Визначає наявність порожнього рядку перед
                                    деклараціями.

    Правило застосовується тільки до стандартних оголошень властивостей.

    **secondary options:**

    - `except: ["after-comment", "after-declaration", "first-nested"]`
      змінює правило на протилежне:

      1. `"after-comment"` - після коментаря
      2. `"after-declaration"` - після декларації
      3. `"first-nested"` - перед першою декларацією у блоці коду

    - `ignore: ["after-comment", "after-declaration", "first-nested", "inside-single-line-block"]`
      Ігнорує правило:

      1. `"after-comment"` - після коментаря''
      2. `"after-declaration"` - після властивості
      3. `"first-nested"` - перед першою декларацією у блоці коду
      4. `"inside-single-line-block"` - в однорядковому оголошенні

    **standard+ autofix+**                                                  <br>
    **`string: "always"|"never"`**

05. `rule-empty-line-before` Визначає наявність порожнього рядку перед блоками
                             правил:

    - `"always"` - завжди
    - `"never"` - ніколи
    - `"always-multi-line"` - завжди перед мультирядковим блоком
    - `"never-multi-line"` - ніколи перед мультирядковим блоком

    Правило ігнорує перший блок з деклараціями в документі.

    **secondary options:**

    - `except: ["after-rule", "after-single-line-comment", "inside-block-and-after-rule", "inside-block", "first-nested"]`
      Змінює значення правила на:

      1. `"after-rule"` - після блоку правил
      2. `"after-single-line-comment"` - після однорядкового коментаря
      3. `"inside-block-and-after-rule"` - всередині блоку перед блоком правил
      4. `"inside-block"` - в середині блоку правил
      5. `"first-nested"` - перед першим вкладеним блоком правил у іншому блоці

    - `ignore: ["after-comment", "first-nested", "inside-block"]`
      Ігнорує правило:

      1. `"after-comment"` - після коментаря
      2. `"first-nested"` - перед першим вкладеним блоком правил у іншому блоці
      3. `"inside-block"` - в середині блоку правил

    **standard+ autofix+**                                                  <br>
    **`string: "always"|"never"|"always-multi-line"|"never-multi-line"`**


### Max & min

01. `declaration-block-single-line-max-declarations` Визначає кількість
                                        оголошень у однорядковому блоці коду:

    ```css
    /* "declaration-block-single-line-max-declarations": 1 */
    /* invalid */
    a { color: pink; top: 3px; }
    a,
    b { color: pink; top: 3px; }

    /* valid */
    a,
    b { color: pink; }
    ```

    **standard+ autofix-**                                                  <br>
    **number**

02. `declaration-property-max-values` Визначає кількість значень на одну
                                      властивість:

    ```json
    {
      "border": 2,
      "/^margin/": 1,
    }
    ```

    ```css
    /* invalid */
    a { border: 1px solid blue; }
    a { margin-inline: 1px 2px; }

    /* valid */
    a { border: 1px solid; }
    a { margin-inline: 1px; }
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **`{ "unprefixed-property-name": int }`**

03. `max-nesting-depth` Визначає кількість рівнів вкладеності блоків:

    ```css
    /* "max-nesting-depth": 2 */
    /* invalid */
    a {
      & .foo { /* 1 */
        &__foo { /* 2 */
          & > .bar {} /* 3 */
        }
      }
    }
    a {
      @media print { /* 1 */
        & .foo { /* 2 */
          & .bar {} /* 3 */
        }
      }
    }

    /* valid */
    a {
      & .foo { /* 1 */
        &__foo {} /* 2 */
      }
    }
    
    a .foo__foo .bar .baz {}
    @media print {
      a {
        & .foo { /* 1 */
          &__foo {} /* 2 */
        }
      }
    }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.

    - `ignore: ["blockless-at-rules"]`  Ігнорує блоки коду, які лише обгортають
                                        інші блоки і самі не мають пар
                                        "властивість-значення".

      ```css
      /* "max-nesting-depth": 1 */
      /* invalid */
      a {
        &:hover { /* 1 */
          @media (min-width: 500px) { color: pink; } /* 2 */
        }
      }
      a {
        @nest > b { /* 1 */
          .foo { color: pink; } /* 2 */
        }
      }

      /* valid */
      a {
        .foo { color: pink; } /* 1 */
      }
      @media print { /* ignored regardless of options */
        a {
          .foo { color: pink; } /* 1 */
        }
      }
      a {
        @media print { /* ignored because it's an at-rule without a declaration block of its own */
          .foo { color: pink; } /* 1 */
        }
      }
      ```

    - `ignore: ["pseudo-classes"]` Ігнорує блоки коду, де першим після дужки іде
                                   псевдоклас:

      ```css
      /* "max-nesting-depth": 1 */
      /* invalid */
      a {
        b { /* 1 */
          &::selection { /* 2 */
            color: #64FFDA;
          }
        }
      }
      a {
        b { /* 1 */
          &:hover, .c { /* 2 */
            top: 0;
          }
        }
      }

      /* valid */
      a {
        b { /* 1 */
          &:hover { /* ignored */
            top: 0;
          }
        }
      }
      a {
        b { /* 1 */
          &:nest {
            &:nest-lvl2 {  /* ignored */
              top: 0;
            }
          }
        }
      }
      a {
        &:hover {  /* ignored */
          b { /* 1 */
            top: 0;
          }
        }
      }
      a {
        &:nest {  /* ignored */
          &:nest-lvl2 {  /* ignored */
            top: 0;
            b { /* 1 */
              bottom: 0;
            }
          }
        }
      }
      ```

    - `ignoreAtRules: ["/regex/", /regex/, "string"]`
                                        Ігнорує вказані @-директиви:

      ```json
      ["/^--my-/", "media"]
      ```

      ```css
      /* valid */
      a {
        @media print {      /* 1 */
          b {               /* 2 */
            c { top: 0; }   /* 3 */
          }
        }
      }
      ```

    - `ignorePseudoClasses: ["/regex/", /regex/, "string"]`
                                        Ігнорує вказані псевдокласи:

      ```json
      ["hover", "^focus-"]
      ```

      ```css
      a {
        &:hover {   /* ignored */
          b {      /* 1 */
            top: 0;
          }
        }
      }
      ```

    **standard- autofix-**                                                  <br>
    **number**

04. `number-max-precision` Визначає кількість знаків після коми у значеннях:

    ```css
    /* "number-max-precision": 2 */
    /* invalid */
    a { top: 3.245px; }

    /* valid */
    a { top: 3.24px; }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.

    - `ignoreProperties: ["/regex/", /regex/, "string"]`
      Ігнорує точність вказаних значень властивостей

    - `ignoreUnits: ["/regex/", /regex/, "string"]`
      Ігнорує точність значень вказаних розмірностей

    - `insideFunctions: {"/regex/": int, /regex/: int, "string": int}`
      Змінює кількість знаків після коми для вказаних функцій:

      ```json
      {"/^(oklch|oklab|lch|lab)$/", 4}
      ```

      ```css
      /* invalid */
      a { color: rgb(127.333 0 0); }

      /* valid */
      a { color: oklch(0.333 0 0); }
      ```

    **standard+ autofix-**                                                  <br>
    **number**

05. `selector-max-attribute` Визначає кількість атрибутів на один селектор:

    ```css
    /* "selector-max-attribute": 2 */
    /* invalid */
    [type="number"][name="quality"][data-attribute="value"] {}
    [type="number"][name="quality"][disabled] {}
    [type="number"][name="quality"] {
      & [data-attribute="value"] {}
    }

    /* valid */
    [type="text"][name="message"] {}
    /* each selector in a selector list is evaluated separately */
    [type="text"][name="message"],
    [type="number"][name="quality"] {}
    /* `[disabled]` is inside `:not()`, so it is evaluated separately */
    [type="text"][name="message"]:not([disabled]) {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.

    - `ignoreAttributes: ["/regex/", /regex/, "non-regex"]`

      ```json
      ["/^data-my-/", "dir"]
      ```

      ```css
      /* "selector-max-attribute": 0 */
      /* valid */
      [dir] [data-my-attr] {}
      ```

    Правило враховує вкладені селектори. Псевдоселектор :not() рахується окремо.

    **standard- autofix-**                                                  <br>
    **number**

06. `selector-max-class` Визначає кількість класів на один селектор:

    ```css
    /* "selector-max-class": 2 */
    /* invalid */
    .foo.bar.baz {}
    .foo .bar {
      & > .baz {}
    }

    /* valid */
    .foo .bar {}
    /* each selector in a selector list is evaluated separately */
    .foo.bar,
    .lorem.ipsum {}
    /* `.lorem.ipsum` is inside `:not()`, so it is evaluated separately */
    .foo .bar :not(.lorem.ipsum) {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **number**

07. `selector-max-combinators` Визначає кількість комбінаторів на один селектор:

    ```css
    /* "selector-max-combinators": 2 */
    /* invalid */
    a b ~ c + d {}
    a b ~ c {
      & > d {}
    }
    a b {
      & ~ c {
        & + d {}
      }
    }

    /* valid */
    a {}
    a b {}
    a b ~ c {}
    a b {
      & ~ c {}
    }
    /* each selector in a selector list is evaluated separately */
    a b,
    c > d {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **boolean**

08. `selector-max-compound-selectors` Визначає кількість складених селекторів в
                                      селекторі:

    ```css
    /* "selector-max-compound-selectors": 3 */
    /* invalid */
    .foo .bar .baz .lorem {}
    .foo .baz {
      & > .bar .lorem {}
    }

    /* valid */
    div {}
    .foo div {}
    #foo #bar > #baz {}
    /* `a b ~ c` is inside `:not()`, so it is evaluated separately */
    .foo + div :not (a b ~ c) {}
    ```

    Складений селектор — це ланцюжок з одного або кількох простих (тег, клас,
    ідентифікатор, універсальний, атрибут) селекторів. Якщо в повному селекторі
    є більше ніж один складений селектор, вони будуть розділені комбінаторами
    (наприклад, ``, +, >). Це правило розпізнає вкладені селектори перед
    підрахунком глибини селектора. Кожен селектор у списку селектора оцінюється
    окремо.

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **number**

09. `selector-max-id` Визначає кількість #id-селекторів на один селектор:

    ```css
    /* "selector-max-id": 2 */
    /* invalid */
    #foo #bar #baz {}
    #foo #bar {
      & #baz {}
    }
    #foo #bar {
      & > #bar {}
    }

    /* valid */
    #foo #bar {}
    .foo #foo {}
    #foo.foo #bar {}
    /* each selector in a selector list is evaluated separately */
    #foo,
    #baz #quux {}
    /* `#bar` is inside `:not()`, so it is evaluated separately */
    #foo #bar:not(#baz) {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreContextFunctionalPseudoClasses: ["/regex/", /regex/, "non-regex"]`
      Ігнорує селектори всередині вказаних функціональних псевдокласів, які
      надають контексти оцінювання.

      ```json```
      [":not", "/^:(h|H)as$/"]

      ```css
      /* invalid */
      a:is(#foo) {}

      /* valid */
      a:not(#foo) {}
      a:has(#foo) {}
      ```

    **standard- autofix-**                                                  <br>
    **number**

10. `selector-max-pseudo-class` Визначає кількість псевдокласів на один селектор:

    ```css
    /* "selector-max-pseudo-class": 1 */
    /* invalid */
    a:first-child:focus {}
    .foo .bar:first-child:hover {}

    /* valid */
    a {}
    a:first-child {}
    .foo .bar:first-child {}
    ```

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **number**

11. `selector-max-specificity` Визначає рівень специфічності селектору:

    ```css
    /* "selector-max-specificity": "0,2,0" */
    /* invalid */
    #foo {}
    .foo .baz .bar {}
    .foo .baz {
      & .bar {}
    }
    .foo {
      color: red;
      @nest .baz .bar & {
        color: blue;
      }
    }
    /* valid */
    div {}
    .foo div {}
    .foo div {
      & div a {}
    }
    .foo {
      & .baz {}
    }
    .foo {
      color: red;
      @nest .baz & {
        color: blue;
      }
    }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreSelectors: ["/regex/", /regex/, "non-regex"]`

      ```json
      [
        "0,2,0",
        { "ignoreSelectors": [":global", ":local", "/^my-/"] }
      ]
      ```

      ```css
      /* invalid */
      :global(.foo) .bar {}
      :local(.foo.bar) {}
      :local(.foo, :global(.bar).baz) {}
      my-element.foo.bar {}

      /* valid */
      :global(.foo) .bar.baz {}
      :local(.foo.bar.baz) {}
      :local(.foo, :global(.bar), .foo.bar.baz) {}
      my-element.foo.bar.baz {}
      ```

    **standard- autofix-**                                                  <br>
    **`string: "id,class,type"`**

12. `selector-max-type` Визначає кількість типів селекторів у одному селекторі:

    ```css
    /* "selector-max-type": 2 */
    /* invalid */
    div a span {}
    div a {
      & span {}
    }
    div a {
      & > a {}
    }

    /* valid */
    div {}
    div a {}
    .foo div a {}
    div.foo a {}
    /* each selector in a selector list is evaluated separately */
    div,
    a span {}
    /* `span` is inside `:not()`, so it is evaluated separately */
    div a .foo:not(span) {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignore: ["child", "compounded", "custom-elements", "descendant", "next-sibling"]`
      Ігнорує:

      1. `"child"` - вкладені селектори
      2. `"compounded"` - складені селектори (напр. `div span a.foo {}`)
      3. `"custom-elements"` - кастомні елементи
      4. `"descendant"` - селектори-нащадки (напр. `.foo div span a {}`)
      5. `"next-sibling"` - сусідні селектори (напр. `a + span`)

    - `ignoreTypes: ["/regex/", /regex/, "non-regex"]`

      ```json
      ["/^my-/", "custom"]
      ```

      ```css
      /* "selector-max-type": 2 */
      /* valid */
      div a custom {}
      div a my-type {}
      div a my-other-type {}
      ```

    **standard- autofix-**                                                  <br>
    **number**

13. `selector-max-universal` Визначає кількість універсальних селекторів у
                             одному селекторі:

    ```css
    /* "selector-max-universal": 2 */
    /* invalid */
    * * * {}
    * * {
      & * {}
    }

    /* valid */
    * * {}
    /* each selector in a selector list is evaluated separately */
    *.foo,
    *.bar * {}
    /* `*` is inside `:not()`, so it is evaluated separately */
    * > * .foo:not(*) {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreAfterCombinators: ["array", "of", "combinators"]`
      Ігнорує універсальні селектори після комбінаторів:

      ```json
      [">", "+"]
      ```

      ```css
      /* valid */
      * * > * {}
      ```

    **standard- autofix-**                                                  <br>
    **number**

14. `time-min-milliseconds` Визначає мінімальну кількість мілісекунд для
                            властивостей `transition-duration`, `animation`,
                            `transition-delay`, `animation-duration`,
                            `animation-delay` та `transition`:

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignore: ["delay"]` ігнорує `transition-delay` та `animation-delay`

    **standard- autofix-**                                                  <br>
    **boolean**


### Notation

01. `alpha-value-notation` Визначає спосіб запису альфа-каналу:

    ```css
    /* "alpha-value-notation": "number" */
    /* invalid */
    a { opacity: 50% }

    /* valid */
    a { color: rgb(0 0 0 / 0.5) }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `exceptProperties: ["/regex/", /regex/, "string"]` Змінює значення на
                                        протилежне для вказаних властивостей.

    **standard+ autofix+**                                                  <br>
    **`string: "number"|"percentage"`**

02. `color-function-notation` Визначає спосіб запису кольорових функцій:
                              `modern` - без ком, `legacy` - з комами.

    ```css
    /* "color-function-notation": "modern" */
    /* invalid */
    a { color: rgb(0, 0, 0) }

    /* valid */
    a { color: rgb(0 0 0) }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignore: ["with-var-inside"]` Ігнорує колірні функції, які містять змінні

    **standard+ autofix+**                                                  <br>
    **`string: "modern"|"legacy"`**

03. `color-hex-length` Визначає спосіб написання hex-кольорів:

    ```css
    /* "color-hex-length": "short" */
    /* invalid */
    a { color: #ffffff; }

    /* valid */
    a { color: #fff; }
    a { color: #a4a4a4; }
    ```

    Для правила доступна опція `message`.

    **standard+ autofix+**                                                  <br>
    **`string: "short"|"long"`**

04. `font-weight-notation` Визначає спосіб написання товщини шрифту:

    ```css
    /* "font-weight-notation": "named-where-possible" */
    /* invalid */
    a { font-weight: 700; }
    a { font: italic 400 20px sans-serif; }

    /* valid */
    a { font-weight: bold; }
    a { font: italic normal 20px sans-serif; }
    ```

    **secondary options:**

    - `ignore: ["relative"]` Ігнорує відносні імена `bolder` та `lighter`.

    Правило ігнорує змінні `$sass`, `@less`, `var(--custom-property)`.

    **standard- autofix+**                                                  <br>
    **`string: "numeric"|"named-where-possible"`**

05. `hue-degree-notation` Визначає кількість або кутове позначення для градусних
                          відтінків:

    ```css
    /* "hue-degree-notation": "angle" */
    /* invalid */
    a { color: hsl(198 28% 50%) }
    a { color: lch(56.29% 19.86 10 / 15%) }

    /* valid */
    a { color: hsl(198deg 28% 50%) }
    a { color: lch(56.29% 19.86 10deg / 15%) }
    ```

    **standard+ autofix+**                                                  <br>
    **`string: "angle"|"number"`**

06. `import-notation` Визначає спосіб написання `import`:

    ```css
    /* "import-notation": "string" */
    /* invalid */
    @import url(foo.css);
    @import url('foo.css');
    @import url("foo.css");

    /* valid */
    @import 'foo.css';
    @import "foo.css";
    ```

    **standard+ autofix+**                                                  <br>
    **`string: "string"|"url"`**

07. `keyframe-selector-notation` Визначає спосіб написання ключових кадрів:

    ```css
    /* "keyframe-selector-notation": "keyword"*/
    /* invalid */
    @keyframes foo { 0% {} 100% {} }

    /* valid */
    @keyframes foo { from {} to {} }
    ```

    `"percentage-unless-within-keyword-only-block"` - ключові кадри повинні
    використовувати проценти, за винятком ситуацій, де використовуються тільки
    слова.

    **standard+ autofix+**                                                  <br>
    **`string: "keyword"|"percentage"|"percentage-unless-within-keyword-only-block"`**

08. `media-feature-range-notation` Визначає спосіб написання меж медіазапитів:

    ```css
    /* "media-feature-range-notation": "context" */
    /* invalid */
    @media (min-width: 1px) {}
    @media (min-width: 1px) and (max-width: 2px) {}

    /* valid */
    @media (width >= 1px) {}
    @media (1px <= width <= 2px) {}
    ```

    Для правила доступна опція `message`.

    **standard+ autofix+**                                                  <br>
    **`string: "context"|"prefix"`**

09. `selector-not-notation` Визначає спосіб написання псевдокласу `:not()`:

    ```css
    /* "selector-not-notation": "simple" */
    /* invalid */
    :not(a, div) {}
    :not(a.foo) {}

    /* valid */
    :not(a):not(div) {}
    :not(a) {}
    ```

    Для правила доступна опція `message`.

    **standard+ autofix+**                                                  <br>
    **`string: "simple"|"complex"`**

10. `selector-pseudo-element-colon-notation` Визначає спосіб написання
                                             псевдоелементів.

    ```css
    /* "selector-pseudo-element-colon-notation": "single" */
    /* invalid */
    a::before { color: pink; }

    /* valid */
    a:before { color: pink; }
    ```

    **standard+ autofix+**                                                  <br>
    **`string: "single"|"double"`**


### Pattern

01. `comment-pattern` Визначає патерн для коментарів:

    ```json
    "foo .+"
    ```

    ```css
    /* invalid */
    /*not starting with foo*/
    a { color: red; }

    /* valid */
    /*foo at the beginning*/
    a { color: red; }
    ```

    Рядок перетворюється на регулярку, тому потібно використовувати екранування.

    Для правила доступна опція `message`.

    **standard- autofix-**                                                  <br>
    **regex|string**

02. `custom-media-pattern` Визначає патерн для кастомних медіазапитів:

    ```json
    "foo-.+"
    ```

    ```css
    /* invalid */
    @custom-media --bar (min-width: 30em);

    /* valid */
    @custom-media --foo-bar (min-width: 30em);
    ```

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **regex|string**

03. `custom-property-pattern` Визначає патерн для кастомної властивості:

    ```json
    "foo-.+"
    ```

    ```css
    /* invalid */
    :root { --boo-bar: 0; }

    /* valid */
    :root { --foo-bar: 0; }
    ```

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **regex|boolean**

04. `keyframes-name-pattern` Визначає патерн для ключових кадрів:

    ```json
    "foo-.+"
    ```

    ```css
    /* invalid */
    @keyframes foo {}
    @keyframes bar {}
    @keyframes FOO-bar {}

    /* valid */
    @keyframes foo-bar {}
    ```

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **regex|boolean**

05. `selector-class-pattern` Визначає патерн для селекторів класів:

    ```json
    "foo-[a-z]+"
    ```

    ```css
    /* invalid */
    .foop {}
    .foo-BAR {}
    div > #zing + .foo-BAR {}

    /* valid */
    .foo-bar {}
    div > #zing + .foo-bar {}
    #foop {}
    [foo='bar'] {}
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `resolveNestedSelectors: true | false` (default: `false`)
      This option will resolve nested selectors with `&` interpolation.

      ```json
      "^[A-Z]+$"
      ```

      ```css
      /* invalid */
      .A {
        &__B {} /* resolved to ".A__B" */
      }

      /* valid */
      .A {
        &B {} /* resolved to ".AB" */
      }
      ```

    Правило ігнорує non-outputting Less mixin definitions та called Less mixins.

    Escaped selectors (e.g. .u-size-11\/12\@sm) are parsed as escaped twice
    (e.g. .u-size-11\\/12\\@sm). Your RegExp should account for that.

    **standard+ autofix-**                                                  <br>
    **regex|boolean**

06. `selector-id-pattern` Визначає патерн для id:

    ```json
    "foo-[a-z]+"
    ```

    ```css
    /* invalid */
    #foop {}
    #foo-BAR {}
    div > .zing + #foo-BAR {}

    /* valid */
    #foo-bar {}
    div > .zing + #foo-bar {}
    .foop {}
    [foo='bar'] {}
    ```

    Для правила доступна опція `message`.

    **standard+ autofix-**                                                  <br>
    **regex|boolean**

07. `selector-nested-pattern` Визначає патерн для вкладених селекторів:

    ```json
    "^&:(?:hover|focus)$"
    ```

    ```css
    /* invalid */
    a {
      .bar {}
    }
    a {
      .bar:hover {}
    }
    a {
      &:hover,
      &:focus {}
    }

    /* valid */
    a {
      &:hover {}
    }
    a {
      &:focus {}
    }
    a {
      &:hover {}
      &:focus {}
    }
    ```

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `splitList: true | false` (default: `false`)
                                        Розбиває список селекторів на одиночні:

      ```json
      "^&:(?:hover|focus)$"
      ```

      ```css
      /* invalid */
      a {
        .bar:hover,
        &:focus {}
      }

      /* valid */
      a {
        &:hover,
        &:focus {}
      }
      ```

    **standard- autofix-**                                                  <br>
    **regex|boolean**


### Quotes

01. `font-family-name-quotes` Визначає наявність лапок в назвах шрифтів:

    ```css
    /* "font-family-name-quotes": "always-where-recommended" */
    /* invalid */
    a { font-family: Times New Roman, Times, serif; }
    a { font-family: MyFontVersion6, sake_case_font; }
    a { font-family: 'Arial', sans-serif; }
    a { font: 1em Times New Roman, Times, serif; }

    /* valid */
    a { font-family: 'Times New Roman', Times, serif; }
    a { font-family: "MyFontVersion6", "sake_case_font"; }
    a { font-family: Arial, sans-serif; }
    a { font: 1em 'Times New Roman', Times, serif; }
    ```

    Правило дивиться за властивостями `font` та `font-family`. Ці властивості
    мають список спеціальних ключових слів (базових назв штифтових типів), які
    брати в лапки не можна: `inherit`, `serif`, `sans-serif`, `cursive`,
    `fantasy`, `system-ui`, `monospace`, `ui-serif`, `ui-sans-serif`,
    `ui-monospace` та `ui-rounded`. CSS-специфікація рекомендує брати в лапки
    шрифти, які складаються з кількох слів, мають в назві цифри або знаки
    пунктуації (крім дефісу). Назви шрифтів обов'язково беруться в лапки, якщо
    вони є не валідними CSS-ідентифікаторами, наприклад містять в назві `$`, `!`
    або `/`.

    `"always-where-required"` - лапки ставляться усюди, де необхідно,
    `"always-where-recommended"` - лапки ставляться усюди, де рекомандовано,
    `"always-unless-keyword"` - в лапки беруться усі назви шрифтві, які не є
                                ключовими словами.

    Правило ігнорує `$sass`, `@less` та `var(--custom-property)`.

    **standard+ autofix+**                                                  <br>
    **`string: "always-where-required"|"always-where-recommended"|"always-unless-keyword"`**

02. `function-url-quotes` Визначає наявність лапок в url-функціях:

    ```css
    /* "function-url-quotes": "always" */
    /* invalid */
    @import url(foo.css);
    @font-face { font-family: 'foo'; src: url(foo.ttf); }

    /* valid */
    a { background: url('x.jpg'); }
    @import url("foo.css");
    @font-face { font-family: "foo"; src: url("foo.ttf"); }
    ```

    **secondary options:**

    - `except: ["empty"]` Змінює значення на протилежне для вказаних
                          властивостей.

    **standard+ autofix+**                                                  <br>
    **`always"|"never`**

03. `selector-attribute-quotes` Визначає наявність лапок у значеннях атрибутів:

    ```css
    /* invalid */
    [title=flower] {}
    [class^=top] {}

    /* valid */
    [title] {}
    [target="_blank"] {}
    [class|="top"] {}
    [title~='text'] {}
    [data-attribute='component'] {}
    ```

    **standard+ autofix+**                                                  <br>
    **`string: "always"|"never"`**


### Redundant

01. `declaration-block-no-redundant-longhand-properties` Вказує на можливість
                                        використання скороченої літерації
                                        властивості:

    ```css
    /* invalid */
    a {
      margin-top: 1px;
      margin-right: 2px;
      margin-bottom: 3px;
      margin-left: 4px;
    }
    a {
      font-style: italic;
      font-variant: normal;
      font-weight: bold;
      font-stretch: normal;
      font-size: 14px;
      line-height: 1.2;
      font-family: serif;
    }

    /* valid */
    a {
      margin: 1px 2px 3px 4px;
    }
    a {
      font: italic normal bold normal 14px/1.2 serif;
    }
    ```

    Правило працює з властивостями: `margin`, `padding`, `inset`, `background`,
    `font`, `border`, `border-top`, `border-bottom`, `border-left`,
    `border-right`, `border-width`, `border-style`, `border-color`,
    `list-style`, `border-radius`, `transition`, `animation`,
    `border-block-end`, `border-block-start`, `border-image`,
    `border-inline-end`, `border-inline-start`, `column-rule`, `columns`,
    `flex`, `flex-flow`, `grid`, `grid-area`, `grid-column`, `grid-gap`,
    `grid-row`, `grid-template`, `outline`, `text-decoration`, `text-emphasis`,
    `mask`.

    **secondary options:**

    - `message` кастомне повідомлення про помилку, може приймати аргументи.
    - `ignoreShorthands: ["/regex/", /regex/, "string"]`:

      ```json
      ["padding", "/border/"]
      ```

      ```css
      a {
        padding-top: 20px;
        padding-right: 10px;
        padding-bottom: 30px;
        padding-left: 10px;
      }
      ```

    **standard+ autofix+**                                                  <br>
    **boolean**

02. `shorthand-property-no-redundant-values` Вказує на можливість використання
                                        скороченої літерації розміності:

    ```css
    /* invalid */
    a { margin: 1px 1px; }
    a { margin: 1px 1px 1px 1px; }
    a { padding: 1px 2px 1px; }
    a { border-radius: 1px 2px 1px 2px; }
    a { -webkit-border-radius: 1px 1px 1px 1px; }

    /* valid */
    a { margin: 1px; }
    a { margin: 1px 1px 1px 2px; }
    a { padding: 1px 1em 1pt 1pc; }
    a { border-radius: 10px / 5px; }
    ```

    Правило працює з властивостями: `margin`, `padding`, `border-color`,
    `border-radius`, `border-style`, `border-width`, `grid-gap`, `inset`.

    **standard+ autofix+**                                                  <br>
    **boolean**


### Whitespace inside

01. `comment-whitespace-inside` Визначає наявність пробілів між коментарем та
                                маркерами коментаря.

    ```css
    /* "comment-whitespace-inside": "always" */
    /* invalid */
    /*comment*/
    /*comment */
    /** comment**/

    /* valid */
    /* comment */
    /* comment */
    /**
     * comment
     */
    /*     comment
    */
    ```

    **standard+ autofix+**                                                  <br>
    **always"|"never**


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Домашня сторінка](https://stylelint.io)
2. [Набір конфігів для лінтера](https://github.com/stylelint/awesome-stylelint/#readme)
3. [npm-модуль зі стандартним конфігом](https://www.npmjs.com/package/stylelint-config-standard)
4. [Перелік правил](https://stylelint.io/user-guide/rules)
5. [Регулярки в лінтері](https://stylelint.io/user-guide/regex)
6. [Stylelint+Prettier](https://github.com/prettier/stylelint-config-prettier)
