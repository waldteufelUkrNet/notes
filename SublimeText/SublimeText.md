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
  - [Навігація по документу                                          ](#doc-nav)
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
- [Системи збірок/компіляції                                     ](#compil-syst)
- [Встановлення пакунків                                       ](#packages-inst)
  - [Встановлення пакунку, якого нема в репозиторії           ](#custom-package)
  - [Менеджер пакунків PackageControl                               ](#pcontrol)
    - [Варіанти установки                                         ](#pc-install)
    - [Основні команди PackageControl                            ](#pc-commands)
- [Пакунки                                                          ](#packages)
- [Список пакунків                                             ](#packages-list)
  - ["Системні"                                             ](#packages-group-1)
  - [Підсвічування синтаксису                               ](#packages-group-2)
  - [Вирівнювання                                           ](#packages-group-3)
  - [Підказки                                               ](#packages-group-4)
  - [Перевірка коду (лінтери)                               ](#packages-group-5)
  - [Система контролю версій                                ](#packages-group-6)
  - [Різне                                                  ](#packages-group-7)
- [Детальний огляд пакунків                                   ](#packages-intro)
  - [A File Icon                                                         ](#AFI)
  - [AdvancedNewFile                                                     ](#ANF)
  - [Alignment                                                           ](#Alm)
  - [AlignTab                                                            ](#AlT)
  - [All Autocomplete                                                    ](#AAc)
  - [AutoFileName                                                        ](#AFN)
  - [Autoprefixer                                                        ](#APr)
  - [Babel                                                               ](#Bbl)
  - [BracketHighlighter                                                  ](#BHl)
  - [Can I Use                                                           ](#CIU)
  - [Clickable URLs                                                      ](#CUs)
  - [ClickableRequires                                                   ](#CRs)
  - [Clipboard History                                                   ](#ClH)
  - [Color Highlight                                                     ](#CHt)
  - [Color Highlighter                                                   ](#CHr)
  - [CommandsBrowser                                                     ](#CoB)
  - [Console Wrap                                                        ](#CoW)
  - [CSS3                                                                ](#CS3)
  - [CSSComb                                                             ](#CCb)
  - [Debugger                                                            ](#Deb)
  - [DocBlockr                                                           ](#DBr)
  - [Dockerfile Syntax Highlighting                                      ](#DSH)
  - [DotENV                                                              ](#Dot)
  - [EditorConfig                                                        ](#ECg)
  - [Emmet                                                               ](#Emm)
  - [FileDiffs                                                           ](#FDs)
  - [FindKeyConflicts                                                    ](#FKC)
  - [gist                                                                ](#gst)
  - [Git                                                                 ](#Git)
  - [Git Gutter                                                          ](#GGr)
  - [Goto-CSS-Declaration                                                ](#GCD)
  - [GraphQL                                                             ](#GQL)
  - [HTML (C#)                                                           ](#HC#)
  - [HTML Minifier                                                       ](#HMr)
  - [HTML Nest Comments                                                  ](#HNC)
  - [HTML-CSS-JS Prettify                                                ](#HPr)
  - [Inc-Dec-Value                                                       ](#IDV)
  - [jQuery                                                              ](#jQu)
  - [JsPrettier                                                          ](#JsP)
  - [LESS                                                                ](#LSS)
  - [LiveReload                                                          ](#LRl)
  - [LockTab                                                             ](#LoT)
  - [Markdown HTML Preview                                               ](#MHP)
  - [Markdown Table Formatter                                            ](#MTF)
  - [MarkdownEditing                                                     ](#MEg)
  - [MarkdownPreview                                                     ](#MPw)
  - [nginx                                                               ](#ngi)
  - [Nodejs                                                              ](#Njs)
  - [Origami                                                             ](#Ori)
  - [PackageResourceViewer                                               ](#PRV)
  - [PlainTasks                                                          ](#PTs)
  - [Pug                                                                 ](#Pug)
  - [Random Everything                                                   ](#REg)
  - [SASS                                                                ](#SAS)
  - [SCSS                                                                ](#SCS)
  - [SFTP                                                                ](#FTP)
  - [SideBarEnhancements                                                 ](#SBE)
  - [SideBarGit                                                          ](#SBG)
  - [StyleToken                                                          ](#StT)
  - [SublimeCodeIntel                                                    ](#SCI)
  - [SublimeLinter                                                       ](#SuL)
  - [SublimeLinter-annotations                                           ](#SLa)
  - [SublimeLinter-contrib-HTMLHint                                      ](#ScH)
  - [SublimeLinter-contrib-markdownlint                                  ](#SLm)
  - [SublimeLinter-eslint                                                ](#SLe)
  - [SublimeLinter-json                                                  ](#SLj)
  - [SublimeLinter-pug-lint                                              ](#SLp)
  - [SublimeLinter-stylelint                                             ](#SLs)
  - [Sublimerge3                                                         ](#SM3)
  - [Table Editor                                                        ](#TaE)
  - [TabsExtra                                                           ](#TsE)
  - [Tag                                                                 ](#Tag)
  - [Tagify                                                              ](#Tgf)
  - [Terminal                                                            ](#Trl)
  - [Terminus                                                            ](#Trs)
  - [TrailingSpaces                                                      ](#TSs)
  - [View In Browser                                                     ](#ViB)
  - [Vue Syntax Highlight                                                ](#VSH)
  - [WordCount                                                           ](#WoC)
- [Не робочі або не актуальні пакунки                             ](#not_actual)
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

Даний архів містить переклад застарілої версії Sublime Text і перезатирає нові
пункти меню. Щоб усі нові пункти меню відображалися, потрібно зробити переклад
самостійно.

Зміна локалізації ламає мнемонічне користування меню. Так, наприклад, якщо для
увімкнення/вимкнення переносу рядків потрібно було набрати комбінацію клавіш
"Alt+v,w", то після перекладу меню дана фішка не працює. Тепер можна тільки
набрати "wwte" через командну панель. Проблема полягає в тому, що мнемоніка
спрацьовує на букви, присутні у назві пункту меню ("v" у "View"), для пункту
"Вигляд" по ключу "mnenonic" потрібно прописати якусь кириличну букву з назви,
а це не зручно. Як варіант можна переписати сам пункт меню на "V:Вигляд".

При встановленні додатків без української версії, до наявних пунктів меню будуть
додаватися англомовні.

Враховуючи те, що першим завантажується пакунок Default, усі наступні пакунки,
які мають свої менюшки, зіпсують переклад. Для уникнення цього в пакунок User,
який завантажується завжди останнім, треба додати файл з перекладеним меню. Його
достатньо буде навіть у скороченому вигляді.

Приклад Main.sublime-menu:
```json
[
  { "caption": "F:Файл", "mnemonic": "F", "id": "file" },
  { "caption": "E:Правка", "mnemonic": "E", "id": "edit" },
  { "caption": "S:Виділення", "mnemonic": "S", "id": "selection" },
  { "caption": "i:Пошук", "mnemonic": "i", "id": "find" },
  { "caption": "V:Вигляд", "mnemonic": "V", "id": "view" },
  { "caption": "G:Перейти", "mnemonic": "G", "id": "goto" },
  { "caption": "T:Інструменти", "mnemonic": "T", "id": "tools" },
  { "caption": "P:Проект", "id": "project", "mnemonic": "P" },

  { "caption": "n:Опції", "mnemonic": "n", "id": "preferences",
    "children":
    [
      {
        "caption": "PaC Package Settings",
        "mnemonic": "P",
        "id": "package-settings"
      },
      {
        "caption": "PaC Package Control",
        "mnemonic": "C",
        "command": "show_overlay",
        "args": {"overlay": "command_palette", "text": "Package Control: "}
      }
    ]
  },

  { "caption": "H:Допомога", "mnemonic": "H", "id": "help" }
]
```

Також як варіант можна поглянути в сторону пакунку LocalizedMenu
(https://packagecontrol.io/packages/LocalizedMenu)


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

В Sublime усе зав'язано на командах: пункти меню, клавіатурні скорочення тощо.

Існують команди, які потребують шляхів до файлів/каталогів у якості аргументів.
Ці команди поділяються на два типи синтаксису: ті, які підтримують сніпети, і
ті, що ні. Як правило, нові команди підтримують сніпети.

Шляхи прописуються у стилі UNIX
(/c/Program Files/Sublime Text 4/sublime_plugin.py), якщо інше не зазначено явно.

Відносні шляхи в аргументах починаються з каталогу даних.

Приклад шляхів для сніпетів:     ${packages}/SomeDir/SomeFile.ext
Приклад шляхів для інших команд: Packages/SomeDir/SomeFile.ext


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
                           variant (String): Optional. Ім'я варіанту для запуску

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
                           обидва мають спільний буфер. Це означає, що ви
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

fold_tag_attributes        згортає всі атрибути тегу у файлах HTML/XML,
                           залишаючи видимими лише ім’я тегу та закриваючу дужку

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

set_layout                 Змінює груповий макет поточного вікна. Ця команда
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

show_about_window          Виводить попап з інформацію про реєстрацію

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
                           replace, find_in_files, console or output
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
```cmd
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
```js
{
  "save_on_focus_lost": true,       // автозбереження при втраті фокусу
  "font_face": "Consolas",          // встановлення свого шрифта
  "font_size": 14,
  "tab_size": 2,                    // табуляція в два пробіли
  "word_wrap": true,                // перенесення слів на новий рядок
  "highlight_line": true,           // підсвічування рядка, на якому знаходиться курсор
  "translate_tabs_to_spaces": true, // замінювати таби на пробіли
  "show_definitions": false,        // скасувати появу попапу з оголошеннями функцій
  "rulers": [40, 80, 120],          // візуальні межі для стилів кодування
  "tab_size": 2,

  "ignored_packages": ["CSS","Vintage"],

  "theme": "Default Dark.sublime-theme",
  "color_scheme": "Monokai.sublime-color-scheme",
}
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
Bindings. Файли з налаштуваннями знаходяться в директорії /Packages/User і мають
розширення .sublime-keymap.

Файл Default.sublime-keymap присутній на усіх платформах, також у залежності від
платформи може бути присутній один з наступних файлів:

1. Default (Windows).sublime-keymap
2. Default (OSX).sublime-keymap
3. Default (Linux).sublime-keymap

Також файли з комбінаціями клавіш можуть бути у сторонніх пакунках в їх
директоріях.

Типово файл скорочень містить масив з об'єктами, де кожен об'єкт є комбінацією
клавіш. Такий об'єкт повинен містити ключі keys та command, може мати ключі args
i context.

Приклад файлу клавіатурних скорочень:
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
Ctrl+W                 закрити поточну вкладку
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
                       курсор, і скопіювати його в буфер обміну
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


### Навігація по документу                                  <i id="doc-nav"></i>

Home                   перевести курсор на початок рядку
End                    перевести курсор в кінець рядку
Ctrl+Home              перевести курсор на початок файлу
Ctrl+End               перевести курсор в кінець файлу


### Пошук і заміна                                           <i id="search"></i>

Ctrl+F                 відкрити панель пошуку
Ctrl+I                 відкрити панель інкрементного пошуку (від звичайної
                       панелі пошуку відрізняється поведінкою клавіші Enter:
                       після знаходження шуканого фрагменту закриває панель)
Ctrl+Enter             в рядку пошуку: створює новий рядок (багаторядковий пошук)
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
Ctrl+K, Ctrl+/         показати/приховати зміни (курсор на зміненому рядку) Edit
                       ▶ Text ▶ Toggle Hunk Diff
Ctrl+K, Ctrl+;         показати/приховати зміни (курсор на зміненому рядку) (To
                       toggle the diff for a region, while hiding all other
                       diffs)
Ctrl+K, Ctrl+Z         відкат до змін (видалене буде відновлено, додане -
                       видалено) Edit ▶ Text ▶ Revert Modification


### Підказки (автозавершення)                                 <i id="hints"></i>

Ctrl+Space             показати попап з підказками
alt+/                  показати попап з підказками
Tab                    застосувати підказку з попапу
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
7. platform ім'я платформи, для якої пункт меню видимий. Допустимі значення:
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


Для цього команди повинні реалізувати необхідні методи у своєму класі. Кожен
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

На вставку будь-якого сніпета можна призначити комбінацію клавіш, за що
відповідає команда "insert_snippet", на яку у файлі конфігурації навішується
комбінація і у полі "name" вказується шлях до файлу сніпету.

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


Системи збірок/компіляції                               <i id="compil-syst"></i>
--------------------------------------------------------------------------------

Системи збірок призначені для запуску зовнішніх програм через Sublime. На основі
систем збірок можна до прикладу зробити простий дебагер javascript, який буде
виводити у вбудовану консоль помилки і console.log(). По суті, це пускач скрипта,
він може замінити собою браузерну консоль для роботи з одним файлом js.
Для робити потрібен встановлений node.

1. В директорії користувача створити файл JavaScript.sublime-build із наступним
вмістом:
```js
{
  "cmd": ["node", "$file"],
  "selector": "source.js"
}
```

2. Tools > Build System, вибрати JavaScript

3. Відкрити потрібний файл і Tools > Build або CTRL+B


Встановлення пакунків                                 <i id="packages-inst"></i>
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


Пакунки                                                    <i id="packages"></i>
--------------------------------------------------------------------------------

### Список пакунків                                   <i id="packages-list"></i>

#### "Системні"                                    <i id="packages-group-1"></i>

A File Icon                        AFI візуалізація значків файлів

AdvancedNewFile                    ANF зручне створення/видалення/перейменування
                                       файлів і тек

LiveReload                         LRl автоматичне перезавантаження браузера при
                                       збереженні змін в HTML/CSS/JS/SCSS/SASS

View In Browser                    ViB відкриття активного файлу у браузері

Clickable URLs                     CUs підсвітка посилань і можливість їх
                                       відкриття в браузері

Terminal                           Trl дозволяє відкрити термінал через Sublime
                                       в теці поточного документу або кореневій
                                       теці проекту

Terminus                           Trs емулятор термінала

SideBarEnhancements                SBE розширення функціоналу бічної панелі

FindKeyConflicts                   FKC пошук конфліктів комбінацій клавіш

PackageResourceViewer              PRV надає інструменти для роботи зі
                                       встановленими пакунками

CommandsBrowser                    CoB надає перелік доступних команд і коротку
                                       документацію по ним

LockTab                            LoT блокування вкладок (заборона закриття)

TabsExtra                          TsE розширене контекстне меню для вкладок

Origami                            Ori пакунок дозволяє створювати довільні
                                       групи вкладок і надає зручну по них
                                       навігацію

Debugger                           Deb надає інструменти для відлагодження коду

WordCount                          WoC додає в рядок стану інформацію по
                                       кількості слів, сторінок тощо

Clipboard History                  ClH менеджер буферу обміну

Tagify                             Tgf дозволяє вставляти мітки в коді
                                       py/html/htm/js і потім виводити список
                                       міток у окрему вкладку. Мітки і список
                                       мов можна розширювати.

Random Everything                  REg генерування випадкових значень: пошт, дат
                                       тощо

Inc-Dec-Value                      IDV збільшення/зменшення цифр, кольорів, букв
                                       у словах на великі/малі, true на false
                                       тощо. Можна створити власний словник
                                       замін.

SFTP                               FTP дозволяє використовувати передачу даних
                                       по ftp


#### Підсвічування синтаксису                      <i id="packages-group-2"></i>

Pug                                Pug підсвітка синтиксису pug

CSS3                               CS3 підсвітка синтаксису css3, підказки

SASS                               SAS підсвітка синтаксису sass/scss

SCSS                               SCS підсвітка синтаксису scss

LESS                               LSS підсвітка синтаксису less

HTML (C#)                          HC# підсвітка фрагментів C#-коду в HTML

Babel                              Bbl підсвітка синтаксису JS/JSX

Vue Syntax Highlight               VSH підсвітка синтаксису vue

Dockerfile Syntax Highlighting     DSH підсвітка синтаксису в Dockerfile

nginx                              ngi підсвітка синтаксису конфігураційних
                                       файлів Nginx

DotENV                             Dot підсвідка синтаксису .env-файлів

GraphQL                            GQL підсвітка синтаксису GraphQL

StyleToken                         StT підсвітка довільних фрагментів коду для
                                       пошуку співпадінь і орієнтування в коді

TrailingSpaces                     TSs підсвітка зайвих пробілів в кінці рядків,
                                       можливість їх видалити при збереженні
                                       документа

BracketHighlighter                 BHl підсвітка дужок, лапок і тегів

Color Highlight                    CHt підсвічування кольорів

Color Highlighter                  CHr підсвічування кольорів, палітра кольорів, 
                                       конвертер форматів


#### Вирівнювання                                  <i id="packages-group-3"></i>

HTML-CSS-JS Prettify               HPr вирівнювання відступів у файлах HTML/CSS/
                                       JS/JSON/React/JSX/Vue, демініфікує
                                       мініфіковані файли

Alignment                          Alm вирівнювання пари ключ-значення CSS/JS/
                                       JSON по розділовому знаку

AlignTab                           AlT вирівнювання тексту за допомогою
                                       регулярок, доступна опція табличного
                                       вирівнювання

Markdown Table Formatter           MTF вирівнювання таблиць у файлах markdown

JsPrettier                         JsP Вирівнювання коду багатьох мов у стилі,
                                       який використовує Prettier
                                       (https://prettier.io)


#### Підказки                                      <i id="packages-group-4"></i>

All Autocomplete                   AAc робить підказки, спираючись на усі
                                       відкриті файли

AutoFileName                       AFN робить підказки для шляхів і назв файлів
                                       при їх підключенні

Nodejs                             Njs підказки для Node.js + команди для
                                       запуску рушія

jQuery                             jQu підказки-автокомпліти для jQuery

SublimeCodeIntel                   SCI авокомпліти стандартних функцій багатьох
                                       мов програмування + у контекстному меню
                                       перехід у файл / на рядок з оголошенням
                                       функції


#### Перевірка коду (лінтери)                      <i id="packages-group-5"></i>

SublimeLinter                      SuL фреймворк для перевірки синтаксису коду,
                                       не має власних лінтерів

SublimeLinter-json                 SLj перевірка синтаксису JSON

SublimeLinter-pug-lint             SLp перевірка синтаксису Pug

SublimeLinter-stylelint            SLs перевірка синтаксису CSS/SCSS/Sass/Less/
                                       SugarSS/CSS в HTML, Markdown та CSS-in-JS
                                       object та template literals, HTML, Vue,
                                       Markdown

SublimeLinter-eslint               SLe перевірка синтаксису JavaScript

SublimeLinter-contrib-HTMLHint     ScH перевірка синтаксису HTML

SublimeLinter-annotations          SLa comments such as FIXME, NOTE, TODO, @todo,
                                       XXX, and README. It will be used with all
                                       files.

SublimeLinter-contrib-markdownlint SLm перевірка синтаксису markdown


#### Система контролю версій                       <i id="packages-group-6"></i>

FileDiffs                          FDs порівняння файлів і пошук у них
                                       відмінностей

Git                                Git додає в редактор основні команди Git

SideBarGit                         SBG додає в контекстне меню файлів/тек пункт
                                       "Git"

Git Gutter                         GGr підсвічує змінені рядки, видає по них
                                       коротку інформацію, виводить попап з
                                       порівнянням змін

gist                               gst надає доступ до гістів з GitHub

Sublimerge3                        SM3 надає можливість порівнювати версії
                                       файлів і вирішувати конфлікти злиття


#### Різне                                         <i id="packages-group-7"></i>

CSSComb                            CCb сортування властивостей у заданій
                                       послідовності у файлах css/scss/sass/less

Console Wrap                       CoW створення і робота з логуючими виразами в
                                       Python/JS/PHP/Go

HTML Minifier                      HMr мініфікатор HTML/CSS/JS. Може зберегти
                                       результат у поточний файл або створити
                                       новий з префіксом .min

HTML Nest Comments                 HNC в стандартному HTML не можна закоментувати
                                       код, в якому уже є коменти. Цей плагін
                                       виправляє дану проблему.

Can I Use                          CIU перевірка css-властивостей на сайті
                                       https://caniuse.com

Goto-CSS-Declaration               GCD пошук css-декларацій у відкритих файлах
                                       css/scss/sass/less

DocBlockr                          DBr створення коментарів у форматі DocBlock
                                       для JS/PHP/CoffeeScript/Actionscript/
                                       TypeScript/C/C++/Objective C/Haxe/Java/
                                       Apex/Groovy/Rust

Autoprefixer                       APr додає вендорні префікси в CSS/SCSS

MarkdownPreview                    MPw показує в браузері, як виглядає md-файл.
                                   Має інтеграцію з LiveReload

Markdown HTML Preview              MHP відкриває браузер і показує, як виглядає
                                       md-файл

ClickableRequires                  CRs дозволяє швидко відкрити імпортовані
                                       модулі (required/imported) javascript/
                                       typescript/coffeescript

EditorConfig                       ECg стандартизація синтаксису в проектах, які
                                       ведуть різні розробники з різними IDE

PlainTasks                         PTs організація todo-листів

Tag                                Tag набір пакетів для роботи з HTML

Table Editor                       TaE дозволяє зручно створювати і корегувати
                                       текстові таблиці

MarkdownEditing                    MEg надає засоби для роботи з markdown

Emmet                              Emm дозволяє створювати розмітку за
                                       скороченими інструкціями у більшості
                                       популярних розширенях файлів


### Детальний огляд пакунків                         <i id="packages-intro"></i>

#### A File Icon                                                <i id="AFI"></i>

версія:      3.24.1
автор:       ihodev, DeathAxe
посилання:   https://packagecontrol.io/packages/A%20File%20Icon
             https://github.com/SublimeText/AFileIcon
призначення: додає іконки до файлів відповідно їх mime-типу
залежності:  немає


##### Меню A File Icon

Preferences ▶ Package Settings ▶ A File Icon.


##### Налаштування A File Icon

color             колір заливки для іконок

color_on_hover    колір іконок при наведенні курсору. Працює не коректно: після
                  відведення курсору колір не відновлюється

color_on_select   колір іконки при кліку по файлу

opacity           прозорість іконки

opacity_on_hover  прозорість іконки при наведенні курсору

opacity_on_select прозорість іконки при виборі файлу

size              розмір іконки

row_padding       масив з двох значень - відступів зліва і зверху 

aliases           By default the package provides syntax aliases to apply such
                  icons as "Gulpfile.js", "webpack.config.js", "package.json"
                  and etc. If you don't want to use them you can apply icons for
                  syntaxes only via setting this option to "false".

force_mode        Set "true" to use icons provided by the package if your theme
                  supports icon customization (icons provided by the theme will
                  be used by default).

dev_mode          Set "true" when developing or debugging the package

dev_trace         A list of tags to filter the output of logging. Only takes its
                  effect when "dev_mode" is "true".


#### AdvancedNewFile                                            <i id="ANF"></i>

версія:      1.7.0
автор:       SublimeText
посилання:   https://packagecontrol.io/packages/AdvancedNewFile
             https://github.com/SublimeText/AdvancedNewFile
призначення: додає зручний інструментарій для роботи з файлами і теками
             (створення/видалення/перейменування).
залежності:  немає

За замовчуванням файл створюється в директорії, яка є найвищою в ієрархії у
поточному вікні, якщо такої нема, буде використана домашня директорія.


##### Меню AdvancedNewFile

Preferences ▶ Packages Settings ▶ AdvancedNewFile


##### Налаштування AdvancedNewFile

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
                            використовувати назву теки чи назву, указану в
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

rename_default              шлях, який буде вставлений в інпут при перейменуванні
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

append_extension_on_copy    чи буде при копіюванні файла автоматично додаватися
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

Приклад частини файлу .sublime-project:
```json
"settings": {
  "AdvancedNewFile": {
    "default_initial": "/project/specific/path"
  }
}
```

##### Команди AdvancedNewFile

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


#### Alignment                                                  <i id="Alm"></i>

версія:      2.1.0
автор:       Will Bond (wbond)
посилання:   https://packagecontrol.io/packages/Alignment
             https://github.com/wbond/sublime_alignment
             http://wbond.net/sublime_packages/alignment
призначення: вирівнювання пар ключ-значення
залежності:  немає

Пакунок крім стандартного файлу налаштувань додатково створює
CSS.sublime-settings, JSON.sublime-settings та Javascript.sublime-settings.


##### Меню Alignment

Preferences ▶ Package Settings ▶ Alignment


##### Налаштування Alignment (/User/Base File.sublime-settings)

align_indent           чи слід вирівняти рівень відступу багаторядкового
                       виділення. Приклад до вирівнювання:
                       
                       a.marginalias {
                         font-weight: 900;
                         letter-spacing: 2px;
                         position: relative;
                         bottom: 5px;
                         display: inline-block;
                         text-indent: 0;
                         -webkit-transform: scale(0.8);
                             -ms-transform: scale(0.8);
                                 transform: scale(0.8);
                       }

                       Якщо true:
                       a.marginalias {
                                 font-weight: 900;
                                 letter-spacing: 2px;
                                 position: relative;
                                 bottom: 5px;
                                 display: inline-block;
                                 text-indent: 0;
                                 -webkit-transform: scale(0.8);
                                 -ms-transform: scale(0.8);
                                 transform: scale(0.8);
                       }
                       
                       якщо false:
                       a.marginalias {
                         font-weight      : 900;
                         letter-spacing   : 2px;
                         position         : relative;
                         bottom           : 5px;
                         display          : inline-block;
                         text-indent      : 0;
                         -webkit-transform: scale(0.8);
                             -ms-transform: scale(0.8);
                                 transform: scale(0.8);
                       }
                       true

mid_line_tabs          потрібно виставити в true, якщо вирівнювання здійснюється
                       за допомогою табів, а не пробілів. Це також спричинить
                       вирівнювання багатосимвольних операторів за лівим краєм
                       до першого символу в операторі замість символу з
                       параметра "alignment_chars". 
                       false

alignment_chars        Символи середнього рядка для вирівнювання в
                       багаторядковому виділенні, зміна на порожній масив вимкне
                       вирівнювання по середньому рядку
                       Якщо масив пустий:
                       a.marginalias {
                         font-weight: 900;
                         letter-spacing: 2px;
                         position: relative;
                         bottom: 5px;
                         display: inline-block;
                         text-indent: 0;
                         -webkit-transform: scale(0.8);
                         -ms-transform: scale(0.8);
                         transform: scale(0.8);
                       }
                       ["="]

alignment_space_chars  якщо наступний символ знайдено для вирівнювання, вставити
                       пробіл перед ним у остаточному вирівнюванні
                       ["="]

alignment_prefix_chars The characters to align along with "alignment_chars" For
                       instance if the = is to be aligned, there are a number of
                       symbols that can be combined with the = to make an
                       operator, and all of those must be kept next to the = for
                       the operator to be parsed
                       ```text
                       [ "+", "-", "&", "|", "<", ">", "!", "~", "%", "/", "*", "." ]
                       ```


##### Команди Alignment

alignment                               -
                                        Ctrl+Alt+a
                                        вирівняти по розділовому знаку


#### AlignTab                                                   <i id="AlT"></i>

версія:      2.1.11
автор:       randy3k
посилання:   https://packagecontrol.io/packages/AlignTab
             https://github.com/randy3k/AlignTab
призначення: вирівнювання тексту за допомогою регулярок
залежності:  немає

Пакунок дозволяє вирівнювати текст за різними символами, самостійно визначати
символи вирівнювання (або регулярки), редагувати контекстне меню.

Детальніше про регулярки:
https://github.com/randy3k/AlignTab/wiki/Examples


##### Меню AlignTab

Preferences ▶ Package Settings ▶ AlignTab
Context ▶ AlignTab


##### Налаштування AlignTab

named_patterns об'єкт, в якому ключами є довільні зручні назви, а значеннями -
               регулярки для вирівнювання. Ці назви можна вводити у вікно запиту
               замість регулярок, коли пакунок запитує шаблон для вирівнювання.


##### Команди AlignTab

align_tab            AlignTab
                     пакунок пропонує ввести регулярку, по якій буде
                     здійснюватися вирівнювання, а потім вирівнює текст

align_tab            AlignTab: Table Mode
                     args: {"mode" : true}
                     пакунок пропонує ввести регулярку, по якій буде
                     здійснюватися табличне вирівнювання, а потім вирівнює текст
                     як таблицю

align_tab            AlignTab: Live Preview Mode
                     args: {"live_preview" : true}
                     пакунок вирівнює текст на свій розсуд

align_tab_clear_mode AlignTab: Exit Table Mode


#### All Autocomplete                                           <i id="AAc"></i>

версія:      2019.06.11.03.44.42
автор:       alienhard
посилання:   https://packagecontrol.io/packages/All%20Autocomplete
             https://github.com/alienhard/SublimeAllAutocomplete
призначення: підказки на основі вмісту відкритих файлів
залежності:  немає

Робить підказки, спираючись на усі відкриті файли (Sublime шукає підказки тільки
в активному файлі).


##### Меню All Autocomplete

Preferences ▶ Package Settings ▶ All Autocomplete


##### Налаштування All Autocomplete

exclude_from_completion масив розширень файлів, у яких пакунок не працюватиме.
                        Може бути частковим рядком, тобто css підійде і для scss

exclude_sources         масив синтаксисів Sublime, у файлах яких пакунок не
                        працюватиме

max_word_size           не показувати підказки, якщо в слові надруковано більше
                        букв

min_word_size           не показувати підказки, якщо в слові надруковано менше
                        букв


Приклад файлу налаштувань:

```json
"exclude_from_completion": [
    "css",
    "js"
],
"exclude_sources": [
  "markdown"
],
"min_word_size": 5,
"max_word_size": 40
```


#### AutoFileName                                               <i id="AFN"></i>

версія:      2014.01.13.07.57.49 
автор:       liamcain
посилання:   https://packagecontrol.io/packages/AutoFileName
             https://github.com/liamcain/AutoFileName
призначення: підказки для шляхів і назв файлів при їх підключенні 
залежності:  немає

##### Меню AutoFileName

Preferences ▶ Package Settings ▶ AutoFileName


##### Налаштування AutoFileName

afn_blacklist_scopes    масив з областями видимості, які не мають права
                        запускати пакунок
                        ["string.regexp.js"]

afn_insert_dimensions   чи потрібно вставляти розміри картинки в тег img
                        (height="" width="")
                        true

afn_insert_width_first  спочатку вказувати ширину, а потім висоту кантинки в
                        тезі img
                        false

afn_proj_root           вказати вручну корінь проекту, працює лише, коли
                        afn_use_project_root виставлений в true, може бути
                        абсолютним або відносним
                        "../"

afn_template_languages  встановити true, якщо використовується шаблонна мова,
                        така як Slim, і є потреба вставити розміри картинки.
                        Також треба вказати мову у дозволених областях видимості
                        false

afn_use_keybinding      виклик підказок тільки по команді від клавіатурного
                        скорочення. Якщо встановити true, у файлі з 
                        клавіатурними скороченнями потібно прописати комбінацію

                        клавіш: 
```json
{ "keys": ["whatever"], "command": "afn_show_filenames",
  "context":
  [
    { "key": "afn_use_keybinding", "operator": "equal", "operand": true }
  ]
 }
```
                        false

afn_use_project_root    формувати абсолютний шлях від кореня проекту, а не
                        кореня диску
                        false

afn_valid_scopes        масив з областями видимості, які запускатимуть пакунок
                        ["string","css","sass","less","scss"]


##### Команди AutoFileName

open_file          AutoFileName: Default Settings
                   відкриває файл налаштувань
                   args:
                     {"file": "${packages}/AutoFileName/autofilename.sublime-settings"}

afn_settings_panel AutoFileName: Quick Settings
                   відкриває панель швидких налаштувань


#### Autoprefixer                                               <i id="APr"></i>

версія:      1.1.0
автор:       sindresorhus
посилання:   https://packagecontrol.io/packages/Autoprefixer
             https://github.com/sindresorhus/sublime-autoprefixer
призначення: додає вендорні префікси в CSS/SCSS
залежності:  Node.js

Якщо пакунок видає помилку, потрібно зайти в його директорію node_modules і
оновити пакети.


##### Меню Autoprefixer

preferences ▶ Package Settings ▶ Autoprefixer


##### Налаштування Autoprefixer

https://github.com/postcss/autoprefixer#options

browsers     масив браузерів, сформований в стилі browserslist
             (https://github.com/browserslist/browserslist)
             ["defaults"]

cascade      використовувати візуальний каскад, якщо css не мініфікований
             true

flexbox      додавати префікси для властивостей flexbox. true/false/"no-2009"
             Якщо "no-2009" - додати лише префікси для остаточної та IE версії
             специфікації
             true

grid         додавати IE-префікси для grid layout
             true

prefixOnSave Run Autoprefixer on file save
             false

remove       видаляти застарілі прафікси
             true

supports     додавати префікси до @supports-параметрів
             true


Пакунок можна налаштувати для окремого проекту у файлі налаштувань проекту:

```json
{
  "settings": {
    "Autoprefixer": {
      "browsers": [
        "last 1 version"
      ]
    }
  }
}
```


##### Команди Autoprefixer

autoprefixer Autoprefix CSS
             вставити вендорні префікси


#### Babel                                                      <i id="Bbl"></i>

версія:      11.2.0
автор:       babel
посилання:   https://packagecontrol.io/packages/Babel
             https://github.com/babel/babel-sublime/issues
             https://babeljs.io/
призначення: підсвітка синтаксису JS/JSX
залежності:  вимагає увімкненого стандартного пакунку CSS. (CSS3, навпаки,
             рекомендує його вимикати)


#### BracketHighlighter                                         <i id="BHl"></i>

версія:      2.30.1
автор:       facelessuser
посилання:   https://packagecontrol.io/packages/BracketHighlighter
             https://github.com/facelessuser/BracketHighlighter
             https://facelessuser.github.io/BracketHighlighter
призначення: підсвітка дужок
залежності:  немає

Налаштувань дуже багато, тут не всі. Детальніше:
https://facelessuser.github.io/BracketHighlighter/customize/


##### Меню BracketHighlighter

Tools ▶ Packages ▶ BracketHighlighter
Preferences ▶ Package Settings ▶ BracketHighlighter.


##### Налаштування BracketHighlighter

Дефолтні підсвічування Sublime можуть конфліктувати з пакунком. Раніше для
уникнення цього потрібно було відключати опції Sublime: match_brackets,
match_brackets_angle, match_brackets_braces, match_brackets_content,
match_brackets_square, match_tags. Наразі це не потрібно, але треба змінити
опції кольорової схеми. Для цього в директорії користувача створюється файл з
назвою схеми і розширенням .sublime-color-scheme, наприклад
Color Scheme - Default.sublime-color-scheme, в цей файл вписуються наступні
значення:

```json
{
  "variables": {},
  "globals":
  {
    "bracket_contents_options": "none",
    "brackets_options": "none",
    "tags_options": "none"
  },
  "rules": []
}
```
!!! При створенні файлу Monokai.sublime-color-scheme виникали глюки, тому опції
прописав у файлі Data/Packages/Color Scheme - Default/Monokai.sublime-color-scheme


###### Налаштування файлу User/bh_core.sublime-settings

show_in_minimap                    показ дужки на мінікарті (крім underline)
                                   false

show_unmatched                     підсвітка не парної дужки
                                   true

show_unmatched_exceptions          список мов, у яких поведінка show_unmatched
                                   буде навпаки
                                   Array of Strings

content_highlight_bar              експериментальна опція, показує вертикальну
                                   лінію від дужки до дужки.
                                   false

align_content_highlight_bar        визначає, де буде відображатися лінія,
                                   увімкнена опцією content_highlight_bar
                                   true - враховує вкладеності дужок
                                   false - лінія завжи прибита до лівого краю
                                   false

search_in_widgets                  експериментальна опція, підсвічує дужки у
                                   віджетах/панелях.
                                   false

bracket_highlighter.ignore         для розробників, якщо потрібно, щоб створювана
                                   розробником панель не мала підсвітки дужок
                                   Boolean (True)

high_visibility_enabled_by_default вмикає режим підвищеної видимості (вміст
                                   дужок береться в рамку), потребує перезапуску
                                   Boolean (false)

high_visibility_style              стилізація режиму підвищеної видимості
                                   solid, outline, underline, thin_underline,
                                   squiggly, stippled

high_visibility_color              стилізація режиму підвищеної видимості (колір)
                                   __default__, __bracket__, будь-який колір,
                                   доступний через scope

match_only_adjacent                підсвітка дужок, тільки якщо курсор біля дужки

bracket_outside_adjacent           підсвітка дужок, тільки якщо курсор біля
                                   дужки ззовні
                                   false

block_cursor_mode                  експериментальна опція, підсвітка дужок,
                                   тільки якщо курсор впритул перед дужкою,
                                   ігнорує bracket_outside_adjacent
                                   false

bracket_string_escape_mode         визначає логіку пошуку дужок
                                   string: шукає, як у текстовому рядку
                                   regex: шукає, як у регулярці
                                   "string"

search_threshold                   поріг пошуку у символах, ця властивість
                                   впливає тільки на автоматичний пошук, а не
                                   ручні виклики
                                   5000

ignore_threshold                   ігногує поріг пошуку і шукає до кінця
                                   false

auto_selection_threshold           кількість одночасно підсвічуваних дужок
                                   10

kill_highlight_on_threshold        виключає підсвітку при перевищенні ліміту
                                   auto_selection_threshold
                                   true

gutter_icons                       дозволяє/забороняє іконки
                                   true

no_multi_select_icons              вимикає підсвітку дужок при мультикурсорах
                                   false

show_offscreen_bracket_popup       показує попап з інформацією про дужку і
                                   область між дужками, якщо одна з дужок 
                                   знаходиться за зоною видамості, для появи
                                   попапу потрібно перенести курсор впритул до
                                   дужки і навести мишку на дужку
                                   true

show_bracket_popup_always          показує попап з інформацією про дужки, навіть
                                   якщо обидві дужки у області видимості
                                   false

popup_char_context                 визначає кількість символів на рядок
                                   контексту спливаючого вікна
                                   120

popup_line_context                 визначає кількість рядків контексту
                                   спливаючого вікна, тільки якщо одна з дужок
                                   поза зоною видимості. Рекомендується
                                   використовувати парні числа
                                   2

use_custom_popup_bracket_emphasis  експериментальна опція, дозволяє використання
                                   опції зміни кольору не видимої дужки в попапі
                                   false

popup_bracket_emphasis             визначає колір не видимої дужки в попапі,
                                   може бути взятий зі scope, або визначений
                                   вручну у форматах #rgb або #rrggbb
                                   "keyword"

debug_enable                       вмиакає/вимикає режим відладки (логування)

brackets                           відповідає за конфігурацію дужок, об'єкт з
                                   ключами:
                                     name: унікальне ім'я дужки
                                     open: відкриваюча дужка
                                     close: закриваюча дужка
                                     style: ім'я стилю підсвітки
                                     scope_exclude: масив scope, які ігнорують
                                       дужки
                                     scope_exclude_exceptions: ігнорування
                                       виключення підобластей
                                     language_filter: визначає, чим є
                                       language_list - білим чи чорним листом
                                     language_list: масив імен файлів мов для
                                       підсвічування
                                     plugin_library: плагін для пошуку співпадінь
                                     find_in_sub_search: This rule should be
                                       included when doing sub bracket matching
                                       in scope_brackets (like finding round
                                       brackets between quotes etc.). The
                                       setting must be a string and can be
                                       either true, false, or only; only means
                                       this bracket is only matched as a sub
                                       bracket of a scope_bracket.
                                     ignore_string_escape: Do not ignore sub
                                       brackets found in strings and regex when
                                       escaped, but use internal escape logic to
                                       determine if the brackets should be
                                       ignored based on whether regex or string
                                       escape mode is set.
                                     enabled: увімкнути/викнути правило

scope_brackets                     ??? об'єкт з ключами: name, open, close,
                                   style, scopes, language_filter, language_list,
                                   sub_bracket_search, enabled, plugin_library


###### Налаштування файлу User/bh_tag.sublime-settings

tag_mode                           список різних режимів, оцінюється з верху до
                                   низу і вибирає перший режим, який задовольняє
                                   усі умови. Кожен елемент списку має ключі:
                                     mode: ім'я
                                     syntax: масив з мовами, доступними в режимі
                                     first_line (опційно): регулярка, яка
                                       співставляється з першим рядком файла для
                                       застосування режиму до файла

tag_style                          визначає стиль підсвітки, це значення має
                                   корелюватися з опцією bracket_styles

tag_scope_exclude                  виключає певні scope під час пошуку тегів

optional_tag_patterns              визначає регулярки для тегів з не
                                   обов'язковим закриваючим тегом

void_tag_patterns                  визначає регулярки для тегів, які ніколи не
                                   мають закриваючого тегу

self_closing_tag_patterns          визначає регулярки для одинарних тегів, які
                                   можуть самозакриватися: <tag/>

tag_name                           визначає регулярки для ідентифікації імені
                                   тега для визначеного режиму

attributes                         визначає регулярки для ідентифікації
                                   атрибутів для визначеного режиму

start_tag                          визначає регулярку для відкриваючого тегу

end_tag                            визначає регулярку для закриваючого тегу


###### Налаштування файлу User/bh_swapping.sublime-settings

https://facelessuser.github.io/BracketHighlighter/customize/#swap-brackets-plugin-settings


###### Налаштування файлу User/bh_wrapping.sublime-settings

https://facelessuser.github.io/BracketHighlighter/customize/#wrap-brackets-plugin-settings


##### Команди BracketHighlighter

bh_toggle_enable              BracketHighlighter: Toggle Global Enable
                              вмикає/вимикає пакунок

bh_remove_brackets            BracketHighlighter: Remove Brackets
                              виводить попап з варіантами видаленн дужок

swap_brackets                 BracketHighlighter: Swap Brackets
                              ???

wrap_brackets                 BracketHighlighter: Wrap Selections with Brackets
                              огортає виділення дужками (попап)

bh_offscreen_popup            BracketHighlighter: Find Matching Offscreen Bracket
                              ??? (попап)

bh_async_key                  BracketHighlighter: Match Brackets (ignore threshold)
                              BracketHighlighter: Jump to Left Bracket
                              BracketHighlighter: Jump to Right Bracket
                              BracketHighlighter: Select Bracket Content
                              BracketHighlighter: Select Bracket Content with Brackets
                              BracketHighlighter: Fold Bracket Content
                              BracketHighlighter: Select Tag Name (closing and opening)
                              BracketHighlighter: Select Next Attribute (right)
                              BracketHighlighter: Select Next Attribute (left)
                              BracketHighlighter: Swap Quotes
                              args:
                                lines, no_outside_adj, no_block_mode, lines,
                                plugin

edit_settings                 BracketHighlighter: Settings
                              BracketHighlighter: Tag Settings
                              BracketHighlighter: Wrap Settings
                              BracketHighlighter: Swap Settings
                              args:
                                base_file, default

bh_toggle_string_escape_mode  BracketHighlighter: Toggle String Bracket Escape Mode
                              перемикається між режимами рядок/регулярка

bh_toggle_high_visibility     BracketHighlighter: Toggle High Visibility Mode
                              перемикає режим підвищеної видимості

bracket_highlighter_open_site BracketHighlighter: Documentation
                              відкриває сайт пакунку
                              args:
                                url: адреса сайта

bracket_highlighter_doc       BracketHighlighter: Quick Start Guide
                              відкриває md-файл з початковою інструкцією
                              args:
                                page: адреса файлу

bh_debug                      BracketHighlighter: Enable Debug Mode
                              BracketHighlighter: Disable Debug Mode
                              вмикає/вимикає режим відлагодження
                              args:
                                set_value: Boolean

bh_debug_rule                  (Debug) Filter Rules by Key
                               ???
                               args:
                                 filter_key: Boolean

bh_debug_rule                  (Debug) Show Merged Rules
                               ???


#### Can I Use                                                  <i id="CIU"></i>

версія:      2016.03.03.18.21.48
автор:       Azd325
посилання:   https://packagecontrol.io/packages/Can%20I%20Use
             https://github.com/Azd325/sublime-text-caniuse/
             http://azd325.github.io/sublime-text-caniuse/
призначення: перевірка можливості використання властивостей через сайт canIUse
залежності:  немає

Для того, щоб пакунок запрацював, необхідно зайти в користувацькі налаштування і
прописати робочий браузер.


##### Меню Can I Use

Tools ▶ Can I Use
Preferences ▶ Package Settings ▶ Can I Use
Context ▶ Can I Use…


##### Налаштування Can I Use

default_browser браузер, у якомі відкриватиметься сайт


##### Команди Can I Use

use_it -
       ctrl+alt+f (Windows)
       ctrl+alt+d (Linux)
       відкриває сайт https://caniuse.com і вводить у поле вводу виділений текст


#### Clickable URLs                                             <i id="CUs"></i>

версія:      1.4.0
автор:       leonid-shevtsov
посилання:   https://packagecontrol.io/packages/Clickable%20URLs
             https://github.com/leonid-shevtsov/ClickableUrls_SublimeText
призначення: пакунок підсвічує посилання в тексті і дозволяє їх відкривати
залежності:  немає

У Sublime в контекстному меню уже є пункт меню Open <url>, який викликає
системну команду open_context_url, на яку можна додати комбінацію клавіш. Якщо
цього достатньо, пакунок не потрібен. Проте пакунок як мінімум підсвічує
посилання в тексті і дає можливість вибрати браузер для відкриття посилання.

Плагін автоматично вимкнеться, якщо у документі 200+ посилань. Цей ліміт можна
змінити у налаштуваннях.


##### Меню Clickable URLs

Preferences ▶ Package Settings ▶ Clickable URLs


##### Налаштування Clickable URLs

max_url_limit          кількість url в документі, при яких пакунок вимикається
                       200

clickable_urls_browser браузер, який відкриє посилання. Значення - одне на вибір
                       зі списку https://docs.python.org/2/library/webbrowser.html#webbrowser.register
                       Якщо у Windows браузер не спрацьовує, потрібно прописати
                       повний шлях до exe-файла:
```json
{
  "clickable_urls_browser": "\"c:\\program files\\mozilla firefox\\firefox.exe\" %s &"
}
```

highlight_urls         вказує, чи потрібно підкреслювати посилання в тексті
                       true


##### Команди Clickable URLs

open_url_under_cursor Open URL under cursor
                      Ctrl+Alt+Enter
                      відкриває в браузері url, на якому знаходиться курсор

open_all_urls         Open all URLs
                      відкриває усі url, які є в документі


#### ClickableRequires                                          <i id="CRs"></i>

версія:      0.0.8
автор:       hajnalben
посилання:   https://packagecontrol.io/packages/ClickableRequires
             https://github.com/hajnalben/ClickableRequires
призначення: можливість переходу у файли з оголошеннями модулів
залежності:  немає

Пакунок при наведенні на директиви "require('module-name')" / "import module
from 'module'" відкриває попап із посиланням на файл, яке дозволяє його відкрити
в редакторі. Якщо файл є пакетом npm, у попапі є посилання "View on npmjs.com",
якщо файл належить до ядра Node.js, в браузері відкриється сторінка документації.


##### Меню ClickableRequires

Preferences ▶ Package Settings ▶ ClickableRequires


##### Налаштування ClickableRequires

Налаштування можна змінити у файлі ClickableRequires.sublime-settings в
директорії User.


auto_fold_imports   old lines with import when opening file
                    false

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


#### Clipboard History                                          <i id="ClH"></i>

версія:      2013.04.02.12.38.39
автор:       kemayo
посилання:   https://packagecontrol.io/packages/Clipboard%20History
             https://github.com/kemayo/sublime-text-2-clipboard-history
призначення: зручна робота з буфером обміну
залежності:  немає
проблеми:    команда clipboard_clear_history не спрацьовує, в консоль виводить
             помилку "NameError: global name 'xrange' is not defined"

Пакунок розширює стандартний буфер обміну і дозволяє зберігати в ньому багато
записів і зручно обирати потрібне. Пакунок не ставиться через менеджер пакетів,
його треба вантажити з GitHab'а та встановлювати вручну. Пакунок працює тільки
з буфером обміну всередині SublimeText і тільки з комбінацією клавіш Ctrl+C.


##### Налаштування Clipboard History

limit            максимальна кількість елементів у буфері обміну
                 30

paste_and_indent ?
                 true


##### Команди Clipboard History


clipboard_clear_history  очистити буфер
                         ctrl+alt+d

clipboard_display        Clipboard History
                         ctrl+alt+v
                         показати список збережених елементів у буфері обміну

clipboard_paste_next     paste the next (newer) history entry
                         ctrl+shift+alt+v

clipboard_paste_previous paste the previous (older) history entry
                         ctrl+shift+v


#### Color Highlight                                            <i id="CHt"></i>

версія:      1.2.2
автор:       Kronuz
посилання:   https://packagecontrol.io/packages/Color%20Highlight
             https://github.com/Kronuz/ColorHighlight
призначення: підсвітка кольорів
залежності:  немає

##### Меню Color Highlight

Tools ▶ Color Highlight
Preferences ▶ Package Settings ▶ Color Highlight Settings


##### Налаштування Color Highlight

highlight          режим роботи:
                     true: динамічна підсвітка
                     false: підсвітка викликається вручну
                     "load-save": підсвітка з'являється, коли файл завантажений
                     і збережений
                     "save-only": підсвітка з'являється, коли файл завантажений

gutter_icon        тип іконки: "circle"/"square"/"fill"/false

highlight_values   Show color by highlighting the value region
                   Boolean

named_values       підсвічує назви кольорів
                   Boolean

hex_values         підсвічує кольори у форматі hex #RRGGBBAA
                   Boolean

0x_hex_values      підсвічує кольори у форматі 0xRRGGBBAA
                   Boolean

xterm_color_values підсвічує кольори у форматі xterm
                   Boolean

rgb_values         підсвічує кольори у форматі rgb
                   Boolean

hsv_values         підсвічує кольори у форматі hsv
                   Boolean

hsl_values         підсвічує кольори у форматі hsl
                   Boolean

hwb_values         підсвічує кольори у форматі hwb
                   Boolean

lab_values         підсвічує кольори у форматі lab
                   Boolean

lch_values         підсвічує кольори у форматі lch
                   Boolean


##### Команди Color Highlight

color_highlight                  Color Highlight: Color Highlight Current File /
                                 Color Highlight: Reset
                                 підсвітити поточний файл / скинути підсвітку
                                 кольорів
                                 args:
                                   action: "highlight" - підсвітити, "reset" -
                                     скинути

color_highlight_enable_load_save Color Highlight: Load-Save Color Highlighting
                                 підсвітка кольорів з'являтиметься тільки, коли
                                 файл завантажений і збережений
                                 args:
                                   action: "load-save"

color_highlight_enable_save_only Color Highlight: Save-Only Color Highlighting
                                 підсвітка кольорів з'являтиметься тільки, коли
                                 файл завантажений
                                 args:
                                   action: "save-only"

color_highlight_disable          Color Highlight: Disable Color Highlighting
                                 відключає живе оновлення
                                 args:
                                   action: "off"

color_highlight_enable           Enable Color Highlighting
                                 підключає живе оновлення
                                 args:
                                   action: "on"

color_highlight_restore          Color Highlight: Restore Color Scheme
                                 відновити кольорову схему (прибирає підсвітку)


#### Color Highlighter                                          <i id="CHr"></i>

версія:      8.0.9
автор:       Monnoroch
посилання:   https://packagecontrol.io/packages/Color%20Highlighter
             https://github.com/Monnoroch/ColorHighlighter/
             https://sublime.wbond.net/packages/Color%20Highlighter
призначення: виклик панелі кольорів
залежності:  немає

У цього пакунка підсвічування кольорів не працює (Linux Mint Cinnamon),
доводиться використовувати Color Highlight, якщо цю проблему вдасться вирішити,
додатковий пакунок стане не потрібен.

підсвічування кольорів, палітри кольорів. В контекстному меню є Insert color
with color picker (це встановлює .NET Framework 2.0 - 3.5).
Ctrl+Shift+C - виклик панелі кольорів (аналог ColorPicker),
Ctrl+Shift+, - зміна формату кольору.


##### Меню Color Highlighter

Tools ▶ Color Highlighter
Preferences ▶ Package Settings ▶ Color Highlighter
Context ▶ Insert color with color picker       // right click
Context ▶ Convert color to the next format     // cursor on color
Context ▶ Convert color to the previous format // cursor on color


##### Налаштування Color Highlighter

див. файл налаштувань


##### Команди Color Highlighter

color_highlighter_pick_color     відкриває палітру кольорів
                                 ctrl+shift+c

color_highlighter_next_color     конвертує виділений колір у наступний формат
                                 ctrl+shift+,

color_highlighter_previous_color конвертує виділений колір у попередній формат
                                 ctrl+shift+.

color_highlighter_set_setting    встановлює параметр налаштування
                                 args:
                                   setting: ключ параметра
                                   value: значення параметра


#### CommandsBrowser                                            <i id="CoB"></i>

версія:      1.5.0
автор:       Sublime-Instincts
посилання:   https://packagecontrol.io/packages/CommandsBrowser
призначення: надає перелік доступних команд і коротку документацію по них
залежності:  немає

##### Меню CommandsBrowser

Preferences ▶ Package Settings ▶ CommandsBrowser


##### Налаштування CommandsBrowser

auto_open_doc_panel_on_navigate     автоматично відкриває панель з документацією
                                    до команд Sublime Text/Sublime Merge при
                                    навігації по списку
                                    false

copy_command_signature_modifier_key This setting allows a user to configure the
                                    modifier key that is used to copy the
                                    command signature to clipboard, when the
                                    said modifier key is held while selecting a
                                    command.
                                    "ctrl"

filter_core_commands_on_type        відфільтровування команд у залежності від
                                    типу, за замовчуванням увімкнено все
                                    ["text", "window", "application", "find"]

filter_plugin_commands_on_host      Sublime Text 4 has 2 plugin hosts. 3.3
                                    (Python 3.3.6) & 3.8 (Python 3.8.8). This
                                    setting allows a user to filter the plugi
                                    commands based on the host. Valid values are
                                    "all", "3.3" and "3.8".
                                    "all"

filter_plugin_commands_on_package   This setting allows a user to filter the
                                    plugin commands based on the package name.
                                    "all"/"PackageDev"/"User"/"OverrideAudti"
                                    "all"

filter_plugin_commands_on_type      відфільтровування команд у залежності від
                                    типу, за замовчуванням увімкнено все
                                    ["text", "window", "application"]


##### Команди CommandsBrowser

commands_browser_core_commands      CommandsBrowser: Browse available Sublime
                                    Text core commands.
                                    показує список команд Sublime Text, при
                                    виборі відкриває панель з інформацією
                                    args: { "application": "st" }

commands_browser_core_commands      CommandsBrowser: Browse available Sublime
                                    Merge core commands.
                                    показує список команд Sublime Merge, при
                                    виборі відкриває панель з інформацією
                                    args: { "application": "sm" }

commands_browser_plugin_commands_33 CommandsBrowser: Browse available
                                    Plugin/Package commands.
                                    показує список команд встановлених
                                    плагінів/пакетів, при виборі відкриває
                                    вкладку з файлом, в якому прописана команда

open_url                            CommandsBrowser: View Documentation.
                                    відкриває в браузері сторінку з
                                    документацією (readme)
                                    args: { "url": "https://github.com/Sublime-Instincts/CommandsBrowser#readme" }

open_url                            CommandsBrowser: Open Wiki.
                                    відкриває в браузері сторінку з
                                    документацією (wiki)
                                    args: { "url": "https://github.com/Sublime-Instincts/CommandsBrowser/wiki" }

show_panel                          повторно відкриває панель з інформацією про
                                    команду Sublime Text / Sublime Merge, якщо
                                    вона була закрита
                                    "ctrl+shift+c", "ctrl+shift+d"
                                    args: { "panel": "output.CommandsBrowser" }


#### Console Wrap                                               <i id="CoW"></i>

версія:      1.1.0
автор:       David Bekoyan
посилання:   https://packagecontrol.io/packages/Console%20Wrap
             https://github.com/unknownuser88/consolewrap
призначення: робота з логуючими виразами в JS, Python, PHP, Go
залежності:  немає

console.log -> info -> warn -> error


##### Меню Console Wrap

Preferences ▶ Package Settings ▶ Console Wrap
Context ▶ Console Wrap


##### Налаштування Console Wrap

Preferences ▶ Package Settings ▶ Console Wrap ▶ Settings

Є можливість вибору типу лапок, редагування виведення та асоціації типів файлів
з такими типами, які підтримують логування.


##### Команди Console Wrap

console_wrap   Console Wrap: Create logs
               Ctrl+Shift+q
               створити рядок з console.log() і вставити його рядком нижче
               args: {"insert_before": false}

               Ctrl+Shift+Alt+q
               створити рядок з console.log() і вставити його рядком вище   
               args: {"insert_before": true}            

console_action Console Wrap: Remove logs
               args: {"action": "remove"}
               видалити логи

console_action Console Wrap: Remove Commented logs
               args: {"action": "remove_commented"}
               видалити усі закоментовані логи

console_action Console Wrap: Comment logs
               args: {"action": "comment"}
               закоментувати усі логи

console_action Console Wrap: Show all logs
               args: {"action": "show_quick_nav"}
               показати панель зі списком логів


#### CSS3                                                       <i id="CS3"></i>

версія:      2.1.41
автор:       ryboe
посилання:   https://packagecontrol.io/packages/CSS3
             https://github.com/ryboe/CSS3
призначення: підсвітка синтаксису CSS
залежності:  немає

##### Налаштування CSS3

1. Пакунок вимагає вимкнення стандартного пакета CSS (або прописати у файлі
   Preferences.sublime-settings у масиві ignored_packages, або через
   PackageControll ▶ Disable Package). Якщо виключити CSS, не буде працювати
   Babel.
2. Пакунок рекомендує дозволити підказки в середині підказок.

   ```json
   "auto_complete_commit_on_tab": true,
   "auto_complete_with_fields": true,
   ```

3. Пакунок рекомендує приховати CSS-підказки пакунка Emmet.

   ```json
   "abbreviation_preview": "markup"
   ```

4. Пакунок рекомендує встановити його за замовчуванням для усіх CSS-файлів. Для
   цього потрібно відкрити CSS-файл, пройти по шляху View ▶ Syntax ▶
   Open all with current extention as… і вибрати CSS3. 


##### Команди CSS3

css3_hex_convert CSS3: Convert RGB Color To Hex
                 конвертація кольору з формату rgb у hex


#### CSSComb                                                    <i id="CCb"></i>

версія:      2017.10.06.15.57.05
автор:       csscomb
посилання:   https://packagecontrol.io/packages/CSScomb
             https://github.com/csscomb/sublime-csscomb
призначення: сортує стилі у правильній послідовності
залежності:  Node.js

If node has been installed with NVM you need to make a symlink to node in
/usr/local/bin.


##### Меню CSSComb

Tools ▶ Run CSScomb
Preferences ▶ Package Settings ▶ CSScomb
Context ▶ Run CSScomb


##### Налаштування CSSComb

Існує кілька варіантів налаштування пакунку:

1. файл .csscomb.json в кореневій теці проекту або в домашній директорії
   користувача.
2. файл /User/CSScomb.sublime-settings

детальний опис налаштувань:
https://github.com/csscomb/csscomb.js/blob/master/doc/options.md

node-path                               шлях до виконуваного файлу Node.js
                                        ":/usr/local/bin"

config                                  об'єкт з властивостями

config.always-semicolon                 чи додавати крапку з комою після
                                        останньої властивості в блоці. У файлах
                                        .scss і .less крапка з комою не
                                        додається після "}", навіть якщо це
                                        частина складеного значення, напр.
                                        ```scss
                                        div {
                                          color: tomato;
                                          font: {
                                            family: fantasy;
                                            size: 16px;
                                          }
                                        }
                                        ```
                                        ігнорується у файлах .sass
                                        true

config.block-indent                     визначає відступи у вкладених
                                        властивостях, число або рядок з
                                        пробілів/табів
                                        "    "

config.color-case                       спосіб написання кольорів - великими або
                                        малими буквами
                                        "lower"

config.color-shorthand                  якщо true - кольори приводитимуться до
                                        компактнішого написання (#ffcc00 ->
                                        #fc0), якщо false - переводитимуться у
                                        довший рядок
                                        true

config.element-case                     стиль написання тегів upper/lower
                                        "lower"

config.eof-newline                      eof: end-of-file. Додати/видалити символ
                                        переводу рядка (додати рядок) в кінець
                                        файла
                                        true

config.leading-zero                     додати/видалити початковий нуль у
                                        розмірностях (0.5em/.5em)
                                        false

config.lines-between-rulesets           кількість ліній між блоками коду {}

config.quotes                           тип лапок single/double
                                        "single"

config.remove-empty-rulesets            видаляти пусті елементи {}
                                        true

config.sort-order                       масив з властивостями або масив з
                                        масивами властивостей, визначає порядок
                                        послідовності властивостей. У файлах
                                        .scss/.less можна додатково вживати
                                        ключі:
                                        1. $variable для оголошень змінних
                                           ($var в Sass, @var в LESS)
                                        2. $include для всіх міксинів
                                           (@include … в Sass, .mixin() LESS)
                                        3. $include mixin-name іменованих
                                           міксинів (@include mixin-name в Sass,
                                           .mixin-name() в LESS)
                                        4. $extend для наслідувань (@extend .foo
                                           в Sass, &:extend(.foo) в LESS)
                                        5. $import для правил імпорту @import

                                        напр. { "sort-order": [ [ "$variable" ],
                                        [ "$include" ], [ "top", "padding" ],
                                        [ "$include media" ] ] }

                                        результат: 
                                        ```scss
                                        p {
                                          $color: tomato;

                                          @include mixin($color);

                                          top: 0;
                                          padding: 0;

                                          @include media("desktop") {
                                            color: black;
                                          }
                                        }
                                        ```

                                        Залишкові властивості, які не вказані у
                                        sort-order явно будуть вставлені в
                                        кінець у порядку їх появи в окрему
                                        групу. Для зміни розташування цієї групи
                                        можна використати "...", напр. 
                                        {"sort-order": [ ["$variable"],
                                        ["position"], ["...", "border"],
                                        ["$include"], ["font"] ]}

config.sort-order-fallback              визначає порядок сортування для залишків,
                                        які не увійшли у sort-order. Працює лише,
                                        якщо явно вказаний sort-order. Має одне
                                        значення: "abc".

config.space-after-colon                що вставлятиметься після двокрапки:
                                        число або рядок з пробілів/табів/розриву
                                        рядку
                                        " "

config.space-after-combinator           що вставлятиметься після комбінаторів:
                                        число або рядок з пробілів/табів/розриву
                                        рядку, напр. { "space-after-combinator":
                                        "\n " }
                                        результат:
                                        ```css
                                        p >
                                          a { color: panda; }
                                        ```
                                        " "

config.space-after-opening-brace        що вставлятиметься після дужки {: число
                                        або рядок з пробілів/табів/розриву рядку
                                        ігнорується у файлах .sass
                                        "\n"

config.space-after-selector-delimiter   що вставлятиметься після розділювача
                                        (коми): число або рядок з пробілів/
                                        табів/розриву рядку
                                        "\n"

config.space-before-closing-brace       що вставлятиметься перед дужкою }: число
                                        або рядок з пробілів/табів/розриву рядку
                                        ігнорується у файлах .sass
                                        "\n"

config.space-before-colon               що вставлятиметься перед двокрапкою:
                                        число або рядок з пробілів/табів/розриву
                                        рядку
                                        " "

config.space-before-combinator          що вставлятиметься після комбінаторів:
                                        число або рядок з пробілів/табів/розриву
                                        " "

config.space-before-opening-brace       що вставлятиметься перед дужкою {: число
                                        або рядок з пробілів/табів/розриву рядку
                                        ігнорується у файлах .sass
                                        "\n"

config.space-before-selector-delimiter  що вставлятиметься перед розділювачем
                                        (комою): число або рядок з пробілів/
                                        табів/розриву рядку
                                        ""

config.space-between-declarations       що вставлятиметься між парами "ключ-
                                        значення": число або рядок з пробілів/
                                        табів/розриву рядку
                                        ігнорується у файлах .sass
                                        "\n"

config.strip-spaces                     обрізка пробілів в кінці рядків
                                        true

config.tab-size                         число, вказує на кількість пробілів, які
                                        замінюють символи табуляції

config.template                         рядок, шлях до .css-файла, який
                                        сприйматиметься пакунком як зразок, з
                                        якого будуть згенеровані правила

config.unitless-zero                    видаляти розмірності, якщо величина 0
                                        ```css
                                        img { border: 0 }
                                        ```
                                        true

config.vendor-prefix-align              вирівнювання властивостей з вендорними
                                        префіксами, напр.:
                                        ```css
                                        a {
                                          -webkit-border-radius: 3px;
                                             -moz-border-radius: 3px;
                                                  border-radius: 3px;
                                          background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
                                          background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
                                          background:         linear-gradient(to bottom, #fff 0, #eee 100%);
                                        }
                                        ```
                                        true

config.exclude                          файли і директорії, які не треба
                                        облобляти, напр.
                                        ```
                                        ["node_modules/**"]
                                        ```

config.verbose                          чи використовувати в CLI прапор --verbose
                                        true


##### Команди CSSComb

css_comb Run CSScomb
         ctrl+shift+c
         відсортувати властивості css


#### Debugger                                                   <i id="Deb"></i>

версія:      0.10.1
автор:       daveleroy
посилання:   https://packagecontrol.io/packages/Debugger
             https://github.com/daveleroy/SublimeDebugger
призначення: надає інструментарій для відлагодження коду
залежності:  ???

!!! З пакунком не дорозібрався. Адаптер для firefox мені здався не практичним, бо той самий дебаг можна робити через сам браузер, а робота через дебаггер не зручна, крім того attach видає помилки. З другим адаптером взагалі не розбирався, бо для перевірки його роботи треба запустити нормальний nodejs-проект і уже по факту розробки проекту тестити роботу дебагера.

Пакунок дозволяє проводити налагодження коду. Для роботи потрібно встановити
адаптери на вибір. Для JS актуальньними є 
vscode-firefox-debug (https://github.com/firefox-devtools/vscode-firefox-debug) та 
vscode-js-debug (https://github.com/microsoft/vscode-js-debug)

Пакунок приймає усі стандартні змінні Sublime, такі як ${file}, та специфічну
змінну VSCode ${workspaceFolder}.

vscode-firefox-debug:

В документації написано, що властиості прописуються у файлі .vscode/launch.json, але це стосується тільки VSCode, для Sublime потрібно прописувати все у файлі проекту по плючу "debugger_configurations".

Може запускатися у двох варіантах: "request" : "launch | attach".
Launch-мод передбачає відкриття Firefox. Повторний запуск дебагу закриває Firefox і відкриває його наново. Щоб кожного разу не перезапускати браузер, можна дописати "reAttach": true, але я не помітив позитивного ефекту: браузер перезапускається, в консолі з'являється напис "Debugging ended", але всі console.log() спрацьовують тільки при апершому запуску.


Властивості конфігураційного файлу:

name         назва конфігурації, потрібна для відображенні в списку еонфігурацій
             дебагера
             string

type         тип використовуваного адаптера, напр. "firefox"
             string

request      мод "launch" або "attach"
             string

reAttach     для launch-моду запобігає постійному перезапуску браузеру
             boolean

file         шлях до файлу, який потрібно відлагодити, напр.
             "${workspaceFolder}/index.html"
             string

url          адреса сервера (якщо відлагодження іде наприклад через localhost),
             "file" у такому випадку не потрібен. Напр.
             "http://localhost/index.html". Url може вказувати на директорію,
             тоді рядок адреси повинен закінчуватися слешом
             string

webRoot      коренева тека проекту при відлагодженні через сервер (з "url"),
             напр. "${workspaceFolder}"
             string

pathMappings розширений опис кореневої теки, використовується замість "webRoot".
             Потрібен тоді, коли configurations.url вказує на піддиректорію
             проекту. Має 2 властивості: "url" i "path", напр.
             [{"url": "http://localhost","path": "${workspaceFolder}"}]
             array with object

firefoxExecutable шлях до виконуваного файлу браузера, string

Attach-мод передбачає приєднання дебагера до уже відкритої Firefox, в якій увімкнено віддалений дебаг. Для цього потрібно у рядку адреси браузера ввести "about:config" та встановити наступні значення властивостей:

devtools.debugger.remote-enabled    true
devtools.chrome.enabled             true
devtools.debugger.prompt-connection false (рекомендовано)
devtools.debugger.force-local       false (Set this only if you want to attach VS Code to Firefox running on a different machine (using the host property in the attach configuration))

потім потрібно через термінал запустити браузер:
windows: "C:\Program Files\Mozilla Firefox\firefox.exe" -start-debugger-server
linux: firefox -start-debugger-server

і в конфігурації змінити "request" на "attach"

При спробі запуску attach-мода в консолі вибиває помилку [ERROR glean_core] Error setting metrics feature config: Json(Error("EOF while parsing a value", line: 1, column: 0)), відкривається firefox, але в його внутрішньому дебагу нема файлів проекту, щоб дебажити в браузері, а в консолі debugger при запуску дебага не відображається жодної console.log(), тільки повідомлення "Debugging ended".

Attach-мод також підтримує властивості url та webRoot, якщо треба проводити відлагодження через сервер.



##### Меню Debugger

▶


##### Налаштування Debugger

setting_name пояснення налаштування
               варіант 1: пояснення
                 lorem
               варіант 2: пояснення
                 lorem
             type or default value


##### Команди Debugger

command_name Command Name In Command Palette
             default_key_binding
             пояснення до команди
             args:
               first_arg: пояснення
                 lorem
               second_arg: пояснення
                 lorem


#### DocBlockr                                                  <i id="DBr"></i>

версія:      2.14.1
автор:       spadgos
посилання:   https://packagecontrol.io/packages/DocBlockr
             https://github.com/spadgos/sublime-jsdocs
призначення: створення коментарів у стилі DocBlock у файлах Javascript, PHP,
             CoffeeScript, Actionscript, C та C++ 
залежності:  немає

Для створення коментаря потрібно рядком перед оголошенням змінної або функції
надрукувати /** та натистути Enter.

Якщо назва функції починається з set/add, пакунок не додає @return. Якщо назва
функції починається з is/has, пакунок додає @return {Boolean}, те ж відбувається
зі змінними: is/has - booleans, callback/cb/done/fn/next - functions. Якщо в
JS-коді функція починається з великої букви, пакунок розуміє, що це - оголошення
класу, і не додає @return. Дану поведінку можна змінювати через налаштування
jsdocs_notation_map.

Якщо надрукувати однорядковий коментар і натиснути Ctri+Enter, пакунок його
прикрасить:
```js
// Foo bar baz<<Ctrl+Enter>>

/////////////////
// Foo bar baz //
/////////////////
```

##### Меню DocBlockr

Preferences ▶ Package Settings ▶ DocBlockr


##### Налаштування DocBlockr

Див. Base File.sublime-settings


##### Команди DocBlockr

jsdocs_decorate DocBlockr: Decorate line comment

jsdocs_reparse  DocBlockr: Reparse comment block


#### Dockerfile Syntax Highlighting                             <i id="DSH"></i>

версія:      1.6.4
автор:       asbjornenge
посилання:   https://packagecontrol.io/packages/Dockerfile%20Syntax%20Highlighting
             https://github.com/asbjornenge/Docker.tmbundle
призначення: підсвітка синтаксису в Dockerfile
залежності:  немає


#### DotENV                                                     <i id="Dot"></i>

версія:      2.0.7
автор:       zaynali53
посилання:   https://packagecontrol.io/packages/DotENV
             https://github.com/zaynali53/DotENV
призначення: підсвідка синтаксису .env-файлів
залежності:  немає


#### EditorConfig                                               <i id="ECg"></i>

версія:      1.0.2
автор:       sindresorhus
посилання:   https://packagecontrol.io/packages/EditorConfig
             https://github.com/sindresorhus/editorconfig-sublime
призначення: Пакунок дозволяє провести стандартизацію синтаксису в проектах, які
             ведуть різні розробники з різними IDE. 
залежності:  немає

В корені проекту створюється файл .editorconfig, в якому вказані правила
стилізації коду. Пакунок його зчитує і слідкує, щоб код відповідав вказаному
стандарту.

Підтримує наступні властивості:

1. root
2. indent_style
3. indent_size
4. end_of_line
5. charset
6. trim_trailing_whitespace
7. insert_final_newline


##### Меню EditorConfig

Preferences ▶ Package Settings ▶ EditorConfig


##### Налаштування EditorConfig

debug запуск у режимі відлагодження
      false


#### Emmet                                                      <i id="Emm"></i>

версія:      2.4.0
автор:       emmetio
посилання:   https://packagecontrol.io/packages/Emmet
             https://github.com/emmetio/sublime-text-plugin/
             https://emmet.io/
призначення: створення розмітки за скороченими інструкціями
залежності:  немає

Пакунок дозволяє створювати розмітку за скороченими інструкціями у більшості
популярних розширенях файлів (HTML, HAML, Pug, JSX, SCSS, SASS тощо). Для роботи
у файлах pug у налаштуваннях потрібно у ключі "abbreviation_scopes" додати
значення "text.pug | source.pypug".

Також пакунок показує вміст відкриваючого тегу (якщо його не видно) біля
закриваючого, коли курсор знаходиться на закриваючому тезі.


##### Меню Emmet

Preferences ▶ Package Settings ▶ Emmet


##### Налаштування Emmet

Повний перелік властивостей див. у відповідному файлі налаштувань.

auto_mark                               визначає ситуації, в яких буде підсвічу-
                                        ватися скорочення, яке Emmet розуміє як
                                        своє
                                        true - підсвітка і розмітки, і стилів
                                        false - без підсвітки
                                        "markup" - тільки для розмітки
                                        "stylesheet" - тільки для стилів
                                        true


abbreviation_preview                    визначає ситуації, в яких буде показува-
                                        тися попап з результатом розгорнення
                                        рядку інструкції, працює лише, якщо
                                        "auto_mark": true
                                        true - показ і для розмітки, і для стилів
                                        false - без показу
                                        "markup" - тільки для розмітки
                                        "stylesheet" - тільки для стилів
                                        true

config                                  тонке налаштування Emmet
                                        {}

config.markup.snippets                  об'єкт, де ключем є абревіатура,
                                        а значенням - результат, детальніше: https://github.com/emmetio/py-emmet/blob/master/emmet/snippets/html.py

config.markup.options                   додаткові опції, детальніше: https://github.com/emmetio/emmet/blob/master/src/config.ts#L79

config.html.snippets                    об'єкт з налаштуваннями тільки для html,
                                        у властивосі "syntax_scopes" можна
                                        подивитися список доступних синтаксисів

config.stylesheet.snippets              сніпети для стилів, детальніше: https://github.com/emmetio/py-emmet/blob/master/emmet/snippets/css.py

config.stylesheet.options               додаткові опції для стилів, детальніше: https://github.com/emmetio/emmet/blob/master/src/config.ts#L79

jsx_prefix                              якщо true - усі інструкції у jsx повинні
                                        починатися з ">"
                                        true

marker_scope                            Scope for marked abbreviation region
                                        highlighting
                                        "comment"

syntax_scopes                           Editor scope to Emmet syntax mapping
                                        {…}

inline_scopes                           List of scopes with inline context
                                        […]

abbreviation_scopes                     List of scope selectors where
                                        abbreviation marker should be activated
                                        […]

ignore_scopes                           ігноровані лексичні оточення
                                        []

tab_expand                              чи перетворювати інструкцію на код табом
                                        true

multicursor_tab                         Expand Emmet abbreviation with Tab key
                                        with multiple cursors in editor
                                        true

bem                                     підтримка методології БЕМ
                                        false


##### Команди Emmet

За замовчуванням усі клавіатурні скорочення закоментовані.

emmet_expand_abbreviation    Emmet: Expand Abbreviation
                             перетворює скорочену інструкцію на повноцінний шмат
                             коду. Можна викликати вручну, якщо виключені
                             властивості auto_mark та abbreviation_preview

emmet_enter_abbreviation     Emmet: Enter Abbreviation Mode
                             дозволяє вручну увімкнути Emmet для рядка, який
                             треба написати. Вставляє в код мітку "⋮>", після
                             якої все набране Emmet сприйматиме як інструкцію

emmet_capture_abbreviation   Emmet: Capture Abbreviation

emmet_wrap_with_abbreviation Emmet: Wrap with Abbreviation

emmet_balance                Emmet: Balance Outward
                             args: { "direction": "outward" }

emmet_balance                Emmet: Balance Inward
                             args: { "direction": "inward" }

emmet_go_to_tag_pair         Emmet: Go to Tag Pair

emmet_remove_tag             Emmet: Remove Tag

emmet_split_join_tag         Emmet: Split/Join Tag

emmet_go_to_edit_point       Emmet: Go to Next Edit Point

emmet_go_to_edit_point       Emmet: Go to Previous Edit Point
                             args: { "previous": true }

emmet_select_item            Emmet: Select Next Item

emmet_select_item            Emmet: Select Previous Item
                             args: { "previous": true }

emmet_toggle_comment         Emmet: Toggle Comment

emmet_evaluate_math          Emmet: Evaluate Math Expression

emmet_increment_number       Emmet: Increment Number by 1
                             args: { "delta": 1 }

emmet_increment_number       Emmet: Decrement Number by 1
                             args: { "delta": -1 }

emmet_increment_number       Emmet: Increment Number by 0.1
                             args: { "delta": 0.1 }

emmet_increment_number       Emmet: Decrement Number by 0.1
                             args: { "delta": -0.1 }

emmet_increment_number       Emmet: Increment Number by 10
                             args: { "delta": 10 }

emmet_increment_number       Emmet: Decrement Number by 10
                             args: { "delta": -10 }

emmet_update_image_size      Emmet: Update Image Size

emmet_convert_data_url       Emmet: Convert data:URL

emmet_rename_tag             Emmet: Rename Tag


##### Директиви Emmet

```txt
>      нащадок
+      елемент на одному рівні вкладеності
^      підняти на рівень вище
*      множення елементів
$      нумерація
$@-    нумерація у зворотньому порядку
$@N    нумерація від заданого числа

()     згрупувати
{}     довільний текст
[]     атрибути

#id    ідентифікатор
.class клас
```

```html
<!-- #page>div.logo+ul#navigation>li*5>a[href="https://somesite.com/page$" data-attr]{Item $} -->

<div id="page">
  <div class="logo"></div>
  <ul id="navigation">
    <li><a href="https://somesite.com/page1" data-attr="">Item 1</a></li>
    <li><a href="https://somesite.com/page2" data-attr="">Item 2</a></li>
    <li><a href="https://somesite.com/page3" data-attr="">Item 3</a></li>
    <li><a href="https://somesite.com/page4" data-attr="">Item 4</a></li>
    <li><a href="https://somesite.com/page5" data-attr="">Item 5</a></li>
  </ul>
</div>
```

```pug
// div>(header>ul>li)+footer>p

div
  header
    ul
      li
  footer
    p
```

```pug
// div>p>span+em^bq

div
  p
    span
    em
  blockquote
```

```pug
// div+div>p>span+em^^^bq

div 
div
  p
    span
    em
blockquote
```
```pug
// (div>dl>(dt+dd)*3)+footer>p

div
  dl
    dt
    dd
    dt
    dd
    dt
    dd
footer
  p
```

```pug
// ul>li.item$$$*5

ul
  li.item001
  li.item002
  li.item003
  li.item004
  li.item005
```

```pug
// ul>li.item$@-3*5

ul
  li.item7
  li.item6
  li.item5
  li.item4
  li.item3
```
```html
<!-- a{click}+b{here} -->
<a href="">click</a><b>here</b>

<!-- a>{click}+b{here} -->
<a href="">click<b>here</b></a>

<!-- p>{Click }+a{here}+{ to continue} -->
<p>Click <a href="">here</a> to continue</p>
```


!             базовий каркас сторінки
lorem20       довільний текст з 20 слів
a             <a href=""></a>
a:link        <a href="http://"></a>
a:mail        <a href="mailto:"></a>
base          <base href="">
br            <br>
link          <link rel="stylesheet" href="">
link:css      <link rel="stylesheet" href="style.css">
link:favicon  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
link:rss      <link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml">
link:atom     <link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml">
meta:utf      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
meta:vp       <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
meta:compat   <meta http-equiv="X-UA-Compatible" content="IE=7">
script:src    <script src=""></script>
img           <img src="" alt="">
ifr           <iframe src="" frameborder="0"></iframe>
emb           <embed src="" type="">
obj           <object data="" type=""></object>
map           <map name=""></map>
map+          <map name=""><area shape="" coords="" href="" alt=""></map>
area          <area shape="" coords="" href="" alt="">
form          <form action=""></form>
form:get      <form action="" method="get"></form>
form:post     <form action="" method="post"></form>
label         <label for=""></label>
input         <input type="text">
inp           <input type="text" name="" id="">
input:h       <input type="hidden" name="">
input:p       <input type="password" name="" id="">
input:c       <input type="checkbox" name="" id="">
input:r       <input type="radio" name="" id="">
input:f       <input type="file" name="" id="">
input:s       <input type="submit" value="">
input:i       <input type="image" src="" alt="">
input:b       <input type="button" value="">
input:reset   <input type="reset" value="">
select        <select name="" id=""></select>
select+       <select name="" id=""><option value=""></option></select>
opt           <option value=""></option>
tarea         <textarea name="" id="" cols="30" rows="10"></textarea>
video         <video src=""></video>
audio         <audio src=""></audio>
bq            <blockquote></blockquote>
fst           <fieldset></fieldset>
btn           <button></button>
btn:s         <button type="submit"></button>
btn:b         <button type="button"></button>
btn:r         <button type="reset"></button>
sect          <section></section>
art           <article></article>
hdr           <header></header>
ftr           <footer></footer>
str           <strong></strong>
ol+           <ol><li></li></ol>
ul+           <ul><li></li></ul>
dl+           <dl><dt></dt><dd></dd></dl>
table+        <table><tr><td></td></tr></table>
tr+           <tr><td></td></tr>
c             <!-- Коментар -->
cc:ie6        <!--[if lte IE 6]> <![endif]-->
cc:ie         <!--[if IE]><![endif]-->
cc:noie       <!--[if !IE]><!--><!--<![endif]-->


pos           position: relative;
posa          position: absolute;
posr          position: relative;
posf          position: fixed;
t             top: ;
t:a           top: auto;
r             right: ;
r:a           right: auto;
b             bottom: ;
b:a           bottom: auto;
l             left: ;
l:a           left: auto;
z             z-index: ;
za            z-index: auto;
fl            float: left;
fln           float: none;
fr            float: right;
cl            clear: both;
d             display: block;
dn            display: none;
di            display: inline;
dib           display: inline-block;
dt            display: table;
dtc           display: table-cell;
dtr           display: table-row;
v             visibility: hidden;
vv            visibility: visible;
oh            overflow: hidden;
ovv           overflow: visible;
os            overflow: scroll;
oa            overflow: auto;
zm            zoom: 1;
cu            cursor: ;
cup           cursor: pointer;
cud           cursor: default;
cuh           cursor: hand;
cuhe          cursor: help;
cum           cursor: move;
cut           cursor: text;
m             margin: ;
m:a           margin: auto;
mt            margin-top: ;
mta           margin-top: auto;
mr            margin-right: ;
mra           margin-right: auto;
mb            margin-bottom: ;
mba           margin-bottom: auto;
ml            margin-left: ;
mla           margin-left: auto;
p             padding: ;
pt            padding-top: ;
pr            padding-right: ;
pb            padding-bottom: ;
pl            padding-left: ;
bsh           box-shadow: inset hoff voff blur color;
bshn          box-shadow: none;
w             width: ;
wa            width: auto;
h             height: ;
ha            height: auto;
maw           max-width: ;
mah           max-height: ;
mw            min-width: ;
mh            min-height: ;
f             font: ;
f+            font: 1em Arial,sans-serif;
fw            font-weight: ;
fwn           font-weight: normal;
fwb           font-weight: bold;
fs            font-style: italic;
fsn           font-style: normal;
fsi           font-style: italic;
fz            font-size: ;
ff            font-family: ;
ffs           font-family: serif;
ffss          font-family: sans-serif;
ffm           font-family: monospace;
ffa           font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
va            vertical-align: top;
vm            vertical-align: middle;
vabl          vertical-align: baseline;
vb            vertical-align: bottom;
vs            vertical-align: sub;
ta            text-align: left;
tac           text-align: center;
tar           text-align: right;
taj           text-align: justify;
td            text-decoration: none;
tdu           text-decoration: underline;
tdo           text-decoration: overline;
tdl           text-decoration: line-through;
tt            text-transform: uppercase;
ttn           text-transform: none;
ttl           text-transform: lowercase;
ts            text-shadow: hoff voff blur #000;
tra           text-shadow: h v blur rgba(0, 0, 0, .5);
ts+           text-shadow: 0 0 0 #000;
tsn           text-shadow: none;
lh            line-height: ;
lts           letter-spacing: ;
ws            white-space: ;
wsn           white-space: normal;
wsnw          white-space: nowrap;
bg            background: #000;
bg+           background: #fff url() 0 0 no-repeat;
bn            background: none;
bgc           background-color: #fff;
bgt           background-color: transparent;
bgi           background-image: url();
bgin          background-image: none;
bgr           background-repeat: ;
bgrn          background-repeat: no-repeat;
bgrx          background-repeat: repeat-x;
bgry          background-repeat: repeat-y;
bga           background-attachment: ;
baf           background-attachment: fixed;
bas           background-attachment: scroll;
bgp           background-position: 0 0;
bgs           background-size: ;
bsa           background-size: auto;
c             color: #000;
cra           color: rgba(0, 0, 0, .5);
op            opacity: ;
ct            content: '';
q             quotes: ;
ol            outline: ;
on            outline: none;
tbl           table-layout: ;
cs            caption-side: ;
ec            empty-cells: ;
bd            border: ;
bd+           border: 1px solid #000;
bdn           border: none;
bdc           border-color: #000;
bdi           border-image: url();
bdin          border-image: none;
bf            border-fit: repeat;
bdle          border-length: ;
bsp           border-spacing: ;
bds           border-style: ;
bw            border-width: ;
bt            border-top: ;
bt+           border-top: 1px solid #000;
bdtn          border-top: none;
br            border-right: ;
br+           border-right: 1px solid #000;
bdrn          border-right: none;
bb            border-bottom: ;
bb+           border-bottom: 1px solid #000;
bdbn          border-bottom: none;
bl            border-left: ;
bl+           border-left: 1px solid #000;
bdln          border-left: none;
bdrs          border-radius: ;
btrr          border-top-right-radius: ;
bdtrs         border-top-left-radius: ;
bbrr          border-bottom-right-radius: ;
bblr          border-bottom-left-radius: ;
lis           list-style: ;
lisn          list-style: none;
lst           list-style-type: ;
lstn          list-style-type: none;
lstd          list-style-type: disc;
lstc          list-style-type: circle;
lsts          list-style-type: square;
lstdc         list-style-type: decimal;
lsi           list-style-image: ;
lsin          list-style-image: none;
!             !important
@f            @font-face {font-family:;src:url();}
@f+           @font-face {font-family: 'FontName';src: url('FileName.eot');src: url('FileName.eot?#iefix')format('embedded-opentype'),url('FileName.woff') format('woff'),url('FileName.ttf') format('truetype'),url('FileName.svg#FontName') format('svg');font-style: normal;font-weight: normal;}
@i            @import url();
@m            @media screen {}
anim          animation: ;
ap            appearance: none;
bgie          filter:progid:DXImageTransform .Microsoft.AlphaImageLoader(src='x.png',sizingMethod='crop');
cm            /* Коментар */
colm          columns: ;
trf           transform: ;
trfr          transform: rotate(angle);
trfsc         transform: scale(x, y);
trft          transform: translate(x, y);
tfo           transform-origin: ;
trs           transition: prop time;
trsde         transition-delay: time;
trsdu         transition-duration: time;
trsp          transition-property: prop;
us            user-select: none;

mt20          margin-top: 20px;
fsz20         font-size: 20px;
p15           padding: 15px;
m10em-5       margin: 10em -5px;
m10p30e5x     margin: 10% 30em 5ex
p!+m10e!      padding: !important;margin: 10em !important;


#### FileDiffs                                                  <i id="FDs"></i>

версія:      2.9.0
автор:       Colin T.A. Gray (colinta)
посилання:   https://packagecontrol.io/packages/FileDiffs
             https://github.com/colinta/SublimeFileDiffs
призначення: порівняння файлів і пошук у них відмінностей
залежності:  ???

??? спробувати інтегрувати з sublimerge

Пакунок дозволяє порівнювати файли і шукати у них відмінності (поточний файл або
його виділена частина з буфером обміну, іншим файлом або незбереженими змінами).
Може бути сконфігурований на показ відмінностей у зовнішніх програмах.


##### Меню FileDiffs

Preferences ▶ Package Settings ▶ FileDiffs
Tab Context ▶ FileDiffs Menu
Tab Context ▶ Diff tab with Open Tab…
Side Bar ▶ FileDiffs Menu
Side Bar ▶ Diff with File in Project…
Context ▶ FileDiffs Menu
Context ▶ Diff Selections
Context ▶ Diff with Clipboard
Context ▶ Diff with Saved
Context ▶ Diff with Previous


##### Налаштування FileDiffs

див. файл 'FileDiffs.sublime-settings


##### Команди FileDiffs

file_diff_clipboard  Diff with Clipboard
                     показує різницю між файлом/його частиною і буфером обміну

file_diff_file       Diff with File in Project…
                     показує різницю між файлом/його частиною і файлом в проекті

file_diff_menu       FileDiffs: Menu
                     показує спливаюче вікно з доступними камандами

file_diff_previous   Diff with Previous
                     показує різницю між поточним файлом/його частиною і
                     останнім активним файлом

file_diff_saved      Diff with Saved
                     показує різницю між поточним файлом/його частиною і
                     збереженим файлом

file_diff_selections Diff Selections
                     показує різницю між двома виділеними областями в одному
                     файлі

file_diff_tab        Diff tab with Open Tab…
                     показує різницю між файлом/його частиною і відкритим файлом


#### FindKeyConflicts                                           <i id="FKC"></i>

версія:      2019.05.17.02.08.34
автор:       skuroda
посилання:   https://packagecontrol.io/packages/FindKeyConflicts
             https://github.com/skuroda/FindKeyConflicts
призначення: пошук конфліктів комбінацій клавіш
залежності:  ???

##### Меню FindKeyConflicts

Preferences ▶ Package Settings ▶ FindKeyConflicts


##### Налаштування FindKeyConflicts

debug                      увімкнути режим відладки
                           false

display_internal_conflicts чи відображати внутрішні конфлікти пакунків
                           true

ignore_patterns            список ігнорованих патернів
                           []

ignore_single_key          визначає, чи ігноруються команди з однієї клавіші
                           false

ignored_packages           масив пакунків, які не паревіряються на конфлікти.
                           Вимкнені пакунки (ignored_packages в налаштуваннях)
                           не перевіряються по дефолту
                           []


##### Команди FindKeyConflicts

find_all_key_conflicts            FindKeyConflicts: All Conflicts
                                  вивести усі конфлікти

find_key_conflicts                FindKeyConflicts: (Direct) Conflicts to Buffer
                                  args: {"output": "buffer"}
                                  виводить прямі конфлікти в додаткову вкладку

find_key_conflicts                FindKeyConflicts: (Direct) Conflicts to Quick
                                  Panel
                                  виводить прямі конфлікти у швидку панель

find_key_conflicts_command_search FindKeyConflicts: Command Search
                                  виводить на панель список пакунків, при виборі
                                  пакунку виводить його конфлікти з іншими
                                  пакунками

find_key_conflicts_with_package   FindKeyConflicts: Multiple Package Conflicts
                                  дозволяє вибрати кілька пакунків і вивести
                                  інфу про їхні конфлікти
                                  args: {"multiple": true}

find_key_conflicts_with_package   FindKeyConflicts: Single Package Conflicts
                                  виводить інфу по конфліктах одного пакунку

find_key_mappings                 FindKeyConflicts: All Key Maps to Buffer
                                  args: {"output": "buffer"}
                                  виводить інфу по всіх клавіатурних скороченнях
                                  в окрему вкладку

find_key_mappings                 FindKeyConflicts: All Key Maps to Quick Panel
                                  виводить інфу по всіх клавіатурних скороченнях
                                  у швидку панель

find_overlap_conflicts            FindKeyConflicts: Overlap Conflicts
                                  показує конфлікти з "частковим перекриттям"
                                  комбінацій, напр ["ctrl+t"] і ["ctrl+t", "t"]


#### gist                                                       <i id="gst"></i>

версія:      2021.09.12.12.12.36
автор:       condemil
посилання:   https://packagecontrol.io/packages/gist
             https://github.com/condemil/gist
призначення: надає доступ до гістів з GitHub
залежності:  ???

Пакунок надає інтерфейс до збереження і використання шматків коду на GitHub (так
звані gist'и).

На сайті packagecontrol.io пакунок має назву gist (автор condemil), у цього
автора є ще один пакунок з тим самим функціоналом, але застарілий - Gist.


##### Меню gist

Tools ▶ Gist
Preferences ▶ Package Settings ▶ Gist
Context ▶ Create Public Gist…
Context ▶ Create Private Gist…


##### Налаштування gist

token               токен доступу до API gist'ів, робиться на сайті github.com
                    по шляху: Account ▶ Settings ▶ Developer Settings ▶ Personal
                    Access Tokens
                    ""

include_orgs        Show GitHub organizations
                    []

include_users       Show GitHub users
                    []

show_authors        Show the authors of Gists
                    false

prefer_filename     Prefer first file name instead of description in Open Gist
                    menu
                    false

https_proxy         проксі сервер у форматі "http://user:pass@proxy:port"
                    ""

api_url             Github URL
                    "https://api.github.com"

max_gists           максимальна кількість гістів, які додаток може запросити з
                    сервера. Не може бути більше 100 через обмеження GitHub API
                    100

use_starred         Only use starred gists
                    false

supress_save_dialog Disable the "save file..." dialog when closing a Gist
                    true

update_on_save      Update the Gist upon saving the file, suppressing the
                    filename dialog
                    true

gist_prefix         фільтрування гістів для показу, видні тільки ті, що
                    починаються з префікса
                    ""

gist_tag            Limit to gists with specific tag (#tag)
                    ""


##### Команди gist

gist                    Gist: Create Public Gist
                        ctrl+k, ctrl+i

gist_add_file           Gist: Add File to Gist
                        ctrl+k, ctrl+]

gist_change_description Gist: Change Gist Description

gist_copy_url           Gist: Copy Gist URL

gist_delete             Gist: Delete Gist

gist_delete_file        Gist: Delete Gist File

gist_gitio              Gist: Shorten a GitHub.com URL
                        ctrl+k, ctrl+g

gist_list               Gist: Open Gist
                        ctrl+k, ctrl+o

gist_open_browser       Gist: Open Gist in Browser

gist_private            Gist: Create Private Gist
                        ctrl+k, ctrl+p

gist_rename_file        Gist: Rename File

gist_update_file        Gist: Update File
                        ctrl+k, ctrl+s

insert_gist_embed_list  Gist: Embed as script

insert_gist_list        Gist: Insert Gist
                        ctrl+k, ctrl+[


#### Git                                                        <i id="Git"></i>

версія:      1.0.8
автор:       kemayo
посилання:   https://packagecontrol.io/packages/Git
             https://github.com/kemayo/sublime-text-git
             https://github.com/kemayo/sublime-text-git/wiki
призначення: додає в редактор основні команди Git
залежності:  ???


##### Меню Git

Tools ▶ Git
Preferences ▶ Package Settings ▶ Git


##### Налаштування Git

annotations              Annotations default to being on for all files. Can be
                         slow in some cases
                         false

commit_rulers            Rulers for commit view
                         [70]

diff_panel               use the panel for diff output, rather than a new
                         scratch window (new tab)
                         false

diff_syntax              e.g. "Packages/Git/syntax/Git Commit Message.tmLanguage"
                         "Packages/Diff/Diff.tmLanguage"

flow                     Show git flow commands
                         false

git_command              if present, use this command instead of plain "git"
                         e.g. "/Users/kemayo/bin/git" or "C:\bin\git.exe"
                         false

git_flow_command         point this the installation location of git-flow
                         "/usr/local/bin/git-flow"

gitignore_sync           Watch for gitignore changes?
                         false

gitk_command             if present, use this command instead of plain "gitk"
                         e.g. "/Users/kemayo/bin/gitk" or "C:\bin\gitk.exe"
                         false

history_size             How many commit messages to store in the history. Set
                         to 0 to disable.
                         5

low-notag                By default git flow release and hotfix will tag a
                         version. Set to true to disable.
                         false

save_first               save before running commands
                         true

status_opens_file        If you'd rather have your status command open files
                         instead of show you a diff, set this to true.  You can
                         still do `Git: Status` followed by 'Git: Diff Current
                         File' to get a file diff
                         false

statusbar_branch         statusbar
                         true

statusbar_status         Symbols for quick git status in status bar
                         true

statusbar_status_symbols {"modified": "≠", "added": "+", "deleted": "×", "untracked": "?", "conflicts": "‼", "renamed":"R", "copied":"C", "clean": "✓", "separator": " "}

verbose_commits          Use --verbose flag for commit messages
                         true


##### Команди Git

git_add_choice                       Git: Add...

git_add_selected_hunk                Git: Add Selected Hunk

git_blame                            Git: Blame

git_branch                           Git: Change Branch

git_checkout_tag                     Git: Checkout Tag

git_commit                           Git: Commit

git_commit_amend                     Git: Amend Commit

git_commit_history                   Git: Commit history

git_commit_selected_hunk             Git: Commit Selected Hunk

git_custom                           Git: Custom Command

git_delete_branch                    Git: Delete Branch

git_delete_tag                       Git: Delete Tag

git_diff                             Git: Diff Current File

git_diff                             Git: Diff Current File (Ignore Whitespace)
                                     args: { "ignore_whitespace": true }

git_diff_all                         Git: Diff All Files

git_diff_all                         Git: Diff All Files (Ignore Whitespace)
                                     args: { "ignore_whitespace": true }

git_diff_commit                      Git: Diff Staged Files

git_diff_commit                      Git: Diff Staged Files (Ignore Whitespace)
                                     args: { "ignore_whitespace": true }

git_diff_tool_commit                 Git: Diff Tool Current File Staged

git_diff_tool_commit_all             Git: Diff Tool Staged

git_document                         Git: Document Selection

git_flow_feature_finish              Git Flow: Feature Finish

git_flow_feature_start               Git Flow: Feature Start

git_flow_hotfix_finish               Git Flow: Hotfix Finish

git_flow_hotfix_start                Git Flow: Hotfix Start

git_flow_release_finish              Git Flow: Release Finish

git_flow_release_start               Git Flow: Release Start

git_gitk                             Git: Gitk

git_gitk_all                         Git: Gitk All

git_gitk_this_file                   Git: Gitk This File

git_goto_commit                      Git: View selected commits

git_graph                            Git: Graph Current File

git_graph_all                        Git: Graph All

git_gui                              Git: Gui

git_init                             Git: Init

git_log                              Git: Log Current File

git_log_all                          Git: Log All

git_merge                            Git: Merge Branch

git_new_branch                       Git: New Branch

git_new_tag                          Git: New Tag

git_open_file                        Git: Open...

git_open_modified_files              Git: Open Modified Files

git_pull_current_branch              Git: Pull Current Branch

git_push_current_branch              Git: Push Current Branch

git_quick_commit                     Git: Quick Commit (current file)

git_quick_commit                     Git: Quick Commit (repo)
                                     args:
                                     ```{ "target": "*" }```

git_quick_commit                     Git: Quick Commit (repo, only already added
                                     files)
                                     args: { "target": false }

git_raw                              Git: Stash Changes
                                     args: { "command": "git stash" }

git_raw                              Git: Fetch
                                     args: { "command": "git fetch "may_change_files": false }

git_raw                              Git: Reset (unstage) All
                                     args: { "command": "git reset HEAD "show_in": "suppress" }

git_raw                              Git: Reset (unstage) Current File
                                     args: { "command": "git reset HEAD "append_current_file": true, "show_in": "suppress" }

git_raw                              Git: Pull Using Rebase
                                     args: { "command": "git pull --rebase" }

git_raw                              Git: Add All
                                     args: { "command": "git add -A" }

git_raw                              Git: Add Current File
                                     args: { "command": "git add "append_current_file": true }

git_raw                              Git: Checkout Current File
                                     args: { "command": "git checkout "append_current_file": true }

git_raw                              Git: Diff Tool All
                                     args { "command": "git difftool "may_change_files": false }

git_raw                              Git: Diff Tool Current File
                                     args: { "command": "git difftool "append_current_file": true, "may_change_files": false }

git_raw                              Git: Pull
                                     args: { "command": "git pull" }

git_raw                              Git: Push
                                     args: { "command": "git push "may_change_files": false }

git_raw                              Git: Push Tags
                                     args: { "command": "git push --tags "may_change_files": false }

git_raw                              Git: Stash Pop
                                     args: { "command": "git stash pop" }

git_reset_hard_head                  Git: Reset (hard) HEAD

git_show                             Git: Show Previous Version of Current File

git_show_commit                      Git: Show Commit By Hash

git_show_tags                        Git: Show Tags

git_stash_apply                      Git: Stash Apply

git_stash_drop                       Git: Stash Drop

git_stash_list                       Git: Stash List

git_status                           Git: Status

git_toggle_annotations               Git: Toggle Annotations

git_track_remote_branch              Git: Track Remote Branch

git_update_ignore                    Git: Update Project Ignored Files

git_update_index_assume_unchanged    Git: Assume Unchanged

git_update_index_no_assume_unchanged Git: No Assume Unchanged


#### GitGutter                                                  <i id="GGr"></i>

версія:      1.11.9
автор:       jisaacks
посилання:   https://packagecontrol.io/packages/GitGutter
             https://github.com/jisaacks/GitGutter
призначення: підсвітка змінених рядків
залежності:  ???

https://jisaacks.github.io/GitGutter/

Додаток показує інформацію щодо стану і змін у рядках відкритого документу:
1. іконки на початку ряків
2. попап з деталями змін у файлі
3. інформація про файл і репозиторій у рядку стану
4. інформація про рядок (Show Line Annotation)


##### Меню GitGutter

Edit ▶ Revert Change to Commit
Edit ▶ Copy Content from Commit
View ▶ GitGutter
Goto ▶ Goto Previous Git Difference
Goto ▶ Goto Next Git Difference
Preferences ▶ Package Settings ▶ GitGutter


##### Налаштування GitGutter (файл GitGutter.sublime-settings)

Налаштування пакунку можна прописувати у будь-якому файлі налаштувань Sublime
Text, ці налаштування матимуть перевагу над налаштуваннями файлу
GitGutter.sublime-settings і повинні мати префікс "git_gutter_".

Якщо потрібно змінити налаштування пакунку тільки для певного проекту, потрібно
пройти по шляху Project ▶ Edit Project і у відкритому файлі створити об'єкт з
ключем "settings" (якщо його ще нема) і в ньому происувати потрібні властивості.


git_binary                        шлях до виконуваного файлу Git, за
                                  замовчуванням пакунок шукає його в PATH
                                  environment variable. Змінювати його має смисл
                                  для вказування шляху до спечифічної інсталяції
                                  git'а, що не зареєстрована в PATH, або при
                                  використанні Windows Subsystem for Linux на
                                  Windows 10, якщо шлях прописується
                                  unix-подібним. Рядок або масив. Приклад масиву:
                                  ```json
                                  "git_binary": {
                                      "default": "",
                                      "linux": "/usr/bin/git",
                                      "osx":  "/usr/bin/git",
                                      "windows": "C:/Program Files/Git/cmd/git.exe"
                                  }
                                  ```
                                  ""

env                               змінні, записані тут, перезатирають глобальний
                                  env. Ключі зі значенням "None" витираються з
                                  локального лексичного оточення, властивість
                                  "git_gutter_env" в проекті або області
                                  видимості (view) затінює глобальний env
                                  { "GIT_OPTIONAL_LOCKS": 0 }

compare_against                   GitGutter за замовчуванням порівнює вміст
                                  перегляду з HEAD вилученої гілки. Щоб змінити
                                  цю поведінкум, параметрco mpare_against можна
                                  змінити на будь-який тег, розгалуження чи хеш
                                  коміту, які розуміє git.
                                  "HEAD"

diff_algorithm                    алгоритм порівняння "default"/"minimal"/
                                  "patience"/"histogram"
                                  "patience"

ignore_whitespace                 як враховувати пробіли при порівнянні "none"/
                                  "cr"/"eol"/"space"/"all"
                                  "none"

debounce_delay                    час затримки оновлення іконок біля номерів
                                  рядків
                                  1000

focus_change_mode                 чи проводити оцінку файлу кожного разу при
                                  фокусуванні на області видимості, має ефект
                                  тільки при "live_mode": false
                                  true

live_mode                         чи проводити оцінку файлу кожного разу при
                                  його зміні
                                  true

protected_regions                 список типів іконок, які є важливішими за
                                  іконки пакунка і не будуть ним перезатиратися
                                  [
                                    "sublimelinter-warning-gutter-marks",
                                    "sublimelinter-error-gutter-marks",
                                    "sublime_linter.protected_regions",
                                    "bookmarks",
                                    "lsp_error",
                                    "lsp_warning",
                                    "lsp_info",
                                    "ecc"
                                  ]

show_markers_on_untracked_file    чи показувати іконки на файлах, що не
                                  відслідковуються системою контролю версій. You
                                  may need to add scopes
                                  (markup.ignored.git_gutter and
                                  markup.untracked.git_gutter) to your color
                                  scheme to color the icons.
                                  true

show_in_minimap                   товщина підсвітки рядка у мінікарті.
                                  0 - приховати, -1 - зафарбувати весь рядок,
                                  >1 - товщина мітки
                                  1

theme                             візуальна тема для іконок. Стандартними є
                                  Bars.gitgutter-theme,
                                  Bars Thin.gitgutter-theme,
                                  Default.gitgutter-theme. To provide a custom
                                  theme developers need to add a folder with all
                                  required icons and optionally a
                                  gitgutter_popup.css file to their package. An
                                  empty JSON file <ThemeName>.gitgutter-theme
                                  must exist to mark this folder a resource
                                  for GitGutter icons.
                                  "Default.gitgutter-theme"

enable_hover_diff_popup           чи показувати попап зі змінами при наведенні
                                  на номери рядків
                                  true

diff_popup_default_mode           показувати у вікні вміст до змін ("default")
                                  чи підсвічувати зміни ("dif")
                                  "default"

diff_popup_protected_regions      типи попапів, які не повинні перекриватися
                                  попапом пакунка при наведенні курсору на
                                  номери рядків
                                  [ "sublime_linter.protected_regions" ]

show_line_annotation              чи показувати інформацію по коміту справа від
                                  рядку
                                    "auto" якщо перенесення рядків вимкнене
                                    true   завжди показувати
                                    false  ніколи не показувати
                                  "auto"

line_annotation_text              шаблон, який відповідає за відображення
                                  інформації про рядок, рендериться шаблонним
                                  рушієм jinja2 (http://jinja.pocoo.org/docs/).
                                  Інформацію можна вивести багаторядковим
                                  коментарем, якщо використовувати масив рядків:
                                  [
                                    "{{line_author}}",
                                    " ({{line_author_age}})",
                                    " · {{line_summary}}"
                                  ]
                                  Рушій сприймає наступні змінні:
                                  {{line_author}}           the author, who introduced the change
                                  {{line_author_mail}}      the e-mail address of the author
                                  {{line_author_age}}       the time elapsed since the change
                                  {{line_author_time}}      the time string of the change
                                  {{line_author_tz}}        the timezone string of the change
                                  {{line_commit}}           the hash of the changing committing
                                  {{line_committer}}        the committer, who added the change to the repo
                                  {{line_committer_mail}}   the e-mail address of the committer
                                  {{line_committer_age}}    the time elapsed since the change
                                  {{line_committer_time}    the time string of commit
                                  {{line_committer_tz}      the timezone string of commit
                                  {{line_summary}}          the first line of the commit message
                                  {{line_previous}}         the hash of the previous commit
                                  "{% if line_commit and line_commit[:7] != '0000000' %} {{line_commit[:7]}} | {% endif %}{{line_author}} ({{line_author_age}}) · {{line_summary}}"

line_annotation_ruler             анотація лінії за замовчуванням розташовується
                                  на певній відстані від кінця рядка, але її
                                  можна розташувати відносно лінійок (rulers),
                                  вказавши потрібний порядковий номер.
                                  НЕ ПРАЦЮЄ!
                                  false

line_annotation_ignore_whitespace чи ігнорувати пробіли при показі анотацій
                                  ліній
                                  false

show_status_bar_text              чи показувати у рядку статусів інформацію про
                                  відкритий файл
                                  true

status_bar_text                   шаблон, який відповідає за відображення
                                  інформації про файл, рендериться шаблонним
                                  рушієм jinja2 (http://jinja.pocoo.org/docs/).
                                  Інформацію можна вивести багаторядковим
                                  коментарем, якщо використовувати масив рядків:
                                  Рушій сприймає наступні змінні:
                                  ```
                                  {{st_git_status}}       reflects "show_git_status": true in Preferences of ST 3189+
                                  {{repo}}                repository name / folder name containing the .git directory
                                  {{branch}}              checked out branch you are working on
                                  {{remote}}              tracked remote of current branch you are working on or None
                                  {{ahead}}               number of commits the local branch is ahead of remote
                                  {{behind}}              number of commits the local branch is behind remote
                                  {{added_files}}         number of untracked files added to working tree
                                  {{deleted_files}}       number of files deleted from working tree
                                  {{modified_files}}      number of modified files in the working tree
                                  {{staged_files}}        number of files in the staging area
                                  {{compare}}             commit/branch/HEAD the file is compared to
                                  {{state}}               One of committed/modified/ignored/untracked
                                  {{deleted}}             number of deleted regions
                                  {{inserted}}            number of inserted lines
                                  {{modified}}            number of modified lines
                                  {{line_author}}         the author, who introduced the change
                                  {{line_author_mail}}    the e-mail address of the author
                                  {{line_author_age}}     the time elapsed since the change
                                  {{line_author_time}}    the time string of the change
                                  {{line_author_tz}}      the timezone string of the change
                                  {{line_commit}}         the hash of the changing committing
                                  {{line_committer}}      the committer, who added the change to the repo
                                  {{line_committer_mail}} the e-mail address of the committer
                                  {{line_committer_age}}  the time elapsed since the change
                                  {{line_committer_time}  the time string of commit
                                  {{line_committer_tz}    the timezone string of commit
                                  {{line_summary}}        the first line of the commit message
                                  {{line_previous}}       the hash of the previous commit
                                  [
                                    "{% if repo and branch %}",
                                      "{% if not st_git_status %}",
                                        "{{repo}}/{{branch}}",
                                        "{% if added_files + deleted_files + modified_files > 0 %}*{% endif %}, ",
                                      "{% endif %}",
                                      "{% if compare not in ('HEAD', branch, None) %}Comparing against {{compare}}, {% endif %}",
                                      "{% if state %}File is {{state}}{% endif %}",
                                      "{% if deleted > 0 %}, {{deleted}}-{% endif %}",
                                      "{% if inserted > 0 %}, {{inserted}}+{% endif %}",
                                      "{% if modified > 0 %}, {{modified}}≠{% endif %}",
                                      "{% if line_commit and line_commit[:7] != '0000000' %}, ⟢ {{line_commit[:7]}} | {{line_author}} ({{line_author_age}}){% endif %}",
                                    "{% endif %}"
                                  ]
                                  ```

next_prev_change_wrap             Визначає, чи виконуються команди
                                  git_gutter_next_change/git_gutter_prev_change
                                  після досягнення початку/кінця файлу.
                                  true


##### Команди GitGutter


git_gutter_blame               GitGutter: Show Line Annotation
                               ctrl+shift+alt+c, ctrl+b
                               показує інформацію справа від рядка, який коміт
                               останній для цього рядка

git_gutter_compare_branch      GitGutter: Compare Against Branch
                               ctrl+shift+alt+c, b

git_gutter_compare_commit      GitGutter: Compare Against Commit
                               ctrl+shift+alt+c, c

git_gutter_compare_file_commit GitGutter: Compare Against File Commit
                               ctrl+shift+alt+c, f

git_gutter_compare_head        GitGutter: Compare Against HEAD
                               ctrl+shift+alt+c, h

git_gutter_compare_origin      GitGutter: Compare Against Origin
                               ctrl+shift+alt+c, o

git_gutter_compare_tag         GitGutter: Compare Against Tagʼ
                               ctrl+shift+alt+c, t

git_gutter_copy_from_commit    GitGutter: Copy Content from Commit
                               ctrl+shift+c

git_gutter_diff_popup          GitGutter: Show Diff Popup
                               ctrl+shift+alt+c, ctrl+d
                               команда показує попап зі змінами в коді, її можна
                               викликати через клавіатурні скорочення, пунк меню
                               або при наведенні на номери змінених рядків

git_gutter_enable_view         GitGutter: Disable for View
                               args: { "enabled": false }
                               GitGutter: Enable for View
                               args: { "enabled": true }

git_gutter_next_change         GitGutter: Goto Next Change
                               ctrl+shift+alt+j

git_gutter_prev_change         GitGutter: Goto Previous Change
                               ctrl+shift+alt+k

git_gutter_revert_change       GitGutter: Revert Change to Commit
                               ctrl+shift+alt+z

git_gutter_show_compare        GitGutter: Show Comparing Against
                               ctrl+shift+alt+c, v

git_gutter_support_info        GitGutter: Support Info


##### Налаштування GitGutter (файл Preferences.sublime-settings)

Усі налаштування, прописані в цьому файлі, не можуть бути виключені у файлі
GitGutter.sublime-settings. Усі налаштування з файлу GitGutter.sublime-settings
можуть бути прописані тут.

git_gutter_enable увімкнути/вимкнути пакунок
                  true


##### Налаштування кольорової схеми

Див. https://jisaacks.github.io/GitGutter/coloring/


##### Можливі проблеми

https://jisaacks.github.io/GitGutter/troubleshooting/


Починаючи з версії SublimeText 3189 іконки не відображаються, оскільки в сам
редактор додана нова можливість порівняння файлів і підсвічування рядків зі
змінами Incremental Diff (https://www.sublimetext.com/docs/3/incremental_diff.html).
Таку поведінку можна відключити, змінивши налаштування "mini_diff" на false, що
може стати причиною конфлікту з більш важливими пакунками, такими як
SublimeLinter. Підсвітку рядків можна відстажувати на мінікатрі.


#### Go-To-CSS-Declaration                                      <i id="GCD"></i>

версія:      2016.02.08.10.03.21
автор:       Razumenko Maksim
посилання:   https://packagecontrol.io/packages/Goto-CSS-Declaration
             https://github.com/rmaksim/Sublime-Text-2-Goto-CSS-Declaration
призначення: пошук оголошень css-декларацій
залежності:  немає

Пакунок здатен перейти з файлу з будь-яким розширенням, в якому є
css-декларація, і знайти її у відкритих файлах з розширеннями css/scss/sass/
less (за замовчуванням) або іншими розширеннями (якщо змінити налаштування).


##### Меню Go-To-CSS-Declaration

Preferences ▶ Package Settings ▶ Goto-CSS-Declaration
Context ▶ Goto CSS Declaration


##### Налаштування Go-To-CSS-Declaration

css_files масив з розширеннями файлів, у яких потрібно шукати css-правило
          [".css", ".scss", ".sass", ".less"]


##### Команди Go-To-CSS-Declaration

goto_css_declaration Goto CSS Declaration
                     super+alt+. (Windows)
                     super+right (Linux)
                     перейти до наступного оголошення
                     args: {"goto": "next"}

goto_css_declaration Goto CSS Declaration
                     super+alt+, (Windows)
                     super+left (Linux)
                     перейти до попереднього оголошення
                     args: {"goto": "prev"}


#### GraphQL                                                    <i id="GQL"></i>

версія:      2.2.1
автор:       dncrews
посилання:   https://packagecontrol.io/packages/GraphQL
             https://github.com/dncrews/GraphQL-SublimeText3
призначення: підсвітка синтаксису GraphQL
залежності:  немає


#### HTML (C#)                                                  <i id="HC#"></i>

версія:      4.0.0
автор:       michaelblyons
посилання:   https://packagecontrol.io/packages/HTML%20(C%23)
             https://github.com/michaelblyons/SublimeSyntax-HTML-CSharp
призначення: ххх
залежності:  немає


#### HTML Minifier                                              <i id="HMr"></i>

версія:      1.4.0
автор:       geekpradd
посилання:   https://packagecontrol.io/packages/HTML%20Minifier
             https://github.com/geekpradd/sublime-html5-minifier
призначення: мініфікація HTML, CSS та JS-коду
залежності:  немає

Не зважаючи на назви усіх пунктів меню і самого додатку, він працює не тільки з
HTML, а й з CSS та JS.

##### Меню HTML Minifier

Tools ▶ Minify Current HTML5 (create new)
Tools ▶ Minify Current HTML5 (modify existing)
Context ▶ Minify HTML5 Code
SideBar ▶ Minify HTML5 Code


##### Команди HTML Minifier

minifier  HTML Minfier: Minify File (create new)
          Ctrl+Shift+M
          створити новий файл з суфіксом .min

minifier2 HTML Minfier: Minify File (modify existing)
          Ctrl+Alt+Shift+M
          мініфікувати поточний файл


#### HTML Nest Comments                                         <i id="HNC"></i>

версія:      1.0.1
автор:       philsinatra
посилання:   https://packagecontrol.io/packages/HTML%20Nest%20Comments
             https://github.com/philsinatra/HTML-Nest-Comments
призначення: виправлення помилки вкладених коментарів
залежності:  немає

##### Меню HTML Nest Comments

Preferences ▶ Package Settings ▶ HTML Nest Comments
Context ▶ HTML Nest Comments


##### Команди HTML Nest Comments

nest HTML Nest Comments: Comment/Uncomment Selection
     Ctrl+Shift+/
     закоментувати/розкоментувати фрагмент


#### HTML-CSS-JS Prettify                                       <i id="HPr"></i>

версія:      2019.02.13.06.05.18
автор:       victorporof
посилання:   https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify
             https://github.com/victorporof/Sublime-HTMLPrettify
призначення: вирівнювання коду
залежності:  Node.js, npm-пакет js-beautify
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


##### Меню HTML-CSS-JS Prettify

Tools ▶ HTML/CSS/JS Prettify
Preferences ▶ Package Settings ▶ HTML/CSS/JS Prettify
Context ▶ HTML/CSS/JS Prettify


##### Налаштування HTML-CSS-JS Prettify (HTMLPrettify.sublime-settings)

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
                                        https://editorconfig.org/) перезаписують
                                        правила з файлу ".jsbeautifyrc". Але
                                        налаштування use_editor_indentation та
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

##### Налаштування HTML-CSS-JS Prettify (.jsbeautifyrc)

Налаштування з файлів .jsbeautifyrc ігноруються, якщо respect_editorconfig_files
виставлена в true. Пакунок шукає файли .jsbeautifyrc у наступних директоріях:

1. директорія, в якій знаходиться файл, що підлягає форматуванню
2. директорії, вище по ієрархії від директорії, вказаної у пункті 1
3. домашня директорія користувача
4. Your personal Sublime settings folder

Якщо файл знайдено, пошук припиняється, наступні файли ігноруються.


##### Команди HTML-CSS-JS Prettify

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


#### Inc-Dec-Value                                              <i id="IDV"></i>

версія:      2016.06.28.13.08.24
автор:       Razumenko Maksim
посилання:   https://packagecontrol.io/packages/Inc-Dec-Value
             https://github.com/rmaksim/Sublime-Text-2-Inc-Dec-Value
призначення: пакунок може збільшувати/зменшувати різні типи даних
залежності:  ???

Пакунок збільшує/зменшує наступні види даних:

1. Додатні/від'ємні цілі числа
2. Додатні/від'ємні числа з плаваючою крапкою
3. Додатні/від'ємні числа і текст після них (12px, -5em, 0.1%)
4. Кольори у форматі hex:
    alt+up/down - +/- 1
    super+up/down(Linux) / super+alt+up/down(Windows) - кожен символ запису
    змінюється на 1
    super+alt+up/down(Linux) / super+ctrl+up/down(Windows) - hex -> rgba -> hex
    Якщо виділити фрагмент кольору, то змінюватиметься лише він. 
5. дати у форматі ISO (без перевірки валідності)
6. протилежні або циклічні enum-дані (true -> false; sunday -> monday -> …)
7. користувацькі enum-дані
8. рядки: lowercase -> capitalize -> uppercase


##### Меню Inc-Dec-Value

Preferences ▶ Package Settings ▶ Inc-Dec-Value


##### Налаштування Inc-Dec-Value

Див. inc_dec_value.sublime-settings


##### Команди Inc-Dec-Value

inc_dec_value збільшити на мінімальне значення
              alt+up
              alt+scroll_up
              args: { "action": "inc_min" } }

inc_dec_value зменшити на мінімальне значення
              alt+down
              alt+scroll_down
              args: { "action": "dec_min" } }

inc_dec_value вставити мінімальне значення
              alt+insert
              args: { "action": "ins_min" } }

inc_dec_value збільшити на максимальне значення
              super+up (Linux)
              super+alt+up (Windows)
              super+scroll_up
              args: { "action": "inc_max" } }

inc_dec_value зменшити на максимальне значення
              super+down (Linux)
              super+alt+down (Windows)
              super+scroll_down
              args: { "action": "dec_max" } }

inc_dec_value вставити максимальне значення
              super+insert (Linux)
              super+alt+insert (Windows)
              args: { "action": "ins_max" } }

inc_dec_value .
              super+alt+up (Linux)
              super+ctrl+up (Windows)
              super+alt+scroll_up
              args: { "action": "inc_all" } }

inc_dec_value .
              super+alt+down (Linux)
              super+ctrl+down (Windows)
              super+alt+scroll_down
              args: { "action": "dec_all" } }

inc_dec_value .
              args: { "action": "ins_all" } }
              super+alt+insert (Linux)
              super+ctrl+insert (Windows)


#### jQuery                                                     <i id="jQu"></i>

версія:      2015.09.02.08.19.54
автор:       SublimeText
посилання:   https://packagecontrol.io/packages/jQuery
             https://github.com/SublimeText/jQuery
призначення: надає підказки для jQuery
залежності:  немає

Додаток надає підказки-автокомпліти для jQuery. У парах ключ-значення зручно
бігати TAB'ом.

Жодних додаткових налаштувань робити не потрібно.


#### JsPrettier                                                 <i id="JsP"></i>

версія:      1.62.0
автор:       jonlabelle
посилання:   https://packagecontrol.io/packages/JsPrettier
             https://github.com/jonlabelle/SublimeJsPrettier
             https://prettier.io/
призначення: вирівнювання коду
залежності:  Node.js.js, npm, Prettier

Даний пакунок додає до Sublime Text функціонал форматувальника коду Prettier.
Для роботи вимагає наявності встановлених Node.js та Prettier v2.6 або вище.

```shell
# npm (local):
npm install --save-dev prettier

# npm (global):
npm install --global prettier
```

Prettier має багато плагінів для різних мов (напр. pug, nginx, sql, php),
підтримує EditorConfig (.editorconfig).

Для роботи з Prettier в проекті потрібно мати кофнігураційний файл
(.prettierrc.json, .prettierrc або якийсь інший - див. домументацію) та бажано
файл .prettierignore (без файлу ігнору не можлива консольна команда
prettier --write).

Приклад файлу конфігурації:
```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

Якщо у проекті використовується лінтер ESLint (або інший), порібно доставити
npm-пакет, який виключатиме правила ESLint, які конфліктують або не працюють з
Prettier:
eslint-config-prettier (https://github.com/prettier/eslint-config-prettier#installation),
stylelint-config-prettier (https://github.com/prettier/stylelint-config-prettier)

Для живого оновлення можна використовувати функцію watch (консольну або
скриптову), детальніше див. домументацію.

Для ігнорування коду використовуються коментарі:

```js
// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

```jsx
<div>
  {/* prettier-ignore */}
  <span     ugly  format=''   />
</div>

```

```html
<!-- prettier-ignore -->
<div         class="x"       >hello world</div            >

<!-- prettier-ignore-attribute -->
<div
  (mousedown)="       onStart    (    )         "
  (mouseup)="         onEnd      (    )         "
></div>

<!-- prettier-ignore-attribute (mouseup) -->
<div
  (mousedown)="onStart()"
  (mouseup)="         onEnd      (    )         "
></div>

```

```css
/* prettier-ignore */
.my    ugly rule
{

}
```

```md
<!-- prettier-ignore -->
Do   not    format   this
```

```yaml
# prettier-ignore
key  : value
hello: world
```

```graphql
{
  # prettier-ignore
  addReaction(input:{superLongInputFieldName:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {content}
  }
}
```

```handlebars
{{! prettier-ignore }}
<div>
  "hello! my parent was ignored"
  {{#my-crazy-component     "shall"     be="preserved"}}
    <This
      is  =  "also preserved as is"
    />
  {{/my-crazy-component}}
</div>

```


##### Меню JsPrettier

Selection ▶ Format ▶ JsPrettier: Format Code
Preferences ▶ Package Settings ▶ JsPrettier
Context ▶ JsPrettier Format Code


##### Налаштування JsPrettier

debug                                   вивід в консоль додаткової інформації
                                        false

prettier_cli_path                       шлях до бінарника prettier,
                                        рекомандовано залишати пустим. Деталі
                                        див. файл налаштувань
                                        ""

node_path                               шлях до бінарника node,
                                        рекомандовано залишати пустим. Деталі
                                        див. файл налаштувань
                                        ""

auto_format_on_save                     чи потрібно форматувати файл при
                                        збереженні
                                        false

auto_format_on_save_excludes            масив шаблонів шляхів до файлів/тек, які
                                        не повинні форматуватися
                                        []

auto_format_on_save_requires_prettier_config дозвіл на автоформатування при
                                             збереженні тільки, якщо є файл
                                             конфігурації
                                             false

allow_inline_formatting                 дозвіл на форматування шматка коду однієї
                                        мови в середині іншої. Якщо true,
                                        команда js_prettier стає доступною в
                                        усіх синтаксисах
                                        false

custom_file_extensions                  масив додаткових розширень файлів, в
                                        яких повинен працювати пакунок. Типи
                                        файлів із вбудованою підтримкою
                                        вказувати не потрібно ("js", "jsx",
                                        "cjs", "mjs", "json", "jsonc", "json5",
                                        "html", "graphql/gql", "ts", "tsx",
                                        "cts", "mts", "css", "scss", "less",
                                        "md", "mdx", "yml", "yaml", "vue",
                                        "component.html" (angular html) files).
                                        []

max_file_size_limit                     максимальний розмір файла в бітах, який
                                        форматуватиметься
                                        -1

disable_tab_width_auto_detection        відключення стандартного налаштування
                                        Sublime Text "tab_size"
                                        false

disable_prettier_cursor_offset          виправляє неправильну поведінку, див.
                                        файл налаштувань
                                        false

additional_cli_args                     набір пар ключ-значення для передачі в
                                        cli
                                        {}

prettier_options                        об'єкт з налаштуваннями Prettier
                                        {}

prettier_options.printWidth             максимальна довжина рядка
                                        80

prettier_options.tabWidth               розмір відступів. За замовчуванням
                                        береться з параметра ST tab_size, щоб
                                        відключити цю поведінку, треба виставити
                                        disable_tab_width_auto_detection в true
                                        2

prettier_options.singleQuote            використання одинарних лапок замість
                                        подвійних
                                        false

prettier_options.trailingComma          правила вставки висячих ком.
                                        "es5"/"none"/all"
                                        "es5"

prettier_options.bracketSpacing         контроль пробілів всередині об'єктів і
                                        масивів
                                        true

prettier_options.bracketSameLine        Put the `>` of a multi-line HTML (HTML,
                                        JSX, Vue, Angular) element at the end of
                                        the last line instead of being alone on
                                        the next line (does not apply to self
                                        closing elements).
                                        false

prettier_options.jsxSingleQuote         використання одинарних лапок замість
                                        подвійних у файлах JSX
                                        false

prettier_options.parser                 який парсер потрібно використовувати.
                                        Варіанти: "flow", "babel", "typescript",
                                        "css", "json", "graphql", "markdown",
                                        "yaml"
                                        "babel"

prettier_options.semi                   вставка крапки з комою в кінці кожного
                                        виразу
                                        true

prettier_options.requirePragma          Prettier can restrict itself to only
                                        format files that contain a special
                                        comment, called a pragma, at the top of
                                        the file. This is very useful when
                                        gradually transitioning large,
                                        unformatted codebases to prettier
                                        false

prettier_options.proseWrap              (Markdown and YAML Only) By default,
                                        Prettier will not change wrapping in
                                        markdown text since some services use a
                                        linebreak-sensitive renderer, e.g.
                                        GitHub comments and BitBucket. To have
                                        Prettier wrap prose to the print width,
                                        change this option to "always". If you
                                        want Prettier to force all prose blocks
                                        to be on a single line and rely on
                                        editor/viewer soft wrapping instead, you
                                        can use "never". Valid options:
                                        - "preserve" Wrap prose as-is.
                                        - "always" Wrap prose if it exceeds the
                                          print width.
                                        - "never" Do not wrap prose.
                                        "preserve"

prettier_options.arrowParens            обгортання дужками аргументів стрілочних
                                        функцій
                                        "always"

prettier_options.htmlWhitespaceSensitivity Specify the global whitespace
                                           sensitivity for HTML files. Valid
                                           Options:
                                           - "css" Respect the default value of
                                             CSS display property.
                                           - "strict" Whitespaces are considered
                                             sensitive.
                                           - "ignore" Whitespaces are considered
                                             insensitive.
                                          "css"

prettier_options.quoteProps             Change when properties in objects are
                                        quoted. Requires Prettier v1.17+. Valid
                                        options:
                                        - "as-needed" Only add quotes around
                                          object properties where required.
                                        - "consistent" If at least one property
                                          in an object requires quotes, quote
                                          all properties.
                                        - "preserve" Respect the input use of
                                          quotes in object properties.
                                        "as-needed"

prettier_options.vueIndentScriptAndStyle (Vue files Only) Whether or not to
                                         indent the code inside script- and
                                         style- tags in Vue files. Some people
                                         (like the creator of Vue) don't indent
                                         to save an indentation level, but this
                                         might break code folding in Sublime
                                         Text.
                                         false

prettier_options.embeddedLanguageFormatting форматування вбудованого коду
                                            "auto"/"off"
                                            "auto"

prettier_options.editorconfig           якщо є файл .editorconfig, Prettier буде
                                        брати налаштування з нього (не всі!)
                                        true

prettier_options.singleAttributePerLine Enforce single attribute per line in
                                        HTML, Vue and JSX.
                                        false

Пакунок підтримує можливість робити специфічні налаштування для конктетного
проекту. Для цього потрібно у файлі .sublime-project додати об'єкт
з налаштуваннями з ключем "js_prettier":

```json
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "js_prettier": {…}
  }
}
```


##### Команди JsPrettier

js_prettier JsPrettier: Format Code


#### LESS                                                       <i id="LSS"></i>

версія:      3.0.2
автор:       SublimeText
посилання:   https://packagecontrol.io/packages/Less
             https://github.com/SublimeText/Less
призначення: підсвітка синтаксису less
залежності:  немає


#### LiveReload                                                 <i id="LRl"></i>

версія:      0.1.3
автор:       alepez
посилання:   https://packagecontrol.io/packages/LiveReload
             https://github.com/alepez/LiveReload-sublimetext3
призначення: автоматичне перезавантаження браузера при збереженні змін в
             HTML/CSS/JS/SCSS/SASS
залежності:  немає

Після встановлення плагіна потрібно: Ctrl+Shift+P, прописати live reload та
вибрати LiveReload: Enable/Diasble plug-ins ▶ Enable - Simple Reload. Потім в
HTML-файл потрібно вставити скрипт: Snippet: Insert livereload.js script


##### Меню LiveReload

Rreferences ▶ Package Settings ▶ LiveReload


##### Команди LiveReload

live_reload_test          LiveReload: Self test
                          тестування працездатності пакунку

live_reload_help          LiveReload: Help
                          відкриває сторінку з допомогою

live_reload_enable_plugin LiveReload: Enable/disable plug-ins
                          вмикає/вимикає плагін перезавантаження


#### LockTab                                                    <i id="LoT"></i>

версія:      1.2.1
автор:       DavidGerva
посилання:   https://packagecontrol.io/packages/LockTab
             https://github.com/DavidGerva/LockTab-Sublime-Plugin
призначення: робить вкладки "липкими"
залежності:  ???

Для блокування/розблокування вкладки потрібно викликати контекстне меню не на
заголовку вкладки, а на полі, де знаходиться код.


##### Меню LockTab

Preferences ▶ Package Settings ▶ LockTab
Context ▶ Lock Tab
Context ▶ UnLock Tab
Context ▶ Toggle Tab Lock


##### Налаштування LockTab

alert               показувати попап, якщо вкладка заблокована
                    true

focus_on_closed_tab set the focus always on the closed tab (if locked)
                    true

hide_all            приховати усі пункти меню
                    false

locked              масив зі шляхами файлів, які є заблокованими вкладками
                    [ ]

show_toggle         якщо true, видно тільки пункт меню "Toggle Tab Lock", якщо
                    false - будуть видні пункти "Lock Tab" / "UnLock Tab"
                    false


##### Команди LockTab

lock_tab        заблокувати вкладку

unlock_tab      розблокувати вкладку

toggle_tab_lock перемкнути стан вкладки


#### Markdown HTML Preview                                      <i id="MHP"></i>

версія:      1.0.5
автор:       zeyon
посилання:   https://packagecontrol.io/packages/Markdown%20HTML%20Preview
             https://github.com/zeyon/MarkdownHtmlPreview
призначення: відкриває браузер і показує, як виглядає md-файл
залежності:  немає

##### Команди Markdown HTML Preview

markdown_html_preview Markdown HTML Preview
                      ctrl+shift+m
                      відкриває браузер і завантажує в нього оброблений md-файл.


#### Markdown Table Formatter                                   <i id="MTF"></i>

версія:      0.0.10
автор:       bitwiser73
посилання:   https://packagecontrol.io/packages/Markdown%20Table%20Formatter
             https://github.com/bitwiser73/MarkdownTableFormatter
призначення: вирівнювання таблиць у файлах markdown
залежності:  немає

Пакунок дозволяє вирівнювати таблиці у файлах формату markdown. Щоб вирівнювання
пройшло успішно, рядок, який розділяє тіло і шапку таблиці, не повинен мати
пробілів.

приклад таблиці:
```md
| header1 | header2 | header3 |
|:--------|:-------:|--------:|
|left     |  center |    right|
```


##### Меню Markdown Table Formatter


Edit ▶ Markdown Table Formatter
Preferences ▶ Package Settings ▶ Markdown Table Formatter


##### Налаштування Markdown Table Formatter

autoformat_on_save    автоформатування таблиць при збереженні файлу
                      false

default_justification визначає, як вирівнювати текст у стовпчиках
                      [LEFT, RIGHT, CENTER]
                      "LEFT"

margin                кількість пробілів між "|" і текстом комірки
                      1

padding               додаткові пробіли після/до тексту комірки
                      0

verbose               make plugin verbose in debug console
                      false


##### Команди Markdown Table Formatter

markdown_table_format MarkdownTableFormatter: format table
                      вирівняти таблицю, якщо виділений фрагмент, або виділити
                      усі таблиці, якщо нема виділеного фрагменту
                      ctrl+alt+shift+t


#### MarkdownEditing                                            <i id="MEg"></i>

версія:      3.1.10
автор:       SublimeText-Markdown
посилання:   https://packagecontrol.io/packages/MarkdownEditing
             https://sublimetext-markdown.github.io/MarkdownEditing
призначення: надає засоби для роботи з markdown
залежності:  немає

Пакунок надає інструменти для роботи з markdown:

- показує заголовки в Goto Symbol… / Goto Symbol in Project…
- згортає секцію із заголовком
- дає навігацію між заголовками (перехід на наступний/попередній)
- змінює рівень заголовка
- новий документ зберігається з іменем першого заголовка
- клавіша Tab у списку змінює рівень відступу і стиль маркеру
- клавіші Shift+Tab у списку повертає рівень відступу на попередній
- дозволяє проводити рецензію файлу ( `{++ addition ++}`, `{>> comment <<}`,
  `{-- deletion --}`, `{== highlight==}{>> comment <<}`,
  `{~~ substitution ~> by ~~}` ) та приймати або відхиляти їх (Alt+ENter /
  Alt+Backspace).
- автоматично згортає URL картинок і посилань
- Jump between definitions and references
- додає/видаляє виноски (footnotes)


##### Меню MarkdownEditing

Preferences ▶ Package Settings ▶ Markdown Editing
Context ▶ MarkdownEditing


##### Налаштування MarkdownEditing

mde.auto_fold_link.enabled              приховує посилання, замінюючи їх на три
                                        крапки для більшої читабельності
                                        true

mde.auto_fold_link.selector             визначає, які посилання будуть замінені
                                        на три крапки
                                        "( meta.image.inline.metadata.markdown | meta.image.reference.metadata.markdown | meta.link.inline.metadata.markdown | meta.link.reference.metadata.markdown ) - punctuation.definition.metadata"

mde.auto_increment_ordered_list_number  Auto increments ordered list number. Set
                                        to false if you want always "1"
                                        true

mde.auto_match_heading_hashes           If "true", trailing heading hashes are
                                        added or removed automatically,
                                        depending on a view's
                                        "mde.match_heading_hashes" setting value.
                                        Headings are fixed:
                                        a) when hitting enter at the end of a
                                           heading line
                                        b) after loading or before saving a file
                                           if "mde.auto_detect_match_heading_hashes"
                                           is "true".
                                        true

mde.bold_marker_asterisk                If "true" asterisk is used to markup
                                        bold text, underscore otherwise
                                        true

mde.detect_heading_style                auto detect whether to add trailing #'s
                                        to headlines.  If "true"
                                        "mde.match_heading_hashes" is set per
                                        view depending on majority of first 10
                                        headings containing trailing #'s or not.
                                        true

mde.italic_marker_asterisk              If "true" asterisk is used to markup
                                        italic text, underscore otherwise
                                        false

mde.keep_centered                       Always keep current line vertically
                                        centered
                                        false

mde.keymap_disable.fold_section         Fold current section Default keys:
                                        (OSX/Linux/Win) shift+tab
                                        false

mde.keymap_disable.goto_next_heading    Jump to the next heading (any level/same
                                        or higher level) Default keys:
                                        (OSX) super+ctrl/shift+pagedown
                                        (Linux/Win) ctrl+shift(+alt)+pagedown
                                        false

mde.keymap_disable.goto_previous_heading Jump to the previous heading (any level
                                        /same or higher level) Default keys:
                                        (OSX) super+ctrl/shift+pageup
                                        (Linux/Win) ctrl+shift(+alt)+pageup
                                        false

mde.keymap_disable.list_back_links      List pages the link to the current page
                                        false

mde.keymap_disable.make_page_reference  Make page reference
                                        true

mde.keymap_disable.open_home_page       Open the home page
                                        true

mde.keymap_disable.open_journal         Open the journal
                                        true

mde.keymap_disable.open_page            Open the page referenced
                                        false

mde.keymap_disable.reference_jump       Jump between link/image/footnote
                                        reference and definition. Default keys:
                                        (OSX) super+ctrl+shift+l (Linux/Win)
                                        ctrl+alt+g
                                        false

mde.keymap_disable.reference_new_footnote Add a new footnote Default keys:
                                          (OSX/Linux/Win) alt+shift+6
                                          false

mde.keymap_disable.reference_new_inline_image Add a new inline image Default
                                              keys: (OSX/Linux/Win) super+shift+k
                                              false

mde.keymap_disable.reference_new_inline_link Add a new inline link Default keys:
                                             (OSX) super+alt+v
                                             (Linux/Win) ctrl+super+v
                                             false

mde.keymap_disable.reference_new_reference Add a new link Default keys:
                                           (OSX) super+alt+r
                                           (Linux/Win) ctrl+super+r
                                           false

mde.keymap_disable.reference_organize   Reorganize footnotes footnote Default
                                        keys: (OSX) super+ctrl+s
                                        (Linux/Win) alt+shift+s
                                        true

mde.keymap_disable.set_heading_level    Set Heading Level. Default keys:
                                        (OSX/Linux/Win) alt+k, alt+0..9
                                        false

mde.keymap_disable.show_fold_all_sections Open a panel showing all functions
                                          related to folding. Default keys:
                                          (OSX/Linux/Win) ctrl+shift+tab
                                          false

mde.lint                                об'єкт з правилами для перевірки
                                        правопису. Див. файл налаштувань.

mde.list_align_text                     Align list item text at indentation
                                        level. Adds <Tab> after list items
                                        instead of a single <space>.
                                        false

mde.list_indent_auto_switch_bullet      Automatically switches list bullet when
                                        indenting blank list item with <Tab>
                                        true

mde.logging.level                       set log level, valid values: "CRITICAL",
                                        "ERROR", "WARN", "INFO", "DEBUG"
                                        "ERROR"

mde.match_heading_hashes                add trailing #'s to headlines false

mde.ref_organize_sort                   The sorting method used by the Organize
                                        References command. Should be one of:
                                        "reference_order": List in order of
                                          appearance in document
                                        "alphabetical": Alphabetical based on
                                          reference name, sorting numerals
                                          lexagraphically
                                        "numeric": Alphabetical based on
                                          reference name, sorting numeral chunks
                                          numerically
                                        "reference_order"

mde.ref_organize_sort_reverse           те саме, що і mde.ref_organize_sort
                                        false


mde.wikilinks.homepage                  wiki home page
                                        "HomePage"

mde.wikilinks.markdown_extension        wiki file extensions
                                        ".md"

mde.wikilinks.templates                 wiki templates
                                        {"default_page": "templates/PageTemplate.md"}

mde.list_indent_bullets                 List bullets to be used for
                                        automatically switching. In their order.
                                        ```
                                        ["*", "-", "+"]
                                        ```


##### Команди MarkdownEditing

mde_select_color_scheme                 MarkdownEditing: Select Color scheme
                                        вибір кольорової схеми

mde_toggle_centered_line                MarkdownEditing: Toggle Centered Line

mde_markdown_lint                       MarkdownEditing: Markdown Lint
                                        перевірити правопис внутрішніми засобами

mde_markdown_lint_mdl                   MarkdownEditing: Run markdownlint
                                        перевірити правопис (запустити зовнішній
                                        лінтер)

mde_match_heading_hashes                MarkdownEditing: Add Closing Heading Hashes
                                        args: { "enabled": true }

mde_match_heading_hashes                MarkdownEditing: Remove Closing Heading Hashes
                                        args: { "enabled": false }

mde_match_heading_hashes                MarkdownEditing: Fix Closing Heading Hashes

mde_fix_underlined_headings             MarkdownEditing: Fix Underlined Headings

mde_convert_underlined_headings_to_atx  MarkdownEditing: Convert Underlined Headings to ATX

mde_change_headings_level               MarkdownEditing: Convert Heading to Text
                                        перетворити заголовок на звичайний текст
                                        alt+k, alt+keypad0
                                        alt+k, alt+0
                                        args: { "to": 0 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 1
                                        alt+k, alt+keypad1
                                        alt+k, alt+1
                                        args: { "to": 1 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 2
                                        alt+k, alt+keypad2
                                        alt+k, alt+2
                                        args: { "to": 2 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 3
                                        alt+k, alt+keypad3
                                        alt+k, alt+3
                                        args: { "to": 3 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 4
                                        alt+k, alt+keypad4
                                        alt+k, alt+4
                                        args: { "to": 4 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 5
                                        alt+k, alt+keypad5
                                        alt+k, alt+5
                                        args: { "to": 5 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 6
                                        alt+k, alt+keypad6
                                        alt+k, alt+6
                                        args: { "to": 6 }

mde_change_headings_level               MarkdownEditing: Increase Headings Level
                                        #
                                        shift+alt+.
                                        args: { "by": 1 }

mde_change_headings_level               MarkdownEditing: Decrease Headings Level
                                        backspace
                                        delete
                                        shift+alt+
                                        args: { "by": -1 }

mde_goto_next_heading                   MarkdownEditing: Goto Next Heading (same or higher level)
                                        args: { "same_level": true }
                                        ctrl+shift+alt+pagedown

mde_goto_next_heading                   навігація по заголовках вперед
                                        args: { "same_level": false }
                                        ctrl+shift+pagedown

mde_goto_previous_heading               MarkdownEditing: Goto Previous Heading (same or higher level)
                                        args: { "same_level": true }
                                        ctrl+shift+alt+pageup

mde_goto_previous_heading               навігація по заголовках назад
                                        args: { "same_level": false }
                                        ctrl+shift+pageup

mde_fold_section                        MarkdownEditing: Fold Current Section
                                        ctrl+shift+[

mde_unfold_section                      MarkdownEditing: Unold Current Section
                                        ctrl+shift+]

mde_fold_all_sections                   MarkdownEditing: Fold Level 1 Sections
                                        args: { "target_level": 1 }
                                        ctrl+k, ctrl+keypad1
                                        ctrl+k, ctrl+1

mde_fold_all_sections                   MarkdownEditing: Fold Level 2 Sections
                                        args: { "target_level": 2 }
                                        ctrl+k, ctrl+keypad2
                                        ctrl+k, ctrl+2

mde_fold_all_sections                   MarkdownEditing: Fold Level 3 Sections
                                        args: { "target_level": 3 }
                                        ctrl+k, ctrl+keypad3
                                        ctrl+k, ctrl+3

mde_fold_all_sections                   MarkdownEditing: Fold Level 4 Sections
                                        args: { "target_level": 4 }
                                        ctrl+k, ctrl+keypad4
                                        ctrl+k, ctrl+4

mde_fold_all_sections                   MarkdownEditing: Fold Level 5 Sections
                                        args: { "target_level": 5 }
                                        ctrl+k, ctrl+keypad5
                                        ctrl+k, ctrl+5

mde_fold_all_sections                   MarkdownEditing: Fold Level 6 Sections
                                        args: { "target_level": 6 }
                                        ctrl+k, ctrl+keypad6
                                        ctrl+k, ctrl+6

mde_fold_all_sections                   MarkdownEditing: Fold All Sections
                                        ctrl+k, ctrl+keypad9
                                        ctrl+k, ctrl+9

mde_unfold_all_sections                 MarkdownEditing: Unfold All Sections
                                        args: { "target_level": 0 }
                                        ctrl+k, ctrl+keypad0
                                        ctrl+k, ctrl+0

mde_fold_links                          MarkdownEditing: Toggle Automatic Link URL Folding

mde_show_fold_all_sections              ???
                                        ctrl+shift+tab

mde_switch_list_bullet_type             MarkdownEditing: Switch List Bullet Type

mde_magic_footnotes                     MarkdownEditing: Magic Footnotes
                                        shift+f12
                                        f12

mde_reference_jump                      MarkdownEditing: Jump Reference
                                        shift+f12
                                        f12

mde_reference_new_reference             MarkdownEditing: New Reference
                                        ctrl+alt+r

mde_reference_new_inline_link           MarkdownEditing: New Inline Link
                                        ctrl+alt+v

mde_reference_new_inline_image          MarkdownEditing: New Inline Image
                                        super+shift+k

mde_reference_new_image                 MarkdownEditing: New Image

mde_reference_new_footnote              MarkdownEditing: New Footnote
                                        alt+shift+6

mde_reference_delete_reference          MarkdownEditing: Delete Reference

mde_convert_inline_links_to_references  MarkdownEditing: Convert all inline links to references

mde_convert_inline_link_to_reference    MarkdownEditing: Convert inline link to reference

mde_gather_missing_link_markers         MarkdownEditing: Add Missing Link Labels

mde_gather_missing_footnotes            MarkdownEditing: Gather Missing Footnotes

mde_reference_organize                  MarkdownEditing: Organize References
                                        ctrl+alt+s

mde_make_page_reference                 ???
                                        ctrl+alt+d

mde_add_numbered_reference_definition   ???
                                        keypad_enter
                                        enter

mde_open_home_page                      MarkdownEditing: Open Home Page
                                        ctrl+alt+h

mde_open_page                           MarkdownEditing: Open Page
                                        f12

mde_open_journal                        MarkdownEditing: Open Journal
                                        ctrl+alt+j

mde_list_back_links                     MarkdownEditing: List Back Links
                                        shift+f12

mde_indent_quote                        ctrl+shift+. - Increase block quote level
                                        > - Convert to or increase block quote level (selected text)
 
mde_unindent_quote                      Decrease block quote level
                                        ctrl+shift+,

mde_complete_underlined_headings        ???
                                        tab

mde_insert_task_list_item               Create new GFM Task
                                        alt+t

mde_number_list                         Extend Numbered Lists (also in block quotes)
                                        enter
                                        keypad_enter

mde_join_lines                          Join content of next into current line after removing its leading blockquote, list and GFM task punctuation
                                        delete
                                        ctrl+shift+j

mde_indent_list_item                    Indent list item if caret is in front of bullets
                                        Indent list item, if caret is directly behind bullet only if followed by whitespace
                                        Hitting "tab" directly after new list bullet should insert \t otherwise
                                        Indent list item if caret is behind bullets
                                        Indent selected list items
                                        tab

mde_unindent_list_item                  Unindent list item if caret is in front of bullets
                                        Unindent list item if caret is behind bullets
                                        Unindent list item if caret is at eol
                                        Unindent selected list items
                                        Unindent list item no matter of caret position if "shift_tab_unindent" is set
                                        shift+tab

mde_toggle_task_list_item               Toggle GFM tasks
                                        alt+x


#### MarkdownPreview                                            <i id="MPw"></i>

версія:      2.4.2
автор:       facelessuser
посилання:   https://packagecontrol.io/packages/MarkdownPreview
             https://github.com/facelessuser/MarkdownPreview
             https://facelessuser.github.io/MarkdownPreview/
призначення: Додаток показує в браузері, як виглядає md-файл.
залежності:  немає

Додаток має інтеграцію з LiveReload. Може працювати з різними парсерами (github,
gitlab - онлайн, python - офлайн, або іншими). Дозволяє зберегти згенерований
html у буфер обміну або файл, відкрити його у браузері або редакторі.


##### Меню MarkdownPreview

Preferences ▶ Package Settings ▶ Markdown Preview


##### Налаштування MarkdownPreview

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


##### Команди MarkdownPreview

markdown_preview_select Markdown Preview: Preview in Browser
                        args: { "target": "browser" }

markdown_preview_select Markdown Preview: Export HTML in Sublime Text
                        args: { "target": "sublime" }

markdown_preview_select Markdown Preview: Save to HTML
                        args: { "target": "save" }

markdown_preview_select Markdown Preview: Copy to Clipboard
                        args: { "target": "clipboard" }

markdown_preview        ???
                        відкриття md-файлу у певному середовищі з певним парсером
                        args: {"target": "browser", "parser":"markdown"}

markdown_cheatsheet     Markdown Preview: Open Markdown Cheat sheet
                        args: {}


#### nginx                                                      <i id="ngi"></i>

версія:      2023.06.11.15.29.21
автор:       brandonwamboldt
посилання:   https://packagecontrol.io/packages/nginx
             https://github.com/brandonwamboldt/sublime-nginx
призначення: підсвітка синтаксису конфігураційних файлів Nginx
залежності:  немає


#### Nodejs                                                     <i id="Njs"></i>

версія:      2.0.6
автор:       tanepiper, varp
посилання:   https://packagecontrol.io/packages/Nodejs
             https://github.com/tanepiper/SublimeText-Nodejs
призначення: підказки для NodeJS
залежності:  немає

Пакунок здатен запускати системи збірок. Для цього при відкритому js-файлі
потрібно вибрати систему (Tools ▶ Build System) і потім її запустити через
комбінацію клавіш Ctrl+B.

Пакунок має великий набір спіпетів, для їх використання потрібно набрати "node"
і натиснути Ctrl+Space.

Для автозавершення потрібно набрати частинку коду (напр. "fs") і натиснути
Ctrl+Space.


##### Меню Nodejs

Tools ▶ Nodejs
Preferences ▶ Package Settings ▶ Nodejs
Context ▶ Nodejs


##### Налаштування Nodejs

save_first        save before running commands
                  true

node_command      if present, use this command instead of plain "node"  e.g.
                  "/usr/bin/node" or "C:\bin\node.exe"
                  false

npm_command       if present, use this command instead of plain "npm"
                  false

node_path         as 'NODE_PATH' environment variable for node runtime
                  false

expert_mode       false

output_to_new_tab false


##### Команди Nodejs


node_run            Nodejs::Run::Current File
                    alt+r

node_run_arguments  Nodejs::Run::Current File + Arguments
                    ctrl+alt+r

node_drun           Nodejs::Debug::Run::Current File
                    alt+d

node_drun_arguments Nodejs::Debug::Run::Current File + Arguments
                    ctrl+alt+d

node_npm            Nodejs::NPM::Command

node_npm_install    Nodejs::NPM::Install

node_npm_uninstall  Nodejs::NPM::Uninstall

node_npm_update     Nodejs::NPM::Update

node_npm_list       Nodejs::NPM::List

node_npm_publish    Nodejs::NPM::Publish

node_npm_search     Nodejs::NPM::Search

node_builddocs      Nodejs::Build Completions

node_uglify         Nodejs::UglifyJS

edit_settings       Nodejs::User File Settings
                    args: {
                      "base_file": "${packages}/Nodejs/Nodejs.sublime-settings",
                      "default": "// Settings in here override those in \"Nodejs/Nodejs.sublime-settings\",\n// and are overridden in turn by syntax-specific settings.\n{\n\t$0\n}\n"
                    }

edit_settings       Nodejs::User Key Bindings
                    args: {
                      "base_file": "${packages}/Nodejs/Default ($platform).sublime-keymap",
                      "default": "// Settings in here override those in \"Nodejs/Default.sublime-keymap\"\n{\n\t$0\n}\n"
                    }


#### Origami                                                    <i id="Ori"></i>

версія:      2.2.3
автор:       SublimeText
посилання:   https://packagecontrol.io/packages/Origami
             https://github.com/SublimeText/Origami
призначення: створення довільних груп вкладок
залежності:  немає

Пакунок дозволяє створювати довільні групи вкладок і надає зручну по них
навігацію.


##### Меню Origami

View ▶ Origami
Preferences ▶ Package Settings ▶ Origami
Context ▶ Origami


##### Налаштування Origami

saved_layouts                масив збережених макетів (команда "Origami: Save
                             Current Layout")

create_new_pane_if_necessary створити нову групу вкладок, якщо її нема, але була
                             викликана команда навігації в її сторону
                             true

auto_zoom_on_focus           автомтичний зум активної панелі, boolean або число
                             від 0 до 1
                             false

auto_close_empty_panes       автоматичне закриття групи вкладок,
                             коли закривається остання вкладка 
                             false

destroy_empty_panes          видаляти не використовувані групи вкладок при
                             втраті фокусу
                             false


##### Команди Origami

travel_to_pane                 Origami: Focus on Pane Above/Below/Left/Right
                               ctrl+k, up/down/left/right

carry_file_to_pane             Origami: Move File to Pane Above/Below/Left/Right
                               ctrl+k, shift+up/down/left/right

clone_file_to_pane             Origami: Clone File to Pane Above/Below/Left/Right
                               ctrl+k, alt+up/down/left/right

create_pane                    Origami: Create Pane Above/Below/Left/Right
                               Origami: Create and Focus Pane Above/Below/Left/Right
                               ctrl+k, ctrl+up/down/left/right

pull_file_from_pane            Origami: Pull File from Pane Above/Below/Left/Right

destroy_pane                   Origami: Destroy Pane Above/Below/Left/Right
                               ctrl+k, ctrl+shift+up/down/left/right

create_pane_with_file          Origami: Create Pane with File Above/Below/Left/Right
                               ctrl+k, ctrl+alt+up/down/left/right

save_layout                    Origami: Save Current Layout

restore_layout                 Origami: Restore Saved Layout

remove_layout                  Origami: Remove Saved Layout

new_window_from_saved_layout   Origami: New Window from Saved Layout

new_window_with_current_layout Origami: New Window with Current Layout

toggle_zoom_pane               Origami: Zoom/Unzoom Current Pane (Toggle Zoom)

zoom_pane                      Origami: Zoom Current Pane

unzoom_pane                    Origami: Unzoom Current Pane


#### PackageResourceViewer                                      <i id="PRV"></i>

версія:      1.1.0
автор:       skuroda
посилання:   https://packagecontrol.io/packages/PackageResourceViewer
             https://github.com/skuroda/PackageResourceViewer
призначення: надає інструменти для роботи зі встановленими пакунками
залежності:  немає

Пакунок дозволяє переглядати код встановлених пакунків, переносити, редагувати.


##### Меню PackageResourceViewer

Preferences ▶ Package Settings ▶ PackageResourceViewer


##### Налаштування PackageResourceViewer

ignore_patterns    Список шаблонів регулярних виразів, які потрібно ігнорувати.
                   Ці регулярні вирази порівнюються з назвою файлу чи каталогу.
                   ["\\.(git|hg|svn|DS_Store)"]

open_multiple      чи тримати вікно вибору пакунків відкритим при уже вибраному
                   пакунку
                   true

single_command     визначає, чи потрібно відображати одну команду для перегляду
                   і редагування файлів, чи дві різні
                   true

return_to_previous True, якщо під час переміщення вгору каталогу ви бажаєте, щоб
                   попередній вибір вибирався автоматично.  False інакше.
                   false


##### Команди PackageResourceViewer

edit_package_file       PackageResourceViewer: Edit Package Resource
                        відкриває ресурси пакета як файл, який можна редагувати.
                        Після виконання цей плагін створить каталог (за потреби),
                        а також збереже ресурс. Ця команда відображатиметься,
                        лише якщо single_command: false.

extract_all_packages    PackageResourceViewer: Extract All Packages
                        розпакувує архіви всіх пакунків з директорії Packages і
                        переносить їх в Data/Packages

extract_package         PackageResourceViewer: Extract Package
                        розпакувує архів пакунку з директорії Packages і
                        переносить його в Data/Packages

package_resource_viewer PackageResourceViewer: Open Resource
                        дозволяє переглядати встановлені пакунки в Packages і
                        дивитися вміст файлів, ця команда доступна лише якщо
                        single_command: true

view_package_file       PackageResourceViewer: View Package Resource
                        дозволяє переглядати встановлені пакунки в Packages і
                        дивитися вміст файлів (без права редагування), ця
                        команда доступна лише якщо single_command: false


#### PlainTasks                                                 <i id="PTs"></i>

версія:      2021.11.20.13.41.04
автор:       aziz
посилання:   https://packagecontrol.io/packages/PlainTasks
             https://github.com/aziz/PlainTasks
призначення: організація todo-листів
залежності:  немає

Пакунок надає можливість організовувати todo-листи. Працює з файловими
розширеннями .todo/.todolist/.tasks/.taskpaper або файлами TODO без розширення.

Все, що закінчується двокрапкою, стає заголовком, заголовки можуть бути
вкладеними. Навігація по заголовках - ctrl+r.

Курсив позначається нижнім підкресленням, жирний текст - зірочками.

Якщо набрати два дефіса і натиснути tab, додаток вставить сепаратор:
--- ✄ -----------------------

Пакунок має такі вбудовані теги (вони присутні у попапі автодоповнення):
- @today,
- @critical,
- @high,
- @low,
- @started,
- @toggle,
- @created,
- @due.

@started() - повторне натиснення клавіші tab ставить дату після тега. Якщо
скасувати/зупинити/виконати цю задачу, з'явиться час, потрачений на неї.

@toggle(current date) зупиняє/відновлює виконання задачі (обрахунок часу)

@created(current date) - якщо через ctrl+shift+enter - створює нову задачу з цим
тегом

@due(date) - дозволяє здійснювати облік часу: під тегом вставляє скільки часу
лишилося до визначеної дати, або скільки часу пройшло з моменту, коли задача
повинна була бути виконаною. Формат дати: @due(year-month-day hour:minute).
Замість кінцевої дати можна вписувати кількість часу, потрібного на виконання
задачі (а потім натиснути tab, курсор має бути в дужках):

@due(1)          1-й день наступного місяця, час поточний                                                     |
@due(--1)        1-й день поточного місяця, час поточний                                                    |
@due(5)          5-й день поточного місяця (або наступного, якщо поточна дата
                 більша або рівна 5)
@due(2-3)        3-те лютого поточного року (або наступного, якщо поточна дата
                 більша)
@due(31 23:)     31-ше число поточного/наступного місяця, 23-ї години (хвилини -
                 з поточного часу)
@due(16.1.1 1:1) @due(16-01-01 01:01)
@due(+)          + 1 день (завтра)
@due(+1)         + 1 день (завтра)
@due(+1d)        + 1 день (завтра)
@due(+w)         + 1 тиждень
@due(+3w)        + 3 тижні
@due(++)         + 1 день від @created(date) якщо є, інакше @due(+)
@due(+2:)        + 2 години від поточної дати
@due(+:555)      + 555 хвилин від поточної дати
@due(+2 12:)     + 2 доби і 12 годин від поточної дати

Правий клік по тегу дає можливість фільтрувати теги: все, крім активного тегу,
буде згорнуто (розгорнути - ctrl+k,ctrl+j).

Доступна навігація по тегах - ctrl+shift+r.


Пакунок може відкривати посилання (ctrl+shift+u), усі, крім http(s), повинні
бути огорнені у ламані дужки, напр. <skype:nickname>.

Пакунок дозволяє створювати посилання на файли і каталоги проекту в todo-файлах.
Посилання відкриваються комбінацією клавіш alt+o. Відкриття каталогу призводить
до його появи у бічній панелі (додавання каталогу до проекту). У файлових
посиланнях можна додавати номер рядку і відступ курсору від краю, напр.:
".\filename:11:8".
```
[](path)
[](path ":11:8")
[](path ">symbol")
[](path "any text")
[[path]]
[[path::11:8]]
[[path::*symbol]]
[[path::any text]]
[[path]] ":11:8"
[[path]] ">symbol"
[[path]] "any text"
```

У файлах пакунку є файл Tutorial.todo з доступною інструкцією.


##### Меню PlainTasks

Preferences ▶ Package Settings ▶ PlainTasks
Context ▶ Tasks: Filter by tags under cursors
Context ▶ Tasks: Show date picker
Context ▶ Tasks: Add due date tag
Context ▶ Tasks: Sort items in the list under cursor by due date and priority
Context ▶ Tasks: Reverse sort items in the list under cursor by due date and
          priority


##### Налаштування PlainTasks

Тут тільки основні налаштування, детальніше див. у файлі налаштувань.


open_tasks_bullet          маркер відкритої задачі. Варіанти: - | ❍ | ❑ | ■ | □
                           | ☐ | ▪ | ▫ | – | — | ≡ | → | › | [ ]
                           "☐"

done_tasks_bullet          маркер виконаної задачі. Варіанти: + | ✓ | ✔ | √ | [x]
                           "✔"

cancelled_tasks_bullet     маркер скасованої задачі. Варіанти: x | ✘ | [-]
                           "✘"

before_tasks_bullet_margin відступ перед маркером задачі
                           1

date_format                формат дати (див. інструкцію: http://www.strfti.me/)
                           "(%y-%m-%d %H:%M)"

done_tag                   чи повинні виконані завдання отримувати тег @done
                           true

project_tag                if true - postfix archived task with project tag, if
                           false - prefix
                           true

archive_name               ім'я заголовка, яким позначаються заархівовані задачі
                           "Archive:"

new_on_top                 How to sort archived tasks (done_tag=true and default
                           date_format are required)
                           true


##### Команди PlainTasks

plain_tasks_archive                     Tasks: Archive
                                        ctrl+shift+a
                                        архівування задачі: перенесення її в
                                        кінець документа в секцію "Archive"

plain_tasks_archive                     Tasks: Archive within selection(s)
                                        args: {"partial": true}

plain_tasks_calendar                    Tasks: Show date picker

plain_tasks_cancel                      Tasks: Cancel
                                        alt+c
                                        позначити задачу скасованою

plain_tasks_complete                    Tasks: Complete
                                        ctrl+d
                                        позначити задачу виконаною (з датою),
                                        повторний клік - без дати

plain_tasks_convert_to_html             Tasks: Save as HTML…
                                        args: {"ask": true}
                                        відкриває нову вкладку в редакторі і
                                        вставляє в неї html-код, що відповідає
                                        todo-файлу.

plain_tasks_convert_to_html             Tasks: View as HTML
                                        конвертує todo-файл у тимчасовий html-
                                        файл і показує його у браузері

plain_tasks_copy_stats                  Tasks: Copy Statistics

plain_tasks_fold_to_due_tags            Tasks: Fold to due tasks

plain_tasks_fold_to_tags                Tasks: Filter by tags under cursors
                                        залишає видимими тількт задачі з тегом,
                                        на якому був клік правою клавішею миші,
                                        решту тексту згортає, щоб розгорнути
                                        згорнутий текст: ctrl+j

plain_tasks_inject_due_date             Tasks: Add due date tag
                                        f4

plain_tasks_new                         Tasks: New
                                        ctrl+enter / ctrl+i
                                        створення нової задачі

plain_tasks_new_task_doc                Tasks: New document
                                        відкриває нову чисту вкладку для листа

plain_tasks_open_link                   Tasks: Open Link
                                        alt+o

plain_tasks_open_url                    Tasks: Open URL
                                        ctrl+shift+u
                                        відкриття http(s)-посилання в тексті
                                        todo-файла. Посилання інших типів
                                        повинні бути у ламаних дужках, напр.
                                        <skype:nickname>

plain_tasks_org_archive                 Tasks: Archive (Org-Mode Style)

plain_tasks_sort_by_due_date_and_priority Tasks: Reverse sort items in the list
                                          under cursor by due date and priority
                                          f7
                                          args: {"descending": true} }

plain_tasks_sort_by_due_date_and_priority Tasks: Sort items in the list under
                                          cursor by due date and priority
                                          f5

plain_tasks_new_with_date               Створити нову задачу з тегом @created()
                                        ctrl+shift+enter

plain_tasks_goto_tag                    навігація по тегах (відкривається список
                                        тегів)
                                        ctrl+shift+r

plain_task_insert_date                  ?
                                        tab

plain_tasks_archive_org                 виділити усе дерево підзадач і перенести
                                        їх у новий файл із суфіксом
                                        ```"_archive"```
                                        ctrl+shift+o

plain_tasks_replace_short_date          ?
                                        tab

plain_tasks_re_calculate_time_for_tasks ?
                                        tab


#### Pug                                                        <i id="Pug"></i>

версія:      1.0.2
автор:       davidrios
посилання:   https://packagecontrol.io/packages/Pug
             https://github.com/davidrios/pug-tmbundle
призначення: підсвітка синтиксису pug
залежності:  немає


#### Random Everything                                          <i id="REg"></i>

версія:      2017.10.19.10.49.55
автор:       kimpettersen
посилання:   https://packagecontrol.io/packages/Random%20Everything
             https://github.com/kimpettersen/random-sublime-text-plugin
призначення: генерація випадкових даних
залежності:  немає

Пакунок не створює пункти меню і не має клавіатурних скорочень. Доступ до
команд здійснюється виключно через панель команд.


##### Команди Random Everything

random_country           Random:Country
                         назва випадкової країни

random_date              Random:Date
                         випадкова дата у форматі ISO-8601

random_datetime_rfc3339  Random:DateTimeRFC3339
                         випадкова дата + час

random_email             Random:E-mail
                         випадкова електронна пошта

random_first_name        Random:First Name
                         випадкове ім'я зі списку
                         /Packages/Random Everything/assets/first_names.txt

random_float_window      Random:Float
                         випадкове число з плаваючою крапкою із заданого
                         діапазону

random_full_name         Random:Full Name
                         випадкове повне ім'я

random_hex_color         Random:Hex Color
                         випадковий колір у форматі #abc123

random_int_window        Random:Int
                         випадкове ціле число із заданого діапазону

random_ipv4_address      Random:IPv4 Address
                         випадкова ip-адреса у форматі IPv4

random_ipv6_address      Random:IPv6 Address
                         випадкова ip-адреса у форматі IPv6

random_last_name         Random:Last Name
                         випадкове прізвище зі списку
                         Packages/Random Everything/assets/last_names.txt

random_letter            Random:Letters
                         рядок з великих і малих латинських букв довжиною 3-17
                         символів

random_letter_and_number Random:Letters and numbers
                         рядок із цифр, великих і малих латинських букв довжиною
                         3-17 символів

random_text              Random:Text
                         набір з 24 випадкових слів зі словника
                         Packages/Random Everything/assets/words.txt

random_time              Random:Time
                         випадковий час

random_url               Random:Url
                         випадковий url зі слів зі словника
                         Packages/Random Everything/assets/words.txt

random_uuid              Random:UUID
                         випадковий UUID

random_word              Random:Word
                         випадкове слово зі словника
                         Packages/Random Everything/assets/words.txt


#### SASS                                                       <i id="SAS"></i>

версія:      3.0.1
автор:       braver
посилання:   https://packagecontrol.io/packages/Sass
             https://github.com/braver/SublimeSass
призначення: підсвітка синтаксису sass/scss
залежності:  немає


#### SCSS                                                       <i id="SCS"></i>

версія:      2014.05.06.21.49.01
автор:       MarioRicalde
посилання:   https://packagecontrol.io/packages/SCSS
             https://github.com/MarioRicalde/SCSS.tmbundle
призначення: підсвітка синтаксису scss 
залежності:  немає


#### SFTP                                                       <i id="FTP"></i>

версія:      2.0.0
автор:       Will Bond (wbond)
посилання:   https://packagecontrol.io/packages/SFTP
             https://codexns.io/products/sftp_for_sublime
             https://codexns.io/products/sftp_for_sublime/buy (покупка ліцензії)
призначення: пакунок дозволяє синхронізувати каталоги, записувати/зчитувати
             файли по протоколу FTP/SFTP/FTPS. Фактично виконує функції
             вбудованої FileZilla.
залежності:  немає

Пакунок може
- створювати, редагувати, перейменовувати і видаляти файли і каталоги на стороні
  сервера
- завантажувати файли, каталоги з/на сервер
- синхронізувати каталоги
- порівнювати локальну і серверну версію файлу ???
- вивантажувати усі відкриті файли
- видаляти серверну версію файлу
- перейменовувати обидві версії файлів або каталогів
- слідкувати за змінами у файлах і автоматично їх вивантажувати
- перемикатися між кількома відаленими серверами
- ігнорувати файли по регулярному виразу
- вивантажувати файли при збереженні
- зберігати файли при вивантаженні ???
- автоматично завантажувати новіші файли при відкритті
- запитувати підтвердження на перезапис новіших файлів
- запитувати підтвердження завантажень
- зберігати дати зміни файлів
- підтримувати SSH для SFTP
- підтримувати пасивний/активний режими FTP
- підтримувати кілька вікон для одночасного завантаження
- підтримувати системи контролю версій


Пакунок має два напрямки роботи: робота на сервері (Server) та співставлення
локальних і віддалених каталогів (Remote). Серверна частина роботи
конфігурується у файлах з розширенням json каталогу Packages/User/sftp_servers.
Співставлення конфігурується файлами sftp-config.json, які мають розташовуватися
у коренях проектів, або теках, які мають порівнюватися з віддаленими каталогами
(remote_path у файлі конфігу).


##### Меню SFTP

File ▶ SFTP/FTP (Server settings)
Preferences ▶ Package Settings ▶ SFTP (plugin settings)
Context ▶ SFTP/FTP
Tab Context ▶ Upload Open Files
Tab Context ▶ Upload File
Side Bar ▶ SFTP/FTP


##### Налаштування SFTP

1. Налаштування плагіна (файл SFTP.sublime-settings)
Preferences ▶ Package Settings ▶ SFTP ▶ Settings – User


debug                       режим відладки (в консоль Sublime) буде виводитися
                            додаткова інформація
                            false

delete_temp_diff_folder     визначає, чи буде видалятися тимчасова тека, яка
                            створюється при порівнянні. Працює тільки при
                            включеній diff_command.
                              true - автоматично видаляється
                              false - залишається, користувач може її видалити
                              сам
                            true

hide_output_panel           визначає, коли панель виводу прихована.
                              true - панель показується тільки з помилками
                              false - панель видно завжди
                              number - час в секундах до закриття панелі
                            1

linux_enable_ssl            використання модуля ssl (якщо на linux потрібно
                            використовувати ftps)
                            false

monitoring_frequency        частота в мілісекундах виклику команди
                            sftp_monitor_file
                            200

monitoring_upload_delay     затримка в мілісекундах після зміни файлу перед
                            вивантаженням
                            500

diff_command                масив зі шляхом до зовнішнього виконуваного файлу
                            системи контролю версій з командою і аргументами.
                            Якщо нічого не вказано, буде використовуватися
                            вбудована в Sublime Text система порівняння.
                            []

debug_log_file              шлях до файлу, в який буде виводитися інформація по
                            відлагодженню (замість консолі)
                            ""

git_binary_path             абсолютний шлях до git (якщо його нема в PATH)
                            ""

hg_binary_path              абсолютний шлях до hg (якщо його нема в PATH)
                            ""

svn_binary_path             абсолютний шлях до svn (якщо його нема в PATH)
                            ""

osx_sync_down_on_open_delay затримка в мілісекундах перед перевіркою, чи була
                            ініційована подія завантаження файлу (специфічно для
                            osx)
                            500


2. Налаштування Remote/Server
Server: файли Packages/User/sftp_servers/name.json, File ▶ SFTP/FTP ▶ Edit Server
Remote: файли sftp-config.json в коренях проектів, SFTP/FTP ▶ Edit Remote Mapping…

allow_config_upload         ???
                            false

connect_timeout             кількість секунд до тайм-ауту після спроби
                            підключення
                            30

dir_permissions             вісімкові дозволи для каталогів chmod. Не повинні
                            починатися з 0
                            ""

extra_list_connections      кількість додаткових підключень до сервера під час
                            виконання списку команд, які використовуються для
                            визначення того, які операції слід виконувати під
                            час синхронізації. Додавання додаткових підключень
                            може значно покращити продуктивність синхронізації
                            для великих дерев тек.
                            0

file_permissions            вісімкові дозволи для файлів chmod. Не повинні
                            починатися з 0
                            ""

ftp_obey_passive_host       ???
                            false

ftp_passive_mode            Якщо для підключення по FTP слід використовувати
                            пасивний режим pasv. Якщо перше завантаження на
                            FTP-сервер займає багато часу, спробуйте встановити
                            значення false. Хоча це не встановлено явно за
                            замовчуванням у плагіні, бібліотека ftp Python за
                            замовчуванням використовує пасивний режим.
                            ""

host                        доменне ім'я або ip-адреса сервера
                            "example.com"

keepalive                   Кількість секунд між надсиланням фіктивної команди
                            на сервер, щоб з’єднання залишалося відкритим.  Для
                            з'єднань FTP команда NOOP, для з'єднань SFTP команда
                            cd .. Якщо встановити значення 0, команди підтримки
                            активності вимикаються.
                            0

password                    пароль для встановлення з'єднання.
                            ""

port                        номер порту для встановлення з'єднання. Потрібно
                            вказувати лише у разі використання не стандартного
                            порту для даного типу з'єднання.
                            ""

preserve_modification_times Якщо час модифікації файлів має бути збережено під
                            час вивантаження та завантаження.  Цей параметр може
                            бути false, true (для вивантажень і завантажень) і "download_only", який може знадобитися, оскільки ця
                            функція доступна не на всіх FTP-серверах.
                            false

remote_encoding             Віддалене кодування для шляхів файлів у кодуванні
                            Юнікод. Зазвичай це потрібно налаштувати лише для
                            FTP-серверів Windows, якщо використовуються шляхи до файлів у кодуванні Unicode.
                            "utf-8"

remote_locale               Ці параметри використовуються для аналізу останніх
                            змінених позначок часу у віддалених файлах. Зазвичай
                            це не потрібно коригувати.
                            "C"

remote_path                 абсолютний шлях до теки на сервері
                            "/example/path/"

remote_time_offset_in_hours Різниця в годинах між локальною машиною та
                            віддаленою машиною/сервером. Зазвичай це
                            визначається автоматично під час підключення, і
                            зазвичай не потрібно налаштовувати.
                            0

sftp_flags                  Необроблені прапори командного рядка для надсилання
                            у двійковий файл sftp у Linux або Mac або у
                            двійковий файл psftp.exe у Windows. Кожен прапор має
                            бути окремим записом у списку. Приклад:
                            ["-F", "/path/to/ssh_config"]
                            []

sftp_sudo                   Якщо виконуваний файл sftp-сервера має бути
                            викликаний на сервері через sudo. Для цього на
                            сервері, до якого підключено, потрібен sudo без
                            пароля, і на сервері має бути запущено Unix.
                            false

ssh_key_file                приватний ssh-файл-ключ для встановлення ssh-зв'язку.
                            Linux і Mac за замовчуванням використовуватимуть
                            закритий ключ у ~/.ssh/. У Windows це має бути файл
                            .ppk, створений за допомогою Pageant.
                            ""

type                        тип з'єднання "ftp"/"ftps"/"sftp". Також автоматично
                            змінює порт, якщо його не вказати вручну.
                            "sftp"

user                        ім'я користувача для встановлення з'єднання.
                            "username"


3. Налаштування тільки для режиму порівняння (Remote).

confirm_downloads       вказує, чи потрібно запитувати у користувача дозвіл на
                        завантаження файлу або теки.
                        false

confirm_overwrite_newer вказує, чи потрібно запитувати у користувача дозвіл на
                        перезапис файлу, більш старого, ніж версія на сервері.
                        Тільки для завантаження окремих файлів.
                        false

confirm_sync            вказує, чи потрібно запитувати у користувача дозвіл на
                        синхронізацію файлу або теки.
                        false

ignore_regexes          регулярні вирази для файлів і тек, які не потрібно
                        вивантажувати на сервер
                        ```
                        ["\\.sublime-(project|workspace)", "sftp-config(-alt\\d?)?\\.json", "sftp-settings\\.json", "/venv/", "\\.svn", "\\.hg", "\\.git", "\\.bzr", "_darcs", "CVS", "\\.DS_Store", "Thumbs\\.db", "desktop\\.ini"]
                        ```

save_before_upload      визначає, чи зберігатимуться файли перед завантаженням.
                        Це стосується лише файлів, завантажених за допомогою
                        команди з клавіатури.
                        false

sync_down_on_open       Під час відкриття файлу буде перевірено час віддаленої
                        зміни файлу. Якщо він новіший, користувачеві буде
                        запропоновано його завантажити.
                        false

sync_same_age           Якщо під час синхронізації потрібно передати файли
                        приблизно однакового віку. Протоколи FTP і SFTP не
                        повідомляють про час модифікації за межами деталізації
                        хвилини, що означає, що файли «одного віку» насправді
                        можуть бути різними.
                        true

sync_skip_deletes       When performing Sync Up and Sync Down command, skip
                        looking for files to delete.
                        false

upload_on_save          визначає, чи повинні файли автоматично вивантажуватися
                        під час збереження. Файли, вказані в ignore_regexes,
                        автоматично не вивантажуються.
                        false


###### Команди SFTP

sftp_upload_file                   SFTP: Upload File
                                   ctrl+alt+u, ctrl+alt+f

sftp_upload_open_files             SFTP: Upload Open Files
                                   ctrl+alt+u, ctrl+alt+n

sftp_download_file                 SFTP: Download File
                                   ctrl+alt+u, ctrl+alt+o

sftp_upload_folder                 SFTP: Upload Folder
                                   ctrl+alt+u, ctrl+alt+r

sftp_download_folder               SFTP: Download Folder
                                   ctrl+alt+u, ctrl+alt+e

sftp_diff_remote_file              SFTP: Diff Remote File
                                   ctrl+alt+u, ctrl+alt+i

sftp_rename_local_and_remote_paths Rename Local and Remote Files

sftp_delete_local_and_remote_paths Delete Local and Remote Files

sftp_delete_remote_path            Delete Remote File

sftp_sync_up                       SFTP: Sync Local -> Remote…
                                   ctrl+alt+u, ctrl+alt+y

sftp_sync_down                     SFTP: Sync Remote -> Local…
                                   ctrl+alt+u, ctrl+alt+d

sftp_sync_both                     SFTP: Sync Both Directions…
                                   ctrl+alt+u, ctrl+alt+b

sftp_monitor_file                  SFTP: Monitor File (Upload on External Save)
                                   ctrl+alt+u, ctrl+alt+m

sftp_vcs_changed_files             SFTP: Upload VCS Changed Files
                                   ctrl+alt+u, ctrl+alt+c

sftp_browse                        SFTP: Browse Remote…
                                   ctrl+alt+u, ctrl+alt+w

sftp_create_server                 SFTP: Setup Server…
                                   ctrl+alt+r, ctrl+alt+s

sftp_browse_server                 SFTP: Browse Server…
                                   ctrl+alt+r, ctrl+alt+b

sftp_edit_server                   SFTP: Edit Server…
                                   ctrl+alt+r, ctrl+alt+e

sftp_delete_server                 SFTP: Delete Server…
                                   ctrl+alt+r, ctrl+alt+d

sftp_create_config                 SFTP: Map to Remote…

sftp_edit_config                   SFTP: Edit Remote Mapping…

sftp_create_alt_config             SFTP: Add Alternate Remote Mapping…

sftp_switch_config                 SFTP: Switch Remote Mapping…

sftp_show_panel                    SFTP: Show Panel
                                   ctrl+alt+u, ctrl+alt+s

sftp_cancel_upload                 SFTP: Cancel Upload
                                   ctrl+alt+u, ctrl+alt+x

sftp_edit_settings                 Preferences: SFTP Settings

sftp_open_user_settings            Preferences: SFTP Settings - User

sftp_open_default_settings         Preferences: SFTP Settings - Default

sftp_edit_key_bindings             Preferences: SFTP Key Bindings

sftp_open_user_key_bindings        Preferences: SFTP Key Bindings - User

sftp_open_default_key_bindings     Preferences: SFTP Key Bindings - Default

sftp_enter_license_key             SFTP: Enter License Key

sftp_remove_license_key            SFTP: Remove License Key

sftp_enable_debug_mode             SFTP: Enable Debug Mode

sftp_disable_debug_mode            SFTP: Disable Debug Mode

sftp_last_server                   ???
                                   ctrl+alt+r, ctrl+alt+n


#### SidebarEnhancements                                        <i id="SBE"></i>

версія:      5.0.49
автор:       titoBouzout
посилання:   https://packagecontrol.io/packages/SideBarEnhancements
             https://github.com/titoBouzout/SideBarEnhancements
призначення: розширює функціонал бічної панелі
залежності:  немає


##### Меню SidebarEnhancements

Щоб позбутися стандартних елементів меню Sublime Text, потрібно створити два
порожніх файли в Preferences ▶ Browse Packages:

  Default/Side Bar Mount Point.sublime-menu
  Default/Side Bar.sublime-menu


File ▶ Save as Admin
Preferences ▶ Package Settings ▶ Side Bar
Tab Context ▶ Locate (locate_in_sidebar)
Side Bar Context ▶


##### Налаштування SidebarEnhancements

statusbar_modified_time              ???
                                     false

statusbar_modified_time_format       ???
                                     "%A %b %d %H:%M:%S %Y"

statusbar_modified_time_locale       ???
                                     ""

statusbar_file_size                  ???
                                     false

close_affected_buffers_when_deleting_even_if_dirty ???
                                                   false

hide_open_with_entries_when_there_are_no_applicable ???
                                                    false

confirm_before_deleting              ???
                                     true

confirm_before_permanently_deleting  ???
                                     true

new_files_relative_to_project_root   ???
                                     false

new_folders_relative_to_project_root ???
                                     false

disabled_menuitem_edit               ???
                                     false

disabled_menuitem_edit_to_right      ???
                                     false

disabled_menuitem_open_run           ???
                                     false

disabled_menuitem_open_in_browser    ???
                                     false

disabled_menuitem_open_in_new_window ???
                                     false

disabled_menuitem_find_in_project    ???
                                     false

disabled_menuitem_copy_name          ???
                                     false

disabled_menuitem_copy_path          ???
                                     false

disabled_menuitem_copy_path_windows  ???
                                     true

disabled_menuitem_copy_dir_path      ???
                                     true

disabled_menuitem_paste_in_parent    ???
                                     false

disabled_menuitem_empty              ???
                                     true

disabled_menuitem_folder_save        ???
                                     false

disabled_menuitem_folder_close       ???
                                     false

default_browser                      браузер за замовчуванням, у якому
                                     відкриватимуться файли (одне значення з:
                                     firefox, firefox-developer-edition, chrome,
                                     canary, chromium, opera, safari, ie, edge)
                                     ""

open_all_browsers                    масив значень зі списку:firefox,
                                     firefox-developer-edition, chrome, canary,
                                     chromium, opera, safari, ie, edge
                                     [ "firefox", "firefox-developer-edition",
                                     "chrome", "opera", "safari", "ie", "edge"]

portable_browser                     повний шлях до виконуваного файлу, напр.
                                     "C:/Program Files (x86)/Nightly/firefox.exe"
                                     ""

disable_send_to_trash                ???
                                     false

use_powershell                       ???
                                     true

use_command                          ???
                                     ""

copy_path_absolute_from_project_includes_line_number ???
                                                     false

find_and_replace_discards_previous_search            ???
                                                     false

find_and_replace_opens_in_new_view                   ???
                                                     true

i_donated_to_sidebar_enhancements_developer видалити попрошайку, ключ або false
                                            false


##### Команди SidebarEnhancements

aaaaa_side_bar                aaaaa_side_bar

reveal_in_side_bar            File: Locate
                              підсвітити файл у бічній панелі (якщо панель
                              закрита, команда її відкриє)

side_bar_copy                 ???

side_bar_copy_content_base64  ???

side_bar_copy_content_utf8    ???

side_bar_copy_dir_path        ???

side_bar_copy_name            File: Copy Name
                              скопіювати ім'я файлу із розширенням

side_bar_copy_name_encoded    File: Copy Name Encoded
                              скопіювати файл у форматі придатному для URL (усі
                              пробіли і не латинські літери замінюються їх
                              UTF-8-кодами, напр. пробіл - %20)

side_bar_copy_path            File: Copy Path
                              скопіювати шлях до файлу

side_bar_copy_path_absolute_from_project File: Copy Path Absolute To Project
                                         скопіювати абсолютний шлях від теки
                                         проекту

side_bar_copy_path_absolute_from_project_encoded File: Copy Path Absolute To Project Encoded
                                                 скопіювати абсолютний шлях від
                                                 теки проекту в URL-подібному
                                                 форматі

side_bar_copy_path_absolute_from_project_encoded_windows File: Copy Path (Windows)
                                                         скопіювати шлях до
                                                         файлу відносно проекту
                                                         (для Windows)

side_bar_copy_path_encoded    File: Copy Path as URI
                              скопіювати шлях до файлу в URL-подібному форматі

side_bar_copy_path_quoted     File: Copy Path Quoted
                              скопіювати шлях до файлу і огорнути його в лапки

side_bar_copy_path_relative_from_project File: Copy Relative Path To Project
                                         скопіювати відносний шлях від теки
                                         проекту

side_bar_copy_path_relative_from_project_encoded ???

side_bar_copy_path_relative_from_view ???

side_bar_copy_path_relative_from_view_encoded ???

side_bar_copy_path_relative_to_last_selected_view File: Copy Path Relative To Last Selected View
                                                  скопіювати відносний шлях
                                                  відносно останнього активного
                                                  вікна

side_bar_copy_project_directories Project Folders
                                  скопіювати шлях до кореневої теки проекту

side_bar_copy_tag_ahref       File: Copy as Tag a
                              копіює шлях до файлу і огортає його в тег
                              посилання

side_bar_copy_tag_script      File: Copy as Tag script
                              копіює шлях до js-файлу і огортає його в тег
                              скрипта

side_bar_copy_tag_style       File: Copy as Tag style
                              копіює шлях до css-файлу і огортає його в тег
                              style

side_bar_copy_url             File: Copy URL
                              ???

side_bar_copy_url_decoded     ???

side_bar_cut                  вирізати

side_bar_delete               File: Delete
                              видалити файл

side_bar_donate               ???

side_bar_duplicate            File: Duplicate
                              зробити копію файла

side_bar_edit                 ???

side_bar_edit_to_right        ???

side_bar_empty                ???

side_bar_files_open_with_edit_applications ???

side_bar_find_files_path_containing File: Search Files
                                    відкриває вкладку для пошуку тексту у шляхах
                                    проекту

side_bar_find_in_files_with_extension ???

side_bar_find_in_parent       ???

side_bar_find_in_project      ???

side_bar_find_in_project_folder ???

side_bar_find_in_project_folders ???

side_bar_find_in_selected     ???

side_bar_folder_close_other_views ???

side_bar_folder_close_views   ???

side_bar_folder_save_views    ???

side_bar_mass_rename          ???

side_bar_move                 File: Move
                              перемістити файл

side_bar_new_directory        File: New Folder Relative to Current View
                              створити теку відносно поточної області перегляду

side_bar_new_directory2       File: New Folder Relative to Project Root
                              створити теку відносно кореневої теки проекту

side_bar_new_file             File: New File Relative to Current View
                              створити файл відносно поточної області перегляду

side_bar_new_file2            File: New File Relative to Project Root
                              створити файл відносно кореневої теки проекту

side_bar_open                 ???

side_bar_open_browsers        ???

side_bar_open_in_browser      File: Open In Browser - Testing Server
                              відкриває файл у дефолтному браузері
                              args: {
                                "paths": [],
                                "type": "testing"
                              }

side_bar_open_in_browser      File: Open In Browser - Production Server
                              відкриває файл у дефолтному браузері
                              args: {
                                "paths": [],
                                "type": "production"
                              }

side_bar_open_in_new_window   ???

side_bar_open_with_finder     ???

side_bar_paste                ???

side_bar_preview_edit_urls    ???

side_bar_project_item_add     ???

side_bar_project_item_exclude ???

side_bar_project_item_exclude_from_index ???

side_bar_project_item_remove_folder ???

side_bar_project_open_file    Project: Edit ???

side_bar_rename               File: Rename
                              перейменувати файл

side_bar_reveal               File: Reveal
                              відкрити теку, яка містить файл, через провідник
                              операційної системи


#### SideBarGit                                                 <i id="SBG"></i>

версія:      -
автор:       titoBouzout
посилання:   https://packagecontrol.io/packages/SideBarGit
             https://github.com/titoBouzout/SideBarGit
призначення: додає в контекстне меню файлів/тек пункт "Git"
залежності:  ???

Пакунок додає в контекстне меню файлів/тек пункт "Git". Додаток від того ж
автора, що і додаток Git (titoBouzout).

https://github.com/titoBouzout/SideBarGit


##### Меню SideBarGit

Preferences ▶ Package Settings ▶ Side Bar Git
Context ▶ Git


##### Налаштування SideBarGit

див. файл SideBarGit.sublime-settings.


##### Команди SideBarGit

Команд багато, але практична користь їх описувати відсутня. Детальніше див. файл
Commands.sublime-commands.


#### StyleToken                                                 <i id="StT"></i>

версія:      2016.08.08.07.56.05
автор:       vcharnahrebel
посилання:   https://packagecontrol.io/packages/StyleToken
             https://github.com/vcharnahrebel/style-token
призначення: підсвітка довільних фрагментів коду
залежності:  немає

За замовчуванням підтримує 5 стилів, але може бути розширений до 10
(StyleToken.sublime-settings).


##### Меню StyleToken

Context ▶ Style Token


##### Команди StyleToken

token_style         Style [1-5]
                    підсвічує виділений текст відповідним стилем
                    args:
                      style_index: порядковий номер стилю

token_style_clear   Clear All
                    видаляє підсвітку обраного стилю, якщо без аргументів - 
                    видаляє підсвітку усіх стилів
                    args:
                      style_index: порядковий номер стилю

token_style_go      Jump to next token
                    переходить до наступного виділеного фрагменту даного стилю,
                    якщо без аргументу - переходить до наступного фрагменту
                    довільного стилю
                    args:
                      style_index: порядковий номер стилю

token_style_go_back Jump to prev token
                    переходить до попереднього виділеного фрагменту даного стилю,
                    якщо без аргументу - переходить до попереднього фрагменту
                    довільного стилю
                    args:
                      style_index: порядковий номер стилю


#### SublimeCodeIntel                                           <i id="SCI"></i>

версія:      2.2.0
автор:       Kronuz
посилання:   https://packagecontrol.io/packages/SublimeCodeIntel
             https://sublimecodeintel.github.io/
призначення: надає доступ до автокомплітів багатьох мов програмування
залежності:  CodeIntel, Python, pip

Пакунок робить дві речі: автокомпліт стандартних функцій мови програмування
(підтримує мови ActionScript, Django, Docker, EJS, epMojo, HTML, KomodoSnippet,
LaravelBlade, Mason, Mustache, MXML, PHP, R, reStructuredText, RHTML, Smarty,
TracWiki, TemplateToolkit, Twig, XBL, XML, XSLT, XUL, Python, Python3, Ruby,
Perl, Go, ECMAScript, JavaScript, Node.js, CSS, SCSS, Sass, Less, HTML5, Tcl,
C/C++, Objective-C.) та додавання в контекстне меню команди для переходу на
місце оголошення функції.

Після встановлення Python, встановлюється pip, потім CodeIntel:
```cmd
sudo apt install python3-pip
sudo pip3 install --upgrade --pre CodeIntel
```


##### Меню SublimeCodeIntel

Preferences ▶ Package Setting ▶ SublimeCodeIntel
Context ▶ Jump to Symbol Definition
Context ▶ Back to Symbol Definition


##### Налаштування SublimeCodeIntel

codeintel                         додаток увімкнений/вимкнений
                                  true

codeintel_database_dir            path to codeintel database
                                  "~/.codeintel"

codeintel_enabled_languages       масив мов, з якими пакунок працює
                                  [ "JavaScript", "SCSS", "Python", "HTML",
                                  "Ruby", "Python3", "XML", "Sass", "HTML5",
                                  "Perl", "CSS", "Twig", "Less", "Node.js",
                                  "TemplateToolkit", "PHP" ]

codeintel_exclude_scopes_from_complete_triggers When editing within a defined
                                                scope, no live completion will
                                                trigger
                                                ["comment"]

codeintel_live                    спосіб появи вікна з підказками
                                    true - автоматично
                                    false - тільки по команді
                                  true

codeintel_max_recursive_dir_depth максимальна вкладеність тек
                                  10

codeintel_scan_exclude_dir        масив патернів для шляхів, які потрібно
                                  виключити зі сканування, тільки для JS і PHP
                                  []

codeintel_scan_files_in_project   Include all files and directories from the
                                  project base directory
                                  true

codeintel_snippets                чи використовувати сніпети
                                  true

codeintel_syntax_map              об'єкт, який дозволяє співставляти синтаксиси
                                  файлів з мовами програмування
                                  { "Python Django": "Python" }

codeintel_tooltips                Tooltips method
                                    "popup" - Uses Autocomplete popup for tooltips
                                    "panel" - Uses the output panel for tooltips
                                    "status" - Uses the status bar for tooltips
                                               (was the default)
                                  "popup"

codeintel_word_completions        звідки брати автокомпліти слів
                                    "buffer" - слова з активної вкладки
                                    "all" - слова з усіх вкладок активного вікна
                                    "none" - не використовувати підказки для слів
                                  "buffer"

codeintel_language_settings       об'єкт з особливими налаштуваннями для мов,
                                  можна перевизначити наступні налаштування:
                                  codeintel_live, codeintel_tooltips,
                                  codeintel_word_completions, codeintel_snippets,
                                  codeintel_scan_exclude_dir,
                                  codeintel_max_recursive_dir_depth,
                                  codeintel_scan_files_in_project,
                                  codeintel_exclude_scopes_from_complete_triggers
                                  {
                                    "Python3": {
                                      "python3": "/usr/local/bin/python3.3",
                                      "codeintel_scan_extra_dir": [
                                        "/Applications/Sublime Text.app/Contents/MacOS",
                                        "~/Library/Application Support/Sublime Text 3/Packages/SublimeCodeIntel/arch",
                                        "~/Library/Application Support/Sublime Text 3/Packages/SublimeCodeIntel/libs"
                                      ],
                                      "codeintel_scan_files_in_project": true,
                                      "codeintel_selected_catalogs": []
                                    },
                                    "JavaScript": {
                                      "codeintel_scan_extra_dir": [],
                                      "codeintel_scan_exclude_dir":["/build/", "/min/"],
                                      "codeintel_scan_files_in_project": false,
                                      "codeintel_max_recursive_dir_depth": 2,
                                      "codeintel_selected_catalogs": ["jQuery"]
                                    },
                                    "PHP": {
                                      "php": "/Applications/MAMP/bin/php/php5.5.3/bin/php",
                                      "codeintel_scan_extra_dir": [],
                                      "codeintel_scan_files_in_project": true,
                                      "codeintel_max_recursive_dir_depth": 15,
                                      "codeintel_scan_exclude_dir":["/Applications/MAMP/bin/php/php5.5.3/"]
                                    }
                                  }

codeintel_selected_catalogs       API Catalogs: SublimeCodeIntel uses API
                                  catalogs to provide autocomplete and calltips
                                  for 3rd-party libraries.
                                  Add te libraries that you use in your code.
                                  Note: Adding all API catalogs for a particular
                                  language can lead to confusing results.
                                  Avaliable catalogs:
                                    PyWin32 (Python3) (for Python3: Python Extensions for Windows)
                                    PyWin32 (for Python: Python Extensions for Windows)
                                    Rails (for Ruby: Rails version 1.1.6)
                                    jQuery (for JavaScript: jQuery JavaScript library - version 1.9.1)
                                    Prototype (for JavaScript: JavaScript framework for web development)
                                    dojo (for JavaScript: Dojo Toolkit API - version 1.5.0)
                                    Ext_30 (for JavaScript: Ext JavaScript framework - version 3.0)
                                    HTML5 (for JavaScript: HTML5 (Canvas, Web Messaging, Microdata))
                                    MochiKit (for JavaScript: A lightweight JavaScript library - v1.4.2)
                                    Mozilla Toolkit (for JavaScript: Mozilla Toolkit API - version 1.8)
                                    XBL (for JavaScript: XBL JavaScript support - version 1.0)
                                    YUI (for JavaScript: Yahoo! User Interface Library - v2.8.1)
                                    Drupal (for PHP: A full-featured PHP content management/discussion engine -- v5.1)
                                    PECL (for PHP: A collection of PHP Extensions)
                                  []


##### Команди SublimeCodeIntel

back_to_python_definition          Back to Symbol Definition
                                   повертає курсор на місце використання функції
                                   super+alt+ctrl+left

code_intel_auto_complete           виклик попапа з підказками
                                   shift+ctrl+space

goto_python_definition             Jump to Symbol Definition
                                   переводить курсор на місце декларації функції
                                   super+alt+ctrl+up / super+mouse1 (Linux) / alt+mouse1 (Windows)

sublimecodeintel_disable           SublimeCodeIntel: Disable Plugin
                                   виключити пакунок
                                   args: {"action": "disable"}

sublimecodeintel_disable_live      SublimeCodeIntel: Disable Live Autocompletion
                                   args: {"action": "off"}

sublimecodeintel_disable_live_lang SublimeCodeIntel: Disable Live Autocompletion for Current Language
                                   args: {"action": "lang-off"}

sublimecodeintel_dump_import_dirs  SublimeCodeIntel: Dump Import Directories

sublimecodeintel_enable            SublimeCodeIntel: Enable Plugin
                                   args: {"action": "enable"}

sublimecodeintel_enable_live       SublimeCodeIntel: Enable Live Autocompletion
                                   args: {"action": "on"}

sublimecodeintel_enable_live_lang  SublimeCodeIntel: Enable Live Autocompletion for Current Language
                                   args: {"action": "lang-on"}

sublimecodeintel_reset             SublimeCodeIntel: Reset
                                   arg: {"action": "reset"}


#### SublimeLinter                                              <i id="SuL"></i>

версія:      4.22.0
автор:       SublimeLinter
посилання:   https://packagecontrol.io/packages/SublimeLinter
             https://github.com/SublimeLinter/SublimeLinter
             https://www.sublimelinter.com/
призначення: фреймворк для перевірки синтаксису коду
залежності:  немає


##### Меню SublimeLinter

Preferences ▶ Package Settings ▶ SublimeLinter
Context ▶ Lint This View
Context ▶ Linter Quick Action


##### Налаштування SublimeLinter

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


##### Налаштування лінтерів

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


##### Команди SublimeLinter

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


#### SublimeLinter-annotations                                  <i id="SLa"></i>

версія:      1.5.3
автор:       SublimeLinter
посилання:   https://packagecontrol.io/packages/SublimeLinter-annotations
             https://github.com/SublimeLinter/SublimeLinter-annotations
призначення: підсвічує в коді технічні мітки
залежності:  ???

Даний лінтер дозволяє підсвічувати довільні літерали, які знаходяться в середині
коментарів. Пошук літералів є регістрозалежним.


##### Налаштування SublimeLinter-annotations

Лінтер не має власного файлу налаштувань, його налаштування прописуються у файлі
налаштувань SublimeLinter в секції "linters".

warnings     масив рядків для пошуку, які підсвічуватимуться як попередження

errors       масив рядків для пошуку, які підсвічуватимуться як помилки

infos        масив рядків для пошуку, які підсвічуватимуться як інформація

mark_message чи буде підсвічуватися весь коментар, чи тільки співпадіння

selector_    A scope selector for regions that the word lists will be searched
             in.

Приклад налаштувань:

```json
{
  "linters": {
    "annotations": {
      "infos": ["NOTA BENE", "FYI", "@todo"],
      "warnings": ["FOO", "BAR"],
      "errors": ["WHAT?", "OMG!"]
    }
  }
}
```


#### SublimeLinter-contrib-htmlhint                             <i id="ScH"></i>

версія:      2.0.1
автор:       htmlhint
посилання:   https://packagecontrol.io/packages/SublimeLinter-contrib-htmlhint
             https://github.com/htmlhint/SublimeLinter-contrib-htmlhint
призначення: надає можливість перевіряти правильність синтаксису HTML
залежності:  ???

Лінтер надає доступ до інтерфейсу HTMLHint (https://htmlhint.com/),


##### Установка SublimeLinter-contrib-htmlhint

Лінтер можна встановити локально обо глобально:
```shell
npm install -g htmlhint@latest
npm install htmlhint@latest
```


##### Налаштування SublimeLinter-contrib-htmlhint

Налаштування лінтера зберігаються у файлі налаштувань .htmlhintrc, причому
правила прописуються одразу в об'єкт, а не в якусь підсекцію на зразок "rules":

```json
{
  "attr-no-duplication": true,
  "doctype-first": true
}
```

Також правила можуть прописуватися безпосередньо в html-файлах, у коментарях:
```html
<!-- htmlhint tag-pair,id-class-value:underline -->
<html>
  <head>...</head>
  <body>...</body>
</html>
````

Повний список правил доступний за адресою:
https://htmlhint.com/docs/user-guide/list-rules


#### SublimeLinter-contrib-markdownlint                         <i id="SLm"></i>

версія:      1.2.2
автор:       jonlabelle
посилання:   https://packagecontrol.io/packages/SublimeLinter-contrib-markdownlint
             https://github.com/jonlabelle/SublimeLinter-contrib-markdownlint
призначення: надає можливість перевіряти правильність синтаксису markdown
залежності:  ???

Лінтер надає доступ до інтерфейсу markdownlint
(https://github.com/igorshubovych/markdownlint-cli), здійснює перевірку файлів
Markdown/CommonMark.

https://github.com/DavidAnson/markdownlint

Для роботи лінтера потрібно встановити відповідний npm-пакет:

```shell
npm install markdownlint-cli
```


##### Налаштування SublimeLinter-contrib-markdownlint

Налаштування лінтера зберігаються у файлі .markdownlintrc, який повинен бути
розташований у корені проекту. Лінтер шукає цей файл, починаючи від директорії,
в якій знаходиться лінтований файл, і вверх до кореня операційної системи, потім
перевіряє домашню директорію користувача. Якщо потрібно розташувати файл з
налаштуваннями деінде, це треба вказати у файлі налаштувань SublimeLinter в
секції "linters", напр.:
```json
{
  "linters": {
    "markdownlint": {
      "args": ["--config", "/custom/path/to/.markdownlintrc"]
    }
  }
}
```

Для виключення певних файлів з перевірки використовується файл
.markdownlintignore, який має синтаксис .gitignore.


setting_name пояснення налаштування
               варіант 1: пояснення
                 lorem
               варіант 2: пояснення
                 lorem
             type or default value



Повний список правил доступний за адресою:
https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md


#### SublimeLinter-eslint                                       <i id="SLe"></i>

версія:      4.4.0
автор:       SublimeLinter
посилання:   https://packagecontrol.io/packages/SublimeLinter-eslint
             https://github.com/SublimeLinter/SublimeLinter-eslint
призначення: надає можливість перевіряти правильність синтаксису JS
залежності:  ???

Лінтер надає доступ до інтерфейсу ESLint
https://github.com/eslint/eslint
https://eslint.org


Для використання лінтеру необхідно встановити eslint через пакетний менеджер
npm глобально або як модуль в проекті:

```shell
npm install -g eslint // global
npm install -D eslint // local
```

SublimeLinter з коробки здатен розпізнавати typescript, vue, svelte, html, json
і надсилає їх в eslint. Якщо налаштовувати виконуваний файл вручну,
SublimeLinter надсилатиме в eslint тільки файли js. Для ручного визначення,
які файли SublimeLinter надсилатиме в eslint, можна в налаштуваннях прописати
області видимості (властивість "selector"):

```json
{
  "linters": {
    "eslint": {
      "selector": "source.ts, source.js - meta.attribute-with-value"
    }
  }
}
```

Конфігурація для JS: source.js - meta.attribute-with-value
Конфігурація для TS: source.ts, source.js - meta.attribute-with-value
Конфігурація для Vue: text.html.vue, source.js - meta.attribute-with-value


##### Налаштування eslint

Встановити і одразу сконфігурувати eslint можна, якщо в кореневій теці проекту
запустити команду:

```shell
npm init @eslint/config
```

В результаті з'явиться файл .eslintrc.{js,yml,json} з приблизним вмістом:

```json
{
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

Тут "semi" є назвою правила, перший елемент масиву - тип відображення (off - 
правило вимкнене/warn/error).

Другий спосіб налаштувати уже встановлений лінтер - блок "eslintConfig" у файлі
package.json.


##### Пріоритетність зчитування налаштувань

1. .eslintrc.js   : синтаксис JavaScript, експортує об'єкт (module.exports = {})
2. .eslintrc.cjs  : синтаксис JavaScript (ESM) ("type":"module" в package.json)
3. .eslintrc.yaml : синтаксис yaml
4. .eslintrc.yml  : синтаксис yaml
5. .eslintrc.json : синтаксис json, але з підтримкою js-коментарів
6. package.json   : об'єкт з ключем "eslintConfig"


Усі файли крім package.json дозволяють робити коментарі. Лінтер шукає дані файли,
починаючи з каталогу, в якому розташований файл, що перевіряється на даний
момент, аж до кореня операційної системи, також перевіряє домашню директорію
користувача і застосовує усі правила, вказані в усіх файлах. Щоб зупинити пошук
конфігураційних файлів на певному каталозі, у файлі з цього каталогу потрібно
прописати:

```json
{
    "root": true
}
```

При конфлікті правил перевагу має те правило, яке прописане у файлі, що є більш
вкладеним.


##### Властивості об’єкта налаштувань (.eslintrc.{js,yml,json})

env            лексичне оточення для лінтера, можна вибрати декілька. Значень
               дуже багато, повний список:
               https://eslint.org/docs/latest/user-guide/configuring/language-options
               Також лексичне оточення або довільні змінні можна визначити для
               конкретного файла у коментарі.
```json
{
  "env": {
    "browser": true,
    "node": true
  }
}
```

extends        масив рядків або рядок, який вказує шлях до конфігурації, яка
               буде наслідуватися (напр. eslint:recommended або eslint:all).
               Префікс eslint-config- у назві розширення можна не вказувати, так
               напр. "airbnb" буде прийнято, як "eslint-config-airbnb". Для
               використання розширень їх потрібно додаткови встановлювати, напр.
               npm init @eslint/config. eslint:recommended активує підмножину
               правил, які запобігають основним проблемам, eslint:all активує
               усі правила (не рекомендовано для production, бо в кожній новій
               версії може бути багато змін).

ignorePatterns патерни, які вказують на файли і директорії, які ігноруються
               лінтером. Параметри, вписані у файлі .eslintignore мають перевагу
               над ignorePatterns

noInlineConfig якщо true, забороняє конфігураційні коментарі у файлах

overrides      об'єкт, який дозволяє перевизначити правила для окремої категорії
               файлів, додати або прибрити файли з цієї категорії. Області
               "overrides" допускає усі ключі, що існують у конфігу, за винятком
               "root" та "ignorePatterns".
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

parser         парсер коду для лінтера

parserOptions  об'єкт з налаштуваннями парсера.

parserOptions.ecmaVersion   версія ECMAScript

parserOptions.sourceType    "script"/"module"

parserOptions.allowReserved дозвіл на використання зарезервованих слів як
                            змінних (для ecmaVersion 3)

parserOptions.ecmaFeatures  об'єкт з додатковими налаштуванями (globalReturn /
                            impliedStrict / jsx)

plugins        масив рядків, де рядок - це ім'я або шлях до плагіна. Плагіни
               потрібно доставляти окремо. В назвах плагінів можна пропускати
               префікс "eslint-plugin-", наприклад писати "react" замість
               "eslint-plugin-react".

root           вказує, чи потрібно шукати файли налаштувань вище по ієрархії.
               Якщо true - лінтер вважає даний файл найвищим і припиняє пошуки.

rules          об'єкт з правилами для перевірки, дані правила перезаписують
               правила розширень, вказаних у "extends".

settings       об'єкт із "розшареними" властивостями, які використовуються
               плагінами для указання інформації, яка має бути спільною для усіх
               правил


##### Ігнорування коду

Код можна ігнорувати за допомогою властивості ignorePatterns об'єкту налаштувань,
властивості eslintIgnore файлу package.json або файлу .eslintignor, який має
синтаксис .gitignore.


##### Маніпуляція над правилами

Кожне правило може приймати одне з трьох значень:

1. "off" / 0
2. "warn" / 1
3. "error" / 2

Правила можна конфігурувати у властивості "rules" об'єкта налаштувань або за
допомогою коментарів у конкретному файлі, який перевіряється.

```js
/* eslint eqeqeq: "off", curly: "error" */

/* eslint quotes: ["error", "double"], curly: 2 */

/* eslint eqeqeq: "off", curly: "error" -- Here's a description about why this configuration is necessary. */

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


##### Вастивості об'єкта налаштувань (eslint.config.js)

Файл eslint.config.js є експериментальною опцією, розташовуєьтся у корені
проекту. Файл має вигляд: export default [{…}]

files                         Масив патернів, які вказують на файли, які
                              потрібно перевіряти

ignores                       Масив патернів, які вказують на файли, які
                              не потрібно перевіряти
```js
export default [
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "!**/eslint.config.js"],
    rules: {
      semi: "error"
    }
  }
];
```

languageOptions               об'єкт з налаштуваннями JavaScript

languageOptions.ecmaVersion   версія стандарту мови, "latest"/рік/номер
                              "latest"

languageOptions.globals       Об’єкт, що визначає додаткові об’єкти, які слід
                              додати до глобальної області під час лінтування.

languageOptions.parser        Або об'єкт, який має метод parse(), або рядок,
                              який вказує ім'я парсеру в плагіні
                              "@/espree"

languageOptions.parserOptions об'єкт з додатковими властивостями для парсера

languageOptions.sourceType    тип коду: "script"/"module"/"commonjs"
                              default: "module" for .js/.mjs files
                                       "commonjs" for .cjs files

linterOptions                 Об’єкт з властивостями лінтера

linterOptions.noInlineConfig  вказує, чи дозволена inline-конфігурація

linterOptions.reportUnusedDisableDirectives A Boolean value indicating if unused
                                            disable directives should be tracked
                                            and reported.

plugins                       Об'єкт з парами name-value для плагінів

processor                     Або об'єкт, який має методи preprocess()/
                              postprocess(), або рядок, який вказує ім'я
                              процесору в плагіні

rules                         Об'єкт з правилами

settings                      Об'єкт з парами name-value з інформацією, яка має
                              бути доступна для усіх правил


Повний список правил доступний за адресою:
https://eslint.org/docs/latest/rules/


#### SublimeLinter-json                                         <i id="SLj"></i>

версія:      1.3.2
автор:       SublimeLinter
посилання:   https://packagecontrol.io/packages/SublimeLinter-json
призначення: надає можливість перевіряти правильність синтаксису JSON
залежності:  ???

https://github.com/SublimeLinter/SublimeLinter-json

Пакунок надає інтерфейс до JSON-парсера, вбудованого в SublimeText. Щоб
полегшити редагування файлів налаштувань Sublime Text, які можуть містити
коментарі, цей лінтер дозволяє коментарі, але вони не повинні відображатися в
кінці рядка (після даних JSON).


##### Налаштування SublimeLinter-json

Налаштування лінтеру відбувається у файлі налаштувань фреймворка SublimeLinter у
секції "linters":

```json
{
  "linters": {
    "json": {
      "strict": false
    }
  }
}
```

strict режим парсингу, якщо false - сприймає коментарі та коми в кінці рядку
       false


#### SublimeLinter-pug-lint                                     <i id="SLp"></i>

версія:      2.0.0
автор:       SublimeLinter
посилання:   https://packagecontrol.io/packages/SublimeLinter-pug-lint
             https://github.com/SublimeLinter/SublimeLinter-pug-lint
призначення: надає можливість перевіряти правильність синтаксису pug
залежності:  ???

https://github.com/benedfit/SublimeLinter-contrib-pug-lint

Лінтер надає доступ до інтерфейсу pug-lint (https://github.com/pugjs/pug-lint),
перевіряє синтаксис коду Pug-файлів.

Для використання лінтеру необхідно встановити pug-lint через пакетний менеджер
npm глобально або як модуль в проекті:
```shell
npm install -g pug-lint
```


##### Налаштування SublimeLinter-pug-lint

В налаштуваннях SublimeLinter лінтер прописується як "puglint".

Опції та правила прописуються у файлі з розширеннями .pug-lintrc, .pug-lintrc.js
або .pug-lintrc.json або у файлі package.json по ключу "pugLintConfig". Файл з
налаштуваннями розташовується в корені проекту, для linux він може бути
розташований глобально в директорії User. Також файл можна розмістити у
довільній директорії, але тоді потрібно вручну прописати шлях до неї у
налаштуваннях лінтеру (у властивості "args" прописати:
["--config", "/path/to/file"]).

Шлях до файлу кешується, тобто якщо потрібно створити новий файл, також потрібно
очистити кеш SublimeLInter (Tools ▶ SublimeLinter ▶ Clear Caches).
??? В SublimeText4 такого нема.


##### Налаштування конфігураційного файла

preset          застаріла опція

extends         шлях до конфігураційного файлу (відносний або абсолютний), який
                розширює поточний файл. Властивості поточного файлу мають
                перевагу над властивостями додаткового конфігу.
                string

excludeFiles    масив патернів для шляхів до файлів, які не потрібно перевіряти
                array, default
                ```["node_modules/**"]```

additionalRules масив шляхів для додаткових файлів з правилами
                array

Також у файлі конфігу прописуються правила перевірки синтаксису. Якщо правила
суперечать одне одному, вони переводяться у значення null та ігноруються, напр.:
```js
{
  "disallowSpaceAfterCodeOperator": true,
  "requireSpaceAfterCodeOperator": true  // -> null
}
```

Повний список правил доступний за адресою:
https://github.com/pugjs/pug-lint/blob/master/docs/rules.md#disallowattributeinterpolation-true


#### SublimeLinter-stylelint                                    <i id="SLs"></i>

версія:      3.3.2
автор:       SublimeLinter
посилання:   https://packagecontrol.io/packages/SublimeLinter-stylelint
             https://github.com/SublimeLinter/SublimeLinter-stylelint
призначення: надає можливість перевіряти правильність синтаксису CSS-стилів
залежності:  ???

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


##### Налаштування stylelint

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


##### Властивості об'єкту налаштувань

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


##### Перевірка CSS

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


##### Перевірка SCSS

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


##### Відключення перевірок

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


##### Додаткові дані по stylelint

перелік правил:
https://stylelint.io/user-guide/rules

регулярки в лінтері:
https://stylelint.io/user-guide/regex


#### Sublimerge 3                                               <i id="SM3"></i>

версія:      3.0.33
автор:       Borys Forytarz
посилання:   https://packagecontrol.io/packages/Sublimerge%203
             http://www.sublimerge.com/sm3/
             https://www.sublimerge.com/
призначення: перевірка відмінностей у версіях файлів, злиття конфліктів
залежності:  ???


Увага! Пакунок більше не підтримується розробником і не доступний до
завантаження в інтернеті.

Пакунок є інструментом для роботи з версіями документів. Має безкоштовний
ознайомлювальний період 90 днів.

Під час встановлення інсталюється в директорію Installed Packages, але також
створює директорію Packages/Sublimerge 3 і додає кілька файлів в директорію
User.



##### Меню Sublimerge 3

Preferences ▶ Package Settings ▶ Sublimerge
Side Bar ▶ Sublimerge
Tab Context ▶ 
Context ▶ Sublimerge


##### Налаштування Sublimerge 3

date_format                             формати відображення дати
                                        %a %b %d %H:%M:%S %Y"

use_current_window                      визначає, чи буде вікно відмінностей
                                        показуватися у поточному вікні. Не
                                        впливає на вікно відмінностей тек, бо
                                        воно завжди відкривається у новому вікні
                                        false

same_syntax_only                        Обмежує список порівнянних представлень
                                        лише тими, що мають однаковий синтаксис.
                                        Це стосується команд "Compare to View…" 
                                        та "Compare Selection in Views…". Якщо
                                        встановити значення false, у списку
                                        відображатимуться всі відкриті перегляди
                                        true

intelligent_files_sort                  Упорядковує список порівнянних
                                        переглядів за подібністю імен файлів.
                                        Це стосується команд "Compare to View…"
                                        та "Compare Selection in Views…". Якщо
                                        встановити значення false, список буде
                                        впорядковано відповідно до порядку
                                        переглядів у вікні
                                        true

compact_files_list                      вмикає компактний вигляд списку файлів
                                        true

macros_in_separate_menu                 показує список макросів окремим меню
                                        (доведеться обирати команду "Run Macro…")
                                        false

macros_in_command_palette               показує макроси у командній панелі 
                                        Sublime
                                        true

debug                                   вмикає режим відлагодження в консолі
                                        false

algorithm                               визначає алгоритм для порівняння:
                                        null (дефолтний) / "patience" 
                                        (рекомендований)
                                        "patience"

ignore_whitespace                       визначає, що робити при відмінностях у
                                        пробілах. За замовчуванням Sublimerge
                                        реагує на відмінності у пробілах.
                                          "begin" ігнорувати пробіли на початку
                                             рядка
                                          "middle" ігнорувати пробіли в середині
                                             рядка
                                          "end" ігноруватипробіли в кінці рядка
                                        []

ignore_crlf                             визначає, чи реагувати на різні символи
                                        кінця рядка
                                        true

ignore_case                             визначає, чи реагувати на регістр
                                        символів
                                        false

intraline_analysis                      Визначає, чи виконувати
                                        внутрішньорядковий аналіз відмінностей у
                                        кожному з блоків змін. Він
                                        використовується лише для позначення
                                        внутрішньорядкових змін і не впливає на
                                        загальний аналізвідмінностей. Якщо ви
                                        працюєте з великими файлами з великою
                                        кількістю змін і маєте проблеми з
                                        продуктивністю, це можна вимкнути
                                        true

intraline_changes_threshold             Відношення, розраховане як: (довжина
                                        змінених частин / довжина незмінених
                                        частин) * 100. Коли відношення стає
                                        більшим за це значення,
                                        внутрішньорядкові зміни не
                                        відображаються, а лінія вважається
                                        повністю заміненою, а не модифікованою
                                        0 - усі зміни видимі, 100 - усі приховані
                                        60

intraline_combine_threshold             Робить невеликі проміжки незмінного
                                        тексту довжиною, меншою або рівною цьому
                                        значенню, для позначення як частини
                                        внутрішньорядкової зміни, якщо вони
                                        з’являються між двома іншими
                                        внутрішньорядковими змінами. Це усуває
                                        нагромадження підсвіток у рядку
                                        3

intraline_unimportant_regexps           внутрішньорядкові регулярні вирази, які
                                        випадають з порівняння і вважаються
                                        тотожними
                                        []

intraline_style                         визначає стиль відображення
                                        внутрішньорядкових відмінностей:
                                        "outlined", "filled", "solid_underline",
                                        "squiggly_underline","stippled_underline"
                                        "filled"

intraline_unimportant_style             визначає стиль відображення не важливих
                                        відмінностей
                                        "outlined"

scroll_sync_interval                    визначає, як часто (у мілісекундах)
                                        повинна синхронізуватися прокрутка
                                        1

summary_panel                           визначає, чи відображати порівняльну
                                        панель
                                        true

diff_view_allowed_commands              Визначений користувачем білий список для
                                        команд, доступних для виконання в режимі
                                        перегляду відмінностей.  Деякі команди
                                        можуть призвести до неправильної роботи
                                        перегляду відмінностей і призвести до
                                        невизначеної поведінки.  Використовуйте
                                        з обережністю!
                                        {}

beyond_viewport_rendering               Визначає додаткову область (до та після
                                        вікна перегляду), яка відображатиметься
                                        під час прокручування перегляду.
                                        Визначається у відсотках.  Наприклад:
                                        0 - візуалізація лише вікна перегляду,
                                        0,25 - вікно + 25% до і після
                                        0,5 - вікно + 50% до і після
                                        1 – вікно + 100% до і після
                                        0.25

view                                    об'єкт з налаштуваннями зовнішнього
                                        вигляду областей видимості вікна
                                        порівняння. Доступні властивості можна
                                        переглянути по шляху
                                        Preferences ▶ Settings - Default
                                        {
                                          "line_numbers": false,
                                          "word_wrap": false,
                                          "draw_white_space": "all",
                                          "highlight_line": true
                                        }

auto_select_first                       якщо true - перша відмінність буде
                                        автоматично вибрана
                                        false

three_way_navigate_all                  визначає, чи навігація у 3-х секційному
                                        вікні порівняння відбуватиметься тільки
                                        по конфліктах, чи по усіх відмінностях
                                        false

diff_block_renderer                     спосіб відображення відмінностей:
                                        "gutter" - використання іконок,
                                        красивіше, детальніше, але повільніше
                                        "outline" - обведення тексту контуром
                                        "gutter"

summary_panel_background                якщо null - колір тла береться з теми
                                        null

diff_block_changed                      колір контенту, що присутній в обох
                                        файлах
                                        "#FDECAC"

diff_block_inserted                     колір контенту, який існує тільки зліва
                                        "#64BF0E"

diff_block_deleted                      колір контенту, який існує тільки справа
                                        "#F92672"

diff_block_conflict                     колір відмінних контентів у вікнах
                                        #FF0000"

diff_block_intraline_changed            Колір заливки для міток
                                        внутрішньорядкових змін (зміна)
                                        "#FDECAC"

diff_block_intraline_inserted           Колір заливки для міток
                                        внутрішньорядкових змін (вставка)
                                        "#FDECAC"

diff_block_intraline_deleted            Колір заливки для міток
                                        внутрішньорядкових змін (видалення)
                                        "#FDECAC"

diff_block_selected                     колір контуру вибраної відмінності
                                        "#75715E"

diff_block_missing                      fill color for missing lines block
                                        "#75715E"

three_way_layout                        вид розташування вікон
                                          0 - три колонки (їхнє - спірне - моє)
                                          1 - 2 колонки (їхнє - моє), спірне
                                              знизу

three_way_merged_height                 висота нижньої панелі,
                                        якщо three_way_layout має значення 1
                                        50

go_to_next_after_merge                  визначає, чи буде автоматичний перехід
                                        на наступний конфлікт після вирішення
                                        поточного
                                        false

shell_fallback_encoding                 тип кодування
                                        "ascii"

environment                             об'єкт зі змінними лексичного оточення

vcs_support                             підтримка Git, Mercurial та SVN (треба,
                                        щоб були встановлені)
                                        true

vcs_cache_enabled                       підключення кешу системи контролю версій
                                        true

vcs_cache_validate_on_startup           перевірка кешу системи контролю версій
                                        при запуску Sublime
                                        true

vcs_discovery_order                     порядок пріоритетності систем контролю
                                        версій
                                        ["git", "hg", "svn"]

vcs_after_merge_cleanup                 визначає, чи виконувати очищення
                                        тимчасових файлів, створених СКВ під час
                                        злиття
                                        true

git_executable_path                     шлях до виконуваного файлу Git
                                        "git"

git_log_args                            додаткові аргументи до команди "git log"
                                        "--encoding=UTF-8 --no-color --no-decorate --follow"

git_show_args                           додаткові аргументи для команди
                                        "git show"
                                        ""

git_global_args                         глобальні аргументи для решти команд git
                                        "-c color.ui=false"

git_log_format                          формат логів (--format=pretty:<git_log_format>)
                                        "%H\t%h\t%an <%ae>\t%ai\t%s"

git_log_date_parse_format               формат дати для ${date} and ${date_user}
                                        "%Y-%m-%d %H:%M:%S %z"

git_log_regexp                          регулярка для парсингу логів git
                                        ```"^(?P<commit>.+)\t(?P<abbrev_commit>.+)\t(?P<author>.+)\t(?P<date_raw>.+)\t(?P<subject>.*)$"```

git_log_template                        шаблон для комітів
                                        ["${abbrev_commit} | ${subject}", "by ${author}", "${date}"]

svn_executable_path                     шлях до виконуваного файлу Subversion
                                        "svn"

svn_log_args                            додаткові аргументи для команди "svn log"
                                        "--stop-on-copy"

svn_cat_args                            додаткові аргументи для команди "svn cat"
                                        ""

svn_global_args                         додаткові аргументи для решти команд svn
                                        ""

svn_log_date_parse_format               формат дати для ${date} and ${date_user}
                                        "%Y-%m-%dT%H:%M:%S.%fZ"

svn_log_template                        шаблон для комітів
                                        ["${commit} | ${subject}", "by ${author}", "${date}"]

hg_executable_path                      шлях до виконуваного файлу Mercurial
                                        "/usr/local/bin/hg"

hg_log_args                             додаткові аргументи для команди "hg log"
                                        "--encoding=UTF-8"

hg_cat_args                             додаткові аргументи для команди "hg cat"
                                        ""

hg_global_args                          глобальні аргументи для решти команд hg
                                        ""

hg_log_format                           формат логів (--template <hg_log_format>)
                                        "{node}\t{author}\t{date|isodate}\t{desc}"

hg_log_date_parse_format                формат дати для ${date} and ${date_user}
                                        "%Y-%m-%d %H:%M %z"

hg_log_regexp                           регулярка для парсингу логів hg
                                        ```"^(?P<commit>.+)\t(?P<author>.+)\t(?P<date_raw>.+)\t(?P<subject>.*)$"```

hg_log_template                         шаблон для комітів
                                        ["${abbrev_commit} | ${subject}", "by ${author}", "${date}"]

dir_compare_ignore_dirs                 список ігнорованих директорій
                                        ["RCS", "CVS", "tags", ".git", ".svn", ".hg"]

dir_compare_ignore_files                список ігнорованих файлів
                                        [".DS_Store", "Thumbs.db"]

dir_merge_remove_unmatched              Якщо каталог існує з обох сторін і ви
                                        копіюєте один в інший, Sublimerge за
                                        замовчуванням копіює всі змінені або
                                        додані файли з вихідного до цільового
                                        каталогу.  Якщо для цього параметра
                                        встановлено значення true, усі файли,
                                        які існують у цільовому файлі, але не в
                                        джерелі, будуть видалені.
                                        false

dir_compare_open_text_diff_in_new_window визначає, чи буде порівняння тексту
                                         відкриватися у новому вікні
                                         false

snapshots_on_open                       Whether to automatically create snapshot
                                        when file is opened
                                        true

snapshots_on_save                       Whether to automatically create snapshot
                                        each time file is saved
                                        false

snapshots_in_menu                       Whether to show Snapshots' commands in
                                        main Sublimerge's menu
                                        true

snapshots_date_format                   snapshots date format
                                        "%d/%m/%Y %H:%M:%S"

syntax_specific                         специфічні правила для певної мови
                                         {
                                           "Python": {
                                             "ignore_whitespace": false,
                                             "ignore_crlf": false,
                                             "view": {
                                               "draw_white_space": ["begin", "middle", "end"]
                                             }
                                           }
                                         }

https_proxy                             Proxy url in the following form:
                                        "omainname[:port]" або "ip[:port]"
                                        Defaults to Package Control's
                                        "https_proxy" setting
                                        ""

proxy_username                          Proxy username (if required) Defaults to
                                        Package Control's "proxy_username"
                                        setting
                                        ""

proxy_password                          Proxy password (if required) Defaults to
                                        Package Control's "proxy_password"
                                        setting
                                        ""

save_and_stay                           Defines whether or not the diff view
                                        should remain open upon saving the file
                                        true

file_encoding_detection_strategy        Define the strategy for detecting files
                                        encoding, like files from VCS revisions,
                                        etc.
                                          "auto" - try to autodetect
                                          ["cp1252", "utf-8"] - detect by trying
                                          one-by-one
                                          null - disable
                                        "auto"

start_swapped                           Starts diff view in swapped mode where
                                        new changes are displayed on the
                                        left-hand side panel
                                        false


##### Команди Sublimerge 3

sublimerge_begin_edit                   Sublimerge: Enter Edit Mode

sublimerge_compare_revision_to_revision Sublimerge: Compare Revision to Revision…

sublimerge_compare_selections           Sublimerge: Compare Selections…

sublimerge_compare_to_clipboard         Sublimerge: Compare to Clipboard

sublimerge_compare_to_revision          Sublimerge: Compare to Revision…

sublimerge_compare_to_snapshot          Sublimerge: Compare to Snapshot

sublimerge_compare_to_view              Sublimerge: Compare to View…

sublimerge_compare_to_view_selections   Sublimerge: Compare Selection in Views…

sublimerge_custom_comparison            Sublimerge: Custom Comparison…

sublimerge_end_edit                     Sublimerge: Leave Edit Mode

sublimerge_go_down                      Sublimerge: Go to Next Change
                                        вибирає наступну зміну/файл
                                        ctrl+down (context)
                                        down (context)

sublimerge_go_up                        Sublimerge: Go to Previous Change
                                        вибирає попередню зміну
                                        ctrl+up (context)
                                        up (context)

sublimerge_merge_left                   Sublimerge: Merge All From Right to Left args: {"merge_all": true}

sublimerge_merge_left                   Sublimerge: Merge Change From Right to Left

sublimerge_merge_right                  Sublimerge: Merge All From Left to Right args: {"merge_all": true}

sublimerge_merge_right                  Sublimerge: Merge Change From Left to Right

sublimerge_purge_vcs_cache              Sublimerge: Purge VCS Cache

sublimerge_remove_snapshot              Sublimerge: Remove Snapshot

sublimerge_replace_snapshot             Sublimerge: Replace Snapshot

sublimerge_restore_snapshot             Sublimerge: Revert to Snapshot

sublimerge_select_region

sublimerge_show_changes_in_revision     Sublimerge: Show Changes Introduced in Revision…

sublimerge_show_unsaved_changes         Sublimerge: Show Unsaved Changes

sublimerge_swap_view                    Sublimerge: Swap View
                                        f3 (context)

sublimerge_take_snapshot                Sublimerge: Take Snapshot

sublimerge_validate_vcs_cache           Sublimerge: Validate VCS Cache

sublimerge_view_vcs_cache               Sublimerge: View VCS Cache


sublimerge                              відкриває попап з командами Sublimerge
                                        ctrl+alt+d

sublimerge_show_changes_navigator       f4

sublimerge_recompare                    повторно порівняти буфери
                                        f5

sublimerge_save                         ctrl+s

sublimerge_copy                         копіює вибрану зміну або активняй рядок
                                        справа наліво
                                        ctrl+left

                                        копіює вибрану зміну або активняй рядок
                                        зліва направо
                                        ctrl+right

                                        копіює усі зміни справа наліво
                                        ctrl+shift+left

                                        копіює усі зміни зліва направо
                                        ctrl+shift+right

                                        застосувати вибрану зміну справа наліво
                                        left

                                        застосувати вибрану зміну зліва направо
                                        right

sublimerge_go_into                      ctrl+enter (context)
                                        enter (context)

sublimerge_go_back                      ctrl+backspace (context)

                                        повернутися в батьківську директорію
                                        backspace


##### Інтеграція із системами контролю версій

Інтеграція можлива із системами Git, Subversions, Mercurial, тут буде розглянута
лише Git, інформація по решті доступна за адресою https://www.sublimerge.com/sm3/docs/vcs-integration.html

Для роботи із СКВ виконуваний файл Sublime Text повинен бути доступний через
PATH як subl.

Команди виклику Sublimerge через CLI (потрібні для конфігу Git):

Diff tool (2-way)
```cmd
subl -n --wait "<LEFT>" "<RIGHT>" --command "sublimerge_diff_views {\"left_read_only\": true, \"right_read_only\": true}"
```

Merge tool (3-way)
```cmd
subl -n --wait "<THEIRS>" "<BASE>" "<MINE>" "<MERGED>" --command "sublimerge_diff_views"
```

Параметри цих викликів:
left_read_only  true/false
                When true, opens left file in read only mode. For 2-way diff
                defaults to false. For 3-way diff is always forced to true.

right_read_only true/false
                When true, opens left right in read only mode. For 2-way diff
                defaults to false. For 3-way diff is always forced to true.


Налаштування конфігу Git (файл .gitconfig):
```
[merge]
tool = sublimerge

[mergetool "sublimerge"]
cmd = subl -n --wait \"$REMOTE\" \"$BASE\" \"$LOCAL\" \"$MERGED\" --command \"sublimerge_diff_views\"
trustExitCode = false

[diff]
tool = sublimerge

[difftool "sublimerge"]
cmd = subl -n --wait \"$REMOTE\" \"$LOCAL\" --command \"sublimerge_diff_views {\\\"left_read_only\\\": true, \\\"right_read_only\\\": true}\"
```

Виклик порявняння файлів через CLI:
```cmd
subl --command 'sublimerge_compare_paths {"paths": ["/first/path", "/second/path"]}'
```


##### Макроси для Sublimerge 3

Тут не розглядаються, доступні на офіційній сторінці додатку.


#### Table Editor                                               <i id="TaE"></i>

версія:      2014.05.10.11.01.51 
автор:       Valery Kocubinsky (vkocubinsky)
посилання:   https://packagecontrol.io/packages/Table%20Editor
             https://github.com/vkocubinsky/SublimeTableEditor
призначення: зручне створення і корегування текстових таблиць
залежності:  немає

Пакунок надає інструменти, які дозволяють зручно працювати з таблицями у формі
тексту: навігація по чарункам, додавання/видалення рядків/колонок, вирівнювання,
переміщення рядків/колонок, розбиття чарунок, об'єднання рядків тощо. Має добре
написаний файл readme. Більше не підтримується розробником.

Для роботи з таблицями потрібно спочатку увімкнути пакунок для конкретного файлу
або синтаксису.


##### Меню Table Editor

Preferences ▶ Package Settings ▶ Table Editor


##### Команди Table Editor

table_editor_enable_for_current_syntax  Table Editor: Enable for current syntax
                                        вмикає додаток для певного синтаксису

table_editor_enable_for_current_view    Table Editor: Enable 'keep_space_left' for current view 
                                        args: {"prop": "table_editor_keep_space_left"}

table_editor_enable_for_current_view    Table Editor: Enable 'align_number_right' for current view
                                        args: {"prop": "table_editor_align_number_right"}

table_editor_enable_for_current_view    Table Editor: Enable 'detect_header' for current view
                                        args: {"prop": "table_editor_detect_header"}

table_editor_enable_for_current_view    Table Editor: Enable for current view
                                        вмикає додаток для певного вікна
                                        args: {"prop": "enable_table_editor"}

table_editor_disable_for_current_syntax Table Editor: Disable for current syntax
                                        вимикає додаток для поточного синтаксису

table_editor_disable_for_current_view   Table Editor: Disable 'align_number_right' for current view
                                        args: {"prop": "table_editor_align_number_right"}

table_editor_disable_for_current_view   Table Editor: Disable 'detect_header' for current view 
                                        args: {"prop": "table_editor_detect_header"}

table_editor_disable_for_current_view   Table Editor: Disable 'keep_space_left' for current view 
                                        args: {"prop": "table_editor_keep_space_left"}

table_editor_disable_for_current_view   Table Editor: Disable for current view
                                        вимикає додаток для певного вікна
                                        args: {"prop": "enable_table_editor"}

table_editor_align                      Re-align the table without change the
                                        current table field. Move cursor to
                                        begin of the current table field.
                                        ctrl+shift+a

table_editor_csv_to_table               Перетворює дані типу
                                        ```
                                        anna,23
                                        emma,43
                                        ```
                                        на повноційну таблицю
                                        ctrl+k, |

table_editor_delete_column              Видалити поточну колонку
                                        alt+shift+left

table_editor_film                       Table Editor: Show demo film in new scratch view
                                        показує перебіг самотестування у новому
                                        вікні

table_editor_hline_and_move             вставляє горизонтальну лінію через всю
                                        таблицю з тире і утворює новий рядок
                                        ctrl+k, enter

table_editor_insert_column              Вставити пусту колонку ліворуч від
                                        курсора
                                        alt+shift+right

table_editor_insert_double_hline        Insert double horizontal line below
                                        current row. Doesn't make sense and
                                        doesn't supported for Textile syntaxes
                                        ctrl+k, =

table_editor_insert_row                 Встивити порожній рядок над поточним
                                        alt+shift+down

table_editor_insert_single_hline        Insert single horizontal line below
                                        current row. Doesn't make sense and
                                        doesn't supported for Textile syntax
                                        ctrl+k, -

table_editor_join_lines                 об'єднати рядки в одній чарунці в один
                                        рядок
                                        ctrl+j

table_editor_kill_row                   Видалити поточний рядок
                                        alt+shift+up

table_editor_move_column_left           Пересунути поточну колонку ліворуч
                                        alt+left

table_editor_move_column_right          Пересунути поточну колонку праворуч
                                        alt+right

table_editor_move_row_down              Перемістити рядок вниз
                                        alt+down

table_editor_move_row_up                Перемістити рядок вгору
                                        alt+up

table_editor_next_field                 створює новий рядок таблиці
                                        tab

table_editor_next_row                   Re-align the table and move down to next
                                        row. Creates a new row if necessary. At
                                        the beginning or end of a line, enter
                                        still does new line.
                                        enter

table_editor_previous_field             Re-align, move to previous field
                                        shift+tab

table_editor_set_syntax                 Table Editor: Set table syntax 'EmacsOrgMode' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "EmacsOrgMode"}

table_editor_set_syntax                 Table Editor: Set table syntax 'MultiMarkdown' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "MultiMarkdown"}

table_editor_set_syntax                 Table Editor: Set table syntax 'Pandoc' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "Pandoc"}

table_editor_set_syntax                 Table Editor: Set table syntax 'reStructuredText' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "reStructuredText"}

table_editor_set_syntax                 Table Editor: Set table syntax 'Simple' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "Simple"}

table_editor_set_syntax                 Table Editor: Set table syntax 'Textile' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "Textile"}

table_editor_split_column_down          розбити довгу чарунку на кілька рядків.
                                        Для цього вона повинна бути попередньо
                                        відоклемлена лініями
                                        alt+enter


#### TabsExtra                                                  <i id="TsE"></i>

версія:      1.6.2
автор:       facelessuser
посилання:   https://packagecontrol.io/packages/TabsExtra
             https://facelessuser.github.io/TabsExtra/
призначення: надає розширене контекстне меню для вкладок
залежності:  немає

Після встановлення пакунку потрібно вручну оновити контекстне меню вкладок через
Preferences ▶ Package Settings ▶ TabsExtra.
Увага! Даний пункт перезатирає українізоавне меню.

Пункт меню "Sticy Tabs" позначає вкладку як таку, яку не треба закривати при
наступному виклику команди "Close All Tabs".

Не існує пункта, який забороняє закривати конкретну вкладку. Цей функціонал
доповнює пакунок "LockTab".


##### Меню TabsExtra

Preferences ▶ Package Settings ▶ TabsExtra


##### Налаштування TabsExtra

menu_layout               список пунктів меню і їх порядок відображення. Після
                          зміни потрібно оновити меню: Preferences->Package
                          Settings->TabsExtra and Install/Upgrade either
                          ["close", "sticky", "open", "clone", "save", "delete", "rename", "reveal", "path", "revert", "sort"]

numeric_sort              сортування рядків з урахуванням чисел (test1 test2
                          test12)
                          false

persistent_sticky         By default TabsExtra forgets a tab's "stickiness" when
                          any "tab close" command is issued. You can make the
                          tab's "Stickiness" persist by enabling the following
                          feature
                          false

sort_layout               порядок розташування елементів меню, додатково може
                          мати третій параметр: "reverse": (optional) sort tabs
                          in the reverse (true|false)
                          [
                            {"module": "TabsExtra.sort.name", "caption": "Name"},
                            {"module": "TabsExtra.sort.path", "caption": "Path"},
                            {"module": "TabsExtra.sort.modified", "caption": "Modified"},
                            {"module": "TabsExtra.sort.created", "caption": "Created"},
                            {"module": "TabsExtra.sort.type", "caption": "Extension"},
                            {"module": "TabsExtra.sort.size", "caption": "Size"},
                            {"module": "TabsExtra.sort.activated", "caption": "Last Activated"},
                            {"module": "TabsExtra.sort.syntax", "caption": "Syntax"},
                            {"module": "TabsExtra.sort.reverse", "caption": "Reverse Order"}
                          ],

sort_on_load_save         сортувати вкладки коли файл відкривається або
                          зберігається
                          false

sort_on_load_save_command Модуль, який використовується для сортування при
                          завантаженні або збереженні.
                          module  плагін, який визначає, що сортуватиметься
                          reverse (optional) sort tabs in the reverse (true|false)
                          {"module": "TabsExtra.sort.name"}


##### Команди TabsExtra

reopen_last_file            Reopen Last Tab

save_all                    Save All

tabs_extra_clear_all_sticky Clear All Sticky Tabs
                            args: { "group": -1, "force": true }

tabs_extra_clear_all_sticky TabsExtra: Clear All Sticky Tabs

tabs_extra_close            Close All Tabs
                            args: { "group": -1, "index": -1, "close_type": "all" }

tabs_extra_close            Close All Tabs
                            args: { "group": -1, "index": -1, "close_type": "all", "close_unsaved": false }

tabs_extra_close            Close All Tabs
                            args: { "group": -1, "index": -1, "close_type": "all", "unsaved_prompt": false }

tabs_extra_close            Close
                            args: { "group": -1, "index": -1, "close_type": "single", "close_unsaved": false }

tabs_extra_close            Close
                            args: { "group": -1, "index": -1, "close_type": "single", "unsaved_prompt": false }

tabs_extra_close            Close Other Tabs
                            args: { "group": -1, "index": -1, "close_type": "other", "close_unsaved": false }

tabs_extra_close            Close Other Tabs
                            args: { "group": -1, "index": -1, "close_type": "other", "unsaved_prompt": false }

tabs_extra_close            Close Tabs to the Left
                            args: { "group": -1, "index": -1, "close_type": "left" }

tabs_extra_close            Close Tabs to the Left
                            args: { "group": -1, "index": -1, "close_type": "left", "close_unsaved": false }

tabs_extra_close            Close Tabs to the Left
                            args: { "group": -1, "index": -1, "close_type": "left", "unsaved_prompt": false }

tabs_extra_close            Close Tabs to the Right
                            args: { "group": -1, "index": -1, "close_type": "right", "close_unsaved": false }

tabs_extra_close            Close Tabs to the Right
                            args: { "group": -1, "index": -1, "close_type": "right", "unsaved_prompt": false }

tabs_extra_close_menu       TabsExtra: Close Tabs
                            args: {"mode": "normal"}

tabs_extra_close_menu       TabsExtra: Close Tabs (Dismiss Unsaved)
                            args: {"mode": "dismiss_unsaved"}

tabs_extra_close_menu       TabsExtra: Close Tabs (Skip Unsaved)
                            args: {"mode": "skip_unsaved"}

tabs_extra_delete           Delete File
                            args: {"group": -1, "index": -1}

tabs_extra_duplicate        Duplicate…
                            args: {"group": -1, "index": -1}

tabs_extra_file             Open Containing Folder…
                            args: {"group": -1, "index": -1, "command": "open_dir", "args": {"dir": "$file_path", "file": "$file_name"}}

tabs_extra_file             Reveal in Side Bar
                            args: {"group": -1, "index": -1, "command": "reveal_in_side_bar"}

tabs_extra_file_path        File Name
                            args: {"group": -1, "index": -1, "path_type": "name"}

tabs_extra_file_path        File URI
                            args: {"group": -1, "index": -1, "path_type": "path_uri"}

tabs_extra_file_path        Full Path
                            args: {"group": -1, "index": -1, "path_type": "path"}

tabs_extra_move             Move…
                            args: {"group": -1, "index": -1}

tabs_extra_rename           Rename…
                            args: {"group": -1, "index": -1}

tabs_extra_revert           Revert File
                            args: {"group": -1, "index": -1, "command": "revert"}

tabs_extra_set_sticky       TabsExtra: Sticky Tab
                            args: {"value": true}

tabs_extra_set_sticky       TabsExtra: Unsticky Tab 
                            args: {"value": false}

tabs_extra_sort             Created
                            args: {"group": -1, "sort_by": "TabsExtra.sort.created", "reverse": false}

tabs_extra_sort             Extension
                            args: {"group": -1, "sort_by": "TabsExtra.sort.type", "reverse": false}

tabs_extra_sort             Last Activated
                            args: {"group": -1, "sort_by": "TabsExtra.sort.activated", "reverse": false}

tabs_extra_sort             Modified
                            args: {"group": -1, "sort_by": "TabsExtra.sort.modified", "reverse": false}

tabs_extra_sort             Name
                            args: {"group": -1, "sort_by": "TabsExtra.sort.name", "reverse": false}

tabs_extra_sort             Path
                            args: {"group": -1, "sort_by": "TabsExtra.sort.path", "reverse": false}

tabs_extra_sort             Reverse Order
                            args: {"group": -1, "sort_by": "TabsExtra.sort.reverse", "reverse": false}

tabs_extra_sort             Size
                            args: {"group": -1, "sort_by": "TabsExtra.sort.size", "reverse": false}

tabs_extra_sort             Syntax
                            args: {"group": -1, "sort_by": "TabsExtra.sort.syntax", "reverse": false}

tabs_extra_sort_menu        TabsExtra: Sort Tabs

tabs_extra_toggle_sticky    Sticky Tab
                            args: { "group": -1, "index": -1 }

tabs_extra_view_wrapper     Clone
                            args: {"group": -1, "index": -1, "command": "clone_file"}

tabs_extra_view_wrapper     Save
                            args: {"group": -1, "index": -1, "command": "save"}

tabs_extra_view_wrapper     Save As…
                            args: {"group": -1, "index": -1, "command": "prompt_save_as"}


#### Tag                                                        <i id="Tag"></i>

версія:      -
автор:       titoBouzout
посилання:   https://packagecontrol.io/packages/Tag
             https://github.com/titoBouzout/Tag
призначення: надає додаткові інструменти для роботи з HTML
залежності:  немає

Набір пакетів для роботи з HTML. Не встановлюється через менеджер пакунків, для
встановлення потрібно завантажити архів з github.


##### Меню Tag

Edit ▶ Tag
Preferences ▶ Package Settings ▶ Tag


##### Налаштування Tag

enable_live_tag_linting                перевірка тегів
                                       true

enable_close_tag_on_slash              закрити тег після /
                                       true

tag_classes_sort                       copy css classes to clipboard
                                       false

enable_live_tag_linting_document_types типи файлів, в яких працюватиме пакунок
                                       [ "", "html", "htm", "php", "tpl", "md",
                                       "txt", "xhtml", "xml", "rdf", "xul",
                                       "svg", "xsd", "xslt", "tmTheme",
                                       "tmPreferences", "tmLanguage",
                                       "sublime-snippet" ]


##### Команди Tag

fold_tag_attributes                     Fold Attributes
                                        стандартна команда Sublime Text, згортає
                                        всі атрибути тегу у файлах HTML/XML,
                                        залишаючи видимими лише ім’я тегу та
                                        закриваючу дужку

tag_classes                             Get CSS Classes

tag_close_tag                           Close Tag
                                        додати закриваючий тег
                                        alt+.

tag_close_tag_on_slash                  автоматично викликається після "</":
                                        робить автодоповнення закриваючого тегу

tag_insert_as_tag                       Insert as Tag
                                        перетворює вилідений фрагмент на тег
                                        ctrl+shift+,

tag_lint                                Lint Selection or Document
                                        ??? не зрозуміло

tag_remove_all_attributes_in_document   Remove All Attributes From Tags in Document
                                        видаляє усі атрибути в тегах в документі

tag_remove_all_attributes_in_selection  Remove All Attributes From Tags in Selection
                                        видаляє усі атрибути в тегах у
                                        виділеному фрагменті

tag_remove_all_in_document              Remove All Tags in Document
                                        видаляє усі теги в документі, залишаючи
                                        їх вміст

tag_remove_all_in_selection             Remove All Tags in Selection
                                        видаляє усі теги у виділеному фрагменті,
                                        залишаючи їх вміст

tag_remove_picked_attributes_in_document Remove Picked Attributes From Tags in Document

tag_remove_picked_attributes_in_selection Remove Picked Attributes From Tags in Selection

tag_remove_picked_in_document           Remove Picked Tags in Document
                                        видаляє теги вказаного типу у документі,
                                        залишаючи їх вміст

tag_remove_picked_in_selection          Remove Picked Tags in Selection
                                        видаляє теги вказаного типу у виділеному
                                        фрагменті, залишаючи їх вміст


#### Tagify                                                     <i id="Tgf"></i>

версія:      2017.03.24.20.54.54
автор:       maciej-zuk
посилання:   https://packagecontrol.io/packages/Tagify
             https://github.com/maciej-zuk/sublime-tagify
призначення: дозволяє вставляти мітки в коді і потім зручно ними маніпулювати
             (виводити клікабельним списком у окремій вкладці тощо)
залежності:  немає
проблеми:    1. опція "tag_re" не застосовується, сформувати свій тег не можливо
             2. у файлах з розширенням, відмінним від "py", теги автоматично не
                закоментовуються
             3. в списку тегів виводяться також ті, які не передбачені
                переліком тегів у налаштуваннях


##### Меню Tagify

Preferences ▶ Package Settings ▶ Tagify


##### Налаштування Tagify

analyse_on_start аналіз проекту при запуску Sublime
                 true

blacklisted_tags рядки, які виглядають як мітки, але не повинні сприйматися
                 пакунком як мітки
                 ["property"]

common_tags      список готових міток для вставки
                 ["todo", "bug", "workaround"]

extensions       список розширень файлів, у яких пакунок шукатиме мітки. Для
                 обробки файлів без розширень потрібно додати "none" (без лапок)
                 ["py", "html", "htm", "js"],

tag_re           регулярний вираз, який формує вигляд мітки
                 "#@((?:[_a-zA-Z0-9]+))"


##### Команди Tagify

show_tags_menu -
               ctrl+t
               показати контекстне меню зі списком доступних тегів

tagify         Tagify: Get tag list
               відкрити нову вкладку зі списком тегів і місць, де вони
               зустічаються. При кліку на елемент списку відкривається файл з
               місцем розташування тегу


#### Terminal                                                   <i id="Trl"></i>

версія:      2.2.0
автор:       Will Bond (wbond)
посилання:   https://packagecontrol.io/packages/Terminal
призначення: дозволяє відкрити зовнішній термінал через контекстне меню
залежності:  немає

Відкриває термінал через контекстне меню активного файла, файла в бічній панелі
або через комбінацію клавіш. У налаштуваннях можна вибрати свій термінал.


##### Меню Terminal

Context ▶ Open Terminal Here…
Preferences ▶ Package Settings ▶ Terminal


##### Налаштування Terminal

terminal   шлях до виконуваного файлу терміналу,
           напр. "C:\\TCWL\\Program Files\\02.programming\\PortableGit\\git-cmd.exe"
           Якщо влаштовує дефолтний термінал, залишити рядок пустим.
           Інші приклади терміналів:
           https://github.com/wbond/sublime_terminal#examples
           ""

parameters A list of default parameters to pass to the terminal, this can be
           overridden by passing the "parameters" key with a list value to the
           args dict when alling the "open_terminal" or
           "open_terminal_project_folder" commands.
           https://packagecontrol.io/packages/Terminal#custom-parameters
           []

env        An environment variables changeset. Default environment variables
           used for the terminal are inherited from sublime. Use this mapping to
           overwrite/unset. Use null value to indicate that the environment
           variable should be unset.
           {}


##### Команди Terminal

open_terminal                Terminal: Open
                             Ctrl+Shift+T (Windows & Linux)
                             Super+Shift+T (OSX)
                             відкриває термінал у директорії поточного файла

open_terminal_project_folder Terminal: Open in project folder
                             Ctrl+sShift+Alt+T (Windows & Linux)
                             Super+Shift+Alt+T (OSX)
                             відкриває термінал у кореневій директорії проекту


#### Terminus                                                   <i id="Trs"></i>

версія:      0.3.28
автор:       randy3k
посилання:   https://packagecontrol.io/packages/Terminus
             https://github.com/randy3k/Terminus
призначення: додає термінал в середину Sublime Text
залежності:  немає

Terminus можна використовувати як систему збірки.

Детальний огляд (англійською):
https://www.youtube.com/watch?v=mV0ghkMwTQc
https://www.youtube.com/watch?v=etIJMVIvVgg


##### Меню Terminus

Preferences ▶ Package Settings ▶ Terminus
Context ▶ Open Terminus here…


##### Налаштування Terminus

див. Terminus.sublime-settings

Для призначення своєї cmd (у Windows базова не може працювати з git) у файлі
Terminus.sublime-settings потрібно прописати:

```json
  {
    "default_config": {
      "windows": "myOwn"
    },
    // a list of available shells to execute
    "shell_configs": [
      {
        "name": "myOwn",
        "cmd": "..\\PortableGit\\git-cmd.exe",
        "env": {},
        "enable": true,
        "platforms": ["windows"]
      }
    ],
  }
```

Для призначення своїх комбінацій клавіш потрібно прописати їх у одному з файлів
з розширенням .sublime-keymap:

```json
[
  // відкрити термінал у панелі (відносно домашньої директорії користувача)
  { "keys": ["shift+escape"], "command": "terminus_open", "args": {"show_in_panel": true},},
  // відкрити (ще один) термінал у вікні (відносно домашньої директорії користувача)
  { "keys": ["shift+escape"], "command": "terminus_open", "args": {"show_in_panel": false},},
  // відкрити термінал у панелі (відносно поточної теки)
  { "keys": ["shift+escape"], "command": "terminus_open", "args": {"show_in_panel": true, "cwd": "${file_path:${folder}}"},},
  // відкрити (ще один) термінал у вікні (відносно поточної теки)
  { "keys": ["shift+escape"], "command": "terminus_open", "args": {"show_in_panel": false, "cwd": "${file_path:${folder}}"},}
  // закрити активний термінал
  { "keys": ["shift+escape"], "command": "terminus_close"},
  // закрити усі відкриті термінали
  { "keys": ["shift+escape"], "command": "terminus_close_all"},
]
```


##### Команди Terminus

terminus_open           Terminus: Open Default Shell in Tab (View)
                        Terminus: Open Default Shell in Panel
                        Terminus: List Shells
                        відкриває термінал або віджет (залежно від аргументів
                        команди)
                        args: {}

```py
window.run_command(
  "terminus_open", {
    "config_name": None,     # the shell config name, use `None` for the default config
    "cmd": None,             # шлях до виконуваного файлу
    "shell_cmd": None,       # a script to execute in a shell
                             # bash on Unix and cmd.exe on Windows
    "cwd": None,             # робоча директорія для терміналу
    "working_dir": None,     # псевдонім "cwd"
    "env": {},               # змінні оточення для терміналу
    "title": None,           # заголовок (якщо термінал відкритий у вкладці)
    "panel_name": None,      # the name of the panel if terminal should be opened in panel
    "focus": True,           # focus to the panel
    "tag": None,             # a tag to identify the terminal
    "file_regex": None       # the `file_regex` pattern in sublime build system
                             # see https://www.sublimetext.com/docs/3/build_systems.html
    "line_regex": None       # the `file_regex` pattern in sublime build system
    "pre_window_hooks": [],  # a list of window hooks before opening terminal
    "post_window_hooks": [], # a list of window hooks after opening terminal
    "post_view_hooks": [],   # a list of view hooks after opening terminal
    "auto_close": True,      # auto close terminal if process exits successfully
    "cancellable": False,    # allow `cancel_build` command to terminate process, only relevent to panels
    "timeit": False          # display elapsed time when the process terminates
  }
)
```

toggle_terminus_panel   Terminus: Toggle Panel
                        показати/приховати панель

terminus_reset          Terminus: Reset

terminus_rename_title   Terminus: Rename Title

terminus_close          Terminus: Close
                        закрити поточний термінал

terminus_close_all      Terminus: Close All
                        закрити усі термінали

terminus_maximize       Terminus: Maximize to Tab
                        переносить термінал з панелі у вікно

terminus_minimize       Terminus: Minimize to Panel
                        переносить термінал з вікна у панель

terminus_select_theme   Terminus Utilities: Select Theme
                        вибрати тему для термінала

terminus_generate_theme Terminus Utilities: Generate User Theme
                        створити тему для термінала


#### TrailingSpaces                                             <i id="TSs"></i>

версія:      1.3.7
автор:       SublimeText
посилання:   https://packagecontrol.io/packages/TrailingSpaces
             https://github.com/SublimeText/TrailingSpaces
призначення: підсвічує зайві пробіли у кінці рядків
залежності:  немає

Пакунок розширює вбудовані можливості Sublime. Якщо їх цілком достатньо, пакунок
не потрібен. Ці вбудовані можливості наступні:

trim_trailing_white_space_on_save видаляє пробіли при збереженні документа
draw_white_space                  показує пробіли (не тільки прикінцеві)
ensure_newline_at_eof_on_save     додає пустий рядок в кінець документу


##### Меню TrailingSpaces

Edit ▶ Trailing Space
Preferences ▶ Package Settings ▶ Trailing Spaces ▶ Settings

Для видалення пробілів: Edit ▶ Trailing Space ▶ Delete.
Для увімкнення/вимкнення підсвітки: Edit ▶ Trailing Space ▶ Highlight Regions


##### Налаштування TrailingSpaces

Preferences ▶ Package Settings ▶ Trailing Spaces ▶ Settings, або файл
налаштувань trailing_spaces.sublime-settings в директорії користувача.


enabled                  робочий стан пакунку
                         true

highlight_color          колір підсвітки, пустий рядок - прозора підсвітка
                         "region.redish"

include_empty_lines      підсвітка рядків, де є тільки пробіли
                         true

include_current_line     підсвітка рядку з курсором
                         true

scope_ignore             не підсвічувати вказані типи файлів
                         ["text.find-in-files", "source.build_output", "source.diff", "text.html.markdown"]

modified_lines_only      при видаленні пробілів видаляються тільки ті, що
                         зроблені з моменту останнього збереження
                         false

trim_on_save             видалення пробілів при збереженні документа
                         false

save_after_trim          збереження документа при видаленні пробілів
                         false

non_visible_highlighting лінива підсвітка пробілів (не підсвічує не видиме)
                         500

update_interval          час спрацювання оновлення
                         250

file_max_size            кількість символів у документі, більше якої плагін
                         вимикається
                         1048576

regexp                   перевизначення поняття пробілу в кінці рядка
                         "[ \t]+"


##### Команди TrailingSpaces

delete_trailing_spaces Trailing Spaces: Delete Trailing Spaces
                       видаляє пробіли

toggle_trailing_spaces Trailing Spaces: Toggle Trailing Spaces Highlighting
                       вмикає/вимикає підсвітку пробілів

edit_settings          Trailing Spaces Settings
                       відкриває файл налаштувань пакунку
                       args:
                         base_file: шлях до програмного файлу налаштувань
                         default: шлях до кастомного файлу, який перезаписує
                           base_file

toggle_trailing_spaces_modified_lines_only перемикає налаштування
                                           modified_lines_only


#### View In Browser                                            <i id="ViB"></i>

версія:      2021.02.24.01.47.56
автор:       adampresley
посилання:   https://packagecontrol.io/packages/View%20In%20Browser
             https://github.com/adampresley/sublime-view-in-browser
             сайт
призначення: відкриття активного файлу у браузері
залежності:  немає

Додає пункт меню "View in Browser" до контекстного меню відкритого файла (не в
боковій панелі як SideBarEnhacements, а саме на тексті відкритого файла).
Контекстне меню відкритого файла і так має за замовчуванням команду "Open in
Browser" (правда, тільки для html-файлів). Якщо її достатньо, пакунок не
потрібен.

Пакунок відкриває усі файли відповідно до їх розширень. Якщо файл новий і не
збережений, пакунок його відкриє як файл у форматі .htm. За замовчуванням файли
відкриваються у Firefox.


Ctrl+Alt+F - firefox,
Ctrl+Alt+C - chrome,
Ctrl+Alt+O - opera,
Ctrl+Alt+I - IE,
Ctrl+Alt+S - Safari


##### Меню View In Browser

Context ▶ View in Browser
Tools ▶ View in Browser
Preferences ▶ Package Settings ▶ View in Browser


##### Налаштування View In Browser

Файл з налаштуваннями доступний через Preferences ▶ Package Settings ▶ View in
Browser

```json
{
  "posix": {
    "linux": {
      "firefox": "firefox -new-tab",
      "chrome": "google-chrome",
      "chrome64": "google-chrome",
      "chromium": "chromium"
    },
    "linux2": {
      "firefox": "firefox -new-tab",
      "chrome": "google-chrome",
      "chrome64": "google-chrome",
      "chromium": "chromium"
    },
    "darwin": {
      "firefox": "open -a \"/Applications/Firefox.app\"",
      "safari": "open -a \"/Applications/Safari.app\"",
      "chrome": "open -a \"/Applications/Google Chrome.app\"",
      "chrome64": "open -a \"/Applications/Google Chrome.app\"",
      "yandex": "open -a \"/Applications/Yandex.app\""
    }
  },
  "nt": {
    "win32": {
      "firefox": "C:\\Program Files\\Mozilla Firefox\\firefox.exe -new-tab",
      "iexplore": "C:\\Program Files\\Internet Explorer\\iexplore.exe",
      "chrome": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      "chrome64": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      "yandex": "%Local AppData%\\Yandex\\YandexBrowser\\browser.exe"
    }
  },

  "browser": "firefox"
}

```


##### Команди View In Browser

view_in_browser View In Browser
                відкриває файл у браузері
                ctrl+alt+v: default (firefox)
                  args: no
                ctrl+alt+f: firefox
                  args: { "browser": "firefox" } }
                ctrl+alt+c: chrome
                  args: { "browser": "chrome" } }
                ctrl+alt+i: iexplore
                  args: { "browser": "iexplore" } }
                ctrl+alt+s: safari
                  args: { "browser": "safari" } }


#### Vue Syntax Highlight                                       <i id="VSH"></i>

версія:      4.0.1
автор:       vuejs
посилання:   https://packagecontrol.io/packages/Vue%20Syntax%20Highlight
             https://github.com/vuejs/vue-syntax-highlight
призначення: підсвітка синтаксису vue
залежності:  немає


#### WordCount                                                  <i id="WoC"></i>

версія:      -
автор:       titoBouzout
посилання:   -
             https://github.com/titoBouzout/WordCount
призначення: додає в рядок стану інформацію по кількості слів, сторінок тощо
залежності:  немає

від цього автора є ще один подібний пакунок
https://packagecontrol.io/packages/WordingStatus
треба буде глянути


##### Меню WordCount

Preferences ▶ Package Settings ▶ Word Count


##### Налаштування WordCount

blacklist_syntaxes           Масив розширень, де пакунок не повинен працювати
                             ["CSS", "SQL", "JavaScript", "Python", "PHP", "JSON"]

char_ignore_whitespace       пропускати пробіли для підрахунку символів
                             true

enable_count_chars           показати кількість символів у документі
                             false

enable_count_lines           показати кількість ліній у документі
                             false

enable_count_pages           показати кількість сторінок у документі
                             true

enable_line_char_count       показати кількість символів, знайдених у поточному
                             рядку
                             false

enable_line_word_count       показати кількість слів, знайдених у поточному
                             рядку
                             false

enable_live_count            включити лічильник
                             true

enable_readtime              Allows you to control if the estimated reading time
                             is enabled. Reading time is only displayed when
                             there is a time > 1s.
                             false

page_count_mode_count_words  встановити режим підрахунку сторінок залежний від
                             кількості слів
                             true

readtime_wpm                 Sets the WPM to calculate the Estimated Reading
                             Time for the file.
                             200

whitelist_syntaxes           Масив розширень, де пакунок повинен працювати, якщо
                             масив пустий, пакунок працюватиме з усіма файлами
                             []

words_per_page               якого розміру є сторінка (по кількості слів)
                             300

strip                        регулярні вирази для тих наборів букв, які не
                             потрібно вважити словами
                             `{  "php": ["<[^>]*>"], "html": ["<[^>]*>"] }`


Не робочі або не актуальні пакунки                       <i id="not_actual"></i>
--------------------------------------------------------------------------------

Formatter               виконує те саме, що і JsPrettier

Tabnine                 блокує стандартний попап з підказками, куди вписуються
                        підказки не тільки стандартні, а і від додатків,
                        відкриваючи свій. Пробував збільшити кількість позицій
                        підказок (за замовчуванням список з 5 елементів), але на
                        зміни не реагує. Коли заходиш через Preferences у
                        дефолтний файл налаштувань, він чомусь пустий, але у
                        самій теці пакунку є файл налаштувань із налаштуваннями

JavaScript Enhancements не працює, викидає помилку в консолі в linux Mint
                        Cinnamon, ST 4143

JavaScript Completions  підказки такі собі

ColorPicker             викликає системну палітру кольорів категорично не хоче
                        працювати в Linux Mint (Cinnamon&gpick) - в консолі
                        спрацьовує команда color_pick, але gpick не відкривається

Colorcoder  

SublimeREPL             не має вбудованої підтримки js, не оновлюється уже
                        багато років


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Офіційний сайт         ](https://www.sublimetext.com/)
2. [Менеджер пакетів       ](https://packagecontrol.io/)
3. [Українська локалізація ](http://keedhost.github.io/sublime-text-3-uk_UA/)
4. [                       ](https://sublime-text-unofficial-documentation.readthedocs.io/en/sublime-text-2/reference/commands.html)
5. [                       ](https://www.tutorialspoint.com/sublime_text/index.htm)
6. [                       ](https://www.shortcutfoo.com/app/dojos/sublime-text-3-win/cheatsheet)
7. [                       ](https://www.sublimetext.com/docs/api_reference.html)
