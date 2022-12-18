##### CSS Extended Completions

??? Дочитати рідмі файл

Пакунок дозволяє скопіювати вміст файлів CSS/SCSS/LESS в кеш і використовувати
їх у якості підказок:

1. id та класів CSS в атрибутах id/класів HTML (id="…", class="…") і файлах CSS
2. змінних і міксинів LESS/SCSS
3. псевдоселекторів у файлах CSS
4. HTML-тегів у CSS-файлах
5. шрифтів у властивості font-family (імена шрифтів беруться зі списку, забитого
   у налаштуваннях)
6. a more up-to-date property/value completion list within CSS files
7. parse linked style sheets in HTML files, can be disabled via
   `index_linked_style_sheets` setting


Також у налаштуваннях можна прописати файли, з яких братимуться підказки.


###### Меню CSS Extended Completions

Preferences ▶ Package Settings ▶ CSS Extended Completions
Side Bar ▶ CSS Extended Completions

###### Налаштування CSS Extended Completions

setting_name пояснення налаштування
               варіант 1: пояснення
                 lorem
               варіант 2: пояснення
                 lorem
             type or default value

```js
{
    // List of folders that you want to include for completion results.
    // Only .css/.less/.scss files will be parsed within them.
    "load_external_files": [],
    "save_cache_to_file": true,
    "css_completion_scope": "meta.selector.css",
    "html_attribute_scope": "string.quoted.double.html, string.quoted.single.html, string.quoted.jade",
    // attempts to find <link/>'d style sheets in 'emmet_scoped' scoped files on save
    "index_linked_style_sheets": true,
    // returns class/id completions when typing out emmet expressions
    "use_emmet": true,
    // 'use_emmet' must be enabled for this to work correctly.
    // Adds the text.html scope with chars . and # to auto trigger the completion list
    "auto_trigger_emmet_completions": true,
    "emmet_scope": "text.html - source.js, source.cshtml, source.jade",
    "css_extension": [".css",".less",".scss"],

    // List from http://www.awayback.com/revised-font-stack/
    "font_list": [
        // serif
        "Garamond, Baskerville, 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman',  serif",
        "'Lucida Bright', Georgia,  serif",
        "Palatino, 'Palatino Linotype',  'Palatino LT STD', 'Book Antiqua', Georgia, serif",
        "'Big Caslon', 'Book Antiqua', 'Palatino Linotype', Georgia, serif",
        "Didot, 'Didot LT STD', 'Hoefler Text', Garamond,  'Times New Roman', serif",
        "Baskerville, 'Baskerville old face', 'Hoefler Text', Garamond,  'Times New Roman', serif",
        "'Hoefler Text', 'Baskerville old face', Garamond, 'Times New Roman', serif",
        "'Bodoni MT', Didot, 'Didot LT STD', 'Hoefler Text', Garamond,  'Times New Roman',  serif",
        "'Goudy Old Style', Garamond, 'Big Caslon', 'Times New Roman',  serif",
        "Constantia, Palatino, 'Palatino Linotype',  'Palatino LT STD', Georgia, serif",
        "Cambria, Georgia, serif",
        "'Book Antiqua', Palatino, 'Palatino Linotype', 'Palatino LT STD', Georgia, serif",

        // sans-serif
        "Optima, Segoe,  'Segoe UI', Candara, Calibri, Arial, sans-serif",
        "Futura, 'Trebuchet MS', Arial, sans-serif",
        "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
        "'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma,  sans-serif",
        "'Helvetica Neue', Helvetica, Arial, sans-serif",
        "Verdana, Geneva, sans-serif",
        "'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif",
        "Geneva, Tahoma, Verdana, sans-serif",
        "Segoe, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        "Candara, Calibri, Segoe, 'Segoe UI', Optima, Arial, sans-serif",
        "Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif",
        "'Franklin Gothic Medium', Arial, sans-serif",
        "Tahoma, Geneva, Verdana, sans-serif"
    ],
    "pseudo_selector_list": [
        "after",
        "before",
        "checked",
        "default",
        "disabled",
        "empty",
        "enabled",
        "first",
        "first-child",
        "first-letter",
        "first-line",
        "first-of-type",
        "focus",
        "fullscreen",
        "hover",
        "indeterminate",
        "invalid",
        "lang",
        "last-child",
        "last-of-type",
        "left",
        "link",
        "not",
        "nth-child",
        "nth-last-child",
        "nth-last-of-type",
        "nth-of-type",
        "only-child",
        "only-type-of",
        "optional",
        "read-only",
        "read-write",
        "required",
        "right",
        "root",
        "scope",
        "target",
        "valid",
        "visited"
    ],
    "element_list": [
        "html",
        "body",
        "section",
        "nav",
        "article",
        "aside",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "footer",
        "address",
        "main",
        "p",
        "hr",
        "pre",
        "blockquote",
        "ol",
        "ul",
        "li",
        "dl",
        "dt",
        "dd",
        "figure",
        "figcaption",
        "div",
        "a",
        "em",
        "strong",
        "small",
        "s",
        "cite",
        "q",
        "dfn",
        "abbr",
        "itl",
        "data",
        "time",
        "atetim",
        "code",
        "var",
        "samp",
        "kbd",
        "sub",
        "sup",
        "b",
        "u",
        "mark",
        "ruby",
        "rt",
        "rp",
        "bdi",
        "bdo",
        "span",
        "las",
        "an",
        "i",
        "br",
        "wbr",
        "ins",
        "del",
        "img",
        "iframe",
        "embed",
        "object",
        "param",
        "video",
        "audio",
        "source",
        "track",
        "canvas",
        "map",
        "area",
        "svg",
        "math",
        "table",
        "caption",
        "colgroup",
        "col",
        "tbody",
        "thead",
        "tfoot",
        "tr",
        "td",
        "th",
        "form",
        "fieldset",
        "legend",
        "label",
        "input",
        "button",
        "select",
        "datalist",
        "optgroup",
        "option",
        "textarea",
        "keygen",
        "output",
        "progress",
        "meter",
        "details",
        "summary",
        "menuitem",
        "menu"
    ]
}
```


###### Команди CSS Extended Completions

css_style_completion_delete_cach CSS Completions: Delete Cache

css_style_completion_prune_cache CSS Completions: Prune Cache