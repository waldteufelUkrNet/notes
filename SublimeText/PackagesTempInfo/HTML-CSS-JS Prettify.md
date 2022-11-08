##### HTML-CSS-JS Prettify

Пакунок написаний на JS, тому вимагає попереднього встановлення Node.js. Також
для його роботи потрібен npm-пакет js-beautify
(https://github.com/beautify-web/js-beautify).
Пакунок дозволяє не форматувати окремі блоки коду у форматованому файлі. Блоки
позначаються коментарями:

```js
var a = 1;
/* beautify ignore:start */
 {This is some strange{template language{using open-braces?
/* beautify ignore:end */
```

Для форматування jsx-файлів в Sublime потрібно визначити синтаксис як JavaScript
і у файлі .jsbeautifyrc встановити властивість e4x як true.

Для форматування vue-файлів в Sublime потрібно визначити синтаксис як HTML, XML
або Vue.


###### Меню HTML-CSS-JS Prettify

Tools ▶ HTML/CSS/JS Prettify
Preferences ▶ Package Settings ▶ HTML/CSS/JS Prettify
Context ▶ HTML/CSS/JS Prettify


###### Налаштування HTML-CSS-JS Prettify (HTMLPrettify.sublime-settings)

node_path                               шлях до виконуваного файлу Node.js
                                        {
                                          "windows": "C:/Program Files/nodejs/node.exe",
                                          "linux": "/usr/bin/nodejs",
                                          "osx": "/usr/local/bin/node"
                                        }

format_on_save                          автоматичне форматування при збереженні
                                        файла
                                        false

format_on_open                          автоматичне форматування при відкритті
                                        файлу (Sublime Text 3 only)
                                        false

format_on_focus                         автоматичне форматування при фокусуванні
                                        на файлі (Sublime Text 3 only)
                                        false

format_on_focus_lost                    автоматичне форматування при втраті
                                        фокусу на файлі (Sublime Text 3 only)
                                        false

format_while_editing                    автоматичне форматування під час друку
                                        (Experimental / Sublime Text 3 only)
                                        false

format_selection_only                   форматувати виділений текст, якщо він є
                                        true

save_to_temp_file_before_prettifying    зберегти у тимчасовий файл перед
                                        форматуванням
                                        true

global_file_rules                       правила форматування для конкретних
                                        типів файлів. В патернах можна
                                        прописувати назви конкретних файлів або
                                        шляхи до тек, які не потрібно
                                        форматувати
                                        {}

```json
"global_file_rules": {
  "html": {
    "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg", "vue"],
    "allowed_file_syntaxes": ["html", "xml", "vue"],
    "disallowed_file_patterns": []
  },
  "css": {
    "allowed_file_extensions": ["css", "scss", "sass", "less"],
    "allowed_file_syntaxes": ["css", "sass", "less"],
    "disallowed_file_patterns": []
  },
  "js": {
    "allowed_file_extensions": ["js", "jsx"],
    "allowed_file_syntaxes": ["javascript", "ecma", "react", "babel"],
    "disallowed_file_patterns": []
  },
  "json": {
    "allowed_file_extensions": [
      "json",
      "babelrc",
      "eslintrc",
      "jshintrc",
      "jsbeautifyrc",
      "sublime-settings",
      "sublime-keymap",
      "sublime-commands",
      "sublime-menu"
    ],
    "allowed_file_syntaxes": ["json"],
    "disallowed_file_patterns": []
  }
},
```

respect_editorconfig_files              правила з файлу ".editorconfig" (
                                        https://editorconfig.org/) перезаписують правила з файлу ".jsbeautifyrc". Але налаштування use_editor_indentation та
                                        use_editor_syntax мають пріоритет над
                                        будь-якими файлами конфігурацій.
                                        true

use_editor_syntax                       використовувати поточний синтаксис для
                                        визначення типу файлу замість розширення
                                        якщо false - додаток використовує
                                        налаштування allowed_file_extensions,
                                        якщо true - allowed_file_syntaxes
                                        true

use_editor_indentation                  використовувати системне налаштування
                                        відступів, а не те, що прописане у файлі
                                        ".jsbeautifyrc"
                                        false

print_diagnostics                       Log the settings passed to the
                                        prettifier from ".jsbeautifyrc"
                                        true

###### Налаштування HTML-CSS-JS Prettify (.jsbeautifyrc)

Налаштування з файлів .jsbeautifyrc ігноруються, якщо respect_editorconfig_files
виставлена в true. Пакунок шукає файли .jsbeautifyrc у наступних директоріях:

1. директорія, в якій знаходиться файл, що підлягає форматуванню
2. директорії, вище по ієрархії від директорії, вказаної у пункті 1
3. домашня директорія користувача (Your home folder)
4. Your personal Sublime settings folder

Якщо файл знайдено, пошук припиняється, наступні файли ігноруються.


###### Команди HTML-CSS-JS Prettify

htmlprettify                            HTMLPrettify
                                        ctrl+shift+h
                                        вирівняти код

htmlprettify_open_bug_file              File a bug
                                        повідомити про помилку

htmlprettify_open_help                  Help
                                        відкриває в браузері github-сторінку
                                        пакунка readme.md

htmlprettify_open_release_notes         What's new in v2.0?
                                        відкриває в браузері github-сторінку
                                        пакунка /releases

htmlprettify_set_keyboard_shortcuts     HTMLPrettify: Set Keyboard Shortcuts
                                        ctrl+alt+h, k
                                        відкриває користувацький файл
                                        клавіатурних скорочень пакунка
                                        /HTML-CSS-JS Prettify/Default (Linux).sublime-keymap

htmlprettify_set_node_path              Set "node" Path
                                        ctrl+alt+h, n
                                        відкриває файл налаштувань пакунка
                                        /HTML-CSS-JS Prettify/HTMLPrettify.sublime-settings

htmlprettify_set_plugin_options         HTMLPrettify: Set Plugin Options
                                        shift+alt+h, o (Windows)
                                        ctrl+alt+h, o (Linux)
                                        відкриває файл налаштувань пакунка
                                        /HTML-CSS-JS Prettify/HTMLPrettify.sublime-settings

htmlprettify_set_prettify_prefs         HTMLPrettify: Set Prettify Preferences
                                        ctrl+alt+h, p
                                        відкриває файл налаштувань пакунка
                                        /HTML-CSS-JS Prettify/.jsbeautifyrc.defaults.json

htmlprettify_set_user_keyboard_shortcuts Keyboard Shortcuts - User
                                        відкриває користувацький файл
                                        клавіатурних скорочень (глобальний)
                                        /Packages/User/Default (Linux).sublime-keymap

htmlprettify_set_user_plugin_options    Plugin Options - User
                                        відкриває файл налаштувань
                                        /User/HTMLPrettify.sublime-settings, або
                                        створює його, якщо його ще нема

htmlprettify_set_user_prettify_prefs    Prettify Preferences - User
                                        відкриває файл налаштувань
                                        /User/.jsbeautifyrc, або створює його,
                                        якщо його ще нема