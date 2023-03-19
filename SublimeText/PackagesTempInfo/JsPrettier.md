##### JsPrettier

Даний пакунок додає до Sublime Text функціонал форматувальника коду Prettier.
Для роботи вимагає наявності встановлених Node.js та Prettier v2.6 або вище.

```shell
# npm (local):
npm install --save-dev prettier

# npm (global):
npm install --global prettier
```

https://packagecontrol.io/packages/JsPrettier
https://prettier.io/

Prettier має багато плагінів для різних мов (напр. pug, nginx, sql, php),
підтримує EditorConfig (.editorconfig).

Для роботи з Prettier в проекті потрібно мати кофнігураційний файл
(.prettierrc.json, .prettierrc або якийсь інший - див. домументацію) та бажано
файл .prettierignore (без файлу ігнору не можлива консольна команда
prettier --write).

Приклад файлу конфігурації:
```json
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

Якщо у проекті використовується лінтер ESLint (або інший), порібно доставити
npm-пакет, який виключатиме правила ESLint, які конфліктують або не працюють з
Prettier:
eslint-config-prettier (https://github.com/prettier/eslint-config-prettier#installation),
stylelint-config-prettier (https://github.com/prettier/stylelint-config-prettier)

Для живого оновлення можна використовувати функцію watch (консольну або
скриптову), детальніше див. домументацію.

Для ігнорування коду використовуються коментарі:

```js
// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

```jsx
<div>
  {/* prettier-ignore */}
  <span     ugly  format=''   />
</div>

```

```html
<!-- prettier-ignore -->
<div         class="x"       >hello world</div            >

<!-- prettier-ignore-attribute -->
<div
  (mousedown)="       onStart    (    )         "
  (mouseup)="         onEnd      (    )         "
></div>

<!-- prettier-ignore-attribute (mouseup) -->
<div
  (mousedown)="onStart()"
  (mouseup)="         onEnd      (    )         "
></div>

```

```css
/* prettier-ignore */
.my    ugly rule
{

}
```

```md
<!-- prettier-ignore -->
Do   not    format   this
```

```yaml
# prettier-ignore
key  : value
hello: world
```

```graphql
{
  # prettier-ignore
  addReaction(input:{superLongInputFieldName:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {content}
  }
}
```

```handlebars
{{! prettier-ignore }}
<div>
  "hello! my parent was ignored"
  {{#my-crazy-component     "shall"     be="preserved"}}
    <This
      is  =  "also preserved as is"
    />
  {{/my-crazy-component}}
</div>

```



###### Меню JsPrettier

Selection ▶ Format ▶ JsPrettier: Format Code
Preferences ▶ Package Settings ▶ JsPrettier
Context ▶ JsPrettier Format Code


###### Налаштування JsPrettier

debug                                   вивід в консоль додаткової інформації
                                        false

prettier_cli_path                       шлях до бінарника prettier,
                                        рекомандовано залишати пустим. Деталі
                                        див. файл налаштувань
                                        ""

node_path                               шлях до бінарника node,
                                        рекомандовано залишати пустим. Деталі
                                        див. файл налаштувань
                                        ""

auto_format_on_save                     чи потрібно форматувати файл при
                                        збереженні
                                        false

auto_format_on_save_excludes            масив шаблонів шляхів до файлів/тек, які
                                        не повинні форматуватися
                                        []

auto_format_on_save_requires_prettier_config дозвіл на автоформатування при
                                             збереженні тільки, якщо є файл
                                             конфігурації
                                             false

allow_inline_formatting                 дозвіл на форматування шматка коду однієї
                                        мови в середині іншої. Якщо true,
                                        команда js_prettier стає доступною в
                                        усіх синтаксисах
                                        false

custom_file_extensions                  масив додаткових розширень файлів, в
                                        яких повинен працювати пакунок. Типи
                                        файлів із вбудованою підтримкою
                                        вказувати не потрібно ("js", "jsx",
                                        "cjs", "mjs", "json", "jsonc", "json5",
                                        "html", "graphql/gql", "ts", "tsx",
                                        "cts", "mts", "css", "scss", "less",
                                        "md", "mdx", "yml", "yaml", "vue",
                                        "component.html" (angular html) files).
                                        []

max_file_size_limit                     максимальний розмір файла в бітах, який
                                        форматуватиметься
                                        -1

disable_tab_width_auto_detection        відключення стандартного налаштування
                                        Sublime Text "tab_size"
                                        false

disable_prettier_cursor_offset          виправляє неправильну поведінку, див.
                                        файл налаштувань
                                        false

additional_cli_args                     набір пар ключ-значення для передачі в
                                        cli
                                        {}

prettier_options                        об'єкт з налаштуваннями Prettier
                                        {}

prettier_options.printWidth             максимальна довжина рядка
                                        80

prettier_options.tabWidth               розмір відступів. За замовчуванням
                                        береться з параметра ST tab_size, щоб
                                        відключити цю поведінку, треба виставити disable_tab_width_auto_detection в true
                                        2

prettier_options.singleQuote            використання одинарних лапок замість
                                        подвійних
                                        false

prettier_options.trailingComma          правила вставки висячих ком.
                                        "es5"/"none"/all"
                                        "es5"

prettier_options.bracketSpacing         контроль пробілів всередині об'єктів і
                                        масивів
                                        true

prettier_options.bracketSameLine        Put the `>` of a multi-line HTML (HTML,
                                        JSX, Vue, Angular) element at the end of
                                        the last line instead of being alone on
                                        the next line (does not apply to self
                                        closing elements).
                                        false

prettier_options.jsxSingleQuote         використання одинарних лапок замість
                                        подвійних у файлах JSX
                                        false

prettier_options.parser                 який парсер потрібно використовувати.
                                        Варіанти: "flow", "babel", "typescript",
                                        "css", "json", "graphql", "markdown",
                                        "yaml"
                                        "babel"

prettier_options.semi                   вставка крапки з комою в кінці кожного
                                        виразу
                                        true

prettier_options.requirePragma          Prettier can restrict itself to only
                                        format files that contain a special
                                        comment, called a pragma, at the top of
                                        the file. This is very useful when
                                        gradually transitioning large,
                                        unformatted codebases to prettier
                                        false

prettier_options.proseWrap              (Markdown and YAML Only) By default,
                                        Prettier will not change wrapping in
                                        markdown text since some services use a
                                        linebreak-sensitive renderer, e.g.
                                        GitHub comments and BitBucket. To have
                                        Prettier wrap prose to the print width,
                                        change this option to "always". If you
                                        want Prettier to force all prose blocks
                                        to be on a single line and rely on
                                        editor/viewer soft wrapping instead, you
                                        can use "never". Valid options:
                                        - "preserve" Wrap prose as-is.
                                        - "always" Wrap prose if it exceeds the
                                          print width.
                                        - "never" Do not wrap prose.
                                        "preserve"

prettier_options.arrowParens            обгортання дужками аргументів стрілочних
                                        функцій
                                        "always"

prettier_options.htmlWhitespaceSensitivity Specify the global whitespace
                                           sensitivity for HTML files. Valid
                                           Options:
                                           - "css" Respect the default value of
                                             CSS display property.
                                           - "strict" Whitespaces are considered
                                             sensitive.
                                           - "ignore" Whitespaces are considered
                                             insensitive.
                                          "css"

prettier_options.quoteProps             Change when properties in objects are
                                        quoted. Requires Prettier v1.17+. Valid
                                        options:
                                        - "as-needed" Only add quotes around
                                          object properties where required.
                                        - "consistent" If at least one property
                                          in an object requires quotes, quote
                                          all properties.
                                        - "preserve" Respect the input use of
                                          quotes in object properties.
                                        "as-needed"

prettier_options.vueIndentScriptAndStyle (Vue files Only) Whether or not to
                                         indent the code inside script- and
                                         style- tags in Vue files. Some people
                                         (like the creator of Vue) don't indent
                                         to save an indentation level, but this
                                         might break code folding in Sublime
                                         Text.
                                         false

prettier_options.embeddedLanguageFormatting форматування вбудованого коду
                                            "auto"/"off"
                                            "auto"

prettier_options.editorconfig           якщо є файл .editorconfig, Prettier буде
                                        брати налаштування з нього (не всі!)
                                        true

prettier_options.singleAttributePerLine Enforce single attribute per line in
                                        HTML, Vue and JSX.
                                        false

Пакунок підтримує можливість робити специфічні налаштування для конктетного
проекту. ДЛя цього потрібно у файлі .subkime-project додати об'єкт
з налаштуваннями з ключем "js_prettier":

```json
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "js_prettier": {…}
  }
}
```


###### Команди JsPrettier

js_prettier JsPrettier: Format Code