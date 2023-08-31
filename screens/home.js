import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/Title';
import {useState} from 'react';


export default function Home({navigation}) {

  const handlePress = () => {
    console.log("Selected a color on the home screen")
    navigation.navigate("Quiz", {
      // Need to dynamically populate this color variable 
      color: "black"
    });
  }

  return (
    <View style={styles.container}>
    <Title/>

    <View style={styles.bannerContainer}>
      <Image source={require('../assets/curious.png')}
        style={styles.banner}
        resizeMode="contain"
      />
    </View>
    

    <View style={styles.buttonContainer}>
      <TouchableOpacity 
      onPress={()=>handlePress()}
      style={styles.button}>
        <Text style={styles.buttonText}>Black</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate("Quiz")}
      style={styles.button}>
        <Text style={styles.buttonText}>Yellow</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate("Quiz")}
      style={styles.button}>
        <Text style={styles.buttonText}>White</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate("Quiz")}
      style={styles.button}>
        <Text style={styles.buttonText}>Brown 1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate("Quiz")}
      style={styles.button}>
        <Text style={styles.buttonText}>Brown 2</Text>
      </TouchableOpacity>
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50, 
    paddingHorizontal: 20,
    height: '100%'
  }, 
  banner: {
    width: 400,
    height: 400,

  },
  bannerContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 6, 
    borderRadius: 12, 
    alignItems: 'center',
    marginBottom: 24
  }, 
  buttonText: {
    fontSize: 24, 
    fontWeight: '600', 
    color: 'white',
  }

});
