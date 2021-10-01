elem.hasAttribute('name')          // наявність атрибуту
elem.getAttribute('name')          // читання значення атрибуту
elem.setAttribute('name', 'value') // встановлення значення атрибуту
elem.removeAttribute('name')       // видалення атрибуту
elem.attributes                    // псевдомасив з усіма атрибутами елементу
elem.classList.contains("class")   // перевірка наявності класу true/false
elem.classList.add("class")        // додати/видалити клас
elem.classList.remove("class")     // додати/видалити клас
elem.classList.toggle("class")     // перемикання (додавання/видалення) класу
elem.className = "class1 class2";  // додавання класів (із перезатиранням)
input.value                        // значення input’у

// • Під час читання HTML браузер перетворює більшість атрибутів у властивості
//   DOM-об'єктів.
// • атрибут class  -> властивість .className (рядок) / .classList (об'єкт)
//    for    ->             .htmlFor
//    data-* ->             .dataset

// • Атрибути завжди є рядками, нечутливі до регістру, видні в innerHTML, у
//   об'єктів усе навпаки.
// • Властивість залежить від атрибута, атрибут від властивості ні -> при зміні
//   властивості через JS атрибут може не змінитися.
// • Для не стандартних атрибутів DOM-властивість не створюється.
// • Краще завжди користуватися DOM-властивостями, а атрибутами лише за крайньої
//   необхідності.
// • elem.dataset.property = elem.getAttribute(“data-property”);