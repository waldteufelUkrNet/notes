##### Terminus

Terminus можна використовувати як систему збірки. Детальніше:
https://packagecontrol.io/packages/Terminus

Детальний огляд (англійською):
https://www.youtube.com/watch?v=mV0ghkMwTQc
https://www.youtube.com/watch?v=etIJMVIvVgg


###### Меню Terminus

Preferences ▶ Package Settings ▶ Terminus
Context ▶ Open Terminus here…


###### Налаштування Terminus

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


###### Команди Terminus

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

terminus_generate_theme Terminus Utilities: Generate User Theme