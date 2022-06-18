document.createElement('tag')                            // створення елементу з вказаним тегом
document.createTextNode('text')                          // створення текстового вузла з вказаним текстом
parentElem.appendChild(elem)                             // додавання elem в кінець дочірніх елементів parentElem.
parentElem.insertBefore(elem, nextSibling)               // додавання elem в колекцію дітей parentElem, перед елементом nextSibling
elem1.parentNode.insertBefore(elem2, elem1.nextSibling); // вставити elem2 після elem1
elem.cloneNode(true)                                     // створення «глибокої» копії елемента – разом з атрибутами, включаючи піделементи
elem.cloneNode(false)                                    // створення копії елемента без піделементів
parentElem.removeChild(elem)                             // видалення елементу
elem.remove()                                            // видалення елементу (без посилання на батька)
parentElem.replaceChild(newElem, elem)                   // заміна elem на newElem

elem.insertAdjacentHTML('beforeBegin', 'html');          // вставка html перед елементом
elem.insertAdjacentHTML('afterBegin', 'html');           // вставка html на початок елементу
elem.insertAdjacentHTML('beforeEnd', 'html');            // вставка html в кінець елементу
elem.insertAdjacentHTML('afterEnd', 'html');             // вставка html після елементу

elem.insertAdjacentElement('beforeBegin', newElem);      // вставка елементу перед елементом
elem.insertAdjacentElement('afterBegin', newElem);       // вставка елементу на початок елементу
elem.insertAdjacentElement('beforeEnd', newElem);        // вставка елементу в кінець елементу
elem.insertAdjacentElement('afterEnd', newElem);         // вставка елементу після елементу

elem.insertAdjacentText('beforeBegin', 'text');          // вставка тексту перед елементом
elem.insertAdjacentText('afterBegin', 'text');           // вставка тексту на початок елементу
elem.insertAdjacentText('beforeEnd', 'text');            // вставка тексту в кінець елементу
elem.insertAdjacentText('afterEnd', 'text');             // вставка тексту після елементу


elem.before(nodes)      // вставка DOM-вузлів/текстових вузлів у будь-якій кількості і поєднанні перед елементом
elem.prepend(nodes)     // вставка DOM-вузлів/текстових вузлів у будь-якій кількості і поєднанні на початок елементу
elem.append(nodes)      // вставка DOM-вузлів/текстових вузлів у будь-якій кількості і поєднанні в кінець елементу
elem.after(nodes)       // вставка DOM-вузлів/текстових вузлів у будь-якій кількості і поєднанні після елементу

node.replaceWith(nodes) // заміна DOM-вузлів/текстових вузлів

// • parentElem.insertBefore(elem, null) == parentElem.appendChild(elem)
// • elem.remove() == elem.parentNode.removeChild(elem)