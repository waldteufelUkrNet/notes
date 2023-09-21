HTMLHint
================================================================================


Зміст
--------------------------------------------------------------------------------

- [Info                                                                 ](#info)
- [Правила                                                             ](#rules)
- [Посилання                                                           ](#links)


Info                                                           <i id="info"></i>
--------------------------------------------------------------------------------

Для роботи лінтера потрібно встановити відповідний npm-пакет (локально або
глобально):

```shell
npm install -g htmlhint@latest
npm install htmlhint@latest
```

Налаштування лінтера зберігаються у файлі налаштувань `.htmlhintrc`, причому
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
```


Правила                                                       <i id="rules"></i>
--------------------------------------------------------------------------------


### Doctype/Head

1. `doctype-first`        Документ повинен починатися з Doctype.

   **Boolean**

2. `doctype-html5`        Документ повинен починатися з Doctype, характерного
                          для HTML.

   **Boolean**

3. `html-lang-require`    В HTML-тезі обов'язковий і валідний lang-атрибут.

   **Boolean**

4. `head-script-disabled` Тег script не можна підключати в head.

   **Boolean**

5. `style-disabled`       Не можна використовувати тег style в html-документі.

   **Boolean**

6. `script-disabled`      Не можна використовувати тег script в html-документі.

   **Boolean**

7. `title-require`        Тег title обо'язково присутній в head.

   **Boolean**


### Attributes

1. `attr-lowercase`                 Назви атрибутів повинні писатися малими
                                    літерами.

   **Boolean** / **Array** - масив атрибутів-виключень, напр.
   `["fooBar", "Test"]`. Усі відомі атрибути svg, як-то `viewBox` ігноруються.

2. `attr-no-duplication`            Відсутність дублікатів для атрибутів.

   **Boolean**

3. `attr-no-unnecessary-whitespace` Відсутність пробілів між назвою і значенням
                                    атрибуту, напр. `<div title ="a"></div>`.

   **Boolean**

4. `attr-unsafe-chars`              Значення атрибутів не можуть містити
                                    небезпечні символи, напр.
                                    `\u0000-\u0009\u000b`.

   **Boolean**

5. `attr-value-double-quotes`       Значення атрибуту повинно бути у подвійних
                                    лапках.

   **Boolean**

6. `attr-value-single-quotes`       Значення атрибуту повинно бути в одинирних
                                    лапках.

   **Boolean**

7. `attr-value-not-empty`           Атрибути повинні мати значення.

   **Boolean**

8. `attr-sorted`                    Атрибути повинні бути відсортовані по
                                    порядку: `class`, `id`, `name`, `src`, `for`,
                                    `type`, `href`, `value`, `title`, `alt`,
                                    `role`. Решта атрибутів ігнорується.

   **Boolean**

9. `attr-whitespace`                Значення атрибуту не повинно містити
                                    початкових або кінцевих пробілів.

   **Boolean**

10. `alt-require`                   В тегах `area[href]`, `input[type=image]`
                                    та `img` повинен бути присутній атрибут
                                    `alt`.

    **Boolean**

11. `input-requires-label`          Усі теги input повинні мати відповідні теги
                                    `label`, точніше: не повинно бути кілька
                                    тегів `label` з однаковими атрибутами `for`.

    **Boolean**


### Tags

1. `tags-check`                 Дозвіл на специфічні правила для тегів і їх
                                валідація. Якщо `true` - лінтер перевіряє кожен
                                тег на допустимі атрибути та інші вимоги до тегу.

   ```html
   <!-- invalid: -->
   <main role="main"></main>
   <a>blabla</a>
   <a href="bbb" title="aaa" />
   <img src="bbb" title="aaa" alt="asd"></img>
   ```

   **Boolean**

2. `tag-pair`                   Подвійні теги повинні мати закриваючий тег.

   **Boolean**

3. `tag-self-close`             Одинарні теги повинні самозакриватися, напр.
                                `<br/>`

    **Boolean**

4. `tagname-lowercase`          Усі теги пишуться малими літерами.

   **Boolean** / **Array** - масив тегів-виключень, напр. `["clipPath", "test"]`

5. `tagname-specialchars`       Назви тегів не повинні містити символів крім
                                букв, цифр, `-, :` або `_`.
                                `true` вмикає правило

   **Boolean**

6. `empty-tag-not-self-closed`  Одинарний тег не може закриватися самостійно,
                                напр.:

   ```html
   <!-- invalid: -->
   <br />

   <!-- valid: -->
   <br>
   ```

   `true` вмикає правило.

   **Boolean**

7. `src-not-empty`             src-атрибут `img/script/link` повинен мати
                               значення.

   **Boolean**

8. `href-abs-or-rel`           Тип посилань.

   **Аргументи:**

   `"abs"` - абсолютні                                                      <br>
   `"rel"` - відносні                                                       <br>
   `false` - правило вимкнене                                               <br>


### Id

1. `id-class-ad-disabled` Id та класи не можуть використовувати слово "ad"/"ad-"
                          (такі назви можуть блокуватися антирекламними
                          програмами).

   **Boolean**

2. `id-class-value`       Значення id та класів повинні відповідати певним
                          вимогам.

   **Аргументи:**

   `"underline"` - aaa_bbb                                                  <br>
   `"dash"`      - aaa-bbb                                                  <br>
   `"humb"`      - aaaBbb                                                   <br>
   `false`       - правило вимкнене                                         <br>

3. `id-unique`            Id-атрибут повинен бути унікальним в документі.

   **Boolean**


### Inline

1. `inline-script-disabled` Заборона на використання inline-скриптів, напр.:

   ```html
   <!-- invalid: -->
   <img src="test.gif" onclick="alert(1);">
   <img src="JavaScript:alert(1)">
   <a href="JavaScript:alert(1)">test1</a>
   ```

   **Boolean**

2. `inline-style-disabled`  Заборона на використання inline-стилів.

   **Boolean**


### Formatting

1. `space-tab-mixed-disabled` Відступи формуються або пробілами, або табами.

   **Аргументи:**

   `"space"`  - відступи тільки з пробілів                                  <br>
   `"space4"` - відступи по 4 пробіли (або таби, але не на одному рядку)    <br>
   `"tab"`    - відступи тільки з табів                                     <br>
   `false`    - правило виключене                                           <br>

2. `spec-char-escape`         Спеціальні символи повинні бути екрановані, напр.
                              `>`

   **Boolean**


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Домашня сторінка htmlhint](https://htmlhint.com)
