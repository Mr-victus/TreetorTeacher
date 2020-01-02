import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Attendance extends Component {
    static navigationOptions = {
        title: "A J Loren",
        
        headerTitleStyle: {
          color: "#000",
          //fontFamily: Fonts.type.bold,
    
          // fontWeight: Fonts.weight.bold,
          fontSize: 16,
          alignSelf: "center"
        },
        headerTintColor: "#000",
        headerBackTitleStyle: {
          color: "#000",
          // fontFamily: Fonts.type.bold,
          // fontWeight: Fonts.weight.bold,
          fontSize: 17
        }
      };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Attendance </Text>
      </View>
    );
  }
}

export default Attendance;
