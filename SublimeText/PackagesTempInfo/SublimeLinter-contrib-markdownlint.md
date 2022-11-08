##### SublimeLinter-contrib-markdownlint

Лінтер надає доступ до інтерфейсу markdownlint
(https://github.com/igorshubovych/markdownlint-cli), здійснює перевірку файлів
Markdown/CommonMark.

https://github.com/DavidAnson/markdownlint

Для роботи лінтера потрібно встановити відповідний npm-пакет:

```shell
npm install markdownlint-cli
```


###### Налаштування SublimeLinter-contrib-markdownlint

Налаштування лінтера зберігаються у файлі .markdownlintrc, який повинен бути
розташований у корені проекту. Лінтер шукає цей файл, починаючи від директорії,
в якій знаходиться лінтований файл, і вверх до кореня операційної системи, потім
перевіряє домашню директорію користувача. Якщо потрібно розташувати файл з
налаштуваннями деінде, це треба вказати у файлі налаштувань SublimeLinter в
секції "linters", напр.:
```json
{
  "linters": {
    "markdownlint": {
      "args": ["--config", "/custom/path/to/.markdownlintrc"]
    }
  }
}
```

Для виключення певних файлів з перевірки використовується файл
.markdownlintignore, який має синтаксис .gitignore.


setting_name пояснення налаштування
               варіант 1: пояснення
                 lorem
               варіант 2: пояснення
                 lorem
             type or default value



Повний список правил доступний за адресою:
https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md