##### All Autocomplete

Робить підказки, спираючись на усі відкриті файли (Sublime шукає підказки тільки
в активному файлі).


###### Меню All Autocomplete

Preferences ▶ Package Settings ▶ All Autocomplete


###### Налаштування All Autocomplete

exclude_from_completion масив розширень файлів, у яких пакунок не працюватиме.
                        Може бути частковим рядком, тобто css підійде і для scss

exclude_sources         масив синтаксисів Sublime, у файлах яких пакунок не
                        працюватиме

max_word_size           не показувати підказки якщо в слові надруковано більше
                        букв

min_word_size           не показувати підказки якщо в слові надруковано менше
                        букв


Приклад файлу налаштувань:

```json
"exclude_from_completion": [
    "css",
    "js"
],
"exclude_sources": [
  "markdown"
],
"min_word_size": 5,
"max_word_size": 40
```