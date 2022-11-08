Sublime Text 
================================================================================

Зміст
--------------------------------------------------------------------------------

- [Установка                                                         ](#install)
  - [Linux Mint Stable                                           ](#lms-install)
  - [Linux Mint Portable                                         ](#lmp-install)
  - [Windows                                                       ](#w-install)
  - [Каталоги Sublime                                               ](#catalogs)
    - [Каталог з виконуваними файлами                                ](#exe-cat)
    - [Каталог даних (Data Directory)                               ](#data-cat)
    - [Каталог пакунків (Packages Directory)                        ](#pack-cat)
    - [Каталог користувача (User Package)                           ](#user-cat)
- [Ліцензія                                                          ](#license)
- [Налаштування зовнішнього виду                                          ](#ui)
- [Українська локалізація                                            ](#ua-lang)
- [Командна панель                                                  ](#cpalette)
- [Команди                                                          ](#commands)
  - [Загальна інформація                                       ](#commands-info)
  - [Список команд                                             ](#commands-list)
- [Налаштування опцій                                                ](#options)
  - [Зміна налаштувань за допомогою клавіатурних скорочень](#options-keybindings)
- [Налаштування клавіатурних скорочень                           ](#keybindings)
  - [Список модифікаторів                                             ](#modifs)
  - [Особливості модифікаторів                                  ](#modifs-names)
  - [Список імен клавіш                                            ](#keysnames)
  - [Список імен спеціальних клавіш                            ](#speckeysnames)
  - [Параметри Context                                         ](#cotext-params)
  - [Ключі Context                                               ](#cotext-keys)
  - [Оператори Context                                            ](#cotext-ops)
- [Клавіатурні скорочення Sublime (за замовчуванням)              ](#defaultKBs)
  - [Особливості Linux                                               ](#linux-e)
  - [Управління панелями                                   ](#panels-management)
  - [Управління вкладками                                   ](#views-management)
  - [Управління групами вкладок                            ](#groups-management)
  - [Управління закладками                              ](#bookmarks-management)
  - [Виділення тексту/мультикурсори                             ](#multicursors)
  - [Редагування тексту                                            ](#edit-text)
  - [Пошук і заміна                                                   ](#search)
  - [Goto                                                               ](#goto)
  - [Git                                                            ](#git-keys)
  - [Підказки (автозавершення)                                         ](#hints)
- [Команди клавіш мишки                                        ](#mousebindings)
  - [Список ключів об'єкта команди клавіш                         ](#mouse-keys)
- [Редагування пунктів меню                                             ](#menu)
- [Написання файлів підказок                                ](#completion-files)
  - [.sublime-completions                                           ](#sc-files)
    - [Позначення типу підказки в попапі                    ](#completion-types)
    - [Організація файлів підказок .sublime-completions          ](#CFStructure)
  - [Сніпети                                                        ](#snippets)
  - [Плагіни                                                         ](#plugins)
- [Макроси                                                            ](#macros)
  - [Призначення клавіатурних скорочень для макросів                     ](#MKB)
- [Встановлення пакунків                                            ](#packages)
  - [Встановлення пакунку, якого нема в репозиторії           ](#custom-package)
  - [Менеджер пакунків PackageControl                               ](#pcontrol)
    - [Варіанти установки                                         ](#pc-install)
    - [Основні команди PackageControl                            ](#pc-commands)
  - [Пакунки                                                        ](#packages)
- [Посилання                                                           ](#links)


Установка                                                   <i id="install"></i>
--------------------------------------------------------------------------------

### Linux Mint Stable                                   <i id="lms-install"></i>

Встановити GPG ключ:

```shell
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
```

Встановити пакет для роботи з https:

```shell             
sudo apt-get install apt-transport-https
```

Встановити канал (підійде стабільний):

```shell
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```

Оновити пакети Linux і встановити Sublime Text:

```shell
sudo apt-get update
sudo apt-get install sublime-text
```

Sublime Text встає в диреторію /opt/sublime_text
Пакунки і налаштування знаходяться в директорії
/home/user_name/.config/sublime-text


### Linux Mint Portable                                 <i id="lmp-install"></i>

1. Завантажити архів з офіційного сайту.
2. Розархівувати архів у потрібну директорію.
3. В середині розпакованого архіву створити теку Data. Тут зберігатимуться ті
   дані, які у стабільної версії зберігаються в
   /home/user_name/.config/sublime-text


### Windows                                               <i id="w-install"></i>

Для Windows доступна також портативна програма.

Пакунки і налаштування для портабельної версії знаходяться в директорії
\Data\Packages


### Каталоги Sublime                                       <i id="catalogs"></i>

#### Каталог з виконуваними файлами                         <i id="exe-cat"></i>

Linux:              /opt/sublime_text/
Linux Portable:     /sublimePortable/Data/
Windows10:          c:\Program Files\Sublime Text 4\
Windows10 Portable: sublimePortable\


#### Каталог даних (Data Directory)                        <i id="data-cat"></i>

Linux:              /home/user_name/.config/sublime-text/
Linux Portable:     /sublimePortable/Data/
Windows10:          c:\Users\user_name\AppData\Roaming\Sublime Text 4\
??? Windows10 Portable: sublimePortable\Data\


#### Каталог пакунків (Packages Directory)                 <i id="pack-cat"></i>

Data Directory/Packages


#### Каталог користувача (User Package)                    <i id="user-cat"></i>

Data Directory/Packages/User


Ліцензія                                                    <i id="license"></i>
--------------------------------------------------------------------------------

Ключ ліцензії вноситься в поле по шляху: Help ▶ Enter License
Після успішної реєстрації продукту в системних файлах з'являється новий файл з
ліцензією за адресою
??? адреса файлу лінукс/віндовс


Налаштування зовнішнього виду                                    <i id="ui"></i>
--------------------------------------------------------------------------------

Кольорова схема: Preferences ▶ Select Color Scheme…


Українська локалізація                                      <i id="ua-lang"></i>
--------------------------------------------------------------------------------

Для перекладу пунктів меню потрібно завантажити архів з гітхабу, вказаний у
посиланнях. Файли з розширенням .sublime-menu потрібно розпакувати в директорію
/Packages/Default/

При встановленні додатків без української версії, до наявних пунктів меню будуть
додаватися англомовні.


Командна панель                                            <i id="cpalette"></i>
--------------------------------------------------------------------------------

Викликається за допомогою комбінації клавіш Ctrl+Shift+P. Слугує для виклику
команд. Команди не обов'язково вводити точно, наприклад для показу/приховування
панелі меню достатньо набрати vmen і натиснути Enter.

Команди доступні у файлах з розширенням .sublime-commands, які мають
json-синтаксис. Об'єкт команди повинен містити наступні властивості: 

1. caption (мітка команди)
2. command (назва команди)
3. args (аргументи команди, якщо потрібні).

приклад файлу:

```json
[
  {
    "caption": "Project: Save As",
    "command": "save_project_as"
  },
  {
    "caption": "Project: Close",
    "command": "close_project"
  },
  {
    "caption": "Project: Add Folder",
    "command": "prompt_add_folder"
  },
  {
    "caption": "Preferences: Default File Settings",
    "command": "open_file",
    "args": {"file": "${packages}/Default/Base File.sublime-settings"}
  },
  {
    "caption": "Preferences: User File Settings",
    "command": "open_file",
    "args": {"file": "${packages}/User/Base File.sublime-settings"}
  },
  {
    "caption": "Preferences: Default Global Settings",
    "command": "open_file",
    "args": {"file": "${packages}/Default/Global.sublime-settings"}
  },
  {
    "caption": "Preferences: User Global Settings",
    "command": "open_file",
    "args": {"file": "${packages}/User/Global.sublime-settings"}
  },
  {
    "caption": "Preferences: Browse Packages",
    "command": "open_dir",
    "args": {"dir": "$packages"}
  }
]
```


Команди                                                    <i id="commands"></i>
--------------------------------------------------------------------------------

### Загальна інформація по командах                   <i id="commands-info"></i>

В Sublime усі зав'язано на командах: пункти меню, клавіатурні скорочення тощо.

Існують команди, які потребують шляхів до файлів/каталогів у якості аргументів.
Ці команди поділяються на два типи синтаксису: ті, які підтримують сніпети, і
ті, що ні. Як правило, нові команди підтримують сніпети.

Шляхи прописуються у стилі UNIX
(/c/Program Files/Sublime Text 4/sublime_plugin.py), якщо інше не зазначено явно.

Відносні шляхи в аргументах починаються з каталогу даних.

Приклад шляхів для сніпетів:     ${packages}/SomeDir/SomeFile.ext
Приклад шляхів для інших коменд: Packages/SomeDir/SomeFile.ext


Способи визначення імен команд:

1. Якщо відома комбінація клавіш, знайти її в файлі Preferences ▶ Key Bindings -
   Default.
2. Відкрити консоль Sublime і набрати команду

   ```cmd
   sublime.log_commands(True)
   ```
   Усі наступні виконувані команди будуть вивидитись в консоль.
3. Якщо команда виконалася через пункт меню, її треба шукати у файлах з
   розширенням .sublime-menu (файл Packages/Default/Main.sublime-menu, або
   файли локалізації, або файли додатків).
4. Якщо команда виконалася через командну панель, її ім'я буде у файлі з
   розширенням .sublime-commands.


Виконання команди через консоль Sublime:
```cmd
window.run_command("command_name", {args});
sublime.run_command("command_name", {args});
view.run_command("command_name", {args});
```


### Список команд                                     <i id="commands-list"></i>

append                     вставляє рядок в кінець області представлення
                           args:
                           characters (String): рядок для вставки
                           force (Bool):
                           scroll_to_end (Bool):

auto_complete              відриває список автокомпліту

build                      запускає компіляцію
                           args:
                           variant (String): Optional. Ім'я варяанту для запуску

clear_bookmarks            якщо без аргументу, або з аргументом "bookmarks",
                           видаляє усі закладки з поточного файлу, але не
                           позначки ("mark"). Якщо аргумент - "mark", видаляє
                           усі позначки, але не закладки.
                           args:
                           name (String): e.g. "mark", "bookmarks".

clear_fields               виходить з циклу активного сніпета

clear_recent_files         видаляє записи про нещодавно доступні файли та теки

clear_recent_projects      видаляє записи про нещодавно доступні проекти

clone_file                 клонує поточне представлення в ту саму групу вкладок,
                           обидва мають спільний буфер.  Це означає, що ви
                           можете перетягнути одну вкладку в іншу групу, і кожне
                           оновлення в одному поданні також буде видно в іншому

close_file                 закриває активний перегляд і, за певних обставин, всю
                           програму

close_folder_list          видаляє усі теки з поточного проекту

close_project              закриває поточний проект

close_tag                  закриває тег: оточує поточний внутрішній текст
                           відповідними тегами

close_window               закриває активне вікно

close                      закриває активну область представлення

commit_completion          вставляє в буфер елемент, який вибрано в списку
                           автозаповнення

context_menu               показує контекстне меню

copy                       додає виділений текст у системний буфер обміну

cut                        видаляє виділений текст і додає його у системний
                           буфер обміну

decrease_font_size         зменшує розмір шрифта

delete_to_mark             видаляє текст, який був виділений командою
                           select_to_mark

detect_indentation         визначає відступи у поточному файлі

duplicate_line             дублює поточний рядок

exec                       асинхронно запускає зовнішній процес без GUI. Є
                           командою за замовчуванням, яка використовується в
                           системах збірки, тому вона забезпечує подібну
                           функціональність. Однак деякі параметри в системах
                           збірки внутрішньо обслуговуються Sublime Text, тому
                           вони перераховані нижче містять лише параметри,
                           прийняті цією командою.

                             cmd [(String)]
                             shell_cmd (String): Shell command to use. If given
                               overrides cmd and ignores shell.
                             file_regex (String)
                             line_regex (String)
                             working_dir (String)
                             encoding (String)
                             env [{String: String}]
                             quiet (Bool): If True no runtime information is
                               printed if the command fails or has a non-zero
                               exit code.
                             kill (Bool): If True will simply terminate the
                               current build process. This is invoked via Build:
                               Cancel command from the Command Palette.
                             update_phantoms_only (Bool)
                             hide_phantoms_only (Bool)
                             word_wrap (Bool): Whether to word-wrap the output
                               in the build panel
                             syntax (String): Syntax file used to colour output.
                             path (String)
                             shell (Bool)

                           Детальніше про параметри команди:
                           https://www.sublimetext.com/docs/3/build_systems.html#exec_options


exit                       виходить з усієї програми з усіма відкритими вікнами

expand_selection           розширює виділення до попередньо визначених меж
                           args:
                           to (Enum): Values: bol, hardbol, eol, hardeol, bof,
                             eof, brackets, line, tag, scope, indentation.

expand_tabs                ???
                           args:
                           set_translate_tabs (Bool)

find_all_under             знаходить усі повтори поточного виділеного рядку

find_next                  знаходить наступний повтор поточного виділеного рядку

find_prev                  знаходить попередній повтор поточного виділеного рядку

find_under_expand_skip     додає нове виділення на основі поточного виділення
                           або розширює виділення до поточного слова, видаляючи
                           поточне виділення

find_under_expand          додає нове виділення на основі поточного виділення
                           або розширює виділення до поточного слова

find_under_prev            знаходить попередній повтор поточного виділеного рядку

find_under                 знаходить наступний повтор поточного виділеного рядку

focus_group                переводить фокус на верхній файл у групі
                           args:
                           group (Int): Індекс групи

fold_by_level              сканує весь файл і згортає усе з вказаним рівнем або
                           вище. Не згортає уже згорнуті області. Розділи з
                           курсорами не згортаються.
                           args:
                           level (Int): Рівень відстуів, до яких треба згорнути
                           області. 0 рівнозначний виклику unfold_all

fold_tag_attributes        згортає всі атрибути тегу у файлах XML, залишаючи
                           видимими лише ім’я тегу та закриваючу дужку

fold                       згортає поточне виділення і натомість відображається
                           …. Стрілки розгортання додаються до ліній, де була
                           складена область.

hide_auto_complete         приховує список автокомпліту

hide_overlay               приховує активний оверлей

hide_panel                 приховує активну панель
                           args:
                           cancel (Bool): сповіщає панель про відновлення
                           виділення до того, що було під час відкриття панелі
                           (тільки панель інкрементного пошуку)

increase_font_size         збільшує розмір шрифта

indent                     збільшує відступ виділення

insert_best_completion     вставляє найкраще завершення, яке можна визначити з
                           поточного контексту
                           args:
                           default (String): дефолтний рядок для вставки (якщо
                           з найкращим збігом виникли проблеми)

insert_snippet             вставляє сніпет з рядка або файла .sublime-snippet
                           args:
                           contents (String): сніпет як рядок
                           name (String): відносний шлях до файла
                           .sublime-snippet. Детальніше про відносні шляхи:
                           https://docs.sublimetext.io/reference/commands.html#about-paths-in-command-arguments

insert                     вставляє рядок
                           args:
                           characters (String): рядок для вставки

join_lines                 з'єднує поточний рядок з наступним

left_delete                видаляє символ перед курсором

lower_case                 переводить виділений текст у нижній регістр

move_to_group              переносить поточний файл у визначену групу
                           args:
                           group (Int): індекс групи

move_to                    переміщує курсор на вказані координати
                           args:
                           to (Enum): Values: bol, eol, bof, eof, brackets.
                           extend (Bool): вказує, чи розширювати виділення.
                             Defaults to false.

move                       переміщує курсор на вказану позицію
                           args:
                           by (Enum): Values: characters, words, word_ends,
                             subwords, subword_ends, lines, pages, stops.
                           forward (Bool): Whether to advance or reverse in the
                             buffer.
                           word_begin (Bool)
                           empty_line (Bool)
                           punct_begin (Bool)
                           separators (Bool)
                           extend (Bool): вказує, чи розширювати виділення.
                             Defaults to false.

new_build_system           створює новий буфер та вставвляє в нього шаблон
                           системи компіляції

new_plugin                 створює новий буфер та вставвляє в нього шаблон
                           плагіна

new_snippet                створює новий буфер та вставляє в нього шаблон
                           сніпета

new_window                 відкриває нове вікно

next_bookmark              Select the next bookmarked region.

next_field                 Advances the caret to the text snippet field in the
                           current snippet field cycle.

next_misspelling           переходить до наступної орфограцічної помилки

next_result                переходить до наступного отриманого результату

next_view_in_stack         Switches to the most recently active view.

next_view                  Switches to the next view.

open_dir                   відкриває вказаний каталог файловим менеджером за
                           замовчуванням
                           args:
                           dir (String): каталог

open_file_settings         відкриває користувацький файл налаштування синтаксису
                           для поточної мови

open_file                  Відкриває вказаний файл. Буде динамічно відкривати
                           файли з архівів пакунків (тільки для читання), якщо
                           нема відповідних кастомних файлів, які видозмінюють
                           поведінку плагіна
                           args:
                           file (String): абсолютний або відносний шлях до файлу
                           contents (String): рядок, який буде записаний в буфер,
                           якщо файл не знайдено

open_recent_file           відкриває нещодавно закритий файл
                           args:
                           index (Int)

open_recent_folder         відкриває нещодавно закритий каталог
                           args:
                           index (Int)

open_recent_project        відкриває нещодавно закритий проект
                           args:
                           index (Int)

open_url                   відкриває вказаний url дефолтним браузером
                           args:
                           url (String)

paste_and_indent           вставити текст з буферу обміну після курсору і
                           вирівняти його по контексту

paste                      вставити текст з буферу обміну після курсору
                           args:
                           clipboard (String): May be selection.

permute_lines              ???
                           args:
                           operation (Enum): reverse, unique, shuffle ...?

permute_selection          ???
                           args:
                           operation (Enum): reverse, unique, shuffle ...?

prev_bookmark              Select the previous bookmarked region.

prev_field                 Moves the caret to the previous snippet field in the
                           current snippet field cycle.

prev_misspelling           переходить до попередньої орфографічної помилки

prev_result                переходить до попереднього результату

prev_view_in_stack         перемикає на область перегляду, яка була активна до
                           останнього активного перегляду

prev_view                  перемикає на область перегляду

prompt_add_folder          пропонує додати теку до поточного проекту

prompt_open_project        пропонує файлу проекту відкритися як проекту

prompt_save_as             пропонує ввести ім'я файлу та зберігає файл

prompt_select_project      відкриває спливаюче вікно з доступними проектами та
                           можливістю пошуку

redo_or_repeat             повторно виконує останню дію

redo                       повторно виконує останню скасовану дію

refresh_folder_list        перезавантажує усі теки в поточному проекті та
                           оновлює бічну панель

reindent                   виправляє відступи віділеного фрагменту

reopen_last_file           перевідкриває останній закритий файл

reopen                     перевідкриває поточний файл
                           args:
                           encoding (String): тип кодування

replace_completion_with_auto_complete   ???

replace_completion_with_next_completion ???

reset_font_size            скидає розмір шрифта до дефолтного

revert                     скасовує усі не збережені зміни у файлі

right_delete               видаляє символ справа від курсора

run_macro_file             запускає файл з макросом
                           args:
                           file (String): відносний шлях до файлу

run_macro                  запускає макрос з буферу макросів

save_all                   зберігає усі відкриті файли

save_macro                 запитує шлях для збереження макросу з буфера у файл

save_project_as            запитує, як назвати файл проекту і зберігає його

save                       зберігає файл
                           args:
                           encoding (String): кадування файла

scroll_lines               прокручує рядки
                           args:
                           amount [Float]: позитивні значення прокручують рядки
                           вниз, а негативні значення прокручують рядки вгору

select_all_bookmarks       Selects all bookmarked regions.

select_all                 вибирає весь контент в зоні представлення

select_bookmark            Selects a bookmarked region in the current file.
                           args:
                           index (Int)

select_by_index            фокусується на певній вкладці з поточної групи
                           args:
                           index (Int): порядковий номер вкладки

select_lines               додає лінію до поточного виділення
                           args:
                           forward (Bool): додає наступний або попередній рядок.
                             Defaults to true.

select_to_mark             Вибирає текст між поточною позицією кожного з
                           поточних курсорів і позначеною позицією. Кожен курсор
                           співставляється з кожною міткою в порядку їх появи та
                           переміщується на початок виділення.
                           Якщо будь-яка кількість виділень перекривається, вони
                           об’єднуються, і з усіх курсорів, що відповідають
                           кожному з об’єднаних виділень, зберігається лише той,
                           що зустрічається першим у файлі.

set_build_system           змінює поточну систему компіляції
                           args:
                           file (String): Шлях до системи збіркию. Якщо пустий,
                           Sublime Text пробує автоматично визначити найбільш
                           підходящу систему компіляції.
                           index (Int): Використовується в  Tools ▶  Build System

set_layout                 Змінює груповий макет поточного вікна.  Ця команда
                           використовує той самий шаблон, що й Window.set_layout
                           (https://docs.sublimetext.io/reference/python_api.html#window-set-layout)

set_line_ending            змінює закінчення рядків в поточному файлі
                           args:
                           type (Enum): windows, unix, cr

set_mark                   Позначає позицію кожного курсора в поточному файлі.
                           Якщо якісь позначки вже були встановлені в цьому
                           файлі, вони видаляються.
set_setting                встановлює значення певного налаштування
                           args:
                           setting (String): Ім'я властивості
                           value (any): Значення

show_about_window          ???

show_at_center             Прокручує область представлення, щоб показати вибрану
                           лінію в середині перегляду, і налаштовує
                           горизонтальне прокручування, якщо необхідно.

show_overlay               показує активний оверлей.
                           args:                                   
                           overlay (Enum): Тип, можливі значення:
                              goto: показати Goto Anything.
                              command_palette: показати the Command Palette.
                           show_files (Bool): Якщо використовується Goto, файли 
                             відображаються раніше за пустий віджет
                           text (String): початковий контент для вставки в
                             оверлей

show_panel                 показує панель
                           args:
                           panel (Enum): Values: incremental_find, find,
                           replace, find_in_files, console or output.<panel_name>
                           reverse (Bool): Чи потрібно шукати назад у буфері
                           toggle (Bool): Чи закривати панель, якщо вона уже
                           відкрита

show_scope_name            виводить в рядок стану назву області видимості, в
                           якій знаходиться курсор 

single_selection           згортає кілька виділень в одне

slurp_find_string          копіює поточне виділення або слово в поле "знайти"
                           панелі пошуку

slurp_replace_string       копіює поточне виділення або слово в поле "замвнити"
                           панелі пошуку і замінює панель

soft_redo                  повторює кожну дію з детальними змінами

soft_undo                  скасовує кожну дію з детальними змінами

sort_lines                 сортує лінії
                           args:
                           case_sensitive (Bool)

sort_selection             сортує лінії у вибраному фрагменті
                           args:
                           case_sensitive (Bool)

split_selection_into_lines розбиває виділений фрагмент на багато фрагментів
                           (один рядок - один фрагмент)

swap_case                  змінює регістр кожного символу на протилежний у
                           виділеному фрагменті

swap_line_down             міняє місцями поточний рядок і рядок нижче

swap_line_up               міняє місцями поточний рядок і рядок вище

swap_with_mark             Marks all the current carets' positions, removes
                           those carets, and sets new carets at the previously
                           marked positions, if any.

switch_file                перемикається між двома різними файлами з однаковими
                           іменами та різними розширеннями
                           args:
                           extensions (String): розширення (без крапки), для
                           яких дозволене перемикання

title_case                 перетворює перший символ виділеного фрагменту на
                           великий, а решту символів робить маленькими

toggle_bookmark            Sets or unsets a bookmark for the active region(s).
                           (Bookmarks can be accessed via the regions API using
                           "bookmarks" as the key.)

toggle_comment             додає/видаляє коментарі для активного рядка
                           args:
                           block (Bool): чи вставляти блоковий коментар

toggle_distraction_free    вмикає/вимикає distraction free mode

toggle_full_screen         вмикає/вимикає повноекранний режим

toggle_minimap             вмикає/вимикає мінікарту

toggle_overwrite           вмикає/вимикає overwriting

toggle_record_macro        вмикає/вимикає запис макросу

toggle_save_all_on_build   вмикає/вимикає збереження усіх відкритих файлів перед

                           початком збірки
toggle_setting             перемикає значення логічного парамента
                           args:
                           setting (String): ім'я параметру

toggle_show_open_files     показує/приховує відкриті файли у бічній панелі

toggle_side_bar            показує/приховує бічну панель

toggle_status_bar          показує/приховує панель статусів

toggle_tabs                показує/приховує панель вкладок

transpose                  міняє виділені фрагменти або символи у одному
                           фрагменті місцями

undo                       скасовує останню дію

unexpand_tabs              ???
                           args:
                           set_translate_tabs (Bool)

unfold_all                 розгортає усі згорнуті фрагменти у файлі

unfold                     розгортає ус згорнуті фрагменти у виділенні або на
                           місці курсора

unindent                   скасовує відступи виділеного фрагменту

upper_case                 робить усі символи виділеного фрагменту великими

wrap_lines                 Переносить текст на новий рядок. За замовчуванням -
                           до першого ruler.
                           args:
                               width (Int): ширина колонки у символах

yank                       ???


Налаштування опцій                                          <i id="options"></i>
--------------------------------------------------------------------------------

Кастомізація опцій редактора прописується по шляху Preferences ▶ Settings, або
здійснюється за допомогою редагування файла
/Packages/User/Preferences.sublime-settings

Окремі налаштування для певного типу файлів прописуються у файлах в цій же
директорії, наприклад /Packages/User/Python.sublime-settings
Цей файл доступний по шляху Preferences ▶ Settings - Syntax Specific, якщо
відкритий відповідний тип файла.

Також можна створити файл налаштувань під певну платформу + певну мову, напр.
Python (Linux).sublime-settings. Цей файл буде працювати тільки, якщо в
директорії нема файла для мови без специфікації для платформи.

Не залежно від розташування специфічний файл для мови має перевагу перед файлом
загальних налаштувань.

Файли налаштувань під певну платформу, наприклад
Preferences (Linux).sublime-settings, в директорії Packages/User ігноруються.

Зміни налаштувань у існуючих файлах підхоплюються автоматично, для залучення
нових файлів потрібно перезавантажити Sublime.

Крім власне файлів налаштувань є ще і файл сесії, в якому можуть зберігатися
налаштування для конкретних файлів, які на даний момент редагуються.
Налаштування сесії мають пріоритет над налаштуваннями, записаними у файлах
.sublime-settings.

Перевірити конкретне значення налаштування можна через команду в консолі:

```
view.settings().get("setting_name")
```

Порядок пріоритетності файлів налаштувань наступний (від меншого до більшого):

1. Global settings
  1.1. Packages/Default/Preferences.sublime-settings
  1.2. Packages/Default/Preferences (Windows).sublime-settings
  1.3. Packages/AnyOtherPackage/Preferences.sublime-settings
  1.4. Packages/AnyOtherPackage/Preferences (Windows).sublime-settings
  1.5. Packages/User/Preferences.sublime-settings
2. Settings from the current project
3. Syntax-specific settings
  3.1. Packages/Python/Python.sublime-settings
  3.2. Packages/Python/Python (Windows).sublime-settings
  3.3. Packages/User/Python.sublime-settings
4. Session data for the current file (View-specific settings)
5. Auto-adjusted settings


Приклад файлу налаштувань:

```json
"save_on_focus_lost": true,       // автозбереження при втраті фокусу
"font_face": "Consolas",          // встановлення свого шрифта
"font_size": 14,
"tab_size": 2,                    // табуляція в два пробіли
"word_wrap": true,                // перенесення слів на новий рядок
"highlight_line": true,           // підсвічування рядка, на якому знаходиться курсор
"translate_tabs_to_spaces": true, // замінювати таби на пробіли
"show_definitions": false,        // скасувати появу попапу з оголошеннями функцій

"ignored_packages": ["CSS","Vintage"],

"theme": "Adaptive.sublime-theme",
"color_scheme": "Monokai.sublime-color-scheme",
```


### Зміна налаштувань за допомогою клавіатурних скорочень <i id="options-keybindings"></i>

Увімкнути/вимкнути певне налаштування за допомогою комбінації клавіш можна
у файлі з налаштуваннями клавіатурних скорочень командою toggle_setting.


```json
{
  "keys": ["alt+w"],
  "command": "toggle_setting",
  "args":
  {
    "setting": "word_wrap"
  }
}
```


Для встановлення специфічного значення використовується команда set_settings:

```json
{
  "keys": ["ctrl+k", "ctrl+c"],
  "command": "set_setting",
  "args":
  {
    "setting": "color_scheme",
    "value": "Packages/Color Scheme - Default/Cobalt.tmTheme"
  }
}
```


Налаштування клавіатурних скорочень                     <i id="keybindings"></i>
--------------------------------------------------------------------------------

Клавіатурні скорочення Sublime прописуються по шляху Preferences ▶ Key
Bindings. Файли з налаштуванням знаходяться в директорії /Packages/User і мають
розширення .sublime-keymap.

Файл Default.sublime-keymap присутній на усіх платформах, також у задежності від
платформи може бути присутній один з наступних файлів:

1. Default (Windows).sublime-keymap
2. Default (OSX).sublime-keymap
3. Default (Linux).sublime-keymap

Також файли з комбінаціями клавіш можуть бути у сторонніх пакунках в їх
директоріях.

Типово файл підказок містить масив з об'єктами, де кожен об'єкт є комбінацією
клавіш. Такий об'єкт повинен містити ключі keys та command, може мати ключі args
i context.

Приклад файлу підказок:

```json
{
  "keys": ["alt+ctrl+a"],
  "command": "reindent",
  "args": {"single_line": false}
},
{ 
  "keys": ["shift+enter"],
  "command": "insert",
  "args": {"characters": "\n"}
},
{ "keys": ["escape"],
  "command": "clear_fields",
  "context":
    [
      { "key": "has_next_field",
        "operator": "equal",
        "operand": true
      }
    ]
},
{
  "keys": ["ctrl+k", "ctrl+v"],
  "command": "paste_from_history"
}
```

Для відслідковування натиснених клавіш через консоль, в ній треба набрати
команду

```cmd
sublime.log_input(True)
```


### Список модифікаторів                                     <i id="modifs"></i>

Ctrl (control)
Shift
Alt
option         тільки Mac, те саме, що і Alt
command        ⌘, тільки Mac
super          the Windows key on Windows and Linux, or ⌘ on Mac
primary        Ctrl on Windows and Linux, or ⌘ on Mac


### Особливості модифікаторів                          <i id="modifs-names"></i>

1. Якщо відсутній модифікатор і символ знходиться в кутових дужках <key>, це
означає, команда буде виконуватися з усіма комбінаціями клавіш, де є символ,
тому для уникнення постійного виконання команди, потрібно використовувати
контекст.
2. При розробці пакунка не можна створювати комбінації клавіш
Ctrl+Alt+<alphanum> (для Windows) і Option+<alphanum> для Mac. Інакше в обох
випадках можливість користувача вставляти символи, відмінні від ASCII, буде
порушено. Кінцевий же користувач може створювати такі комбінації клавіш.


### Список імен клавіш                                    <i id="keysnames"></i>

a b c d e f g h i j k l m n o p q r s t u v w x y z

0 1 2 3 4 5 6 7 8 9

, . \ / ; ' ` + - = [ ]

up down left right insert home end pageup pagedown backspace delete tab enter
pause escape space

keypad0 keypad1 keypad2 keypad3 keypad4 keypad5 keypad6 keypad7 keypad8 keypad9
keypad_period keypad_divide keypad_multiply keypad_minus keypad_plus
keypad_enter clear

f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12 f13 f14 f15 f16 f17 f18 f19 f20


### Список імен спеціальних клавіш                    <i id="speckeysnames"></i>

up                keypad0         f1
down              keypad1         f2
right             keypad2         f3
left              keypad3         f4
insert            keypad4         f5
home              keypad5         f6
end               keypad6         f7
pageup            keypad7         f8
pagedown          keypad8         f9
backspace         keypad9         f10
delete            keypad_period   f11
tab               keypad_divide   f12
enter             keypad_multiply f13
pause             keypad_minus    f14
escape            keypad_plus     f15
space             keypad_enter    f16
clear                             f17
sysreq            browser_back    f18
break             browser_forward f19
context_menu      browser_refresh f20
browser_stop                      f21
browser_search                    f22
browser_favorites                 f23
browser_home                      f24


### Параметри Context                                 <i id="cotext-params"></i>

key       ім'я контексту, чиє значення треба запитати
operator  спосіб порівняння ключа, за замовчуванням - equal (співпадіння)
operand   значення, з яким порівнюється ключ
match_all необхідність відповідності умові усіх фрагментів, за замовчуванням -
          false.


#### Ключі Context                                      <i id="cotext-keys"></i>

Плагіни можуть мати свої ключі.

Список ключів Sublime:

auto_complete_visible повертає true, якщо список підказок видимий
has_next_field        повертає true, якщо доступне поле наступного сніпета
has_prev_field        повертає true, якщо доступне поле попереднього сніпета
last_command          повертає ім'я останньої виконаної команди
num_selections        повертає порядковий номер виділення
overlay_visible       повертає true, якщо видно який-небудь оверлей
panel_visible         повертає true, якщо видно яку-небудь панель
following_text        перевіряє виділений текст і текст, що йде за ним до кінця
                      рядка
preceding_text        перевіряє текст на рядку до виділення включно
selection_empty       повертає true, якщо виділення пусте
setting.x             повертає значення налаштування х, х може бути будь-яким
                      рядком
text                  обмежує тест вибраним текстом
selector              повертає назву поточної області (scope)
panel_has_focus       повертає true, якщо панель має інпут з фокусом
panel                 повертає true, якщо панель, дана як операнд, є видимою


### Оператори Context                                    <i id="cotext-ops"></i>

equal, not_equal                   тест на тотожність
regex_match, not_regex_match       тест на повну відповідність регулярному
                                   виразу
regex_contains, not_regex_contains тест на часткову відповідність регулярному
                                   виразу


Клавіатурні скорочення Sublime (за замовчуванням)        <i id="defaultKBs"></i>
--------------------------------------------------------------------------------

### Особливості Linux                                       <i id="linux-e"></i>

Якщо в Linux встановити клавіатурне скорочення на зміну мови у форматі Alt+Shift
або Ctrl+Shift, то клавіатурні скорочення Sublime, які містять дані комбінації,
не працюватимуть (наприклад Alt+Shift+number - перемикання кількості робочих
областей у вікні).


### Управління панелями                           <i id="panels-management"></i>

Ctrl+K, Ctrl+B         показує/приховує бічну панель
Ctrl+0                 фокус на бічній панелі (відкриває, якщо вона закрита)
Ctrl+K, Ctrl+▲         відкриває нову область: спочатку ділить вікно перегляду
                       на два горизонтальних, а кожного наступного - додає
                       вертикальне вікно перегляду у правому вікні
Ctrl+K, Ctrl+▼         закриває попередньо відкриту робочу область
Ctrl+`                 відкриває консоль Sublime
Alt+F                  відкриває пункт меню File
Alt+E                  відкриває пункт меню Edit
Alt+S                  відкриває пункт меню Selection
Alt+I                  відкриває пункт меню Find
Alt+V                  відкриває пункт меню View
Alt+G                  відкриває пункт меню Goto
Alt+T                  відкриває пункт меню Tools
Alt+P                  відкриває пункт меню Project
Alt+N                  відкриває пункт меню Preferences
Alt+H                  відкриває пункт меню Help


### Управління вкладками                           <i id="views-management"></i>

Ctrl+Shift+T           відкрити останню закриту вкладку
Ctrl+PageUp            пройтися по усіх відкритих вкладках зліва направо
Ctrl+PageDown          пройтися по усіх відкритих вкладках справа наліво
Ctrl+Tab               зробити активною попередню активну вкладку (рух назад)
Ctrl+Shift+Tab         повернутися до активної вкладки (рух вперед)
Ctrl W                 закрити поточну вкладку
Alt+[1-9]              переключитися на вкладку номер


### Управління групами вкладок                    <i id="groups-management"></i>

Alt+Shift+1            одна група вкладок
Alt+Shift+2            дві групи вкладок горизонтально
Alt+Shift+3            три групи вкладок горизонтально
Alt+Shift+4            чотири групи вкладок горизонтально
Alt+Shift+5            чотири групи вкладок таблицею 2х2
Alt+Shift+8            дві групи вкладок вертикально
Alt+Shift+9            три групи вкладок вертикально
Ctrl+[1-4]             переключитися на групу
Ctrl+Shift+[1-4]       перенести активну вкладку в групу


### Управління закладками                      <i id="bookmarks-management"></i>

Ctrl+F2                поставити/витерти закладку
F2                     наступна закладка
Shift+F2               попередня закладка
Ctrl+Shift+F2          витерти усі закладки


### Виділення тексту/мультикурсори                     <i id="multicursors"></i>

Ctrl+L                 виділення усього рядка, на якому знаходиться курсор та
                       опускання курсору на рядок нижче. Можна виділити багато
                       рядків, затиснувши комбінацію.
Shift+▼                виділення рядка, на якому знаходиться курсор (від курсору
                       справа), та опускання курсору на рядок нижче. Можна
                       виділити багато рядків, затиснувши комбінацію.
Shift+▲                те саме, що і Shift+▼, тільки вгору
Shift+▶                виділення вправо
Shift+◀                виділення вліво
Ctrl+Shift+▶           виділити слово/до кінця справа від курсору
Ctrl+Shift+◀           виділити слово/до кінця зліва від курсору
Ctrl+Shift+Space       виділення області видимості лексичного оточення
Ctrl+T+if              якщо виділено два фрагменти тексту (букви або слова):
                       заміна їх місцями
Shift+mouse_right      виділення прямокутної області з мільтикурсорами (Linux)
mouse_scroll           виділення прямокутної області з мільтикурсорами (Windows)
Shift+Alt+▲            мультикурсори (Linux)
Shift+Alt+▼            мультикурсори (Linux)
Ctrl+Alt+▲             мультикурсори (Windows)
Ctrl+Alt+▼             мультикурсори (Windows)
Ctrl+Shift+L           1й раз у межах виділеної області робить курсор в кінці
                       кожнного рядка, 2й раз - в кінці кожного слова


### Редагування тексту                                    <i id="edit-text"></i>

Ctrl+K, Ctrl+U         зробити текст великим
Ctrl+K, Ctrl+L         зробити текст маленьким
Ctrl+X                 вирізати виділений фрагмент або лінію, де знаходиться
                       курсор
Ctrl+Enter             вставити пусту лінію знизу
Ctrl+Shift+Enter       вставити пусту лінію зверху
Ctrl+Shift+▲           поміняти місцями поточний рядок з попереднім
Ctrl+Shift+▼           поміняти місцями поточний рядок з наступним
Ctrl+D                 пошук наступного ідентичного підрядка в тексті і його
                       виділення (з попередніх виділення не знімається). Для
                       скасування - Ctrl+U, для пропуску - Crtl+K, Ctrl+D
Ctrl+M                 перейти до закриваючої дужки, повторно - перейти до
                       відкриваючої дужки
Ctrl+Shift+M           виділення тексту в дужках
Ctrl+Shift+K           видалити поточний рядок
Ctrl+K, Ctrl+K         видалити текст від курсору до кінця лінії
Ctrl+K, Ctrl+Backspace видалити текст від курсору до початку лінії
Ctrl+]                 зробити відступ лінії
Ctrl+[                 видалити відступ лінії
Ctrl+Shift+D           копіювати рядок і вставити його знизу
Ctrl+Shift+J           приєднати рядок нижче до поточного рядку
Ctrl+/                 коментувати/розкоментувати рядок
Ctrl+Shift+/           коментувати/розкоментувати виділений фрагмент
Ctrl+Z                 скасувати останню зміну
Ctrl+Y                 повторити останню зміну
Ctrl+U                 скасувати кожну дію з детальними змінами (напр. положення
                       курсору)
Ctrl+Shift+U           повторити останню дію
Ctrl+Shift+V           вставити і зробити правильні відступи
Alt+Shift+W            обгорнути виділений фрагмент в тег
Alt+.                  закрити поточний тег


### Пошук і заміна                                           <i id="search"></i>

Ctrl+F                 відкрити панель пошуку
Ctrl+I                 відкрити панель інкрементного пошуку (від звичайної
                       панелі пошуку відрізняється поведінкою клавіші Enter:
                       після знаходження шуканого фрагменту закриває панель)
Ctrl+Enter             в рядку пошуку: створбє новий рядок (багаторядковий пошук)
Alt+R                  включити/виключити регулярні вирази в панелі пошуку
Alt+C                  включити/виключити чутливість до регістру в панелі пошуку
Alt+W                  включити/виключити точне співпадіння в панелі ошуку
Enter                  знайти наступне співпадіння
F3                     знайти наступне співпадіння
Shift+Enter            знайти попереднє співпадіння
Shift+F3               знайти попереднє співпадіння
Alt+Enter              знайти всі співпадіння
Alt+F3                 знайти всі співпадіння
Ctrl+E                 ?
Ctrl+Shift+F           розширений пошук (у файлах)

Ctrl+H                 відкрити панель заміни
Ctrl+Shift+H           замінити наступний підрядок
Ctrl+Alt+Enter         замінити все
Ctrl+Shift+E           ?


### Goto                                                       <i id="goto"></i>

Ctrl+P                 навігація по файлах і в документі (Goto Anything menu)
                       (@symbol, #term, :line_number)
                       file_name:number знайти файл і перевести курсор на
                                        потрібний рядок
                       :number          перейти на потрібний рядок у поточному
                                        файлі
                       file_name#string знайти потрібний файл і текст у ньому
                       #string          пошук у тексті поточного файлу
                       file_name@symbol знайти файл і символ в ньому
                       @symbol          знайти символ у файлі: в js-файлі
                                        виводить список функцій, в css-файлі
                                        виводить список класів, ідентифікаторів,
                                        тегів, в md-файлі виводить список
                                        заголовків
Ctrl+;                 Goto Anything #string
Ctrl+G                 Goto Anything :number
Ctrl+R                 Goto Anything @ (Goto Symbol)
Ctrl+Shift+R           Goto Symbol in Project: пошук оголошень по цілому проекту
F12                    Goto Definition: пошук оголошення функції/стилю, на яких
                       наведений курсор


### Git                                                    <i id="git-keys"></i>

Ctrl+.                 перехід на наступний змінений рядок Goto ▶ Next
                       Modification
Ctrl+,                 перехід на попередній змінений рядок Goto ▶ Previous
                       Modification 
Ctrl+K, Ctrl+/         показати/приховати зміни (курсор на зміненому рядку)Edit
                       ▶ Text ▶ Toggle Hunk Diff
Ctrl+K, Ctrl+;         показати/приховати зміни (курсор на зміненому рядку) (To
                       toggle the diff for a region, while hiding all other
                       diffs)
Ctrl+K, Ctrl+Z         відкат до змін (видалене буде відновлено, додане -
                       видалено) Edit ▶ Text ▶ Revert Modification


### Підказки (автозавершення)                                 <i id="hints"></i>

Ctrl+Space             показати попап з підказками
Tab                    показати попап з підказками
Esc                    приховати попап з підказками


Ctrl+Alt+Shift+P       показує область видимості (scope)


Команди клавіш мишки                                  <i id="mousebindings"></i>
--------------------------------------------------------------------------------

Поведінка клавіш мишки, по аналогії до клавіатури, визначається відповідним
файлом, який має розширення .sublime-mousemap та json-формат.


### Список ключів об'єкта команди клавіш                 <i id="mouse-keys"></i>   

1. button        ім'я клавіші (від button1 до button16 та scroll_up і
                 scroll_down)
2. modifiers     список модифікаторів - клавіш, які повинні бути затиснені для
                 спрацювання команди
3. count         кількість разів, скільки треба натиснути кнопку миші для
                 спрацювання команди. За замовчуванням 1.
4. command       команда для виконання при відпусканні клавіші
5. args          аргументи для команди відпускання клавіші
6. press_command команда для виконання при натисненні на клавішу
7. press_args    аргументи для команди при натисканні на клавішу


Приклад файлу Default/Default (Windows).sublime-mousemap:
```json
[
  // Basic drag select
  {
    "button": "button1", "count": 1,
    "press_command": "drag_select"
  },
  {
    "button": "button1", "count": 1, "modifiers": ["ctrl"],
    "press_command": "drag_select",
    "press_args": {"additive": true}
  },
  {
    "button": "button1", "count": 1, "modifiers": ["alt"],
    "press_command": "drag_select",
    "press_args": {"subtractive": true}
  },
]
```


Редагування пунктів меню                                       <i id="menu"></i>
--------------------------------------------------------------------------------

Для редагування пунктів меню необхідно створити файл з розширенням .sublime-menu
в директорії /Packages або її піддиректоріях. Файл повинен мати назву одного з
типів меню, наприклад "Find in Files.sublime-menu". Файл має json-формат.

Типи меню бувають наступні:

1. Main                 Головне меню
2. Context              Контекстне меню в області редагування
3. Find in Files        з'являється при натисненні кнопки … в панелі пошуку
                        файлів
4. Side Bar             Контекстне меню для кожного вузла на бічній панелі
5. Side Bar Mount Point Додаткові елементи контекстного меню для вузлів
                        верхнього рівня на бічній панелі
6. Tab Context          Контекстне меню панелі вкладок
7. Widget Context       Контекстне меню полів введення у всіх видах віджетів,
                        включаючи палітру команд, Goto Anything, панелі пошуку
                        та панелі, відкриті плагінами


Пункт меню або запускає каманду, або відкриває підменю.

Об'єкт меню може мати наступні поля:

1. caption  назва пункту меню
2. command  назва команди
3. args     аргументи
4. id
5. mnemonic клавіша швидкого набору
6. children масив об'єктів підменю
7. platform ім'я платформи, для якої пинкт меню видимий. Допустимі значення:
   OSX, Linux, Windows. Також допустимі негативні значення, напр. !OSX


Об'єкт меню повинен мати як мінімум:

1. command
2. caption & children
3. caption
4. id 

Пункт меню з масивом підменюшок не може мати команду.

Якщо нема caption, то назва береться з методу description, якщо цього методу
нема, назва буде пустим рядком.

Мнемонічні літери чутливі до регістру.

Пункти меню можна приховати або вимкнути за допомогою команди, на яку вони
посилаються.

Сепаратор має caption "-" і не має children, не може мати команду. Послідовні
сепаратори відображаються як один. Сепаратори на початку і в кінці не
відображаються.


Приклад файлу меню:

```json
[
  {
    "caption": "Edit",
    "mnemonic": "E",
    "id": "edit",
    "children":
    [
      { "command": "undo", "mnemonic": "U" },
      { "command": "redo_or_repeat", "mnemonic": "R" },
      {
        "caption": "Undo Selection",
        "children":
        [
          { "command": "soft_undo" },
          { "command": "soft_redo" }
        ]
      },
      { "caption": "-", "id": "clipboard" },
      { "command": "copy", "mnemonic": "C" },
      { "command": "cut", "mnemonic": "t" },
      { "command": "paste", "mnemonic": "P" },
      { "command": "paste_and_indent", "mnemonic": "I" },
      { "command": "paste_from_history", "caption": "Paste from History" }
    ]
  }
]
```


Пункти меню можуть мати різні динамічні стани:

1. hidden
2. disabled
3. checked
4. assigned a different caption (перейменований)


Для цього команди повинні реалізувати необхідні методи у своєму класі.  Кожен
реалізований метод буде викликатися з аргументами, зазначеними у відповідному
пункті меню. Якщо цей виклик не вдасться, метод буде негайно викликано знову без
аргументів.

Список аргументів:

1. is_visible
2. is_enabled
3. is_checked
4. description


Написання файлів підказок                          <i id="completion-files"></i>
--------------------------------------------------------------------------------

### .sublime-completions                                   <i id="sc-files"></i>

#### Позначення типу підказки в попапі             <i id="completion-types"></i>

k - Keyword    "keyword"
t - Type       "type"
f - Function   "function"
a - Namespace  "namespace"
n - Navigation "navigation"
m - Markup     "markup"
v - Variable   "variable"
s - Snippet    "snippet"
               "ambiguous"


#### Організація файлів підказок .sublime-completions   <i id="CFStructure"></i>

Файли підказок мають розширення .sublime-completions і розташовуються в
директорії /Packages/User/ Ім'я файлу не важливе.


Для кожної мови програмування створюється свій файл. Файл має формат json.
Пишеться або у спрощеному, або повному варіантах.


Приклад спрощеного варіанту:

```json
{
  "scope": "source.python",  // source.js
  "completions": [
    "def",
    "class",
    "None",
    "True",
    "False"
  ]
}
```

У повному варіанті замість масиву рядків прописується масив об'єктів.
Властивостями об'єкту є:

trigger    - те, на що реагує рушій (обов'язкове поле)
contents   - запропонований автокомпліт (обов'язкове поле), підтримує
             інтерполяцію
annotation - додаткове пояснення
kind       - для візуалу, або рядок, або масив з трьох рядків. Якщо рядок, то
             значення має бути одним з:
               "ambiguous"
               "function"
               "keyword"
               "markup"
               "namespace"
               "navigation"
               "snippet"
               "type"
               "variable".
             Якщо масив, то перший елемент - одне зі слів зі списку вище
             (потрібен для візуальної теми), другий елемент - буква, третій -
             слово для підказки. Напр. "kind": ["function", "m", "Method"].
details    - рядок з поясненням, може містити теги a, b, strong, i, em, u, tt, 
             code.
             Напр: "details": "Wraps selection in a <code>&lt;b&gt;</code> tag"


Приклад повного варіанту:

```json
{
 "scope": "source.python",
 "completions": [
   {
     "trigger": "def",
     "contents": "def",
     "kind": "keyword"
   },
   {
     "trigger": "fun",
     "annotation": "basic function",
     "contents": "def ${1:name}($2):\n    $0\n",
     "kind": "snippet",
     "details": "A simple, non-<code>async</code> function definition"
   }
 ]
}
```

Для економії місця в поле trigger можна вписати annotation, для цього
використовується символ табулції \t:

```json
{ "trigger": "foo\ttest", "contents": "foobar" }
```


### Сніпети                                                <i id="snippets"></i>

Сніпети - це XML-файли з розширенням .sublime-snippet. Вони містять тег snippet,
який містить теги scope, tabTrigger, contents, description. Сніпети
використовуються там, де через багаторядковість вставки не можливо
використовувати файли підказок .sublime-completions.
Вміст тегу contents типово обгорнутий в <![CDATA[ тут_конент ]]> (так контент не
треба екранувати). В contents вписуються поля і змінні.


Приклад сніпету:

```xml
<snippet>
  <scope>source.python</scope>
  <tabTrigger>fun</tabTrigger>
  <content><![CDATA[def ${1:name}($2):
  ${0:pass}]]></content>
  <description>function, non-async</description>
</snippet>
```

Детальніша інформація по сніпетах:
https://www.sublimetext.com/docs/completions.html#snippets
https://docs.sublimetext.io/guide/extensibility/snippets.html


### Плагіни                                                 <i id="plugins"></i>

Про плагіни:
https://www.sublimetext.com/docs/completions.html#plugins
https://docs.sublimetext.io/guide/extensibility/plugins/
https://docs.sublimetext.io/reference/plugins.html#where-to-store-plugins



Макроси                                                      <i id="macros"></i>
--------------------------------------------------------------------------------

В Sublime макроси зберігаються у файлах з розширенням .sublime-macro і
json-форматуванням, які розташовуються в директорії Packages/User або в
директоріях пакунків.

Ctrl+Alt+Q          почати / закінчити запис макроса
Ctrl+Alt+Shift+Q    відтворити макрос
Tools ▶ Save macro… зберегти макрос у файл


Приклад файлу макросу:
```json
[
  {
    "command": "move_to",
    "args": {"to": "hardeol"}
  },
  {
    "command": "insert",
    "args": {"characters": "\n"}
  }
]
```

Якщо редагувати файли макросів вручну, потрібно екранувати пробіли, лапки і
зворотні косі риски за допомогою \


### Призначення клавіатурних скорочень для макросів             <i id="MKB"></i>

Приклад:

```json
{
  "keys": ["super+alt+l"],
  "command": "run_macro_file",
  "args": {
    "file": "res://Packages/User/Example.sublime-macro"
  }
}

```


Встановлення пакунків                                      <i id="packages"></i>
--------------------------------------------------------------------------------

Пакунки у вигляді архіву зберігаються в директорії /Installed Packages, а
розпаковані - /Packages. Є два вбудовані пакунки: Default i User. Default
завжди завантажується першим, а User - останнім. Усі інші встановлені пакунки
обробляються в алфавітному порядку.

Пакунки в zip-архівах доступні тільки для читання, модифікувати їх не можна.
Проте, існує можливість їх переписати. Для цього в директорії Packages потрібно
створити нову теку з іменем пакунку, поведінку якого потрібно змінити. Усі файли
в цій теці матимуть перевагу над файлами із zip-фрхіву і повністю їх
перезаписують.


### Встановлення пакунку, якого нема в репозиторії   <i id="custom-package"></i>

вставити завантажений і розпакований пакунок в теку

Linux:              /home/user_name/.config/sublime-text-3/Packages
Linux Portable:     /sublime_text/Data/Packages/User/
Windows10:          c:\Users\user_name\AppData\Roaming\Sublime Text 4\Packages
Windows10 Portable: \Data\Packages


### Менеджер пакунків PackageControl                       <i id="pcontrol"></i>

#### Варіанти установки:                                 <i id="pc-install"></i>

1. Tools ▶ Install Package Control…
2. Ctrl+Shift+P та ввсести "Install Package Control"


#### Основні команди PackageControl                     <i id="pc-commands"></i>

Install Package               встановлення пакунку
Remove Package                видалення пакунку
Disable Package               відключення пакунку
Enable Package                включення пакунку
Upgrade Package               оновлення пакунку
Upgrade/Overwrite All Packages оновлення усіх пакунків
Add Repository                додавання репозиторію, не включеного в канал. 
                              Це дозволяє інсталювати пакунки з github або
                              bitbucket
Add Channel                   додавання каналу зі списком репозиторіїв
Install Local Dependency      показ списку пакунків в директорії Packages/
                              які не встановлені, але мають файл
                              .sublime-dependency
Create Package File           для розробників
Create Binary Package File    для розробників


### Пакунки                                                <i id="packages"></i>

#### Список пакунків

##### "Системні"

A File Icon                   візуалізація значків файлів
AdvancedNewFile               зручне створення/видалення/перейменування файлів
                              і тек
LiveReload                    автоматичне перезавантаження браузера при
                              збереженні змін в HTML/CSS/JS/SCSS/SASS
View In Browser               відкриття активного файлу у браузері
Clickable URLs                підсвічування та відкриття посилань у файлі
Terminal                      дозволяє відкрити термінал через Sublime в теці
                              поточного документу або кореневій теці проекту
Terminus                      емулятор термінала
SideBarEnhancements           розширення функціоналу бічної панелі
FindKeyConflicts              пошук конфліктів комбінацій клавіш


##### Підсвічування синтаксису

Pug                           підсвітка синтиксису pug
CSS3                          підсвітка синтаксису css3, підказки
SASS                          підсвітка синтаксису sass/scss
(SCSS)                        підсвітка синтаксису scss
LESS                          підсвітка синтаксису less
HTML (C#)                     підсвітка фрагментів C#-коду в HTML
Vue Syntax Highlight          підсвітка синтаксису vue
Dockerfile Syntax Highlighting підсвітка синтаксису в Dockerfile
nginx                         підсвітка синтаксису конфігураційних файлів Nginx
DotENV                        підсвідка синтаксису .env-файлів
GraphQL                       підсвітка синтаксису GraphQL
StyleToken                    підсвітка довільних фрагментів коду для пошуку
                              співпадінь і орієнтування в коді
TrailingSpaces                підсвітка зайвих пробілів в кінці рядків,
                              можливість їх видалити при збереженні документа
BracketHighlighter            підсвітка дужок, лапок і тегів
(ColorPicker)                 викликає системну палітру кольорів
                              категорично не хоче працювати в Linux Mint
                              (Cinnamon&gpick) - в консолі спрацьовує команда
                              color_pick, але gpick не відкривається
Color Highlight               підсвічування кольорів
Color Highlighter             підсвічування кольорів, палітра кольорів,
                              конвертер форматів
(Colorcoder)                  кастомна сематнична підсвітка синтаксису


##### Вирівнювання

HTML-CSS-JS Prettify          вирівнює відступи у файлах HTML/CSS/JS/JSON/React/
                              JSX/Vue, демініфікує мініфіковані файли
Alignment                     вирівнює пари ключ-значення CSS/JS/JSON по
                              розділовому знаку

       
##### Підказки

All Autocomplete              робить підказки, спираючись на усі відкриті файли
AutoFileName                  робить підказки для шляхів і назв файлів при їх
                              підключенні
Nodejs                        підказки для Node.js + команди для запуску рушія


##### Перевірка коду (лінтери)

SublimeLinter                      фреймворк для перевірки синтаксису коду, не має власних лінтерів
SublimeLinter-json                 перевірка синтаксису JSON
SublimeLinter-pug-lint             перевірка синтаксису Pug
SublimeLinter-stylelint            перевірка синтаксису CSS/SCSS/Sass/Less/SugarSS/CSS в HTML, Markdown та CSS-in-JS object та template literals, HTML, Vue, Markdown
SublimeLinter-eslint               перевірка синтаксис JavaScript
SublimeLinter contrib HTMLHint     перевірка синтаксис HTML
SublimeLinter-annotations          comments such as FIXME, NOTE, TODO, @todo, XXX, and README. It will be used with all files.
SublimeLinter-contrib-markdownlint перевірка синтаксису markdown


##### Різне

CSSComb                       сортування властивостей у заданій послідовності у
                              файлах css/scss/sass/less
Console Wrap                  створення і робота з логуючими виразами в Python/
                              JS/PHP/Go
HTML Minifier                 мініфікатор HTML/CSS/JS. Може зберегти результат у
                              поточний файл або створити новий з префіксом .min
HTML Nest Comments            в стандартному HTML не можна закоментувати код, в
                              якому уже є коменти. Цей плагін виправляє дану
                              проблему.
Random Everything             генерування випадкових значень: пошт, дат тощо
Can I Use                     перевірка css-властивостей на сайті
                              https://caniuse.com
Goto-CSS-Declaration          пошук css-декларацій у відкритих файлах css/scss/
                              sass/less
DocBlockr                     створення коментарів у форматі DocBlock для JS/
                              PHP/CoffeeScript/Actionscript/TypeScript/C/C++/
                              Objective C/Haxe/Java/Apex/Groovy/Rust
Autoprefixer                  додає вендорні префікси в CSS/SCSS
Markdown HTML Preview         відкриває браузер і показує, як виглядає md-файл
Tagify                        дозволяє вставляти мітки в коді py/html/htm/js і
                              потім виводити список міток у окрему вкладку.
                              Мітки і список мов можна розширювати.
Inc-Dec-Value                 збільшення/зменшення цифр, кольорів, букв в словах
                              на великі/малі, true на false тощо. Можна створити
                              власний словник замін.
LockTab                       блокування вкладок (заборона закриття)
TabsExtra                     розширене контекстне меню для вкладок


#### Детальний огляд пакунків


??? Коли закінчу огляд усіх пакунків, перенести файли сюди

Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Офіційний сайт            ](https://www.sublimetext.com/)
2. [Менеджер пакетів          ](https://packagecontrol.io/)
3. [Українська локалізація    ](http://keedhost.github.io/sublime-text-3-uk_UA/)