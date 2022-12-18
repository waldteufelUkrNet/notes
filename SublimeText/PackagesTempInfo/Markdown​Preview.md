##### MarkdownPreview

https://facelessuser.github.io/MarkdownPreview/

Додаток показує в браузері, як виглядає md-файл. Має інтеграцію з LiveReload.
Може працювати з різними парсерами (github, gitlab - онлайн, python - офлайн,
або іншими). Дозволяє зберегти згенерований html у буфер обміну або файл.


###### Меню MarkdownPreview

Preferences ▶ Package Settings ▶ Markdown Preview


###### Налаштування MarkdownPreview

Налаштувань багато, детально див.
https://facelessuser.github.io/MarkdownPreview/usage/

browser               вказує, у якому браузері відкривати сконвертований файл,
                      рядок з адресою
                      "default"

html_template         абсолютний шлях до шаблону html, у відповідності до якого
                      буде конвертуватися md-файл. У цьому файлі є два
                      плейсхолдери: {{ HEAD }} - замінюється на згенеровані
                      стилі і скрипти, {{ BODY }} - замінюється на
                      сконвертований з Markdown HTML
                      ""

enable_autoreload     дозволяє використовувати пакунок LiveReload. Рекомендовано
                      використовувати команду Simple Reload with delay (400ms).
                      true

image_path_conversion спосіб обробки шляхів до картинок
                      "absolute"/"relative"/"base64"/"none"
                      "absolute"

file_path_conversions спосіб обробки шляхів до файлів
                      "absolute"/"relative"/"none"
                      "absolute"

path_tempfile         за замовчуванням створювані html-файли зберігаються у
                      дефолтній тимчасовій теці операційної системи, цю
                      директорію можливо змінити, вказавши шлях. Якщо її не
                      існує, вона буде створена. Відносні шляхи підтримуються і
                      вони вираховуються відносно os.path.isabs
                      (http://docs.python.org/3/library/os.path.html#os.path.isabs)
                      Приклади шляхів: 
                      /tmp/custom_folder (Linux/OSX - absolute path)
                      C:/TEMP/MYNOTES
                      C:\\TEMP\\MYNOTES  (Windows - absolute path, forward slash or escaped back slash)
                      build              (All OS - relative path, current dir)
                      ../build           (Linux/OSX - relative path, in parent dir)
                      ..\\build          (Windows - relative path, in parent dir) ""

markdown_binary_map   об'єкт з адресами та налаштуваннями для додаткових
                      парсерів:
```json
"markdown_binary_map": {
  "multimarkdown": ["/usr/local/bin/multimarkdown", "--some-option", "some-value"]
  }
```

enabled_parsers       масив доступних для використання парсерів


###### Команди MarkdownPreview

За замовчуванням жодних клавіатурних скорочень не встановлено, їх можна
налаштувати вручну (Preferences ▶ Keybindings):

```js
// For a specific parser and target
{ "keys": ["alt+m"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"} },
// To bring up the quick panel to select enabled parsers for a given target
{ "keys": ["alt+m"], "command": "markdown_preview_select", "args": {"target": "browser"} }
```

markdown_preview_select Markdown Preview: Preview in Browser
                        args: { "target": "browser" }

markdown_preview_select Markdown Preview: Export HTML in Sublime Text
                        args: { "target": "sublime" }

markdown_preview_select Markdown Preview: Save to HTML
                        args: { "target": "save" }

markdown_preview_select Markdown Preview: Copy to Clipboard
                        args: { "target": "clipboard" }

markdown_cheatsheet     Markdown Preview: Open Markdown Cheat sheet
                        args: {}