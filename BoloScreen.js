import React from 'react'

import {View, text,Image,StyleSheet} form 'react-native';

export default function BoloScreen(){
 return (
   <View style={sttle.contrainer}
 <Text style=style.title}>Um bolo de chocolate </text>
 <Image source={{ uri: ' https://i.pinimg.com/originals/ec/4b/ca/ec4bca1540cc94e9191693339dd8ecf8.png '}}
  style={styles.Image}></Image>
  <Text style={styles.description} Comece o dia com um delicioso bolinho> </Text>
  </View>
 );
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'centrer''
    backgroundColor: '#f8f8ff',
    padding:'20',
  },
  title: {
    fontSize: 24,
    fontWeight: 'boud',
    marginBottom: 20,
    color: '#4a2c2a'
  },
  image: {
    width:200,
    height:200,
    borderRadius:100,
    marginBottom: 20,
    borderColor: '#6b3e2e'
    border: 3,
  },

  description:{
    fontSize: 18,
    textAlign: 'center'
    color: '#5e403d',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});
 