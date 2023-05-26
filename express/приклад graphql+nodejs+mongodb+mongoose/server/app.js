const chalk       = require('chalk'),
      express     = require('express'),
      graphqlHTTP = require('express-graphql'),
      mongodb     = require('mongodb'),
      mongoose    = require('mongoose'),
      schema      = require('../schema/schema');

mongoose.connect("mongodb://localhost/graphqltest", {
  "keepAlive"          : true,
  "useNewUrlParser"    : true,
  "useUnifiedTopology" : true,
  "useCreateIndex"     : true,
  "useFindAndModify"   : false
});

const app = express();
const PORT = 3005;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`connection error: ${err}`) );
dbConnection.once('open', () => console.log('connection to db!') );

app.listen(PORT, err => {
  err ? console.log(err) : console.log( chalk.black.bgGreen('Server started. GraphiQL is awiable at http://localhost:' + PORT + '/graphql') );
});
