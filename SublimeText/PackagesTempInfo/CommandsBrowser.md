##### CommandsBrowser

Пакунок надає перелік доступних команд і коротку документацію по ним.


###### Меню CommandsBrowser

preferences ▶ Package Settings ▶ CommandsBrowser


###### Налаштування CommandsBrowser

setting_name пояснення налаштування
               варіант 1: пояснення
                 lorem
               варіант 2: пояснення
                 lorem
             type or default value

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


###### Команди CommandsBrowser

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