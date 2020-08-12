function doSearch(){
    search_input = document.getElementById('search-input').value
    if (search_input.length > 0){
        const api_request_url = generateApiRequestURL(search_input)
        callApi(api_request_url)
    }
}

window.onload = function(){
    const default_locations = ['tokyo', 'new york', 'london', 'sao paulo', 'beijing', 'paris'];
    const location =  default_locations[Math.floor(Math.random() * default_locations.length)];
    const api_request_url = generateApiRequestURL(location);
    callApi(api_request_url);
    const search_button = document.getElementById('search-button')
    search_button.addEventListener('click', doSearch)
}

function generateApiRequestURL(location_str){
    const api_url = 'https://leoienkejr-weathernow.herokuapp.com/api/bycityname/'
    return api_url.concat(encodeURI(location_str));
}

async function callApi(request_url){
    fetch(request_url)
    .then(response => response.json())
    .then(data => (updatePage(data)))
}

function updatePage(weather_data){
    if (weather_data['response_code'] == '!200'){
        return null;
    }

    location_str = weather_data['city'].concat(', ', weather_data['country']);
    document.getElementById('location').innerHTML = location_str;

    celsius_symbol = '<span id="celsius-symbol-c">C</span>'
    temperature_celsius = Math.trunc(weather_data['temp'] - 273.15);
    document.getElementById('temperature').innerHTML = temperature_celsius.toString().concat(celsius_symbol)

    main_weather = weather_data['main_weather'];
    document.getElementById('weather-status').innerHTML = main_weather;

    icon_class = 'owf owf-'.concat(weather_data['weather_id']);
    document.getElementById('weather-icon').className = icon_class;
}