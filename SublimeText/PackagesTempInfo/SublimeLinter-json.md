##### SublimeLinter-json

https://github.com/SublimeLinter/SublimeLinter-json

Пакунок надає інтерфейс до JSON-парсера, вбудованого в SublimeText. Щоб
полегшити редагування файлів налаштувань Sublime Text, які можуть містити
коментарі, цей лінтер дозволяє коментарі, але вони не повинні відображатися в
кінці рядка (після даних JSON).


###### Налаштування SublimeLinter-json

Налаштування лінтеру відбувається у файлі налаштувань фреймворка SublimeLinter у
секції "linters":

```json
{
  "linters": {
    "json": {
      "strict": false
    }
  }
}
```

strict режим парсингу, якщо false - сприймає коментарі та коми в кінці рядку
       false