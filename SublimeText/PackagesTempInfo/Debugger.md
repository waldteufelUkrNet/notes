##### Debugger

!!! З пакунком не дорозібрався. Адаптер для firefox мені здався не практичним, бо той самий дебаг можна робити через сам браузер, а робота через дебаггер не зручна, крім того attach видає помилки. З другим адаптером взагалі не розбирався, бо для перевірки його роботи треба запустити нормальний nodejs-проект і уже по факту розробки проекту тестити роботу дебагера.

Пакунок дозволяє проводити налагодження коду. Для роботи потрібно встановити
адаптери на вибір. Для JS актуальньними є 
vscode-firefox-debug (https://github.com/firefox-devtools/vscode-firefox-debug) та 
vscode-js-debug (https://github.com/microsoft/vscode-js-debug)

Пакунок приймає усі стандартні змінні Sublime, такі як ${file}, та специфічну
змінну VSCode ${workspaceFolder}.

vscode-firefox-debug:

В документації написано, що властиості прописуються у файлі .vscode/launch.json, але це стосується тільки VSCode, для Sublime потрібно прописувати все у файлі проекту по плючу "debugger_configurations".

Може запускатися у двох варіантах: "request" : "launch | attach".
Launch-мод передбачає відкриття Firefox. Повторний запуск дебагу закриває Firefox і відкриває його наново. Щоб кожного разу не перезапускати браузер, можна дописати "reAttach": true, але я не помітив позитивного ефекту: браузер перезапускається, в консолі з'являється напис "Debugging ended", але всі console.log() спрацьовують тільки при апершому запуску.


Властивості конфігураційного файлу:

name         назва конфігурації, потрібна для відображенні в списку еонфігурацій
             дебагера
             string

type         тип використовуваного адаптера, напр. "firefox"
             string

request      мод "launch" або "attach"
             string

reAttach     для launch-моду запобігає постійному перезапуску браузеру
             boolean

file         шлях до файлу, який потрібно відлагодити, напр.
             "${workspaceFolder}/index.html"
             string

url          адреса сервера (якщо відлагодження іде наприклад через localhost),
             "file" у такому випадку не потрібен. Напр.
             "http://localhost/index.html". Url може вказувати на директорію,
             тоді рядок адреси повинен закінчуватися слешом
             string

webRoot      коренева тека проекту при відлагодженні через сервер (з "url"),
             напр. "${workspaceFolder}"
             string

pathMappings розширений опис кореневої теки, використовується замість "webRoot".
             Потрібен тоді, коли configurations.url вказує на піддиректорію
             проекту. Має 2 властивості: "url" i "path", напр.
             [{"url": "http://localhost","path": "${workspaceFolder}"}]
             array with object

firefoxExecutable шлях до виконуваного файлу браузера, string

Attach-мод передбачає приєднання дебагера до уже відкритої Firefox, в якій увімкнено віддалений дебаг. Для цього потрібно у рядку адреси браузера ввести "about:config" та встановити наступні значення властивостей:

devtools.debugger.remote-enabled    true
devtools.chrome.enabled             true
devtools.debugger.prompt-connection false (рекомендовано)
devtools.debugger.force-local       false (Set this only if you want to attach VS Code to Firefox running on a different machine (using the host property in the attach configuration))

потім потрібно через термінал запустити браузер:
windows: "C:\Program Files\Mozilla Firefox\firefox.exe" -start-debugger-server
linux: firefox -start-debugger-server

і в конфігурації змінити "request" на "attach"

При спробі запуску attach-мода в консолі вибиває помилку [ERROR glean_core] Error setting metrics feature config: Json(Error("EOF while parsing a value", line: 1, column: 0)), відкривається firefox, але в його внутрішньому дебагу нема файлів проекту, щоб дебажити в браузері, а в консолі debugger при запуску дебага не відображається жодної console.log(), тільки повідомлення "Debugging ended".

Attach-мод також підтримує властивості url та webRoot, якщо треба проводити відлагодження через сервер.



###### Меню Debugger

▶


###### Налаштування Debugger

setting_name пояснення налаштування
               варіант 1: пояснення
                 lorem
               варіант 2: пояснення
                 lorem
             type or default value


###### Команди Debugger

command_name Command Name In Command Palette
             default_key_binding
             пояснення до команди
             args:
               first_arg: пояснення
                 lorem
               second_arg: пояснення
                 lorem