import React, {useState} from 'react';
import topMessages from './topMessages';
import TopThree from './TopThree';



  function GetToken (){

    const [value, setValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the value, such as send it to a server
        let channel = 'C039KTQKSCA'
        console.log(`Submitted value: ${value}`);
        let messages =  topMessages(channel,value)
        console.log('heree' ,messages)
        if(typeof(messages)=== 'array'){
            console.log("successs") 
        }
        else{
            console.log("invalid token")
        }
      }
        console.log('this is value',value)
        let token = 'xoxb-4962301741-5026222124677-WGPRop7vHsXaiRMFGfUDnKWj'
        //console.log(token)
        
        return(
    //if the token is good we add a button that takes them to the next page
            <div>
                <div>Imma need that token mayne</div>
                <form onSubmit={handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <TopThree/>
            </div>
        )
    }
    

export default GetToken


// let tab = await getActiveTabURL()
    // console.log('this is tab', tab)
    // console.log('IT WORKS HERE')
    //let channel = 'C04NDJL4TSL'
    //let token = 'xoxp-4737822716051-4750575042113-4853103095143-a657de2bd344bd622b07428df6b845d6'

   // let cursor = 'bmV4dF90czoxNjc1ODA1OTc1OTU5MzE5'
   //console.log('hereee ----', await topMessages(channel, token))
   // //console.log('hers top messages', topMessages)
   // let channels = await post(channel, token)
   // console.log(typeof(channels))
   // console.log('this is it mayne', channels.messages)