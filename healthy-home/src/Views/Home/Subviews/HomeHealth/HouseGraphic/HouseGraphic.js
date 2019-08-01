import React from 'react';

import './HouseGraphic.css';

import niceHouse from './../../../../../Assets/HealthyHouse.png';
import midHouse from './../../../../../Assets/MidHouse.png';
import grossHouse from './../../../../../Assets/GrossHouse.png';


function HouseGraphic(){
    // const [pic, setPic] = useState(niceHouse)

        return(
            <div>
                <div className="housePic"><img src={niceHouse} /></div>
                {/* {state.pic}  I think this is how you write this? */}
                {/* If their house score is bad, we want the picture of the bad house to render from state. if good, the good house pic, etc. */}
            </div>
        )

}

export default HouseGraphic;