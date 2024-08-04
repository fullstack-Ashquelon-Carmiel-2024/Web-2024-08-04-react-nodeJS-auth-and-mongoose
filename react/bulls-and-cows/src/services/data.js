import axios from 'axios';

let baseURL = 'http://localhost:3001';

export const getData = async (endpoint) => {

    try {
        
        let response = await axios.get(`${baseURL}/${endpoint}`);
        console.log(response);
        return {status: true, data: response.data}
        
    } catch(err) {
        
        console.log(err)
        return {status: false, message: err.message}

    }

}