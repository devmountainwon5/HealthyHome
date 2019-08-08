module.exports = {
    retrieveAll: (req, res, next) => {
        const db = req.app.get('db');
        let completeQuestions = {}
        return db.registration_question_table.find()
            .then((questions) => {
                completeQuestions = questions.reduce((r, e) => {
                    e.answers = []
                    r[e.reg_question_id] = e
                    return r
                }, {})
                const answer_promises = questions.map((e) => {
                    return db.question_answers.find({
                        registration_question_table_id: e.reg_question_id
                    })
                })

                return Promise.all(answer_promises)
            })
            .then((answers) => {
                answers.forEach((e) => {
                    completeQuestions[`${e[0].registration_question_table_id}`].answers.push(e)
                })
                completeQuestions = Object.values(completeQuestions)
                return { success: true, questions: completeQuestions }
            })
            .catch(err => {
                return { success: false, msg: err };
            });
    },
}