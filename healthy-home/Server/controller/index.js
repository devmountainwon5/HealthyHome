const user = require('./user');
const tips = require('./tips');


module.exports = (app) => {
    app.use('/auth/', user);
}

module.exports = (app) => {
    app.use('/tips/', tips);
}