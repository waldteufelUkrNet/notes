##### View In Browser

Додає пункт меню "View in Browser" до контекстного меню відкритого файла (не в
боковій панелі, а саме на тексті відкритого файла). Контекстне меню відкритого
файла і так має за замовчуванням команду "Open in Browser" (правда, тільки для
html-файлів). Якщо її достатньо, пакунок не потрібен.

Пакунок відкриває усі файли відповідно до їх розширень. Якщо файл новий і не
збережений, пакунок його відкриє як файл у форматі .htm. За замовчуванням файли
відкриваються у Firefox.



Ctrl+Alt+F - firefox,
Ctrl+Alt+C - chrome,
Ctrl+Alt+O - opera,
Ctrl+Alt+I - IE,
Ctrl+Alt+S - Safari


###### Меню View In Browser

Context ▶ View in Browser
Tools ▶ View in Browser
Preferences ▶ Package Settings ▶ View in Browser


###### Налаштування View In Browser

Файл з налаштуваннями доступний через Preferences ▶ Package Settings ▶ View in
Browser

```json
{
  "posix": {
    "linux": {
      "firefox": "firefox -new-tab",
      "chrome": "google-chrome",
      "chrome64": "google-chrome",
      "chromium": "chromium"
    },
    "linux2": {
      "firefox": "firefox -new-tab",
      "chrome": "google-chrome",
      "chrome64": "google-chrome",
      "chromium": "chromium"
    },
    "darwin": {
      "firefox": "open -a \"/Applications/Firefox.app\"",
      "safari": "open -a \"/Applications/Safari.app\"",
      "chrome": "open -a \"/Applications/Google Chrome.app\"",
      "chrome64": "open -a \"/Applications/Google Chrome.app\"",
      "yandex": "open -a \"/Applications/Yandex.app\""
    }
  },
  "nt": {
    "win32": {
      "firefox": "C:\\Program Files\\Mozilla Firefox\\firefox.exe -new-tab",
      "iexplore": "C:\\Program Files\\Internet Explorer\\iexplore.exe",
      "chrome": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      "chrome64": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      "yandex": "%Local AppData%\\Yandex\\YandexBrowser\\browser.exe"
    }
  },

  "browser": "firefox"
}

```


###### Команди View In Browser

view_in_browser View In Browser
                відкриває файл у браузері
                ctrl+alt+v: default (firefox)
                  args: no
                ctrl+alt+f: firefox
                  args: { "browser": "firefox" } }
                ctrl+alt+c: chrome
                  args: { "browser": "chrome" } }
                ctrl+alt+i: iexplore
                  args: { "browser": "iexplore" } }
                ctrl+alt+s: safari
                  args: { "browser": "safari" } }
