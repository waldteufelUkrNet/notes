##### WordCount

Пуаунок додає в рядок стану інформацію по кількості слів, сторінок тощо.


###### Меню WordCount

Preferences ▶ Package Settings ▶ Word Count


###### Налаштування WordCount

blacklist_syntaxes           Масив розширень, де пакунок не повинен працювати
                             ["CSS", "SQL", "JavaScript", "Python", "PHP", "JSON"]

char_ignore_whitespace       пропускати пробіли для підрахунку символів
                             true

enable_count_chars           показати кількість символів у документі
                             false

enable_count_lines           показати кількість ліній у документі
                             false

enable_count_pages           показати кількість сторінок у документі
                             true

enable_line_char_count       показати кількість символів, знайдених у поточному
                             рядку
                             false

enable_line_word_count       показати кількість слів, знайдених у поточному
                             рядку
                             false

enable_live_count            включити лічильник
                             true

enable_readtime              Allows you to control if the estimated reading time
                             is enabled. Reading time is only displayed when
                             there is a time > 1s.
                             false

page_count_mode_count_words  встановити режим підрахунку сторінок залежний від
                             кількості слів
                             true

readtime_wpm                 Sets the WPM to calculate the Estimated Reading
                             Time for the file.
                             200

whitelist_syntaxes           Масив розширень, де пакунок повинен працювати, якщо
                             масив пустий, пакунок працюватиме з усіма файлами
                             []

words_per_page               якого розміру є сторінка (у кількості слів)
                             300

strip                        регулярні вирази для тих наборів букв, які не
                             потрібно вважити словами
                             `{  "php": ["<[^>]*>"], "html": ["<[^>]*>"] }`
