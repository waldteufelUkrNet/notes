##### SublimeCodeIntel

Пакунок робить дві речі: автокомпліт стандартних функцій мови програмування
(підтримує мови ActionScript, Django, Docker, EJS, epMojo, HTML, KomodoSnippet,
LaravelBlade, Mason, Mustache, MXML, PHP, R, reStructuredText, RHTML, Smarty,
TracWiki, TemplateToolkit, Twig, XBL, XML, XSLT, XUL, Python, Python3, Ruby,
Perl, Go, ECMAScript, JavaScript, Node.js, CSS, SCSS, Sass, Less, HTML5, Tcl,
C/C++, Objective-C.) та додавання в контекстне меню команди для переходу на
місце оголошення функції.

Вимагає встановленого на комп'ютері Python та pip (для установки CodeIntel).


###### Меню SublimeCodeIntel

Preferences ▶ Package Setting ▶ SublimeCodeIntel
Context ▶ Jump to Symbol Definition
Context ▶ Back to Symbol Definition


###### Налаштування SublimeCodeIntel

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


###### Команди SublimeCodeIntel

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