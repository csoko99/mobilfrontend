import React, { Component,setState } from 'react';
import { Button, StyleSheet, View,FlatList,Image,Text} from 'react-native';

const IP = require('./ipcim.js');
//const ipcim="192.168.1.104";

export default class Mufaj extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  Fantasy = () => {
    return fetch('http://'+IP.ipcim+':3000/Fantasy')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  Drama = () => {
    return fetch('http://'+IP.ipcim+':3000/Drama')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  Comedy = () => {
    return fetch('http://'+IP.ipcim+':3000/Comedy')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  Action = () => {
    return fetch('http://'+IP.ipcim+':3000/Action')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alternativeLayoutButtonContainer}>
        <Button
            onPress={this.Fantasy}
            title="Fantasy"
          />
          <Button
            onPress={this.Action}
            title="Action"
          />
          <Button
            onPress={this.Drama}
            title="Drama"
          />
          <Button
            onPress={this.Comedy}
            title="Comedy"
          />
        </View>

        {this.state.dataSource ? 
          <FlatList
          data={this.state.dataSource}  
          renderItem = {({item}) =>
            <View >
            <Image  source={{uri:'http://'+IP.ipcim+':3000/'+item.anime_id+'.jpg'}} style={{width:225, height:314 ,marginLeft:"auto",marginRight:"auto", borderRadius:10}} />  
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >N??v: {item.anime_nev} </Text>
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Megjelen??s: {item.anime_megjdatum.split('T')[0].trim()} </Text>
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >M??faj: {item.anime_mufaj} </Text>
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >??vadok sz??ma: {item.anime_evadsz} db </Text>
            
            </View>
            
          }
          
          keyExtractor={item => item.anime_id}
         />
        : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});