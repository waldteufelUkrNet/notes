##### TrailingSpaces

Пакунок розширює вбудовані можливості Sublime. Якщо їх цілком достатньо, пакунок
не потрібен. Ці вбудовані можливості наступні:

trim_trailing_white_space_on_save видаляє пробілів при збереженні документа

draw_white_space                  показує пробіли (не тільки прикінцеві)

ensure_newline_at_eof_on_save     додає пустий рядок в кінець документу


###### Меню TrailingSpaces

Edit ▶ Trailing Space
Preferences ▶ Package Settings ▶ Trailing Spaces ▶ Settings

Для видалення пробілів: Edit ▶ Trailing Space ▶ Delete.
Для увімкнення/вимкнення підсвітки: Edit ▶ Trailing Space ▶ Highlight Regions


###### Налаштування TrailingSpaces

Preferences ▶ Package Settings ▶ Trailing Spaces ▶ Settings, або файл
налаштувань trailing_spaces.sublime-settings в директорії користувача.


enabled                  робочий стан пакунку

highlight_color          колір підсвітки, пустий рядок - прозора підсвітка

include_empty_lines      підсвітка рядків, де є тільки пробіли

include_current_line     підсвітка рядку з курсором

scope_ignore             не підсвічувати вказані типи файлів

modified_lines_only      при видаленні пробілів видаляються тільки ті, що
                         зроблені з моменту останнього збереження

trim_on_save             видалення пробілів при збереженні документа

save_after_trim          збереження документа при видаленні пробілів

non_visible_highlighting лінива підсвітка пробілів (не підсвічує не видиме)

update_interval          час спрацювання оновлення

file_max_size            кількість символів у документі, більше якої плагін
                         вимикається

regexp                   перевизначення поняття пробілу в кінці рядка


###### Команди TrailingSpaces

delete_trailing_spaces Trailing Spaces: Delete Trailing Spaces
                       видаляє пробіли

toggle_trailing_spaces Trailing Spaces: Toggle Trailing Spaces Highlighting
                       вмикає/вимикає підсвітку пробілів

edit_settings          Trailing Spaces Settings
                       відкриває файл налаштувань пакунку
                       args:
                         base_file: шлях до програмного файлу налаштувань
                         default: шлях до кастомного файлу, який перезаписує
                           base_file

toggle_trailing_spaces_modified_lines_only перемикає налаштування
                                           modified_lines_only