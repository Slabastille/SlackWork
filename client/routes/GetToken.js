import React, {useContext, createContext, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { ChannelContext } from './Root';


function GetToken (){
    const [channel, setChannel] = useContext(ChannelContext);
    
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(channel.length > 0){
            history.push('/topThree')
        }
        else{
            alert("invalid value")
        }
    }

        return(
    //if the token is good we add a button that takes them to the next page
            <div>
                <div>Imma need that channel id mayne</div>
                <form onSubmit={handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={channel} onChange={(e) => setChannel(e.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Link to={'/topThree'}> HERE</Link>
            </div>
        )
    }
    

export default GetToken
