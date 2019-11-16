// classe contentente i dati da viuslizzare su schermo
export class WeatherStatus {
    description: string;
    icon: string;
    temperature: number;
    temperatureMin: number;
    temperatureMax: number;
    visibility: number;         // visibilità in metri
    windSpeed: number;          // in km/h
    sunrise: string;            // orario di alba in formato unix
    sunset: string;             // orario tramonto
    cityName: string;
    humidity: number;
}

export class Utilities {
    // funzione che trasforma i dati provenienti dal servizio nel modello locale "WeatherStatus"
    static rawToWeatherStatusWrapper(rawData: any): WeatherStatus {
        let result = new WeatherStatus();

        result.description = rawData.weather[0].description;
        result.icon = rawData.weather[0].icon;
        result.temperature = Math.round( rawData.main.temp * 10 ) / 10;
        result.temperatureMin = Math.round( rawData.main.temp_min * 10 ) / 10;
        result.temperatureMax = Math.round( rawData.main.temp_max * 10 ) / 10;
        result.visibility = rawData.visibility;
        result.windSpeed = rawData.wind.speed;
        result.sunrise = '0'+this.unixToTime(rawData.sys.sunrise);
        result.sunset = this.unixToTime(rawData.sys.sunset);
        result.cityName = rawData.name;
        result.humidity = rawData.main.humidity;

        return result;
    }

    static unixToTime(UNIX_timestamp: number) {
        var a = new Date(UNIX_timestamp * 1000);
        var hour = a.getHours();
        var min = a.getMinutes();
        var time = hour + ':' + min;
        return time;
    }
}

export const ICON_BASE_PATH = 'http://openweathermap.org/img/wn/';
export const ICON_TYPE = '@2x.png';
