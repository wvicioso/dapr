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
      city: 'NY'
    }
  }
  navigate(routeName) {
    this.props.navigator.push({
      name : routeName
    })
  }

  componentWillMount() {

    fetch("http://api.wunderground.com/api/ae341c3c3cc0ff78/geolookup/conditions/q/NY/New_York.json", {
      method: 'POST',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson !== null) {
        this.setState({
          temp: responseJson.current_observastion.temp_f,
          cond: responseJson.current_observastion.weather,
        })
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
  }

  render() {
    return (

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ paddingTop: 12, alignItems: 'center', justifyContent: 'center', height: 70, backgroundColor: '#80cbc4'}}>
          <Text style={{fontSize: 45, fontWeight: '100', color: 'white'}}>
            DAPR
          </Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={{flex: 1, width: 80, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#e0f2f1'}}>
              <Text style={{flex: 2, fontWeight: '300', color: '#004d40', fontSize: 50}}>
                55°
              </Text>
              <Text style={{flex: 1, fontWeight: '300', color: '#004d40', fontSize: 18}}>
                High-62°
              </Text>
              <Text style={{paddingBottom: 50, flex: 1, fontWeight: '300', color: '#004d40', fontSize: 18}}>
                Low-54°
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#004d40', fontSize: 18}}>
                M
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#004d40', fontSize: 18}}>
                O
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#004d40', fontSize: 18}}>
                N
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#004d40', fontSize: 18}}>
                D
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#004d40', fontSize: 18}}>
                A
              </Text>
              <Text style={{flex: 2, flexDirection: 'column', fontWeight: '300', color: '#004d40', fontSize: 18}}>
                Y
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{borderWidth: 2, borderColor: '#80cbc4'}}>
          </View>

          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 50}}>
            <Text style={{  fontWeight: '100', color: '#004d40', fontSize: 20}}>
              Partly Cloudy
            </Text>
              <Text style={{fontWeight: '100', letterSpacing: 3, textAlign: 'right', backgroundColor: 'transparent', color: '#004d40', fontSize: 20}}>
                NYC
              </Text>
            </View>
            <Carousel paddingRight={0} paddingLeft={0} inactiveIndicatorColor="#80cbc4" indicatorColor="#004d40" indicatorSize={25} indicatorOffset={450} indicatorAtBottom={false} width={250} backgroundColor='blue' animate={false}>
              <View>
                <TouchableOpacity>
                  <Image style={{width:250, height: 425, resizeMode: 'contain'}} source={require('../images/third_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:250, height: 425, resizeMode: 'contain'}} source={require('../images/second_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:250, height: 425, resizeMode: 'contain'}} source={require('../images/sixth_outfit.jpg')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={{width:250, height: 425, resizeMode: 'contain'}} source={require('../images/fourth_outfit.jpg')} />
                </TouchableOpacity>
              </View>
            </Carousel>
          </View>
        </View>
        <View style={{borderWidth: 2, borderColor: '#80cbc4'}}>
        </View>
        <View style={{alignItems: 'center',  flexDirection: 'row', height: 60, backgroundColor: '#e0e0e0'}}>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#e0e0e0', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                M
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                60
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#d6d6d6', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                T
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                65
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#e0e0e0', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                W
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                53
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#d6d6d6', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                Th
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                60
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#e0e0e0', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                F
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                58
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#d6d6d6', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, color: 'white'}}>
                S
              </Text>
              <Text style={{fontSize: 20, color: '#80cbc4'}}>
                64
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'column', backgroundColor: '#e0e0e0', height: 60, width: 53.7, justifyContent: 'center', alignItems: 'center'}}>
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
