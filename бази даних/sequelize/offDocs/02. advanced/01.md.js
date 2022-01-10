Eager Loading
--------------------------------------------------------------------------------

As briefly mentioned in the associations guide, eager Loading is the act of querying data of several models at once (one 'main' model and one or more associated models). At the SQL level, this is a query with one or more joins).

When this is done, the associated models will be added by Sequelize in appropriately named, automatically created field(s) in the returned objects.

In Sequelize, eager loading is mainly done by using the include option on a model finder query (such as findOne, findAll, etc).
Basic example

Let's assume the following setup:

const User = sequelize.define('user', { name: DataTypes.STRING }, { timestamps: false });
const Task = sequelize.define('task', { name: DataTypes.STRING }, { timestamps: false });
const Tool = sequelize.define('tool', {
  name: DataTypes.STRING,
  size: DataTypes.STRING
}, { timestamps: false });
User.hasMany(Task);
Task.belongsTo(User);
User.hasMany(Tool, { as: 'Instruments' });

Fetching a single associated element

OK. So, first of all, let's load all tasks with their associated user:

const tasks = await Task.findAll({ include: User });
console.log(JSON.stringify(tasks, null, 2));

Output:

[{
  "name": "A Task",
  "id": 1,
  "userId": 1,
  "user": {
    "name": "John Doe",
    "id": 1
  }
}]

Here, tasks[0].user instanceof User is true. This shows that when Sequelize fetches associated models, they are added to the output object as model instances.

Above, the associated model was added to a new field called user in the fetched task. The name of this field was automatically chosen by Sequelize based on the name of the associated model, where its pluralized form is used when applicable (i.e., when the association is hasMany or belongsToMany). In other words, since Task.belongsTo(User), a task is associated to one user, therefore the logical choice is the singular form (which Sequelize follows automatically).
Fetching all associated elements

Now, instead of loading the user that is associated to a given task, we will do the opposite - we will find all tasks associated to a given user.

The method call is essentially the same. The only difference is that now the extra field created in the query result uses the pluralized form (tasks in this case), and its value is an array of task instances (instead of a single instance, as above).

const users = await User.findAll({ include: Task });
console.log(JSON.stringify(users, null, 2));

Output:

[{
  "name": "John Doe",
  "id": 1,
  "tasks": [{
    "name": "A Task",
    "id": 1,
    "userId": 1
  }]
}]

Notice that the accessor (the tasks property in the resulting instance) is pluralized since the association is one-to-many.
Fetching an Aliased association

If an association is aliased (using the as option), you must specify this alias when including the model. Instead of passing the model directly to the include option, you should instead provide an object with two options: model and as.

Notice how the user's Tools are aliased as Instruments above. In order to get that right you have to specify the model you want to load, as well as the alias:

const users = await User.findAll({
  include: { model: Tool, as: 'Instruments' }
});
console.log(JSON.stringify(users, null, 2));

Output:

[{
  "name": "John Doe",
  "id": 1,
  "Instruments": [{
    "name": "Scissor",
    "id": 1,
    "userId": 1
  }]
}]

You can also include by alias name by specifying a string that matches the association alias:

User.findAll({ include: 'Instruments' }); // Also works
User.findAll({ include: { association: 'Instruments' } }); // Also works

Required eager loading

When eager loading, we can force the query to return only records which have an associated model, effectively converting the query from the default OUTER JOIN to an INNER JOIN. This is done with the required: true option, as follows:

User.findAll({
  include: {
    model: Task,
    required: true
  }
});

This option also works on nested includes.
Eager loading filtered at the associated model level

When eager loading, we can also filter the associated model using the where option, as in the following example:

User.findAll({
  include: {
    model: Tool,
    as: 'Instruments'
    where: {
      size: {
        [Op.ne]: 'small'
      }
    }
  }
});

Generated SQL:

SELECT
  `user`.`id`,
  `user`.`name`,
  `Instruments`.`id` AS `Instruments.id`,
  `Instruments`.`name` AS `Instruments.name`,
  `Instruments`.`size` AS `Instruments.size`,
  `Instruments`.`userId` AS `Instruments.userId`
FROM `users` AS `user`
INNER JOIN `tools` AS `Instruments` ON
  `user`.`id` = `Instruments`.`userId` AND
  `Instruments`.`size` != 'small';

Note that the SQL query generated above will only fetch users that have at least one tool that matches the condition (of not being small, in this case). This is the case because, when the where option is used inside an include, Sequelize automatically sets the required option to true. This means that, instead of an OUTER JOIN, an INNER JOIN is done, returning only the parent models with at least one matching children.

Note also that the where option used was converted into a condition for the ON clause of the INNER JOIN. In order to obtain a top-level WHERE clause, instead of an ON clause, something different must be done. This will be shown next.
Referring to other columns

If you want to apply a WHERE clause in an included model referring to a value from an associated model, you can simply use the Sequelize.col function, as show in the example below:

// Find all projects with a least one task where task.state === project.state
Project.findAll({
  include: {
    model: Task,
    where: {
      state: Sequelize.col('project.state')
    }
  }
})

Complex where clauses at the top-level

To obtain top-level WHERE clauses that involve nested columns, Sequelize provides a way to reference nested columns: the '$nested.column$' syntax.

It can be used, for example, to move the where conditions from an included model from the ON condition to a top-level WHERE clause.

User.findAll({
  where: {
    '$Instruments.size$': { [Op.ne]: 'small' }
  },
  include: [{
    model: Tool,
    as: 'Instruments'
  }]
});

Generated SQL:

SELECT
  `user`.`id`,
  `user`.`name`,
  `Instruments`.`id` AS `Instruments.id`,
  `Instruments`.`name` AS `Instruments.name`,
  `Instruments`.`size` AS `Instruments.size`,
  `Instruments`.`userId` AS `Instruments.userId`
FROM `users` AS `user`
LEFT OUTER JOIN `tools` AS `Instruments` ON
  `user`.`id` = `Instruments`.`userId`
WHERE `Instruments`.`size` != 'small';

The $nested.column$ syntax also works for columns that are nested several levels deep, such as $some.super.deeply.nested.column$. Therefore, you can use this to make complex filters on deeply nested columns.

For a better understanding of all differences between the inner where option (used inside an include), with and without the required option, and a top-level where using the $nested.column$ syntax, below we have four examples for you:

// Inner where, with default `required: true`
await User.findAll({
  include: {
    model: Tool,
    as: 'Instruments',
    where: {
      size: { [Op.ne]: 'small' }
    }
  }
});

// Inner where, `required: false`
await User.findAll({
  include: {
    model: Tool,
    as: 'Instruments',
    where: {
      size: { [Op.ne]: 'small' }
    },
    required: false
  }
});

// Top-level where, with default `required: false`
await User.findAll({
  where: {
    '$Instruments.size$': { [Op.ne]: 'small' }
  },
  include: {
    model: Tool,
    as: 'Instruments'
  }
});

// Top-level where, `required: true`
await User.findAll({
  where: {
    '$Instruments.size$': { [Op.ne]: 'small' }
  },
  include: {
    model: Tool,
    as: 'Instruments',
    required: true
  }
});

Generated SQLs, in order:

-- Inner where, with default `required: true`
SELECT [...] FROM `users` AS `user`
INNER JOIN `tools` AS `Instruments` ON
  `user`.`id` = `Instruments`.`userId`
  AND `Instruments`.`size` != 'small';

-- Inner where, `required: false`
SELECT [...] FROM `users` AS `user`
LEFT OUTER JOIN `tools` AS `Instruments` ON
  `user`.`id` = `Instruments`.`userId`
  AND `Instruments`.`size` != 'small';

-- Top-level where, with default `required: false`
SELECT [...] FROM `users` AS `user`
LEFT OUTER JOIN `tools` AS `Instruments` ON
  `user`.`id` = `Instruments`.`userId`
WHERE `Instruments`.`size` != 'small';

-- Top-level where, `required: true`
SELECT [...] FROM `users` AS `user`
INNER JOIN `tools` AS `Instruments` ON
  `user`.`id` = `Instruments`.`userId`
WHERE `Instruments`.`size` != 'small';

Fetching with RIGHT OUTER JOIN (MySQL, MariaDB, PostgreSQL and MSSQL only)

By default, associations are loaded using a LEFT OUTER JOIN - that is to say it only includes records from the parent table. You can change this behavior to a RIGHT OUTER JOIN by passing the right option, if the dialect you are using supports it.

Currenly, SQLite does not support right joins.

Note: right is only respected if required is false.

User.findAll({
  include: [{
    model: Task // will create a left join
  }]
});
User.findAll({
  include: [{
    model: Task,
    right: true // will create a right join
  }]
});
User.findAll({
  include: [{
    model: Task,
    required: true,
    right: true // has no effect, will create an inner join
  }]
});
User.findAll({
  include: [{
    model: Task,
    where: { name: { [Op.ne]: 'empty trash' } },
    right: true // has no effect, will create an inner join
  }]
});
User.findAll({
  include: [{
    model: Tool,
    where: { name: { [Op.ne]: 'empty trash' } },
    required: false // will create a left join
  }]
});
User.findAll({
  include: [{
    model: Tool,
    where: { name: { [Op.ne]: 'empty trash' } },
    required: false
    right: true // will create a right join
  }]
});

Multiple eager loading

The include option can receive an array in order to fetch multiple associated models at once:

Foo.findAll({
  include: [
    {
      model: Bar,
      required: true
    },
    {
      model: Baz,
      where: /* ... */
    },
    Qux // Shorthand syntax for { model: Qux } also works here
  ]
})

Eager loading with Many-to-Many relationships

When you perform eager loading on a model with a Belongs-to-Many relationship, Sequelize will fetch the junction table data as well, by default. For example:

const Foo = sequelize.define('Foo', { name: DataTypes.TEXT });
const Bar = sequelize.define('Bar', { name: DataTypes.TEXT });
Foo.belongsToMany(Bar, { through: 'Foo_Bar' });
Bar.belongsToMany(Foo, { through: 'Foo_Bar' });

await sequelize.sync();
const foo = await Foo.create({ name: 'foo' });
const bar = await Bar.create({ name: 'bar' });
await foo.addBar(bar);
const fetchedFoo = await Foo.findOne({ include: Bar });
console.log(JSON.stringify(fetchedFoo, null, 2));

Output:

{
  "id": 1,
  "name": "foo",
  "Bars": [
    {
      "id": 1,
      "name": "bar",
      "Foo_Bar": {
        "FooId": 1,
        "BarId": 1
      }
    }
  ]
}

Note that every bar instance eager loaded into the "Bars" property has an extra property called Foo_Bar which is the relevant Sequelize instance of the junction model. By default, Sequelize fetches all attributes from the junction table in order to build this extra property.

However, you can specify which attributes you want fetched. This is done with the attributes option applied inside the through option of the include. For example:

Foo.findAll({
  include: [{
    model: Bar,
    through: {
      attributes: [/* list the wanted attributes here */]
    }
  }]
});

If you don't want anything from the junction table, you can explicitly provide an empty array to the attributes option inside the through option of the include option, and in this case nothing will be fetched and the extra property will not even be created:

Foo.findOne({
  include: {
    model: Bar,
    through: {
      attributes: []
    }
  }
});

Output:

{
  "id": 1,
  "name": "foo",
  "Bars": [
    {
      "id": 1,
      "name": "bar"
    }
  ]
}

Whenever including a model from a Many-to-Many relationship, you can also apply a filter on the junction table. This is done with the where option applied inside the through option of the include. For example:

User.findAll({
  include: [{
    model: Project,
    through: {
      where: {
        // Here, `completed` is a column present at the junction table
        completed: true
      }
    }
  }]
});

Generated SQL (using SQLite):

SELECT
  `User`.`id`,
  `User`.`name`,
  `Projects`.`id` AS `Projects.id`,
  `Projects`.`name` AS `Projects.name`,
  `Projects->User_Project`.`completed` AS `Projects.User_Project.completed`,
  `Projects->User_Project`.`UserId` AS `Projects.User_Project.UserId`,
  `Projects->User_Project`.`ProjectId` AS `Projects.User_Project.ProjectId`
FROM `Users` AS `User`
LEFT OUTER JOIN `User_Projects` AS `Projects->User_Project` ON
  `User`.`id` = `Projects->User_Project`.`UserId`
LEFT OUTER JOIN `Projects` AS `Projects` ON
  `Projects`.`id` = `Projects->User_Project`.`ProjectId` AND
  `Projects->User_Project`.`completed` = 1;

Including everything

To include all associated models, you can use the all and nested options:

// Fetch all models associated with User
User.findAll({ include: { all: true }});

// Fetch all models associated with User and their nested associations (recursively)
User.findAll({ include: { all: true, nested: true }});

Including soft deleted records

In case you want to eager load soft deleted records you can do that by setting include.paranoid to false:

User.findAll({
  include: [{
    model: Tool,
    as: 'Instruments',
    where: { size: { [Op.ne]: 'small' } },
    paranoid: false
  }]
});

Ordering eager loaded associations

When you want to apply ORDER clauses to eager loaded models, you must use the top-level order option with augmented arrays, starting with the specification of the nested model you want to sort.

This is better understood with examples.

Company.findAll({
  include: Division,
  order: [
    // We start the order array with the model we want to sort
    [Division, 'name', 'ASC']
  ]
});
Company.findAll({
  include: Division,
  order: [
    [Division, 'name', 'DESC']
  ]
});
Company.findAll({
  // If the include uses an alias...
  include: { model: Division, as: 'Div' },
  order: [
    // ...we use the same syntax from the include
    // in the beginning of the order array
    [{ model: Division, as: 'Div' }, 'name', 'DESC']
  ]
});

Company.findAll({
  // If we have includes nested in several levels...
  include: {
    model: Division,
    include: Department
  },
  order: [
    // ... we replicate the include chain of interest
    // at the beginning of the order array
    [Division, Department, 'name', 'DESC']
  ]
});

In the case of many-to-many relationships, you are also able to sort by attributes in the through table. For example, assuming we have a Many-to-Many relationship between Division and Department whose junction model is DepartmentDivision, you can do:

Company.findAll({
  include: {
    model: Division,
    include: Department
  },
  order: [
    [Division, DepartmentDivision, 'name', 'ASC']
  ]
});

In all the above examples, you have noticed that the order option is used at the top-level. The only situation in which order also works inside the include option is when separate: true is used. In that case, the usage is as follows:

// This only works for `separate: true` (which in turn
// only works for has-many relationships).
User.findAll({
  include: {
    model: Post,
    separate: true,
    order: [
      ['createdAt', 'DESC']
    ]
  }
});

Complex ordering involving sub-queries

Take a look at the guide on sub-queries for an example of how to use a sub-query to assist a more complex ordering.
Nested eager loading

You can use nested eager loading to load all related models of a related model:

const users = await User.findAll({
  include: {
    model: Tool,
    as: 'Instruments',
    include: {
      model: Teacher,
      include: [ /* etc */ ]
    }
  }
});
console.log(JSON.stringify(users, null, 2));

Output:

[{
  "name": "John Doe",
  "id": 1,
  "Instruments": [{ // 1:M and N:M association
    "name": "Scissor",
    "id": 1,
    "userId": 1,
    "Teacher": { // 1:1 association
      "name": "Jimi Hendrix"
    }
  }]
}]

This will produce an outer join. However, a where clause on a related model will create an inner join and return only the instances that have matching sub-models. To return all parent instances, you should add required: false.

User.findAll({
  include: [{
    model: Tool,
    as: 'Instruments',
    include: [{
      model: Teacher,
      where: {
        school: "Woodstock Music School"
      },
      required: false
    }]
  }]
});

The query above will return all users, and all their instruments, but only those teachers associated with Woodstock Music School.
Using findAndCountAll with includes

The findAndCountAll utility function supports includes. Only the includes that are marked as required will be considered in count. For example, if you want to find and count all users who have a profile:

User.findAndCountAll({
  include: [
    { model: Profile, required: true }
  ],
  limit: 3
});

Because the include for Profile has required set it will result in an inner join, and only the users who have a profile will be counted. If we remove required from the include, both users with and without profiles will be counted. Adding a where clause to the include automatically makes it required:

User.findAndCountAll({
  include: [
    { model: Profile, where: { active: true } }
  ],
  limit: 3
});

The query above will only count users who have an active profile, because required is implicitly set to true when you add a where clause to the include.


Creating with Associations
--------------------------------------------------------------------------------

An instance can be created with nested association in one step, provided all elements are new.

In contrast, performing updates and deletions involving nested objects is currently not possible. For that, you will have to perform each separate action explicitly.
BelongsTo / HasMany / HasOne association

Consider the following models:

class Product extends Model {}
Product.init({
  title: Sequelize.STRING
}, { sequelize, modelName: 'product' });
class User extends Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
}, { sequelize, modelName: 'user' });
class Address extends Model {}
Address.init({
  type: DataTypes.STRING,
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
}, { sequelize, modelName: 'address' });

// We save the return values of the association setup calls to use them later
Product.User = Product.belongsTo(User);
User.Addresses = User.hasMany(Address);
// Also works for `hasOne`

A new Product, User, and one or more Address can be created in one step in the following way:

return Product.create({
  title: 'Chair',
  user: {
    firstName: 'Mick',
    lastName: 'Broadstone',
    addresses: [{
      type: 'home',
      line1: '100 Main St.',
      city: 'Austin',
      state: 'TX',
      zip: '78704'
    }]
  }
}, {
  include: [{
    association: Product.User,
    include: [ User.Addresses ]
  }]
});

Observe the usage of the include option in the Product.create call. That is necessary for Sequelize to understand what you are trying to create along with the association.

Note: here, our user model is called user, with a lowercase u - This means that the property in the object should also be user. If the name given to sequelize.define was User, the key in the object should also be User. Likewise for addresses, except it's pluralized being a hasMany association.
BelongsTo association with an alias

The previous example can be extended to support an association alias.

const Creator = Product.belongsTo(User, { as: 'creator' });

return Product.create({
  title: 'Chair',
  creator: {
    firstName: 'Matt',
    lastName: 'Hansen'
  }
}, {
  include: [ Creator ]
});

HasMany / BelongsToMany association

Let's introduce the ability to associate a product with many tags. Setting up the models could look like:

class Tag extends Model {}
Tag.init({
  name: Sequelize.STRING
}, { sequelize, modelName: 'tag' });

Product.hasMany(Tag);
// Also works for `belongsToMany`.

Now we can create a product with multiple tags in the following way:

Product.create({
  id: 1,
  title: 'Chair',
  tags: [
    { name: 'Alpha'},
    { name: 'Beta'}
  ]
}, {
  include: [ Tag ]
})

And, we can modify this example to support an alias as well:

const Categories = Product.hasMany(Tag, { as: 'categories' });

Product.create({
  id: 1,
  title: 'Chair',
  categories: [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' }
  ]
}, {
  include: [{
    association: Categories,
    as: 'categories'
  }]
})


Advanced M:N Associations
--------------------------------------------------------------------------------

Make sure you have read the associations guide before reading this guide.

Let's start with an example of a Many-to-Many relationship between User and Profile.

const User = sequelize.define('user', {
  username: DataTypes.STRING,
  points: DataTypes.INTEGER
}, { timestamps: false });
const Profile = sequelize.define('profile', {
  name: DataTypes.STRING
}, { timestamps: false });

The simplest way to define the Many-to-Many relationship is:

User.belongsToMany(Profile, { through: 'User_Profiles' });
Profile.belongsToMany(User, { through: 'User_Profiles' });

By passing a string to through above, we are asking Sequelize to automatically generate a model named User_Profiles as the through table (also known as junction table), with only two columns: userId and profileId. A composite unique key will be established on these two columns.

We can also define ourselves a model to be used as the through table.

const User_Profile = sequelize.define('User_Profile', {}, { timestamps: false });
User.belongsToMany(Profile, { through: User_Profile });
Profile.belongsToMany(User, { through: User_Profile });

The above has the exact same effect. Note that we didn't define any attributes on the User_Profile model. The fact that we passed it into a belongsToMany call tells sequelize to create the two attributes userId and profileId automatically, just like other associations also cause Sequelize to automatically add a column to one of the involved models.

However, defining the model by ourselves has several advantages. We can, for example, define more columns on our through table:

const User_Profile = sequelize.define('User_Profile', {
  selfGranted: DataTypes.BOOLEAN
}, { timestamps: false });
User.belongsToMany(Profile, { through: User_Profile });
Profile.belongsToMany(User, { through: User_Profile });

With this, we can now track an extra information at the through table, namely the selfGranted boolean. For example, when calling the user.addProfile() we can pass values for the extra columns using the through option.

Example:

const amidala = await User.create({ username: 'p4dm3', points: 1000 });
const queen = await Profile.create({ name: 'Queen' });
await amidala.addProfile(queen, { through: { selfGranted: false } });
const result = await User.findOne({
  where: { username: 'p4dm3' },
  include: Profile
});
console.log(result);

Output:

{
  "id": 4,
  "username": "p4dm3",
  "points": 1000,
  "profiles": [
    {
      "id": 6,
      "name": "queen",
      "User_Profile": {
        "userId": 4,
        "profileId": 6,
        "selfGranted": false
      }
    }
  ]
}

You can create all relationship in single create call too.

Example:

const amidala = await User.create({
  username: 'p4dm3',
  points: 1000,
  profiles: [{
    name: 'Queen',
    User_Profile: {
      selfGranted: true
    }
  }]
}, {
  include: Profile
});

const result = await User.findOne({
  where: { username: 'p4dm3' },
  include: Profile
});

console.log(result);

Output:

{
  "id": 1,
  "username": "p4dm3",
  "points": 1000,
  "profiles": [
    {
      "id": 1,
      "name": "Queen",
      "User_Profile": {
        "selfGranted": true,
        "userId": 1,
        "profileId": 1
      }
    }
  ]
}

You probably noticed that the User_Profiles table does not have an id field. As mentioned above, it has a composite unique key instead. The name of this composite unique key is chosen automatically by Sequelize but can be customized with the uniqueKey option:

User.belongsToMany(Profile, { through: User_Profiles, uniqueKey: 'my_custom_unique' });

Another possibility, if desired, is to force the through table to have a primary key just like other standard tables. To do this, simply define the primary key in the model:

const User_Profile = sequelize.define('User_Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  selfGranted: DataTypes.BOOLEAN
}, { timestamps: false });
User.belongsToMany(Profile, { through: User_Profile });
Profile.belongsToMany(User, { through: User_Profile });

The above will still create two columns userId and profileId, of course, but instead of setting up a composite unique key on them, the model will use its id column as primary key. Everything else will still work just fine.
Through tables versus normal tables and the "Super Many-to-Many association"

Now we will compare the usage of the last Many-to-Many setup shown above with the usual One-to-Many relationships, so that in the end we conclude with the concept of a "Super Many-to-Many relationship".
Models recap (with minor rename)

To make things easier to follow, let's rename our User_Profile model to grant. Note that everything works in the same way as before. Our models are:

const User = sequelize.define('user', {
  username: DataTypes.STRING,
  points: DataTypes.INTEGER
}, { timestamps: false });

const Profile = sequelize.define('profile', {
  name: DataTypes.STRING
}, { timestamps: false });

const Grant = sequelize.define('grant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  selfGranted: DataTypes.BOOLEAN
}, { timestamps: false });

We established a Many-to-Many relationship between User and Profile using the Grant model as the through table:

User.belongsToMany(Profile, { through: Grant });
Profile.belongsToMany(User, { through: Grant });

This automatically added the columns userId and profileId to the Grant model.

Note: As shown above, we have chosen to force the grant model to have a single primary key (called id, as usual). This is necessary for the Super Many-to-Many relationship that will be defined soon.
Using One-to-Many relationships instead

Instead of setting up the Many-to-Many relationship defined above, what if we did the following instead?

// Setup a One-to-Many relationship between User and Grant
User.hasMany(Grant);
Grant.belongsTo(User);

// Also setup a One-to-Many relationship between Profile and Grant
Profile.hasMany(Grant);
Grant.belongsTo(Profile);

The result is essentially the same! This is because User.hasMany(Grant) and Profile.hasMany(Grant) will automatically add the userId and profileId columns to Grant, respectively.

This shows that one Many-to-Many relationship isn't very different from two One-to-Many relationships. The tables in the database look the same.

The only difference is when you try to perform an eager load with Sequelize.

// With the Many-to-Many approach, you can do:
User.findAll({ include: Profile });
Profile.findAll({ include: User });
// However, you can't do:
User.findAll({ include: Grant });
Profile.findAll({ include: Grant });
Grant.findAll({ include: User });
Grant.findAll({ include: Profile });

// On the other hand, with the double One-to-Many approach, you can do:
User.findAll({ include: Grant });
Profile.findAll({ include: Grant });
Grant.findAll({ include: User });
Grant.findAll({ include: Profile });
// However, you can't do:
User.findAll({ include: Profile });
Profile.findAll({ include: User });
// Although you can emulate those with nested includes, as follows:
User.findAll({
  include: {
    model: Grant,
    include: Profile
  }
}); // This emulates the `User.findAll({ include: Profile })`, however
    // the resulting object structure is a bit different. The original
    // structure has the form `user.profiles[].grant`, while the emulated
    // structure has the form `user.grants[].profiles[]`.

The best of both worlds: the Super Many-to-Many relationship

We can simply combine both approaches shown above!

// The Super Many-to-Many relationship
User.belongsToMany(Profile, { through: Grant });
Profile.belongsToMany(User, { through: Grant });
User.hasMany(Grant);
Grant.belongsTo(User);
Profile.hasMany(Grant);
Grant.belongsTo(Profile);

This way, we can do all kinds of eager loading:

// All these work:
User.findAll({ include: Profile });
Profile.findAll({ include: User });
User.findAll({ include: Grant });
Profile.findAll({ include: Grant });
Grant.findAll({ include: User });
Grant.findAll({ include: Profile });

We can even perform all kinds of deeply nested includes:

User.findAll({
  include: [
    {
      model: Grant,
      include: [User, Profile]
    },
    {
      model: Profile,
      include: {
        model: User,
        include: {
          model: Grant,
          include: [User, Profile]
        }
      }
    }
  ]
});

Aliases and custom key names

Similarly to the other relationships, aliases can be defined for Many-to-Many relationships.

Before proceeding, please recall the aliasing example for belongsTo on the associations guide. Note that, in that case, defining an association impacts both the way includes are done (i.e. passing the association name) and the name Sequelize chooses for the foreign key (in that example, leaderId was created on the Ship model).

Defining an alias for a belongsToMany association also impacts the way includes are performed:

Product.belongsToMany(Category, { as: 'groups', through: 'product_categories' });
Category.belongsToMany(Product, { as: 'items', through: 'product_categories' });

// [...]

await Product.findAll({ include: Category }); // This doesn't work

await Product.findAll({ // This works, passing the alias
  include: {
    model: Category,
    as: 'groups'
  }
});

await Product.findAll({ include: 'groups' }); // This also works

However, defining an alias here has nothing to do with the foreign key names. The names of both foreign keys created in the through table are still constructed by Sequelize based on the name of the models being associated. This can readily be seen by inspecting the generated SQL for the through table in the example above:

CREATE TABLE IF NOT EXISTS `product_categories` (
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `productId` INTEGER NOT NULL REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  `categoryId` INTEGER NOT NULL REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (`productId`, `categoryId`)
);

We can see that the foreign keys are productId and categoryId. To change these names, Sequelize accepts the options foreignKey and otherKey respectively (i.e., the foreignKey defines the key for the source model in the through relation, and otherKey defines it for the target model):

Product.belongsToMany(Category, {
  through: 'product_categories',
  foreignKey: 'objectId', // replaces `productId`
  otherKey: 'typeId' // replaces `categoryId`
});
Category.belongsToMany(Product, {
  through: 'product_categories',
  foreignKey: 'typeId', // replaces `categoryId`
  otherKey: 'objectId' // replaces `productId`
});

Generated SQL:

CREATE TABLE IF NOT EXISTS `product_categories` (
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `objectId` INTEGER NOT NULL REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  `typeId` INTEGER NOT NULL REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (`objectId`, `typeId`)
);

As shown above, when you define a Many-to-Many relationship with two belongsToMany calls (which is the standard way), you should provide the foreignKey and otherKey options appropriately in both calls. If you pass these options in only one of the calls, the Sequelize behavior will be unreliable.
Self-references

Sequelize supports self-referential Many-to-Many relationships, intuitively:

Person.belongsToMany(Person, { as: 'Children', through: 'PersonChildren' })
// This will create the table PersonChildren which stores the ids of the objects.

Specifying attributes from the through table

By default, when eager loading a many-to-many relationship, Sequelize will return data in the following structure (based on the first example in this guide):

// User.findOne({ include: Profile })
{
  "id": 4,
  "username": "p4dm3",
  "points": 1000,
  "profiles": [
    {
      "id": 6,
      "name": "queen",
      "grant": {
        "userId": 4,
        "profileId": 6,
        "selfGranted": false
      }
    }
  ]
}

Notice that the outer object is an User, which has a field called profiles, which is a Profile array, such that each Profile comes with an extra field called grant which is a Grant instance. This is the default structure created by Sequelize when eager loading from a Many-to-Many relationship.

However, if you want only some of the attributes of the through table, you can provide an array with the attributes you want in the attributes option. For example, if you only want the selfGranted attribute from the through table:

User.findOne({
  include: {
    model: Profile,
    through: {
      attributes: ['selfGranted']
    }
  }
});

Output:

{
  "id": 4,
  "username": "p4dm3",
  "points": 1000,
  "profiles": [
    {
      "id": 6,
      "name": "queen",
      "grant": {
        "selfGranted": false
      }
    }
  ]
}

If you don't want the nested grant field at all, use attributes: []:

User.findOne({
  include: {
    model: Profile,
    through: {
      attributes: []
    }
  }
});

Output:

{
  "id": 4,
  "username": "p4dm3",
  "points": 1000,
  "profiles": [
    {
      "id": 6,
      "name": "queen"
    }
  ]
}

If you are using mixins (such as user.getProfiles()) instead of finder methods (such as User.findAll()), you have to use the joinTableAttributes option instead:

someUser.getProfiles({ joinTableAttributes: ['selfGranted'] });

Output:

[
  {
    "id": 6,
    "name": "queen",
    "grant": {
      "selfGranted": false
    }
  }
]

Many-to-many-to-many relationships and beyond

Consider you are trying to model a game championship. There are players and teams. Teams play games. However, players can change teams in the middle of the championship (but not in the middle of a game). So, given one specific game, there are certain teams participating in that game, and each of these teams has a set of players (for that game).

So we start by defining the three relevant models:

const Player = sequelize.define('Player', { username: DataTypes.STRING });
const Team = sequelize.define('Team', { name: DataTypes.STRING });
const Game = sequelize.define('Game', { name: DataTypes.INTEGER });

Now, the question is: how to associate them?

First, we note that:

    One game has many teams associated to it (the ones that are playing that game);
    One team may have participated in many games.

The above observations show that we need a Many-to-Many relationship between Game and Team. Let's use the Super Many-to-Many relationship as explained earlier in this guide:

// Super Many-to-Many relationship between Game and Team
const GameTeam = sequelize.define('GameTeam', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
});
Team.belongsToMany(Game, { through: GameTeam });
Game.belongsToMany(Team, { through: GameTeam });
GameTeam.belongsTo(Game);
GameTeam.belongsTo(Team);
Game.hasMany(GameTeam);
Team.hasMany(GameTeam);

The part about players is trickier. We note that the set of players that form a team depends not only on the team (obviously), but also on which game is being considered. Therefore, we don't want a Many-to-Many relationship between Player and Team. We also don't want a Many-to-Many relationship between Player and Game. Instead of associating a Player to any of those models, what we need is an association between a Player and something like a "team-game pair constraint", since it is the pair (team plus game) that defines which players belong there. So what we are looking for turns out to be precisely the junction model, GameTeam, itself! And, we note that, since a given game-team pair specifies many players, and on the other hand that the same player can participate of many game-team pairs, we need a Many-to-Many relationship between Player and GameTeam!

To provide the greatest flexibility, let's use the Super Many-to-Many relationship construction here again:

// Super Many-to-Many relationship between Player and GameTeam
const PlayerGameTeam = sequelize.define('PlayerGameTeam', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
});
Player.belongsToMany(GameTeam, { through: PlayerGameTeam });
GameTeam.belongsToMany(Player, { through: PlayerGameTeam });
PlayerGameTeam.belongsTo(Player);
PlayerGameTeam.belongsTo(GameTeam);
Player.hasMany(PlayerGameTeam);
GameTeam.hasMany(PlayerGameTeam);

The above associations achieve precisely what we want. Here is a full runnable example of this:

const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:', {
  define: { timestamps: false } // Just for less clutter in this example
});
const Player = sequelize.define('Player', { username: DataTypes.STRING });
const Team = sequelize.define('Team', { name: DataTypes.STRING });
const Game = sequelize.define('Game', { name: DataTypes.INTEGER });

// We apply a Super Many-to-Many relationship between Game and Team
const GameTeam = sequelize.define('GameTeam', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
});
Team.belongsToMany(Game, { through: GameTeam });
Game.belongsToMany(Team, { through: GameTeam });
GameTeam.belongsTo(Game);
GameTeam.belongsTo(Team);
Game.hasMany(GameTeam);
Team.hasMany(GameTeam);

// We apply a Super Many-to-Many relationship between Player and GameTeam
const PlayerGameTeam = sequelize.define('PlayerGameTeam', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
});
Player.belongsToMany(GameTeam, { through: PlayerGameTeam });
GameTeam.belongsToMany(Player, { through: PlayerGameTeam });
PlayerGameTeam.belongsTo(Player);
PlayerGameTeam.belongsTo(GameTeam);
Player.hasMany(PlayerGameTeam);
GameTeam.hasMany(PlayerGameTeam);

(async () => {

  await sequelize.sync();
  await Player.bulkCreate([
    { username: 's0me0ne' },
    { username: 'empty' },
    { username: 'greenhead' },
    { username: 'not_spock' },
    { username: 'bowl_of_petunias' }
  ]);
  await Game.bulkCreate([
    { name: 'The Big Clash' },
    { name: 'Winter Showdown' },
    { name: 'Summer Beatdown' }
  ]);
  await Team.bulkCreate([
    { name: 'The Martians' },
    { name: 'The Earthlings' },
    { name: 'The Plutonians' }
  ]);

  // Let's start defining which teams were in which games. This can be done
  // in several ways, such as calling `.setTeams` on each game. However, for
  // brevity, we will use direct `create` calls instead, referring directly
  // to the IDs we want. We know that IDs are given in order starting from 1.
  await GameTeam.bulkCreate([
    { GameId: 1, TeamId: 1 },   // this GameTeam will get id 1
    { GameId: 1, TeamId: 2 },   // this GameTeam will get id 2
    { GameId: 2, TeamId: 1 },   // this GameTeam will get id 3
    { GameId: 2, TeamId: 3 },   // this GameTeam will get id 4
    { GameId: 3, TeamId: 2 },   // this GameTeam will get id 5
    { GameId: 3, TeamId: 3 }    // this GameTeam will get id 6
  ]);

  // Now let's specify players.
  // For brevity, let's do it only for the second game (Winter Showdown).
  // Let's say that that s0me0ne and greenhead played for The Martians, while
  // not_spock and bowl_of_petunias played for The Plutonians:
  await PlayerGameTeam.bulkCreate([
    // In 'Winter Showdown' (i.e. GameTeamIds 3 and 4):
    { PlayerId: 1, GameTeamId: 3 },   // s0me0ne played for The Martians
    { PlayerId: 3, GameTeamId: 3 },   // greenhead played for The Martians
    { PlayerId: 4, GameTeamId: 4 },   // not_spock played for The Plutonians
    { PlayerId: 5, GameTeamId: 4 }    // bowl_of_petunias played for The Plutonians
  ]);

  // Now we can make queries!
  const game = await Game.findOne({
    where: {
      name: "Winter Showdown"
    },
    include: {
      model: GameTeam,
      include: [
        {
          model: Player,
          through: { attributes: [] } // Hide unwanted `PlayerGameTeam` nested object from results
        },
        Team
      ]
    }
  });

  console.log(`Found game: "${game.name}"`);
  for (let i = 0; i < game.GameTeams.length; i++) {
    const team = game.GameTeams[i].Team;
    const players = game.GameTeams[i].Players;
    console.log(`- Team "${team.name}" played game "${game.name}" with the following players:`);
    console.log(players.map(p => `--- ${p.username}`).join('\n'));
  }

})();

Output:

Found game: "Winter Showdown"
- Team "The Martians" played game "Winter Showdown" with the following players:
--- s0me0ne
--- greenhead
- Team "The Plutonians" played game "Winter Showdown" with the following players:
--- not_spock
--- bowl_of_petunias

So this is how we can achieve a many-to-many-to-many relationship between three models in Sequelize, by taking advantage of the Super Many-to-Many relationship technique!

This idea can be applied recursively for even more complex, many-to-many-to-...-to-many relationships (although at some point queries might become slow).


Association Scopes
--------------------------------------------------------------------------------

This section concerns association scopes, which are similar but not the same as model scopes.

Association scopes can be placed both on the associated model (the target of the association) and on the through table for Many-to-Many relationships.
Concept

Similarly to how a model scope is automatically applied on the model static calls, such as Model.scope('foo').findAll(), an association scope is a rule (more precisely, a set of default attributes and options) that is automatically applied on instance calls from the model. Here, instance calls mean method calls that are called from an instance (rather than from the Model itself). Mixins are the main example of instance methods (instance.getSomething, instance.setSomething, instance.addSomething and instance.createSomething).

Association scopes behave just like model scopes, in the sense that both cause an automatic application of things like where clauses to finder calls; the difference being that instead of applying to static finder calls (which is the case for model scopes), the association scopes automatically apply to instance finder calls (such as mixins).
Example

A basic example of an association scope for the One-to-Many association between models Foo and Bar is shown below.

    Setup:

      const Foo = sequelize.define('foo', { name: DataTypes.STRING });
      const Bar = sequelize.define('bar', { status: DataTypes.STRING });
      Foo.hasMany(Bar, {
          scope: {
              status: 'open'
          },
          as: 'openBars'
      });
      await sequelize.sync();
      const myFoo = await Foo.create({ name: "My Foo" });

    After this setup, calling myFoo.getOpenBars() generates the following SQL:

      SELECT
          `id`, `status`, `createdAt`, `updatedAt`, `fooId`
      FROM `bars` AS `bar`
      WHERE `bar`.`status` = 'open' AND `bar`.`fooId` = 1;

With this we can see that upon calling the .getOpenBars() mixin, the association scope { status: 'open' } was automatically applied into the WHERE clause of the generated SQL.
Achieving the same behavior with standard scopes

We could have achieved the same behavior with standard scopes:

// Foo.hasMany(Bar, {
//     scope: {
//         status: 'open'
//     },
//     as: 'openBars'
// });

Bar.addScope('open', {
    where: {
        status: 'open'
    }
});
Foo.hasMany(Bar);
Foo.hasMany(Bar.scope('open'), { as: 'openBars' });

With the above code, myFoo.getOpenBars() yields the same SQL shown above.


Polymorphic Associations
--------------------------------------------------------------------------------

Note: the usage of polymorphic associations in Sequelize, as outlined in this guide, should be done with caution. Don't just copy-paste code from here, otherwise you might easily make mistakes and introduce bugs in your code. Make sure you understand what is going on.
Concept

A polymorphic association consists on two (or more) associations happening with the same foreign key.

For example, consider the models Image, Video and Comment. The first two represent something that a user might post. We want to allow comments to be placed in both of them. This way, we immediately think of establishing the following associations:

    A One-to-Many association between Image and Comment:

    Image.hasMany(Comment);
    Comment.belongsTo(Image);

    A One-to-Many association between Video and Comment:

    Video.hasMany(Comment);
    Comment.belongsTo(Video);

However, the above would cause Sequelize to create two foreign keys on the Comment table: ImageId and VideoId. This is not ideal because this structure makes it look like a comment can be attached at the same time to one image and one video, which isn't true. Instead, what we really want here is precisely a polymorphic association, in which a Comment points to a single Commentable, an abstract polymorphic entity that represents one of Image or Video.

Before proceeding to how to configure such an association, let's see how using it looks like:

const image = await Image.create({ url: "https://placekitten.com/408/287" });
const comment = await image.createComment({ content: "Awesome!" });

console.log(comment.commentableId === image.id); // true

// We can also retrieve which type of commentable a comment is associated to.
// The following prints the model name of the associated commentable instance.
console.log(comment.commentableType); // "Image"

// We can use a polymorphic method to retrieve the associated commentable, without
// having to worry whether it's an Image or a Video.
const associatedCommentable = await comment.getCommentable();

// In this example, `associatedCommentable` is the same thing as `image`:
const isDeepEqual = require('deep-equal');
console.log(isDeepEqual(image, commentable)); // true

Configuring a One-to-Many polymorphic association

To setup the polymorphic association for the example above (which is an example of One-to-Many polymorphic association), we have the following steps:

    Define a string field called commentableType in the Comment model;
    Define the hasMany and belongsTo association between Image/Video and Comment:
        Disabling constraints (i.e. using { constraints: false }), since the same foreign key is referencing multiple tables;
        Specifying the appropriate association scopes;
    To properly support lazy loading, define a new instance method on the Comment model called getCommentable which calls, under the hood, the correct mixin to fetch the appropriate commentable;
    To properly support eager loading, define an afterFind hook on the Comment model that automatically populates the commentable field in every instance;
    To prevent bugs/mistakes in eager loading, you can also delete the concrete fields image and video from Comment instances in the same afterFind hook, leaving only the abstract commentable field available.

Here is an example:

// Helper function
const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;

class Image extends Model {}
Image.init({
  title: DataTypes.STRING,
  url: DataTypes.STRING
}, { sequelize, modelName: 'image' });

class Video extends Model {}
Video.init({
  title: DataTypes.STRING,
  text: DataTypes.STRING
}, { sequelize, modelName: 'video' });

class Comment extends Model {
  getCommentable(options) {
    if (!this.commentableType) return Promise.resolve(null);
    const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
    return this[mixinMethodName](options);
  }
}
Comment.init({
  title: DataTypes.STRING,
  commentableId: DataTypes.INTEGER,
  commentableType: DataTypes.STRING
}, { sequelize, modelName: 'comment' });

Image.hasMany(Comment, {
  foreignKey: 'commentableId',
  constraints: false,
  scope: {
    commentableType: 'image'
  }
});
Comment.belongsTo(Image, { foreignKey: 'commentableId', constraints: false });

Video.hasMany(Comment, {
  foreignKey: 'commentableId',
  constraints: false,
  scope: {
    commentableType: 'video'
  }
});
Comment.belongsTo(Video, { foreignKey: 'commentableId', constraints: false });

Comment.addHook("afterFind", findResult => {
  if (!Array.isArray(findResult)) findResult = [findResult];
  for (const instance of findResult) {
    if (instance.commentableType === "image" && instance.image !== undefined) {
      instance.commentable = instance.image;
    } else if (instance.commentableType === "video" && instance.video !== undefined) {
      instance.commentable = instance.video;
    }
    // To prevent mistakes:
    delete instance.image;
    delete instance.dataValues.image;
    delete instance.video;
    delete instance.dataValues.video;
  }
});

Since the commentableId column references several tables (two in this case), we cannot add a REFERENCES constraint to it. This is why the constraints: false option was used.

Note that, in the code above:

    The Image -> Comment association defined an association scope: { commentableType: 'image' }
    The Video -> Comment association defined an association scope: { commentableType: 'video' }

These scopes are automatically applied when using the association functions (as explained in the Association Scopes guide). Some examples are below, with their generated SQL statements:

    image.getComments():

    SELECT "id", "title", "commentableType", "commentableId", "createdAt", "updatedAt"
    FROM "comments" AS "comment"
    WHERE "comment"."commentableType" = 'image' AND "comment"."commentableId" = 1;

    Here we can see that `comment`.`commentableType` = 'image' was automatically added to the WHERE clause of the generated SQL. This is exactly the behavior we want.

    image.createComment({ title: 'Awesome!' }):

    INSERT INTO "comments" (
      "id", "title", "commentableType", "commentableId", "createdAt", "updatedAt"
    ) VALUES (
      DEFAULT, 'Awesome!', 'image', 1,
      '2018-04-17 05:36:40.454 +00:00', '2018-04-17 05:36:40.454 +00:00'
    ) RETURNING *;

    image.addComment(comment):

    UPDATE "comments"
    SET "commentableId"=1, "commentableType"='image', "updatedAt"='2018-04-17 05:38:43.948 +00:00'
    WHERE "id" IN (1)

Polymorphic lazy loading

The getCommentable instance method on Comment provides an abstraction for lazy loading the associated commentable - working whether the comment belongs to an Image or a Video.

It works by simply converting the commentableType string into a call to the correct mixin (either getImage or getVideo).

Note that the getCommentable implementation above:

    Returns null when no association is present (which is good);
    Allows you to pass an options object to getCommentable(options), just like any other standard Sequelize method. This is useful to specify where-conditions or includes, for example.

Polymorphic eager loading

Now, we want to perform a polymorphic eager loading of the associated commentables for one (or more) comments. We want to achieve something similar to the following idea:

const comment = await Comment.findOne({
  include: [ /* What to put here? */ ]
});
console.log(comment.commentable); // This is our goal

The solution is to tell Sequelize to include both Images and Videos, so that our afterFind hook defined above will do the work, automatically adding the commentable field to the instance object, providing the abstraction we want.

For example:

const comments = await Comment.findAll({
  include: [Image, Video]
});
for (const comment of comments) {
  const message = `Found comment #${comment.id} with ${comment.commentableType} commentable:`;
  console.log(message, comment.commentable.toJSON());
}

Output example:

Found comment #1 with image commentable: { id: 1,
  title: 'Meow',
  url: 'https://placekitten.com/408/287',
  createdAt: 2019-12-26T15:04:53.047Z,
  updatedAt: 2019-12-26T15:04:53.047Z }

Caution - possibly invalid eager/lazy loading!

Consider a comment Foo whose commentableId is 2 and commentableType is image. Consider also that Image A and Video X both happen to have an id equal to 2. Conceptually, it is clear that Video X is not associated to Foo, because even though its id is 2, the commentableType of Foo is image, not video. However, this distinction is made by Sequelize only at the level of the abstractions performed by getCommentable and the hook we created above.

This means that if you call Comment.findAll({ include: Video }) in the situation above, Video X will be eager loaded into Foo. Thankfully, our afterFind hook will delete it automatically, to help prevent bugs, but regardless it is important that you understand what is going on.

The best way to prevent this kind of mistake is to avoid using the concrete accessors and mixins directly at all costs (such as .image, .getVideo(), .setImage(), etc), always preferring the abstractions we created, such as .getCommentable() and .commentable. If you really need to access eager-loaded .image and .video for some reason, make sure you wrap that in a type check such as comment.commentableType === 'image'.
Configuring a Many-to-Many polymorphic association

In the above example, we had the models Image and Video being abstractly called commentables, with one commentable having many comments. However, one given comment would belong to a single commentable - this is why the whole situation is a One-to-Many polymorphic association.

Now, to consider a Many-to-Many polymorphic association, instead of considering comments, we will consider tags. For convenience, instead of calling Image and Video as commentables, we will now call them taggables. One taggable may have several tags, and at the same time one tag can be placed in several taggables.

The setup for this goes as follows:

    Define the junction model explicitly, specifying the two foreign keys as tagId and taggableId (this way it is a junction model for a Many-to-Many relationship between Tag and the abstract concept of taggable);
    Define a string field called taggableType in the junction model;
    Define the belongsToMany associations between the two models and Tag:
        Disabling constraints (i.e. using { constraints: false }), since the same foreign key is referencing multiple tables;
        Specifying the appropriate association scopes;
    Define a new instance method on the Tag model called getTaggables which calls, under the hood, the correct mixin to fetch the appropriate taggables.

Implementation:

class Tag extends Model {
  getTaggables(options) {
    const images = await this.getImages(options);
    const videos = await this.getVideos(options);
    // Concat images and videos in a single array of taggables
    return images.concat(videos);
  }
}
Tag.init({
  name: DataTypes.STRING
}, { sequelize, modelName: 'tag' });

// Here we define the junction model explicitly
class Tag_Taggable extends Model {}
Tag_Taggable.init({
  tagId: {
    type: DataTypes.INTEGER,
    unique: 'tt_unique_constraint'
  },
  taggableId: {
    type: DataTypes.INTEGER,
    unique: 'tt_unique_constraint',
    references: null
  },
  taggableType: {
    type: DataTypes.STRING,
    unique: 'tt_unique_constraint'
  }
}, { sequelize, modelName: 'tag_taggable' });

Image.belongsToMany(Tag, {
  through: {
    model: Tag_Taggable,
    unique: false,
    scope: {
      taggableType: 'image'
    }
  },
  foreignKey: 'taggableId',
  constraints: false
});
Tag.belongsToMany(Image, {
  through: {
    model: Tag_Taggable,
    unique: false
  },
  foreignKey: 'tagId',
  constraints: false
});

Video.belongsToMany(Tag, {
  through: {
    model: Tag_Taggable,
    unique: false,
    scope: {
      taggableType: 'video'
    }
  },
  foreignKey: 'taggableId',
  constraints: false
});
Tag.belongsToMany(Video, {
  through: {
    model: Tag_Taggable,
    unique: false
  },
  foreignKey: 'tagId',
  constraints: false
});

The constraints: false option disables references constraints, as the taggableId column references several tables, we cannot add a REFERENCES constraint to it.

Note that:

    The Image -> Tag association defined an association scope: { taggableType: 'image' }
    The Video -> Tag association defined an association scope: { taggableType: 'video' }

These scopes are automatically applied when using the association functions. Some examples are below, with their generated SQL statements:

    image.getTags():

    SELECT
      `tag`.`id`,
      `tag`.`name`,
      `tag`.`createdAt`,
      `tag`.`updatedAt`,
      `tag_taggable`.`tagId` AS `tag_taggable.tagId`,
      `tag_taggable`.`taggableId` AS `tag_taggable.taggableId`,
      `tag_taggable`.`taggableType` AS `tag_taggable.taggableType`,
      `tag_taggable`.`createdAt` AS `tag_taggable.createdAt`,
      `tag_taggable`.`updatedAt` AS `tag_taggable.updatedAt`
    FROM `tags` AS `tag`
    INNER JOIN `tag_taggables` AS `tag_taggable` ON
      `tag`.`id` = `tag_taggable`.`tagId` AND
      `tag_taggable`.`taggableId` = 1 AND
      `tag_taggable`.`taggableType` = 'image';

    Here we can see that `tag_taggable`.`taggableType` = 'image' was automatically added to the WHERE clause of the generated SQL. This is exactly the behavior we want.

    tag.getTaggables():

    SELECT
      `image`.`id`,
      `image`.`url`,
      `image`.`createdAt`,
      `image`.`updatedAt`,
      `tag_taggable`.`tagId` AS `tag_taggable.tagId`,
      `tag_taggable`.`taggableId` AS `tag_taggable.taggableId`,
      `tag_taggable`.`taggableType` AS `tag_taggable.taggableType`,
      `tag_taggable`.`createdAt` AS `tag_taggable.createdAt`,
      `tag_taggable`.`updatedAt` AS `tag_taggable.updatedAt`
    FROM `images` AS `image`
    INNER JOIN `tag_taggables` AS `tag_taggable` ON
      `image`.`id` = `tag_taggable`.`taggableId` AND
      `tag_taggable`.`tagId` = 1;

    SELECT
      `video`.`id`,
      `video`.`url`,
      `video`.`createdAt`,
      `video`.`updatedAt`,
      `tag_taggable`.`tagId` AS `tag_taggable.tagId`,
      `tag_taggable`.`taggableId` AS `tag_taggable.taggableId`,
      `tag_taggable`.`taggableType` AS `tag_taggable.taggableType`,
      `tag_taggable`.`createdAt` AS `tag_taggable.createdAt`,
      `tag_taggable`.`updatedAt` AS `tag_taggable.updatedAt`
    FROM `videos` AS `video`
    INNER JOIN `tag_taggables` AS `tag_taggable` ON
      `video`.`id` = `tag_taggable`.`taggableId` AND
      `tag_taggable`.`tagId` = 1;

Note that the above implementation of getTaggables() allows you to pass an options object to getCommentable(options), just like any other standard Sequelize method. This is useful to specify where-conditions or includes, for example.
Applying scopes on the target model

In the example above, the scope options (such as scope: { taggableType: 'image' }) were applied to the through model, not the target model, since it was used under the through option.

We can also apply an association scope on the target model. We can even do both at the same time.

To illustrate this, consider an extension of the above example between tags and taggables, where each tag has a status. This way, to get all pending tags of an image, we could establish another belognsToMany relationship between Image and Tag, this time applying a scope on the through model and another scope on the target model:

Image.belongsToMany(Tag, {
  through: {
    model: Tag_Taggable,
    unique: false,
    scope: {
      taggableType: 'image'
    }
  },
  scope: {
    status: 'pending'
  },
  as: 'pendingTags',
  foreignKey: 'taggableId',
  constraints: false
});

This way, when calling image.getPendingTags(), the following SQL query will be generated:

SELECT
  `tag`.`id`,
  `tag`.`name`,
  `tag`.`status`,
  `tag`.`createdAt`,
  `tag`.`updatedAt`,
  `tag_taggable`.`tagId` AS `tag_taggable.tagId`,
  `tag_taggable`.`taggableId` AS `tag_taggable.taggableId`,
  `tag_taggable`.`taggableType` AS `tag_taggable.taggableType`,
  `tag_taggable`.`createdAt` AS `tag_taggable.createdAt`,
  `tag_taggable`.`updatedAt` AS `tag_taggable.updatedAt`
FROM `tags` AS `tag`
INNER JOIN `tag_taggables` AS `tag_taggable` ON
  `tag`.`id` = `tag_taggable`.`tagId` AND
  `tag_taggable`.`taggableId` = 1 AND
  `tag_taggable`.`taggableType` = 'image'
WHERE (
  `tag`.`status` = 'pending'
);

We can see that both scopes were applied automatically:

    `tag_taggable`.`taggableType` = 'image' was added automatically to the INNER JOIN;
    `tag`.`status` = 'pending' was added automatically to an outer where clause.


