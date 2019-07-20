import React, {Component} from 'react';

//import the house photos?


class HouseGraphic extends Component{
    constructor(props){
        super(props);
        this.state = {
            pic : 'this will be whatever picture of the house fits their user score (bad house, good house, etc.)'
        }
    }

    render(){
        return(
            <div>
                <h1>How's your house doing?</h1>
                {this.state.pic}
                {/* If their house score is bad, we want the picture of the bad house to render from state. if good, the good house pic, etc. */}
            </div>
        )
    }
}

export default HouseGraphic;