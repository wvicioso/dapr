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
import WeekForcast from './weekForcast';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

        day: props.day,
        offset: props.offset,
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        font: props.font,
        top: props.top,
        padding: props.padding,
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

  }

  handleDay() {
    var offsetDays = {
      "MON": 290,
      "TUE": 241.77,
      "WED": 193.44,
      "THU": 145.11,
      "FRI": 96.78,
      "SAT": 48.45,
      "SUN": .12
    }
    LayoutAnimation.linear();
    if (this.state.offset == 10) {
      this.setState({
          offset: offsetDays[this.state.day],
      })
    }

    if (this.state.width == 1430) {
      this.setState({
          offset: offsetDays[this.state.day],
          width: 80,
          height: 80,
          borderRadius: 40,
          font: 27,
          top: 30,
          padding: 25,
      })
    }

  }

  daysAppear(){
    LayoutAnimation.spring();
    this.setState({
      daysOpac: .01,
    })
  }


  render() {
    return (
          <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', top: this.state.top, right: this.state.offset, opacity: 1}}>

            <Text style={{
                borderWidth: 5,
                borderColor: 'rgba(145,206,235,.5)',
                backgroundColor: 'transparent',
                overflow:'hidden',
                textAlignVertical: 'center',
                textAlign: 'center',
                color: 'black',
                height: this.state.height,
                width: this.state.width,
                borderRadius: this.state.borderRadius,
                fontSize: this.state.font,
                paddingTop: this.state.padding,

              }}>
              {this.state.day}
            </Text>

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
