export const getWeatherIcon = (icon) => {
    switch(icon) {
        case 'thunder' : return require('../assets/images/weatherIcon/lightning.png');
        case 'rain' : return require('../assets/images/weatherIcon/rain.png');
        case 'snow' : return require('../assets/images/weatherIcon/snow.png');
        case 'clear-day' : return require('../assets/images/weatherIcon/sunny.png');
        case 'clear-night' : return require('../assets/images/weatherIcon/moon.png');
        case 'wind' : return require('../assets/images/weatherIcon/wind.png');
        case 'sleet' : return require('../assets/images/weatherIcon/snow_rain.png');
        case 'fog' :
        case 'partly-cloudy-day' :
        case 'partly-cloudy-night' :
        case 'cloudy' : return require('../assets/images/weatherIcon/cloudy.png');
        default : return null;
    }
}

export const getWeatherCondition = (icon) => {
    switch(icon) {
        case 'thunder' : return '삐까뻔쩍'
        case 'rain' : return '주륵주륵'
        case 'snow' : return '펑펑'
        case 'clear-day' : 
        case 'clear-night' : return '맑음'
        case 'wind' : return '바람이 분다'
        case 'sleet' : return '진눈깨비';
        case 'fog' : return '안개';
        case 'partly-cloudy-day' : return '구름 조금';
        case 'partly-cloudy-night' : return '구름 많음';
        case 'cloudy' : return '구름 많음';
        default : return null;
    }
}