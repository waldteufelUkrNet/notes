##### TabsExtra

Після встановлення пакунку потрібно вручну оновити контекстне меню вкладок через
Preferences ▶ Package Settings ▶ TabsExtra.

Пункт меню "Sticy Tabs" позначає вкладку як таку, яку не треба закривати при
наступному виклику команди "Close All Tabs".

Не існує пункта, який забороняє закривати конкретну вкладку. Цей функціонал
доповнює пакунок "LockTab".


###### Меню TabsExtra

Preferences ▶ Package Settings ▶ TabsExtra


###### Налаштування TabsExtra

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


###### Команди TabsExtra

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