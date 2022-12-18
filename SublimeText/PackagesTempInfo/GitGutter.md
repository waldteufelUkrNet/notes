##### GitGutter

https://jisaacks.github.io/GitGutter/

Додаток показує інформацію щодо стану і змін у рядках відкритого документу:
1. іконки на початку ряків
2. попап з деталями змін у файлі
3. інформація про файл і репозиторій у рядку стану
4. інформація про рядок (Show Line Annotation)


###### Меню GitGutter

Edit ▶ Revert Change to Commit
Edit ▶ Copy Content from Commit
View ▶ GitGutter
Goto ▶ Goto Previous Git Difference
Goto ▶ Goto Next Git Difference
Preferences ▶ Package Settings ▶ GitGutter


###### Налаштування GitGutter (файл GitGutter.sublime-settings)

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

next_prev_change_wrap             Визначає, чи виконуються команди
                                  git_gutter_next_change/git_gutter_prev_change
                                  після досягнення початку/кінця файлу.
                                  true


###### Команди GitGutter


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


###### Налаштування GitGutter (файл Preferences.sublime-settings)

Усі налаштування, прописані в цьому файлі, не можуть бути виключені у файлі
GitGutter.sublime-settings. Усі налаштування з файлу GitGutter.sublime-settings
можуть бути прописані тут.

git_gutter_enable увімкнути/вимкнути пакунок
                  true


###### Налаштування кольорової схеми

Див. https://jisaacks.github.io/GitGutter/coloring/


###### Можливі проблеми

https://jisaacks.github.io/GitGutter/troubleshooting/


Починаючи з версії SublimeText 3189 іконки не відображаються, оскільки в сам
редактор додана нова можливість порівняння файлів і підсвічування рядків зі
змінами Incremental Diff (https://www.sublimetext.com/docs/3/incremental_diff.html).
Таку поведінку можна відключити, змінивши налаштування "mini_diff" на false, що
може стати причиною конфлікту з більш важливими пакунками, такими як
SublimeLinter. Підсвітку рядків можна відстажувати на мінікатрі.




