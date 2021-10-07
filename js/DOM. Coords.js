// КООРДИНАТИ У ВІКНІ (clientX/clientY)                   аналог position: fixed

// Відлік координат від лівого-верхнього кута поточної області видимості
// (прокрутка не враховується).

elem.getBoundingClientRect()   // повертає об'єкт з координатами (top, left,
                               // right, bottom) - right і bottom координати не
                               // співпадають із CSS-властивостями.
document.elementFromPoint(x,y) // вертає елемент, який знаходиться на
                               // координатах (x, y) відносно вікна. Для
                               // координат поза вікном elementFromPoint
                               // повертає null. Вертає найбільш глибоко
                               // вкладений елемент.


// КООРДИНАТИ В ДОКУМЕНТІ (pageX/pageY)                аналог position: absolute

// Відлік координат від лівого-верхнього кута сторінки (прокрутка враховується).
// Готової функції для отримання координат елемента відносно сторінки нема.
// Але: pageY = clientY + поточна вертикальна прокрутка, звідси:

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top  : box.top + pageYOffset,
    left : box.left + pageXOffset
  };
}


// КООРДИНАТИ НА ЕКРАНІ (screenX/screenY)

// Відлік координат від лівого-верхнього кута екрану.

screen.width       // загальні розміри екрану
screen.height      //
screen.availWidth  // доступні розміри екрану
screen.availHeight //
window.screenX     // координати лівого-верхнього кута браузера відносно екрану
window.screenY     //