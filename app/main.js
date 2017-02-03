import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  ListView,
  LayoutAnimation
} from 'react-native';

const Carousel = require('react-native-carousel');
const SideMenu = require('react-native-side-menu');
import Day from './day';
import Dress from './dress';
import OverlayInfo from './overlay_info';
import Forcast from './forcast';
import Details from './details';


export default class Application extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      temp: [],
      cond: [],
      city: '',
      wind: '',
      icon: '',

    }
  }
  navigate(routeName) {
    this.props.navigator.push({
      name : routeName
    })
  }

  componentWillMount() {
    // Animate creation
    LayoutAnimation.linear();
  }

  componentDidMount() {


    fetch("http://api.wunderground.com/api/ae341c3c3cc0ff78/forecast10day/q/NY/New_York_City.json", {
      method: 'get'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson !== null) {
        var temp_arr = []
        for(i = 0; i < 8; i++ ) {
          temp_arr.push(responseJson.forecast.simpleforecast.forecastday[i].high.fahrenheit)
        }
        var cond = responseJson.forecast.simpleforecast.forecastday[0].conditions
        var icon = responseJson.forecast.simpleforecast.forecastday[0].icon_url
        var city = responseJson.location.city

        this.setWeather(temp_arr, cond, icon, city)
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
  }

setWeather(temp, cond, icon, city){
  this.setState({
    temp: temp,
    cond: cond,
    icon: icon,
    city: city,
  })
}


  render() {

    return (
      <View style={{ flex: 1 }} >
        <View style={{ marginBottom: 20 }}>
        </View>

        <Dress />
        <Forcast />


          <View style={{position: 'absolute', top: 130, left: 20}}>
            <Text style=
              {{
                color: "black",
                fontSize: 40,
                backgroundColor: 'transparent',
              }}>
              65°
            </Text>
          </View>

          <Details />

        <View style={{position: 'absolute', top: 300, left: 20}}>
          <TouchableOpacity>
            <Text style={{
              color: 'white',
              fontSize: 20,
              backgroundColor: 'transparent',
              textAlign: 'center',
            }}>
            -
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{position: 'absolute', top: 300, right: 20}}>
          <TouchableOpacity>
            <Text style={{
              color: 'white',
              fontSize: 20,
              backgroundColor: 'transparent',
              textAlign: 'center',
            }}>
            -
            </Text>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: 'transparent',
  },
});
