import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
function HomeScreen(){
    return(
      <View style={styles.container}>
        <Text>Bienvenido a la aplicacion de Digimon! Ingresando a la pestaña de "Detalle" podras ver que digimon te toca</Text>
        <Image 
      style={{ width: 400, height: 400 }}
      source={{ uri: 'https://i2.wp.com/www.senpai.com.mx/wp-content/uploads/2020/01/Digimon-ninos-elegidos-1.jpg?w=1280&ssl=1' }}/>
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

module.exports = HomeScreen;