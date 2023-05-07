import axios from 'axios';

export const GetGlobalCovidData=():Promise<any>=>{
    return axios.get('https://disease.sh/v3/covid-19/all').then(res=>res.data);
}