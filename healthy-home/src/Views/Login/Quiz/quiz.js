import React, { Component } from "react"
import axios from "axios"
import { connect } from 'react-redux';
import * as Actions from "../../../Ducks/action_creator"
import './quiz.css';
import { questionIds } from "../../../shared/helpers/database/quizDb"
import Question from "./Question/Question"

class Quiz extends Component {
	state = {
		dwelling: {},
		yard: {},
		reminder: {}
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
	handleUpdate = (id, data) => {
		switch (id) {
			case 1:
				this.setState({
					dwelling: data
				})
				break
			case 2:
				this.setState({
					yard: data
				})
				break
			case 3:
				this.setState({
					reminder: data
				})
		}
	}
	submit = () => {
		const data = {
			dwelling: {},
			yard: {},
			reminder: {}
		} 
		axios.post('/questions/submit', data)
		.then((response) =>{
			if(response.data.success){
				this.props.history.push('/')
			} else {
				alert(response.data.err)
			}
		}) 
	}

	render() {
		const quizItems = this.props.quizItems.map((e) => {
			return <Question key={e.reg_question_id} questionId={e.reg_question_id} questionText={e.reg_question} handleUpdate={this.handleUpdate} />

		})
		return (
			<div className="quiz">
				{/* <Header /> */}
				{quizItems}
				<button onClick={this.submit}>Submit</button>
			</div>
		);
	}
}

export default connect(state => state, Actions)(Quiz);