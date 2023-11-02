import React from 'react';
import { useRoute } from "@react-navigation/native"
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//Generates result message from user score
const getMessageFromScore =(score)=>{
  if (score == 0) {
    return "You are a menace to society. Please touch some grass";
  } else if (score <= 3) {
    return "You are a probably a key member of MAGA";
  } else if (score <= 6) {
    return "Not bad! You payed attention in DEI training!"
  } else if (score <= 9) {
    return "Wow! You are a true inclusivity warrior!"
  } else {
    return "YOU ARE THE ONE TRUE RACEDAR"
  }
};

export default function Result({navigation}) {
  //Retrieve user score from the quiz page 
  const route = useRoute();
  const finalScore = route.params?.userScore; 
  const message = getMessageFromScore(finalScore); 

  return (
    <View style={styles.container} >

      <View style={styles.bannerContainer}>
      <Image source={require('../assets/curious.png')}
        style={styles.banner}
        resizeMode="contain"
      />

      <View>
      <Text>Boy you scored a whopping {finalScore}/10</Text>
      <Text>{message}</Text>
      </View>
    </View>

    <View> 
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.return}>Go Home</Text>
      </TouchableOpacity>
    </View>
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50, 
    paddingHorizontal: 20,
  },
  banner: {
    height: 300,
    width: 300
  },
  bannerContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  return: {
    paddingHorizontal: 24, 
    fontSize: 24, 
    fontWeight: '600'
  },
});
