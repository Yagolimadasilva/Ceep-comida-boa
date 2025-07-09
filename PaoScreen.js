import React from 'react'

import { View, Text,Image,StyleSheet } from 'react-native';

export default function PaoScreen(){
 return(
   <View style={sttle.contrainer}
 <Text style=style.title}>Um pao caseiro fresco </text>
 <Image source={{ uri: 'https://d2qcpt1idvpipw.cloudfront.net/recipes/2025/01/pao-caseiro-simples-com-agua.jpeg'}}
  style={styles.Image}></Image>
  <Text style={styles.description} Comece o dia com um pao macio, feito com carinho> </Text>
  </View>
 );
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'centrer''
    backgroundColor: '#fffaf0',
    padding:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 20,
    color: '#8b4513'
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
    color: '#a0522d',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});
 