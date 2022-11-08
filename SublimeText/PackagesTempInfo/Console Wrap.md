##### Console Wrap

console.log -> info -> warn -> error


###### Меню Console Wrap

Preferences ▶ Package Settings ▶ Console Wrap
Context ▶ Console Wrap


###### Налаштування Console Wrap

Preferences ▶ Package Settings ▶ Console Wrap ▶ Settings

Є можливість вибору типу лапок, редагування виведення та асоціації типів файлів
з такими типами, які підтримують логування.


###### Команди Console Wrap

console_wrap   Console Wrap: Create logs
               Ctrl+Shift+q
               створити рядок з console.log() і вставити його рядком нижче
               args: {"insert_before": false}

               Ctrl+Shift+Alt+q
               створити рядок з console.log() і вставити його рядком вище   
               args: {"insert_before": true}            

console_action Console Wrap: Remove logs
               args: {"action": "remove"}
               видалити логи

console_action Console Wrap: Remove Commented logs
               args: {"action": "remove_commented"}
               видалити усі закоментовані логи

console_action Console Wrap: Comment logs
               args: {"action": "comment"}
               закоментувати усі логи

console_action Console Wrap: Show all logs
               args: {"action": "show_quick_nav"}
               показати панель зі списком логів