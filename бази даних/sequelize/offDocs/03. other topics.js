Dialect-Specific Things
--------------------------------------------------------------------------------

Underlying Connector Libraries
MySQL

The underlying connector library used by Sequelize for MySQL is the mysql2 npm package (version 1.5.2 or higher).

You can provide custom options to it using the dialectOptions in the Sequelize constructor:

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  dialectOptions: {
    // Your mysql2 options here
  }
})

dialectOptions are passed directly to the MySQL connection constructor. A full list of options can be found in the MySQL docs.
MariaDB

The underlying connector library used by Sequelize for MariaDB is the mariadb npm package.

You can provide custom options to it using the dialectOptions in the Sequelize constructor:

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mariadb',
  dialectOptions: {
    // Your mariadb options here
    // connectTimeout: 1000
  }
});

dialectOptions are passed directly to the MariaDB connection constructor. A full list of options can be found in the MariaDB docs.
SQLite

The underlying connector library used by Sequelize for SQLite is the sqlite3 npm package (version 4.0.0 or above).

You specify the storage file in the Sequelize constructor with the storage option (use :memory: for an in-memory SQLite instance).

You can provide custom options to it using the dialectOptions in the Sequelize constructor:

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite' // or ':memory:'
  dialectOptions: {
    // Your sqlite3 options here
  }
});

The following fields may be passed to SQLite dialectOptions:

    readWriteMode: Set the opening mode for the SQLite connection. Potential values are provided by the sqlite3 package, and can include sqlite3.OPEN_READONLY, sqlite3.OPEN_READWRITE, or sqlite3.OPEN_CREATE. See the SQLite C interface documentation for more details.

PostgreSQL

The underlying connector library used by Sequelize for PostgreSQL is the pg npm package (version 7.0.0 or above). The module pg-hstore is also necessary.

You can provide custom options to it using the dialectOptions in the Sequelize constructor:

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
  dialectOptions: {
    // Your pg options here
  }
});

The following fields may be passed to Postgres dialectOptions:

    application_name: Name of application in pg_stat_activity. See the Postgres docs for details.
    ssl: SSL options. See the pg docs for details.
    client_encoding: // Setting 'auto' determines locale based on the client LC_CTYPE environment variable. See the Postgres docs for details.
    keepAlive: Boolean to enable TCP KeepAlive. See the pg changelog for details.
    statement_timeout: Times out queries after a set time in milliseconds. Added in pg v7.3. See the Postgres docs for details.
    idle_in_transaction_session_timeout: Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds. See the Postgres docs for details.

To connect over a unix domain socket, specify the path to the socket directory in the host option. The socket path must start with /.

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
  host: '/path/to/socket_directory'
});

The default client_min_messages config in sequelize is WARNING.
Redshift

Most configuration is same as PostgreSQL above.

Redshift doesn't support client_min_messages, 'ignore' is needed to skip the configuration:

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
  dialectOptions: {
    // Your pg options here
    // ...
    clientMinMessages: 'ignore' // case insensitive
  }
});

MSSQL

The underlying connector library used by Sequelize for MSSQL is the tedious npm package (version 6.0.0 or above).

You can provide custom options to it using dialectOptions.options in the Sequelize constructor:

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mssql',
  dialectOptions: {
    // Observe the need for this nested `options` field for MSSQL
    options: {
      // Your tedious options here
      useUTC: false,
      dateFirst: 1
    }
  }
});

A full list of options can be found in the tedious docs.
MSSQL Domain Account

In order to connect with a domain account, use the following format.

const sequelize = new Sequelize('database', null, null, {
  dialect: 'mssql',
  dialectOptions: {
    authentication: {
      type: 'ntlm',
      options: {
        domain: 'yourDomain',
        userName: 'username',
        password: 'password'
      }
    },
    options: {
      instanceName: 'SQLEXPRESS'
    }
  }
})

Snowflake (Experiment)

The underlying connector library used by Sequelize for Snowflake is the snowflake-sdk npm package.

In order to connect with an account, use the following format:

const sequelize = new Sequelize('database', null, null, {
  dialect: 'snowflake',
  dialectOptions: {
    // put your snowflake account here,
    account: 'myAccount',  // my-app.us-east-1

    // below option should be optional
    role: 'myRole',
    warehouse: 'myWarehouse',
    schema: 'mySchema'
  },
  // same as other dialect
  username: 'myUserName',
  password: 'myPassword',
  database: 'myDatabaseName'
})

NOTE There is no test sandbox provided so the snowflake integration test is not part of the pipeline. Also it is difficult for core team to triage and debug. This dialect needs to be maintained by the snowflake user/community for now.

For running integration test:

SEQ_ACCOUNT=myAccount SEQ_USER=myUser SEQ_PW=myPassword SEQ_ROLE=myRole SEQ_DB=myDatabaseName SEQ_SCHEMA=mySchema SEQ_WH=myWareHouse npm run test-integration-snowflake

Data type: TIMESTAMP WITHOUT TIME ZONE - PostgreSQL only

If you are working with the PostgreSQL TIMESTAMP WITHOUT TIME ZONE and you need to parse it to a different timezone, please use the pg library's own parser:

require('pg').types.setTypeParser(1114, stringValue => {
  return new Date(stringValue + '+0000');
  // e.g., UTC offset. Use any offset that you would like.
});

Data type: ARRAY(ENUM) - PostgreSQL only

Array(Enum) type requireS special treatment. Whenever Sequelize will talk to the database, it has to typecast array values with ENUM name.

So this enum name must follow this pattern enum_<table_name>_<col_name>. If you are using sync then correct name will automatically be generated.
Table Hints - MSSQL only

The tableHint option can be used to define a table hint. The hint must be a value from TableHints and should only be used when absolutely necessary. Only a single table hint is currently supported per query.

Table hints override the default behavior of MSSQL query optimizer by specifing certain options. They only affect the table or view referenced in that clause.

const { TableHints } = require('sequelize');
Project.findAll({
  // adding the table hint NOLOCK
  tableHint: TableHints.NOLOCK
  // this will generate the SQL 'WITH (NOLOCK)'
})

Index Hints - MySQL/MariaDB only

The indexHints option can be used to define index hints. The hint type must be a value from IndexHints and the values should reference existing indexes.

Index hints override the default behavior of the MySQL query optimizer.

const { IndexHints } = require("sequelize");
Project.findAll({
  indexHints: [
    { type: IndexHints.USE, values: ['index_project_on_name'] }
  ],
  where: {
    id: {
      [Op.gt]: 623
    },
    name: {
      [Op.like]: 'Foo %'
    }
  }
});

The above will generate a MySQL query that looks like this:

SELECT * FROM Project USE INDEX (index_project_on_name) WHERE name LIKE 'FOO %' AND id > 623;

Sequelize.IndexHints includes USE, FORCE, and IGNORE.

See Issue #9421 for the original API proposal.
Engines - MySQL/MariaDB only

The default engine for a model is InnoDB.

You can change the engine for a model with the engine option (e.g., to MyISAM):

const Person = sequelize.define('person', { /* attributes */ }, {
  engine: 'MYISAM'
});

Like every option for the definition of a model, this setting can also be changed globally with the define option of the Sequelize constructor:

const sequelize = new Sequelize(db, user, pw, {
  define: { engine: 'MYISAM' }
})

Table comments - MySQL/MariaDB/PostgreSQL only

You can specify a comment for a table when defining the model:

class Person extends Model {}
Person.init({ /* attributes */ }, {
  comment: "I'm a table comment!",
  sequelize
})

The comment will be set when calling sync().


Transactions
--------------------------------------------------------------------------------

Sequelize does not use transactions by default. However, for production-ready usage of Sequelize, you should definitely configure Sequelize to use transactions.

Sequelize supports two ways of using transactions:

    Unmanaged transactions: Committing and rolling back the transaction should be done manually by the user (by calling the appropriate Sequelize methods).

    Managed transactions: Sequelize will automatically rollback the transaction if any error is thrown, or commit the transaction otherwise. Also, if CLS (Continuation Local Storage) is enabled, all queries within the transaction callback will automatically receive the transaction object.

Unmanaged transactions

Let's start with an example:

// First, we start a transaction and save it into a variable
const t = await sequelize.transaction();

try {

  // Then, we do some calls passing this transaction as an option:

  const user = await User.create({
    firstName: 'Bart',
    lastName: 'Simpson'
  }, { transaction: t });

  await user.addSibling({
    firstName: 'Lisa',
    lastName: 'Simpson'
  }, { transaction: t });

  // If the execution reaches this line, no errors were thrown.
  // We commit the transaction.
  await t.commit();

} catch (error) {

  // If the execution reaches this line, an error was thrown.
  // We rollback the transaction.
  await t.rollback();

}

As shown above, the unmanaged transaction approach requires that you commit and rollback the transaction manually, when necessary.
Managed transactions

Managed transactions handle committing or rolling back the transaction automatically. You start a managed transaction by passing a callback to sequelize.transaction. This callback can be async (and usually is).

The following will happen in this case:

    Sequelize will automatically start a transaction and obtain a transaction object t
    Then, Sequelize will execute the callback you provided, passing t into it
    If your callback throws, Sequelize will automatically rollback the transaction
    If your callback succeeds, Sequelize will automatically commit the transaction
    Only then the sequelize.transaction call will settle:
        Either resolving with the resolution of your callback
        Or, if your callback throws, rejecting with the thrown error

Example code:

try {

  const result = await sequelize.transaction(async (t) => {

    const user = await User.create({
      firstName: 'Abraham',
      lastName: 'Lincoln'
    }, { transaction: t });

    await user.setShooter({
      firstName: 'John',
      lastName: 'Boothe'
    }, { transaction: t });

    return user;

  });

  // If the execution reaches this line, the transaction has been committed successfully
  // `result` is whatever was returned from the transaction callback (the `user`, in this case)

} catch (error) {

  // If the execution reaches this line, an error occurred.
  // The transaction has already been rolled back automatically by Sequelize!

}

Note that t.commit() and t.rollback() were not called directly (which is correct).
Throw errors to rollback

When using the managed transaction you should never commit or rollback the transaction manually. If all queries are successful (in the sense of not throwing any error), but you still want to rollback the transaction, you should throw an error yourself:

await sequelize.transaction(async t => {
  const user = await User.create({
    firstName: 'Abraham',
    lastName: 'Lincoln'
  }, { transaction: t });

  // Woops, the query was successful but we still want to roll back!
  // We throw an error manually, so that Sequelize handles everything automatically.
  throw new Error();
});

Automatically pass transactions to all queries

In the examples above, the transaction is still manually passed, by passing { transaction: t } as the second argument. To automatically pass the transaction to all queries you must install the cls-hooked (CLS) module and instantiate a namespace in your own code:

const cls = require('cls-hooked');
const namespace = cls.createNamespace('my-very-own-namespace');

To enable CLS you must tell sequelize which namespace to use by using a static method of the sequelize constructor:

const Sequelize = require('sequelize');
Sequelize.useCLS(namespace);

new Sequelize(....);

Notice, that the useCLS() method is on the constructor, not on an instance of sequelize. This means that all instances will share the same namespace, and that CLS is all-or-nothing - you cannot enable it only for some instances.

CLS works like a thread-local storage for callbacks. What this means in practice is that different callback chains can access local variables by using the CLS namespace. When CLS is enabled sequelize will set the transaction property on the namespace when a new transaction is created. Since variables set within a callback chain are private to that chain several concurrent transactions can exist at the same time:

sequelize.transaction((t1) => {
  namespace.get('transaction') === t1; // true
});

sequelize.transaction((t2) => {
  namespace.get('transaction') === t2; // true
});

In most case you won't need to access namespace.get('transaction') directly, since all queries will automatically look for a transaction on the namespace:

sequelize.transaction((t1) => {
  // With CLS enabled, the user will be created inside the transaction
  return User.create({ name: 'Alice' });
});

Concurrent/Partial transactions

You can have concurrent transactions within a sequence of queries or have some of them excluded from any transactions. Use the transaction option to control which transaction a query belongs to:

Note: SQLite does not support more than one transaction at the same time.
With CLS enabled

sequelize.transaction((t1) => {
  return sequelize.transaction((t2) => {
    // With CLS enabled, queries here will by default use t2.
    // Pass in the `transaction` option to define/alter the transaction they belong to.
    return Promise.all([
        User.create({ name: 'Bob' }, { transaction: null }),
        User.create({ name: 'Mallory' }, { transaction: t1 }),
        User.create({ name: 'John' }) // this would default to t2
    ]);
  });
});

Passing options

The sequelize.transaction method accepts options.

For unmanaged transactions, just use sequelize.transaction(options).

For managed transactions, use sequelize.transaction(options, callback).
Isolation levels

The possible isolations levels to use when starting a transaction:

const { Transaction } = require('sequelize');

// The following are valid isolation levels:
Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED // "READ UNCOMMITTED"
Transaction.ISOLATION_LEVELS.READ_COMMITTED // "READ COMMITTED"
Transaction.ISOLATION_LEVELS.REPEATABLE_READ  // "REPEATABLE READ"
Transaction.ISOLATION_LEVELS.SERIALIZABLE // "SERIALIZABLE"

By default, sequelize uses the isolation level of the database. If you want to use a different isolation level, pass in the desired level as the first argument:

const { Transaction } = require('sequelize');

await sequelize.transaction({
  isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
}, async (t) => {
  // Your code
});

You can also overwrite the isolationLevel setting globally with an option in the Sequelize constructor:

const { Sequelize, Transaction } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:', {
  isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
});

Note for MSSQL: The SET ISOLATION LEVEL queries are not logged since the specified isolationLevel is passed directly to tedious.
Usage with other sequelize methods

The transaction option goes with most other options, which are usually the first argument of a method.

For methods that take values, like .create, .update(), etc. transaction should be passed to the option in the second argument.

If unsure, refer to the API documentation for the method you are using to be sure of the signature.

Examples:

await User.create({ name: 'Foo Bar' }, { transaction: t });

await User.findAll({
  where: {
    name: 'Foo Bar'
  },
  transaction: t
});

The afterCommit hook

A transaction object allows tracking if and when it is committed.

An afterCommit hook can be added to both managed and unmanaged transaction objects:

// Managed transaction:
await sequelize.transaction(async (t) => {
  t.afterCommit(() => {
    // Your logic
  });
});

// Unmanaged transaction:
const t = await sequelize.transaction();
t.afterCommit(() => {
  // Your logic
});
await t.commit();

The callback passed to afterCommit can be async. In this case:

    For a managed transaction: the sequelize.transaction call will wait for it before settling;
    For an unmanaged transaction: the t.commit call will wait for it before settling.

Notes:

    The afterCommit hook is not raised if the transaction is rolled back;
    The afterCommit hook does not modify the return value of the transaction (unlike most hooks)

You can use the afterCommit hook in conjunction with model hooks to know when a instance is saved and available outside of a transaction

User.afterSave((instance, options) => {
  if (options.transaction) {
    // Save done within a transaction, wait until transaction is committed to
    // notify listeners the instance has been saved
    options.transaction.afterCommit(() => /* Notify */)
    return;
  }
  // Save done outside a transaction, safe for callers to fetch the updated model
  // Notify
});

Locks

Queries within a transaction can be performed with locks:

return User.findAll({
  limit: 1,
  lock: true,
  transaction: t1
});

Queries within a transaction can skip locked rows:

return User.findAll({
  limit: 1,
  lock: true,
  skipLocked: true,
  transaction: t2
});


Hooks
--------------------------------------------------------------------------------

Hooks (also known as lifecycle events), are functions which are called before and after calls in sequelize are executed. For example, if you want to always set a value on a model before saving it, you can add a beforeUpdate hook.

Note: You can't use hooks with instances. Hooks are used with models.
Available hooks

Sequelize provides a lot of hooks. The full list can be found in directly in the source code - lib/hooks.js.
Hooks firing order

The diagram below shows the firing order for the most common hooks.

Note: this list is not exhaustive.

(1)
  beforeBulkCreate(instances, options)
  beforeBulkDestroy(options)
  beforeBulkUpdate(options)
(2)
  beforeValidate(instance, options)

[... validation happens ...]

(3)
  afterValidate(instance, options)
  validationFailed(instance, options, error)
(4)
  beforeCreate(instance, options)
  beforeDestroy(instance, options)
  beforeUpdate(instance, options)
  beforeSave(instance, options)
  beforeUpsert(values, options)

[... creation/update/destruction happens ...]

(5)
  afterCreate(instance, options)
  afterDestroy(instance, options)
  afterUpdate(instance, options)
  afterSave(instance, options)
  afterUpsert(created, options)
(6)
  afterBulkCreate(instances, options)
  afterBulkDestroy(options)
  afterBulkUpdate(options)

Declaring Hooks

Arguments to hooks are passed by reference. This means, that you can change the values, and this will be reflected in the insert / update statement. A hook may contain async actions - in this case the hook function should return a promise.

There are currently three ways to programmatically add hooks:

// Method 1 via the .init() method
class User extends Model {}
User.init({
  username: DataTypes.STRING,
  mood: {
    type: DataTypes.ENUM,
    values: ['happy', 'sad', 'neutral']
  }
}, {
  hooks: {
    beforeValidate: (user, options) => {
      user.mood = 'happy';
    },
    afterValidate: (user, options) => {
      user.username = 'Toni';
    }
  },
  sequelize
});

// Method 2 via the .addHook() method
User.addHook('beforeValidate', (user, options) => {
  user.mood = 'happy';
});

User.addHook('afterValidate', 'someCustomName', (user, options) => {
  return Promise.reject(new Error("I'm afraid I can't let you do that!"));
});

// Method 3 via the direct method
User.beforeCreate(async (user, options) => {
  const hashedPassword = await hashPassword(user.password);
  user.password = hashedPassword;
});

User.afterValidate('myHookAfter', (user, options) => {
  user.username = 'Toni';
});

Removing hooks

Only a hook with name param can be removed.

class Book extends Model {}
Book.init({
  title: DataTypes.STRING
}, { sequelize });

Book.addHook('afterCreate', 'notifyUsers', (book, options) => {
  // ...
});

Book.removeHook('afterCreate', 'notifyUsers');

You can have many hooks with same name. Calling .removeHook() will remove all of them.
Global / universal hooks

Global hooks are hooks that are run for all models. They are especially useful for plugins and can define behaviours that you want for all your models, for example to allow customization on timestamps using sequelize.define on your models:

const User = sequelize.define('User', {}, {
    tableName: 'users',
    hooks : {
        beforeCreate : (record, options) => {
            record.dataValues.createdAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
            record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
        },
        beforeUpdate : (record, options) => {
            record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
        }
    }
});

They can be defined in many ways, which have slightly different semantics:
Default Hooks (on Sequelize constructor options)

const sequelize = new Sequelize(..., {
  define: {
    hooks: {
      beforeCreate() {
        // Do stuff
      }
    }
  }
});

This adds a default hook to all models, which is run if the model does not define its own beforeCreate hook:

const User = sequelize.define('User', {});
const Project = sequelize.define('Project', {}, {
  hooks: {
    beforeCreate() {
      // Do other stuff
    }
  }
});

await User.create({});    // Runs the global hook
await Project.create({}); // Runs its own hook (because the global hook is overwritten)

Permanent Hooks (with sequelize.addHook)

sequelize.addHook('beforeCreate', () => {
  // Do stuff
});

This hook is always run, whether or not the model specifies its own beforeCreate hook. Local hooks are always run before global hooks:

const User = sequelize.define('User', {});
const Project = sequelize.define('Project', {}, {
  hooks: {
    beforeCreate() {
      // Do other stuff
    }
  }
});

await User.create({});    // Runs the global hook
await Project.create({}); // Runs its own hook, followed by the global hook

Permanent hooks may also be defined in the options passed to the Sequelize constructor:

new Sequelize(..., {
  hooks: {
    beforeCreate() {
      // do stuff
    }
  }
});

Note that the above is not the same as the Default Hooks mentioned above. That one uses the define option of the constructor. This one does not.
Connection Hooks

Sequelize provides four hooks that are executed immediately before and after a database connection is obtained or released:

    sequelize.beforeConnect(callback)
        The callback has the form async (config) => /* ... */
    sequelize.afterConnect(callback)
        The callback has the form async (connection, config) => /* ... */
    sequelize.beforeDisconnect(callback)
        The callback has the form async (connection) => /* ... */
    sequelize.afterDisconnect(callback)
        The callback has the form async (connection) => /* ... */

These hooks can be useful if you need to asynchronously obtain database credentials, or need to directly access the low-level database connection after it has been created.

For example, we can asynchronously obtain a database password from a rotating token store, and mutate Sequelize's configuration object with the new credentials:

sequelize.beforeConnect(async (config) => {
  config.password = await getAuthToken();
});

These hooks may only be declared as a permanent global hook, as the connection pool is shared by all models.
Instance hooks

The following hooks will emit whenever you're editing a single object:

    beforeValidate
    afterValidate / validationFailed
    beforeCreate / beforeUpdate / beforeSave / beforeDestroy
    afterCreate / afterUpdate / afterSave / afterDestroy

User.beforeCreate(user => {
  if (user.accessLevel > 10 && user.username !== "Boss") {
    throw new Error("You can't grant this user an access level above 10!");
  }
});

The following example will throw an error:

try {
  await User.create({ username: 'Not a Boss', accessLevel: 20 });
} catch (error) {
  console.log(error); // You can't grant this user an access level above 10!
};

The following example will be successful:

const user = await User.create({ username: 'Boss', accessLevel: 20 });
console.log(user); // user object with username 'Boss' and accessLevel of 20

Model hooks

Sometimes you'll be editing more than one record at a time by using methods like bulkCreate, update and destroy. The following hooks will emit whenever you're using one of those methods:

    YourModel.beforeBulkCreate(callback)
        The callback has the form (instances, options) => /* ... */
    YourModel.beforeBulkUpdate(callback)
        The callback has the form (options) => /* ... */
    YourModel.beforeBulkDestroy(callback)
        The callback has the form (options) => /* ... */
    YourModel.afterBulkCreate(callback)
        The callback has the form (instances, options) => /* ... */
    YourModel.afterBulkUpdate(callback)
        The callback has the form (options) => /* ... */
    YourModel.afterBulkDestroy(callback)
        The callback has the form (options) => /* ... */

Note: methods like bulkCreate do not emit individual hooks by default - only the bulk hooks. However, if you want individual hooks to be emitted as well, you can pass the { individualHooks: true } option to the query call. However, this can drastically impact performance, depending on the number of records involved (since, among other things, all instances will be loaded into memory). Examples:

await Model.destroy({
  where: { accessLevel: 0 },
  individualHooks: true
});
// This will select all records that are about to be deleted and emit `beforeDestroy` and `afterDestroy` on each instance.

await Model.update({ username: 'Tony' }, {
  where: { accessLevel: 0 },
  individualHooks: true
});
// This will select all records that are about to be updated and emit `beforeUpdate` and `afterUpdate` on each instance.

If you use Model.bulkCreate(...) with the updateOnDuplicate option, changes made in the hook to fields that aren't given in the updateOnDuplicate array will not be persisted to the database. However it is possible to change the updateOnDuplicate option inside the hook if this is what you want.

User.beforeBulkCreate((users, options) => {
  for (const user of users) {
    if (user.isMember) {
      user.memberSince = new Date();
    }
  }

  // Add `memberSince` to updateOnDuplicate otherwise it won't be persisted
  if (options.updateOnDuplicate && !options.updateOnDuplicate.includes('memberSince')) {
    options.updateOnDuplicate.push('memberSince');
  }
});

// Bulk updating existing users with updateOnDuplicate option
await Users.bulkCreate([
  { id: 1, isMember: true },
  { id: 2, isMember: false }
], {
  updateOnDuplicate: ['isMember']
});

Associations

For the most part hooks will work the same for instances when being associated.
One-to-One and One-to-Many associations

    When using add/set mixin methods the beforeUpdate and afterUpdate hooks will run.

    The beforeDestroy and afterDestroy hooks will only be called on associations that have onDelete: 'CASCADE' and hooks: true. For example:

class Projects extends Model {}
Projects.init({
  title: DataTypes.STRING
}, { sequelize });

class Tasks extends Model {}
Tasks.init({
  title: DataTypes.STRING
}, { sequelize });

Projects.hasMany(Tasks, { onDelete: 'CASCADE', hooks: true });
Tasks.belongsTo(Projects);

This code will run beforeDestroy and afterDestroy hooks on the Tasks model.

Sequelize, by default, will try to optimize your queries as much as possible. When calling cascade on delete, Sequelize will simply execute:

DELETE FROM `table` WHERE associatedIdentifier = associatedIdentifier.primaryKey

However, adding hooks: true explicitly tells Sequelize that optimization is not of your concern. Then, Sequelize will first perform a SELECT on the associated objects and destroy each instance, one by one, in order to be able to properly call the hooks (with the right parameters).
Many-to-Many associations

    When using add mixin methods for belongsToMany relationships (that will add one or more records to the junction table) the beforeBulkCreate and afterBulkCreate hooks in the junction model will run.
        If { individualHooks: true } was passed to the call, then each individual hook will also run.

    When using remove mixin methods for belongsToMany relationships (that will remove one or more records to the junction table) the beforeBulkDestroy and afterBulkDestroy hooks in the junction model will run.
        If { individualHooks: true } was passed to the call, then each individual hook will also run.

If your association is Many-to-Many, you may be interested in firing hooks on the through model when using the remove call. Internally, sequelize is using Model.destroy resulting in calling the bulkDestroy instead of the before/afterDestroy hooks on each through instance.
Hooks and Transactions

Many model operations in Sequelize allow you to specify a transaction in the options parameter of the method. If a transaction is specified in the original call, it will be present in the options parameter passed to the hook function. For example, consider the following snippet:

User.addHook('afterCreate', async (user, options) => {
  // We can use `options.transaction` to perform some other call
  // using the same transaction of the call that triggered this hook
  await User.update({ mood: 'sad' }, {
    where: {
      id: user.id
    },
    transaction: options.transaction
  });
});

await sequelize.transaction(async t => {
  await User.create({
    username: 'someguy',
    mood: 'happy'
  }, {
    transaction: t
  });
});

If we had not included the transaction option in our call to User.update in the preceding code, no change would have occurred, since our newly created user does not exist in the database until the pending transaction has been committed.
Internal Transactions

It is very important to recognize that sequelize may make use of transactions internally for certain operations such as Model.findOrCreate. If your hook functions execute read or write operations that rely on the object's presence in the database, or modify the object's stored values like the example in the preceding section, you should always specify { transaction: options.transaction }:

    If a transaction was used, then { transaction: options.transaction } will ensure it is used again;
    Otherwise, { transaction: options.transaction } will be equivalent to { transaction: undefined }, which won't use a transaction (which is ok).

This way your hooks will always behave correctly.


Query Interface
--------------------------------------------------------------------------------

An instance of Sequelize uses something called Query Interface to communicate to the database in a dialect-agnostic way. Most of the methods you've learned in this manual are implemented with the help of several methods from the query interface.

The methods from the query interface are therefore lower-level methods; you should use them only if you do not find another way to do it with higher-level APIs from Sequelize. They are, of course, still higher-level than running raw queries directly (i.e., writing SQL by hand).

This guide shows a few examples, but for the full list of what it can do, and for detailed usage of each method, check the QueryInterface API.
Obtaining the query interface

From now on, we will call queryInterface the singleton instance of the QueryInterface class, which is available on your Sequelize instance:

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(/* ... */);
const queryInterface = sequelize.getQueryInterface();

Creating a table

queryInterface.createTable('Person', {
  name: DataTypes.STRING,
  isBetaMember: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

Generated SQL (using SQLite):

CREATE TABLE IF NOT EXISTS `Person` (
  `name` VARCHAR(255),
  `isBetaMember` TINYINT(1) NOT NULL DEFAULT 0
);

Note: Consider defining a Model instead and calling YourModel.sync() instead, which is a higher-level approach.
Adding a column to a table

queryInterface.addColumn('Person', 'petName', { type: DataTypes.STRING });

Generated SQL (using SQLite):

ALTER TABLE `Person` ADD `petName` VARCHAR(255);

Changing the datatype of a column

queryInterface.changeColumn('Person', 'foo', {
  type: DataTypes.FLOAT,
  defaultValue: 3.14,
  allowNull: false
});

Generated SQL (using MySQL):

ALTER TABLE `Person` CHANGE `foo` `foo` FLOAT NOT NULL DEFAULT 3.14;

Removing a column

queryInterface.removeColumn('Person', 'petName', { /* query options */ });

Generated SQL (using PostgreSQL):

ALTER TABLE "public"."Person" DROP COLUMN "petName";

Changing and removing columns in SQLite

SQLite does not support directly altering and removing columns. However, Sequelize will try to work around this by recreating the whole table with the help of a backup table, inspired by these instructions.

For example:

// Assuming we have a table in SQLite created as follows:
queryInterface.createTable('Person', {
  name: DataTypes.STRING,
  isBetaMember: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  petName: DataTypes.STRING,
  foo: DataTypes.INTEGER
});

// And we change a column:
queryInterface.changeColumn('Person', 'foo', {
  type: DataTypes.FLOAT,
  defaultValue: 3.14,
  allowNull: false
});

The following SQL calls are generated for SQLite:

PRAGMA TABLE_INFO(`Person`);

CREATE TABLE IF NOT EXISTS `Person_backup` (
  `name` VARCHAR(255),
  `isBetaMember` TINYINT(1) NOT NULL DEFAULT 0,
  `foo` FLOAT NOT NULL DEFAULT '3.14',
  `petName` VARCHAR(255)
);

INSERT INTO `Person_backup`
  SELECT
    `name`,
    `isBetaMember`,
    `foo`,
    `petName`
  FROM `Person`;

DROP TABLE `Person`;

CREATE TABLE IF NOT EXISTS `Person` (
  `name` VARCHAR(255),
  `isBetaMember` TINYINT(1) NOT NULL DEFAULT 0,
  `foo` FLOAT NOT NULL DEFAULT '3.14',
  `petName` VARCHAR(255)
);

INSERT INTO `Person`
  SELECT
    `name`,
    `isBetaMember`,
    `foo`,
    `petName`
  FROM `Person_backup`;

DROP TABLE `Person_backup`;

Other

As mentioned in the beginning of this guide, there is a lot more to the Query Interface available in Sequelize! Check the QueryInterface API for a full list of what can be done.


Naming Strategies
--------------------------------------------------------------------------------

The underscored option

Sequelize provides the underscored option for a model. When true, this option will set the field option on all attributes to the snake_case version of its name. This also applies to foreign keys automatically generated by associations and other automatically generated fields. Example:

const User = sequelize.define('user', { username: Sequelize.STRING }, {
  underscored: true
});
const Task = sequelize.define('task', { title: Sequelize.STRING }, {
  underscored: true
});
User.hasMany(Task);
Task.belongsTo(User);

Above we have the models User and Task, both using the underscored option. We also have a One-to-Many relationship between them. Also, recall that since timestamps is true by default, we should expect the createdAt and updatedAt fields to be automatically created as well.

Without the underscored option, Sequelize would automatically define:

    A createdAt attribute for each model, pointing to a column named createdAt in each table
    An updatedAt attribute for each model, pointing to a column named updatedAt in each table
    A userId attribute in the Task model, pointing to a column named userId in the task table

With the underscored option enabled, Sequelize will instead define:

    A createdAt attribute for each model, pointing to a column named created_at in each table
    An updatedAt attribute for each model, pointing to a column named updated_at in each table
    A userId attribute in the Task model, pointing to a column named user_id in the task table

Note that in both cases the fields are still camelCase in the JavaScript side; this option only changes how these fields are mapped to the database itself. The field option of every attribute is set to their snake_case version, but the attribute itself remains camelCase.

This way, calling sync() on the above code will generate the following:

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL,
  "username" VARCHAR(255),
  "created_at" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE IF NOT EXISTS "tasks" (
  "id" SERIAL,
  "title" VARCHAR(255),
  "created_at" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL,
  "user_id" INTEGER REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  PRIMARY KEY ("id")
);

Singular vs. Plural

At a first glance, it can be confusing whether the singular form or plural form of a name shall be used around in Sequelize. This section aims at clarifying that a bit.

Recall that Sequelize uses a library called inflection under the hood, so that irregular plurals (such as person -> people) are computed correctly. However, if you're working in another language, you may want to define the singular and plural forms of names directly; sequelize allows you to do this with some options.
When defining models

Models should be defined with the singular form of a word. Example:

sequelize.define('foo', { name: DataTypes.STRING });

Above, the model name is foo (singular), and the respective table name is foos, since Sequelize automatically gets the plural for the table name.
When defining a reference key in a model

sequelize.define('foo', {
  name: DataTypes.STRING,
  barId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "bars",
      key: "id"
    },
    onDelete: "CASCADE"
  },
});

In the above example we are manually defining a key that references another model. It's not usual to do this, but if you have to, you should use the table name there. This is because the reference is created upon the referencced table name. In the example above, the plural form was used (bars), assuming that the bar model was created with the default settings (making its underlying table automatically pluralized).
When retrieving data from eager loading

When you perform an include in a query, the included data will be added to an extra field in the returned objects, according to the following rules:

    When including something from a single association (hasOne or belongsTo) - the field name will be the singular version of the model name;
    When including something from a multiple association (hasMany or belongsToMany) - the field name will be the plural form of the model.

In short, the name of the field will take the most logical form in each situation.

Examples:

// Assuming Foo.hasMany(Bar)
const foo = Foo.findOne({ include: Bar });
// foo.bars will be an array
// foo.bar will not exist since it doens't make sense

// Assuming Foo.hasOne(Bar)
const foo = Foo.findOne({ include: Bar });
// foo.bar will be an object (possibly null if there is no associated model)
// foo.bars will not exist since it doens't make sense

// And so on.

Overriding singulars and plurals when defining aliases

When defining an alias for an association, instead of using simply { as: 'myAlias' }, you can pass an object to specify the singular and plural forms:

Project.belongsToMany(User, {
  as: {
    singular: 'líder',
    plural: 'líderes'
  }
});

If you know that a model will always use the same alias in associations, you can provide the singular and plural forms directly to the model itself:

const User = sequelize.define('user', { /* ... */ }, {
  name: {
    singular: 'líder',
    plural: 'líderes',
  }
});
Project.belongsToMany(User);

The mixins added to the user instances will use the correct forms. For example, instead of project.addUser(), Sequelize will provide project.getLíder(). Also, instead of project.setUsers(), Sequelize will provide project.setLíderes().

Note: recall that using as to change the name of the association will also change the name of the foreign key. Therefore it is recommended to also specify the foreign key(s) involved directly in this case.

// Example of possible mistake
Invoice.belongsTo(Subscription, { as: 'TheSubscription' });
Subscription.hasMany(Invoice);

The first call above will establish a foreign key called theSubscriptionId on Invoice. However, the second call will also establish a foreign key on Invoice (since as we know, hasMany calls places foreign keys in the target model) - however, it will be named subscriptionId. This way you will have both subscriptionId and theSubscriptionId columns.

The best approach is to choose a name for the foreign key and place it explicitly in both calls. For example, if subscription_id was chosen:

// Fixed example
Invoice.belongsTo(Subscription, { as: 'TheSubscription', foreignKey: 'subscription_id' });
Subscription.hasMany(Invoice, { foreignKey: 'subscription_id' });


Scopes
--------------------------------------------------------------------------------

Scopes are used to help you reuse code. You can define commonly used queries, specifying options such as where, include, limit, etc.

This guide concerns model scopes. You might also be interested in the guide for association scopes, which are similar but not the same thing.
Definition

Scopes are defined in the model definition and can be finder objects, or functions returning finder objects - except for the default scope, which can only be an object:

class Project extends Model {}
Project.init({
  // Attributes
}, {
  defaultScope: {
    where: {
      active: true
    }
  },
  scopes: {
    deleted: {
      where: {
        deleted: true
      }
    },
    activeUsers: {
      include: [
        { model: User, where: { active: true } }
      ]
    },
    random() {
      return {
        where: {
          someNumber: Math.random()
        }
      }
    },
    accessLevel(value) {
      return {
        where: {
          accessLevel: {
            [Op.gte]: value
          }
        }
      }
    },
    sequelize,
    modelName: 'project'
  }
});

You can also add scopes after a model has been defined by calling YourModel.addScope. This is especially useful for scopes with includes, where the model in the include might not be defined at the time the other model is being defined.

The default scope is always applied. This means, that with the model definition above, Project.findAll() will create the following query:

SELECT * FROM projects WHERE active = true

The default scope can be removed by calling .unscoped(), .scope(null), or by invoking another scope:

await Project.scope('deleted').findAll(); // Removes the default scope

SELECT * FROM projects WHERE deleted = true

It is also possible to include scoped models in a scope definition. This allows you to avoid duplicating include, attributes or where definitions. Using the above example, and invoking the active scope on the included User model (rather than specifying the condition directly in that include object):

// The `activeUsers` scope defined in the example above could also have been defined this way:
Project.addScope('activeUsers', {
  include: [
    { model: User.scope('active') }
  ]
});

Usage

Scopes are applied by calling .scope on the model definition, passing the name of one or more scopes. .scope returns a fully functional model instance with all the regular methods: .findAll, .update, .count, .destroy etc. You can save this model instance and reuse it later:

const DeletedProjects = Project.scope('deleted');
await DeletedProjects.findAll();

// The above is equivalent to:
await Project.findAll({
  where: {
    deleted: true
  }
});

Scopes apply to .find, .findAll, .count, .update, .increment and .destroy.

Scopes which are functions can be invoked in two ways. If the scope does not take any arguments it can be invoked as normally. If the scope takes arguments, pass an object:

await Project.scope('random', { method: ['accessLevel', 19] }).findAll();

Generated SQL:

SELECT * FROM projects WHERE someNumber = 42 AND accessLevel >= 19

Merging

Several scopes can be applied simultaneously by passing an array of scopes to .scope, or by passing the scopes as consecutive arguments.

// These two are equivalent
await Project.scope('deleted', 'activeUsers').findAll();
await Project.scope(['deleted', 'activeUsers']).findAll();

Generated SQL:

SELECT * FROM projects
INNER JOIN users ON projects.userId = users.id
WHERE projects.deleted = true
AND users.active = true

If you want to apply another scope alongside the default scope, pass the key defaultScope to .scope:

await Project.scope('defaultScope', 'deleted').findAll();

Generated SQL:

SELECT * FROM projects WHERE active = true AND deleted = true

When invoking several scopes, keys from subsequent scopes will overwrite previous ones (similarly to Object.assign), except for where and include, which will be merged. Consider two scopes:

YourMode.addScope('scope1', {
  where: {
    firstName: 'bob',
    age: {
      [Op.gt]: 20
    }
  },
  limit: 2
});
YourMode.addScope('scope2', {
  where: {
    age: {
      [Op.gt]: 30
    }
  },
  limit: 10
});

Using .scope('scope1', 'scope2') will yield the following WHERE clause:

WHERE firstName = 'bob' AND age > 30 LIMIT 10

Note how limit and age are overwritten by scope2, while firstName is preserved. The limit, offset, order, paranoid, lock and raw fields are overwritten, while where is shallowly merged (meaning that identical keys will be overwritten). The merge strategy for include will be discussed later on.

Note that attributes keys of multiple applied scopes are merged in such a way that attributes.exclude are always preserved. This allows merging several scopes and never leaking sensitive fields in final scope.

The same merge logic applies when passing a find object directly to findAll (and similar finders) on a scoped model:

Project.scope('deleted').findAll({
  where: {
    firstName: 'john'
  }
})

Generated where clause:

WHERE deleted = true AND firstName = 'john'

Here the deleted scope is merged with the finder. If we were to pass where: { firstName: 'john', deleted: false } to the finder, the deleted scope would be overwritten.
Merging includes

Includes are merged recursively based on the models being included. This is a very powerful merge, added on v5, and is better understood with an example.

Consider the models Foo, Bar, Baz and Qux, with One-to-Many associations as follows:

const Foo = sequelize.define('Foo', { name: Sequelize.STRING });
const Bar = sequelize.define('Bar', { name: Sequelize.STRING });
const Baz = sequelize.define('Baz', { name: Sequelize.STRING });
const Qux = sequelize.define('Qux', { name: Sequelize.STRING });
Foo.hasMany(Bar, { foreignKey: 'fooId' });
Bar.hasMany(Baz, { foreignKey: 'barId' });
Baz.hasMany(Qux, { foreignKey: 'bazId' });

Now, consider the following four scopes defined on Foo:

Foo.addScope('includeEverything', {
  include: {
    model: Bar,
    include: [{
      model: Baz,
      include: Qux
    }]
  }
});

Foo.addScope('limitedBars', {
  include: [{
    model: Bar,
    limit: 2
  }]
});

Foo.addScope('limitedBazs', {
  include: [{
    model: Bar,
    include: [{
      model: Baz,
      limit: 2
    }]
  }]
});

Foo.addScope('excludeBazName', {
  include: [{
    model: Bar,
    include: [{
      model: Baz,
      attributes: {
        exclude: ['name']
      }
    }]
  }]
});

These four scopes can be deeply merged easily, for example by calling Foo.scope('includeEverything', 'limitedBars', 'limitedBazs', 'excludeBazName').findAll(), which would be entirely equivalent to calling the following:

await Foo.findAll({
  include: {
    model: Bar,
    limit: 2,
    include: [{
      model: Baz,
      limit: 2,
      attributes: {
        exclude: ['name']
      },
      include: Qux
    }]
  }
});

// The above is equivalent to:
await Foo.scope([
  'includeEverything',
  'limitedBars',
  'limitedBazs',
  'excludeBazName'
]).findAll();

Observe how the four scopes were merged into one. The includes of scopes are merged based on the model being included. If one scope includes model A and another includes model B, the merged result will include both models A and B. On the other hand, if both scopes include the same model A, but with different options (such as nested includes or other attributes), those will be merged recursively, as shown above.

The merge illustrated above works in the exact same way regardless of the order applied to the scopes. The order would only make a difference if a certain option was set by two different scopes - which is not the case of the above example, since each scope does a different thing.

This merge strategy also works in the exact same way with options passed to .findAll, .findOne and the like.


Sub Queries
--------------------------------------------------------------------------------

Consider you have two models, Post and Reaction, with a One-to-Many relationship set up, so that one post has many reactions:

const Post = sequelize.define('post', {
    content: DataTypes.STRING
}, { timestamps: false });

const Reaction = sequelize.define('reaction', {
    type: DataTypes.STRING
}, { timestamps: false });

Post.hasMany(Reaction);
Reaction.belongsTo(Post);

Note: we have disabled timestamps just to have shorter queries for the next examples.

Let's fill our tables with some data:

async function makePostWithReactions(content, reactionTypes) {
    const post = await Post.create({ content });
    await Reaction.bulkCreate(
        reactionTypes.map(type => ({ type, postId: post.id }))
    );
    return post;
}

await makePostWithReactions('Hello World', [
    'Like', 'Angry', 'Laugh', 'Like', 'Like', 'Angry', 'Sad', 'Like'
]);
await makePostWithReactions('My Second Post', [
    'Laugh', 'Laugh', 'Like', 'Laugh'
]);

Now, we are ready for examples of the power of subqueries.

Let's say we wanted to compute via SQL a laughReactionsCount for each post. We can achieve that with a sub-query, such as the following:

SELECT
    *,
    (
        SELECT COUNT(*)
        FROM reactions AS reaction
        WHERE
            reaction.postId = post.id
            AND
            reaction.type = "Laugh"
    ) AS laughReactionsCount
FROM posts AS post

If we run the above raw SQL query through Sequelize, we get:

[
  {
    "id": 1,
    "content": "Hello World",
    "laughReactionsCount": 1
  },
  {
    "id": 2,
    "content": "My Second Post",
    "laughReactionsCount": 3
  }
]

So how can we achieve that with more help from Sequelize, without having to write the whole raw query by hand?

The answer: by combining the attributes option of the finder methods (such as findAll) with the sequelize.literal utility function, that allows you to directly insert arbitrary content into the query without any automatic escaping.

This means that Sequelize will help you with the main, larger query, but you will still have to write that sub-query by yourself:

Post.findAll({
    attributes: {
        include: [
            [
                // Note the wrapping parentheses in the call below!
                sequelize.literal(`(
                    SELECT COUNT(*)
                    FROM reactions AS reaction
                    WHERE
                        reaction.postId = post.id
                        AND
                        reaction.type = "Laugh"
                )`),
                'laughReactionsCount'
            ]
        ]
    }
});

Important Note: Since sequelize.literal inserts arbitrary content without escaping to the query, it deserves very special attention since it may be a source of (major) security vulnerabilities. It should not be used on user-generated content. However, here, we are using sequelize.literal with a fixed string, carefully written by us (the coders). This is ok, since we know what we are doing.

The above gives the following output:

[
  {
    "id": 1,
    "content": "Hello World",
    "laughReactionsCount": 1
  },
  {
    "id": 2,
    "content": "My Second Post",
    "laughReactionsCount": 3
  }
]

Success!
Using sub-queries for complex ordering

This idea can be used to enable complex ordering, such as ordering posts by the number of laugh reactions they have:

Post.findAll({
    attributes: {
        include: [
            [
                sequelize.literal(`(
                    SELECT COUNT(*)
                    FROM reactions AS reaction
                    WHERE
                        reaction.postId = post.id
                        AND
                        reaction.type = "Laugh"
                )`),
                'laughReactionsCount'
            ]
        ]
    },
    order: [
        [sequelize.literal('laughReactionsCount'), 'DESC']
    ]
});

Result:

[
  {
    "id": 2,
    "content": "My Second Post",
    "laughReactionsCount": 3
  },
  {
    "id": 1,
    "content": "Hello World",
    "laughReactionsCount": 1
  }
]


Other Data Types
--------------------------------------------------------------------------------

Apart from the most common data types mentioned in the Model Basics guide, Sequelize provides several other data types.
Ranges (PostgreSQL only)

DataTypes.RANGE(DataTypes.INTEGER)    // int4range
DataTypes.RANGE(DataTypes.BIGINT)     // int8range
DataTypes.RANGE(DataTypes.DATE)       // tstzrange
DataTypes.RANGE(DataTypes.DATEONLY)   // daterange
DataTypes.RANGE(DataTypes.DECIMAL)    // numrange

Since range types have extra information for their bound inclusion/exclusion it's not very straightforward to just use a tuple to represent them in javascript.

When supplying ranges as values you can choose from the following APIs:

// defaults to inclusive lower bound, exclusive upper bound
const range = [
  new Date(Date.UTC(2016, 0, 1)),
  new Date(Date.UTC(2016, 1, 1))
];
// '["2016-01-01 00:00:00+00:00", "2016-02-01 00:00:00+00:00")'

// control inclusion
const range = [
  { value: new Date(Date.UTC(2016, 0, 1)), inclusive: false },
  { value: new Date(Date.UTC(2016, 1, 1)), inclusive: true },
];
// '("2016-01-01 00:00:00+00:00", "2016-02-01 00:00:00+00:00"]'

// composite form
const range = [
  { value: new Date(Date.UTC(2016, 0, 1)), inclusive: false },
  new Date(Date.UTC(2016, 1, 1)),
];
// '("2016-01-01 00:00:00+00:00", "2016-02-01 00:00:00+00:00")'

const Timeline = sequelize.define('Timeline', {
  range: DataTypes.RANGE(DataTypes.DATE)
});

await Timeline.create({ range });

However, retrieved range values always come in the form of an array of objects. For example, if the stored value is ("2016-01-01 00:00:00+00:00", "2016-02-01 00:00:00+00:00"], after a finder query you will get:

[
  { value: Date, inclusive: false },
  { value: Date, inclusive: true }
]

You will need to call reload() after updating an instance with a range type or use the returning: true option.
Special Cases

// empty range:
Timeline.create({ range: [] }); // range = 'empty'

// Unbounded range:
Timeline.create({ range: [null, null] }); // range = '[,)'
// range = '[,"2016-01-01 00:00:00+00:00")'
Timeline.create({ range: [null, new Date(Date.UTC(2016, 0, 1))] });

// Infinite range:
// range = '[-infinity,"2016-01-01 00:00:00+00:00")'
Timeline.create({ range: [-Infinity, new Date(Date.UTC(2016, 0, 1))] });

BLOBs

DataTypes.BLOB                // BLOB (bytea for PostgreSQL)
DataTypes.BLOB('tiny')        // TINYBLOB (bytea for PostgreSQL)
DataTypes.BLOB('medium')      // MEDIUMBLOB (bytea for PostgreSQL)
DataTypes.BLOB('long')        // LONGBLOB (bytea for PostgreSQL)

The blob datatype allows you to insert data both as strings and as buffers. However, when a blob is retrieved from database with Sequelize, it will always be retrieved as a buffer.
ENUMs

The ENUM is a data type that accepts only a few values, specified as a list.

DataTypes.ENUM('foo', 'bar') // An ENUM with allowed values 'foo' and 'bar'

ENUMs can also be specified with the values field of the column definition, as follows:

sequelize.define('foo', {
  states: {
    type: DataTypes.ENUM,
    values: ['active', 'pending', 'deleted']
  }
});

JSON (SQLite, MySQL, MariaDB and PostgreSQL only)

The DataTypes.JSON data type is only supported for SQLite, MySQL, MariaDB and PostgreSQL. However, there is a minimum support for MSSQL (see below).
Note for PostgreSQL

The JSON data type in PostgreSQL stores the value as plain text, as opposed to binary representation. If you simply want to store and retrieve a JSON representation, using JSON will take less disk space and less time to build from its input representation. However, if you want to do any operations on the JSON value, you should prefer the JSONB data type described below.
JSONB (PostgreSQL only)

PostgreSQL also supports a JSONB data type: DataTypes.JSONB. It can be queried in three different ways:

// Nested object
await Foo.findOne({
  where: {
    meta: {
      video: {
        url: {
          [Op.ne]: null
        }
      }
    }
  }
});

// Nested key
await Foo.findOne({
  where: {
    "meta.audio.length": {
      [Op.gt]: 20
    }
  }
});

// Containment
await Foo.findOne({
  where: {
    meta: {
      [Op.contains]: {
        site: {
          url: 'http://google.com'
        }
      }
    }
  }
});

MSSQL

MSSQL does not have a JSON data type, however it does provide some support for JSON stored as strings through certain functions since SQL Server 2016. Using these functions, you will be able to query the JSON stored in the string, but any returned values will need to be parsed seperately.

// ISJSON - to test if a string contains valid JSON
await User.findAll({
  where: sequelize.where(sequelize.fn('ISJSON', sequelize.col('userDetails')), 1)
})

// JSON_VALUE - extract a scalar value from a JSON string
await User.findAll({
  attributes: [[ sequelize.fn('JSON_VALUE', sequelize.col('userDetails'), '$.address.Line1'), 'address line 1']]
})

// JSON_VALUE - query a scalar value from a JSON string
await User.findAll({
  where: sequelize.where(sequelize.fn('JSON_VALUE', sequelize.col('userDetails'), '$.address.Line1'), '14, Foo Street')
})

// JSON_QUERY - extract an object or array
await User.findAll({
  attributes: [[ sequelize.fn('JSON_QUERY', sequelize.col('userDetails'), '$.address'), 'full address']]
})

Others

DataTypes.ARRAY(/* DataTypes.SOMETHING */)  // Defines an array of DataTypes.SOMETHING. PostgreSQL only.

DataTypes.CIDR                        // CIDR                  PostgreSQL only
DataTypes.INET                        // INET                  PostgreSQL only
DataTypes.MACADDR                     // MACADDR               PostgreSQL only

DataTypes.GEOMETRY                    // Spatial column. PostgreSQL (with PostGIS) or MySQL only.
DataTypes.GEOMETRY('POINT')           // Spatial column with geometry type. PostgreSQL (with PostGIS) or MySQL only.
DataTypes.GEOMETRY('POINT', 4326)     // Spatial column with geometry type and SRID. PostgreSQL (with PostGIS) or MySQL only.


Constraints & Circularities
--------------------------------------------------------------------------------

Adding constraints between tables means that tables must be created in the database in a certain order, when using sequelize.sync. If Task has a reference to User, the User table must be created before the Task table can be created. This can sometimes lead to circular references, where Sequelize cannot find an order in which to sync. Imagine a scenario of documents and versions. A document can have multiple versions, and for convenience, a document has a reference to its current version.

const { Sequelize, Model, DataTypes } = require("sequelize");

class Document extends Model {}
Document.init({
    author: DataTypes.STRING
}, { sequelize, modelName: 'document' });

class Version extends Model {}
Version.init({
  timestamp: DataTypes.DATE
}, { sequelize, modelName: 'version' });

Document.hasMany(Version); // This adds documentId attribute to version
Document.belongsTo(Version, {
  as: 'Current',
  foreignKey: 'currentVersionId'
}); // This adds currentVersionId attribute to document

However, unfortunately the code above will result in the following error:

Cyclic dependency found. documents is dependent of itself. Dependency chain: documents -> versions => documents

In order to alleviate that, we can pass constraints: false to one of the associations:

Document.hasMany(Version);
Document.belongsTo(Version, {
  as: 'Current',
  foreignKey: 'currentVersionId',
  constraints: false
});

Which will allow us to sync the tables correctly:

CREATE TABLE IF NOT EXISTS "documents" (
  "id" SERIAL,
  "author" VARCHAR(255),
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "currentVersionId" INTEGER,
  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "versions" (
  "id" SERIAL,
  "timestamp" TIMESTAMP WITH TIME ZONE,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "documentId" INTEGER REFERENCES "documents" ("id") ON DELETE
  SET
    NULL ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

Enforcing a foreign key reference without constraints

Sometimes you may want to reference another table, without adding any constraints, or associations. In that case you can manually add the reference attributes to your schema definition, and mark the relations between them.

class Trainer extends Model {}
Trainer.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
}, { sequelize, modelName: 'trainer' });

// Series will have a trainerId = Trainer.id foreign reference key
// after we call Trainer.hasMany(series)
class Series extends Model {}
Series.init({
  title: Sequelize.STRING,
  subTitle: Sequelize.STRING,
  description: Sequelize.TEXT,
  // Set FK relationship (hasMany) with `Trainer`
  trainerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Trainer,
      key: 'id'
    }
  }
}, { sequelize, modelName: 'series' });

// Video will have seriesId = Series.id foreign reference key
// after we call Series.hasOne(Video)
class Video extends Model {}
Video.init({
  title: Sequelize.STRING,
  sequence: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  // set relationship (hasOne) with `Series`
  seriesId: {
    type: DataTypes.INTEGER,
    references: {
      model: Series, // Can be both a string representing the table name or a Sequelize model
      key: 'id'
    }
  }
}, { sequelize, modelName: 'video' });

Series.hasOne(Video);
Trainer.hasMany(Series);


Extending Data Types
--------------------------------------------------------------------------------

Most likely the type you are trying to implement is already included in DataTypes. If a new datatype is not included, this manual will show how to write it yourself.

Sequelize doesn't create new datatypes in the database. This tutorial explains how to make Sequelize recognize new datatypes and assumes that those new datatypes are already created in the database.

To extend Sequelize datatypes, do it before any Sequelize instance is created.
Example

In this example, we will create a type called SOMETYPE that replicates the built-in datatype DataTypes.INTEGER(11).ZEROFILL.UNSIGNED.

const { Sequelize, DataTypes, Utils } = require('Sequelize');
createTheNewDataType();
const sequelize = new Sequelize('sqlite::memory:');

function createTheNewDataType() {

  class SOMETYPE extends DataTypes.ABSTRACT {
    // Mandatory: complete definition of the new type in the database
    toSql() {
      return 'INTEGER(11) UNSIGNED ZEROFILL'
    }

    // Optional: validator function
    validate(value, options) {
      return (typeof value === 'number') && (!Number.isNaN(value));
    }

    // Optional: sanitizer
    _sanitize(value) {
      // Force all numbers to be positive
      return value < 0 ? 0 : Math.round(value);
    }

    // Optional: value stringifier before sending to database
    _stringify(value) {
      return value.toString();
    }

    // Optional: parser for values received from the database
    static parse(value) {
      return Number.parseInt(value);
    }
  }

  // Mandatory: set the type key
  SOMETYPE.prototype.key = SOMETYPE.key = 'SOMETYPE';

  // Mandatory: add the new type to DataTypes. Optionally wrap it on `Utils.classToInvokable` to
  // be able to use this datatype directly without having to call `new` on it.
  DataTypes.SOMETYPE = Utils.classToInvokable(SOMETYPE);

  // Optional: disable escaping after stringifier. Do this at your own risk, since this opens opportunity for SQL injections.
  // DataTypes.SOMETYPE.escape = false;

}

After creating this new datatype, you need to map this datatype in each database dialect and make some adjustments.
PostgreSQL

Let's say the name of the new datatype is pg_new_type in the postgres database. That name has to be mapped to DataTypes.SOMETYPE. Additionally, it is required to create a child postgres-specific datatype.

function createTheNewDataType() {
  // [...]

  const PgTypes = DataTypes.postgres;

  // Mandatory: map postgres datatype name
  DataTypes.SOMETYPE.types.postgres = ['pg_new_type'];

  // Mandatory: create a postgres-specific child datatype with its own parse
  // method. The parser will be dynamically mapped to the OID of pg_new_type.
  PgTypes.SOMETYPE = function SOMETYPE() {
    if (!(this instanceof PgTypes.SOMETYPE)) {
      return new PgTypes.SOMETYPE();
    }
    DataTypes.SOMETYPE.apply(this, arguments);
  }
  const util = require('util'); // Built-in Node package
  util.inherits(PgTypes.SOMETYPE, DataTypes.SOMETYPE);

  // Mandatory: create, override or reassign a postgres-specific parser
  // PgTypes.SOMETYPE.parse = value => value;
  PgTypes.SOMETYPE.parse = DataTypes.SOMETYPE.parse || x => x;

  // Optional: add or override methods of the postgres-specific datatype
  // like toSql, escape, validate, _stringify, _sanitize...

}

Ranges

After a new range type has been defined in postgres, it is trivial to add it to Sequelize.

In this example the name of the postgres range type is SOMETYPE_range and the name of the underlying postgres datatype is pg_new_type. The key of subtypes and castTypes is the key of the Sequelize datatype DataTypes.SOMETYPE.key, in lower case.

function createTheNewDataType() {
  // [...]

  // Add postgresql range, SOMETYPE comes from DataType.SOMETYPE.key in lower case
  DataTypes.RANGE.types.postgres.subtypes.SOMETYPE = 'SOMETYPE_range';
  DataTypes.RANGE.types.postgres.castTypes.SOMETYPE = 'pg_new_type';
}

The new range can be used in model definitions as DataTypes.RANGE(DataTypes.SOMETYPE) or DataTypes.RANGE(DataTypes.SOMETYPE).


Indexes
--------------------------------------------------------------------------------

Sequelize supports adding indexes to the model definition which will be created on sequelize.sync().

const User = sequelize.define('User', { /* attributes */ }, {
  indexes: [
    // Create a unique index on email
    {
      unique: true,
      fields: ['email']
    },

    // Creates a gin index on data with the jsonb_path_ops operator
    {
      fields: ['data'],
      using: 'gin',
      operator: 'jsonb_path_ops'
    },

    // By default index name will be [table]_[fields]
    // Creates a multi column partial index
    {
      name: 'public_by_author',
      fields: ['author', 'status'],
      where: {
        status: 'public'
      }
    },

    // A BTREE index with an ordered field
    {
      name: 'title_index',
      using: 'BTREE',
      fields: [
        'author',
        {
          name: 'title',
          collate: 'en_US',
          order: 'DESC',
          length: 5
        }
      ]
    }
  ]
});


Optimistic Locking
--------------------------------------------------------------------------------

Sequelize has built-in support for optimistic locking through a model instance version count.

Optimistic locking is disabled by default and can be enabled by setting the version property to true in a specific model definition or global model configuration. See model configuration for more details.

Optimistic locking allows concurrent access to model records for edits and prevents conflicts from overwriting data. It does this by checking whether another process has made changes to a record since it was read and throws an OptimisticLockError when a conflict is detected.


Read Replication
--------------------------------------------------------------------------------

Sequelize supports read replication, i.e. having multiple servers that you can connect to when you want to do a SELECT query. When you do read replication, you specify one or more servers to act as read replicas, and one server to act as the main writer, which handles all writes and updates and propagates them to the replicas (note that the actual replication process is not handled by Sequelize, but should be set up by database backend).

const sequelize = new Sequelize('database', null, null, {
  dialect: 'mysql',
  port: 3306,
  replication: {
    read: [
      { host: '8.8.8.8', username: 'read-1-username', password: process.env.READ_DB_1_PW },
      { host: '9.9.9.9', username: 'read-2-username', password: process.env.READ_DB_2_PW }
    ],
    write: { host: '1.1.1.1', username: 'write-username', password: process.env.WRITE_DB_PW }
  },
  pool: { // If you want to override the options used for the read/write pool you can do so here
    max: 20,
    idle: 30000
  },
})

If you have any general settings that apply to all replicas you do not need to provide them for each instance. In the code above, database name and port is propagated to all replicas. The same will happen for user and password, if you leave them out for any of the replicas. Each replica has the following options:host,port,username,password,database.

Sequelize uses a pool to manage connections to your replicas. Internally Sequelize will maintain two pools created using pool configuration.

If you want to modify these, you can pass pool as an options when instantiating Sequelize, as shown above.

Each write or useMaster: true query will use write pool. For SELECT read pool will be used. Read replica are switched using a basic round robin scheduling.


Connection Pool
--------------------------------------------------------------------------------

If you're connecting to the database from a single process, you should create only one Sequelize instance. Sequelize will set up a connection pool on initialization. This connection pool can be configured through the constructor's options parameter (using options.pool), as is shown in the following example:

const sequelize = new Sequelize(/* ... */, {
  // ...
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

Learn more in the API Reference for the Sequelize constructor. If you're connecting to the database from multiple processes, you'll have to create one instance per process, but each instance should have a maximum connection pool size of such that the total maximum size is respected. For example, if you want a max connection pool size of 90 and you have three processes, the Sequelize instance of each process should have a max connection pool size of 30.


Working with Legacy Tables
--------------------------------------------------------------------------------

While out of the box Sequelize will seem a bit opinionated it's easy to work legacy tables and forward proof your application by defining (otherwise generated) table and field names.
Tables

class User extends Model {}
User.init({
  // ...
}, {
  modelName: 'user',
  tableName: 'users',
  sequelize,
});

Fields

class MyModel extends Model {}
MyModel.init({
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id'
  }
}, { sequelize });

Primary keys

Sequelize will assume your table has a id primary key property by default.

To define your own primary key:

class Collection extends Model {}
Collection.init({
  uid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  }
}, { sequelize });

class Collection extends Model {}
Collection.init({
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true
  }
}, { sequelize });

And if your model has no primary key at all you can use Model.removeAttribute('id');
Foreign keys

// 1:1
Organization.belongsTo(User, { foreignKey: 'owner_id' });
User.hasOne(Organization, { foreignKey: 'owner_id' });

// 1:M
Project.hasMany(Task, { foreignKey: 'tasks_pk' });
Task.belongsTo(Project, { foreignKey: 'tasks_pk' });

// N:M
User.belongsToMany(Role, { through: 'user_has_roles', foreignKey: 'user_role_user_id' });
Role.belongsToMany(User, { through: 'user_has_roles', foreignKey: 'roles_identifier' });


Migrations
--------------------------------------------------------------------------------

Just like you use version control systems such as Git to manage changes in your source code, you can use migrations to keep track of changes to the database. With migrations you can transfer your existing database into another state and vice versa: Those state transitions are saved in migration files, which describe how to get to the new state and how to revert the changes in order to get back to the old state.

You will need the Sequelize Command-Line Interface (CLI). The CLI ships support for migrations and project bootstrapping.

A Migration in Sequelize is javascript file which exports two functions, up and down, that dictate how to perform the migration and undo it. You define those functions manually, but you don't call them manually; they will be called automatically by the CLI. In these functions, you should simply perform whatever queries you need, with the help of sequelize.query and whichever other methods Sequelize provides to you. There is no extra magic beyond that.
Installing the CLI

To install the Sequelize CLI:

npm install --save-dev sequelize-cli

For details see the CLI GitHub repository.
Project bootstrapping

To create an empty project you will need to execute init command

npx sequelize-cli init

This will create following folders

    config, contains config file, which tells CLI how to connect with database
    models, contains all models for your project
    migrations, contains all migration files
    seeders, contains all seed files

Configuration

Before continuing further we will need to tell the CLI how to connect to the database. To do that let's open default config file config/config.json. It looks something like this:

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

Note that the Sequelize CLI assumes mysql by default. If you're using another dialect, you need to change the content of the "dialect" option.

Now edit this file and set correct database credentials and dialect. The keys of the objects (e.g. "development") are used on model/index.js for matching process.env.NODE_ENV (When undefined, "development" is a default value).

Sequelize will use the default connection port for each dialect (for example, for postgres, it is port 5432). If you need to specify a different port, use the "port" field (it is not present by default in config/config.js but you can simply add it).

Note: If your database doesn't exist yet, you can just call db:create command. With proper access it will create that database for you.
Creating the first Model (and Migration)

Once you have properly configured CLI config file you are ready to create your first migration. It's as simple as executing a simple command.

We will use model:generate command. This command requires two options:

    name: the name of the model;
    attributes: the list of model attributes.

Let's create a model named User.

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

This will:

    Create a model file user in models folder;
    Create a migration file with name like XXXXXXXXXXXXXX-create-user.js in migrations folder.

Note: Sequelize will only use Model files, it's the table representation. On the other hand, the migration file is a change in that model or more specifically that table, used by CLI. Treat migrations like a commit or a log for some change in database.
Running Migrations

Until this step, we haven't inserted anything into the database. We have just created the required model and migration files for our first model, User. Now to actually create that table in the database you need to run db:migrate command.

npx sequelize-cli db:migrate

This command will execute these steps:

    Will ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database
    Start looking for any migration files which haven't run yet. This is possible by checking SequelizeMeta table. In this case it will run XXXXXXXXXXXXXX-create-user.js migration, which we created in last step.
    Creates a table called Users with all columns as specified in its migration file.

Undoing Migrations

Now our table has been created and saved in the database. With migration you can revert to old state by just running a command.

You can use db:migrate:undo, this command will revert most the recent migration.

npx sequelize-cli db:migrate:undo

You can revert back to the initial state by undoing all migrations with the db:migrate:undo:all command. You can also revert back to a specific migration by passing its name with the --to option.

npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

Creating the first Seed

Suppose we want to insert some data into a few tables by default. If we follow up on the previous example we can consider creating a demo user for the User table.

To manage all data migrations you can use seeders. Seed files are some change in data that can be used to populate database tables with sample or test data.

Let's create a seed file which will add a demo user to our User table.

npx sequelize-cli seed:generate --name demo-user

This command will create a seed file in seeders folder. File name will look something like XXXXXXXXXXXXXX-demo-user.js. It follows the same up / down semantics as the migration files.

Now we should edit this file to insert demo user to User table.

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

Running Seeds

In last step you created a seed file; however, it has not been committed to the database. To do that we run a simple command.

npx sequelize-cli db:seed:all

This will execute that seed file and a demo user will be inserted into the User table.

Note: Seeder execution history is not stored anywhere, unlike migrations, which use the SequelizeMeta table. If you wish to change this behavior, please read the Storage section.
Undoing Seeds

Seeders can be undone if they are using any storage. There are two commands available for that:

If you wish to undo the most recent seed:

npx sequelize-cli db:seed:undo

If you wish to undo a specific seed:

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

If you wish to undo all seeds:

npx sequelize-cli db:seed:undo:all

Migration Skeleton

The following skeleton shows a typical migration file.

module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
  },
  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
  }
}

We can generate this file using migration:generate. This will create xxx-migration-skeleton.js in your migration folder.

npx sequelize-cli migration:generate --name migration-skeleton

The passed queryInterface object can be used to modify the database. The Sequelize object stores the available data types such as STRING or INTEGER. Function up or down should return a Promise. Let's look at an example:

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
};

The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure:

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Person', 'petName', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Person', 'favoriteColor', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Person', 'petName', { transaction: t }),
        queryInterface.removeColumn('Person', 'favoriteColor', { transaction: t })
      ]);
    });
  }
};

The next example is of a migration that has a foreign key. You can use references to specify a foreign key:

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
}

The next example is of a migration that uses async/await where you create an unique index on a new column, with a manually-managed transaction:

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Person',
        'petName',
        {
          type: Sequelize.DataTypes.STRING,
        },
        { transaction }
      );
      await queryInterface.addIndex(
        'Person',
        'petName',
        {
          fields: 'petName',
          unique: true,
          transaction,
        }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Person', 'petName', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};

The next example is of a migration that creates an unique index composed of multiple fields with a condition, which allows a relation to exist multiple times but only one can satisfy the condition:

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      bool: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    }).then((queryInterface, Sequelize) => {
      queryInterface.addIndex(
        'Person',
        ['name', 'bool'],
        {
          indicesType: 'UNIQUE',
          where: { bool : 'true' },
        }
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
}

The .sequelizerc file

This is a special configuration file. It lets you specify the following options that you would usually pass as arguments to CLI:

    env: The environment to run the command in
    config: The path to the config file
    options-path: The path to a JSON file with additional options
    migrations-path: The path to the migrations folder
    seeders-path: The path to the seeders folder
    models-path: The path to the models folder
    url: The database connection string to use. Alternative to using --config files
    debug: When available show various debug information

Some scenarios where you can use it:

    You want to override default path to migrations, models, seeders or config folder.
    You want to rename config.json to something else like database.json

And a whole lot more. Let's see how you can use this file for custom configuration.

To begin, let's create the .sequelizerc file in the root directory of your project, with the following content:

// .sequelizerc

const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
};

With this config you are telling the CLI to:

    Use config/database.json file for config settings;
    Use db/models as models folder;
    Use db/seeders as seeders folder;
    Use db/migrations as migrations folder.

Dynamic configuration

The configuration file is by default a JSON file called config.json. But sometimes you need a dynamic configuration, for example to access environment variables or execute some other code to determine the configuration.

Thankfully, the Sequelize CLI can read from both .json and .js files. This can be setup with .sequelizerc file. You just have to provide the path to your .js file as the config option of your exported object:

const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js')
}

Now the Sequelize CLI will load config/config.js for getting configuration options.

An example of config/config.js file:

const fs = require('fs');

module.exports = {
  development: {
    username: 'database_dev',
    password: 'database_dev',
    database: 'database_dev',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
      }
    }
  }
};

The example above also shows how to add custom dialect options to the configuration.
Using Babel

To enable more modern constructions in your migrations and seeders, you can simply install babel-register and require it at the beginning of .sequelizerc:

npm i --save-dev babel-register

// .sequelizerc

require("babel-register");

const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.json'),
  'models-path': path.resolve('models'),
  'seeders-path': path.resolve('seeders'),
  'migrations-path': path.resolve('migrations')
}

Of course, the outcome will depend upon your babel configuration (such as in a .babelrc file). Learn more at babeljs.io.
Security tip

Use environment variables for config settings. This is because secrets such as passwords should never be part of the source code (and especially not committed to version control).
Storage

There are three types of storage that you can use: sequelize, json, and none.

    sequelize : stores migrations and seeds in a table on the sequelize database
    json : stores migrations and seeds on a json file
    none : does not store any migration/seed

Migration Storage

By default the CLI will create a table in your database called SequelizeMeta containing an entry for each executed migration. To change this behavior, there are three options you can add to the configuration file. Using migrationStorage, you can choose the type of storage to be used for migrations. If you choose json, you can specify the path of the file using migrationStoragePath or the CLI will write to the file sequelize-meta.json. If you want to keep the information in the database, using sequelize, but want to use a different table, you can change the table name using migrationStorageTableName. Also you can define a different schema for the SequelizeMeta table by providing the migrationStorageTableSchema property.

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",

    // Use a different storage type. Default: sequelize
    "migrationStorage": "json",

    // Use a different file name. Default: sequelize-meta.json
    "migrationStoragePath": "sequelizeMeta.json",

    // Use a different table name. Default: SequelizeMeta
    "migrationStorageTableName": "sequelize_meta",

    // Use a different schema for the SequelizeMeta table
    "migrationStorageTableSchema": "custom_schema"
  }
}

Note: The none storage is not recommended as a migration storage. If you decide to use it, be aware of the implications of having no record of what migrations did or didn't run.
Seed Storage

By default the CLI will not save any seed that is executed. If you choose to change this behavior (!), you can use seederStorage in the configuration file to change the storage type. If you choose json, you can specify the path of the file using seederStoragePath or the CLI will write to the file sequelize-data.json. If you want to keep the information in the database, using sequelize, you can specify the table name using seederStorageTableName, or it will default to SequelizeData.

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    // Use a different storage. Default: none
    "seederStorage": "json",
    // Use a different file name. Default: sequelize-data.json
    "seederStoragePath": "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    "seederStorageTableName": "sequelize_data"
  }
}

Configuration Connection String

As an alternative to the --config option with configuration files defining your database, you can use the --url option to pass in a connection string. For example:

npx sequelize-cli db:migrate --url 'mysql://root:password@mysql_host.com/database_name'

Programmatic usage

Sequelize has a sister library called umzug for programmatically handling execution and logging of migration tasks.


TypeScript
--------------------------------------------------------------------------------

Since v5, Sequelize provides its own TypeScript definitions. Please note that only TS >= 3.1 is supported.

As Sequelize heavily relies on runtime property assignments, TypeScript won't be very useful out of the box. A decent amount of manual type declarations are needed to make models workable.
Installation

In order to avoid installation bloat for non TS users, you must install the following typing packages manually:

    @types/node (this is universally required in node projects)
    @types/validator

Usage

Example of a minimal TypeScript project with strict type-checking for attributes.

Important: You must use declare on your class properties typings to ensure TypeScript does not emit those class properties. See Caveat with Public Class Fields

NOTE: Keep the following code in sync with /types/test/typescriptDocs/ModelInit.ts to ensure it typechecks correctly.

/**
 * Keep this file in sync with the code in the "Usage" section in typescript.md
 */
import {
  Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, Model,
  ModelDefined, Optional, Sequelize
} from "sequelize";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

// These are all the attributes in the User model
interface UserAttributes {
  id: number;
  name: string;
  preferredName: string | null;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  declare id: number; // Note that the `null assertion` `!` is required in strict mode.
  declare name: string;
  declare preferredName: string | null; // for nullable fields

  // timestamps!
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  declare getProjects: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
  declare addProject: HasManyAddAssociationMixin<Project, number>;
  declare hasProject: HasManyHasAssociationMixin<Project, number>;
  declare countProjects: HasManyCountAssociationsMixin;
  declare createProject: HasManyCreateAssociationMixin<Project>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  declare readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

  declare static associations: {
    projects: Association<User, Project>;
  };
}

interface ProjectAttributes {
  id: number;
  ownerId: number;
  name: string;
  description?: string;
}

interface ProjectCreationAttributes extends Optional<ProjectAttributes, "id"> {}

class Project extends Model<ProjectAttributes, ProjectCreationAttributes>
  implements ProjectAttributes {
  declare id: number;
  declare ownerId: number;
  declare name: string;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

interface AddressAttributes {
  userId: number;
  address: string;
}

// You can write `extends Model<AddressAttributes, AddressAttributes>` instead,
// but that will do the exact same thing as below
class Address extends Model<AddressAttributes> implements AddressAttributes {
  declare userId: number;
  declare address: string;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

// You can also define modules in a functional way
interface NoteAttributes {
  id: number;
  title: string;
  content: string;
}

// You can also set multiple attributes optional at once
interface NoteCreationAttributes
  extends Optional<NoteAttributes, "id" | "title"> {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    ownerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "projects",
  }
);

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    preferredName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
  }
);

Address.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "address",
    sequelize, // passing the `sequelize` instance is required
  }
);

// And with a functional approach defining a module looks like this
const Note: ModelDefined<
  NoteAttributes,
  NoteCreationAttributes
> = sequelize.define(
  "Note",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(64),
      defaultValue: "Unnamed Note",
    },
    content: {
      type: new DataTypes.STRING(4096),
      allowNull: false,
    },
  },
  {
    tableName: "notes",
  }
);

// Here we associate which actually populates out pre-declared `association` static and other methods.
User.hasMany(Project, {
  sourceKey: "id",
  foreignKey: "ownerId",
  as: "projects", // this determines the name in `associations`!
});

Address.belongsTo(User, { targetKey: "id" });
User.hasOne(Address, { sourceKey: "id" });

async function doStuffWithUser() {
  const newUser = await User.create({
    name: "Johnny",
    preferredName: "John",
  });
  console.log(newUser.id, newUser.name, newUser.preferredName);

  const project = await newUser.createProject({
    name: "first!",
    ownerId: 123,
  });

  const ourUser = await User.findByPk(1, {
    include: [User.associations.projects],
    rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
  });

  // Note the `!` null assertion since TS can't know if we included
  // the model or not
  console.log(ourUser.projects![0].name);
}

(async () => {
  await sequelize.sync();
  await doStuffWithUser();
})();

Usage without strict types for attributes

The typings for Sequelize v5 allowed you to define models without specifying types for the attributes. This is still possible for backwards compatibility and for cases where you feel strict typing for attributes isn't worth it.

NOTE: Keep the following code in sync with typescriptDocs/ModelInitNoAttributes.ts to ensure it typechecks correctly.

import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

class User extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public preferredName!: string | null; // for nullable fields
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    preferredName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
  }
);

async function doStuffWithUserModel() {
  const newUser = await User.create({
    name: "Johnny",
    preferredName: "John",
  });
  console.log(newUser.id, newUser.name, newUser.preferredName);

  const foundUser = await User.findOne({ where: { name: "Johnny" } });
  if (foundUser === null) return;
  console.log(foundUser.name);
}

Usage of sequelize.define

In Sequelize versions before v5, the default way of defining a model involved using sequelize.define. It's still possible to define models with that, and you can also add typings to these models using interfaces.

NOTE: Keep the following code in sync with typescriptDocs/Define.ts to ensure it typechecks correctly.

import { Sequelize, Model, DataTypes, Optional } from "sequelize";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

// We recommend you declare an interface for the attributes, for stricter typechecking
interface UserAttributes {
  id: number;
  name: string;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

const UserModel = sequelize.define<UserInstance>("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
  },
});

async function doStuff() {
  const instance = await UserModel.findByPk(1, {
    rejectOnEmpty: true,
  });
  console.log(instance.id);
}

If you're comfortable with somewhat less strict typing for the attributes on a model, you can save some code by defining the Instance to just extend Model without any attributes in the generic types.

NOTE: Keep the following code in sync with typescriptDocs/DefineNoAttributes.ts to ensure it typechecks correctly.

import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance extends Model {
  id: number;
  name: string;
}

const UserModel = sequelize.define<UserInstance>("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
  },
});

async function doStuff() {
  const instance = await UserModel.findByPk(1, {
    rejectOnEmpty: true,
  });
  console.log(instance.id);
}


Resources
--------------------------------------------------------------------------------

Addons & Plugins
ACL

    ssacl
    ssacl-attribute-roles
    SequelizeGuard - Role, Permission based Authorization for Sequelize.

Auto Code Generation & Scaffolding

    meteor modeler - Desktop tool for visual definition of Sequelize models and asssociations.
    sequelize-ui - Online tool for building models, relations and more.
    sequelizer - A GUI Desktop App for generating Sequelize models. Support for Mysql, Mariadb, Postgres, Sqlite, Mssql.
    sequelize-auto Generating models for SequelizeJS via the command line is another choice.
    pg-generator - Auto generate/scaffold Sequelize models for PostgreSQL database.
    sequelizejs-decorators decorators for composing sequelize models

Autoloader

    sequelize-autoload - An autoloader for Sequelize, inspired by PSR-0 and PSR-4.

Bcrypt

    sequelize-bcrypt - Utility to integrate bcrypt into sequelize models

Caching

    sequelize-transparent-cache

Filters

    sequelize-transforms - Add configurable attribute transforms.

Fixtures / mock data

    Fixer
    Sequelize-fixtures
    Sequelize-fixture

Hierarchies

    sequelize-hierarchy - Nested hierarchies for Sequelize.

Historical records / Time travel

    sequelize-temporal - Temporal tables (aka historical records)

Joi

    sequelize-joi - Allows specifying Joi validation schema for model attributes in Sequelize.

Migrations

    umzug

Slugification

    sequelize-slugify - Add slugs to sequelize models

Tokens

    sequelize-tokenify - Add unique tokens to sequelize models

Miscellaneous

    sequelize-deep-update - Update a sequelize instance and its included associated instances with new properties.
    sequelize-noupdate-attributes - Adds no update/readonly attributes support to models.
    sqlcommenter-sequelize A sqlcommenter plugin with support for Sequelize to augment SQL statements with comments that can be used later to correlate application code with SQL statements.


