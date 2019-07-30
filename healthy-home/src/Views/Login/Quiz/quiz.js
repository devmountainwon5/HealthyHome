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

    return (
        <div className="quiz">
            <h1>What Kind Of Home Do You Live In?</h1>
            <form id="question1">
                <input type="radio" name="choice" value="Apartment"> Apartment
                <input type="radio" name="choice" value="House"> House
                <input type="radio" name="choice" value="Condo"> Condo
                <input type="radio" name="choice" value="Trailer"> Trailer
                <input type="radio" name="choice" value="Townhouse"> Townhouse
                <br/>
                <input type="submit" value="Submit" onClick=""/>
            </form>
            <h1>Are You Responsible For Your Yard Care?</h1>
            <form id="question2">
                <input type="radio" name="choice" value="Yes"> Yes
                <input type="radio" name="choice" value="No"> No
                <br/>
                <input type="submit" value="Submit" onClick=""/>
            </form>
            <h1>How Would You Like To Be Reminded Of Upcoming Tasks?</h1>
            <form id="question3">
                <input type="radio" name="choice" value="Text"/>
                <input type="radio" name="choice" value="Email"/>
                <input type="radio" name="choice" value="Pop-Ups"/>
                <br/>
                <input type="submit" value="Submit" onClick=" "/> 

            </form>
            <Header />
            {quizItems}
        </div>
}

export default Question; 