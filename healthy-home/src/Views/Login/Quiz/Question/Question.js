import React, { useState } from 'react';
import { answerHelpers } from '../../../../shared/helpers/database/quizDb';

function Question(props) {
    const { questionId, questionText, handleUpdate } = props;
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
        handleUpdate(Number(e.target.name), e.target.value);
    }

    const inputType = allowMultiple ? "checkbox" : "radio";

    const answerArr = [];
    for (const key in answers) {
        answerArr.push(<div>
            <input key={`${questionId}_${key}`} type={inputType} name={questionId} value={key} onChange={onChange} />
            {answers[key].displayText}
        </div>)
    }
    console.log(userAnswers)
    return (<div>
        <h1>{questionText}</h1>
        <div>
            {answerArr}
        </div>
    </div>);
}

export default Question;
