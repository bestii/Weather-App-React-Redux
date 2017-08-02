const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';
// To make the action type consistent across the App
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=b1b15e88fa797225412429c1c50c122a1${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_UR}&q=${city},us`;
    return {
        type: FETCH_WEATHER
    };
}