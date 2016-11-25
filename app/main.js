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

var Carousel = require('react-native-carousel');

export default class Welcome extends Component {
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



    fetch("http://api.wunderground.com/api/ae341c3c3cc0ff78/geolookup/conditions/q/NY/New_York_City.json", {
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

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ paddingTop: 12, alignItems: 'center', justifyContent: 'center', height: 70, backgroundColor: '#004d40'}}>
          <Text style={{fontSize: 45, fontWeight: '100', color: 'white'}}>
            DAPR
          </Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={{flex: 1, width: 80, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#e0f2f1'}}>
              <Text style={{flex: 2, fontWeight: '300', color: '#4db6ac', fontSize: 50, alignItems: 'center', justifyContent: 'center'}}>
                {Math.floor(this.state.temp)}°
              </Text>
              <Image
                style={{width:40, height: 40, resizeMode: 'contain'}}
                source={{uri: this.state.icon }}
              />

              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#4db6ac', fontSize: 18}}>
                M
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#4db6ac', fontSize: 18}}>
                O
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#4db6ac', fontSize: 18}}>
                N
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#4db6ac', fontSize: 18}}>
                D
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#4db6ac', fontSize: 18}}>
                A
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#4db6ac', fontSize: 18}}>
                Y
              </Text>
            </View>
          </TouchableOpacity>



          <View style={{flex: 1}}>
            <View style={{zIndex: 1, position: 'absolute', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 50}}>
            <TouchableOpacity>
                <View style={{opacity: .7,borderRadius: 5, borderWidth: 2, borderColor: '#004d40', backgroundColor: '#00695c'}}>
                  <Text style={{ textAlign: 'center', fontWeight: '400', color: 'white', fontSize: 15, backgroundColor: 'transparent'}}>
                    {this.state.cond}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{opacity: .7, left: 136, borderRadius: 5, borderWidth: 2, borderColor: '#004d40', backgroundColor: '#00695c'}}>
                  <Text style={{ opacity: 1, fontWeight: '400', letterSpacing: 3, textAlign: 'center', backgroundColor: 'transparent', color: 'white', fontSize: 15}}>
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

        <View style={{alignItems: 'center',  flexDirection: 'row', height: 60, backgroundColor: '#004d40'}}>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#004d40', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                M
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                60
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#00695c', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                T
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                65
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#004d40', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                W
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                53
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#00695c', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                Th
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                60
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#004d40', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                F
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                58
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#00695c', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                S
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                64
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#004d40', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                Su
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                55
              </Text>
            </View>
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
