##### Color Highlight

###### Меню Color Highlight

Tools ▶ Color Highlight
Preferences ▶ Package Settings ▶ Color Highlight Settings


###### Налаштування Color Highlight

highlight          режим роботи:
                     true: динамічна підсвітка
                     false: підсвітка викликається вручну
                     "load-save": підсвітка з'являється, коли файл завантажений
                     і збережений
                     "save-only": підсвітка з'являється, коли файл завантажений

gutter_icon        тип іконки: "circle"/"square"/"fill"/false

highlight_values   Show color by highlighting the value region
                   Boolean

named_values       підсвічує назви кольорів
                   Boolean

hex_values         підсвічує кольорі у форматі hex #RRGGBBAA
                   Boolean

0x_hex_values      підсвічує кольори у форматі 0xRRGGBBAA
                   Boolean

xterm_color_values підсвічує кольори у форматі xterm
                   Boolean

rgb_values         підсвічує кольори у форматі rgb
                   Boolean

hsv_values         підсвічує кольори у форматі hsv
                   Boolean

hsl_values         підсвічує кольори у форматі hsl
                   Boolean

hwb_values         підсвічує кольори у форматі hwb
                   Boolean

lab_values         підсвічує кольори у форматі lab
                   Boolean

lch_values         підсвічує кольори у форматі lch
                   Boolean


###### Команди Color Highlight

color_highlight                  Color Highlight: Color Highlight Current File /
                                 Color Highlight: Reset
                                 підсвітити поточний файл / скинути підсвітку
                                 кольорів
                                 args:
                                   action: "highlight" - підсвітити, "reset" -
                                     скинути

edit_settings                    Color Highlight: Color Highlight Settings
                                 відкрити файли з налаштуваннями
                                 args:
                                   base_file: програмний файл налаштувань
                                   default: користувацький файл налаштувань

color_highlight_enable_load_save Color Highlight: Load-Save Color Highlighting
                                 підсвітка кольорів з'являтиметься тільки, коли
                                 файл завантажений і збережений
                                 args:
                                   action: "load-save"

color_highlight_enable_save_only Color Highlight: Save-Only Color Highlighting
                                 підсвітка кольорів з'являтиметься тільки, коли
                                 файл завантажений
                                 args:
                                   action: "save-only"

color_highlight_disable          Color Highlight: Disable Color Highlighting
                                 відключає живе оновлення
                                 args:
                                   action: "off"

color_highlight_enable           Enable Color Highlighting
                                 підключає живе оновлення
                                 args:
                                   action: "on"

color_highlight_restore          Color Highlight: Restore Color Scheme
                                 відновити кольорову схему (прибирає підсвітку)