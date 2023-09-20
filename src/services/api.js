import axios from "axios";

// In API calls always there is error handling, bcoz we're calling third party application. So there are chances of errors.
export const categoryMovies = async (API_URL) =>{
    
    try {
        // API calls are asynchronus request which return a promise.
        let response = await axios.get(API_URL);
        console.log(response.data.results)
        return response.data;
    } catch (error) {
        console.log("Error while calling the API", error.message);
        return error.response.data;
    }
}