window.onload = function(){
    const default_locations = ['tokyo', 'new york', 'london', 'sao paulo', 'beijing'];
    const location =  default_locations[Math.floor(Math.random() * default_locations.length)];
    const api_request_url = generateApiRequestURL(location)
    callApi(api_request_url).then(console.log)
}

function generateApiRequestURL(location_str){
    const api_url = 'https://leoienkejr-weathernow.herokuapp.com/api/bycityname/';
    return api_url.concat(location_str);
}

async function callApi(request_url){
    const response = await fetch(request_url);
    return response.json();
}