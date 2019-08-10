// Hard-coded aliases for the data types in the DB
// Items can be added, but do not modify existing ones without a VERY good reason
const answerDataTypes = Object.freeze({
    impliedTodo: 1
});

// Accepts the data of a users quiz answers
function getSuggestedTypes(selectedAnswerData) {
    const suggestedTypes = selectedAnswerData.reduce((types, e) => {
        if (e.data_type === answerDataTypes.impliedTodo && !types.includes(parseInt(e.data_string)))
            types.push(parseInt(e.data_string));

        return types;
    }, []);

    return suggestedTypes;
}

module.exports = {
    getUserTodos: (req, res, next) => {
        const db = req.app.get('db');

        const userId = req.session.user ? req.session.user.userId : null;

        return db.get_user_todos([userId])
            .then(todos => {

                return {
                    success: true,
                    userTodos: todos
                }
            })
            .catch(err => {
                return {
                    success: false,
                    msg: err
                };
            })
    },
    getSuggested: (req, res, next) => {
        const db = req.app.get('db');

        const userId = req.session.user ? req.session.user.userId : null;

        return db.get_quiz_answer_data({ userId })
            .then(answerData => {
                // console.log(answerData);

                const suggestedTypes = getSuggestedTypes(answerData);

                const suggestedPromises = suggestedTypes.map(e => db.list_todos_table.find({ todo_type_id: e }));

                return Promise.all(suggestedPromises);
            })
            .then(todoSets => {
                const allSuggested = todoSets.reduce((suggested, e) => {
                    suggested.push(...e);
                    return suggested;
                }, []);

                return {
                    success: true,
                    suggested: allSuggested
                }
            })
            .catch(err => {
                return {
                    success: false,
                    msg: err
                };
            })
    },
    romoveUserTodo: (req, res, next) => {
        const db = req.app.get('db');
        const user_id = req.session.user ? req.session.user.userId : null;
        const { todo_id } = req.params;
        return db.user_todos_table.findOne({ user_id, todo_id })
            .then((todos) => {
                if (!todos) {
                    throw 'user is not assigned to this todo'
                }
                return db.user_todos_table.update({ users_todos_id: todos.users_todos_id}, {is_active: false})
            })
            .then(() => {
                return db.get_user_todos([user_id])
            })
            .then(todos => {

                return {
                    success: true,
                    userTodos: todos
                }
            })
            .catch(err => {
                return {
                    success: false,
                    msg: err
                };
            })
    },
    completeUserTodo: (req, res, next) => {
        const db = req.app.get('db');
        const user_id = req.session.user ? req.session.user.userId : null;
        const { todo_id } = req.body;
        return db.user_todos_table.findOne({ users_todos_id: todo_id })
            .then((todos) => {
                if (!todos) {
                    throw 'user is not assigned to this todo'
                }
                return db.completed_date_table.insert({ user_id, users_todos_id: todos.users_todos_id, completed_date: new Date().toJSON().slice(0, 19).replace('T', ' ') })
            })
            .then(() => {
                return db.get_user_todos([user_id])
            })
            .then(todos => {

                return {
                    success: true,
                    userTodos: todos
                }
            })
            .catch(err => {
                return {
                    success: false,
                    msg: err
                };
            })
    },
    addUserTodos: (req, res, next) => {
        const db = req.app.get('db');
        const user_id = req.session.user ? req.session.user.userId : null;
        const { todo_id } = req.body;
        return db.user_todos_table.findOne({ user_id, todo_id })
            .then((todos) => {
                    if(!todos){
                        return db.user_todos_table.insert({ user_id, todo_id, date_added: new Date().toJSON().slice(0, 19).replace('T', ' ') }) 
                    }else if(!todos.is_active) {
                        return db.user_todos_table.update({ users_todos_id: todos.users_todos_id}, {is_active: true})
                    } else {
                        throw 'todo is already assigned to user'
                    }
                
                
            })
            .then(todos => {
                return db.completed_date_table.insert({ user_id, users_todos_id: todos.users_todos_id, completed_date: todos.date_added })
            })
            .then(() => {
                return db.get_user_todos([user_id])
            })
            .then(todos => {

                return {
                    success: true,
                    userTodos: todos
                }
            })
            .catch(err => {
                return {
                    success: false,
                    msg: err
                };
            })
    },
};