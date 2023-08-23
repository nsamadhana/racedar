import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/Title';


export default function Home() {
  return (
    <View>
    <Title/>

    <View style={styles.bannerContainer}>
      <Image source={require('../assets/curious.png')}
        style={styles.banner}
        resizeMode="contain"
      />
    </View>

    <TouchableOpacity style={styles.button}>
      <Text>Start Button</Text>
    </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width:400,
    height:400,

  },
  bannerContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  }

});
