import React, { Component } from 'react';
import { View, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'teacher1@gmail.com',
      password:'password',
      Name:'Teacher 1',
      PhoneNumber:'9876543210'
    };
  }
  callapi(){
    console.log('jii')
    let url='http://192.168.1.103:8000/teacher-signup/' //username,password,institute_name,institute_phone,institute_address
    axios.get(url,{
      params:{
        username:this.state.email,
      password:this.state.password,
      name:this.state.Name,
      phone:this.state.PhoneNumber,
      
      }
      
    }).then((response)=>{
      if(response.data.status)
      {
        this.props.navigation.navigate('BottomNavigation',{auth_key:response.data.auth_key})
        
      }
      else
      {
        alert('already exists')
      }
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  render() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1,justifyContent:'center',backgroundColor:'white'}}>
            <View style={{alignContent:'space-between'}} >
          <Image style={{alignSelf:'center',marginBottom:35}} source={require('../assets/treetorlogo.png')}/>
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='email' value={this.state.email} onChangeText={(text)=>this.setState({email:text})}  />
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Password' textContentType='password' secureTextEntry={true} value={this.state.password} onChangeText={(text)=>this.setState({password:text})}  />
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Confirm Password' textContentType='password' secureTextEntry={true} value={this.state.email} onChangeText={(text)=>this.setState({email:text})}  />
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Full Name' value={this.state.Name} onChangeText={(text)=>this.setState({Name:text})}  />
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Phone' value={this.state.PhoneNumber} onChangeText={(text)=>this.setState({PhoneNumber:text})}  />
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
          {/* <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='PhoneNumber' textContentType={"telephoneNumber"}  /> */}
          <TouchableOpacity onPress={()=>{
                this.callapi()
              }}>
              <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50}}>
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
