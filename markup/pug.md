Pug
================================================================================

Зміст
--------------------------------------------------------------------------------

- [Інфо                                                                 ](#info)
- [Встановлення Pug                                                   ](#instal)
- [Основи роботи                                                        ](#work)
- [Синтаксис Pug                                                      ](#syntax)
  - [ Коментарі                                                     ](#comments)
  - [ Багаторядкові коментарі                             ](#comments_multiline)
  - [ Коментарі з умовами                                ](#comments_conditions)
  - [ Відсутність закриваючих тегів і гострих дужок (<>)         ](#closed_tags)
  - [ Атрибути                                                          ](#attr)
  - [ Екранування спецсимволів                                  ](#escapes_symb)
  - [ Логічні атрибути                                            ](#attr_logic)
  - [ Атрибути стилів                                             ](#attr_style)
  - [ Атрибути через об'єкт + &attributes                          ](#attr_attr)
  - [ Класи - або як атрибути у дужках, або через крапку             ](#classes)
  - [ Класи через масив js                                       ](#classes_arr)
  - [ Класи через об'єкт з логічною перевіркою                   ](#classes_obj)
  - [ id - або як атрибути у дужках, або через хештег                     ](#id)
  - [ Теги без класів і id                                       ](#tags_simple)
  - [ Inline скрипти і стилі - через крапку                        ](#inline_js)
  - [ Include - підключення файлів pug, css, js, filtered text       ](#inclide)
- [JavaScript in Pug                                               ](#js_in_pug)
  - [ Не буферизований JS                                           ](#js_not_b)
  - [ Екрануючий буферизований JS                                 ](#js_buf_esc)
  - [ Не екрануючий буферизований JS                          ](#js_buf_not_esc)
  - [ Змінні                                                       ](#variables)
  - [ Інтерполяція                                                  ](#interpol)
  - [ Умови                                                       ](#conditions)
    - [ case-when-(break)-default                                        ](#cwb)
    - [ if-else                                                           ](#ie)
  - [ unless "поки ні" == if !(condition)                             ](#unless)
  - [ Цикли                                                           ](#cycles)
    - [ each-in                                                           ](#ei)
    - [ while                                                          ](#while)
    - [ for-in                                                        ](#for_in)
  - [ for з JS                                                           ](#for)
- [Наслідування                                                  ](#inheritance)
- [Інтерполяція                                                     ](#interpol)
  - [ Рядкова екрануюча інтерполяція                         ](#interpol_str_ne)
  - [ Рядкова не екрануюча інтерполяція                       ](#interpol_str_e)
  - [ Інтерполяція тегів                                       ](#interpol_tags)
- [Міксини                                                            ](#mixins)
  - [ Міксини з аргументами                                         ](#mix_args)
  - [ Міксини з блоками pug                                   ](#mix_pug_blocks)
  - [ Міксини і атрибути                                            ](#mix_attr)
  - [ Дефолтні аргументи в міксинах                             ](#mix_def_args)
  - [ Залишкові аргументи в міксинах                           ](#mix_args_over)
- [Посилання                                                           ](#links)


Інфо                                                           <i id="info"></i>
--------------------------------------------------------------------------------

**Pug** - це зручний html-шаблонізатор, що в тому числі використовується в
`Express`.


Встановлення Pug                                             <i id="instal"></i>
--------------------------------------------------------------------------------

```cmd
npm install pug
npm install pug-cli -g
pug --help
```


Основи роботи                                                  <i id="work"></i>
--------------------------------------------------------------------------------

одноразова мініфікована компіляція
```cmd
pug index.pug
```

слідкування, мініфікований результат
```cmd
pug -w index.pug
```

одноразова не мініфікована компіляція
```cmd
pug --pretty index.pug
```

слідкування, не мініфікований результат
```cmd
pug -w --pretty index.pug
```


Синтаксис Pug                                                <i id="syntax"></i>
--------------------------------------------------------------------------------

Вкладеності у файлі оформляються або пробілами, або табами. Якщо зробити
вперемішку - буде помилка.


### Коментарі                                              <i id="comments"></i>

такі коментарі конвертуються в html-коментарі <!-- comment-->
```pug
// comment
```

такі коментарі залишаються в pug-файлі
```pug
//- comment
```


### Багаторядкові коментарі                      <i id="comments_multiline"></i>

```pug
body
  //-
    Comments for your template writers.
    Use as much text as you want.
  //
    Comments for your HTML readers.
    Use as much text as you want.
```

### Коментарі з умовами                         <i id="comments_conditions"></i>

```pug
doctype html

<!--[if IE 8]>
<html lang="en" class="lt-ie9">
<![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
<!--<![endif]-->

body
  p Supporting old web browsers is a pain.

</html>
```

```html
<!DOCTYPE html>
<!--[if IE 8]>
<html lang="en" class="lt-ie9">
<![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
<!--<![endif]-->

<body>
  <p>Supporting old web browsers is a pain.</p>
</body>

</html>
```


### Відсутність закриваючих тегів і гострих дужок (<>)  <i id="closed_tags"></i>

```pug
div
  p Hello,
  p Word!
```

```html
<div>
  <p>Hello,</p>
  <p>Word!</p>
</div>
```


### Атрибути                                                   <i id="attr"></i>

Атрибути - у круглих дужках, якщо атрибутів багато, їх можна писати колонкою

```pug
div(class="className" id="id1")
img(src="../image.png")

input(
  type='checkbox'
  name='argument'
  data-validation="true"
  checked
)
```

### Екранування спецсимволів                           <i id="escapes_symb"></i>

За замовчуванням усі спец.символи в атрибутах екрановані (для запобігання атак
cross site scripting). Для не екранованих символів використовується !=

```pug
div(class="<code>")
div(class!="<code>")
```

```html
<div class="&lt;code&gt;"></div>
<div class="<code>"></div>
```


### Логічні атрибути                                     <i id="attr_logic"></i>

```pug
input(type='checkbox' checked)
input(type='checkbox' checked=true)
input(type='checkbox' checked=false)
input(type='checkbox' checked=true.toString()
```

Якщо в Pug не було doctype:
```html
<input type="checkbox" checked="checked" />
<input type="checkbox" checked="checked" />
<input type="checkbox" />
<input type="checkbox" checked="true" />
```

якщо в Pug був doctype:
```html
<input type="checkbox" checked>
<input type="checkbox" checked>
<input type="checkbox">
<input type="checkbox" checked="checked">
```


### Атрибути стилів                                      <i id="attr_style"></i>

```pug
a(style={color: 'red', background: 'green'})
```

```html
<a style="color:red;background:green;"></a>
```


### Атрибути через об'єкт + &attributes                   <i id="attr_attr"></i>

Такі атрибути автоматично не екрануються

```pug
div#foo(data-bar="foo")&attributes({'data-foo': 'bar'})
```

```html
<div id="foo" data-bar="foo" data-foo="bar"></div>
```

```pug
- let attributes = {};
- attributes.class = 'baz';
div#foo(data-bar="foo")&attributes(attributes)
```

```html
<div id="foo" data-bar="foo" class="baz"></div>
```


### Класи - або як атрибути у дужках, або через крапку      <i id="classes"></i>

```pug
div(class="col-md-6 col-xl-3")
div.col-md-6.col-xl-3
```


### Класи через масив js                                <i id="classes_arr"></i>

```pug
- let classes = ['foo', 'bar', 'baz']
a(class=classes)
//- the class attribute may also be repeated to merge arrays
a.bang(class=classes class=['bing'])
```

```html
<a class="foo bar baz"></a>
<a class="bang foo bar baz bing"></a>
```

### Класи через об'єкт з логічною перевіркою            <i id="classes_obj"></i>

```pug
- let currentUrl = '/about'
a(class={active: currentUrl === '/'} href='/') Home
a(class={active: currentUrl === '/about'} href='/about') About
```

```html
<a href="/">Home</a>
<a class="active" href="/about">About</a>
```

### id - або як атрибути у дужках, або через хештег              <i id="id"></i>

```pug
div(id='id1')
div#id1
```

### Теги без класів і id                                <i id="tags_simple"></i>

Теги без класів і id відділяються від контенту пробілом, якщо контенту багато,
після тегу - крапка і контент з нового рядку з відступом, або тег без крапки,
але тоді новий рядок починається з вертикальної лінії:

```pug
p Lorem ipsum dolor sit amet
p.
  Lorem ipsum dolor sit amet…
p
  | Lorem ipsum dolor sit amet…
```

### Inline скрипти і стилі - через крапку                 <i id="inline_js"></i>

```pug
script.
  let a = 1;
  let b = 2;
  let c = a+b;

style.
  .someClass {
    background-color: red;
  }
```

### Include - підключення файлів pug, css, js, filtered text <i id="inclide"></i>

```pug
include path/to/file/index.pug

style
  include path/to/file/index.css

script
  include path/to/file/index.js

body
  include:markdown-it article.md
```


JavaScript in Pug                                         <i id="js_in_pug"></i>
--------------------------------------------------------------------------------

JS-код в Pug буває 3х типів:
1. не буферизований            (-),  не потрапляє в код
2. екрануючий буферизований    (=),  виконує скрипт і результат вставляє в код.
                                     Екранує спецсимволи
3. не екрануючий буферизований (!=), виконує скрипт і результат вставляє в код.
                                     Не екранує спецсимволи

### Не буферизований JS                                    <i id="js_not_b"></i>

```pug
- for (let x = 0; x < 3; x++)
  li item
```

```html
<li>item</li>
<li>item</li>
<li>item</li>
```

```pug
-
  let list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
  each item in list
    li= item
```

```html
<li>Uno</li>
<li>Dos</li>
<li>Tres</li>
<li>Cuatro</li>
<li>Cinco</li>
<li>Seis</li>
```

### Екрануючий буферизований JS                          <i id="js_buf_esc"></i>

```pug
p
  = 'This code is <escaped>!'
```

```html
<p>This code is &lt;escaped&gt;!</p>
```

```pug
p= 'This code is' + ' <escaped>!'
p(style="background: blue")= 'A message with a ' + 'blue' + ' background'
```

```html
<p>This code is &lt;escaped&gt;!</p>
<p style="background: blue">A message with a blue background</p>
```

### Не екрануючий буферизований JS                   <i id="js_buf_not_esc"></i>

```pug
p
  != 'This code is <strong>not</strong> escaped!'
```

```html
<p>This code is <strong>not</strong> escaped!</p>
```

```pug
p!= 'This code is' + ' <strong>not</strong> escaped!'
```

```html
<p>This code is <strong>not</strong> escaped!</p>
```

### Змінні                                                <i id="variables"></i>

```pug
- let url = 'pug-test.html';
a(href='/' + url) Link
- url = 'https://example.com/'
a(href=url) Another link
```
```html
<a href="/pug-test.html">Link</a>
<a href="https://example.com/">Another link</a>
```


### Інтерполяція                                           <i id="interpol"></i>

```pug
- let btnType = 'info'
- let btnSize = 'lg'
button(type='button' class='btn btn-' + btnType + ' btn-' + btnSize)
button(type='button' class=`btn btn-${btnType} btn-${btnSize}`)
```

```html
<button class="btn btn-info btn-lg" type="button"></button>
<button class="btn btn-info btn-lg" type="button"></button>
```

### Умови                                                <i id="conditions"></i>

#### case-when-(break)-default                                  <i id="cwb"></i>
(аналог JS switch-case-break)

```pug
- let friends = 10
case friends
  when 0
    p you have no friends
  when 1
    p you have a friend
  when 2
  when 3
  when 4
    p you have some friends
  default
    p you have #{friends} friends
```

```html
<p>you have 10 friends</p>
```

В Pug, на відміну від JS, в кінці кожного розгалудження break не потрібен:
виконання коду не "провалюється" у наступні when. Break повністю припиняє
читання усіх when.

```pug
- let friends = 0
case friends
  when 0
    - break
  when 1
    p you have very few friends
  default
    p you have #{friends} friends
```

```html
<empty>
```

інший тип синтаксису - через двокрапку:

```pug
  - let friends = 1
  case friends
    when 0: p you have no friends
    when 1: p you have a friend
    default: p you have #{friends} friends
```


#### if-else                                                     <i id="ie"></i>

```pug
- let user = {description: 'foo bar baz'}
- let authorised = false
#user
  if user.description
    h2.green Description
    p.description= user.description
  else if authorised
    h2.blue Description
    p.description.
      User has no description,
      why not add one...
  else
    h2.red Description
    p.description User has no description
```

```html
<div id="user">
  <h2 class="green">Description</h2>
  <p class="description">foo bar baz</p>
</div>
```

### unless "поки ні" == if !(condition)                      <i id="unless"></i>

```pug
unless user.isAnonymous
  p You're logged in as #{user.name}
```

```pug
if !user.isAnonymous
  p You're logged in as #{user.name}
```


### Цикли                                                    <i id="cycles"></i>

#### each-in                                                     <i id="ei"></i>

```pug
ul
  each val, index in ['zero', 'one', 'two']
    li= index + ': ' + val
```

```html
<ul>
  <li>0: zero</li>
  <li>1: one</li>
  <li>2: two</li>
</ul>
```

```pug
ul
  each val, key in {1: 'one', 2: 'two', 3: 'three'}
    li= key + ': ' + val
```

```html
<ul>
  <li>1: one</li>
  <li>2: two</li>
  <li>3: three</li>
</ul>
```

```pug
- let values = [];
ul
  each val in values
    li= val
  else
    li There are no values
```

```html
<ul>
  <li>There are no values</li>
</ul>
```

#### while                                                    <i id="while"></i>

```pug
- let n = 0;
ul
  while n < 4
    li= n++
```

```html
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

#### for-in                                                  <i id="for_in"></i>

```pug
- let data = ["name1", "name2", "name3"];
div
  h1 header
  for name in data
    p= name
```

```html
<div>
  <h1>header</h1>
  <p>name1</p>
  <p>name2</p>
  <p>name3</p>
</div>
```

### for з JS                                                    <i id="for"></i>

Оскільки for не є частиною Pug, його потрібно екранувати -

```pug
- let x = 3;
div
  ul
    - for (let i = 1; i <= x; i++) {
      li Hello
    - }
```

```html
<div>
  <ul>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
  </ul>
</div>
```


Наслідування                                            <i id="inheritance"></i>
--------------------------------------------------------------------------------

Суть наслідування в тому, щоб створити файл-шаблон з типовою структурою і
місцями для вставки контенту. Інші pug-файли можуть його наслідувати. Вони не
мають власної структури, а лише назви-відповідники до місць вставки в шаблоні зі
своїм специфічним контентом. В результаті рендерингу утворюється файл html зі
структурою шаблону і контентом pug-файла.

Файл-шаблон template.pug:

```pug
doctype html
html
  head
    // title, meta, links, scripts
  body
    main.main
      include path/to/sub-file.pug // шлях відносно файлу-шаблону
      #book-content
        include ../modules/loader/loader.pug
        block first-screen  // ключове слово block + назва блоку
        block name          // це все - місця для вставки
```

pug-файл:

```pug
extends path/to/template.pug // шлях відносно файлу

block first-screen
  // some content

block name
  // some content
```

Якщо у шаблоні або у файлі є теги з адресами (script, link, img), їхні шляхи
вказуються відносно скомпільованого html-файлу.

За замовчуванням вставка блоку перезатирає такий же блок в шаблоні (допускається
не пустий блок, з дефолтним вмістом, однаковим для усіх спадкоємців). Цю дію
можна замінити дозаписом на початок/кінець.

pug-файл:

```pug
extends path/to/template.pug // шлях відносно файлу

block append first-screen // = append first-screen (без block)
  // some content

block prepend name        // = prepend name (без block)
  // some content
```


Інтерполяція                                               <i id="interpol"></i>
--------------------------------------------------------------------------------

### Рядкова екрануюча інтерполяція                  <i id="interpol_str_ne"></i>

```pug
- let title = "On Dogs: Man's Best Friend";
- let author = "enlore";
- let theGreat = "<span>escape!</span>";

h1= title
p Written with love by #{author}
p This will be safe: #{theGreat}
```

```html
<h1>On Dogs: Man's Best Friend</h1>
<p>Written with love by enlore</p>
<p>This will be safe: &lt;span&gt;escape!&lt;/span&gt;</p>
```

```pug
p No escaping for #{'}'}!
```

```html
<p>No escaping for }!</p>
```

```pug
p Escaping works with \#{interpolation}
p Interpolation works with #{'#{interpolation}'} too!
```

```html
<p>Escaping works with #{interpolation}</p>
<p>Interpolation works with #{interpolation} too!</p>
```


### Рядкова не екрануюча інтерполяція                <i id="interpol_str_e"></i>

```pug
- let riskyBusiness = "<em>Some of the girls are wearing my mother's clothing.</em>";
.quote
  p Joel: !{riskyBusines
```

```html
<div class="quote">
  <p>Joel: <em>Some of the girls are wearing my mother's clothing.</em></p>
</div>
```


### Інтерполяція тегів                                <i id="interpol_tags"></i>

```pug
p.
  This is a very long and boring paragraph that spans multiple lines.
  Suddenly there is a #[strong strongly worded phrase] that cannot be
  #[em ignored].
p.
  And here's an example of an interpolated tag with an attribute:
  #[q(lang="es") ¡Hola Mundo!]
```

```html
<p>This is a very long and boring paragraph that spans multiple lines.
  Suddenly there is a <strong>strongly worded phrase</strong> that cannot be
  <em>ignored</em>.</p>
<p>And here's an example of an interpolated tag with an attribute:
  <q lang="es">¡Hola Mundo!</q></p>
```


Міксини                                                      <i id="mixins"></i>
--------------------------------------------------------------------------------

```pug
//- Declaration
mixin list
  ul
    li foo
    li bar
    li baz
//- Use
+list
+list
```

```html
<ul>
  <li>foo</li>
  <li>bar</li>
  <li>baz</li>
</ul>
<ul>
  <li>foo</li>
  <li>bar</li>
  <li>baz</li>
</ul>
```


### Міксини з аргументами                                  <i id="mix_args"></i>

```pug
mixin pet(name)
  li.pet= name
ul
  +pet('cat')
  +pet('dog')
  +pet('pig')
```

```html
<ul>
  <li class="pet">cat</li>
  <li class="pet">dog</li>
  <li class="pet">pig</li>
</ul>
```


### Міксини з блоками pug                            <i id="mix_pug_blocks"></i>

```pug
mixin article(title)
  .article
    .article-wrapper
      h1= title
      if block
        block
      else
        p No content provided

+article('Hello world')

+article('Hello world')
  p This is my
  p Amazing article
```

```html
  <div class="article">
    <div class="article-wrapper">
      <h1>Hello world</h1>
      <p>No content provided</p>
    </div>
  </div>
  <div class="article">
    <div class="article-wrapper">
      <h1>Hello world</h1>
      <p>This is my</p>
      <p>Amazing article</p>
    </div>
  </div>
```

### Міксини і атрибути                                     <i id="mix_attr"></i>

```pug
mixin link(href, name)
  //- attributes == {class: "btn"}
  a(class!=attributes.class href=href)= name

+link('/foo', 'foo')(class="btn")
```

```html
<a class="btn" href="/foo">foo</a>
```

```pug
mixin link(href, name)
  a(href=href)&attributes(attributes)= name

+link('/foo', 'foo')(class="btn")
```

```html
<a class="btn" href="/foo">foo</a>
```


### Дефолтні аргументи в міксинах                      <i id="mix_def_args"></i>

```pug
//- Declaration
mixin article(title='Default Title')
  .article
    .article-wrapper
      h1= title
```

### Залишкові аргументи в міксинах                    <i id="mix_args_over"></i>

```pug
mixin list(id, ...items)
  ul(id=id)
    each item in items
      li= item

+list('my-list', 1, 2, 3, 4)
```


Посилання                                                     <i id="links"></i>
--------------------------------------------------------------------------------

1. [Офіційний сайт](https://pugjs.org)
2. [Онлайн конвертер](https://html2jade.org/)
3. [Онлайн конвертер](https://html2pug.org/)
