##### CSSComb

Для роботи пакунку потрібен встановлений Node.js.

If node has been installed with NVM you need to make a symlink to node in
/usr/local/bin.


###### Меню CSSComb

Tools ▶ Run CSScomb
Preferences ▶ Package Settings ▶ CSScomb
Context ▶ Run CSScomb


###### Налаштування CSSComb

Існує кілька варіантів налаштування пакунку:

1. файл .csscomb.json в кореневій теці проекту або в домашній директорії
   користувача.
2. файл /User/CSScomb.sublime-settings

детальний опис налаштувань:
https://github.com/csscomb/csscomb.js/blob/master/doc/options.md

node-path                               шлях до виконуваного файлу Node.js
                                        ":/usr/local/bin"

config                                  об'єкт з властивостями

config.always-semicolon                 чи додавати крапку з комою після
                                        останньої властивості в блоці. У файлах
                                        .scss і .less крапка з комою не
                                        додається після }, навіть якщо це
                                        частина складеного значення, напр.
                                        ```scss
                                        div {
                                          color: tomato;
                                          font: {
                                            family: fantasy;
                                            size: 16px;
                                          }
                                        })
                                        ```
                                        ігнорується у файлах .sass
                                        true

config.block-indent                     визначає відступи у вкладених
                                        властивостях, число або рядок з
                                        пробілів/табів
                                        "    "

config.color-case                       спосіб написання кольорів - великими або
                                        малими буквами
                                        "lower"

config.color-shorthand                  якщо true - кольори приводитимуться до
                                        компактнішого написання (#ffcc00 ->
                                        #fc0), якщо false - переводитимуться у
                                        довший рядок
                                        true

config.element-case                     стиль написання тегів upper/lower
                                        "lower"

config.eof-newline                      eof: end-of-file. Додати/видалити символ
                                        переводу рядка (додати рядок) в кінець
                                        файла
                                        true

config.leading-zero                     додати/видалити початковий нуль у
                                        розмірностях (0.5em/.5em)
                                        false

config.lines-between-rulesets           кількість ліній між блоками коду {}

config.quotes                           тип лапок single/double
                                        "single"

config.remove-empty-rulesets            видаляти пусті елементи {}
                                        true

config.sort-order                       масив з властивостями або масив з
                                        масивами властивостей, визначає порядок
                                        послідовності властивостей. У файлах
                                        .scss/.less можна додатково вживати
                                        ключі:
                                        1. $variable для оголошень змінних
                                           ($var в Sass, @var в LESS)
                                        2. $include для всіх міксинів
                                           (@include … в Sass, .mixin() LESS)
                                        3. $include mixin-name іменованих
                                           міксинів (@include mixin-name в Sass,
                                           .mixin-name() в LESS)
                                        4. $extend для наслідувань (@extend .foo
                                           в Sass, &:extend(.foo) в LESS)
                                        5. $import для правил імпорту @import

                                        напр. { "sort-order": [ [ "$variable" ],
                                        [ "$include" ], [ "top", "padding" ],
                                        [ "$include media" ] ] }

                                        результат: 
                                        ```scss
                                        p {
                                          $color: tomato;

                                          @include mixin($color);

                                          top: 0;
                                          padding: 0;

                                          @include media("desktop") {
                                            color: black;
                                          }
                                        }
                                        ```

                                        Залишкові властивості, які не вказані у
                                        sort-order явно будуть вставлені в
                                        кінець у порядку їх появи в окрему
                                        групу. Для зміни розташування цієї групи
                                        можна використати "...", напр. 
                                        {"sort-order": [ ["$variable"],
                                        ["position"], ["...", "border"],
                                        ["$include"], ["font"] ]}

config.sort-order-fallback              визначає порядок сортування для залишків,
                                        які не увійшли у sort-order. Працює лише,
                                        якщо явно вказаний sort-order. Має одне
                                        значення: "abc".

config.space-after-colon                що вставлятиметься після двокрапки:
                                        число або рядок з пробілів/табів/розриву
                                        рядку
                                        " "

config.space-after-combinator           що вставлятиметься після комбінаторів:
                                        число або рядок з пробілів/табів/розриву
                                        рядку, напр. { "space-after-combinator":
                                        "\n " }
                                        результат:
                                        ```css
                                        p >
                                          a { color: panda; }
                                        ```
                                        " "

config.space-after-opening-brace        що вставлятиметься після дужки {: число
                                        або рядок з пробілів/табів/розриву рядку
                                        ігнорується у файлах .sass
                                        "\n"

config.space-after-selector-delimiter   що вставлятиметься після розділювача
                                        (коми): число або рядок з пробілів/
                                        табів/розриву рядку
                                        "\n"

config.space-before-closing-brace       що вставлятиметься перед дужкою }: число
                                        або рядок з пробілів/табів/розриву рядку
                                        ігнорується у файлах .sass
                                        "\n"

config.space-before-colon               що вставлятиметься перед двокрапкою:
                                        число або рядок з пробілів/табів/розриву
                                        рядку
                                        " "

config.space-before-combinator          що вставлятиметься після комбінаторів:
                                        число або рядок з пробілів/табів/розриву
                                        " "

config.space-before-opening-brace       що вставлятиметься перед дужкою {: число
                                        або рядок з пробілів/табів/розриву рядку
                                        ігнорується у файлах .sass
                                        "\n"

config.space-before-selector-delimiter  що вставлятиметься перед розділювачем
                                        (комою): число або рядок з пробілів/
                                        табів/розриву рядку
                                        ""

config.space-between-declarations       що вставлятиметься між парами "ключ-
                                        значення": число або рядок з пробілів/
                                        табів/розриву рядку
                                        ігнорується у файлах .sass
                                        "\n"

config.strip-spaces                     обрізка пробілів в кінці рядків
                                        true

config.tab-size                         число, вказує на кількість пробілів, які
                                        замінюють символи табуляції

config.template                         рядок, шлях до .css-файла, який
                                        сприйматиметься пакунком як зразок, з
                                        якого будуть згенеровані правила

config.unitless-zero                    видаляти розмірності, якщо величина 0
                                        ```css
                                        img { border: 0 }
                                        ```
                                        true

config.vendor-prefix-align              вирівнювання властивостей з вендорними
                                        префіксами, напр.:
                                        ```css
                                        a {
                                          -webkit-border-radius: 3px;
                                             -moz-border-radius: 3px;
                                                  border-radius: 3px;
                                          background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
                                          background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
                                          background:         linear-gradient(to bottom, #fff 0, #eee 100%);
                                        }
                                        ```
                                        true

config.exclude                          файли і директорії, які не треба
                                        облобляти, напр. ["node_modules/**"]    /**

config.verbose                          чи використовувати в CLI прапор --verbose
                                        true


###### Команди CSSComb

css_comb Run CSScomb
         ctrl+shift+c
         відсортувати властивості css