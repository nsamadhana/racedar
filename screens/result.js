import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Result({navigation}) {
  return (
    <View >
      <View>
        <Text>This is the result screen</Text>
      </View>

      <View style={styles.bannerContainer}>
      <Image source={require('../assets/curious.png')}
        style={styles.banner}
        resizeMode="contain"
      />
    </View>

    <View> 
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300
  },
  bannerContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
});
