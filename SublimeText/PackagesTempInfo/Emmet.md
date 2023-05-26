##### Emmet

https://emmet.io/

Пакунок дозволяє створювати розмітку за скороченими інструкціями у більшості
популярних розширенях файлів (HTML, HAML, Pug, JSX, SCSS, SASS тощо). Для роботи
у файлах pug у налаштуваннях потрібно у ключі "abbreviation_scopes" додати
значення "text.pug | source.pypug".

Також пакунок показує вміст відкриваючого тегу (якщо його не видно) біля
закриваючого, коли курсор знаходиться на закриваючому тезі.


###### Меню Emmet

Preferences ▶ Package Settings ▶ Emmet


###### Налаштування Emmet

Повний перелік властивостей див. у відповідному файлі налаштувань.

auto_mark                               визначає ситуації, в яких буде підсвічу-
                                        ватися скорочення, яке Emmet розуміє як
                                        своє
                                        true - підсвітка і розмітки, і стилів
                                        false - без підсвітки
                                        "markup" - тільки для розмітки
                                        "stylesheet" - тільки для стилів
                                        true


abbreviation_preview                    визначає ситуації, в яких буде показува-
                                        тися попап з результатом розгорнення
                                        рядку інструкції, працює лише якщо
                                        "auto_mark": true
                                        true - показ і для розмітки, і для стилів
                                        false - без показу
                                        "markup" - тільки для розмітки
                                        "stylesheet" - тільки для стилів
                                        true

config                                  тонке налаштування Emmet
                                        {}

config.markup.snippets                  об'єкт, де ключем є абревіатура,
                                        а значенням - результат, детальніше: https://github.com/emmetio/py-emmet/blob/master/emmet/snippets/html.py

config.markup.options                   додаткові опції, детальніше: https://github.com/emmetio/emmet/blob/master/src/config.ts#L79

config.html.snippets                    об'єкт з налаштуваннями тільки для html,
                                        у властивосі "syntax_scopes" можна
                                        подивитися список доступних синтаксисів

config.stylesheet.snippets              сніпети для стилів, детальніше: https://github.com/emmetio/py-emmet/blob/master/emmet/snippets/css.py

config.stylesheet.options               додаткові опції для стилів, детальніше: https://github.com/emmetio/emmet/blob/master/src/config.ts#L79

jsx_prefix                              якщо true - усі інструкції у jsx повинні
                                        починатися з ">"
                                        true

marker_scope                            Scope for marked abbreviation region
                                        highlighting
                                        "comment"

syntax_scopes                           Editor scope to Emmet syntax mapping
                                        {…}

inline_scopes                           List of scopes with inline context
                                        […]

abbreviation_scopes                     List of scope selectors where
                                        abbreviation marker should be activated
                                        […]

ignore_scopes                           ігноровані лексичні оточення
                                        []

tab_expand                              чи перетворювати інчтрукцію на код табом
                                        true

multicursor_tab                         Expand Emmet abbreviation with Tab key
                                        with multiple cursors in editor
                                        true

bem                                     підтримка методології БЕМ
                                        false


###### Команди Emmet

За замовчуванням усі клавіатурні скорочення закоментовані.

emmet_expand_abbreviation    Emmet: Expand Abbreviation
                             перетворює скорочену інструкцію на повноцінний шмат
                             коду. Можна викликати вручну, якщо виключені
                             властивості auto_mark та abbreviation_preview

emmet_enter_abbreviation     Emmet: Enter Abbreviation Mode
                             дозволяє вручну увімкнути Emmet для рядка, який
                             треба написати. Вставляє в код мітку "⋮>", після
                             якої все набране Emmet сприйматиме як інструкцію

emmet_capture_abbreviation   Emmet: Capture Abbreviation

emmet_wrap_with_abbreviation Emmet: Wrap with Abbreviation

emmet_balance                Emmet: Balance Outward
                             args: { "direction": "outward" }

emmet_balance                Emmet: Balance Inward
                             args: { "direction": "inward" }

emmet_go_to_tag_pair         Emmet: Go to Tag Pair

emmet_remove_tag             Emmet: Remove Tag

emmet_split_join_tag         Emmet: Split/Join Tag

emmet_go_to_edit_point       Emmet: Go to Next Edit Point

emmet_go_to_edit_point       Emmet: Go to Previous Edit Point
                             args: { "previous": true }

emmet_select_item            Emmet: Select Next Item

emmet_select_item            Emmet: Select Previous Item
                             args: { "previous": true }

emmet_toggle_comment         Emmet: Toggle Comment

emmet_evaluate_math          Emmet: Evaluate Math Expression

emmet_increment_number       Emmet: Increment Number by 1
                             args: { "delta": 1 }

emmet_increment_number       Emmet: Decrement Number by 1
                             args: { "delta": -1 }

emmet_increment_number       Emmet: Increment Number by 0.1
                             args: { "delta": 0.1 }

emmet_increment_number       Emmet: Decrement Number by 0.1
                             args: { "delta": -0.1 }

emmet_increment_number       Emmet: Increment Number by 10
                             args: { "delta": 10 }

emmet_increment_number       Emmet: Decrement Number by 10
                             args: { "delta": -10 }

emmet_update_image_size      Emmet: Update Image Size

emmet_convert_data_url       Emmet: Convert data:URL

emmet_rename_tag             Emmet: Rename Tag


###### Директиви Emmet

>      нащадок
+      елемент на одному рівні вкладеності
^      підняти на рівень вище
*      множення елементів
$      нумерація
$@-    нумерація у зворотньому порядку
$@N    нумерація від заданого числа

()     згрупувати
{}     довільний текст
[]     атрибути

#id    ідентифікатор
.class клас


```html
<!-- #page>div.logo+ul#navigation>li*5>a[href="https://somesite.com/page$" data-attr]{Item $} -->

<div id="page">
  <div class="logo"></div>
  <ul id="navigation">
    <li><a href="https://somesite.com/page1" data-attr="">Item 1</a></li>
    <li><a href="https://somesite.com/page2" data-attr="">Item 2</a></li>
    <li><a href="https://somesite.com/page3" data-attr="">Item 3</a></li>
    <li><a href="https://somesite.com/page4" data-attr="">Item 4</a></li>
    <li><a href="https://somesite.com/page5" data-attr="">Item 5</a></li>
  </ul>
</div>
```

```pug
// div>(header>ul>li)+footer>p

div
  header
    ul
      li
  footer
    p
```

```pug
// div>p>span+em^bq

div
  p
    span
    em
  blockquote
```

```pug
// div+div>p>span+em^^^bq

div 
div
  p
    span
    em
blockquote
```
```pug
// (div>dl>(dt+dd)*3)+footer>p

div
  dl
    dt
    dd
    dt
    dd
    dt
    dd
footer
  p
```

```pug
// ul>li.item$$$*5

ul
  li.item001
  li.item002
  li.item003
  li.item004
  li.item005
```

```pug
// ul>li.item$@-3*5

ul
  li.item7
  li.item6
  li.item5
  li.item4
  li.item3
```
```html
<!-- a{click}+b{here} -->
<a href="">click</a><b>here</b>

<!-- a>{click}+b{here} -->
<a href="">click<b>here</b></a>

<!-- p>{Click }+a{here}+{ to continue} -->
<p>Click <a href="">here</a> to continue</p>
```


!             базовий каркас сторінки
lorem20       довільний текст з 20 слів
a             <a href=""></a>
a:link        <a href="http://"></a>
a:mail        <a href="mailto:"></a>
base          <base href="">
br            <br>
link          <link rel="stylesheet" href="">
link:css      <link rel="stylesheet" href="style.css">
link:favicon  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
link:rss      <link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml">
link:atom     <link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml">
meta:utf      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
meta:vp       <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
meta:compat   <meta http-equiv="X-UA-Compatible" content="IE=7">
script:src    <script src=""></script>
img           <img src="" alt="">
ifr           <iframe src="" frameborder="0"></iframe>
emb           <embed src="" type="">
obj           <object data="" type=""></object>
map           <map name=""></map>
map+          <map name=""><area shape="" coords="" href="" alt=""></map>
area          <area shape="" coords="" href="" alt="">
form          <form action=""></form>
form:get      <form action="" method="get"></form>
form:post     <form action="" method="post"></form>
label         <label for=""></label>
input         <input type="text">
inp           <input type="text" name="" id="">
input:h       <input type="hidden" name="">
input:p       <input type="password" name="" id="">
input:c       <input type="checkbox" name="" id="">
input:r       <input type="radio" name="" id="">
input:f       <input type="file" name="" id="">
input:s       <input type="submit" value="">
input:i       <input type="image" src="" alt="">
input:b       <input type="button" value="">
input:reset   <input type="reset" value="">
select        <select name="" id=""></select>
select+       <select name="" id=""><option value=""></option></select>
opt           <option value=""></option>
tarea         <textarea name="" id="" cols="30" rows="10"></textarea>
video         <video src=""></video>
audio         <audio src=""></audio>
bq            <blockquote></blockquote>
fst           <fieldset></fieldset>
btn           <button></button>
btn:s         <button type="submit"></button>
btn:b         <button type="button"></button>
btn:r         <button type="reset"></button>
sect          <section></section>
art           <article></article>
hdr           <header></header>
ftr           <footer></footer>
str           <strong></strong>
ol+           <ol><li></li></ol>
ul+           <ul><li></li></ul>
dl+           <dl><dt></dt><dd></dd></dl>
table+        <table><tr><td></td></tr></table>
tr+           <tr><td></td></tr>
c             <!-- Коментар -->
cc:ie6        <!--[if lte IE 6]> <![endif]-->
cc:ie         <!--[if IE]><![endif]-->
cc:noie       <!--[if !IE]><!--><!--<![endif]-->


pos           position: relative;
posa          position: absolute;
posr          position: relative;
posf          position: fixed;
t             top: ;
t:a           top: auto;
r             right: ;
r:a           right: auto;
b             bottom: ;
b:a           bottom: auto;
l             left: ;
l:a           left: auto;
z             z-index: ;
za            z-index: auto;
fl            float: left;
fln           float: none;
fr            float: right;
cl            clear: both;
d             display: block;
dn            display: none;
di            display: inline;
dib           display: inline-block;
dt            display: table;
dtc           display: table-cell;
dtr           display: table-row;
v             visibility: hidden;
vv            visibility: visible;
oh            overflow: hidden;
ovv           overflow: visible;
os            overflow: scroll;
oa            overflow: auto;
zm            zoom: 1;
cu            cursor: ;
cup           cursor: pointer;
cud           cursor: default;
cuh           cursor: hand;
cuhe          cursor: help;
cum           cursor: move;
cut           cursor: text;
m             margin: ;
m:a           margin: auto;
mt            margin-top: ;
mta           margin-top: auto;
mr            margin-right: ;
mra           margin-right: auto;
mb            margin-bottom: ;
mba           margin-bottom: auto;
ml            margin-left: ;
mla           margin-left: auto;
p             padding: ;
pt            padding-top: ;
pr            padding-right: ;
pb            padding-bottom: ;
pl            padding-left: ;
bsh           box-shadow: inset hoff voff blur color;
bshn          box-shadow: none;
w             width: ;
wa            width: auto;
h             height: ;
ha            height: auto;
maw           max-width: ;
mah           max-height: ;
mw            min-width: ;
mh            min-height: ;
f             font: ;
f+            font: 1em Arial,sans-serif;
fw            font-weight: ;
fwn           font-weight: normal;
fwb           font-weight: bold;
fs            font-style: italic;
fsn           font-style: normal;
fsi           font-style: italic;
fz            font-size: ;
ff            font-family: ;
ffs           font-family: serif;
ffss          font-family: sans-serif;
ffm           font-family: monospace;
ffa           font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
va            vertical-align: top;
vm            vertical-align: middle;
vabl          vertical-align: baseline;
vb            vertical-align: bottom;
vs            vertical-align: sub;
ta            text-align: left;
tac           text-align: center;
tar           text-align: right;
taj           text-align: justify;
td            text-decoration: none;
tdu           text-decoration: underline;
tdo           text-decoration: overline;
tdl           text-decoration: line-through;
tt            text-transform: uppercase;
ttn           text-transform: none;
ttl           text-transform: lowercase;
ts            text-shadow: hoff voff blur #000;
tra           text-shadow: h v blur rgba(0, 0, 0, .5);
ts+           text-shadow: 0 0 0 #000;
tsn           text-shadow: none;
lh            line-height: ;
lts           letter-spacing: ;
ws            white-space: ;
wsn           white-space: normal;
wsnw          white-space: nowrap;
bg            background: #000;
bg+           background: #fff url() 0 0 no-repeat;
bn            background: none;
bgc           background-color: #fff;
bgt           background-color: transparent;
bgi           background-image: url();
bgin          background-image: none;
bgr           background-repeat: ;
bgrn          background-repeat: no-repeat;
bgrx          background-repeat: repeat-x;
bgry          background-repeat: repeat-y;
bga           background-attachment: ;
baf           background-attachment: fixed;
bas           background-attachment: scroll;
bgp           background-position: 0 0;
bgs           background-size: ;
bsa           background-size: auto;
c             color: #000;
cra           color: rgba(0, 0, 0, .5);
op            opacity: ;
ct            content: '';
q             quotes: ;
ol            outline: ;
on            outline: none;
tbl           table-layout: ;
cs            caption-side: ;
ec            empty-cells: ;
bd            border: ;
bd+           border: 1px solid #000;
bdn           border: none;
bdc           border-color: #000;
bdi           border-image: url();
bdin          border-image: none;
bf            border-fit: repeat;
bdle          border-length: ;
bsp           border-spacing: ;
bds           border-style: ;
bw            border-width: ;
bt            border-top: ;
bt+           border-top: 1px solid #000;
bdtn          border-top: none;
br            border-right: ;
br+           border-right: 1px solid #000;
bdrn          border-right: none;
bb            border-bottom: ;
bb+           border-bottom: 1px solid #000;
bdbn          border-bottom: none;
bl            border-left: ;
bl+           border-left: 1px solid #000;
bdln          border-left: none;
bdrs          border-radius: ;
btrr          border-top-right-radius: ;
bdtrs         border-top-left-radius: ;
bbrr          border-bottom-right-radius: ;
bblr          border-bottom-left-radius: ;
lis           list-style: ;
lisn          list-style: none;
lst           list-style-type: ;
lstn          list-style-type: none;
lstd          list-style-type: disc;
lstc          list-style-type: circle;
lsts          list-style-type: square;
lstdc         list-style-type: decimal;
lsi           list-style-image: ;
lsin          list-style-image: none;
!             !important
@f            @font-face {font-family:;src:url();}
@f+           @font-face {font-family: 'FontName';src: url('FileName.eot');src: url('FileName.eot?#iefix')format('embedded-opentype'),url('FileName.woff') format('woff'),url('FileName.ttf') format('truetype'),url('FileName.svg#FontName') format('svg');font-style: normal;font-weight: normal;}
@i            @import url();
@m            @media screen {}
anim          animation: ;
ap            appearance: none;
bgie          filter:progid:DXImageTransform .Microsoft.AlphaImageLoader(src='x.png',sizingMethod='crop');
cm            /* Коментар */
colm          columns: ;
trf           transform: ;
trfr          transform: rotate(angle);
trfsc         transform: scale(x, y);
trft          transform: translate(x, y);
tfo           transform-origin: ;
trs           transition: prop time;
trsde         transition-delay: time;
trsdu         transition-duration: time;
trsp          transition-property: prop;
us            user-select: none;

mt20          margin-top: 20px;
fsz20         font-size: 20px;
p15           padding: 15px;
m10em-5       margin: 10em -5px;
m10p30e5x     margin: 10% 30em 5ex
p!+m10e!      padding: !important;margin: 10em !important;






















