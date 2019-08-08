import React, { Component } from "react"
import axios from "axios"
import { connect } from 'react-redux';
import * as Actions from "../../../Ducks/action_creator"
import './quiz.css';
import Question from './Question/Question'

class Quiz extends Component {
	state = {
		answers: [],
	}
	componentDidMount() {
		axios.get('/questions/retrieveAll')
			.then(({ data }) => {
				if (data.success) {
					this.props.setQuiz(data.questions);
				} else if (!data.isLoggedIn) {
					this.props.history.push('/');
				} else {
					alert('something blew up');
				}
			})
	}
	handleAnswer = (e, question_id, question_type_id, answer) => {
		
		if (question_type_id === 1) {
			this.setState({
				answers: [...this.state.answers.filter((e) => {
					return e.question_id !== question_id
				}), { question_id, answer: e.target.value }]
			})
		} else if (question_type_id === 2) {
			if (e.target.checked) {
				this.setState({
					answers: [...this.state.answers, { question_id, answer }]
				})
			} else {
				this.setState({
					answers: this.state.answers.filter( (e)=> {
						return e.answer !== answer
					})
				})
			}
		}
	}
	handleSubmit = () => {
		const body = {
			answers: this.state.answers
		}
		axios.post ('/questions/submit', body) 
		.then( (response) => {
			if(response.data.success) {
				this.props.addSuggestedTodos(response.data.todos) 
				this.props.history.push('/homehealth')
			} else {
				alert("something broke")
			}
		}) 
	}
	render() {
		const quizItems = this.props.quizItems.map((e) => {
			return <Question key={e.reg_question_id} handleAnswer={this.handleAnswer} question={e} />
		})
		return (
			<div className="quiz">
				{/* <Header /> */}
				{quizItems}
				<button onClick={this.handleSubmit} >Submit</button>
			</div>
		);
	}
}

export default connect(state => state, Actions)(Quiz); 
