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


class Welcome extends Component {
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
        console.log(cond)
        console.log(icon)
        this.setWeather(temp_arr, cond, icon)
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
  }

setWeather(temp, cond, icon){
  this.setState({
    temp: temp,
    cond: cond,
    icon: icon,
  })
}


  render() {
    return (

      <View style={{paddingTop: 20, flex: 1, flexDirection: 'column'}}>
      <View style={{flexDirection: 'row', paddingTop: 12, alignItems: 'center', justifyContent: 'center', height: 70, backgroundColor: 'black'}}>
        <Text style={{ right: 84, fontWeight: '100', color: '#9e9e9e', fontSize: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
          {Math.floor(this.state.temp[0])}°
        </Text>
        <Text style={{fontSize: 45, fontWeight: '100', color: '#9e9e9e'}}>
          DAPR
        </Text>
      </View>
        <View style={{flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={{ flex: 1, width: 80, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'black'}}>

              <Image
                style={{width:40, height: 40, resizeMode: 'contain'}}
                source={{uri: this.state.icon }}
              />



              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '100', color: 'white', fontSize: 18}}>
                M
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '100', color: 'white', fontSize: 18}}>
                O
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '100', color: 'white', fontSize: 18}}>
                N
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '100', color: 'white', fontSize: 18}}>
                D
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '100', color: 'white', fontSize: 18}}>
                A
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '100', color: 'white', fontSize: 18}}>
                Y
              </Text>

            </View>

          </TouchableOpacity>



          <View style={{flex: 1}}>
            <View style={{zIndex: 1, position: 'absolute', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 50}}>
              <TouchableOpacity>
                <View style={{opacity: .7,borderRadius: 5, borderWidth: 2, borderColor: 'black', backgroundColor: 'black'}}>
                  <Text style={{ textAlign: 'center', fontWeight: '400', color: '#9e9e9e', fontSize: 15, backgroundColor: 'transparent'}}>
                    {this.state.cond}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{opacity: .7, left: 136, borderRadius: 5, borderWidth: 2, borderColor: 'black', backgroundColor: 'black'}}>
                  <Text style={{ opacity: 1, fontWeight: '400', letterSpacing: 3, textAlign: 'center', backgroundColor: 'transparent', color: '#9e9e9e', fontSize: 15}}>
                    {this.state.city}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>


            <Carousel paddingRight={0} paddingLeft={0} marginLeft={0} marginRight={0} inactiveIndicatorColor="#80cbc4" indicatorColor="#004d40" indicatorSize={25} hideIndicators={true} indicatorOffset={450} indicatorAtBottom={false} width={250} backgroundColor='blue' animate={false}>
              <View>
                <TouchableOpacity>
                  <Image style={{width:280, height: 537, resizeMode: 'stretch'}} source={require('../images/third_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:280, height: 537, resizeMode: 'stretch'}} source={require('../images/eleventh_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:280, height: 537, resizeMode: 'stretch'}} source={require('../images/seventh_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:280, height: 537, resizeMode: 'stretch'}} source={require('../images/next3.png')} />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Image style={{width:280, height: 537, resizeMode: 'stretch'}} source={require('../images/eigth_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:280, height: 537, resizeMode: 'stretch'}} source={require('../images/second_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:280, height: 537, resizeMode: 'stretch'}} source={require('../images/sixth_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:280, height: 537, resizeMode: 'stretch'}} source={require('../images/fourth_outfit.jpg')} />
                </TouchableOpacity>
              </View>
            </Carousel>
          </View>
        </View>

        <View style={{alignItems: 'center',  flexDirection: 'row', height: 60, backgroundColor: 'black'}}>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: 'black', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: '100', color: '#9e9e9e'}}>
                S
              </Text>
              <Text style={{fontSize: 20, color: '#9e9e9e'}}>
                {Math.floor(this.state.temp[1])}°
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: 'black', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: '100', color: '#eeeeee'}}>
                Su
              </Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>
                {Math.floor(this.state.temp[2])}°
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: 'black', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: '100', color: '#9e9e9e'}}>
                M
              </Text>
              <Text style={{fontSize: 20, color: '#9e9e9e'}}>
                {Math.floor(this.state.temp[3])}°
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: 'black', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: '100', color: '#eeeeee'}}>
                T
              </Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>
                {Math.floor(this.state.temp[4])}°
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: 'black', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: '100', color: '#9e9e9e'}}>
                W
              </Text>
              <Text style={{fontSize: 20, color: '#9e9e9e'}}>
                {Math.floor(this.state.temp[5])}°
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: 'black', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: '100', color: '#eeeeee'}}>
                Th
              </Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>
                {Math.floor(this.state.temp[6])}°

              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: 'black', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: '100', color: '#9e9e9e'}}>
                F
              </Text>
              <Text style={{fontSize: 20, color: '#9e9e9e'}}>
                {Math.floor(this.state.temp[7])}°
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

export default class Application extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      rain: '',
      cond: '',
      city: '',
      wind: '',
      date: '',
      high: '',
      low: '',
      hum: '',
    }
  }
  componentDidMount() {

    fetch("http://api.wunderground.com/api/ae341c3c3cc0ff78/forecast10day/q/NY/New_York_City.json", {
      method: 'get'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson !== null) {
        this.setState({
          cond: responseJson.forecast.txt_forecast.forecastday[0].fcttext,
          wind: responseJson.forecast.simpleforecast.forecastday[0].avewind.mph,
          rain: responseJson.forecast.simpleforecast.forecastday[0].pop,
          city: "New York",
          date: responseJson.forecast.simpleforecast.forecastday[0].date.pretty,
          high: responseJson.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          low: responseJson.forecast.simpleforecast.forecastday[0].low.fahrenheit,
          hum: responseJson.forecast.simpleforecast.forecastday[0].avehumidity,
        })
        console.log('cond', this.state.cond)
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
  }


  render() {
    const menu = <View style={{ paddingTop: 20,flexDirection: 'column' }}>
                    <Text style={{ paddingTop: 12, fontSize: 30, fontWeight: '100', textAlign: 'center', height: 82, backgroundColor: 'black', color: 'white'}}>{this.state.city}</Text>
                    <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center', height: 82, backgroundColor: 'black', color: 'white'}}>{this.state.cond}</Text>
                    <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center', height: 82, backgroundColor: 'black', color: 'white'}}>chance of rain: {this.state.rain}% </Text>
                    <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center', height: 82, backgroundColor: 'black', color: 'white'}}>high: {this.state.high}°</Text>
                    <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center', height: 82, backgroundColor: 'black', color: 'white'}}>low: {this.state.low}°</Text>
                    <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center', height: 82, backgroundColor: 'black', color: 'white'}}>wind: {this.state.wind}mph</Text>
                    <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center', height: 82, backgroundColor: 'black', color: 'white'}}>humidity: {this.state.hum}%</Text>
                    <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center', height: 82, backgroundColor: 'black', color: 'white'}}>{this.state.date}</Text>
                  </View>

    return (
      <SideMenu openMenuOffset={295} menu={menu}>
        <Welcome/>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: 'transparent',
  },
});
