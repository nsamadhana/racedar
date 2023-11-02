import React from 'react';
import { useRoute } from "@react-navigation/native"
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Result({navigation}) {

  const route = useRoute();
  const finalScore = route.params?.userScore; 
  

  return (
    <View style={styles.container} >

      <View style={styles.bannerContainer}>
      <Image source={require('../assets/curious.png')}
        style={styles.banner}
        resizeMode="contain"
      />

      <View>
      <Text>Boy you scored a whopping {finalScore}/10</Text>
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
