##### Inc-Dec-Value

Пакунок збільшує/зменшує наступні види даних:

1. Додатні/від'ємні цілі числа
2. Додатні/від'ємні числа з плаваючою крапкою
3. Додатні/від'ємні числа і текст після них (12px, -5em, 0.1%)
4. Кольори у форматі hex:
    alt+up/down - +/- 1
    super+up/down(Linux) / super+alt+up/down(Windows) - кожен символ запису
    змінюється на 1
    super+alt+up/down(Linux) / super+ctrl+up/down(Windows) - hex -> rgba -> hex
    Якщо виділити фрагмент кольору, то змінюватиметься лише він. 
5. дати у форматі ISO (без перевірки валідності)
6. протилежні або циклічні enum-дані (true -> false; sunday -> monday -> …)
7. користувацькі enum-дані
8. рядки: lowercase -> capitalize -> uppercase


###### Меню Inc-Dec-Value

Preferences ▶ Package Settings ▶ Inc-Dec-Value


###### Налаштування Inc-Dec-Value

Див. inc_dec_value.sublime-settings


###### Команди Inc-Dec-Value

inc_dec_value .
              alt+up
              alt+scroll_up
              args: { "action": "inc_min" } }

inc_dec_value .
              alt+down
              alt+scroll_down
              args: { "action": "dec_min" } }

inc_dec_value .
              alt+insert
              args: { "action": "ins_min" } }

inc_dec_value .
              super+up (Linux)
              super+alt+up (Windows)
              super+scroll_up
              args: { "action": "inc_max" } }

inc_dec_value .
              super+down (Linux)
              super+alt+down (Windows)
              super+scroll_down
              args: { "action": "dec_max" } }

inc_dec_value .
              super+insert (Linux)
              super+alt+insert (Windows)
              args: { "action": "ins_max" } }

inc_dec_value .
              super+alt+up (Linux)
              super+ctrl+up (Windows)
              super+alt+scroll_up
              args: { "action": "inc_all" } }

inc_dec_value .
              super+alt+down (Linux)
              super+ctrl+down (Windows)
              super+alt+scroll_down
              args: { "action": "dec_all" } }

inc_dec_value .
              args: { "action": "ins_all" } }
              super+alt+insert (Linux)
              super+ctrl+insert (Windows)