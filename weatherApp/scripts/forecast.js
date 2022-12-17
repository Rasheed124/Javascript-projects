"use strict";


const key = "izrwToNoV0gQHBfDa1SqL3Xibs5Wc38e";

const getWeather = async (id) => {

    const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;

    const response = await fetch( base + query);

    const data = await response.json();

    return data[0];

}


const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);

    // const response = await fetch(`${base}${query}`, { mode: 'no-cors'});

    if(response.status !== 200){
        throw Error("Data not Fetched");
    }
    
    const data = await response.json();

    return data[0];
}


