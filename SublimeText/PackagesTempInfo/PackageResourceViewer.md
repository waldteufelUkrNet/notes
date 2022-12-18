##### PackageResourceViewer

Пакунок дозволяє переглядати код встановлених пакунків, переносити, редагувати.


###### Меню PackageResourceViewer

Preferences ▶ Package Settings ▶ PackageResourceViewer


###### Налаштування PackageResourceViewer

ignore_patterns    Список шаблонів регулярних виразів, які потрібно ігнорувати.
                   Ці регулярні вирази порівнюються з назвою файлу чи каталогу.
                   ["\\.(git|hg|svn|DS_Store)"]

open_multiple      чи тримати вікно вибору пакунків відкритим при уже вибраному
                   пакунку
                   true

single_command     визначає, чи потрібно відображати одну команду для перегляду
                   і редагування файлів, чи дві різні
                   true

return_to_previous True, якщо під час переміщення вгору каталогу ви бажаєте, щоб
                   попередній вибір вибирався автоматично.  False інакше.
                   false


###### Команди PackageResourceViewer

edit_package_file       PackageResourceViewer: Edit Package Resource
                        відкриває ресурси пакета як файл, який можна редагувати.
                        Після виконання цей плагін створить каталог (за потреби),
                        а також збереже ресурс. Ця команда відображатиметься,
                        лише якщо single_command: false.

extract_all_packages    PackageResourceViewer: Extract All Packages
                        розпакувує архіви всіх пакунків з директорії Packages і
                        переносить їх в Data/Packages

extract_package         PackageResourceViewer: Extract Package
                        розпакувує архів пакунку з директорії Packages і
                        переносить його в Data/Packages

package_resource_viewer PackageResourceViewer: Open Resource
                        дозволяє переглядати встановлені пакунки в Packages і
                        дивитися вміст файлів, ця команда доступна лише якщо
                        single_command: true

view_package_file       PackageResourceViewer: View Package Resource
                        дозволяє переглядати встановлені пакунки в Packages і
                        дивитися вміст файлів (без права редагування), ця
                        команда доступна лише якщо single_command: false
