##### AdvancedNewFile

За замовчуванням файл створюється в директорії, яка є найвищою в ієрархії у
поточному вікні, якщо такої нема, буде використана домашня директорія.


###### Меню AdvancedNewFile

Preferences ▶ Packages Settings ▶ AdvancedNewFile



###### Налаштування AdvancedNewFile

alias                       словник, який містить набір псевдонімів, прив’язаних
                            до каталогу. Детальніше: https://github.com/SublimeText/AdvancedNewFile#aliases
                            {}

os_specific_alias           словник, який містить набір псевдонімів, прив’язаних
                            до каталогу та специфічних для певної операційки
                            {}

default_initial             рядок, який вставляється в поле введення за
                            замовчуванням
                            ""

use_cursor_text             чи буде підставлятися у поле введення виділений
                            фрагмент тексту
                            false

show_files                  чи будуть включені у автозавершення назви існуючих
                            файлів
                            false

show_path                   чи буде відображатися у рядку стану шлях до
                            створюваного файлу
                            true

default_root                коренева директорія
                            project_folder: коренева директорія береться з
                              налаштування default_folder_index
                            current: коренева директорією буде найвища
                              директорія у поточному вікні. If the current
                              view's directory cannot be resolved, the top level
                              folder in the window will be used. If the top
                              level folder in the window cannot be resolved
                              either, the home directory will be used.
                            home: кореневою директорією буде домашня директорія
                            path: коренева директорія береться з налаштування
                              default_path
                            "project_folder",

default_path                використовується, якщо в default_root вписане
                            значення path. Шлях повинен бути абсолютним, якщо
                            він відносний, то починається з директорії пакунку
                            "~"

default_folder_index        використовується, якщо у налаштуванні default_root
                            вказано project_folder. Число, що представляє індекс
                            теки. Якщо індекс не коректний, буде використано 0.
                            0

alias_root                  визначає кореневу директорію, коли у відносному
                            шляху прописані псевдоніми. Значення такі ж, як і у
                            default_root. Для властивості path прописується
                            значення alias_path.
                            "current"

alias_path                  це значення використовується за замовчуванням, коли
                            alias_root має значення path
                            "~"

alias_folder_index          використовується, якщо alias_root має значення
                            folder
                            0

ignore_case                 чи ігнорувати регістр при створенні списку
                            автозаповненя
                            false

auto_refresh_sidebar        чи оновлювати бокову панель після створення файлу
                            false

completion_type             визначає тип автозавершення, має два варіанти:
                            "windows" або "nix"
                            "windows"

complete_single_entry       чи потрібно вставляти роздільник, якщо є лише один
                            варіант автозавершення, а completion_type - windows
                            true

use_folder_name             логічний параметр, який визначає, чи слід
                            використовувати назву папки чи назву, указану в
                            проекті
                            false

relative_from_current       чи відносний шлях повинен базуватися на поточній
                            робочій директорії
                            true

default_extension           розширення файлу за замовуванням (вказувати з
                            крапкою)
                            ""

folder_permissions          рядок, який визначає дозволи для створеного шляху,
                            напр. “777” -> RWX for user, group, and other.
                            ""

file_permissions            рядок, який визначає дозволи для створеного файлу,
                            напр. “777” -> RWX for user, group, and other.
                            ""

rename_default              шлях, який буде вставлений в інпут при перенесенні
                            файла, може бути довільним рядком, або одним із
                            варіантів:
                              <filename>: тільки ім'я файлу
                              <filepath>: шлях + ім'я файлу
                              <filedirectory>: тільки шлях
                            ""

vcs_management              Setting to control if VCS management is used when
                            moving and removing files
                            false

file_templates              об'єкт з інформацією для створення нових файлів за
                            вказаними шаблонами. Ключами об'єкта виступають
                            розширення файлів. Файли без розширення, напр.
                            "Makefile" або ".bash_profile" використовують повну
                            назву для ключа. Значеннями ключів повинні бути або
                            рядок для вставки у файл, або масив шляхів. Шляхи
                            повинні бути абсолютні від директорії користувача
                            (~/), або відносні від директорії пакунків
                            (Packages/…). Якщо використовується портабельна
                            версія Sublime, шлях потрібно прописувати так:
                            "Data/Packages/User/…". Якщо використовується рядок,
                            або у масиві тільки один елемент, він вставляється у
                            файл автоматично. Якщо в масиві 2+ елементів,
                            з'являється список шаблонів на вибір.
                            {}

shell_input                 можливість екранувати символи
                            false

append_extension_on_move    чи буде при перенесенні/перейменуванні файла
                            автоматично додаватися розширення
                            false

relative_fallback_index     індекс теки, яка буде використовуватися, якщо не
                            можливо визначити відносний шлях з поточного вікна
                            0

append_extension_on_copy    чи буде при копіювання файла автоматично додаватися
                            розширення
                            true

copy_default                те саме, що і rename_default, тільки для копіювання
                            ""

cut_to_file_default         те саме, що і rename_default, тільки для вирізання
                            ""

current_fallback_to_project If default_root is set to current, the project
                            folder should be used as the default rather than the
                            home directory
                            false

warn_overwrite_on_move      попередження про перезапис файла при перенесенні
                            false

new_file_default_root       те саме, що і default_root, тільки для нового файлу.
                            Значення ті ж, плюс "default_root"
                            "default_root"

rename_file_default_root    те саме, що і default_root, тільки для перенесення
                            файлів. Значення ті ж, плюс "default_root"
                            "default_root"

copy_file_default_root      те саме, що і default_root, тільки для копіювання
                            файлів. Значення ті ж, плюс "default_root"
                            "default_root"

empty_filename_action       При порожньому введенні імені файлу виконати
                            альтернативну дію. Наразі реалізовано лише для
                            команди new file, яка відкриває новий файл без
                            назви
                            false

cursor_before_extension     When specifying initial input, this boolean will
                            place the cursor prior to the last occurring dot
                            false


Усі вище наведені властивості можна зробити специфічними для конкретного
проекту. Їхній пріоритет тоді буде вище, за властивості пакунку, крім
псевдонімів:

```json
"settings": {
  "AdvancedNewFile": {
    "default_initial": "/project/specific/path"
  }
}
```

###### Команди AdvancedNewFile

advanced_new_file_new         ANF: New File
                              ctrl+alt+n (Windows)
                              super+alt+n (OS X / Linux)
                              ctrl+shift+alt+n (Windows)
                              super+shift+alt+n (OS X / Linux)
                              створити новий файл, якщо з аргументом - додатково
                              створюється файл __init__.py
                              args:
                                {"is_python": true}

advanced_new_file_move        ANF: Rename File
                              перейменувати/перенести файл

advanced_new_file_delete      ANF: Delete File
                              показує інпут для вибору файлу, який треба видалити

advanced_new_file_delete      ANF: Delete Current File
                              запитує підтвердження видалення активного файлу
                              args:
                                {"current": true}

advanced_new_file_copy        ANF: Copy Current File
                              копіювання активного файлу

advanced_new_file_cut_to_file ANF: Cut to File
                              не зрозуміла команда, у списку команд її нема,
                              можливо її забули прибрати з документації