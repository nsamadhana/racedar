import { StyleSheet, Text, View, TouchableOpacity, Touchable} from 'react-native';
import { useRoute } from "@react-navigation/native"
import { useState } from 'react';


export default function Quiz({navigation}) {
  const [counter, setCounter] = useState(0);

  // Handle submission of the next buton 
  const handleSubmitNext=()=>{
    setCounter(counter+1)
    console.log("Entering handleSubmitNext with counter value: " + counter)
  };

  // Gets the color selected from the home screen
  //Stack overflow post: https://stackoverflow.com/questions/74188240/passing-data-to-other-screens-in-react-native
  // Maybe put this in a function dummy
  const route = useRoute();
  const color = route.params?.color; 
  const options = route.params?.options;
  console.log("User selected: " + color + " mode");
  console.log(color + " options are: " + options[0]);


  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.topText}>Imagine this is an image</Text>
      </View>

      <View style={styles.options}> 
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>{options[0]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>{options[1]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>{options[2]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>{options[3]}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}> 
      {counter!=9 && <TouchableOpacity style={styles.nextButton} onPress={handleSubmitNext}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity> }

      {counter===9 && <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.navigate("Result")}>
        <Text style={styles.nextButtonText}>Go to result</Text>
      </TouchableOpacity> }
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
  top: {
    marginVertical: 16,
  },
  topText: {
    fontWeight: '500', 
    fontSize: 24
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  option: {
    fontSize: 18, 
    fontWeight: '500',
    color: 'white'
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 12,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12, 

  }, 
  bottom: {
    marginBottom: 12, 
    paddingVertical: 16, 
    alignItems: 'center', 
    justifyContent: 'center'
  }, 
  resultButton: {
    backgroundColor: '#1A759F',
    padding: 12, 
    borderRadius: 12, 
    alignItems: 'center',
    marginBottom: 12,

  },
  resultButtonText: {
    fontSize: 24, 
    fontWeight: '600', 
    color: 'white',
  },
  nextButton: {
    backgroundColor: '#1A759F',
    padding: 12, 
    borderRadius: 12, 
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  }, 
  nextButtonText : {
    fontSize: 24, 
    fontWeight: '600', 
    color: 'white',
  }, 

}); 
