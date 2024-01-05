HTML
================================================================================


Зміст
--------------------------------------------------------------------------------

- [Info                                                                 ](#info)
- [Елементи HTML                                                  ](#html_elems)
- [Посилання                                                           ](#links)


Info                                                           <i id="info"></i>
--------------------------------------------------------------------------------

Стандартна розмітка, яку надає Emmet:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```


Елементи HTML                                            <i id="html_elems"></i>
--------------------------------------------------------------------------------


### Елементи форматування тексту

- `<b>…</b>`               жирний текст
- `<strong>…</strong>`     важливий текст, візуально виглядає як жирний
- `<i>…</i>`               курсивний текст
- `<em>…</em>`             виділений текст, візуально виглядає як курсив
- `<mark>…</mark>`         підсвічений, виділений текст
- `<small>…</small>`       зменшений текст
- `<del>…</del>`           перекреслений текст
- `<ins>…</ins>`           підкреслений текст
- `<i>…</i>`               текст, який містить граматичні / орфографічні помилки
- `<s>…</s>`               не актуальний, не коректний, не дійсний текст,
                           візуалізується як закреслений
- `<sub>…</sub>`           понижений текст (як цифри в хімічних формулах: H2SO4)
- `<sup>…</sup>`           підвищений текст (як математична степінь)
- `<wbr>…</wbr>`           м'який перенос
- `<ruby>…</ruby`          контейнер для вставки анотації зверху або знизу від
                           фрагменту тексту, в основному використовується для
                           східних мов

  ```html
  <ruby>
    23
    <rt>грудня</rt>
  </ruby>
  ```

- `<rt>…</rt>`             анотація у складі тегу `<ruby>…</ruby`

- `<rp>…</rp>`             вивід тексту в браузерах, які не підтримують
                           `<ruby>…</ruby>`, інакше - ігнорування.

  ```html
  <ruby>
  漢
    <rp>(</rp>
    <rt>ㄏㄢˋ</rt>
    <rp>)</rp>
  </ruby>
  ```

- `<bdo dir="rtl">…</bdo>` написання тексту справа наліво
- `<bdi>…</bdi>`           ізоляція частини тексту і написання його в іншому
                           напрямку:

  ```html
  <ul>
    <li>User <bdi>hrefs</bdi>: 60 points</li>
    <li>User <bdi>jdoe</bdi>: 80 points</li>
    <li>User <bdi>إيان</bdi>: 90 points</li>
  </ul>
  ```

- `<dfn>…</dfn`            візуально виділене визначення, яке вимагає
                           наступного розшифрування, може використовуватися
                           разом з `<abbr>…</abbr>`

  ```html
  <p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>

  <p>
    <dfn>
      <abbr title="HyperText Markup Language">HTML</abbr>
    </dfn>
    is the standard markup language for creating web pages.
  </p>
  ```

- `<meter>…</meter`        візуалізація певного значення у визначеному діапазоні

  ```html
  <label for="disk_c">Disk usage C:</label>
  <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter><br>

  <label for="disk_d">Disk usage D:</label>
  <meter id="disk_d" value="0.6">60%</meter> 
  ```

  Атрибути `<meter>…</meter>`

  - `value`   Значення.
  - `high`    Межа, при досягненні якої значення вважатиметься високим.
  - `low`     Межа, при досягненні якої значення вважатиметься низьким.
  - `max`     Верхня межа діапазону.
  - `min`     Нижня межа діапазону.
  - `optimum` Оптимальне значення.

- `<progress>…</progress>`  візуалізація прогресу, для анімації потрібен JS

  ```html
  <label for="file">Downloading progress:</label>
  <progress id="file" value="32" max="100"> 32% </progress>
  ```

  Атрибути `<progress>…</progress>`

  - `max`   Максимальне значення прогресу.
  - `value` Поточне значення прогресу. Якщо не вказати, індикатор буде хаотично
            переміщуватися по шкалі.



### Цитати та виділення

- `<blockquote>…</blockquote>` блочна цитата, текст з відступом
- `<q>…</q>`                   коротка рядкова цитата, текст в лапках
- `<abbr>…</abbr>`             позначення абревіатур

  ```html
  <p>The
    <abbr title="World Health Organization">WHO</abbr>
    was founded in 1948.
  </p>
  ```

- `<address>…</address>`       інформація про автора статті
- `<cite>…</cite>`             назва статті

  ```html
  <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
  ```


### Моношрифтові елементи

- `<kbd>…</kbd>`  дані, введені з клавіатури
- `<samp…</samp>` вивід результату з програми
- `<code…</code>` шматок коду
- `<var>…</var>`  змінна у математичній формулі
- `<pre>…</pre>`  форматований текст, зберігає пробіли, переводи рядка

Усі елементи крім `<var>…</var>` типово відображаються моноширним текстом,
`<var>…</var>` - курсивом.


### Структурні та семантичні елементи

- `<html>…</html>`             Контейнер для всього вмісту сторінки
- `<head>…</head>`             Контейнер з мета-інформацією сторінки:

  ```html
  <head>
    <title> text only
    <style>
      body {background-color: powderblue;}
      h1 {color: red;}
      p {color: blue;}
    </style>
    <meta>
    <link rel="stylesheet" href="mystyle.css"> 
    <script></script>
    <base>
  </head>
  ```

- `<meta>`                     Метаінформація про сторінку. Цих тегів може бути
                               багато, кожен з одним аргументом:
                                `charset="UTF-8"` тип таблиці символів
                                `name="keywords" content="HTML, CSS, JavaScript"`
                                   ключові слова для пошукових систем
                                `name="description" content="Free Web tutorials"`
                                   Опис сторінки
                                `name="author" content="John Doe"` автор сторінки
                                `http-equiv="refresh" content="30"` оновлювати
                                  документ кожні 30с
                                `name="viewport" content="width=device-width, initial-scale=1.0"`
                                  адаптація сайту під усі екрани

- `<base>`                     Визначає базовий url для усіх відносних url сайту

  ```html
  <base href="https://www.w3schools.com/" target="_blank">
  …
  <img src="images/stickman.gif" width="24" height="39" alt="Stickman">
  ```

- `<body>…</body>`             Контейнер з вмістом, який буде відображатися на
                               сторінці.
- `<header>…</header>`         "Шапка" документу або секції, заголовок сторінки,
                               може містити навігацію, лого кнопки тощо. Цей
                               елемент не можна вкладати в теги
                               `<agddress>…</agddress>` та `<footer>…</footer>`.
                               Всередині цього тегу не повинно бути тегу
                               `<main>…</main>`.
- `<hgroup>…</hgroup>`         Семантичний контейнер для заголовку і пов'язаного
                               контенту

  ```html
  <hgroup>
    <h2>Norway</h2>
    <p>The land with the midnight sun.</p>
  </hgroup>
  ```

- `<main>…</main>`             Основний контент сторінки. На сторінці може бути
                               тільки один такий елемент і він не повинен
                               розташовуватися всередині елементів
                               `<article>…</article>`, `<aside>…</aside>`,
                               `<footer>…</footer>`, `<header>…</header>`,
                               `<nav>…</nav>` або `<section>…</section>`.
- `<footer>…</footer>`         Кінець сторінки, може містити контакти, права,
                               деякі пункти меню.
- `<nav>…</nav>`               Набір навігаційних посилань по сайту.
                               Дозволяється мати кілька тегів `<nav>…</nav>` на
                               одній сторінці. Заборонено розміщувати всередині
                               тегу `<address>…</address>`.
- `<section>…</section>`       Логічно відокремлена частина документу. Допустимо
                               вкладати один елемент `<section>…</section>` в
                               інший. Типово має заголовок.
- `<article>…</article>`       Текстова стаття, новина, коментар тощо.
- `<aside>…</aside>`           Бокова панелька, колонка відносно головного
                               контенту.
- `<search>…</search>`         Семантична обгортка для форми з інпутом типу
                               `search`

  ```html
  <search>
    <form>
      <input name="fsrch" id="fsrch" placeholder="Search W3Schools">
    </form>
  </search> 
  ```

- `<details>…</details>`       Додаткова інформація, яку можна показати або
                               приховати. За замовчуванням вміст прихований,
                               замість нього виводиться текст "детальніше". Для
                               показу вмісту використовується атрибут `open`.

  ```html
  <details>
    <summary>Показати деталі</summary>
    <p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Minima, quidem
       incidunt architecto, eveniet animi iste tenetur harum nihil sequi, maxime
       odio iusto distinctio dolore esse, ducimus. Temporibus earum rem, atque?
    </p>
  </details>
  ```

- `<summary>…</summary>`       Заголовок для `<details>…</details>`.
- `<figure>…</figure>`         Використовується для групування ілюстрацій,
                               фрагментів коду, схем, графіків тощо і підписів
                               до них.

  ```html
  <figure>
    <p><img src="image/thumb1.jpg" alt=""></p>
    <figcaption>Софійський собор</figcaption>
  </figure>
  ```

- `<figcaption>…</figcaption>` Містить опис елемента `<figure>…</figure>`
- `<time>…</time>`             дата/час
- `<template>…</template>`     Шаблон - не видимий шматок повторюваного HTML,
                               використовується для вставки повторюваних
                               елментів на сторінку за допомогою JS

### Посилання. Тег `<a href="…">…</a>`

Атрибути `<a href="…">…</a>`

- `download`       Вказує на те, що треба завантажити файл, вказаний у посиланні.
- `href`           Адреса документа або файла.
- `hreflang`       Вказує на мову документу.
- `ping`           Одна або кілька адрес, розділених пробілом. На цю адресу при
                   переході на посилання браузер відправлє POST-запит, в якому
                   містяться технічні дані: дані браузера, адреса посилання тощо

  ```html
  <a href="/example/page/cocktail.html" ping="/example/ping.php">Коктейлі</a>
  ```

- `referrerpolicy`  Визначає, які реферальні дані будуть відправлені в заголовку
                    Referer під час переходу за посиланням. Заголовок `Referer`
                    містить адресу сторінки, з якої було здійснено перехід, це
                    використовується для аналітики, статистики, перевірки того,
                    що запит прийшов з потрібного сайту, обмеження доступу з
                    певних адрес. Повна адреса може містити чутливі дані, які
                    передавати навпаки не треба.                                <br>
                      `no-referrer`     Заголовок `Referer` не відправляється.  <br>
                      `no-referrer-when-downgrade` Заголовок `Referer` не
                                        відправляється при переході з HTTPS на
                                        HTTP                                    <br>
                      `same-origin`     Заголовки відправляються в межах одного
                                        сайту                                   <br>
                      `origin`          Реферальні дані обмежені і містять лише
                                        протокол, адресу і порт                 <br>
                      `strict-origin`   Реферальні дані містять пртокол, адресу
                                        і порт, дані передаються тльки в межах
                                        одного протоколу і не відправляються при
                                        переході на не захищений протокол.      <br>
                      `origin-when-cross-origin` В межах сайту передається
                                        повний шлях. При переході на інший сайт
                                        реферальні данні містять тільки протокол,
                                        адресу і порт.                          <br>
                      `strict-origin-when-cross-origin` В межах сайту передається
                                        повний шлях. При переході на інший сайт
                                        передається протокол, адреса і порт, але
                                        тільки, якщо не змінюється протокол.    <br>
                      `unsafe-url`      Реферальні дані містять повну адресу
                                        документу

- `target`          Ім'я вікна або фрейма, куди браузер буде завантажувати
                    документ:                                                   <br>
                      `some_name` ім'я фрейма, задане атрибутом `name`. Якщо
                                  задати не існуюче ім'я, буде відкрита нова
                                  вкладка браузера.                             <br>
                      `_self`     Default. Відкриває сторінку у поточній вкладці.<br>
                      `_blank`    нова вкладка або вікно                        <br>
                      `_parent`   батьківський фрейм, якщо фреймів нема,
                                  поведінка тотожна до `_self`                  <br>
                      `_top`      скасовує фрейми і завантажує сторінку у повномі
                                  вікні браузера. Якщо фреймів нема, поведінка
                                  тотожна до `_self`.
- `title`           Текст спливаючої підказки
- `type`            Вказує MIME-тип документа, на який іде посилання. Має
                    рекомендаційний характер, використовується для стилізації
                    посилань із заданим типом файла.
- `rel`             Відношення між поточним документом і документом, на яке веде
                    посилання.

  `alternate`   Посилання на альтернативні варіанти даної сторінки:

  ```html
  <a href="print.html" rel="alternate">Версія для друку</a>
  ```

  `bookmark`    Постійне посилання на найближчий батьківський розділ:

  ```html
  <a href="toc.html" rel="bookmark">Заголовок</a>
  ```

  `external`    Сторінка, на яку вказує посилання, не є частиною сайту:

  ```html
  <a href="https://google.ru" rel="external">Google</a>
  ```

  `nofollow`    Вказує пошуковим системам не переходити за цим посиланням:

  ```html
  <a href="old.html" rel="nofollow">Стара версія</a>
  ```

  `noreferrer`  Вимагає, щоб браузер не надсилав Referer в HTTP-заголовку, якщо
                користувач переходить за посиланням:

  ```html
  <a href="https://google.ru" target="_blank" rel="noreferrer">Пошук</a>
  ```

  `noopener`    Вказує, що будь-який створений об'єкт верхнього рівня не буде
                містити допоміжний контекст перегляду. Вимагається для безпеки,
                щоб шкідливий сайт не міг отримати доступ до вмісту поточного
                документу:

  ```html
  <a href="https://ya.ru" target="_blank" rel="noopener">Яндекс</a>
  ```

  `opener`      протилежність до `noopener`:

  ```html
  <a href="https://ya.ru" rel="opener">Яндекс</a>
  ```

  `license`     Посилання на ліцензію, відповідно до якої надруковано сторінку:

  ```html
  <a href="license.html" rel="license">Поширюється згадно GNU GPL ліцензії</a>
  ```

  `help`        Посилання на контекстно-залжну довідку:

  ```html
  <a href="help.html" rel="help">Довідка</a>
  ```
  `author`      Посилання на автора поточного документу:

  ```html
  <a href="about.html" rel="author">Про автора</a>
  ```

  `me`          Посилання на автора сторінки:

  ```html
  <a href="about.html" rel="me">Про мене</a>
  ```

  `next`        Вказує, що поточний документ є частиною однотипних сторінок і
                посилання веде на наступну сторінку:

  ```html
  <a href="next.html" rel="next">Наступна сторінка</a>
  ```

  `prev`        Вказує, що поточний документ є частиною однотипних сторінок і
                посилання веде на попередню сторінку:

  ```html
  <a href="prev.html" rel="prev">Попередня сторінка</a>
  ```

  `search`      Дає посилання на ресурс, який може бути використаний для пошуку
                по сторінці і пов'язаних з нею сторінках:

  ```html
  <a href="search.html" rel="search">Пошук по сайту</a>
  ```

  `tag`         Вказує, що тег має відношення до поточного документа:

  ```html
  <a href="tag.html" rel="tag">Таксономія</a>
  ```


#### Внутрішні посилання (закладки)

```html
<h2 id="C4">Chapter 4</h2>
<a href="#C4">Jump to Chapter 4</a>
```

!!! a mail (href="mailto:xxx"): телеграм та інші месенджери
<a href="mailto:someone@example.com">Send email</a>


### Картинки


#### Тег `<img>`

Допустимими форматами зображень є `.apng`, `.gif`, `.ico`, `.cur`, `.jpg`,
`.jpeg`, `.jfif`, `.pjpeg`, `.pjp`, `.png`, `.svg`.

Атрибути `<img>`:

- `alt`            Альтернативний текст для зображення.
- `src`            Шлях до файла.
- `height`         Висота зображення.
- `width`          Ширина зображення.
- `loading`        Вказує браузеру, як завантажувати картинки, які знаходяться
                   поза зоною видимості (за замовчцванням браузер завантажує усі
                   картинки на сторінці).
                     `eager` зображення завантажується повільно
                     `lazy`  зображення завантажується тільки тоді, коли попадає
                             у видиму область сторінки
- `referrerpolicy` Вказує, які реферальні дані потрібно відрпавляти на сервер в
                   заголовку `Referer` під час завантаження зображення. Варіанти
                   значень аналогічні до подібного атрибуту посилань.
- `sizes`          Задає розміри зображення для різних макетів сторінки.
                     `sizes="100vh` Одне значення ширини. У якості розмірностей
                       можуть бути em, ex, ch, rem, vw, vh, vmin, vmax, cm, mm,
                       q, in, pc, pt, px, але не проценти.
                     `sizes="(min-width: 40em) 100vw"` Один медіазапит.
                     `sizes="(max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)")`
                       список медіазапитів і функцій `calc()`
- `srcset`         Список з одного або кількох значень шляхів до малюнка з
                   урахуванням пристрою і розміру зображення, розділені комами.
                   Кожне значення списку може містити адресу, дескриптор ширини
                   (ціле додатнє число + w), дескриптор щільності пікселів (ціле
                   додатнє число + w)

  ```html
  <img src="image/mushroom.jpg" srcset="image/mushroom_retina.jpg 2x" alt="">
  ```

- `usemap`         Посилання на тег `<map>`, який містить набір координат для
                   клієнтської карти-зображення. Клікабельні області на
                   картинках, клієнтська сторона.
- `ismap`          Говорить браузеру, що картинка є серверною картою-зображенням.
                   Клікабельні області на картинках у серверному виконанні.


##### Клікабельні області на картинках (реалізація на клієнті)

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">
<map name="workmap">
  <area href="computer.htm" alt="Computer" shape="rect" coords="34,44,270,350">
  <area href="phone.htm" alt="Phone" shape="rect" coords="290,172,333,250">
  <area href="coffee.htm" alt="Coffee" shape="circle" coords="337,300,44">
</map> 
```

Значення атрибуту `shape` тегу `<area>`:

- `rect`    прямокутна область
- `circle`  колоподібна область
- `poly`    полігональна область
- `default` вся картинка


Замість переходу за посиланням можна використати JS:

```html
<area shape="circle" coords="337,300,44" href="coffee.htm" onclick="myFunction()">
```


##### Клікабельні області на картинках (реалізація на сервері)

Картинка вставляється в посилання, де в атрибуті `href` прописується шлях до
серверного скрипта, який аналізує координати натиснення мишки, які
відраховуються від лівого верхнього кута зображення, і повертає необхідну
сторінку.

```html
<a href="ismap.php">
  <img src="image/sample.gif" alt="" width="150" height="150" ismap>
</a>
```


#### Теги `<picture>…</picture>` та `<source>…</source>`

Тег `<picture>…</picture>` дозволяє показувати різні картинки для різних
пристроїв або розмірів екрану. Є обгорткою для тегів `<source>…</source>`, які
містять посилання на зображення і умови їх показу. В самому кінці потрібно
вказувати тег `<img>` на випадок, якщо браузер старий або якщо жодна умова не
справдилася. Браузер завантажить картинку з першого `<source>…</source>`, який
задовольнив умові, решта проігноруються.

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg"title alt>
</picture>
```


#### Картинка вкладки (favicon)

```html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
```

### Media

Стандартизовані в HTML формати відео:

- MP4
- WebM
- Ogg

Стандартизовані в HTML формати аудіо:

- MP3
- WAV
- Ogg


#### Тег `<video>`

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video> 
```

Атрибути `<img>`:

- `autoplay`    Відео починає відворюватися автоматични при завантаженні
                сторінки. Chrome-подібні браузери блокують відтворення відео,
                якщо воно додатково не має атрибуту `muted`.
- `controls`    Додає панель керування для відео.
- `loop`        Зациклює відтворення відео
- `muted`       Відключає звук відео.
- `poster`      Вказує на адресу картинки, яка показується замість відео, поки
                воно вантажиться або не відтворюється. Якщо цього атрибуту нема,
                браузер намагатиметься відобразити перший кадр.
- `preload`     Вказує, що завантаження відео потрібно починати одразу при
                завантаженні сторінки. Ігнорується, якщо присутній атрибут
                `autoplay`.
- `src`         Вказує шлях, по якому доступне відео (замість тегів `<source>`).
- `height`      Висота області відео.
- `width`       Ширина області відео.
- `crossorigin` Застосовується для завантаження відео зі стороннього ресурсу для
                використання в елементі <canvas>.
                  `anonymous`       Запит на сервер відправляється без облікових
                                    даних користувача (без кук, сертифікату X.509,
                                    логіну и паролю).
                  `use-credentials` Запит містить усі дані про користувача.


#### Тег `<audio>…</audio>`

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

Атрибути `<img>`:

- `autoplay`    Аудіо починає відворюватися автоматични при завантаженні
                сторінки.
- `controls`    Додає панель керування для аудіо.
- `loop`        Зациклює відтворення аудіо.
- `muted`       Відключає звук аудіо.
- `preload`     Вказує, що завантаження аудіо потрібно починати одразу при
                завантаженні сторінки. Ігнорується, якщо присутній атрибут
                `autoplay`.
- `src`         Вказує шлях, по якому доступне аудіо (замість тегів `<source>`).
- `crossorigin` Застосовується для завантаження відео зі стороннього ресурсу для
                використання в елементі <canvas>.
                  `anonymous`       Запит на сервер відправляється без облікових
                                    даних користувача (без кук, сертифікату X.509,
                                    логіну и паролю).
                  `use-credentials` Запит містить усі дані про користувача.


#### Тег `<track>`

відображення субтитрів для аудіо та відео

```html
<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
</video>
```

Атрибути `<track>`:

- `default` Вказує дефолтну доріжку.
- `kind`    Тип текстової доріжки:
              `subtitles`    субтитри
              `captions`     заголовки - дубляж діалогів, звукових ефектів,
                             музики з поміткою "для тих, хто погано чує"
              `descriptions` звуковий опис відео для сліпих
              `chapters`     розділи для навігації по відео
              `metadata`     метадані для скриптів, не відображаються
- `src`     Шлях до файлу.
- `srclang` Мова доріжки. Обов'язковий атрибут, якщо `kind` = `subtitles`.
- `label`   Відображувана назва доріжки.


#### Тег `<object>…</object>`

Дозволяє вставляти на сторінку об'єкти, які браузер сам по собі не розуміє:
Java applets, Microsoft ActiveX, Flash movies, сканування на вірусичитання PDF
тощо. Проте, більшість сучасних браузерів більше не підтримують Java аплети,
ActiveX та Flesh. Також `<object>…</object>` дозволяє вставляти шматки HTML на
сторінку.

```html
<object width="100%" height="500px" data="snippet.html"></object>
<object data="audi.jpeg"></object>
```

Атрибути `<object>`:

- `name`      Ім'я параметра (повинно бути програмно закладено в код об'єкта).
- `type`      MIME-тип об'єкту (використовується лише коли `valuetype` = `ref`).
- `value`     Значення параметру.
- `valuetype` Тип значення параметру:
                `data`   значення атрибуту - рядок
                `object` Ідентифікатор об'єкта на сторінці, який задається через
                         атрибут id
                `ref`    значення атрибуту - адреса


#### Тег `<param>…</param>`

Призначений для передачі параметрів у об'єкти, що дозволяє прямо на сторінці
змінювати характеристики об'єкту без його перекомпіляції.

```html
<object data="horse.wav">
  <param name="autoplay" value="true">
</object>
```


#### Тег `<embed>`

Призначений для вставки на сторінку мультимедійного контенту, але по факту
застарів і замість нього краще використовувати теги `<img>`, `<video>…</video>`,
`<audio>…</audio>` або `<iframe>…</iframe>`.


#### Youtube video

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```

автоматичне беззвучне зациклене програвання:

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1loop=1">
</iframe> 
```

плейлист - перелік id відео через кому:

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>
```

панель керування:

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
</iframe>
```


### Таблиці

```html
<table>
  <caption>Назва таблиці</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
```


#### Теги `<thead>…</thead>`, `<tbody>…</tbody>`, `<tfoot>…</tfoot>`

Не є обов'язковими. Браузери можуть використовувати їх для скролу тіла таблиці
без скролу футера. Під час друку можна надрукувати шапку і футер на кожній
сторінці. Дозволяється мати кілька тегів `<tbody>…</tbody>` всередині тіла
таблиці.


#### Атрибути `colspan` та `rowspan`. Злиття чарунок

об'єднання двох чарунок по горизонталі:

```html
<th colspan="2">Name</th>
```

об'єднання двох чарунок по вертикалі:

```html
<th rowspan="2">Phone</th>
```


#### Теги `<colgroup>…</colgroup>` та `<col>`. Стилізація груп колонок

Тег `<colgroup>…</colgroup>` іде одразу перед `<table>`, але після `<caption>`,
якщо воно є. Для `<colgroup>` доступні тільки `width`, `visibility`, `border`,
`background`:

```html
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE">
  </colgroup>
  <tr>
    <th>MON</th>
    <th>TUE</th>
    <th>WED</th>
    <th>THU</th>
  </tr>
</table>
```

Якщо треба стилізувати більше 1ї групи колонок, треба використовувати кілька
`col`:

```html
<colgroup>
  <col span="2" style="background-color: #D6EEEE">
  <col span="3" style="background-color: pink"> <!-- наступні 3: 3тя, 4та, 5та -->
</colgroup>
```

Якщо першу групу колонок стилізувати не треба:

```html
<colgroup>
  <col span="3">
  <col span="2" style="background-color: pink">
</colgroup>
```

Приховати кілька колонок - `visibility: collapse`:

```html
<colgroup>
  <col span="2">
  <col span="3" style="visibility: collapse">
</colgroup>
```


### Списки


#### Не нумеровані

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```


#### Нумеровані

```html
<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

Типи нумерованих списків:

- "1" arabic
- "A" ALPHABET
- "a" alphabet
- "I" ROMAN
- "i" roman

задати початок нумерації списку - атрибут `start`:

```html
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> 
```


#### Description Lists

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl> 
```


#### Вкладені списки

```html
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul> 
```

#### Тег `<menu>…</menu>`

Ненумерований список елементів для створення панелі інструментів. Візуально
виглядає як ненумерований список.

```html
<menu>
  <li>пункт меню</li>
  <li>пункт меню</li>
</menu>
```


### HTML Forms


#### Тег `<form>…</form>`

Контейнер для решти елементів форми.

Атрибути `<form>…</form>`


- `action`          адреса до файлу на сервері, який обробляє форму. Якщо не
                    вказати, по дефолту буде вказана поточна сторінка

- `target`          де відображати відповідь, отриману після надсилання форми:<br>
                      `_blank`    у новому вікні або вкладці                <br>
                      `_self`     у поточному вікні (`default`)             <br>
                      `_parent`   у батьківському фреймі                    <br>
                      `_top`      у всьому тфлф вікна                       <br>
                      `framename` у фреймі з указаним іменем                <br>

- `method`          метод відправки даних на сервер                         <br>
                      `get`   Додає дані форми до url парами name/value, тому не
                              можна використовувати для відсилки чутливих даних
                              (парольів тощо). Розмір URL лімітоівний (2048
                              символів). Швидкий, де нема особистих даних, краще
                              використовувати його. Корисно для надсилання форм,
                              коли користувач хоче додати результат до закладок.
                              (`default`)                                   <br>
                      `post`  Додає дані форми в тіло запиту, в url їх не видно
                              не обмежений за розмірами

- `autocomplete`    автодоповнення на основі введених раніше даних користувачем <br>
                      `on`/`off`

- `novalidate`      дефолтна браузерна валідація                            <br>
                      `boolean`

- `name`            посилання на елементи в JavaScript або на дані форми після
                    її надсилання.

- `enctype`         кодування даних форми при `method="post"`:              <br>
                      `application/x-www-form-urlencoded` усі символи не ASCII-
                                        символи перекодовуються у формат ASCII
                                        HEX, пробіл стає плюсом (`default`) <br>
                      `multipart/form-data` для вивантаження файлу на сервер<br>
                      `text/plain`      кодування відсутнє, не рекомендується

- `accept-charset`  таблиця символів, які можна використовувати для заповнення
                    форми:                                                  <br>
                      `UTF-8`                                               <br>
                      `ISO-8859-1`


#### Тег `<label>…</label>`

Мітка для інпутів, потрібна для ектанних читачів та для кліків по малих
елементах форм (напр. радіокнопки).

```html
<!-- варіант 1 -->
<label for="fname">First name:</label>
<input id="fname" name="fname" type="text"> 
<!-- варіант 2 -->
<label><input>Текст</label>
```

Атрибути `<label>…</label>`

- `for` вказує на id інпута, до якого має відношення


#### Тег `<select>…</select>`

Випадаючий список, перший елемент списку вибраний по замовчуванню.

```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select> 
```

Атрибути `<select>…</select>`

- `name`      ім'я ключа в парі ключ-значення, яка передається на сервер
- `size`      кількість видимих елементів у списку
- `multiple`  дозволяє вибрати більше одного значення
- `autofocus` встановлення фокусу після завантаження сторінки
- `disabled`  блокує доступ і зміну елемента
- `form`      зв'язує список з формою (якщо знаходиться поза формою)
- `required`  обов'язкове поле для заповнення


#### Тег `<datalist>…</datalist>`

Cписок з наперед визначених значень для інпута. `input list` повинен співпадати
з `datalist id`. В міру введення значень в інпут список робить динамічні
підказки.

```html
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
<input type="submit">
```

Атрибути `<datalist>…</datalist>`

- `id` зв'язує `<datalist>` з `<input>`


#### Тег `<option>…</option>`

Елемент списків `<select>` та `<datalist>`.

Атрибути `<option>…</option>`

- `selected` позначає вибраний по замовчуванню елемент списку
- `disabled` Заблокировать для доступа элемент списка.
- `label`    мітка пункту списку
- `value`    значення, яке зв'яжеться з атрибутом `name` тегу `select` або
             `input` з `dataset` для передачі на сервер


#### Тег `<textarea>…</textarea>`

Поле вводу тексту більше одного рядку. Між тегами можна напиати текст, він
відображатиметься як дефолтний.

Атрибути `<textarea>…</textarea>`

- `rows`         висота (кількість рядків)
- `cols`         ширина (кількість букв)
- `autocomplete` увімкнути/вимкнути автозаповнення
- `autofocus`    встановлення фокусу після завантаження сторінки
- `dirname`      параметр, який передає на сервер напрямок тексту
- `disabled`     блокує доступ і зміну елемента
- `form`         зв'язує поле з формою (якщо знаходиться поза формою)
- `maxlength`    максимальне число символів
- `minlength`    минимальне число символів
- `name`         ім'я ключа в парі ключ-значення, яка передається на сервер
- `placeholder`  текст-підказка
- `readonly`     поле не змінюється користувачем
- `required`     обов'язкове поле для заповнення
- `wrap`         пареметр переносу рядків. Якщо його нема при довгому тексті
                 з'явиться горизонтальна полоса прокрутки.                  <br>
                   `soft` слова в полі переносяться, але при відправці на сервер
                          переноси не зберігаються
                   `hard` слова в полі переносяться і при відправці на сервер
                          переноси зберігаються. Вимагає атрибут `cals`.


#### Теги `<fieldset>` та `<legend>`

`<fieldset>…</fieldset>` призначений для логічного групування полів у формі,
`<legend>…</legend>` пишеться одразу після тегу `<fieldset>` і виконує функцію
заголовка групи:

```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form> 
```

Атрибути `<fieldset>…</fieldset>`

- `disabled` блокує поля форми в групі
- `form`     вказує на форму, до якої відноситься
- `name`     ім'я групи


#### Тег `<output>…</output>`

Поле для результату обчислень у формі.

```html
<form action="/action_page.php" oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range" id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>
```

Атрибути `<output></output>`

- `for`  перелік `name` інпутів, з яких беруться дані для обрахунків
- `form` ім'я форми, до якої належить
- `name` ім'я елемента


#### Тег `<button>…</button>`

Кнопка, завжди потрібно прописувати тип, бо різні браузери використовують різні
типи по замовчуванню.

```html
<button type="button" onclick="alert('Hello World!')">Click Me!</button> 
```

Атрибути `<button>…</button>`

- `autofocus`           встановлення фокусу після завантаження сторінки
- `disabled`            блокує доступ і зміну елемента
- `form`                зв'язує список з формою (якщо знаходиться поза формою)
- `formaction`          адреса, на яку пересилаються дані форми. Дія аналогічна
                        до атрибуту `action` тегу `form`. Якщо вказані обидва
                        атрибути, `formaction` має перевагу.
- `formenctype`         Спосіб кодування даних форми. Дія і значення аналогічні
                        до атрибуту `enctype` тегу `form`. Якщо вказані обидва
                        атрибути, `formenctype` має перевагу.
- `formmethod`          Метод надсилання даних форми. Дія і значення аналогічні
                        до атрибуту `method` тегу `form`. Якщо вказані обидва
                        атрибути, `formmethod` має перевагу.
- `formnovalidate`      Скасовує дефолтну перевірку даних форми. Дія анологічна
                        до атрибуту `novalidate` тегу `form`.
- `formtarget`          Вказує місце, де відображатиметься результат надсилання
                        форми. Дія і значення аналогічні до дії атрибуту
                        `target` тегу `form`.
- `name`                ім'я кнопки
- `popovertarget`       зв'язує кнопку зі спливаючим вікном, дозволяє при кліку
                        на кнопку відкривати/закривати це вікно. Значенням
                        аргументу є ім'я ідентифікатора елемента, визначеного як
                        попап (у цього елемента повинен бути атрибут `popover`).

  ```html
  <button popovertarget="busket">Відкрити кошик</button>
  <div id="busket" popover>…</div>
  ```

- `popovertargetaction` вказує на дію, яку потрібно виконати зі спливаючим
                        вікном при натисненні на кнопку:                    <br>
                          `hide`   приховати                                <br>
                          `show`   показати                                 <br>
                          `toggle` змінити стан
- `type`                тип кнопки:                                         <br>
                          `button` звичайна кнопка                          <br>
                          `reset`  видаляє внесені у форму дані             <br>
                          `submit` відправляє дані форми на сервер          <br>
                          `menu`   відкриває меню, створене тегом `<menu>`
- `value`               значення кнопки, яке буде відправлене на сервер, (ключем
                        буде атрибут `name`)


#### Тег `<optgroup>…</optgroup>`

Формує підгрупу в списку, візуально її виділяючи.

```html
<form action="handler.php">
  <select>
    <optgroup label="Колір">
      <option value="c1">Апельсиновий</option>
      <option value="c2">Лимонний</option>
      <option value="c3">Персиковий</option>
    </optgroup>
    <optgroup label="Тон">
      <option value="s1">Світлий</option>
      <option value="s2">Нормальний</option>
      <option value="s3">Темний</option>
    </optgroup>
  </select>
  <input type="submit" value="Відправити">
</form>
```

Атрибути `<optgroup>…</optgroup>`


- `disabled` блокує доступ до групи списку
- `label`    заголовок виділеної підгрупи


#### Тег `<input>`

Типи інпутів:

- `checkbox`
- `button`
- `color`
- `file`
- `hidden`
- `image`
- `number`
- `password`
- `radio`
- `range`
- `reset`
- `submit`
- `search`
- `text` (default)
- `date`
- `datetime-local`
- `month`
- `time`
- `week`
- `tel`
- `url`
- `email`


##### `<input type="text">`

Однорядкове поле для тексту. Дефолтна ширина - 20 символів.

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```


##### `<input type="number">`

Поле вводу числової інформації.

```html
<form action="/action_page.php">
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="password">`

Поле для введення паролю. Введені символи приховуються і замінюються на крапки.


```html
<form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form> 
```


##### `<input type="radio">`

Дозволяє вибрати лише одну позицію зі списку наданих.

```html
<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
  <input type="submit" value="Submit">
</form>
```


##### `<input type="checkbox">`

Дозволяє вибрати довільну кількість позицій зі списку наданих, або не обрати
жодної.

```html
<form action="/action_page.php">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label><br><br>
  <input type="submit" value="Submit">
</form>
```


##### `<input type="range">`

Повзунок, який дозволяє динамічно обирати значення. Для нього потрібні атрибути
`min` та `max`.

```html
<form action="/action_page.php" method="get">
  <label for="vol">Volume (between 0 and 50):</label>
  <input type="range" id="vol" name="vol" min="0" max="50">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="color">`

Кольорова палітра для вибору кольору.

```html
<form action="/action_page.php">
  <label for="favcolor">Select your favorite color:</label>
  <input type="color" id="favcolor" name="favcolor" value="#ff0000">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="email">`

Поле для введення електронної пошти. У залежності від браузера може валідуватися
під час відправки форми. Деякі смартфони додають клавішу ".com" на клавіатуру
при фокусі на цьому інпуті.

```html
<form action="/action_page.php">
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="tel">`

Поле для внесення номерів телефонів.

```html
<form action="/action_page.php">
  <label for="phone">Enter a phone number:</label>
  <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
  <input type="submit" value="Submit">
</form>
```


##### `<input type="url">`

Поле для введення url-адрес. У залежності від браузера може валідуватися під час
відправки форми. Деякі смартфони додають клавішу ".com" на клавіатуру при фокусі
на цьому інпуті.

```html
<form action="/action_page.php">
  <label for="homepage">Add your homepage:</label>
  <input type="url" id="homepage" name="homepage">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="file">`

Поле для вибору файлу за допомогою провідника операційної системи.

```html
<form action="/action_page.php">
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile"><br><br>
  <input type="submit" value="Submit">
</form>
```


##### `<input type="hidden">`

Не видиме для користувача поле. Використовується для інформації, яку не можна
бачити користувачу і яку не можна зміювати. Проте її видно через інструменти
розробника, тому не можна використовувати для секретних даних. Використовується
для технічних ньюансів на стороні бекенду.

```html
 <form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="hidden" id="custId" name="custId" value="3487">
  <input type="submit" value="Submit">
</form> 
```


##### `<input type="button">`

Кнопка.

```html
<input type="button" onclick="alert('Hello World!')" value="Click Me!"> 
 ```


##### `<input type="reset">`

Кнопка для скидання введених у форму даних. Атрибут `value` визначає текст на
кнопці, якщо його не вказати, буде використаний дефолтний.

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form> 
```


##### `<input type="submit">`

Кнопка для відправки форми обробнику форми, який вказаний у атрибуті `action`
тегу `form`. Атрибут `value` визначає текст на кнопці, якщо його не вказати,
буде використаний дефолтний.

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
```


##### `<input type="image">`

Визначає картинку як кнопку для відправки форми.

```html
<form action="/action_page.php">
  <label for="fname">First name: </label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name: </label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
</form>
```


##### `<input type="search">`

Поле для пошуку. Візуально нічим від текстового поля не відрізняється.

```html
<form action="/action_page.php">
  <label for="gsearch">Search Google:</label>
  <input type="search" id="gsearch" name="gsearch">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="date">`

Поле для введення дати, може мати вбудований календар. Не підтримується в
Internet Explorer 11. Додаткові атрибути `min` та `max` дозволяють встановити
часові рамки.

```html
<form action="/action_page.php">
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday" min="2000-01-02">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="datetime-local">`

Поле для введення дати і часу без часової зони, може мати вбудований календар.
Не підтримується в Internet Explorer 11.

```html
 <form>
  <label for="birthdaytime">Birthday (date and time):</label>
  <input type="datetime-local" id="birthdaytime" name="birthdaytime">
</form> 
```


##### `<input type="month">`

Поле для вибору року і місяця. Не підтримується в Firefox, Safari та Internet
Explorer 11.

```html
<form action="/action_page.php">
  <label for="bdaymonth">Birthday (month and year):</label>
  <input type="month" id="bdaymonth" name="bdaymonth">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="time">`

Поле для внесення часу.

```html
<form action="/action_page.php">
  <label for="appt">Select a time:</label>
  <input type="time" id="appt" name="appt">
  <input type="submit" value="Submit">
</form>
```


##### `<input type="week">`

Поле для вибору тижня і року. Не підтримується Firefox, Safari та Internet
Explorer 11.

```html
<form action="/action_page.php">
  <label for="week">Select a week:</label>
  <input type="week" id="week" name="week">
  <input type="submit" value="Submit">
</form>
```


##### Атрибути `<input>`

- `accept`         Встановлює фільтр на типи файлів, які можна відправити через
                   `type="file"`.
- `alt`            Альтернативний текст для кнопки із зображенням.
- `autocomplete`   Вмикає/виммкає автозаповнення.
- `autofocus`      Встановлює фокус на елементі при завантаженні сторінки.
- `checked`        Попередньо обраний перемикач або прапорець (`type="checkbox"` або `type="radio"`)
- `dirname`        Параметр, який передає на сервер напрямок тексту.
- `disabled`       Елемент відключений: його не можливо змінити і навіть вибрати
- `form`           Зв'язує поле з формою.
- `formaction`     адреса, на яку пересилаються дані форми. Дія аналогічна до
                   атрибуту `action` тегу `form`. Встановлюється для
                   `type="submit"` і `type="image`.
- `formenctype`    Спосіб кодування даних форми. Дія і значення аналогічні до
                   атрибуту `enctype` тегу `form`. Тільки для методу `post`.
- `formmethod`     Метод надсилання даних форми. Дія і значення аналогічні до
                   атрибуту `method` тегу `form`.
- `formnovalidate` Скасовує дефолтну перевірку даних форми. Дія анологічна до
                   атрибуту `novalidate` тегу `form`. Встановлюється для
                   `type="submit"` і `type="image`.
- `formtarget`     Вказує місце, де відображатиметься результат надсилання форми.
                   Дія і значення аналогічні до дії атрибуту `target` тегу
                   `form`.
- `list`           зв'язує інпут з `<datalist>`.
- `max`            Максимальне значення, яке можна внести в інпут
- `maxlength`      Максимально допустима кількість симіолів в тексті.
- `min`            Мінімальне значення, яке можна внести в інпут
- `minlength`      Максимально необхідна кількість симіолів в тексті.
- `multiple`       Дозволяє внески кілька значень одночасно, працює з типами
                   `email` та `file`.
- `name`           Ім'я поля.
- `pattern`        Шаблон-регулярний вираз, працює з типами `text`, `date`,
                   `tel`, `search`, `url`, `email` та `password`.
- `placeholder`    Текст-підказка, який спливає при наведенні на інпут.
- `readonly`       Елемент заблокований від змін, але доступний для копіювання
                   тощо.
- `required`       Поле, обов'язкове до заповнення.
- `size`           ширина поля у кількості символів, по дефолту - 20
- `src`            Адреса файли картинки для `type="image"`
- `step`           Крок, з яким нараховуються зміни цифрових полів
- `type`           Тип поля, визначає його поведінку і вигляд.
- `value`          Значення елемента. Для різних типів полів має різне значення,
                   наприклад для кнопок - текст кнопки, для `textarea` -
                   дефолтний текст.


### Тег `<iframe>…</iframe>`

"Inline frame" — вбудований фрейм, створює вбудоване в сторінку вікно, в якому
можна відображати інші сторінки. Для браузерів, які не підтримують цей тег, між
тегами потрібно прописувати альтернативний текст, який побачать користувачі.

```html
<iframe src="page/banner.html" width="468" height="60" align="left">
  Ваш браузер не підтримує вбудовані фрейми!
</iframe>
```

<iframe src="url" title="description"></iframe> 

iframe
  url
  title
  height
  width
  style="height:200px;width:300px;"


Iframe - Target for a Link
Якщо клікнути по посиланню, воно відкриється у фреймі:
```html
<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>
<p>
  <a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a>
</p> 
```

Атрибути `<iframe>…</iframe>`:

- `name`            Ім'я фрейму.
- `height`          Висота фрейму.
- `width`           Ширина фрейму.
- `allowfullscreen` Дозволяє фрейму повноекранний режим.
- `loading`         Встановлює, як браузер повинен завантажувати фрейми, які
                    знаходяться поза областю видимості.
                      `eager` (default) Вміст фреймів завантажується одразу.
                      `lazy`  Вміст фреймів завантажується тільки тоді, коли
                              вони опиняються в зоні видимості.
- `referrerpolicy`  Визначає, які реферальні дані потрібно відправляти у
                    заголовку `Referer` під час завантаження фрейму. Варіанти
                    значень аналогічні до подібного атрибуту посилань.
- `sandbox`         Встановлює низку обмежень для фрейма (заборона на форми,
                    скрипти) з метою безпеки, коли фрейм іде з недовіреного
                    джерела.
                      `allow-forms`             Дозволяє форми.
                      `allow-modals`            Дозволяє відкриття модальних
                                                вікон.
                      `allow-orientation-lock`  Дозволяє відключати можливість
                                                блокування екрану.
                      `allow-pointer-lock`      Дозволяє фрейму викорустовувати
                                                Pointer Lock API.
                      `allow-popups`            Дозволяє попапи (`window.open`,
                                                `target="_blank"`,
                                                `showModalDialog`).
                      `allow-presentation`      Дозволяє фрейму використовувати
                                                Presentation API.
                      `allow-same-origin`       Вважає, що вміст фрейму має те
                                                саме джерело, що і сторінка.
                                                Може використовуватися для
                                                безпечного відкриття контенту,
                                                блокуючи спливаючі вікна.
                      `allow-scripts`           Дозволяє скрипти, забороняє
                                                спливаючі вікна.
                      `allow-top-navigation`    Дозволяє відкривати посиланн
                                                фрейма у батьківському документі.
- `src`             Шлях до файлу, який буде завантажуватися у фрейм.
- `srcdoc`          Атрибут, в якому зберігається HTML-код фрейма. При
                    одночасному використанні з `src`, `src` ігнорується.


Підключення стилів в HTML                               <i id="css_in_html"></i>
--------------------------------------------------------------------------------

Стилі додаються на сторінку 3-ма способами:

1. Inline   використання атрибуту `style` для стилізації конкретного елемента

  ```html
  <p style="color:red;">This is a red paragraph.</p>
  ```

2. Internal використання тегу `<style>…</style>` в `<head>…</head>`

  ```html
  <script>
    a {
      background-color: red;
    }
  </script>
  ```

3. External використання тегу `<link>` для підключення зовнішнього файлу:

  ```html
  <link rel="stylesheet" href="styles.css">
  ```


Підключення і виконання скриптів в HTML                  <i id="js_in_html"></i>
--------------------------------------------------------------------------------

```html
<script src="…"></script>
```

або

```html
<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```

`<noscript>` - повідомлення для користувачів, які відключили скрипти в браузері,
або мають браузери без підтримки скриптів.

```html
<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```


URL                                                             <i id="url"></i>
--------------------------------------------------------------------------------

URL - Uniform Resource Locators
URL складається або зі слів (напр. w3schools.com), або адреси інтернет протоколу
(IP-address),напр. 192.68.20.50.

Загальна структура URL:

scheme://prefix.domain:port/path/filename

- `scheme`   defines the type of Internet service (most common is http or https)
- `prefix`   defines a domain prefix (default for http is www)
- `domain`   defines the Internet domain name (like w3schools.com)
- `port`     defines the port number at the host (default for http is 80)
- `path`     defines a path at the server (If omitted: the root directory of the
             site)
- `filename` defines the name of a document or resource

URL може бути надіслана лише через таблицю символів ASCII. Якщо URL містить
символи, що не належать до цієї таблиці, вони будуть конвертовані.


Шляхи до файлів                                          <i id="file_paths"></i>
--------------------------------------------------------------------------------


`"https://www.w3schools.com/images/picture.jpg"` абсолютний шлях
`"/images/picture.jpg"` шлях відносно кореня сайту
`"picture.jpg"`         файл у тій самій директорії
`"images/picture.jpg"`  файл у теці images, яка знаходиться у тій же директорії
`"../picture.jpg"`      файл у директорії рівнем вище (батьківській)


HTML Entities                                              <i id="entities"></i>
--------------------------------------------------------------------------------

&entity_name; &#entity_number;

Entity names are case sensitive.

&nbsp; (&#8209;) Non-breaking Space - пробіл, який не розривається новим рядком.
Також можна використовувати для кількох пробілів підряд (звичайні пробіли html
скорочує до одного)

    non-breaking space  &nbsp;  &#160;  
<   less than             &lt;    &#60;
>   greater than          &gt;    &#62;
&   ampersand             &amp;   &#38;
"   double quotation mark &quot;  &#34;
'   single quotation mark &apos;  &#39;
¢   cent                  &cent;  &#162;
£   pound                 &pound; &#163;
¥   yen                   &yen;   &#165;
€   euro                  &euro;  &#8364;
©   copyright             &copy;  &#169;
®   trademark             &reg;   &#174;


Діактричні знаки                                             <i id="diactr"></i>
--------------------------------------------------------------------------------

Діактричні знаки: буква + спецсимвол:

a&#768;   à
a&#769;   á
a&#770;   â
a&#771;   ã
O&#768;   Ò
O&#769;   Ó
O&#770;   Ô
O&#771;   Õ


XHTML                                                         <i id="xhtml"></i>
--------------------------------------------------------------------------------

The Most Important Differences XHTML from HTML

- `<!DOCTYPE>` is mandatory
- The xmlns attribute in <html> is mandatory
- `<html>`, `<head>`, `<title>`, and `<body>` are mandatory
- Elements must always be properly nested
- Elements must always be closed
- Elements must always be in lowercase
- Attribute names must always be in lowercase
- Attribute values must always be quoted
- Attribute minimization is forbidden








1
--------------------------------------------------------------------------------












































































    dotted     
    dashed     
    solid     
    double     
    groove     
    ridge     
    inset     
    outset     
    none     
    hidden     


Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.



універсальні атрибути https://webref.ru/html/attr/common
