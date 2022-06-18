element.style.property="value"                            // запис конкретного стилю. Для value обов'язкові розмірності!
element.style.property=""                                 // скидання стилю (стиль братиметься з css)
elem.style.cssText="property1: value1; property2: value2" // повний перезапис усіх стилів
elem.style.cssText = 'padding-top : ' + value + 'px';     // якщо значення береться зі змінної
getComputedStyle(elem).property                           // читання конкретного стилю (формат рядок – значення + розмірність)
getComputedStyle(elem[, pseudo])                          // читання усіх стилів (формат – об'єкт)

// • стилі краще змінювати класами
// • border-left-width  => elem.style.borderLeftWidth
//   float              => elem.style.cssFloat
//   -moz-border-radius => elem.style.MozBorderRadius
// • element.style додає атрибут в тег.
// • style.cssText дозволяє зробити стиль цілком у вигляді рядка. Аналог повного
//   атрибута style.
// • Властивості в style.cssText пишуться як звичайно, а не через camelCase.
//   Також вимагає розмірностей.
// • Властивість style містить лише той стиль, який вказано в атрибуті елемента,
//   без урахування каскаду CSS. style не бачить стилі, записані у файлі CSS або
//   в тезі <style>.
// • Для властивостей-розмірів замість getComputedStyle(elem) краще
//   використовувати метрики.
// • getComputedStyle(elem) вимагає точну назву: paddingLeft, а не padding.