module.exports = {
    getUpcomingTodos: (req, res, next) => {
        const db = req.app.get('db');
        const userId = req.session.user ? req.session.user.userId : null;
        
        return db.get_upcoming_todos([userId])
            .then(todos => {
                return {
                    success: true,
                    upcomingTodos: todos
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