import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const axios = require('axios').default;




function DetalleScreen(){
  const color = ['#ffffff', '#49c5b6', '#ECD06F']
  const [nombre, setNombre] = React.useState(null);
  const [foto, setFoto] = React.useState(null);
  const [level, setLevel] = React.useState(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


  function pegarAPI(){
    let nrandom = getRandomInt(100);

  axios.get("https://digimon-api.vercel.app/api/digimon")
    .then(function(resp){
        let nombre = resp.data[nrandom].name
        setNombre(nombre);
        let foto = resp.data[nrandom].img
        setFoto(foto);
        let level = resp.data[nrandom].level
        setLevel(level);
    })
    .catch(function(err){
        console.log(err);
    })
  }

    return(
      <View style={styles.container}>
        
      {nombre != null ? <Text>{nombre}</Text> : null}
      {foto != null ? <Image 
      style={{ width: 400, height: 400 }}
      source={{ uri: foto }}/> : null}
      {level != null ? <Text>{level}</Text> : null}
      <Button
      title='Obtener digimon'
      onPress={() => pegarAPI()}
      />
      <StatusBar style="auto" />
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

module.exports = DetalleScreen;