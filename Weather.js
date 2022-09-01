const axios = require("axios");

function getWeatherHandler(req, res) {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let key = process.env.WEATHERKEY;

  let weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${key}`;

  axios
    .get(weatherURL)
    .then((result) => {
      const weatherArr = result.data.data.map((item) => {
        return new Forecast(item);
      });
      res.send(weatherArr);
    })
    .catch((error) => {
      res.status(500).send(`not found ${error}`);
    });
}
class Forecast {
  constructor(item) {
    this.data = item.valid_data;
    this.description = `Low of ${item.min_temp}, hight of ${item.max_temp} with ${item.weather.description}`;
  }
}

module.exports = getWeatherHandler;
