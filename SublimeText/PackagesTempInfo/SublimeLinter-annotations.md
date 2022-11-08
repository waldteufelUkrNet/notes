##### SublimeLinter-annotations

Даний лінтер дозволяє підсвічувати довільні літерали, які знаходяться в середині
коментарів. Пошук літералів є регістрозалежним.


###### Налаштування SublimeLinter-annotations

Лінтер не має власного файлу налаштувань, його налаштування прописуються у файлі
налаштувань SublimeLinter в секції "linters".

warnings     масив рядків для пошуку, які підсвічуватимуться як попередження

errors       масив рядків для пошуку, які підсвічуватимуться як помилки

infos        масив рядків для пошуку, які підсвічуватимуться як інформація

mark_message чи буде підсвічуватися весь коментар, чи тільки співпадіння

selector_    A scope selector for regions that the word lists will be searched
             in.

Приклад налаштувань:

```json
{
  "linters": {
    "annotations": {
      "infos": ["NOTA BENE", "FYI", "@todo"],
      "warnings": ["FOO", "BAR"],
      "errors": ["WHAT?", "OMG!"]
    }
  }
}
```