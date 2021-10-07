// РОЗМІРИ І ПРОКРУТКА ЕЛЕМЕНТІВ

// метрики – безрозмірні властивості DOM-елементів, доступні тільки на читання
offsetParent             // посилання на перший елемент вище по ієрархії, у якого position не static, або BODY, якщо такого нема
offsetLeft/offsetTop     // метрика зміщення відносно offsetParent

clientTop/clientLeft     // метрика відступу внутрішньої частини елементу від зовнішньої: ширина верхньої/лівої рамок border, або якщо ОС на івриті/арабській мові, то clientTopLeft = border + padding
scrollTop/scrollLeft     // метрика ширини/висоти прокрученої, не видимої частини елемента зліва/зверху. Доступні на зміну

offsetWidth/offsetHeight // метрика ширини/висоти елемента + padding + прокрутка + border
scrollWidth/scrollHeight // метрика ширини/висоти елемента + padding + прокрутка
clientWidth/clientHeight // метрика ширини/висоти елемента + padding


// РОЗМІРИ І ПРОКРУТКА СТОРІНКИ

document.documentElement.clientWidth/Height // ширина/висота видимої області вікна (без прокрутки)
window.innerWidth/Height                    // ширина/висота вікна браузера (з прокруткою)
document.body.scrollLeft/Top                // читання/запис поточної прокрутки сторінки (Safari/Chrome/Opera)
document.documentElement.scrollLeft/Top     // читання/запис поточної прокрутки сторінки (інші браузери)
window.pageYOffset/window.pageXOffset       // читання (тільки читання) поточної прокрутки сторінки
window.scrollBy(x,y)                        // прокручування сторінки відносно поточних координат на x,y
window.scrollTo(pageX,pageY)                // прокручує сторінку до вказаних координат відносно документа. Еквівалент встановлення властивостей scrollLeft/scrollTop
elem.scrollIntoView(top)                    // прокручує сторінку так, щоб елемент опинився нагорі, якщо параметр top = true, або внизу, якщо top = false. Якщо top не вказано, він рівний true
document.body.style.overflow = "hidden"     // заборона прокрутки сторінки( при цьому зникає прокрутка)
document.body.style.overflow = ""           // дозвіл прокрутки сторінки

// • Надійно визначити розмір сторінки із урахуванням прокрутки можна, узявши
//   максимум з кількох властивостей:
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

// • documentElement.scrollLeft/Top може видавати помилку, якщо сторінка такого
//   розміру, що прокрутка то є, то нема


// Плавна прокрутка: (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({
  behavior: 'smooth'
});

// прокрутка до самого низу елементу зі скролом:
elem.scrollTop = elem.scrollHeight;
// прокрутка до самого верху елементу зі скролом:
elem.scrollTop = 0;