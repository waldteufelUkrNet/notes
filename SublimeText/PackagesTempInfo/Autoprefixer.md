##### Autoprefixer

Якщо пакунок видає помилку, потрібно зайти в його директорію node_modules і
оновити пакети.


###### Меню Autoprefixer

preferences ▶ Package Settings ▶ Autoprefixer


###### Налаштування Autoprefixer

https://github.com/postcss/autoprefixer#options

browsers     масив браузерів, сформований в стилі browserslist
             (https://github.com/browserslist/browserslist)
             ["defaults"]

cascade      використовувати візуальний каскад, якщо css не мініфікований
             true

flexbox      додавати префікси для властивостей flexbox. true/false/"no-2009"
             Якщо "no-2009" - додати лише префікси для остаточної та IE версії
             специфікації
             true

grid         додавати IE-префікси для grid layout
             true

prefixOnSave Run Autoprefixer on file save
             false

remove       видаляти застарілі прафікси
             true

supports     додавати префікси до @supports-параметрів
             true


###### Команди Autoprefixer

autoprefixer Autoprefix CSS
             вставити вендорні префікси
