##### Sublimerge 3

Пакунок є інструментом для роботи з версіями документів. Має безкоштовний
ознайомлювальний період 90 днів.

Під час встановлення інсталюється в директорію Installed Packages, але також
створює директорію Packages/Sublimerge 3 і додає кілька файлів в директорію
User.

https://www.sublimerge.com/


###### Меню Sublimerge 3

Preferences ▶ Package Settings ▶ Sublimerge
Side Bar ▶ Sublimerge
Tab Context ▶ 
Context ▶ Sublimerge


###### Налаштування Sublimerge 3

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
                                        "^(?P<commit>.+)\t(?P<abbrev_commit>.+)\t(?P<author>.+)\t(?P<date_raw>.+)\t(?P<subject>.*)$"

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
                                        "^(?P<commit>.+)\t(?P<author>.+)\t(?P<date_raw>.+)\t(?P<subject>.*)$"

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


###### Команди Sublimerge 3

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


###### Інтеграція із системами контролю версій

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


###### Макроси для Sublimerge 3

Тут не розглядаються, доступні на офіційній сторінці додатку.