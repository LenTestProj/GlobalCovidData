import axios from "axios";

export const GetCovidDiseases=()=>{
    return axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(res=>res.data);
}