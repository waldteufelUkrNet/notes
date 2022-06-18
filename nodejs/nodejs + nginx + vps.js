////////////////////////////////////////////////////////////////////////////////
// Як залити сайт, написаний на node.js, на сервер
////////////////////////////////////////////////////////////////////////////////
https://www.youtube.com/watch?v=JVz6nfER5rA&list=PLM7wFzahDYnHYn81-oqavYIp6vaEd5gdH&index=22
https://www.youtube.com/watch?v=Qu-oyzWIpjI&t=1868s
https://www.youtube.com/watch?v=EEb0WLW9lsk&t=668s
https://www.youtube.com/watch?v=I9eTASMnd-E

https://www.youtube.com/watch?v=roFKJ_-0neM
https://www.youtube.com/watch?v=zsr_g610A3M
////////////////////////////////////////////////////////////////////////////////

// 1. купити VPS сервер на Linux Ubuntu

// 2. підключитися до серверу по ssh через консоль:
// ssh login@server(host)
// Наприклад:
  ssh chca55c083@camry.cityhost.com
// або
  ssh admin@185.65.245.105

// 3. перейти з домашньої директорії в корінь (наступні команди можна робити без
// sudo, бо все одно робота іде від root):
  cd ..
// або
  cd / // root@testnode:~# -> root@testnode:/#

// 4. переглянути список файлів і каталогів (аналог dir для windows):
  ls -la

// 5. оновити пакети
  apt-get update

// 6. встановити nginx
  apt-get install nginx
// якщо nginx встановлено коректно, при переході в браузері на ip, який надав
// оператор, можна побачити стандартну сторінку привітання nginx

// 7. встановити командер для зручності перегляду (виклик - команда mc,
// закрити - F10):
  apt install mc

// 8. встановити з'єднання по ftp (FileZilla) через 22 порт і зробити backup
// файла default, який знаходиться в директорії etc/nginx/sites-aviable/default
// Якщо такої директорії нема, то налаштування будуть в директорії
// etc/nginx/conf.d

// 9. в директорію home на сервер можна закинути теки зі СТАТИЧНИМИ сайтами або
// сайтами, написаними на node.js (через FileZilla або за допомогою git clone)

// 10. налаштувати конфігурацію nginx (etc/nginx/sites-aviable/default):
  server {
    listen      80;               // порт
    server_name 185.65.245.105;   // ip або доменне ім'я
    location / {
      root /home/site1;           // тека з сайтом в директорії home
      index index.html index.htm; // початковий файл для завантаження
    }
  }

  server {
    listen      8080;
    server_name 185.65.245.105;
    location / {
      root /home/site2;
      index index.html index.htm;
    }
  }

// 11. після зміни конфіга обов'язково перевірити конфіг на відсутність
// синтаксичних помилок
  nginx -t // -> nginx.conf syntax is ok

// 12. також після зміни конфіга обов'язково треба перезапустити сервер nginx:
  service nginx restart

// 13. встановити node.js, після - перевірити:
  apt-get install nodejs
  node --version

// 14. встановити npm, після - перевірити:
  apt-get install npm

// 15. після встановлення node.js можна в директорію home закинути теку з сайтом
// і після цього в конфігу nginx дописати, протестувати і перезапустити:
  server {
    listen      8081;
    server_name 185.65.245.105;
    location / {
      proxy_pass http://localhost:3000;      // порт, вказаний у app.js
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }
  }

// 16. встановити пакунки, потрібні для проекту:
  npm i

// 17. обов'язково зупустити node.js. Використовувати команду node app.js можна,
// але не практично, бо нода може померти і сайт пропаде. Для автоматичного
// рестарту ноди потрібно встановити спеціальний застосунок:
  npm install pm2 -g

// 18. запуск ноди у фоновому режимі з можливістю перезапуску після падіння:
  pm2 start app.js