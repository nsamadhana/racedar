import { StyleSheet, Text, View, TouchableOpacity, Touchable} from 'react-native';
import { useState } from 'react';

export default function Quiz({navigation}) {
  const [images, setImages] = useState(); 
  const [counter, setCounter] = useState(0);
  const black = ["Sudanese", "Nigerian", "Ethiopian", "Kenyan"]

  //Retrieve an image from the assets folder
  const getImages = async () => {
    
  };

  //Handle submission of the next buton 
  const handleSubmitNext=()=>{
    console.log("Entering handleSubmitNext")
    setCounter(counter+1)
  };

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.topText}>Imagine this is an image</Text>
      </View>

      <View style={styles.options}> 
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}> 

      {counter!=9 && <TouchableOpacity style={styles.nextButton} onPress={handleSubmitNext}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity> }
        
      
        <TouchableOpacity
          style={styles.resultButton}
          onPress={()=>navigation.navigate("Result")}>
          <Text style={styles.resultButtonText}>Go to Result</Text>
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
