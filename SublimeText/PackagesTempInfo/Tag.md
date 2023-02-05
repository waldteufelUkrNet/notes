##### Tag

Набір пакетів для роботи з HTML. Не встановлюється через менеджер пакунків, для
встановлення потрібно завантажити архів з github.


###### Меню Tag

Edit ▶ Tag
Preferences ▶ Package Settings ▶ Tag


###### Налаштування Tag

enable_live_tag_linting                перевірка тегів
                                       true

enable_close_tag_on_slash              close tag on slash
                                       true

tag_classes_sort                       copy css classes to clipboard
                                       false

enable_live_tag_linting_document_types типи файлів, в яких працюватиме пакунок
                                       [ "", "html", "htm", "php", "tpl", "md",
                                       "txt", "xhtml", "xml", "rdf", "xul",
                                       "svg", "xsd", "xslt", "tmTheme",
                                       "tmPreferences", "tmLanguage",
                                       "sublime-snippet" ]


###### Команди Tag

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