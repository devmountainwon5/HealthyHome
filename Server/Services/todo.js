const emailService = require('./emails')
// Hard-coded aliases for the data types in the DB
// Items can be added, but do not modify existing ones without a VERY good reason
const answerDataTypes = Object.freeze({
    impliedTodo: 1
});

const getFrequencyDays = (frequency_id) => {
    switch (frequency_id) {
        case 1:
            return 1
        case 2:
            return 7
        case 3:
            return 28
        case 4:
            return 91
        case 5:
            return 182
        case 6:
            return 365
        default:
            return 0
    }
}

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

        const user_id = req.session.user ? req.session.user.user_id : null;

        return db.get_todos_for_user([user_id])
            .then((todos) => {
                const todoPromises = todos.map(async (e) => {
                    e.completed_dates = await db.completed_date_table.find({ users_todos_id: e.id })
                    return e
                })
                return Promise.all(todoPromises)
            })
            .then((todos) => {
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

        const user_id = req.session.user ? req.session.user.user_id : null;

        return db.get_quiz_answer_data({ user_id })
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
        const user_id = req.session.user ? req.session.user.user_id : null;
        const { todo_id } = req.params;
        return db.user_todos_table.findOne({ user_id, todo_id })
            .then((todos) => {
                if (!todos) {
                    throw 'user is not assigned to this todo'
                }
                return db.user_todos_table.update({ users_todos_id: todos.users_todos_id }, { is_active: false })
            })
            .then(() => {
                return db.get_todos_for_user([user_id])
            })
            .then((todos) => {
                const todoPromises = todos.map(async (e) => {
                    e.completed_dates = await db.completed_date_table.find({ users_todos_id: e.id })
                    return e
                })
                return Promise.all(todoPromises)
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
        const user_id = req.session.user ? req.session.user.user_id : null;
        const { todo_id } = req.body;
        let currentTodo = {}; 
        return db.user_todos_table.findOne({ users_todos_id: todo_id })
            .then((todos) => {
                if (!todos) {
                    throw 'user is not assigned to this todo'
                }
                return db.completed_date_table.insert({ user_id, users_todos_id: todos.users_todos_id, completed_date: new Date().toJSON().slice(0, 19).replace('T', ' ') })
            })
            .then(() => {
                return db.get_todos_for_user([user_id])
            })
            .then((todos) => {
                currentTodo = todos.reduce((r, e, i) => {
                    if (e.todo_id = todo_id) {
                        r = e
                    } return r
                }, {})
                const todoPromises = todos.map(async (e) => {
                    e.completed_dates = await db.completed_date_table.find({ users_todos_id: e.id })
                    return e
                })
                return Promise.all(todoPromises)
            })
            .then(todos => {
                const outgoing =
                {
                    email: req.session.user.email,
                    frequency: getFrequencyDays(currentTodo.frequency_id),
                    summary: `${currentTodo.todo_item}`,
                    description: `Healthy Home reminder for: ${currentTodo.todo_item}`,
                    text: `Healthy Home has a new reminder for you!`
                }
                emailService(outgoing);
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
        const user_id = req.session.user ? req.session.user.user_id : null;
        const { todo_id } = req.body;
        let currentTodo = {};
        return db.user_todos_table.findOne({ user_id, todo_id })
            .then((todos) => {
                if (!todos) {
                    return db.user_todos_table.insert({ user_id, todo_id, date_added: new Date().toJSON().slice(0, 19).replace('T', ' ') })
                } else if (!todos.is_active) {
                    return db.user_todos_table.update({ users_todos_id: todos.users_todos_id }, { is_active: true })
                } else {
                    throw 'todo is already assigned to user'
                }


            })
            .then(todos => {
                return db.completed_date_table.insert({ user_id, users_todos_id: todos.users_todos_id, completed_date: todos.date_added })
            })
            .then(() => {
                return db.get_todos_for_user([user_id])
            })
            .then((todos) => {
                currentTodo = todos.reduce((r, e, i) => {
                    if (e.todo_id = todo_id) {
                        r = e
                    } return r
                }, {})
                const todoPromises = todos.map(async (e) => {
                    e.completed_dates = await db.completed_date_table.find({ users_todos_id: e.id })
                    return e
                })
                return Promise.all(todoPromises)
            })
            .then(todos => {
                const outgoing =
                {
                    email: req.session.user.email,
                    frequency: getFrequencyDays(currentTodo.frequency_id),
                    summary: `${currentTodo.todo_item}`,
                    description: `Healthy Home reminder for: ${currentTodo.todo_item}`,
                    text: `Healthy Home has a new reminder for you!`
                }
                emailService(outgoing);
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