##### SublimeLinter-stylelint

https://github.com/SublimeLinter/SublimeLinter-stylelint
https://www.npmjs.com/package/stylelint-config-standard

Лінтер надає доступ до інтерфейсу stylelint (https://stylelint.io/).

У лінтера є кілька аналогів, але їх краще не використовувати:
SublimeLinter-csslint (перевіряє синтаксис тільки CSS),
SublimeLinter-contrib-scss-lint (розробка зупинена, рекомендовано перейти на
stylelint), SublimeLinter-contrib-sass-lint (розробка зупинена).

Для використання лінтеру необхідно встановити пакунки postcss і stylelint:

```shell
npm install --save-dev stylelint postcss
```


###### Налаштування stylelint

Лінтер здатен перевіряти коректність css-синтаксису, а також коректність усіх
тих типів синтаксисів, під які користувацькою спільнотою було написано
розширення.

Для роботи лінтеру потрібно передати об'єкт з налаштуваннями. Його можна
передати, використавши:

1. властивість "stylelint" у файлі package.json
2. файл .stylelintrc/.stylelintrc.json/.stylelintrc.js/.stylelintrc.yaml/
   .stylelintrc.yml в кореневій директорії проекту
3. файл .stylelint.config.js, який експортує js-об'єкт
4. файл .stylelint.config.cjs, який експортує js-об'єкт (в package.json повинен
   бути вказаний "type":"module")


###### Властивості об'єкту налаштувань

customSyntax                  визначає кастомний синтаксис

defaultSeverity               рівень "серйозності" за замовчуванням

disableFix                    параметр другого аргумента-об'єкта в масиві
                              аргументів до правила, забороняє автовиправлення.
```json
{
  "rules": {
    "color-function-notation": ["modern", { "disableFix": true }]
  }
}
```

extends                       розширення конфігурації готовими пресетами, рядок
                              або масив рядків. В масиві наступний пресет
                              перезатирає попередній пресет. Шляхи до файлів
                              описані: https://stylelint.io/user-guide/configure/#extends
```json
{
  "extends": ["stylelint-config-standard", "./myExtendableConfig"],
  "rules": {
    "alpha-value-notation": "number"
  }
}
```

ignoreDisables                Ignore stylelint-disable
                              (e.g. /* stylelint-disable block-no-empty */)     ***
                              comments.
                              Boolean

ignoreFiles                   масив файлів, які не потрібно перевіряти

message                       параметр другого аргумента-об'єкта в масиві
                              аргументів до правила, кастомне повідомлення про
                              помилку.
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

overrides                     визначає синтаксис для специфічних типів файлів

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

plugins                       правила або набори правил, які підтримують
                              методології, набори інструментів, нестандартні
                              функції CSS або дуже специфічні випадки
                              використання. Після підключення плагіна у секції
                              "rules" потрібно увімкнути правила цього плагіна.
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

processors                    функції, які вбудовуються у ланцюжок команд
                              stylelint, розробники лінтера рекомендують замісь
                              них використовувати опцію customSyntax.
                              Масив імен npm-пакетів або шляхів до них.

report*                       These report* properties provide extra validation
                              for stylelint-disable comments. This can be
                              helpful for enforcing useful and well-documented
                              disables.

reportDescriptionlessDisables Report stylelint-disable comments without a
                              description. A report* property.
                              Boolean

reportDisables                параметр другого аргумента-об'єкта в масиві
                              аргументів до правила. You can set the
                              reportDisables secondary option to report any
                              stylelint-disable comments for this rule,
                              effectively disallowing authors to opt out of it.
                              The report is considered to be a lint error.
                              Boolean

reportInvalidScopeDisables    Report stylelint-disable comments that don't match
                              rules that are specified in the configuration
                              object. A report* property.
                              Boolean

reportNeedlessDisables        Report stylelint-disable comments that don't
                              actually match any lints that need to be disabled.
                              A report* property.
                              Boolean

rules                         об'єкт з правилами перевірки синтаксису. Жодні
                              правила не ввімкнено за замовчуванням і немає
                              значень за замовчуванням. Потрібно явно
                              налаштувати кожне правило, щоб увімкнути його.
                              Правила приймають значення:
                                null: вимкнути правило
                                просте значення
                                масив значень

severity                      параметр другого аргумента-об'єкта в масиві
                              аргументів до правила, визначає рівень
                              "серйозності" помилки, може приймати значення
                              warnind/error
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


###### Перевірка CSS

Для підключення стандартних правил перевірки css необхідно встановити додатковий
npm-модуль та вказати його в блоці "extends" файлу .stylelintrc.json: 

```shell
npm install --save-dev stylelint-config-standard
```

```json
{
  "extends": "stylelint-config-standard"
}
```

Для запуску перевірки коду потрібно запустити команду:

```shell
npx stylelint "**/*.css"
```


###### Перевірка SCSS

Для перевірки коду scss потрібно доставити пакет:

```shell
npm install --save-dev stylelint-config-standard-scss
```

та вписати його в блок "extends" файлу налаштувань:

```json
{
  "extends": ["stylelint-config-standard", "stylelint-config-standard-scss"]
}
```

заупуск перевірки scss-файлів через термінал:

```shell
npx stylelint "**/*.scss"
```


###### Відключення перевірок

Відключення будь-яких перевірок
```json
/* stylelint-disable */
a {}
/* stylelint-enable */
```

Відключення конкретних правил:
```json
/* stylelint-disable selector-max-id, declaration-no-important */
#id {
  color: pink !important;
}
/* stylelint-enable selector-max-id, declaration-no-important */
```

Відключення конкретного рядку без потреби прописувати наступне увімкнення:
```json
#id { /* stylelint-disable-line */
  color: pink !important; /* stylelint-disable-line declaration-no-important */
}
```
```json
#id {
  /* stylelint-disable-next-line declaration-no-important */
  color: pink !important;
}
```

Stylelint підтримує складні шаблони вимикання та ввімкнення, що перекриваються:
```json
/* stylelint-disable */
/* stylelint-enable foo */
/* stylelint-disable foo */
/* stylelint-enable */
/* stylelint-disable foo, bar */
/* stylelint-disable baz */
/* stylelint-enable baz, bar */
/* stylelint-enable foo */
```

Причину відключення лінтера можна вказати в коментарі після двох дефісів:
```json
/* stylelint-disable -- Reason for disabling Stylelint. */
/* stylelint-disable foo -- Reason for disabling the foo rule. */
/* stylelint-disable foo, bar -- Reason for disabling the foo and bar rules. */
```

Для відключення перевірки цілого файлу потрібно в корені проекту створити файл
.stylelintignore і в ньому происати шлях:
```
vendor/**/*.css
```

The patterns in your .stylelintignore file must match .gitignore syntax. (Behind
the scenes, node-ignore parses your patterns.) Your patterns in .stylelintignore
are always analyzed relative to process.cwd().

Stylelint looks for a .stylelintignore file in process.cwd(). You can also
specify a path to your ignore patterns file (absolute or relative to
process.cwd()) using the --ignore-path (in the CLI) and ignorePath (in JS)
options.

Alternatively, you can add an ignoreFiles property within your configuration
object.


###### Додаткові дані по stylelint

перелік правил:
https://stylelint.io/user-guide/rules

регулярки в лінтері:
https://stylelint.io/user-guide/regex