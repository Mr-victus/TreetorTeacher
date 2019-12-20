import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',backgroundColor:'white',marginVertical:100}}>
          <View style={{alignContent:'space-between'}} >
              {/* for treetor logo */}
              <Image style={{alignSelf:'center',marginBottom:60}} source={require('../assets/treetorlogo.png')}/>
              <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='email' />
              <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white'}} label='password'  selectionColor='#6EF31A' secureTextEntry={true} />
              <TouchableOpacity>
              <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10}}>
                    <Text style={{color:'white',alignSelf:'center'}}>LOGIN</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View flexDirection='row' style={{backgroundColor:'#3B5998',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10}}>
                  <Image style={{alignSelf:'center',marginLeft:10}} source={require('../assets/facebook.png')}/>
                    <Text style={{color:'white',alignSelf:'center'}}>LOGIN WITH FACEBOOK</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{backgroundColor:'#DE4B39',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10}}>
                    <Text style={{color:'white',alignSelf:'center'}}>LOGIN WITH GOOGLE</Text>
              </View>
              </TouchableOpacity>

              <Text style={{color:'#6EF31A',alignSelf:'center'}} >Forgot Password?</Text>
              <Text style={{alignSelf:'center'}}>{"New to treetor?" }</Text>
              <Text  style={{color:'#6EF31A',alignSelf:'center'}}>Register</Text>
          </View>
         
          <View>
              {/* Buttons */}
          </View>
          <View>
              {/* forgot pass and shits */}
          </View>
       
      </View>
    );
  }
}

export default Login;
