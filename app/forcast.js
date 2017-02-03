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
import Dress from './dress';
import OverlayInfo from './overlay_info';


export default class Forcast extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      temp: [],
      cond: [],
      city: '',
      wind: '',
      icon: '',
      activeDay: "MON",
      initWidth: 0,
      offset: 50,
      opac: .01

    }
  }
  navigate(routeName) {
    this.props.navigator.push({
      name : routeName
    })
  }

  componentWillMount() {
    // Animate creation

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





  handleDay(i) {
    LayoutAnimation.easeInEaseOut();
    if (this.state.days[i] == this.state.activeDay && i == 0) {
      if (this.state.initWidth == 0) {
        this.setState({
          initWidth: 365,
          offset: 5,
          opac: 1,
        })
      } else {
        this.setState({
          initWidth: 0,
          offset: 40,
          opac: 0,
        })
      }
    }

    if (this.state.days[i] !== this.state.activeDay) {
      LayoutAnimation.spring();
      var newDay = this.state.days[i]
      this.setState({
        activeDay: this.state.days[i]
      })
    }
  }

  newActive(i) {

  }




  render() {
    var forcast = []

    for(let i = 0; i < this.state.days.length; i++){

      if (this.state.activeDay == this.state.days[i]) {
        forcast.push(
          <TouchableOpacity style={{zIndex: 1000}} key={i} onPress={()=>this.handleDay(i)}>
            <View style={{ alignItems: 'center', justifyContent: 'center', top: this.state.top, right: 0, position: 'relative', opacity: 1}}>
              <Text style={this.getActiveStyle()}>
                { this.state.days[i] }
              </Text>
            </View>
          </TouchableOpacity>
        )
      } else {
        forcast.push(
          <TouchableOpacity key={i} onPress={()=>this.handleDay(i)}>
            <View style={{ alignItems: 'center', justifyContent: 'center', top: this.state.top, right: 0, position: 'relative', opacity: this.state.opac}}>
              <Text style={this.getInactiveStyle()}>
                { this.state.days[i] }
              </Text>
            </View>
          </TouchableOpacity>
        )
      }
	}

    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', right: this.state.offset, top: 10, width: this.state.initWidth }} >
        { forcast }
      </View>
    );
  }

  getActiveStyle(os){
    return {
      width: 80,
      height: 80,
      borderRadius: 40,
      fontSize: 27,
      top: 30,
      paddingTop: 25,
      borderWidth: 5,
      borderColor: 'rgba(145,206,235,.5)',
      backgroundColor: 'rgba(255,255,255,.01)',
      overflow:'hidden',
      textAlignVertical: 'center',
      textAlign: 'center',
      color: 'black',
    }
  }

  getInactiveStyle(os){
    return {
      width: 40,
      height: 40,
      borderRadius: 20,
      fontSize: 12,
      fontWeight: '600',
      top: 50,
      paddingTop: 12,
      borderWidth: 5,
      borderColor: 'rgba(145,206,235,.5)',
      backgroundColor: 'rgba(255,255,255,.01)',
      overflow:'hidden',
      textAlignVertical: 'center',
      textAlign: 'center',
      color: 'black',
    }
  }

}

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: 'transparent',
  },
});
