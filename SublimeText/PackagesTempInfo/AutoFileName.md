##### AutoFileName

###### Меню AutoFileName

Preferences ▶ Package Settings ▶ AutoFileName


###### Налаштування AutoFileName

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


###### Команди AutoFileName

open_file          AutoFileName: Default Settings
                   відкриває файл налаштувань
                   args:
                     {"file": "${packages}/AutoFileName/autofilename.sublime-settings"}

afn_settings_panel AutoFileName: Quick Settings
                   відкриває панель швидких налаштувань