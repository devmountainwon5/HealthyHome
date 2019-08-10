module.exports = {
	retrieveScore: req => {
		const db = req.app.get("db")
		return db.get_user_todos([req.body.id]).then(res => {
			const frequencyKey = [1, 7, 30, 90, 180, 365]
			let totalTodos = res.length
			//tally = todos that arent overdue
			let tally = 0
			// current day out of 366
			let current_day = getTheDay(new Date())
			//javascript months are 0 based
			const monthKey = {
				jan: "00",
				feb: "01",
				mar: "02",
				apr: "03",
				may: "04",
				jun: "05",
				jul: "06",
				aug: "07",
				sep: "08",
				oct: "09",
				nov: "10",
				dec: "11"
			}
			function getTheDay(date) {
				var startOfYear = new Date(date.getFullYear(), 0, 0)
				var diff = date - startOfYear
				var oneDay = 1000 * 60 * 60 * 24
				return Math.floor(diff / oneDay)
			}

			//give us a score of +1 (if not overdue) or 0 (if overdue)
			res.forEach(todo => {
				let str = todo.last_completed_date
					.toString()
					.match(/[A-Za-z]{3}\s[0-9]{2}\s(\d)+/gi)
					.toString()
				let year = str.slice(7)
				let month = monthKey[str.slice(0, 3).toLowerCase()]
				let day = str.slice(4, 6)

				//calc the num day of db last_completed_date
				let dueDate = getTheDay(new Date(year, month, Number(day) + 1)) + frequencyKey[Number(todo.frequency_id) - 1]
				if (current_day < dueDate) {
					tally++
				}
			})
			return String(tally / totalTodos)
		})
	}
}
