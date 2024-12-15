
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
export const fetchWikipediaSummary = async (pageTitle: string) => {
  const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    //console.log('Title:', data.title);
    console.log('Summary:', data.extract);
    return data.extract
  } catch (error: any) {
    return "sorry cant search this try shimming else ... "
    console.error('Error fetching Wikipedia data:', error.message);
  }
};