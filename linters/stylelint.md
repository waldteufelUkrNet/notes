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
2. файл `.stylelintrc`
3. файл `.stylelintrc{cjs,js,json,yaml,yml}` в кореневій директорії проекту
4. файл `.stylelint.config.js`, який експортує js-об'єкт
5. файл `.stylelint.config.cjs`, який експортує js-об'єкт (в package.json
   повинен бути вказаний `"type":"module"`).
6. файл `.stylelint.config.mjs`


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
   `configurationComment`, `ignoreFiles`, `allowEmpty`, `cache`, `fix`.

2. Правила `report*`, які можуть бути `null`, `Boolean`, або двокомпонентним
   масивом (`[Boolean, {"except": …, "severity": …}]`): `reportNeedlessDisables`,
   `reportInvalidScopeDisables`, `reportDescriptionlessDisables`.

3. Властивість `"rules"` з переліком правил, які можуть бути `null`, `Boolean`,
   або двокомпонентним масивом (`[Boolean, {"disableFix": …, "message": …,
   "reportDisables": …, "severity": …}]`).

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
      ]
    }
    ```

16. `reportDescriptionlessDisables` Сигналізує про коментар-відключення правила
                                    без пояснення. report-властивість.

    **Boolean**

17. `reportDisables`                Параметр другого аргумента-об'єкта в масиві
                                    аргументів до правила. Лінтер виводить
                                    повідомлення про помилку, навіть якщо
                                    користувач прописав коментарій, який
                                    відключає перевірку.
    **Boolean**

18. `reportInvalidScopeDisables`    Сигналізує про коментар-відключення правила,
                                    який не співпадає з правилами, визначеними у
                                    конфігураційному об'єкті. report-властивість.
    **Boolean**

19. `reportNeedlessDisables`        Report `stylelint-disable` comments that
                                    don't actually match any lints that need to
                                    be disabled. A report* property.
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
to prefix with foo-.


###### Descending

1. no-descending-specificity  Забороняє менш специфічні селектори після більш
                              специфічних, напр.:

                              ```css
                              /* not valid */
                              #container a { top: 10px; }
                              a { top: 0; }
                              ```

                              secondary options:
                              ignore: ["selectors-within-list"]
                                ігнорує менш специфічні селектори, якщо вони
                                ідуть списком:
 
                                ```css
                                /* not valid */
                                b a {}
                                h1 {}
                                h2 {}
                                h3 {}
                                a {}

                                /* valid */
                                b a {}
                                h1, h2, h3, a {}
                                ```

                              standard+ autofix-
                              boolean


###### Duplicate

1. declaration-block-no-duplicate-custom-properties Забороняє дублікати кастомних
                                                    властивостей, що вже є у
                                                    блоці коду:
                                        ```css
                                        /* not valid */
                                        a {
                                          --custom-property: pink;
                                          --custom-property: orange;
                                        }
                                        ```

                                        secondary options:
                                        ignoreProperties: ["/regex/", /regex/, "non-regex"]
                                        ігнорує дублікати специфічних властивостей

                                        Правило регістрозалежне.

                                        standard+ autofix-
                                        boolean

2. declaration-block-no-duplicate-properties Забороняє дублікати стандартних
                                             властивостей, що вже є у блоці коду:

                                        ```css
                                        /* not valid */
                                        a {
                                          color: pink;
                                          color: orange;
                                        }
                                        ```

                                        secondary options:
                                        ignore: ["consecutive-duplicates"]
                                          ігнорує послідовні дубльовані
                                          властивості (вони можуть
                                          використовуватися для підтримки старих
                                          браузерів)

                                          ```css
                                          /* ignore: ["consecutive-duplicates"]: valid */
                                          p {
                                            font-size: 16px;
                                            font-size: 1rem;
                                            font-weight: 400;
                                          }
                                          ```

                                        ignore: ["consecutive-duplicates-with-different-values"]
                                          ігнорує послідовні дубльовані
                                          властивості з різними значеннями

                                        ignore: ["consecutive-duplicates-with-different-syntaxes"]
                                          ігнорує послідовні дубльовані
                                          властивості з різними значеннями і
                                          розмірностями

                                        ignore: ["consecutive-duplicates-with-same-prefixless-values"]
                                          ігнорує послідовні дубльовані
                                          властивості з вендорними префіксами

                                          ```css
                                          /* ignore: ["consecutive-duplicates-with-same-prefixless-values"]: valid */
                                          p {
                                            width: -moz-fit-content;
                                            width: fit-content;
                                          }
                                          ```

                                        ignoreProperties: ["/regex/", /regex/, "non-regex"]
                                          ігнорує дублікати специфічних
                                          властивостей

                                        Правило ігнорує змінні $sass, @less та
                                        --custom-property.
                                        Для правила доступні опції fix та message.

                                        standard+ autofix+
                                        boolean

3. font-family-no-duplicate-names Забороняє дублікати імен у властивостях font та
                                  font-family:

                                  ```css
                                  /* not valid */
                                  a { font-family: serif, serif; }
                                  ```

                                  secondary options:
                                  ignoreFontFamilyNames: ["/regex/", /regex/, "string"]
                                    ігнорує вказані імена шрифтів

                                  Правило ігнорує змінні $sass, @less та
                                  --custom-property. Правило може спрацювати не
                                  коректно, якщо імена шрифтів складаються з
                                  кількох слів. Щоб цьому запобігти, імена
                                  шрифтів потрібно брати у лапки однакового типу.

                                  standard+ autofix+
                                  boolean

4. keyframe-block-no-duplicate-selectors Забороняє дублікати кадрів у анімаціях:

                                        ```css
                                        /* not valid */
                                        @keyframes foo { 0% {} 0% {} }
                                        ```

                                        Для правила доступна опція message.

                                        standard+ autofix-
                                        boolean

5. no-duplicate-at-import-rules Забороняє дублікати імпортів:

                                ```css
                                /* not valid */
                                @import "a.css";
                                @import "a.css";
                                @import url(a.css);

                                /* valid */
                                @import url('a.css') projection;
                                @import url('a.css') tv;
                                ```

                                standard+ autofix-
                                boolean

6. no-duplicate-selectors Забороняє однакові селектори:

                          ```css
                          /* not valid */
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

                          secondary options:
                          disallowInList: true | false (default: false)
                            Забороняє повтори селекторів у списках

                            ```css
                            /* not valid */
                            input, textarea {
                              border: 2px;
                            }
                            textarea {
                              border: 1px;
                            }
                            ```

                          Правило не розповсюджується на однакові селектори
                          в/зовні медіа-запитів.

                          standard+ autofix-
                          boolean


###### Empty

1. block-no-empty Забороняє порожні блоки коду:

                  ```css
                  /* invalid */
                  a { }
                  ```

                  secondary options:
                  ignore: ["comments"]
                    ігнорує коментарі:
                    ```css
                    /* not valid */
                    a {
                      /* foo */
                    }
                    ```

                  standard+ autofix-
                  boolean

2. comment-no-empty Забороняє порожні коментарі:

                    ```css
                    /* not valid */
                    /*  */
                    ```

                    Правило ігнорує SCSS-подібні коментарі.

                    standard+ autofix-
                    boolean

3. no-empty-source  Disallow empty sources:

                    ```css
                    /* not valid */
                    \t\t
                    \n
                    ```

                    standard+ autofix-
                    boolean


###### Invalid

1. color-no-invalid-hex Забороняє не коректні hex-кольори:

                        ```css
                        /* not valid */
                        a { color: #y3 }
                        ```

standard+ autofix-
boolean

2. function-calc-no-unspaced-operator

standard+ autofix+
boolean

3. keyframe-declaration-no-important

standard+ autofix-
boolean

4. media-query-no-invalid

standard+ autofix-
boolean

5. named-grid-areas-no-invalid

standard+ autofix-
boolean

6. no-invalid-double-slash-comments

standard+ autofix-
boolean

7. no-invalid-position-at-import-rule

standard+ autofix-
boolean

8. string-no-newline

standard+ autofix-
boolean


###### Irregular

1. no-irregular-whitespace


###### Missing

1. custom-property-no-missing-var-function
2. font-family-no-missing-generic-family-keyword


###### Non-standatd

1. function-linear-gradient-no-nonstandard-direction


###### Overrides

1. declaration-block-no-shorthand-property-overrides


###### Unmatchable

1. selector-anb-no-unmatchable


###### Unknown

1. annotation-no-unknown
2. at-rule-no-unknown
3. declaration-property-value-no-unknown
4. function-no-unknown
5. media-feature-name-no-unknown
6. media-feature-name-value-no-unknown
7. no-unknown-animations
8. no-unknown-custom-properties
9. property-no-unknown
10. selector-pseudo-class-no-unknown
11. selector-pseudo-element-no-unknown
12. selector-type-no-unknown
13. unit-no-unknown


###### Allowed, disallowed & required

1. at-rule-allowed-list
2. at-rule-disallowed-list
3. at-rule-no-vendor-prefix
4. at-rule-property-required-list
5. color-hex-alpha
6. color-named
7. color-no-hex
8. comment-word-disallowed-list
9. declaration-no-important
10. declaration-property-unit-allowed-list
11. declaration-property-unit-disallowed-list
12. declaration-property-value-allowed-list
13. declaration-property-value-disallowed-list
14. function-allowed-list
15. function-disallowed-list
16. function-url-no-scheme-relative
17. function-url-scheme-allowed-list
18. function-url-scheme-disallowed-list
19. length-zero-no-unit
20. media-feature-name-disallowed-list
21. media-feature-name-allowed-list
22. media-feature-name-no-vendor-prefix
23. media-feature-name-unit-allowed-list
24. media-feature-name-value-allowed-list
25. property-allowed-list
26. property-disallowed-list
27. property-no-vendor-prefix
28. rule-selector-property-disallowed-list
29. selector-attribute-name-disallowed-list
30. selector-attribute-operator-allowed-list
31. selector-attribute-operator-disallowed-list
32. selector-combinator-allowed-list
33. selector-combinator-disallowed-list
34. selector-disallowed-list
35. selector-no-qualifying-type
36. selector-no-vendor-prefix
37. selector-pseudo-class-allowed-list
38. selector-pseudo-class-disallowed-list
39. selector-pseudo-element-allowed-list
40. selector-pseudo-element-disallowed-list
41. unit-allowed-list
42. unit-disallowed-list
43. value-no-vendor-prefix
44. function-name-case
45. selector-type-case
46. value-keyword-case
47. at-rule-empty-line-before
48. comment-empty-line-before
49. custom-property-empty-line-before
50. rule-empty-line-before
51. declaration-empty-line-before
52. declaration-block-single-line-max-declarations
53. declaration-property-max-values
54. max-nesting-depth
55. number-max-precision
56. selector-max-attribute
57. selector-max-class
58. selector-max-combinators
59. selector-max-compound-selectors
60. selector-max-id
61. selector-max-pseudo-class
62. selector-max-specificity
63. selector-max-type
64. selector-max-universal
65. time-min-milliseconds
66. alpha-value-notation
67. color-function-notation
68. color-hex-length
69. font-weight-notation
70. hue-degree-notation
71. import-notation
72. keyframe-selector-notation
73. media-feature-range-notation
74. selector-not-notation
75. selector-pseudo-element-colon-notation
76. comment-pattern
77. custom-media-pattern
78. custom-property-pattern
79. keyframes-name-pattern
80. selector-class-pattern
81. selector-id-pattern
82. selector-nested-pattern
83. font-family-name-quotes
84. function-url-quotes
85. selector-attribute-quotes
86. declaration-block-no-redundant-longhand-properties
87. shorthand-property-no-redundant-values
88. comment-whitespace-inside


###### Deprecated


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Домашня сторінка](https://stylelint.io)
2. [Набір конфігів для лінтера](https://github.com/stylelint/awesome-stylelint/#readme)
3. [npm-модуль зі стандартним конфігом](https://www.npmjs.com/package/stylelint-config-standard)
4. [Перелік правил](https://stylelint.io/user-guide/rules)
5. [Регулярки в лінтері](https://stylelint.io/user-guide/regex)
6. [Stylelint+Prettier](https://github.com/prettier/stylelint-config-prettier)
