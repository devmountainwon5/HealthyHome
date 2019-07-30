module.exports = {
    retrieveAll: (req, res, next) => {
        const db = req.app.get('db');

       return db.home_tips_table.find()
        .then((tips) => {
            return {
                    success: true, 
                    tips
                } 
        })
        .catch(err => {
            return { success: false, msg: err };
        });
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        db.home_tips_table.Math.floor(Math.random() * {home_tips_id: Number(req.params.home_tips_id)})
            .then((tip) => {
                res.send({success: true, tip})
            })
            .catch((err) => {
                res.send({success: false, err})
            })
    }
}