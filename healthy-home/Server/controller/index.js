const user = require('./user');
const tips = require('./tips');


module.exports = (app) => {
    app.use('/auth', user);
    app.use('/tips', tips);
}