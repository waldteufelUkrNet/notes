const graphql             = require('graphql'),
      { GraphQLObjectType,
      GraphQLID,
      GraphQLInt,
      GraphQLList,
      GraphQLString,
      GraphQLNonNull,
      GraphQLSchema }     = graphql,

      Directors           = require('../models/director'),
      Movies              = require('../models/movie');



// const movies = [
//   {id: '1', name: 'Pulp Fiction', genre: 'Crime', directorId: '1'},
//   {id: '2', name: '1984', genre: 'Sci-Fi', directorId: '2'},
//   {id: '3', name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: '3'},
//   {id: '4', name: 'Snatch', genre: 'Crime-Comedy', directorId: '4'},
//   {id: '5', name: 'Resorvoir Dogs', genre: 'Crime', directorId: '1'},
//   {id: '6', name: 'The hateful Eight', genre: 'Crime', directorId: '1'},
//   {id: '7', name: 'Inglourious Basterds', genre: 'Crime', directorId: '1'},
//   {id: '8', name: 'Lock, Stock and two smocking Barrels', genre: 'Crime-Comedy', directorId: '4'},
// ];

// const directors = [
//   {id: '1', name: 'Quentin Tarantino', age: 55},
//   {id: '2', name: 'Michael Radford', age: 72},
//   {id: '3', name: 'JAmes McTeigue', age: 51},
//   {id: '4', name: 'Guy Ritchie', age: 50}
// ];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({                     // поля потрібно додатково огортати у анонімні функції, бо інакше наші типи, оголошення яких іде після цього коду (а використання в цьом типі) будуть undefined, що викличе помилку. Наприклад, в полях MovieType є тип DirectorType, який оголошується нижче.
    id: {type: GraphQLID},
    name: {type: new GraphQLNonNull(GraphQLString) },
    genre: {type: new GraphQLNonNull(GraphQLString) },
    director: {
      type: DirectorType,
      resolve(parent,args) {
        // return directors.find(director => director.id === parent.id); // аргумент parent використовується при зв'язуванні типів
        return Directors.findById(parent.directorId);
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: new GraphQLNonNull(GraphQLString)},
    age: {type: new GraphQLNonNull(GraphQLInt)},
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        // return movies.filter(movie => movie.directorId === parent.id);
        return Movies.find({directorId: parent.id});
      }
    }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: {id: {type: GraphQLID } },
      resolve(parent,args) {
        // return movies.find(movie => movie.id == args.id);
        return Movies.findById(args.id);
      }
    },
    director: {
      type: DirectorType,
      args: {id: {type: GraphQLID } },
      resolve(parent,args) {
        // return directors.find(director => director.id == args.id); // аргумент args використовується для передачі даних ззовні у graphql
        return Directors.findById(args.id);
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent,args) {
        // return movies
        return Movies.find({});
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent,args) {
        // return directors
        return Directors.find({});
      }
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addDirector: {
      type: DirectorType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve(parent,args) {
        const director = new Directors({
          name : args.name,
          age  : args.age
        });
        return director.save();
      }
    },
    addMovie: {
      type: MovieType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        directorId: {type: GraphQLID}
      },
      resolve(parent,args) {
        const movie = new Movies({
          name : args.name,
          genre : args.genre,
          directorId : args.directorId
        });
        return movie.save();
      }
    },
    deleteDirector: {
      type: DirectorType,
      args: {id: { type: GraphQLID } },
      resolve(parent,args){
        return Directors.findByIdAndRemove(args.id);
      }
    },
    deleteMovie: {
      type: MovieType,
      args: {id: { type: GraphQLID } },
      resolve(parent,args){
        return Movies.findByIdAndRemove(args.id);
      }
    },
    updateDirector: {
      type: DirectorType,
      args: {
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve(parent,args) {
        return Directors.findByIdAndUpdate(
          args.id,
          { $set: {name: args.name, age: args.age} },
          {new: true}
        );
      }
    },
    updateMovie: {
      type: MovieType,
      args: {
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        directorId: {type: GraphQLID}
      },
      resolve(parent,args) {
        return Movies.findByIdAndUpdate(
          args.id,
          {$set: {name: args.name, age: args.age, directorId: args.directorId} },
          {new: true}
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});