import React, { Component } from "react"
import { connect } from 'react-redux';
import * as Actions from 'Ducks/action_creator'
import './quiz.css';
import Question from './Question/Question'
import httpRequest from "../../shared/services/http_request";

class Quiz extends Component {
	state = {
		answers: [],
	}
	componentDidMount() {
		httpRequest.get('/questions/retrieveAll')
			.then((data) => {
				this.props.setQuiz(data.questions);
				// if (!data.isLoggedIn) {
				// 	this.props.history.push('/');
				// } else {
				// 	alert('something blew up');
				// }
			})
			.catch(err => {
                console.log(err);
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
		httpRequest.post('/questions/submit', {}, body)
			.then((data) => {
				this.props.setSuggestedTodos(data.todos)
				this.props.history.push('/homehealth')
				// } else {
				// 	alert("something broke")
				// }
			})
			.catch(err => {
				console.log(err);
			})
	}
	render() {
		const quizItems = this.props.quizItems.map((e) => {
			if(e.props.reg_question_id === 3)
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
