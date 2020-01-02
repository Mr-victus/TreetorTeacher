import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Account extends Component {
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View >
            <Image source={require('../assets/left-arrow.png')}/>
            <Image style={{height:'80%',width:'100%'}} source={require('../assets/profilePic.png')}/>
        </View>
      </View>
    );
  }
}

export default Account;
