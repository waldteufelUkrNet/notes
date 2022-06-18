document.documentElement    // <HTML></HTML>
document.head               // <HEAD></HEAD>
document.body               // <BODY></BODY>

let elem = document.queryselectior('…');

elem.parentElement          // батьківський елемент
elem.children               // колекція дітей
elem.children[i]            // дочірній елемент
elem.nextElementSibling     // наступний братній елемент
elem.previousElementSibling // попередній братній елемент
elem.firstElementChild      // перший дочірній елемент
elem.lastElementChild       // останній дочірній елемент
elem.parentNode             // батьківський елемент (вузол)
elem.childNodes             // Колекція дочірніх елементів (вузлів)
elem.childNodes[i]          // дочірній елемент (вузол)
elem.nextSibling            // наступний братній елемент (вузол)
elem.previousSibling        // попередній братній елемент (вузол)
elem.firstChild             // перший дочірній елемент (вузол)
elem.lastChild              // останній дочірній елемент (вузол)
