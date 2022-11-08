##### SublimeLinter-contrib-htmlhint

Лінтер надає доступ до інтерфейсу HTMLHint (https://htmlhint.com/),


###### Установка SublimeLinter-contrib-htmlhint

Лінтер можна встановити локально обо глобально:
```shell
npm install -g htmlhint@latest
npm install htmlhint@latest
```


###### Налаштування SublimeLinter-contrib-htmlhint

Налаштування лінтера зберігаються у файлі налаштувань .htmlhintrc, причому
правила прописуються одразу в об'єкт, а не в якусь підсекцію на зразок "rules":

```json
{
  "attr-no-duplication": true,
  "doctype-first": true
}
```

Також правила можуть прописуватися безпосередньо в html-файлах, у коментарях:
```html
<!-- htmlhint tag-pair,id-class-value:underline -->
<html>
  <head>...</head>
  <body>...</body>
</html>
````

Повний список правил доступний за адресою:
https://htmlhint.com/docs/user-guide/list-rules