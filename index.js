import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Ensure this line is present

const defaultCity = 'Colombo';

app.get('/', async (req, res) => {
    await getWeatherData(defaultCity, res);
});

app.post('/', async (req, res) => {
    const city = req.body.city || defaultCity;
    await getWeatherData(city, res);
});

async function getWeatherData(city, res) {
    const apiKey = process.env.API_KEY;
    const currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const currentWeatherResponse = await axios.get(currentWeatherUrl);
        const forecastResponse = await axios.get(forecastUrl);

        const weather = currentWeatherResponse.data;
        const forecast = forecastResponse.data.list;

        // Filter forecast data for the current day
        const today = new Date().getDate();
        const todayForecast = forecast.filter(item => new Date(item.dt_txt).getDate() === today);

        // Filter forecast data for the next 5 days
        const daily = forecast.filter((item, index) => index % 8 === 0);
        /*The OpenWeatherMap API provides forecast data in 3-hour intervals, resulting in 8 data points per day (24 hours / 3 hours = 8).
           By filtering with index % 8 === 0, you are selecting one data point per day, effectively getting the forecast for the next 7 days.
        */

        // Determine the weather class
        const weatherDescription = weather.weather[0].description.toLowerCase();
        let weatherClass = 'clear';
        if (weatherDescription.includes('cloud')) {
            weatherClass = 'cloudy';
        } else if (weatherDescription.includes('rain') || weatherDescription.includes('drizzle')) {
            weatherClass = 'rainy';
        } else if (weatherDescription.includes('snow')) {
            weatherClass = 'snowy';
        } else if (weatherDescription.includes('thunderstorm')) {
            weatherClass = 'thunderstorm';
        } else if (weatherDescription.includes('mist') || weatherDescription.includes('smoke') || weatherDescription.includes('haze') || weatherDescription.includes('fog')) {
            weatherClass = 'atmosphere';
        }

        res.render('one', { weather, todayForecast, daily, weatherClass, error: null });
    } catch (error) {
        res.render('one', { weather: null, todayForecast: null, daily: null, weatherClass: 'clear', error: 'Error, please try again' });
    }
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
