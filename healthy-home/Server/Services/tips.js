module.exports = {
    retrieveAll: (req, res, next) => {
        const db = req.app.get('db');

        db.home_tips_table.find()
        .then((tips) => {
            return {
                    success: true, 
                    tips
                } 
        })
        .catch(err => {
            return { success: false, msg: err };
        });
    }
}