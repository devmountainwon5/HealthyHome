import React, { Component } from 'react';
import './quiz.css';


class Quiz extends Component {

    componentDidMount(){
		axios.get('/api/quiz/questions')
		.then(({data})=>{
			if (data.success) {
				this.props.setCart(data.cartItems);
			} else if (!data.isLoggedIn) {
				this.props.history.push('/');
			} else {
				alert('something blew up');
			}
		})
    }

    render() {
		const quizItems = this.props.quizItems.map((e)=>{
			return <QuizItem key={e.id} name={e.name} />
		})
		return (
			<div className="quiz">
				<Header />
				{quizItems}
			</div>
		);
	}
}

export default connect(state => state, Actions)(Quiz) ;