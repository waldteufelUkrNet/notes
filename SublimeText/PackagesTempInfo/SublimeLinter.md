##### SublimeLinter

https://www.sublimelinter.com/en/stable/
https://github.com/SublimeLinter/SublimeLinter


###### Меню SublimeLinter

Preferences ▶ Package Settings ▶ SublimeLinter
Context ▶ Lint This View
Context ▶ Linter Quick Action


###### Налаштування SublimeLinter

Налаштування лінтера зберігаються у файлі SublimeLinter.sublime-settings.

Фреймворк застосовує налаштування у такому порядку:

1. default
2. User
3. project (https://www.sublimetext.com/docs/3/projects.html). 

Приклад файлу проекту з секцією лінтера:
```json
{
  "folders":
  [
    {
      "path": "."
    }
  ],
  "settings":
  {
    "SublimeLinter.linters.flake8.disable": true
  }
}
```

У проекті можна змінити лише налаштування лінтерів. Усі інші налаштування
можна змінити лише в налаштуваннях користувача (дослівний переклад, що означає -
хз).


###### Налаштування лінтерів

Лінтери можуть мати власні налаштування, прописувати їх потрібно у файлі
налаштувань SublimeLinter, в об'єкті з ключем "linters".


args                      аргументи командного рядка для зовнішнього бінарника,
                          масив або рядок
                          []

disable                   відключити лінтер, true/false/"not set"
                          "not set"

disable_if_not_dependency налаштування тільки для лінтера Node.js, якщо true, не
                          буде використовувати глобально встановлені пакунки
                          false

env                       лексичне оточення для лінтера, перезаписує системне
                          лексичне оточення
                          {}

excludes                  масив патернів для файлів, які треба виключити з
                          перевірки
                          []

executable                шлях до виконуваного файлу, масив або рядок
                          "<automatically set>"

filter_errors             ігнорування помилок, які відповідають заданому шаблону,
                          рядок або масив. Кожен вхідний рядок обробляється як
                          шаблон регулярного виразу без урахування регістру та
                          зіставляється з error_type, кодом і повідомленням.
                          Напр. ["warning: ", "W3\d\d: ", "missing <!DOCTYPE> declaration"]
                          ```json
                          {
                            // suppress all warnings
                            "filter_errors": "warning: ",

                            // suppress a specific eslint rule
                            "filter_errors": "no-trailing-spaces: ",

                            // suppress some flake8/pyflakes rules,
                            "filter_errors": "W3\\d\\d: ",

                            // typical html tidy message
                            "filter_errors": "missing <!DOCTYPE> declaration"
                          }
                          ```
                          []

lint_mode                 коли запускати лінтер. Налаштування лінтера матиме
                          пріоритет над глобальними налаштуваннями.
                            background: asynchronously on every change
                            load_save: when a file is opened and every time it’s
                                       saved
                            manual: only when calling the Lint This View command
                            save: only when a file is saved
                          "manual"

python                    налаштування тільки для лінтера python. Версія або
                          шлях до виконуваного файлу.
                          3

selector                  визначає, на які типи файлів реагує лінтер, напр.
                          ```json
                          {
                            "linters": {
                              "yamllint": {
                                "selector": "source.yaml, source.ansible"
                              }
                            }
                          }
                          ```
                          Щоб дізнатися, який селектор використовувати, слід
                          пройти по шляху Tools ▶ Developer ▶ Show Scope Name
                          ""

styles                    стилізація виділених помилок
                          [{"codes":[""]}]

working_dir               поточна робоча директорія


Для вказування лінтеру шляху до виконуваних файлів (executable) можна
використовувати змінні, які підтримує SublimeLinter, напр. $(folder), детальніше:
https://www.sublimelinter.com/en/stable/settings.html#settings-expansion.
```json
{
  "executable": "${folder}/node_modules/bin/eslint"
}
```

В загальному підсумку можна сказати наступне: SublimeLinter - це фреймворк, для
роботи якого потрібні лінтери (не ідуть в комплекті, потрібно доставляти
самостійно з магазину SublimeText). Лінтерами в SublimeText є пакунки, які
надають фреймворку доступ до інтерфейсу зовнішніх (в основному), сторонніх
виконуваних файлів (напр. для пакунку-лінтеру SublimeLinter-eslint потібно
встановити зовнішній лінтер eslint (https://eslint.org/)). Встановити лінтери
можливо глобально (пакети node в linux зберігаються в директорії
/usr/local/lib/node_modules/) або в конкретний проект. Якщо пакунок-лінтер не
підхоплює виконуваний файл зовнішнього лінтера, шлях до нього можна ввести
вручну у файлі SublimeLinter.sublime-settings по ключу
linters.linter_name.executable. Для підсвітки помилок у файлах кожному лінтеру
потрібно створити додатковий файл з налаштуваннями (напр. для eslint -
.eslintrc.json).

Приклад такого файлу для eslint:
```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended"
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2020,
    "requireConfigFile": false
  },
  "rules": {
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "node/no-deprecated-api": ["error", {
      "version": ">=8.10.0",
      "ignoreModuleItems": [],
      "ignoreGlobalItems": []
    }],
    "node/exports-style": ["error", "module.exports"],
    "node/file-extension-in-import": ["error", "always"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error"
  },
  "settings": {}
}
```


###### Команди SublimeLinter

sublime_linter_goto_error         SublimeLinter: Goto Error
                                  ctrl+k, n ({ "direction": "next" })
                                  ctrl+k, p ({ "direction": "previous" })
                                  навігація по помилках в документі
                                  args:
                                    direction:  "next"/"previous"
                                    count:      How many errors to jump.
                                                Defaults to 1.
                                    wrap:       якщо true - перестрибне на самий
                                                верх документа, якщо поточна
                                                помилка - остання.
                                                За замовчуванням - false

sublime_linter_line_report        SublimeLinter: Show Line Errors
                                  ctrl+k, r

sublime_linter_lint               SublimeLinter: Lint This View
                                  ctrl+k, l

sublime_linter_panel_toggle       SublimeLinter: Show All Errors
                                  ctrl+k, a

sublime_linter_quick_actions      SublimeLinter: Quick Action
                                  args: { "prefer_panel": true }

sublime_linter_reload             SublimeLinter: Reload SublimeLinter and its
                                  Plugins

sublime_linter_toggle_highlights  SublimeLinter: Toggle Highlights
                                  увімкнути/вимкнути підсвітку помилок