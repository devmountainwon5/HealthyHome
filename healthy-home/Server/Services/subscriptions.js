module.exports = {
    tasksAndTypes: (req, res, next) => {
        const db = req.app.get('db');

        return db.tasks_with_type()
            .then(info => {
                return {
                    success: true,
                    subInfo: info
                }
            })
            .catch(err => {
                return { success: false, msg: err };
            });
    }
};