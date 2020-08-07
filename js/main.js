window.onload = function(){
    const default_locations = ['tokyo', 'new york', 'london', 'sao paulo', 'beijing'];
    const location =  default_locations[Math.floor(Math.random() * default_locations.length)];
    console.log(generateApiQuery(location))
}

function generateApiQuery(location_str){
    const api_url = 'https://leoienkejr-weathernow.herokuapp.com/api/bycityname/'
    return api_url.concat(location_str)
}

function callApi(api_query){
    
}