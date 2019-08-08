import React, { Component } from "react"
import axios from "axios"
import { connect } from 'react-redux';
import * as Actions from "../../../Ducks/action_creator"
import './quiz.css';
import Question from './Question/Question'

class Quiz extends Component {
	state = {
		hometype: "",
		yard: "",
		reminders: [],
	}
    componentDidMount(){
		axios.get('/questions/retrieveAll')
		.then(({data})=>{
			if (data.success) {
				this.props.setQuiz(data.questions);
			} else if (!data.isLoggedIn) {
				this.props.history.push('/');
			} else {
				alert('something blew up');
			}
		})
    }

    render() {
		const quizItems = this.props.quizItems.map((e)=>{
			return <Question key={e.reg_question_id} question = {e}/>
		})
		return (
			<div className="quiz">
				{/* <Header /> */}
				{quizItems}
				<button onClick= {this.handleSubmit} >Submit</button>
			</div>
		);
	}
}

export default connect (state => state, Actions)(Quiz); 