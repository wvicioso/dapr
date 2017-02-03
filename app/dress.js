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
  ListView
} from 'react-native';

const Carousel = require('react-native-carousel');
const SideMenu = require('react-native-side-menu');

export default class Dress extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      temp: '',
      cond: '',
      city: '',
      wind: '',
      icon: ''
    }
  }
  navigate(routeName) {
    this.props.navigator.push({
      name : routeName
    })
  }

  componentDidMount() {
    fetch("http://ap.wunderground.com/api/ae341c3c3cc0ff78/geolookup/conditions/q/NY/New_York_City.json", {
      method: 'get'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson !== null) {
        this.setState({
          temp: responseJson.current_observation.temp_f,
          cond: responseJson.current_observation.weather,
          wind: responseJson.current_observation.wind_mph,
          city: responseJson.location.city,
          icon: responseJson.current_observation.icon_url,
        })
        console.log(this.state.icon)
      }
    })
    .catch((error) => {
      debugger
      throw new Error(error)
    })
  }

  render() {
    return (
        <Carousel hideIndicators={true} animate={false}>
              <Image style={{ width: 375, height: 647, resizeMode: 'stretch'}} source={require('../images/next4.jpg')} />
              <Image style={{ width: 375, height: 647, resizeMode: 'stretch'}} source={require('../images/eleventh_outfit.jpg')} />
              <Image style={{ width: 375, height: 647, resizeMode: 'stretch'}} source={require('../images/fifth_outfit.jpg')} />
              <Image style={{ width: 375, height: 647, resizeMode: 'stretch'}} source={require('../images/seventh_outfit.jpg')} />
              <Image style={{ width: 375, height: 647, resizeMode: 'stretch'}} source={require('../images/fourteenth_outfit.jpg')} />
              <Image style={{ width: 375, height: 647, resizeMode: 'stretch'}} source={require('../images/eigth_outfit.jpg')} />
        </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: 'transparent',
  },
});
