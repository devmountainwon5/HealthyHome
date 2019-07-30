import React, {Component} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import * as Actions from '../../../../../Ducks/action_creator';


class RandomTip extends Component{

    state = {
        tip: {}
    }

    componentDidMount(){
        Axios.get(`/tip/${this.props.match.params.home_tips_id}`).then(({data}) => {
            if (data.success){
                this.setState({
                    tip: data.tip
                })
            }else{
                alert('Oops?')
            }
        })
    }
    render(){
    return (
            <div className='singleTips'>
                <a className='tip-name' href={this.state.tip.blog_link} target="_blank">
                <img className='tipPicture' src={this.state.tip.tip_picture} alt="tip picture"/>
                    <h2>
                        {this.state.tip_name}
                    </h2>
                </a>
            </div>
        )
    }
}

export default connect(null, Actions)(RandomTip);