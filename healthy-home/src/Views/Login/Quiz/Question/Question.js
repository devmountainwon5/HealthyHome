import React, { useState } from 'react';

function Question(props) {
    const { question, answers, allowMultiple } = props;

    const setupState = () => {
        return answers.reduce((r, e) => {
            r[e.id] = false;
            return r;
        }, {});
    }

    const [userAnswers, changeAnswers] = useState(setupState());

    const onChange = (e) => {
        console.log(e.target.value, e.target.name, e.target.checked);
        const newState = {};
        for(const key in userAnswers) {
            if (e.target.value == key)
                newState[key] = Boolean(e.target.checked);
            else
                newState[key] = allowMultiple ? userAnswers[key] : false;
        }
        console.dir(newState);
        changeAnswers(newState);
    }

    const inputType = allowMultiple ? "checkbox" : "radio";

    const answerMap = answers.map(e => {
        return <div>
            <input type={inputType} name={question.id} value={e.id} onChange={onChange} />
            {e.text}
        </div>
    })

    return (<div>
        <h1>Question</h1>
        <div>
            {answerMap}
        </div>
    </div>);
}

export default Question;