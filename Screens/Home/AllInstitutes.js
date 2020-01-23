import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import axios from 'axios'
class AllInstitutes extends Component {
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
        search:'',
        color1:'white',
        ui:[],
        tid:''
    };
  }
  callapi(){
    let auth_key=this.props.screenProps.auth_key
    console.log(auth_key)
    console.log('jii')
    let arr=[]
    let tid=[]
    let url='http://192.168.1.103:8000/teacher-institutes/' //username,password,institute_name,institute_phone,institute_address
    axios.get(url,{
      params:{
        auth_key:auth_key,
      }
      
    }).then((response)=>{
      if(response.data.institutes.length==0)
      {
        alert('no teachers')
        
      }
      else
      {
          for(let i=0;i<response.data.institutes.length;i++)
          {
            arr.push(
                <View style={{backgroundColor:'white',alignSelf:'center',marginTop:25,flexDirection:'row',width:340,height:124,shadowColor: "#000",shadowOffset: {width: 0,height: 7,},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,}}>
                <View style={{margin:30}}>
                  {/* <Text style={{fontWeight:'bold'}}>10:00AM</Text> */}
            <Text>{`Name: ${response.data.institutes[i].institute__institute_name}`}</Text>
                  <Text>{`Phone Number :${response.data.institutes[i].institute__institute_phone}`}</Text>
                  <Text>{`Email :${response.data.institutes[i].institute__auth_id_id__username}`}</Text>
                  <Text>{`Address :${response.data.institutes[i].institute__institute_address}`}</Text>
                </View>
                <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}} >
                <Avatar
                    size="large"
                    rounded
                    title="AJ"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                </View>
            </View>
    
            )
            tid.push(response.data.institutes[i].institute__institute_id)
          }
          console.log(arr)
          this.setState({ui:arr,tid:tid})
        
        //alert('already exists')
      }
    }).catch((err)=>{
      console.log(err)
    })
    
  }

  

  render() {
      if(this.state.tid=='')
      this.callapi()
    return (
        <View style={{flex:1}} >

       
      <View >
        <SearchBar
        placeholder="Type Institute Name ..."
        onChangeText={(search)=>this.setState({search:search})}
        value={this.state.search}
        lightTheme={true}
        round={true}
        showCancel={false}
        cancelIcon={false}
        searchIcon={false}
      />
      <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Pending',{auth_key:this.props.screenProps.auth_key})
              }}>
        <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50,marginVertical:20,marginBottom:10}}>
        <Text style={{color:'white',alignSelf:'center'}}>Pending</Text>
        </View>
    </TouchableOpacity>
      </View>

      {this.state.ui}
      </View>
    );
  }
}

export default AllInstitutes;
