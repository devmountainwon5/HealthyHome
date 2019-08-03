import React, { useState } from 'react';
import { answerHelpers } from '../../../../shared/helpers/database/quizDb';

function Question(props) {
    const { questionId, questionText, onSubmit } = props;
    const answerHelper = answerHelpers ? answerHelpers.findById(questionId) : null;
    // console.log(answerHelper);
    const { allowMultiple, answers } = answerHelper ? answerHelper : { allowMultiple: false, answers: {} };
    const setupState = () => {
        const out = {};
        for (const key in answers) {
            out[key] = false;
        }
        return out;
    }

    const [userAnswers, changeAnswers] = useState(setupState());

    const onChange = (e) => {
        // console.log(e.target.value, e.target.name, e.target.checked);
        const newState = {};
        for (const key in userAnswers) {
            if (e.target.value == key)
                newState[key] = Boolean(e.target.checked);
            else
                newState[key] = allowMultiple ? userAnswers[key] : false;
        }
        // console.dir(newState);
        changeAnswers(newState);
    }

    const inputType = allowMultiple ? "checkbox" : "radio";

    const answerArr = [];
    for (const key in answers) {
        answerArr.push(<div>
            <input type={inputType} name={questionId} value={key} onChange={onChange} />
            {answers[key].displayText}
        </div>)
    }

    return (<div>
        <h1>{questionText}</h1>
        <div>
            {answerArr}
        </div>
        <button>Submit</button>
    </div>);
}

export default Question;
