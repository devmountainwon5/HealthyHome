import React from 'react';
import '../answers.css';

export default function multiple_choice(props) {
    const answers = props.answers.map((e, i) => {
        return (
            <div>
                <input type="radio" name={`Question_${e.registration_question_table_id}`} id={`answer_${e.registration_question_table_id}_${i}`} value= {e.answer} onChange={(event)=>{props.handleAnswer(event, "")}} />
                <label htmlFor={`answer_${e.registration_question_table_id}_${i}`}>{e.answer}</label>
            </div>
        )
    })
    return (
        <div className="answers">
           {answers}
        </div>
    )
}
