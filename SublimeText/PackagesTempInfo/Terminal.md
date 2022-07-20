##### Terminal

Відкриває термінал через контекстне меню активного файла, файла в бічній панелі
або через комбінацію клавіш. У налаштуваннях можна вибрати свій термінал.


###### Меню Terminal

Context ▶ Open Terminal Here…
Preferences ▶ Package Settings ▶ Terminal


###### Налаштування Terminal

setting_name пояснення налаштування
               варіант 1: пояснення
                 lorem
               варіант 2: пояснення
                 lorem
             type or default value

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


###### Команди Terminal

command_name Command Name In Command Palette
             default_key_binding
             пояснення до команди
             args:
               first_arg: пояснення
                 lorem
               second_arg: пояснення
                 lorem

open_terminal                Terminal: Open
                             Ctrl+Shift+T (Windows & Linux)
                             Super+Shift+T (OSX)
                             відкриває термінал у директорії поточного файла

open_terminal_project_folder Terminal: Open in project folder
                             Ctrl+sSift+Alt+T (Windows & Linux)
                             Super+Shift+Alt+T (OSX)
                             відкриває термінал у кореневій директорії проекту

