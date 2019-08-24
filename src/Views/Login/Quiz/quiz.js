import React, { Component } from "react"
import axios from "axios"
import { connect } from 'react-redux';
import * as Actions from "../../../Ducks/action_creator"
import './quiz.css';


class Quiz extends Component {

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
			return <div>Hello</div>
		})
		return (
			<div className="quiz">
				{quizItems}
			</div>
		);
	}
}

export default Question; 