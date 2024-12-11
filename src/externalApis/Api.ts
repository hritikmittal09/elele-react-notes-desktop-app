
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

        return null
      console.error(error);
    }
 

    
}
 export function getTasks() {
  // Get the tasks string from localStorage
  const data = localStorage.getItem("tasks");

  // Parse the data if it exists, otherwise return an empty array
  return data ? JSON.parse(data) : [];
}