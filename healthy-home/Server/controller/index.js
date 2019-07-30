const user = require('./user');
const tips = require('./tips');
const questions = require('./questions');


module.exports = (app) => {
    app.use('/auth', user);
    app.use('/tips', tips);
    app.use('/questions', questions);
}