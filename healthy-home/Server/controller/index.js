const user = require('./user');
const tips = require('./tips');
const questions = require('./questions');
const barometer = require('./barometer')
const emails = require('./emails');
const todo = require('./todo');
const { authMiddleWare } = require('../Middleware/auth');


module.exports = (app) => {
    app.use('/auth', user);
    app.use('/tips', authMiddleWare, tips);
    app.use('/emails', authMiddleWare, emails);
    app.use('/barometer', authMiddleWare, barometer);
    app.use('/questions', authMiddleWare, questions);
    app.use('/todo', authMiddleWare, todo);
}