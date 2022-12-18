##### PlainTasks

Пакунок надає можливість організовувати todo-листи. Встановлюється в директорію
Data/Packages. Працює з файловими розширеннями .todo/.todolist/.tasks/.taskpaper
або файлами TODO без розширення.

Все, що закінчується двокрапкою, стає заголовком, заголовки можуть бути
вкладеними. Курсив позначається нижнім підкресленням, жирний текст - зірочками.

Якщо набрати два дефіса і натиснути tab, додаток вставить сепаратор:
--- ✄ -----------------------

Пакунок має такі вбудовані теги: @today, @critical, @high, @low, @started,
@toggle, @created, @due вони присутні у попапі автодоповнення ("ctrl+space" /
"alt+/" / "tab").

@started() - повторне натиснення клавіші tab ставить дату після тега. Якщо
скасувати/зупинити/виконати цю задачу, з'явиться час, потрачений на неї.

@toggle(current date) зупиняє/відновлює виконання задачі (обрахунок часу)

@due(date) - дозволяє здійснювати облік часу: під тегом вставляє скільки часу
лишилося до визначеної дати, або скільки часу пройшло з моменту, коли задача
повинна була бути виконаною. Замість кінцевої дати можна вписувати кількість
часу, потрібного на виконання задачі. Детальніше:
https://packagecontrol.io/packages/PlainTasks

Пакунок дозволяє створювати посилання на файли і каталоги проекту в todo-файлах.
Посилання відкриваються комбінацією клавіш alt+o. Відкриття каталогу призводить
до його появи у бічній панелі (додавання каталогу до проекту). У файлових
посиланнях можна додавати номер рядку і відступ курсору від краю, напр.:
".\filename:11:8".

У файлах пакунку ж файл Tutorial.todo з доступною інструкцією.


###### Меню PlainTasks

Preferences ▶ Package Settings ▶ PlainTasks
Context ▶ Tasks: Filter by tags under cursors
Context ▶ Tasks: Show date picker
Context ▶ Tasks: Add due date tag
Context ▶ Tasks: Sort items in the list under cursor by due date and priority
Context ▶ Tasks: Reverse sort items in the list under cursor by due date and
          priority


###### Налаштування PlainTasks

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


###### Команди PlainTasks

plain_tasks_archive                     Tasks: Archive
                                        ctrl+shift+a
                                        архівування задачі: перенесення її в
                                        кінець документа в секцію "Archive"

plain_tasks_archive                     Tasks: Archive within selection(s)
                                        args: {"partial": true} }

plain_tasks_calendar                    Tasks: Show date picker

plain_tasks_cancel                      Tasks: Cancel
                                        alt+c
                                        позначити задачу скасованою

plain_tasks_complete                    Tasks: Complete
                                        ctrl+d
                                        позначити задачу виконаною (з датою),
                                        повторний клік - без дати

plain_tasks_convert_to_html             Tasks: Save as HTML…
                                        args: {"ask": true} }
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

plain_tasks_new_with_date               ?
                                        ctrl+shift+enter

plain_tasks_goto_tag                    навігація по тегах (відкривається список
                                        тегів)
                                        ctrl+shift+r

plain_task_insert_date                  ?
                                        tab

plain_tasks_archive_org                 виділити усе дерево підзадач і перенести
                                        їх у новий файл із суфіксом "_archive"
                                        ctrl+shift+o

plain_tasks_replace_short_date          ?
                                        tab

plain_tasks_re_calculate_time_for_tasks ?
                                        tab