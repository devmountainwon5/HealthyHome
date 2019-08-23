import React from "react"
import "../answers.css"

export default function select_all_apply(props) {
	const answers = props.answers.map((e, i) => {
		return (
			<div>
				<input
					autoComplete='on'
					type='checkbox'
					name={`Question_${e.registration_question_table_id}`}
					id={`answer_${e.registration_question_table_id}_${i}`}
					onChange={event => {
						props.handleAnswer(event, e.answer)
					}}
				/>
				<label htmlFor={`answer_${e.registration_question_table_id}_${i}`}>{e.answer}</label>
			</div>
		)
	})
	return <div className='answers'>{answers}</div>
}
