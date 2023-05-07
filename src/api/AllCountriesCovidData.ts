import axios from "axios";

export const GetAllCountriesCovidData=():Promise<any>=>{
    return axios.get('https://disease.sh/v3/covid-19/countries').then(res=>res.data);
}