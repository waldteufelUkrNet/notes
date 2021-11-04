Docker
================================================================================

**Docker** - це технологія створення і управління контейнерами. Контейнери придумані для того, щоб ізолювати код, розташований в них, і гарантувати однаковість його виконання на різних машинах з різними операційними системами. Єдине, що треба, - це наявність самого doker на машині (він має бути запущеним).

**Docker** дозволяє ізолювати застосунки, не створюючи під кожен з них свою віртуальну машину. За його допомогою можна не запускати напр. сервер nginx напряму, а запустити docker-контейнер, в якому, як в матриці, буде запущений свій екземпляр nginx. Ззовні для операційної системи цей екземпляр буде не видимим, операційна система просто виконуватиме docker як один зі своїх процесів.

Застосунки, запущені з різних контейнерів навіть на одній машині, спілкуються між собою по мережі, через мережеві адреси.

Для виконання коду з контейнера docker підтягує зі свого репозиторію (```https://hub.docker.com/```) потрібні образи програм. Інформація, які потрібні програми та які процеси запускати, записується у файлі Doсkerfile (без розширення).



подивитися доступні команди docker:
```shell
docker
```

версія docker:
```shell
docker version
```

### Робота з образами і контейнерами

згенерувати образ, вказаний в Doсkerfile (. - шлях до файлу):
```shell
docker build .
```

при генерації можна вказати ім'я образу та версію (в таблиці образів вона
записується в колонку TAG):
```shell
docker build -t image_name:version .
```

завантажити останній образ node (якщо цього не зробити, docker це зробить сам,
коли буде читати Doсkerfile):
```shell
docker pull node
```

переглянути наявні образи:
```shell
docker image ls
docker images
```

запустити контейнер на основі образа:
```shell
docker run image_id
docker run image_name
```

подивитися список запущених контейнерів:
```shell
docker ps
```

подивитися список усіх контейнерів:
```shell
docker ps -a
```

запустити НОВИЙ контейнер в інтерактивному режимі:
```shell
docker run -it image_name
```

запустити контейнер:
```shell
docker start container_id
```

запустити контейнер з доступом до localhost. -p - порт, перші 3000 - порт для
localhost, другі 3000 - порт, прописаний у контейнері, -d дозволяє продовжувати
працювати в тій консолі, в якій була виконана команда
```shell
docker run -p -d 3000:3000 image_id
```

при запуску образів можна давати ім'я контейнеру, прапор -rm говорить про те, що
контейнер буде видалений після зупинки:
```shell
docker run -p -d 3000:3000 --name container_name -rm image_id
```

??? завершити роботу контейнера:
```shell
.exit
```

завершити роботу контейнера:
```shell
docker stop container_id
docker stop container_name
```

видалити образ:
```shell
docker rmi image_id 
```

видалити контейнер:
```shell
docker rm container_id 
```

видалити всі не активні контейнери:
```shell
docker container prune
```

приєднатися до запущеного контейнера:
```shell
docker attach container_id
docker attach container_name
```

клонувати образ:
```shell
docker tag old_name new_name
```

Створений образ можна залити на репозиторій docker (для цього потрібно
зареєструватися нa docker):
```shell
docker push user_name/image_name
```

### Doсkerfile - інструкція для створення образу

Коренем проекту docker вважається директорія, де лежить файл **Doсkerfile**.
Кожного разу після зміни **Doсkerfile** потрібно перезбирати образ.

Приклад **Doсkerfile** (створення образу з якого потім створиться контейнер):
```
FROM node              # image_name, якщо такого нема, docker качає його з
                       # репозиторія, якщо його нема в репозиторії, буде помилка
WORKDIR /app           # шлях до файлів у образі
COPY . .               # скопіювати локальні файли в образ з кореня в корінь або
                       # місце, вказане в WORKDIR образа. Можна і інші варіанти,
                       # напр. COPY . /app (якщо нема WORKDIR)
EXPOSE 3000            # вибір порта
RUN npm install        # запустити команду після зібрання образу
CMD ["node", "app.js"] # виконання команд після запуску образу
```

оптимізований приклад (при перекомпіляції образу node-модулі братимуться з кешу):
```
FROM node              
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

### .dockerignore - список файлів, не потрібних в образі

приклад **.dockerignore**:
```
node_modules
.git
Dockerfile
```

### Змінні оточення

1. рописуються в Doсkerfile:
   ```
   ENV PORT 4200
   EXPOSE $PORT
   ```
   ```
   docker run -d -p 3000:4200 --rm --name container_name image_name
   ```

2. прописуються в консолі:
   ```shell
   docker run -d -p 3000:80 --rm -e PORT=80 --name container_name image_name
   ```

3. прописуються у файлі .env:
   ```
   PORT=3000
   ```
   ```shell
   docker run -d -p 3000:4200 --rm --name container_name --env-file ./config/.env image_name
   ```

### Makefile

**Makefile** - файл з інструкціями, щось аналогічне до секції scripts файла
package.json. Записується в корінь проекту.

Приклад **Makefile**:

```
run:
  docker run -d -p 3000:4200 --rm --name container_name --env-file ./config/.env image_name
stop:
  docker stop container_name
```

запуск команд в консолі (для цього повинен бути встановлений make):
```shell
make run
make stop
```

### Томи

**Томи** - це теки на локальній машині (не знаходяться ні в образах, ні в контейнерах) і можуть монтуватися в контейнери. Призначені для збереження даних, навіть якщо контейнер був видалений. Бувають ананімні та іменовані. Шляхи до томів прописуються в **Doсkerfile**:

```
VOLUME ["/app/path/to/volume"]
```

Для використання тому його потрібно прописати в команду:
```shell
docker run -d -p 3000:4200 -v volume_name:/app/path/to/volume --rm --name container_name --env-file ./config/.env image_name
```

#### Використання томів для livereload під час розробки

**Makefile**:

```
run-dev:
  docker run -d -p 3000:4200 -v "/absolute/path/to/volume:/app" -v /app/node_modules -v volume_name:/app/path/to/volume --rm --name container_name image_name
```
В коді вище додані том для node-модулів та анонімний том. Код ```-v "/absolute/path/to/volume:/app"``` можна замінити на більш короткий ```-v "$(pwd):/app"```.Після запуску команди при зміні коду в браузері потрібно натискати ctrl+f5.


### Деплой

1. залити образ в docker hub:
   ```shell
   docker tag local_image docker_hub_user_name/image_name
   docker push docker_hub_user_name/image_name
   ```
2. на vps:
   ```shell
   docker pull docker_hub_user_name/image_name
   docker run -d -p 80:3000 --name container_name --rm docker_hub_user_name/image_name
   ```
3. в браузері перейти на ip vps


Посилання
--------------------------------------------------------------------------------

1. [Офіційний сайт](https://www.docker.com/)
2. [Youtube: Зачем нужен и как работает Docker — ликбез](https://www.youtube.com/watch?v=KS80Knz-1Z4)
3. [Youtube: Docker для Начинающих - Полный Курс [2021]](https://www.youtube.com/watch?v=n9uCgUzfeRQ&t=133s)



### Подивитися пізніше

4. [Youtube: Docker - Всё что нужно знать чтобы начать работать с Docker, все основы в одном уроке](https://www.youtube.com/watch?v=I18TNwZ2Nqg)
5. [Youtube: Основы Docker. Большой практический выпуск](https://www.youtube.com/watch?v=QF4ZF857m44)
6. [Youtube: Docker уроки для начинающих от А до Я - что такое docker ?](https://www.youtube.com/watch?v=EbEZgdTOHzE&list=PLD5U-C5KK50XMCBkY0U-NLzglcRHzOwAg)