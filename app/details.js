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


export default class Details extends React.Component {
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
      footerHeight: 115,
      selectorHeight: 100,
      detailHeight: 90,
      detailTop: 30,
      detailColor: 'transparent',
      selector: '^'


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





  handleDetails() {
    if (this.state.footerHeight == 115) {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        footerHeight: 265,
        selectorHeight: 250,
        detailHeight: 190,
        detailTop: 20,
        detailColor: 'white',
        selector: 'v'



      })
    } else {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        footerHeight: 115,
        selectorHeight: 100,
        detailHeight: 90,
        detailTop: 30,
        detailColor: 'transparent',
        selector: '^'


      })
    }
  }





  render() {
    return (
      <View>
      <View style={{ position: 'absolute', bottom: 0, width: 375, height: this.state.footerHeight, backgroundColor: 'rgba(23,14,14,.3)'}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: this.state.detailHeight}}>
          <Text style={{ paddingLeft: 10, marginTop: 20, color: "white",  fontSize: 32, backgroundColor: 'transparent'}}>
            NYC{"\n"}
            <Text style={{fontSize: 25}}>5:36pm</Text>
          </Text>
          <Text style={{ paddingRight: 10, marginTop: this.state.detailTop, color: "white", fontSize: 24, backgroundColor: 'transparent', textAlign: "right"}}>
            <Text style={{fontSize: 15}}>WIND: </Text>CALM{"\n"}
            <Text style={{fontSize: 15}}>RAIN: </Text>0%{"\n"}
            <Text style={{fontSize: 15}}>HIGH: </Text>67{"\n"}
            <Text style={{fontSize: 15}}>LOW: </Text>63{"\n"}
            <Text style={{fontSize: 15}}>HUMIDITY: </Text>40%{"\n"}
          </Text>
        </View>
        <Text style={{backgroundColor: 'transparent', color: this.state.detailColor, fontSize: 20}}>
          Heres a description of the current weather conditions for the day
        </Text>
      </View>
      <View style={{position: 'absolute', bottom: 20}}>
        <TouchableOpacity onPress={this.handleDetails.bind(this)}>
          <Text style={{
            color: 'rgba(255,255,255,.5)',
            fontSize: 40,
            backgroundColor: 'transparent',
            fontWeight: '300',
            width: 375,
            textAlign: 'center',
            height: this.state.selectorHeight
          }}>
            { this.state.selector }
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
