##### AlignTab

Пакунок дозволяє вирівнювати текст за різними символами, самостійно визначати
символи вирівнювання (або регулярки), редагувати контекстне меню.

Детальніше про регулярки:
https://packagecontrol.io/packages/AlignTab
https://github.com/randy3k/AlignTab/wiki/Examples


###### Меню AlignTab

Preferences ▶ Package Settings ▶ AlignTab
Context ▶ AlignTab


###### Налаштування AlignTab

named_patterns об'єкт, в якому ключами є довільні зручні назви, а значеннями -
               регулярки для вирівнювання. Ці назви можна вводити у вікно запиту
               замість регулярок, коли пакунок запитує шаблон для вирівнювання.


###### Команди AlignTab

align_tab            AlignTab
                     пакунок пропонує ввести регулярку, по якій буде
                     здійснюватися вирівнювання, а потім вирівнює текст

align_tab            AlignTab: Table Mode
                     args: {"mode" : true}
                     пакунок пропонує ввести регулярку, по якій буде
                     здійснюватися табличне вирівнювання, а потім вирівнює текст
                     як таблицю

align_tab            AlignTab: Live Preview Mode
                     args: {"live_preview" : true}
                     пакунок вирівнює текст на свій розсуд

align_tab_clear_mode AlignTab: Exit Table Mode