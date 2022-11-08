##### DocBlockr

Для створення коментаря потрібно рядком перед оголошенням змінної або функції
надрукувати /** та натистути Enter.

Якщо назва функції починається з set/add, пакунок не додає @return. Якщо назва
функції починається з is/has, пакунок додає @return {Boolean}, те ж відбувається
зі змінними: is/has - booleans, callback/cb/done/fn/next - functions. Якщо в
JS-коді функція починається з великої букви, пакунок розуміє, що це - оголошення
класу, і не додає @return. Дану поведінку можна змінювати через налаштування
jsdocs_notation_map.

Якщо надрукувати однорядковий коментар і натиснути Ctri+Enter, пакунок його
прикрасить:
```js
// Foo bar baz<<Ctrl+Enter>>

/////////////////
// Foo bar baz //
/////////////////
```

###### Меню DocBlockr

Preferences ▶ Package Settings ▶ DocBlockr


###### Налаштування DocBlockr

Див. Base File.sublime-settings


###### Команди DocBlockr

jsdocs_decorate DocBlockr: Decorate line comment

jsdocs_reparse  DocBlockr: Reparse comment block
