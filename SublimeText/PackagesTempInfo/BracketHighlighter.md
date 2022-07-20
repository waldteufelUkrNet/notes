##### BracketHighlighter

Налаштувань дуже багато, тут не всі. Детальніше:
https://facelessuser.github.io/BracketHighlighter/customize/


###### Меню BracketHighlighter

Tools ▶ Packages ▶ BracketHighlighter та
Preferences ▶ Package Settings ▶ BracketHighlighter.


###### Налаштування BracketHighlighter

Дефолтні підсвічування Sublime можуть конфліктувати з пакунком. Раніше для
уникнення цього потрібно було відключати опції Sublime: match_brackets,
match_brackets_angle, match_brackets_braces, match_brackets_content,
match_brackets_square, match_tags. Наразі це не потрібно, але треба змінити
опції кольорової схеми. Для цього в директорії користувача створюється файл з
назвою схеми і розширенням .sublime-color-scheme, наприклад
Color Scheme - Default.sublime-color-scheme, в цей файл вписуються наступні
значення:

```json
{
  "variables": {},
  "globals":
  {
    "bracket_contents_options": "none",
    "brackets_options": "none",
    "tags_options": "none"
  },
  "rules": []
}
```


Налаштування файлу User/bh_core.sublime-settings

show_in_minimap                    показ дужки на мінікарті (крім underline)
                                   Boolean (false)

show_unmatched                     підсвітка не парної дужки
                                   Boolean (true)

show_unmatched_exceptions          список мов, у яких поведінка show_unmatched
                                   буде навпаки
                                   Array of Strings

content_highlight_bar              експериментальна опція, показує вертикальну
                                   лінію від дужки до дужки.

align_content_highlight_bar        визначає, де буде відображатися лінія, увімкнена
                                   опцією content_highlight_bar
                                   true - враховує вкладеності дужок
                                   false - лінія завжи прибита до лівого краю

search_in_widgets                  експериментальна опція, підсвічує дужки у віджетах/
                                   панелях.

bracket_highlighter.ignore         для розробників, якщо потрібно, щоб створювана
                                   розробником панель не мала підсвітки дужок
                                   Boolean (True)

high_visibility_enabled_by_default вмикає режим підвищеної видимості (вміст
                                   дужок береться в рамку), потребує перезапуску
                                   Boolean (false)

high_visibility_style              стилізація режиму підвищеної видимості
                                   solid, outline, underline, thin_underline,
                                   squiggly, stippled

high_visibility_color              стилізація режиму підвищеної видимості (колір)
                                   __default__, __bracket__, будь-який колір,
                                   доступний через scope

match_only_adjacent                підсвітка дужок, тільки якщо курсор біля дужки

bracket_outside_adjacent           підсвітка дужок, тільки якщо курсор біля
                                   дужки ззовні

block_cursor_mode                  експериментальна опція, підсвітка дужок,
                                   тільки якщо курсор впритул перед дужкою,
                                   ігнорує bracket_outside_adjacent

bracket_string_escape_mode         визначає логіку пошуку дужок
                                   string: шукає, як у текстовому рядку
                                   regex: шукає, як у регулярці

search_threshold                   поріг пошуку у символах, ця властивість
                                   впливає тільки на автоматичний пошук, а не
                                   ручні виклики

ignore_threshold                   ігногує поріг пошуку і шукає до кінця

auto_selection_threshold           кількість одночасно підсвічуваних дужок

kill_highlight_on_threshold        виключає підсвітку при перевищенні ліміту
                                   auto_selection_threshold

gutter_icons                       дозволяє/забороняє іконки

no_multi_select_icons              вимикає підсвітку дужок при мультикурсорах

show_offscreen_bracket_popup       показує попап з інформацією про дужку і
                                   область між дужками, якщо одна з дужок 
                                   знаходиться за зоною видамості, для появи
                                   попапу потрібно перенести курсор впритул до
                                   дужки і навести мишку на дужку

show_bracket_popup_always          показує попап з інформацією про дужки, навіть
                                   якщо обидві дужки у області видимості

popup_char_context                 визначає кількість символів на рядок
                                   контексту спливаючого вікна

popup_line_context                 визначає кількість рядків контексту
                                   спливаючого вікна, тільки якщо одна з дужок
                                   поза зоною видимості. Рекомендується
                                   використовувати парні числа

use_custom_popup_bracket_emphasis  експериментальна опція, дозволяє використання
                                   опції зміни кольору не видимої дужки в попапі 

popup_bracket_emphasis             визначає колір не видимої дужки в попапі,
                                   може бути взятий зі scope, або визначений
                                   вручну у форматах #rgb або #rrggbb

debug_enable                       вмиакає/вимикає режим відладки (логування)

brackets                           відповідає за конфігурацію дужок, об'єкт з
                                   ключами:
                                     name: унікальне ім'я дужки
                                     open: відкриваюча дужка
                                     close: закриваюча дужка
                                     style: ім'я стилю підсвітки
                                     scope_exclude: масив scope, які ігнорують
                                       дужки
                                     scope_exclude_exceptions: ігнорування
                                       виключення підобластей
                                     language_filter: визначає, чим є
                                       language_list - білим чи чорним листом
                                     language_list: масив імен файлів мов для
                                       підсвічування
                                     plugin_library: плагін для пошуку співпадінь
                                     find_in_sub_search: This rule should be
                                       included when doing sub bracket matching
                                       in scope_brackets (like finding round
                                       brackets between quotes etc.). The
                                       setting must be a string and can be
                                       either true, false, or only; only means
                                       this bracket is only matched as a sub
                                       bracket of a scope_bracket.
                                     ignore_string_escape: Do not ignore sub
                                       brackets found in strings and regex when
                                       escaped, but use internal escape logic to
                                       determine if the brackets should be
                                       ignored based on whether regex or string
                                       escape mode is set.
                                     enabled: увімкнути/викнути правило

scope_brackets                     ??? об'єкт з ключами: name, open, close,
                                   style, scopes, language_filter, language_list,
                                   sub_bracket_search, enabled, plugin_library



Налаштування файлу User/bh_tag.sublime-settings

tag_mode                           список різних режимів, оцінюється з верху до
                                   низу і вибирає перший режим, який задовольняє
                                   усі умови. Кожен елемент списку має ключі:
                                     mode: ім'я
                                     syntax: масив з мовами, доступними в режимі
                                     first_line (опційно): регулярка, яка
                                       співставляється з першим рядком файла для
                                       застосування режиму до файла

tag_style                          визначає стиль підсвітки, це значення має
                                   корелюватися з опцією bracket_styles

tag_scope_exclude                  виключає певні scope під час пошуку тегів

optional_tag_patterns              визначає регулярки для тегів з не
                                   обов'язковим закриваючим тегом

void_tag_patterns                  визначає регулярки для тегів, які ніколи не
                                   мають закриваючого тегу

self_closing_tag_patterns          визначає регулярки для одинарних тегів, які
                                   можуть самозакриватися: <tag/>

tag_name                           визначає регулярки для ідентифікації імені
                                   тега для визначеного режиму

attributes                         визначає регулярки для ідентифікації
                                   атрибутів для визначеного режиму

start_tag                          визначає регулярку для відкриваючого тегу

end_tag                            визначає регулярку для закриваючого тегу


Налаштування файлу User/bh_swapping.sublime-settings

https://facelessuser.github.io/BracketHighlighter/customize/#swap-brackets-plugin-settings


Налаштування файлу User/bh_wrapping.sublime-settings

https://facelessuser.github.io/BracketHighlighter/customize/#wrap-brackets-plugin-settings


###### Команди BracketHighlighter

bh_toggle_enable              BracketHighlighter: Toggle Global Enable
                              вмикає/вимикає пакунок

bh_remove_brackets            BracketHighlighter: Remove Brackets
                              видаляє дужки

swap_brackets                 BracketHighlighter: Swap Brackets
                              ???

wrap_brackets                 BracketHighlighter: Wrap Selections with Brackets
                              огортає виділення дужками (попап)

bh_offscreen_popup            BracketHighlighter: Find Matching Offscreen Bracket
                              ??? (попап)

bh_async_key                  BracketHighlighter: Match Brackets (ignore threshold)
                              BracketHighlighter: Jump to Left Bracket
                              BracketHighlighter: Jump to Right Bracket
                              BracketHighlighter: Select Bracket Content
                              BracketHighlighter: Select Bracket Content with Brackets
                              BracketHighlighter: Fold Bracket Content
                              BracketHighlighter: Select Tag Name (closing and opening)
                              BracketHighlighter: Select Next Attribute (right)
                              BracketHighlighter: Select Next Attribute (left)
                              BracketHighlighter: Swap Quotes
                              args:
                                lines, no_outside_adj, no_block_mode, lines,
                                plugin

edit_settings                 BracketHighlighter: Settings
                              BracketHighlighter: Tag Settings
                              BracketHighlighter: Wrap Settings
                              BracketHighlighter: Swap Settings
                              args:
                                base_file, default

bh_toggle_string_escape_mode  BracketHighlighter: Toggle String Bracket Escape Mode
                              перемикається між режимами рядок/регулярка

bh_toggle_high_visibility     BracketHighlighter: Toggle High Visibility Mode
                              перемикає режим підвищеної видимості

bracket_highlighter_open_site BracketHighlighter: Documentation
                              відкриває сайт пакунку
                              args:
                                url: адреса сайта

bracket_highlighter_doc       BracketHighlighter: Quick Start Guide
                              відкриває md-файл з початковою інструкцією
                              args:
                                page: адреса файлу

bh_debug                      BracketHighlighter: Enable Debug Mode
                              BracketHighlighter: Disable Debug Mode
                              вмикає/вимикає режим відлагодження
                              args:
                                set_value: Boolean

bh_debug_rule                  (Debug) Filter Rules by Key
                               ???
                               args:
                                 filter_key: Boolean

bh_debug_rule                  (Debug) Show Merged Rules
                               ???