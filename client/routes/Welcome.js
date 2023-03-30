import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = () =>{

    return(
        <div>
            <div> WELCOME TO TOP 3 REACTIONS</div>
            <div> by Samuel</div>
            <Link to="/token">
                Click Here for Greatness
            </Link>
            
            
            
        </div>
    )
}

export default Welcome