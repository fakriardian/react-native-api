import React, { useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import WeatherSearch from './src/screen/weatherSearch';
import WeatherInfo from './src/screen/weatherInfo';
import axios from 'axios';
import config from './src/constant';



const App = () => {
  const [weatherData, setWeatherData] = useState();

  const searchWeather = location => {
    setStatus('loading');
    axios
      .get(`${config.BASE_URL}?q=${location}&appid=${config.API_KEY}`)
      .then(response => {
        const data = response.data;
        // console.log(data.name);
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        // Konversi Kelvin ke Celcius
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus('success');
      })
      .catch(error => {
        console.log(error);
        setStatus('error');
      });
  };

  const [status, setStatus] = useState('');
  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />;
      case 'success':
        return <WeatherInfo weatherData={weatherData} />;
      case 'error':
        return (
          <Text>
            Something went wrong.
            Please trey again with a correct city name.
          </Text>
        );
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.margintTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;