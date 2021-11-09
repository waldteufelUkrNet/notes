GraphQL
================================================================================

**GraphQL** - це мова запитів клієнт/сервер та середовище для виконня таких запитів. Підтримує багато мов програмування, в тому числі JS. Є "прокладкою" між запитом і базою даних. Бази даних можуть використовуватися будь-які. Виконує аналогічні функції, що і REST API.

**Відмінність від REST API**

1. В **REST API** кожен запит має свою адресу, а в **GraphQL** адреса для
   запитів одна, закінчується, як правило, на `\graphql`.
2. Якщо потрібно отримати з'вязані дані, в **REST API** імовірно доведеться
   робити кілька запитів, а в **GraphQL** можна налаштувати один запит, причому
   також можна одразу запитувати залежні сутності з різних таблиць.
3. Схемою даних управляє клієнт, а не сервер: клієнт формує запит тільки для
   потрібних полів і отримує відповідь у потрібному форматі. Завдяки цьому
   вдається знизити навантаження на сервер. В **REST API** для зменшення
   навантаження доводиться використовувати мікросерверну архітектуру:
   однин url - одні дані.


Принцип роботи
--------------------------------------------------------------------------------

Відображення сутності на поля в запиті прописуються на стороні бекенда за допомогою спеціальних бібліотек. **GraphQL** - це по суті мапінг (відображення) полів з бази даних на свою схему. Схеми **GraphQL** типізовані.


Синтаксис
--------------------------------------------------------------------------------

### Типи запитів
1. **query** - тільки читання, аналог get-запиту. Виконуються паралельно.
2. **mutation** - запит на зміну даних, додавання, видалення. Аналог post, put,
   delete запитів. Виконуються послідовно.

**приклад запиту (на GraphiQL):**
```
query {
  continents {
    name
    code
    countries {
      name
      code
    }
  }
}
```

результатом буде:
```
{
  "data": {
    "continents": [
      {
        "name": "Africa",
        "code": "AF",
        "countries": [
          {
            "name": "Angola",
            "code": "AO"
          },
          …
        ]
      },
      …
    ]
  }
}
```


### Змінні

У запитах можна використовувати змінні. В середині запиту вони повинні починатися з $. Їх потрібно задекларувати і вказати значення у блоці оголошення змінних **QUERY VARIABLES**:

```
query (
  $code: String!  ## ! - позначення обов'язкового поля
) {
  continents (
    filter: {     ## ключове слово, вказане в реалізації бекенду GraphiQL
      code: {
        eq: $code
      }
    }
  ) {
    name
    code
  }
}
```

блок оголошення змінних:
```
{
  "code": "EU"
}
```

результатом будуть наступні дані:
```
{
  "data": {
    "continents": [
      {
        "name": "Europe",
        "code": "EU"
      }
    ]
  }
}
```


### Фрагменти

Якщо в запитах є однотипні рядки, то для скорочення коду можна використовувати
фрагменти **fragments**:
```
fragment someFields on Continent {
  code
  name
}

query (
  $code: String = "EU" ## значення за замовчуванням
) {
  continents (
    filter: {
      code: {
        eq: $code
      }
    }
  ) {
    ...someFields
  }
}
```


### Псевдоніми

Якщо запит складний, потрібно слідкувати, щоб дані, які вертаються (вони є об'єктом), не мали однакових полів. Для цього використовуються **aliases**.
Приклад коду:

```
fragment someFields on Continent {
  code
  name
}

query (
  $code: String = "EU" ## значення за замовчуванням
) {
  eu: continents (     ## <-
    filter: {
      code: {
        eq: $code
      }
    }
  ) {
    ...someFields
  }
  as: continents (     ## <-
    filter: {
      code: {
        eq: $code
      }
    }
  ) {
    ...someFields
  }
}
```

результат:
```
{
  "data": {
    "eu": [
      {
        "code": "EU",
        "name": "Europe"
      }
    ],
    "as": [
      {
        "code": "EU",
        "name": "Europe"
      }
    ]
  }
}
```

### Імена запитів

для розуміння, в якому запиті відбулася помилка, доброю практикою є вказування
імені для запитів

```
query query_name (…) {…}
```


### Директиви

директива **@include**:
```
query continents_query(
  $includeCountries: Boolean = false
) {
  continents {
    code
    name
  }
  countries @include(if: $includeCountries) {
    code
    name
  }
}
```

директива **@skip** - антипод **@include**:
```
query continents_query(
  $skipCountries: Boolean = false
) {
  continents {
    code
    name
  }
  countries @skip(if: $skipCountries) {
    code
    name
  }
}
```

inline fragments:
```

```


Спосіб організації коду (приклад)
--------------------------------------------------------------------------------

1. Підключаємо потрібні модулі:
   ```js
   let {graphql, buildSchema } = require('graphql');
   ```

2. Створюємо схему. Схема є основою, скелетом серверної частини **GraphQL**.
   ```js
   let schema = buildSchema(`
   type Book {
     id: ID!                 // вбудований тип ID
     author: Author          // свій тип Author
     description: String!
   }

   input BookInput {         // все, що подається на вхід мутаціям, повинно мати
     title: String!          //  спец.тип input
     description: String!
   }

   type Author {
     id: ID!
     firstNAme: String!
     lastName: String!
   }

   type Query {
     getAllBooks: [Book]!    // повертає масив значень типу Book
     getBook(id: ID!): Book! // ! означає обов'язковість
     hello: String,
     bye (name: String!): String
   }

   type Mutation {
     addBook(book: BookInput!): Boolean!
   }
   `);
   ```

3. Пишемо логіку резолверів (функцій-посередників, призначених для отримання
   даних з бд у відповідності до структури схеми і видачі її назовні):
   ```js
   let root = {
     hello: () => {
       return 'Hello, world';
     },
     bye: (args) => {
      return 'Bye, ' + args.name + '!';
     }
   };
   ```

4. Формуємо запит і обробляємо його. Аргументи: 1й - схема, 2й - запит, 3й -
   об'єкт з резолверами.
   ```js
   graphql(schema, '{hello, bye(name: "John")', root)
   .then( res=> {
     console.log(res)
   });
   ```


Схема
--------------------------------------------------------------------------------

Схему можна оголошувати кількома способами.

1. Як рядок:
   ```js
   let {graphql, buildSchema } = require('graphql');
   let schema = buildSchema(`
     type Book {
       id: String!
       author: Author
       description: String!
     }
   `);
   ```

2. За допомогою об'єктів:
   ```js
   let {
     graphql,
     GraphQLObjectType,
     GraphQNonNull,
     GraphQLString
   } = require('graphql');

   let BookType = new GraphQLObjectType ({
     name: 'Book',
     description: 'some description',
     fields: () => ({
       id: {type: new GraphQNonNull(GraphQLString)},         // String!
       author: {type: GraphQLString},                        // String
       description: {type: new GraphQNonNull(GraphQLString)} // String!
       someField : {                                  // пошук у зв'язаному полі
        type: SomeType,
        resolve: function(book) {
          return someData.find( item => book.id = item.id )
        }
       }
     })
   });
   ```


Посилання
--------------------------------------------------------------------------------

1. [Офіційний сайт](https://graphql.org/)
2. [GraphiQL is an in-browser tool for writing, validating, and testing GraphQL
   queries](https://lucasconstantino.github.io/graphiql-online/)
3. [graphql](https://github.com/nodkz/conf-talks)
4. [Redux не нужен. GraphQL и Apollo Client.](https://www.youtube.com/watch?v=OezyScvU9-c)
5. [Пишем первый GraphQL сервер [Хекслет]](https://www.youtube.com/watch?v=pUFZPdiWswQ)


















4. [Youtube: 17 відео](https://www.youtube.com/watch?v=kZs7CXrtT-s&list=PLNkWIWHIRwMF2sVLwzRef0Cu5kzAOeRcu)


https://www.youtube.com/watch?v=NnnvOPdstzg&t=1287s

 https://www.youtube.com/watch?v=GMJNSBur-lM