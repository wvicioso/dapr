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
import Day from './day';
import Dress from './dress';
import OverlayInfo from './overlay_info';
import WeekForcast from './weekForcast';

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
      <View style={{ flex: 1}} >
        <View style={{marginBottom: 20}}>
        </View>


        <Dress />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 30, right: 10}}>
            <TouchableOpacity>
            <Text style={{
                borderWidth: 5,
                borderColor: 'rgba(145,206,235,.5)',
                borderRadius: 45,
                backgroundColor: 'transparent',
                overflow:'hidden',
                fontSize: 32,
                textAlignVertical: 'center',
                textAlign: 'center',
                paddingTop: 25,
                color: 'white',
                height: 90,
                width: 90,
              }}>
              MON
            </Text>
          </TouchableOpacity>
          </View>



          <View style={{position: 'absolute', top: 130, left: 10}}>
            <Text style=
              {{
                color: "white",
                fontSize: 40,
                backgroundColor: 'transparent',
              }}>
              65°
            </Text>
          </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: 375, height: 115, backgroundColor: 'rgba(23,14,14,.5)'}}>
          <Text style={{ paddingLeft: 10, marginTop: 20, marginBottom: 20, color: "white",  fontSize: 32, height: 79, backgroundColor: 'transparent'}}>
            NYC{"\n"}
            5:36pm
          </Text>
          <Text style={{ paddingRight: 10,marginTop: 20, marginBottom: 20, color: "white", fontSize: 32, height: 79, backgroundColor: 'transparent', textAlign: "right"}}>
            <Text style={{fontSize: 20}}>WIND: </Text>CALM{"\n"}
            <Text style={{fontSize: 20}}>RAIN: </Text>0%{"\n"}
            <Text style={{fontSize: 20}}>HIGH: </Text>67{"\n"}
            <Text style={{fontSize: 20}}>LOW: </Text>63{"\n"}
            <Text style={{fontSize: 20}}>HUMIDITY: </Text>40%{"\n"}
          </Text>
        </View>

        <View style={{position: 'absolute', bottom: 20}}>
          <TouchableOpacity>
            <Text style={{
              color: 'rgba(255,255,255,.5)',
              fontSize: 40,
              backgroundColor: 'transparent',
              fontWeight: '300',
              width: 375,
              textAlign: 'center',
              height: 100
            }}>
              ^
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{position: 'absolute', top: 300, left: 0}}>
          <TouchableOpacity>
            <Text style={{
              color: 'white',
              fontSize: 20,
              backgroundColor: 'transparent',
              textAlign: 'center',
            }}>

            </Text>
          </TouchableOpacity>
        </View>

        <View style={{position: 'absolute', top: 300, right: 0}}>
          <TouchableOpacity>
            <Text style={{
              color: 'white',
              fontSize: 20,
              backgroundColor: 'transparent',
              textAlign: 'center',
            }}>

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
