const user = require('./user');
const tips = require('./tips');
const questions = require('./questions');
const barometer = require('./barometer')
const emails = require('./emails');
const todo = require('./todo');
const upcomingtodos = require('./upcomingTodos')
const { authMiddleware } = require('../Middleware/auth');


module.exports = (app) => {
    app.use('/auth', user);
    app.use('/tips', authMiddleware, tips);
    app.use('/emails', authMiddleware, emails);
    app.use('/barometer', barometer);
    app.use('/questions', authMiddleware, questions);
    app.use('/todo', authMiddleware, todo);
    app.use('/upcomingTodos', upcomingtodos)
}