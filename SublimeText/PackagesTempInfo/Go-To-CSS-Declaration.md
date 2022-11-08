##### Go-To-CSS-Declaration

Пакунок здатен перейти з файлу з будь-яким розширенням, в якому є
css-декларація, і знайти її у відкритих файлах з розширеннями css/scss/sass/
less (за замовчуванням) або іншими розширеннями (якщо змінити налаштування).


###### Меню Go-To-CSS-Declaration

Preferences ▶ Package Settings ▶ Goto-CSS-Declaration
Context ▶ Goto CSS Declaration


###### Налаштування Go-To-CSS-Declaration

css_files масив з розширеннями файлів, у яких потрібно шукати css-правило
          [".css", ".scss", ".sass", ".less"]


###### Команди Go-To-CSS-Declaration

goto_css_declaration Goto CSS Declaration
                     super+alt+. (Windows)
                     super+right (Linux)
                     перейти до наступного оголошення
                     args: {"goto": "next"}

goto_css_declaration Goto CSS Declaration
                     super+alt+, (Windows)
                     super+left (Linux)
                     перейти до попереднього оголошення
                     args: {"goto": "prev"}