import React, {useState} from 'react';
import { useContext, useEffect } from 'react';
import { ChannelContext } from './Root';
import topMessages from '../slack/topMessages'



const TopThree=()=>{
    const [channel] = useContext(ChannelContext)
    const [topThree, setTopThree] = useState()
    async function fetchData(channel){
        try {
        //let channel = 'C04NDJL4TSL'
        let token = ''
        let messages =  await topMessages(channel,token)
        setTopThree(messages)
       // console.log('here is messages', messages)
        //setData(messages)    
        } catch (error) {
            console.log('failed with', error)
        }
    }

    useEffect(()=>{
        fetchData(channel)
}, [])

        console.log('top messages', topThree)
        if(topThree){
            return(

        <div>
            <h1>HERE IS THIS WEEKS WINNER</h1>
            <h2>{topThree[0].user}</h2>
            <h1>HERE IS SECOND PLACE</h1>
            <h2>{topThree[1].user}</h2>
            <h1>HERE IS THIRD PLACE</h1>
            <h2>{topThree[2].user}</h2>

            
            
        </div>
    )
        }    
        
}

export default TopThree