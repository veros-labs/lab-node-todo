
# Todo List

Today's homework is to build a todo list.

Refer to the presentation and to documentation
- [presentation](https://dc-houston.herokuapp.com/p2/Postgres/PGPromise.html#1)
- [documentation](http://vitaly-t.github.io/pg-promise/index.html)
- [examples](https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example)

In the end, your todo list should be able to read, write, update and delete a todo.


Here is a working example: https://dc-todo-list-redux.netlify.app/


The starting template has be created for you.

To use the template 
- `git clone` https://github.com/veros-labs/lab-node-todo.git 
- `cd lab-node-todo` navigate into the lab-node-todo directory
- `npm install` (install all of the dependencies)

Remember to :

- Create a postgres database
- Create a table inside of your database with the following attributes (columns):
    - id
    - description
- Install pg-promise and configure your database inside of node
- Add the logic to parse header information to your index.js file
- Create your node routes first and test them on thunder client

```js


// GET /todos, displays all of the todos

// GET /todos/:id , displays todos by id

// POST /todos, creates a new todo

// PUT /todos/:id, update a todo item

// DELETE /todos/:id, delete a todo

```

- Once you've completed and tested your node routes, it's time to work on your gui (EJS file).
- You're going to have to add front-end logic for the button clicks inside of your public js file.
