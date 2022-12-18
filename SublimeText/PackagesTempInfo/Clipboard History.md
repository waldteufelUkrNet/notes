##### Clipboard History

Пакунок розширює стандартний буфер обміну і дозволяє зберігати в ньому багато
записів і зручно обирати потрібне. Пакунок не ставиться через менеджер пакетів,
його треба вантажити з GitHab'а та встановлювати вручну. Пакунок працює тільки
з буфером обміну всередині SublimeText і тільки з комбінацією клавіш Ctrl+C.

https://packagecontrol.io/packages/Clipboard%20History
https://github.com/kemayo/sublime-text-2-clipboard-history


###### Налаштування Clipboard History

limit            максимальна кількість елементів у буфері обміну
                 30

paste_and_indent ?
                 true


###### Команди Clipboard History


clipboard_clear_history  очистити буфер
                         ctrl+alt+d

clipboard_display        Clipboard History
                         ctrl+alt+v
                         показати список збережених елементів у буфері обміну

clipboard_paste_next     paste the next (newer) history entry
                         ctrl+shift+alt+v

clipboard_paste_previous paste the previous (older) history entry
                         ctrl+shift+v