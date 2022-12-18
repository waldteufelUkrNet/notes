##### ClickableRequires

Пакунок при наведенні на директиви "require('module-name')" / "import module
from 'module'" відкриває попап із посиланням на файл, яке дозволяє його відкрити
в редакторі. Якщо файл є пакетом npm, у попапі є посилання "View on npmjs.com",
якщо файл належить до ядра Node.js, в браузері відкриється сторінка документації.


###### Меню ClickableRequires

Preferences ▶ Package Settings ▶ ClickableRequires


###### Налаштування ClickableRequires

Налаштування можна змінити у файлі ClickableRequires.sublime-settings в
директорії User.


auto_fold_imports   old lines with import when opening file
                    тfalse

debug               режим відлагодження пакунка
                    false

extensions          масив розширень файлів, у яких дозволено шукати require/import
                    [ ".js", ".jsx", ".ts", ".tsx", ".vue", ".coffee" ]

icon                позначка на полях, можливі значення: "dot", "circle", "bookmark", "cross", ""
                    "dot"

resolve_extensions  масив розширень, які шукатимуться пакунком, якщо модуль підключений без розширення
                    [ ".js", ".jsx", ".ts", ".tsx", ".vue", ".node", ".json", ".coffee" ]

reveal_in_side_bar  при відкритті файла показує його у бічній панелі
                    true

scope               See more at https://www.sublimetext.com/docs/3/scope_naming.html
                    "support.module" 

show_popup_on_hover поява попапа з посиланням на файл
                    true

underline           підкреслення require/import
                    true
