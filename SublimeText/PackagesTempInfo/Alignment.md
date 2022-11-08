##### Alignment

Пакунок крім стандартного файлу налаштувань додатково створює
CSS.sublime-settings, JSON.sublime-settings та Javascript.sublime-settings.


###### Меню Alignment

Preferences ▶ Package Settings ▶ Alignment


###### Налаштування Alignment (/User/Base File.sublime-settings)

align_indent           чи слід вирівняти рівень відступу багаторядкового
                       виділення. Приклад до вирівнювання:
                       ```css
                       a.marginalias {
                         font-weight: 900;
                         letter-spacing: 2px;
                         position: relative;
                         bottom: 5px;
                         display: inline-block;
                         text-indent: 0;
                         -webkit-transform: scale(0.8);
                             -ms-transform: scale(0.8);
                                 transform: scale(0.8);
                       }
                       ```

                       Якщо true:
                       ```css
                       a.marginalias {
                                 font-weight: 900;
                                 letter-spacing: 2px;
                                 position: relative;
                                 bottom: 5px;
                                 display: inline-block;
                                 text-indent: 0;
                                 -webkit-transform: scale(0.8);
                                 -ms-transform: scale(0.8);
                                 transform: scale(0.8);
                       }
                       ```

                       якщо false:
                       ```css
                       a.marginalias {
                         font-weight      : 900;
                         letter-spacing   : 2px;
                         position         : relative;
                         bottom           : 5px;
                         display          : inline-block;
                         text-indent      : 0;
                         -webkit-transform: scale(0.8);
                             -ms-transform: scale(0.8);
                                 transform: scale(0.8);
                       }
                       ```
                       true

mid_line_tabs          потрібно виставити в true, якщо вирівнювання здійснюється
                       за допомогою табів, а не пробілів. Це також спричинить
                       вирівнювання багатосимвольних операторів за лівим краєм
                       до першого символу в операторі замість символу з
                       параметра "alignment_chars". 
                       false

alignment_chars        Символи середнього рядка для вирівнювання в
                       багаторядковому виділенні, зміна на порожній масив вимкне
                       вирівнювання по середньому рядку
                       Якщо масив пустий:
                       ```css
                                 a.marginalias {
                                 font-weight: 900;
                                 letter-spacing: 2px;
                                 position: relative;
                                 bottom: 5px;
                                 display: inline-block;
                                 text-indent: 0;
                                 -webkit-transform: scale(0.8);
                                 -ms-transform: scale(0.8);
                                 transform: scale(0.8);
                                 }
                       ```
                       ["="]

alignment_space_chars  якщо наступний символ знайдено для вирівнювання, вставити
                       пробіл перед ним у остаточному вирівнюванні
                       ["="]

alignment_prefix_chars The characters to align along with "alignment_chars" For
                       instance if the = is to be aligned, there are a number of
                       symbols that can be combined with the = to make an
                       operator, and all of those must be kept next to the = for
                       the operator to be parsed
                       [ "+", "-", "&", "|", "<", ">", "!", "~", "%", "/", "*", "." ]                ***


###### Команди Alignment

alignment                               -
                                        Ctrl+Alt+a
                                        вирівняти по розділовому знаку