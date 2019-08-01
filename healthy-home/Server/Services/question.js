module.exports = {
    retrieveAll: (req, res, next) => {
        const db = req.app.get('db');

       return db.registration_question_table.find()
        .then((questions) => {
            return {
                    success: true, 
                    questions
                } 
        })
        .catch(err => {
            return { success: false, msg: err };
        });
    },
    submit: (req, res, next) => {
        const db = req.app.get('db');
        const{dwelling, yard, reminder} = req.body 
       return db.registration_question_table.find()
        .then((questions) => {
            return {
                    success: true, 
                    questions
                } 
        })
        .catch(err => {
            return { success: false, msg: err };
        });
    },
}