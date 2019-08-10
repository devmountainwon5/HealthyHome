module.exports = {
    getUpcomingTodos: req => {
        const db = req.app.get('db');
        // const userId = req.session.user ? req.session.user.userId : null;
        
        return db.get_upcoming_todos({id:req.body.user_id})
            .then(todos => {
                return {
                    success: true,
                    todos
                }

            })
            .catch(err => {
                return {
                    success: false,
                    msg: err
                }
            })
    }
}