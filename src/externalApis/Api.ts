
import axios from "axios"
export const getTodayQuote = async()=>{
    const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.content);
      return data.data.content
    } catch (error) {

        return "error"
      console.error(error);
    }
 

    
}