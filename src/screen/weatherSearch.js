import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Button, StyleSheet } from 'react-native';
import CustomTextInput from '../components/customInputText';

const WeatherSearch = ({ searchWeather }) => {
    const [location, setLocation] = useState('');
    return (
        <View>
            <CustomTextInput
                placeholder="Search the weather of your city"
                numberOfLines={1}
                text={location}
                onChange={setLocation}
            />
            <View style={styles.buttonWrapper}>
                <Button
                    title="Search"
                    onPress={() => searchWeather(location)}
                />
            </View>
        </View>
    );
};

WeatherSearch.propTypes = {
    searchWeather: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
    },
});

export default WeatherSearch;