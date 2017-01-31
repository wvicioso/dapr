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

export default class WeekForcast extends Component {
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
      <View style={{alignItems: 'center',  flexDirection: 'row', height: 60, backgroundColor: 'white'}}>

        <TouchableOpacity>
          <View style={{flexDirection: 'column', backgroundColor: 'white', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 17, fontWeight: '100', color: '#424242'}}>
              S
            </Text>
            <Text style={{fontSize: 20, color: '#424242'}}>
              {Math.floor(this.state.temp[1])}°
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'column', backgroundColor: 'white', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 17, fontWeight: '100', color: '#424242'}}>
              Su
            </Text>
            <Text style={{fontSize: 20, color: '#424242'}}>
              {Math.floor(this.state.temp[2])}°
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'column', backgroundColor: 'white', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 17, fontWeight: '100', color: '#424242'}}>
              M
            </Text>
            <Text style={{fontSize: 20, color: '#424242'}}>
              {Math.floor(this.state.temp[3])}°
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{flexDirection: 'column', backgroundColor: 'white', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 17, fontWeight: '100', color: '#424242'}}>
              T
            </Text>
            <Text style={{fontSize: 20, color: '#424242'}}>
              {Math.floor(this.state.temp[4])}°
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{flexDirection: 'column', backgroundColor: 'white', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 17, fontWeight: '100', color: '#424242'}}>
              W
            </Text>
            <Text style={{fontSize: 20, color: '#424242'}}>
              {Math.floor(this.state.temp[5])}°
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{flexDirection: 'column', backgroundColor: 'white', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 17, fontWeight: '100', color: '#424242'}}>
              Th
            </Text>
            <Text style={{fontSize: 20, color: '#424242'}}>
              {Math.floor(this.state.temp[6])}°

            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{flexDirection: 'column', backgroundColor: 'white', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 17, fontWeight: '100', color: '#424242'}}>
              F
            </Text>
            <Text style={{fontSize: 20, color: '#424242'}}>
              {Math.floor(this.state.temp[7])}°
            </Text>
          </View>
        </TouchableOpacity>
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
