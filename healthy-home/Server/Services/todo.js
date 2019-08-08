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

        return db.get_user_todos( [userId] )
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
                console.log(answerData);

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
    }
};