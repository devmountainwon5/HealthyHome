import React, { Component } from 'react'
import SelectAllApply from './Compnents/select_all_apply/select_all_apply'
import MultipleChoice from './Compnents/multiple_choice/multiple_choice'

class Question extends Component {
    render() { 
        let answers = ""
        if(this.props.question.question_type_id === 1) {
            answers = <MultipleChoice answers = {this.props.question.answers[0]}/>
        } else if (this.props.question.question_type_id === 2){
             answers = <SelectAllApply answers = {this.props.question.answers[0]}/>
        }
        return (
            <div>
                <h1>{this.props.question.reg_question}</h1>
                {answers}
            </div>
        )
    }
}

export default Question