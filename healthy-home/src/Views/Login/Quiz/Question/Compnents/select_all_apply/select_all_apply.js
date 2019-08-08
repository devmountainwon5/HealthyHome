import React from 'react'

export default function select_all_apply(props) {
    const answers = props.answers.map((e) => {
        return (
            <div>
                <input type="checkbox" name={`Question_${e.registration_question_table_id}`} onChange={(event)=>{props.handleAnswer(event, e.answer)}} />
                {e.answer}
            </div>
        )
    })
    return (
        <div>
           {answers}
        </div>
    )
}
