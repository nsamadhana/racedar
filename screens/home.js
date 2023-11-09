import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Title from '../components/Title';


export default function Home({navigation}) {

  // Refactor this in the future to dynamically set color/options in one function 
  // This is shitty code
  const handleBlackPress = () => {
    navigation.navigate("Quiz", {
      color: "black",
      options: ["Nigeria", "Ethiopia", "Kenya", "Sudan "]
    });
  }

  const handleYellowPress = () => {
    navigation.navigate("Quiz", {
      color: "yellow",
      options: ["China", "Japan", "Korea", "Vietnam"]
    });
  }

  const handleBrown1Press = () => {
    navigation.navigate("Quiz", {
      color: "brown1",
      options: ["India", "Pakistan", "Iraq", "Afghanistan"]
    });
  }

  const handleBrown2Press = () => {
    navigation.navigate("Quiz", {
      color: "brown2",
      options: ["Mexico", "Brazil", "Philippines", "Columbia"]
    });
  }

  const handleWhitePress = () => {
    navigation.navigate("Quiz", {
      color: "white",
      options: ["Britain", "France", "Russia", "German"]
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
      onPress={()=>handleBlackPress()}
      style={styles.button}>
        <Text style={styles.buttonText}>Black</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>handleYellowPress()}
      style={styles.button}>
        <Text style={styles.buttonText}>Yellow</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>handleBrown1Press()}
      style={styles.button}>
        <Text style={styles.buttonText}>Brown1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>handleBrown2Press()}
      style={styles.button}>
        <Text style={styles.buttonText}>Brown2</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>handleWhitePress()}
      style={styles.button}>
        <Text style={styles.buttonText}>White</Text>
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
