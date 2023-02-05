##### Markdown Table Formatter

Пакунок дозволяє вирівнювати таблиці у файлах формату markdown. Щоб вирівнювання
пройшло успішно, рядок, який розділяє тіло і шапку таблиці, не повинен мати
пробілів.


###### Меню Markdown Table Formatter


Edit ▶ Markdown Table Formatter
Preferences ▶ Package Settings ▶ Markdown Table Formatter


###### Налаштування Markdown Table Formatter

autoformat_on_save    автоформатування таблиць при збереженні файлу
                      false

default_justification визначає, як вирівнювати текст у стовпчиках
                      [LEFT, RIGHT, CENTER]
                      "LEFT"

margin                кількість пробілів між "|" і текстом комірки
                      1

padding               додаткові пробіли після/до текстукомірки
                      0

verbose               make plugin verbose in debug console
                      false


###### Команди Markdown Table Formatter

markdown_table_format MarkdownTableFormatter: format table
                      вирівняти таблицю, якщо виділений фрагмент, або виділити
                      усі таблиці, якщо нема виділеного фрагменту
                      ctrl+alt+shift+t