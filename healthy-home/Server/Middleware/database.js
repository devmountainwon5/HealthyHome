const massive = require('massive');

module.exports = (app) => {
    massive(process.env.DATABASE_URL)
        .then(db => {
            console.log("Database connected");
            app.set('db', db);
        })
        .catch(err => {
            console.log(err);
        });
}