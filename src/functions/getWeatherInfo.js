export const getWeatherIcon = (icon) => {
    switch(icon) {
        case 'thunderstorm' : return require('../assets/images/weatherIcon/lightning.png');
        case 'rain' : return require('../assets/images/weatherIcon/rain.png');
        case 'hail' :
        case 'snow' : return require('../assets/images/weatherIcon/snow.png');
        case 'clear-day' : return require('../assets/images/weatherIcon/sunny.png');
        case 'clear-night' : return require('../assets/images/weatherIcon/moon.png');
        case 'wind' : return require('../assets/images/weatherIcon/wind.png');
        case 'sleet' : return require('../assets/images/weatherIcon/snow_rain.png');
        case 'fog' : return require('../assets/images/weatherIcon/fog.png');
        case 'partly-cloudy-day' : return require('../assets/images/weatherIcon/day+cloudy.png');
        case 'partly-cloudy-night' : return require('../assets/images/weatherIcon/night+cloudy.png');
        case 'cloudy' : return require('../assets/images/weatherIcon/cloudy.png');
        case 'tornado' : return require('../assets/images/weatherIcon/typhoon.png');
        default : return null;
    }
}

export const getWeatherCondition = (icon) => {
    switch(icon) {
        case 'thunderstorm' : return '삐까뻔쩍'
        case 'rain' : return '주륵주륵'
        case 'hail' : return '우박'
        case 'snow' : return '펑펑'
        case 'clear-day' : 
        case 'clear-night' : return '맑음'
        case 'wind' : return '바람이 분다'
        case 'sleet' : return '진눈깨비';
        case 'fog' : return '안개';
        case 'partly-cloudy-day' : return '구름 조금';
        case 'partly-cloudy-night' : return '구름 조금';
        case 'cloudy' : return '구름 많음';
        case 'tornado' : return '태풍';
        default : return null;
    }
}