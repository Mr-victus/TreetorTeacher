import React, { Component } from 'react';
import { View, Text, Image,ImageBackground } from 'react-native';

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
        <View style={{flex:1,alignContent:'center'}} >
            <ImageBackground style={{flex:1,height:'100%',width:'100%'}} source={require('../assets/profilePic.png')} >
            {/* <View style={{opacity:0.5,backgroundColor:'black',marginTop:233,alignSelf:'flex-end',width:'100%',alignItems:'center'}}>
              <Text style={{color:'white',fontWeight:'bold'}}>
                A J Loren
              </Text>
              <Text style={{color:'white',fontWeight:'bold'}}>
                ajloren@gmail.com
              </Text>
              <Text style={{color:'white',fontWeight:'bold'}}>
                9876543210
              </Text>
            </View> */}

            </ImageBackground>
            {/* <View style={{justifyContent:'space-between',alignContent:'space-between'}}>

            
          <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center',backgroundColor:'#5AFF15',width:300,height:30,alignSelf:'center'}}>
            <Text>
              Subjects
            </Text>
            <Image style={{height:10,width:10,marginLeft:200}} source={require('../assets/morearrow.png')}/>
            </View>

            <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center',backgroundColor:'#5AFF15',width:300,height:30,alignSelf:'center'}}>
            <Text>
              Subjects
            </Text>
            <Image style={{height:10,width:10,marginLeft:200}} source={require('../assets/morearrow.png')}/>
            </View>

            <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center',backgroundColor:'#5AFF15',width:300,height:30,alignSelf:'center'}}>
            <Text>
              Subjects
            </Text>
            <Image style={{height:10,width:10,marginLeft:200}} source={require('../assets/morearrow.png')}/>
            </View>
            <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center',backgroundColor:'#5AFF15',width:300,height:30,alignSelf:'center'}}>
            <Text>
              Subjects
            </Text>
            <Image style={{height:10,width:10,marginLeft:200}} source={require('../assets/morearrow.png')}/>
            </View>
            </View>*/}

            
        </View> 
      </View>
    );
  }
}

export default Account;
