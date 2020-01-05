import React, { Component } from 'react';
import { View, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1,justifyContent:'center',backgroundColor:'white',marginVertical:100}}>
            <View style={{alignContent:'space-between'}} >
          <Image style={{alignSelf:'center',marginBottom:35}} source={require('../assets/treetorlogo.png')}/>
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='email' />
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Password' textContentType='password' secureTextEntry={true} />
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Confirm Password' textContentType='password' secureTextEntry={true} />
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Full Name' />
          <View style={{flexDirection:'row',alignSelf:'center',justifyContent: 'space-between',}}>
              <TouchableOpacity>
              <View style={{borderColor:'black',borderWidth:1,borderRadius:5,width:129,height:33,justifyContent: 'center',alignContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:14}}>Male</Text>
            </View>
              </TouchableOpacity>
           <TouchableOpacity>
           <View style={{borderColor:'black',borderWidth:1,borderRadius:5,width:129,height:33,justifyContent: 'center',alignContent:'center',alignItems:'center'}}>
                
                <Text>Female</Text>
            </View>
           </TouchableOpacity>
            
          </View>
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='PhoneNumber' textContentType={"telephoneNumber"}  />
          <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('BottomTabNavigator')
              }}>
              <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10}}>
                    <Text style={{color:'white',alignSelf:'center'}}>Sign UP</Text>
              </View>
              </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView>
    );
  }
}

export default Signup;
