import axios from 'axios'
import qs from 'qs'
const apiUrl = 'https://slack.com/api';
    
const retrieveUser = async (userId, token) => { 
    let Args = {
                    user: userId, 
                    token: token,
                    
                 };
    const result = await axios.post(`${apiUrl}/users.info?`,qs.stringify(Args));
    return result.data
    };

export default retrieveUser
