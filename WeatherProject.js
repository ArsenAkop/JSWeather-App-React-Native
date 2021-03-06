import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Forecast from "./Forecast";
import OpenWeatherMap from "./src/weather/open_weather_map"

export default class WeatherProject extends Component {
    constructor(props) {
        super(props);
        this.state = { zip: "", forecast: null };
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            console.log(forecast);
            this.setState({ forecast: forecast });
        });

    }

    render() {
        let content = null;
        if (this.state.forecast !== null) {
            content = (
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                />
            );
        }
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You Input {this.state.zip}
                </Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this._handleTextChange} />
                <Forecast />
            </View>


        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
        padding: 2,
        height: 40,
        width: 100,
        textAlign: "center"
    }
});
