Puglint
================================================================================


Зміст
--------------------------------------------------------------------------------

- [Info                                                                 ](#info)
- [Налаштування конфігураційного файла                                ](#config)
- [Правила                                                             ](#rules)
- [Посилання                                                           ](#links)


Info                                                           <i id="info"></i>
--------------------------------------------------------------------------------

Лінтер для перевірки правопису файлів pug (jade).

Для роботи в Sublime Text потрібен пакет `SublimeLinter-pug-lint`.

Для роботи лінтера потрібно встановити відповідний npm-пакет:

```cmd
npm install pug-lint
```

Опції та правила прописуються у файлі з розширеннями `.pug-lintrc`,
`.pug-lintrc.js` або `.pug-lintrc.json` або у файлі package.json по ключу
`"pugLintConfig"`.


Налаштування конфігураційного файла                          <i id="config"></i>
--------------------------------------------------------------------------------

1. `preset`          застаріла опція, натомість треба використовувати `extends`

2. `extends`         Шлях до конфігураційного файлу (відносний або абсолютний),
                     який розширює поточний файл. Властивості поточного файлу
                     мають перевагу над властивостями додаткового конфігу, напр.:

   ```json
   {
     "extends": "./node_modules/coding-standard/.pug-lintrc",
     "disallowIdLiterals": null
   }
   ```

   також замість шляху може бути вказано попередньо встановлений пакунок:

   ```cmd
   npm install --save-dev pug-lint-config-clock
   ```

   ```json
   {
     "extends": "pug-lint-config-myrules",
     "disallowIdLiterals": null
   }
   ```

   **String**

3. `excludeFiles`    Масив патернів для шляхів до файлів, які не потрібно
                     перевіряти.

   **Array**

   **default:** `["node_modules/**"]`

4. `additionalRules` масив шляхів для додаткових файлів з правилами, напр.:

   ```json
   {
     "additionalRules": ["project-rules/*.js"]
   }
   ```

   **Array**

Також у файлі конфігу прописуються правила перевірки синтаксису. Якщо правила
суперечать одне одному, вони переводяться у значення null та ігноруються, напр.:

```js
{
  "disallowSpaceAfterCodeOperator": true,
  "requireSpaceAfterCodeOperator": true  // -> null
}
```


Правила                                                       <i id="rules"></i>
--------------------------------------------------------------------------------

01. `disallowAttributeConcatenation`    Забороняє робити конкатенацію в
                                        атрибутах.

    ```pug
    //- Invalid
    a(href='text ' + title) Link

    //- Invalid under "aggressive"
    a(href=text + title) Link
    a(href=num1 + num2) Link
    ```

    `true` / `"aggressive"`

02. `disallowAttributeInterpolation`    Забороняє інтерполяцію в атрибутах.

    ```pug
    //- Invalid
    a(href='text #{title}') Link

    //- Valid
    a(href='text \#{title}') Link
    a(href='text \\#{title}') Link
    ```

    `{"disallowAttributeInterpolation": false}` блокує правила
    `disallowAttributeConcatenation`, `disallowAttributeTemplateString` та
    `disallowBlockExpansion`.

    `true`

03. `disallowAttributeTemplateString`   Забороняє в атрибутах мати шаблони
                                        рядків.

    ```pug
    //- true: Invalid
    a(href=`https://${site}`) Link

    //- true: Valid
    a(href=getLink(`https://${site}`)) Link

    //- "all": Invalid
    a(href=getLink(`https://${site}`)) Link
    ```

    `true`/`"all"`

04. `disallowBlockExpansion`            Pug must not contain any block expansion
                                        operators.

    ```pug
    //- Invalid
    p: strong text
    table: tr: td text
    ```

    `true`

05. `disallowClassLiterals`             Забороняє користуватися літералами
                                        класів.

    ```pug
    //- Invalid
    .class

    //- Valid
    div(class='class')
    ```

    `true`

06. `disallowClassAttributeWithStaticValue` Забороняє використовувати атрибут
                                            `class`.

    ```pug
    //- Invalid
    span(class='foo')

    //- Valid
    span.foo
    ```

    `true`

07. `disallowClassLiteralsBeforeAttributes` Класи пишуться після атрибутів.

    ```pug
    //- Invalid
    input.class(type='text')

    //- Valid
    input(type='text').class
    ```

    `true`

08. `disallowClassLiteralsBeforeIdLiterals` Літерали `id` пишуться перед класами.

    ```pug
    //- Invalid
    input.class#id(type='text')

    //- Valid
    input#id.class(type='text')
    ```

    `true`

09. `disallowDuplicateAttributes`       Забороняє дублікати літералів (крім
                                        класів).

    ```pug
    //- Invalid
    div(a='a' a='b')
    #id(id='id')

    //- Valid
    div(class='a', class='b')
    .class(class='class')
    ```

    `true`

10. `disallowHtmlText`                  Забороняє html-код всередині pug.

    ```pug
    //- Invalid
    <strong>html text</strong>
    p this is <strong>html</strong> text
    ```

    `true`

11. `disallowIdAttributeWithStaticValue` Забороняє id-атрибут.

    ```pug
    //- Invalid
    span(id='foo')

    //- Valid
    span#id
    ```

    `true`

12. `disallowIdLiteralsBeforeAttributes` Забороняє літерали перед атрибутами.

    ```pug
    //- Invalid
    input#id(type='text')

    //- Valid
    input(type='text')#id
    ```

    `true`

13. `disallowIdLiterals`                Забороняє id-літерали.

    ```pug
    //- Invalid
    #id

    //- Valid
    div(id='id')
    ```

    `true`

14. `disallowLegacyMixinCall`           The Pug template must not contain legacy
                                        mixin call.

    ```pug
    //- Invalid
    mixin myMixin(arg)

    //- Valid mixin call
    +myMixin(arg)

    //- Valid mixin call with block attached
    +myMixin(arg)
      p Hey

    //- Valid mixin definition
    mixin myMixin(arg)
      p Hey
    ```

    `true`

15. `disallowMultipleLineBreaks`        Забороняє мати пусті розриви між рядками.

    ```pug
    //- Invalid
    div


    div

    //- Valid
    div

    div
    ```

    `true`

16. `disallowSpaceAfterCodeOperator`    Забороняє пробіл після символів коду
                                        (`-`, `=`, `!=`).

    ```pug
    //- true: Invalid
    p= 'This code is <escaped>'
    p!=  'This code is <strong>not</strong> escaped'

    //- true: Valid
    p='This code is <escaped>'
    p!='This code is <strong>not</strong> escaped'

    //- ["-"]: Invalid
    - var a = 'This is code'

    //- ["-"]: Valid
    -var a = 'This is code'
    ```

    `true` / Array

17. `disallowSpacesInsideAttributeBrackets` Забороняє пробіли між дужками і
                                            вмістом.

    ```pug
    //- Invalid
    input( type='text' name='name' value='value' )

    //- Valid
    input(type='text' name='name' value='value')
    ```

    `true`

18. `disallowSpecificAttributes`        Забороняє визначені наперед атрибути.
                                        Можна налаштувати атрибути під конкретні
                                        теги.

    ```pug
    //- "a" OR [ "A", "b" ]: Invalid
    span(a='a')
    div(B='b')

    //- [ { img: [ "title" ] } ]: Invalid
    img(title='title')
    ```

    String/Array

19. `disallowSpecificTags`              Забороняє визначені наперед теги.

    ```pug
    //- [ "b", "i" ]: Invalid
    b Bold text
    i Italic text
    ```

    String/Array

20. `disallowStringConcatenation`       Забороняє конкатенацію рядків (атрибути
                                        ігнорує).

    ```pug
    //- Invalid
    h1= title + 'text'

    //- Invalid under `'aggressive'`
    h1= title + text
    ```

    `true` / `"aggressive"`

21. `disallowStringInterpolation`       Забороняє інтерполяцію (крім атрибутів і
                                        тегів).

    ```pug
    //- Invalid
    h1 #{title} text
    ```

    `true`

22. `disallowTagInterpolation`          Забороняє інтерполяцію в тегах.

    ```pug
    //- Invalid
    | #[strong html] text
    p #[strong html] text
    ```

    `true`

23. `disallowTemplateString`            Забороняє використання шаблонних рядків.

    ```pug
    //- true: Invalid
    h1= `${title} text`

    //- true: Valid
    h1= translate(`${title} text`)

    //- all: Invalid
    h1= translate(`${title} text`)
    ```

    `true` / `"all"`

24. `disallowTrailingSpaces`            Забороняє прикінцеві пробіли.

    `true`

25. `maximumLineLength`                 Контролює максимальну довжину рядку.

    Number

26. `maximumNumberOfLines`              Контролює максимальну кількість рядків у
                                        файлі.

    Number

27. `requireClassLiteralsBeforeAttributes` Літерали класів повинні бути перед
                                           атрибутами.

    ```pug
    //- Invalid
    input(type='text').class

    //- Valid
    input.class(type='text')
    ```

    `true`

28. `requireClassLiteralsBeforeIdLiterals` Літерали класів повинні бути перед
                                           id-літералами.

    ```pug
    //- Invalid
    input#id.class(type='text')

    //- Valid
    input.class#id(type='text')
    ```

    `true`

29. `requireIdLiteralsBeforeAttributes` id-літерали повинні бути перед
                                        атрибутами.

    ```pug
    //- Invalid
    input(type='text')#id

    //- Valid
    input#id(type='text')
    ```

    `true`

30. `requireLineFeedAtFileEnd`          Файл повинен закінчуватися пустим рядком.

    `true`

31. `requireLowerCaseAttributes`        Імена атрибутів повинні писатися малими
                                        літерами (файли з doctype xml
                                        ігноруються).

    ```pug
    //- Invalid
    div(Class='class')

    //- Valid
    div(class='class')
    ```

    `true`

32. `requireLowerCaseTags`              Теги повинні писатися малими літерами.

    ```pug
    //- Invalid
    Div(class='class')

    //- Valid
    div(class='class')
    ```

    `true`

33. `requireSpaceAfterCodeOperator`     Вимагає наявності одного пробілу після
                                        операторів коду (`-`, `=`, `!=`).

    ```pug
    //- true: Invalid
    p='This code is <escaped>'
    p!=  'This code is <strong>not</strong> escaped'

    //- true: Valid
    p= 'This code is <escaped>'
    p!= 'This code is <strong>not</strong> escaped'

    //- [ "-" ]: Invalid
    -var a = 'This is code'

    //- [ "-" ]: Valid
    - var a = 'This is code'
    ```

    `true` / Array

34. `requireSpacesInsideAttributeBrackets` Вимагає пробіли між дужками і їх
                                           вмістом.

    ```pug
    //- Invalid
    input(type='text' name='name' value='value')

    //- Valid
    input( type='text' name='name' value='value' )
    ```

    `true`

35. `requireSpecificAttributes`         Вимагає додаткових специфічних атрибутів.

    ```pug
    //- [ { img: [ "alt" ] } ]: Invalid
    img(src='src')

    //- Valid
    img(src='src' alt='alt')
    ```

    Array

36. `requireStrictEqualityOperators`    Вимагає строгих операторів порівняння.

    ```pug
    //- Invalid
    if true == false
    if true != false

    //- Valid
    if true === false
    if true !== false
    ```

    `true`

37. `validateAttributeQuoteMarks`       Визначає тип лапок в атрибутах, якщо
                                        `true` - всі лапки повинні бути
                                        ідентичні першим.

    ```pug
    //- "'": Invalid
    input(type="text" name="name" value="value")
  
    //- "'": Valid
    input(type='text' name='name' value='value')
    ```

    `"'"` / `"\""` / `true`

38. `validateAttributeSeparator`        Визначає спосіб розділення атрибутів.

    ```pug
    //- ", ": Invalid
    input(type='text' name='name' value='value')
    div
      input(type='text'
      , name='name'
      , value='value'
      )

    //- ", ": Valid
    input(type='text', name='name', value='value')

    //- { "separator": " ", "multiLineSeparator": "\n  " }
    //- All attributes that are on the same line must be immediately followed
    //- by a space. All attributes that are on different lines must be preceded
    //- by two spaces.

    //- Invalid
    input(type='text', name='name', value='value')
    div
      input(type='text'
      , name='name'
      , value='value'
      )

    //- Valid
    input(type='text' name='name' value='value')
    div
      input(type='text'
        name='name'
        value='value'
    )
    ```

    String/Object

39. `validateDivTags`                   Забороняє явно вказувати "div", якщо у
                                        них є id або класи.

    ```pug
    //- Invalid
    div.class
    div#id
    div.class(class='class')

    //- Valid
    .class
    #id
    .class(class='class')
    ```

    `true`

40. `validateExtensions`                Підключати і наслідувати в шаблонах Pug
                                        можна лише файли, що наслідуються Pug.

    ```pug
    //- Invalid
    include a
    include a.jade
    extends a
    extends a.txt
    extends a.jade

    //- Valid
    include a.txt
    include a.pug
    extends a.pug
    ```

    `true`

41. `validateIndentation`               Перевіряє спосіб відступів.

    ```pug
    //- 2: Invalid
    div
    <TAB>div

    //- 2: Valid
    div
    <SPACE><SPACE>div

    //- "\t": Invalid
    div
    <SPACE><SPACE>div

    //- "\t": Valid
    div
    <TAB>div
    ```

    Number / `"\t"`

42. `validateLineBreaks`                Перевіряє символ кінця рядку.

    ```pug
    //- "LF": Invalid
    div(class='class')<CRLF>
    .button

    //- "LF": Valid
    div(class='class')<LF>
    .button
    ```

    `"CR"` / `"LF"` / `"CRLF"`

43. `validateSelfClosingTags`           Pug-файли не повинні містити
                                        необов'язкові закриваючі теги.

    ```pug
    //- Invalid
    area/
    link/

    //- Valid
    area
    link
    foo/
  
    doctype xml
    area/
    ```

    `true`

44. `validateTemplateString`            Перевіряє використання шаблонних рядків.

    ```pug
    //- 'variable': Invalid
    h1= `${title}`

    //- 'variable': Valid
    h1= title

    //- 'string': Invalid
    h1= `title`

    //- 'string': Valid
    h1= 'title'

    //- 'concatenation': Invalid
    h1= `title` + `text`
    h1= `title` + variable

    //- 'concatenation': Valid
    h1= `titletext`
    h1= `title${variable}`
    ```

    `true` / Array


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Домашня сторінка](https://github.com/pugjs/pug-lint)
2. [Правила](https://github.com/pugjs/pug-lint/blob/master/docs/rules.md)
