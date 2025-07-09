import React from 'react'

import {View, Text,Image,StyleSheet} from 'react-native';

export default function CafeScreen(){
 return (
   <View style={sttle.contrainer}
 <Text style=style.title}>Um Cafe Fresquinho</text>
 <Image source={{ uri: 'https://esbrasil.com.br/wp-content/uploads/2016/02/cafe_800.jpg'}}
  style={styles.Image}></Image>
  <Text style={styles.description} Comece o dia com um xicara de Cafe aromatico e revigorante> </Text>
  </View>
 );
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'centrer''
    backgroundColor: '#f5f5dc',
    padding:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 20,
    color: '#5c4033'
  },
  image: {
    width:200,
    height:200,
    borderRadius:100,
    marginBottom: 20,
    borderColor: '#d2b48c'
    border: 3,
  },

  description:{
    fontSize: 18,
    textAlign: 'center'
    color: '#65321',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});
 
