Markdownlint
================================================================================


Зміст
--------------------------------------------------------------------------------

- [Info                                                                 ](#info)
- [Правила                                                             ](#rules)
- [Посилання                                                           ](#links)


Info                                                           <i id="info"></i>
--------------------------------------------------------------------------------

Лінтер для перевірки правопису файлів markdown та CommonMark.

Для роботи в Sublime Text потрібен пакет `SublimeLinter-contrib-markdownlint`.

Для роботи лінтера потрібно встановити відповідний npm-пакет:

```cmd
npm install -save-dev markdownlint-cli
```

Для виключення певних файлів з перевірки використовується файл
`.markdownlintignore`, який має синтаксис `.gitignore`.


Правила                                                       <i id="rules"></i>
--------------------------------------------------------------------------------

1. `header-increment`             (`heading-increment`) Не можна перескакувати
                                  рівні заголовків, напр.:

   ```md
   invalid:
   # header
   ### subheader
   ```

   **default:** `true`

2. `first-header-h1`              (`first-heading-h1`) Визначає, яким рівнем
                                  заголовку повинен починатися документ. Правило
                                  застаріле, натомість треба використовувати
                                  правило `first-line-heading`.

   **default:** `{"level": 1}`

3. `header-style`                 (`heading-style`) Не можна використовувати
                                  різні стилі заголовків, напр.:

   ```md
   invalid:
   # ATX style H1
   ## Closed ATX style H2 ##
   Setext style H1
   ===============
   ```

   **Аргументи:**

   `atx`                    - стиль atx                                     <br>
   `atx_closed`             - стиль atx із закриваючим тегом                <br>
   `consistent`             - значення береться з першого випадку           <br>
   `setext`                 - стиль setex                                   <br>
   `setext_with_atx`        - стиль setex + atx                             <br>
   `setext_with_atx_closed` - стиль setex + atx closed                      <br>

   **default:** `{"style":"consistent"}`

4. `ul-style`                     Визначає стиль не нумерованих списків

   **Аргументи:**
   `asterisk`                                                               <br>
   `consistent`                                                             <br>
   `dash`                                                                   <br>
   `plus`                                                                   <br>
   `sublist` - різні значки на різних рівнях                                <br>

   **default:** `{"style": "consistent"}`

5. `list-indent`                  Забороняє не однакові відступи для списків
                                  однакового рівня, напр.:

   ```md
   invalid:
   × Item 1
     × Nested Item 1
     × Nested Item 2
      × A misaligned item
   ```

   **default:** `true`

6. `ul-start-left`                Забороняє робити відступи перед списком.
                                  Правило застаріле, замість нього треба
                                  використовувати `ul-indent`.

   **default:** `true`

7. `ul-indent`                    Впорядковує відступи у вкладених списках.

   **Аргументи:**

   `start_indented` - чи потрібен відступ для списку                        <br>
   `start_indent`   - початковий відступ для списку                         <br>
   `indent`         - відступи для вкладених списків                        <br>

   **default:**

   ```json
   {
     "indent": 2,
     "start_indented": false,
     "start_indent": 2
   }
   ```

8. `no-trailing-spaces`           Порядок обробки прикінцевих пробілів

   **Аргументи:**

   `br_spaces`             - робить виняток з привила для певної кількості
                             пробілів, які позначають явний розрив рядку (тег
                             br), має бути 2 або більше, інакше правило не
                             працює                                         <br>
   `list_item_empty_lines` - Using spaces to indent blank lines inside a list
                             item is usually not necessary, but some parsers
                             require it.                                    <br>
   `strict`                - більш сворий режим відстеження ніж br_spaces   <br>

   **default:**

   ```json
   {
     "br_spaces": 2,
     "list_item_empty_lines": false,
     "strict": false
   }
   ```

9. `no-hard-tabs`                 Забороняє використовувати вирівнювання табами.

   **Аргументи:**

   `code_blocks`           - `false`, якщо потрібно вимкнути правило для блоків
                             з кодом                                        <br>
   `ignore_code_languages` - масив з мовами, яким дозволені таби            <br>
   `spaces_per_tab`        - скільки пробілів міститься в табі              <br>

   **default:**

   ```json
   {
     "code_blocks": true,
     "ignore_code_languages": [],
     "spaces_per_tab": 1
   }
   ```

10. `no-reversed-links`           Перевіряє правильність послідовності дужок у
                                  посиланнях.

    **default:** `true`

11. `no-multiple-blanks`          Регулює кількість послідовних порожніх рядків

    **default:** `{"maximum": 1}`

12. `line-length`                 Правило визначає довжину рядків. Має
                                  виключення для довгих рядків без пробілів в
                                  частині, яка вилазить за межу.

    **Аргументи:**

    `code_block_line_length` - довжина блоків коду <br>
    `code_blocks`            - по аналогії до no-hard-tabs? <br>
    `headers`                - Include headings? <br>
    `heading_line_length`    - довжина заголовків <br>
    `headings`               - Include headings? <br>
    `line_length`            - максимальна довжина рядка <br>
    `stern`                  - попередити про довгі рядки, але дозолити довгі
                               рядки без пробілів                           <br>
    `strict`                 - виключає обмеження для довгих рядків без пробілів<br>
    `tables`                 - Include tables?                              <br>

    **default:**

    ```json
    {
      "line_length": 80,
      "heading_line_length": 80,
      "code_block_line_length": 80,
      "code_blocks": true,
      "tables": true,
      "headings": true,
      "headers": true,
      "strict": false,
      "stern": false
    }
    ```

13. `commands-show-output`        Забороняє `$` на початку рядків у блоках коду,
                                  якщо усі рядки починаються з нього.

    **default:** `true`

14. `no-missing-space-atx`        Показує, що в загаловку після `#` нема пробілу.

    **default:** `true`

15. `no-multiple-space-atx`       Показує, що в заголовку після `#` кілька
                                  пробілів.

    **default:** `true`

16. `no-missing-space-closed-atx` Показує, що в закритому atx-стилі між `#` та
                                  заголовком нема пробілу.

    **default:** `true`

17. `no-multiple-space-closed-atx` Показує, що в закритому atx-стилі між `#` та
                                   заголовком кілька пробілів

    **default:** `true`

18. `blanks-around-headers`       (`blanks-around-headings`) Визначає кількість
                                  порожніх рядків зверху і знизу від заголовка.
                                  Якщо вказано -1 - дозволена будь-яка кількість.
                                  Замість однієї цифри може бути масив з шести,
                                  для кожного рівня заголовка своя. Якщо вказано
                                  значення більше 1, тоді треба додатково
                                  редагувати правило `no-multiple-blanks`.

    **default:**

    ```json
    {
      "lines_above": 1,
      "lines_below": 1
    }
    ```

19. `header-start-left`           (`heading-start-left`) Заголовок повинен
                                  починатися з початку рядка.

    **default:** `true`

20. `no-duplicate-header`         (`no-duplicate-heading`) Забороняє однакові
                                  назви в заголовках.

    **Аргументи:**

    `allow_different_nesting` - тільки сусідні                              <br>
    `siblings_only`           - тільки сусідні (дублікат?)                  <br>

    **default:**

    ```json
    {
      "allow_different_nesting": false,
      "siblings_only": false
    }
    ```

21. `single-h1`                   (`single-title`) Забороняє використовувати
                                  кілька заголовків верхнього рівня у одному
                                  документі.

    **Аргументи:**

    `level`              - рівень верхнього заголовка                       <br>
    `front_matter_title` - регулярка для заголовка                          <br>

    **default:**

    ```json
    {
      "level": 1,
      "front_matter_title": "^\\s*title\\s*[:=]"
    }
    ```

22. `no-trailing-punctuation`     Забороняє прикінцеві знаки в заголовках.

    **default:** `{"punctuation": ".,;:!。，；：！"}`

23. `no-multiple-space-blockquote` Забороняє більше одного пробіkу після символу
                                   (він позначає цитати - blockquote).

    **default:** `true`

24. `no-blanks-blockquote`        Забороняє розрив цитати порожнім рядком, напр.:

    ```md
    invalid:
    > This is a blockquote
    > which is immediately followed by
    
    > this blockquote. Unfortunately
    > In some parsers, these are treated as the same blockquote.
    ```

    **default:** `true`

25. `ol-prefix`                   Контролює правильність нумерації нумерованого
                                  списку, дозволяє перед цифрами ставити 0 для
                                  вирівнювання нумерації. <br>
                                  Правило реагує на блок коду між елементами,
                                  списку, щоб цього унакнути, потрібно зробити
                                  відступи:

    ```md
    1. First list
    
       Code block
    
    2. Still first list
    ```

    **Аргументи:**

    `one`            - усі елементи списку мають один номер                 <br>
    `ordered`        - нумерація зростає від 1 або 0                        <br>
    `one_or_ordered` - або one або ordered                                  <br>
    `zero`           - усі елементи списку починаються з 0                  <br>

    **default:** `{"style": "one_or_ordered"}`

26. `list-marker-space`           Контролює пробіли після маркерів елементів
                                  списку.

    **Аргументи:**

    `ol_multi`  - пробіли у вкладених нумерованих списках                   <br>
    `ol_single` - пробіли у простих нумерованих списках                     <br>
    `ul_multi`  - пробіли у вкладених ненумерованих списках                 <br>
    `ul_single` - пробіли у простих ненумерованих списках                   <br>

    **default:**

    ```json
    {
      "ul_single": 1,
      "ol_single": 1,
      "ul_multi": 1,
      "ol_multi": 1
    }
    ```

27. `blanks-around-fences`        Перевіряє відмежування блоків коду пустими
                                  рядками.

    **default:** `{"list_items": true}`

28. `blanks-around-lists`         Перевіряє відмежування списків пустими рядками.

    **default:** `true`

29. `no-inline-html`              Забороняє використовувати HTML-теги.

    **default:** `{"allowed_elements": []}`

30. `no-bare-urls`                Забороняє використання url, не огорнених у <>
                                  або `` або [] з ().

    **default:** `true`

31. `hr-style`                    Перевіряє правильність горизонтальних ліній.

    **default:** `{"style": "consistent"}`

32. `no-emphasis-as-header`       (`no-emphasis-as-heading`) Контролює, щоб
                                  замість заголовків не використовувався жирний
                                  текст або курсив.

    **default:** `{"punctuation": ".,;:!?。，；：！？"}`

33. `no-space-in-emphasis`        Забороняє пробіли між текстом і символами
                                  жирного або курсивного текстів.

    **default:** `true`

34. `no-space-in-code`            Забороняє пробіли між інлайновим кодом і
                                  одинарними зворотніми лакками, напр.: ` code `

    **default:** `true`

35. `no-space-in-links`           Забороняє пробіли у квадртних дужках у
                                  посиланнях, напр.: `[ text ](link)`

    **default:** `true`

36. `fenced-code-language`        Блоки коду повинні містити інформацію про мову,
                                  якщо мови немає - пишеться "text".

    **default:**

    ```json
    {
      "allowed_languages": [],
      "language_only": false
    }
    ```

37. `first-line-h1`               (`first-line-heading`) Перший рядок в
                                  документі повинен бути заголовком вищого рівня.

    **Аргументи:**

    `level`              - валідний рівень заголовка                        <br>
    `front_matter_title` - регулярка, яка дозволяє як заголовок використовувати
                           картинку (часта практика на github)              <br>

    **default:**

    ```json
    {
      "level": 1,
      "front_matter_title": "^\\s*title\\s*[:=]"
    }
    ```

38. `no-empty-links`              Забороняє порожні посилання, напр.: `[text]()`

    **default:** `true`

39. `required-headers`            (`required-headings`) Контролює структуру
                                  заголовків по заданому шаблону, напр.:
                                  `["# Head", "## Item", "### Details"]` або
                                  `["# Head","## Item","*","## Foot","*"]`, де
                                  * - 0 або більше елементів, + - 1 або більше

    **default:**

    ```json
    {
      "headings": [],
      "headers": [],
      "match_case": false
    }
    ```

40. `proper-names`                Перевіряє правильність написання окремих слів
                                  (капіталізація букв).

    **Аргументи:**

    `names`         - масив слів, які потрібно писати правильно, напр.:
                      `["JavaScript"]`                                      <br>
    `code_blocks`   - false вимикає це правило для блоків і рядків коду     <br>
    `html_elements` - false вимикає це правило для HTML-тегів і атрибутів   <br>

    **default:**

    ```json
    {
      "names": [],
      "code_blocks": true,
      "html_elements": true
    }
    ```

41. `no-alt-text`                 Контролює наявність альтернативного тексту в
                                  картинках, напр.:
                                  `![Alternate text](ref)` або              <br>

    ```md
    ![Alternate text][ref]
    ...
    [ref]: image.jpg "Optional title"
    ```

    **default:** `true`

42. `code-block-style`            Контролює однаковість написання блоків коду.

    **Аргументи:**

    `consistent` - значення береться з першого випадку                      <br>
    `fenced`     - огорнутий в ```code```                                   <br>
    `indented`   - позначений відступами                                    <br>

    **default:** `{"style": "consistent"}`

43. `single-trailing-newline`     Правило спрацьовує, коли в кінці файлу нема
                                  пустого рядка.

    **default:** `true`

44. `code-fence-style`            Визначає символи позначення коду.

    **Аргументи:**

    `backtick`   - ```code```                                               <br>
    `consistent` - значення береться з першого випадку                      <br>
    `tilde`      - ~~~code~~~                                               <br>

    **default:** `{"style": "consistent"}`

45. `emphasis-style`              Контролює однаковість позначення курсиву.

    **Аргументи:**

    `asterisk`   - `*text*`                                                 <br>
    `consistent` - значення береться з першого випадку                      <br>
    `underscore` - `_text_`                                                 <br>

    **default:** `{"style": "consistent"}`

46. `strong-style`                Контролює однаковість позначення жирного
                                  тексту.

    **Аргументи:**

    `asterisk`   - `*text*`                                                 <br>
    `consistent` - значення береться з першого випадку                      <br>
    `underscore` - `_text_`                                                 <br>

    **default:** `{"style": "consistent"}`

47. `link-fragments`              Фрагменти посилань повинні відповідати іменам
                                  заголовків, напр.: `[link](#fragment)`,
                                  правильно буде: `[link](#heading-name)` або
                                  `<a id="bookmark"></a>
                                  [Link](bookmark)`

    **default:** `true`

48. `reference-links-images`      Правило попереджає про відсутність `label` в
                                  скороченому або collapsed-віріанті написання.

    ```md
    Full: [text][label]
    Collapsed: [label][]
    Shortcut: [label]
                     
    Full: ![text][image]
    Collapsed: ![image][]
    Shortcut: ![image]
                                  
    [label]: https://example.com/label
    [image]: https://example.com/image
    ```

    **default:** `true`

49. `link-image-reference-definitions`  Позначає зайві `label` в тексті.

    **default:** `{"ignored_definitions": ["//"]}`


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Домашня сторінка](https://github.com/DavidAnson/markdownlint/)
2. [Правила](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
3. [CLI](https://github.com/igorshubovych/markdownlint-cli)
4. [Крім дефолтних правил можна писати свої](https://github.com/DavidAnson/markdownlint/blob/main/doc/CustomRules.md)
5. [Лінтер можна налаштувати на роботу з Prettier](https://github.com/DavidAnson/markdownlint/blob/main/doc/Prettier.md)
