import axios from "axios";

/**
 * Function call axios api async
 * @param {string} url 
 * @param {Object} param 
 * @returns 
 */
export default async function(url, param = {}){
    try{
        const response = await axios.get(url, {
            params: param
        });
        return response;
    } catch(e){
        console.log(e);
    }
}