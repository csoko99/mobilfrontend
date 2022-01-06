import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class Szavazas extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  szavazat=(szam)=>{
    //alert(szam)
    
    var bemenet={
      bevitel1:szam
    }
    

  fetch("http://192.168.1.105:3000/szavazatfelvitel", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    return fetch('http://192.168.1.105:3000/animek')
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
        <Image  source={{uri: 'http://192.168.1.105:3000/'+item.anime_id+'.jpg'}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} /> 
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.anime_nev} </Text>
           

          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.szavazat(item.anime_id)}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}  >Erre szavazok</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({anime_id}, index) => anime_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});