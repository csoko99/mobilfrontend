import React from 'react';
import {StyleSheet, Button, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class Anime extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.104:3000/animek')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    
    
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    
    }

    return(
     

      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 


          
          
      <View >
          <Image  source={{uri:'http://192.168.1.104:3000/'+item.anime_id+'.jpg'}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />  
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Név: {item.anime_nev} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Megjelenés: {item.anime_megjdatum.split('T')[0].trim()} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Műfaj: {item.anime_mufaj} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Évadok száma: {item.anime_evadsz} db </Text>
          
          </View>

        
        }

        
        
      
        
         
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  
});