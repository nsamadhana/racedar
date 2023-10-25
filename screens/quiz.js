import { StyleSheet, Text, View, TouchableOpacity, Touchable, Image} from 'react-native';
import { useRoute } from "@react-navigation/native"
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from '../firebaseConfig.js';
import { collection, addDoc, getDocs} from "firebase/firestore"; 

/* 
Retrieves data within a collection 
param: collectionName 
returns a list of image URLs 
*/ 
async function getDocumentsFromFireStore(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  //console.log(querySnapshot);
  const urls = [];
  const imageData = []; 
  querySnapshot.forEach((doc) => {
    imageData.push(doc.data());
  });

  return imageData; 
}

  //Initialize firebase app/firestore, and get a reference to the server
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  function EthnicityButton({ ethnicity, setSelectedEthnicity, selectedEthnicity }) {
    return (
      <TouchableOpacity
        onPress={() => setSelectedEthnicity(ethnicity)}
        style={{
          backgroundColor: selectedEthnicity === ethnicity ? '#34A0A4' : 'gray',
          paddingVertical: 12,
          marginVertical: 12,
          paddingHorizontal: 12,
          borderRadius: 12, 
        }}
      >
        <Text style={styles.nextButtonText}>{ethnicity}</Text>
      </TouchableOpacity>
    );
  }

  // param
  function cleanString(cleanMe) {
    return cleanMe.trim().toUpperCase(); 
  }

  
export default function Quiz({navigation}) {
  const [counter, setCounter] = useState(0);
  const [imageUrls, setImageObjects] = useState([]); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const [currentImageUrl, setCurrentImageUrl] = useState(0); 
  const [currentImageEthnicity, setCurrentImageEthnicity] = useState(null);
  const [selectedEthnicity, setSelectedEthnicity] = useState(null);
  const [userScore, setUserScore] = useState(0);

  // Retrieving image URLs is an async operation so we must await 
  useEffect(() => {
    // Use an effect to fetch the list of image URLs when the component mounts
    const fetchData = async () => {
      const imageObjects = await getDocumentsFromFireStore(route.params.color);

      setImageObjects(imageObjects);
      setCurrentImageUrl(imageObjects[currentImageIndex].url); 
      setCurrentImageEthnicity(imageObjects[currentImageIndex].ethnicity);
    };
    fetchData();
  }, [currentImageIndex]);


  // Increments the current image index or sets it back to 0
  const handleNextImage = () => {
    if (currentImageIndex + 1 < imageUrls.length) {
      setCurrentImageIndex(currentImageIndex + 1); 
    }else {
      setCurrentImageIndex(0);
    }
  }

  // Handle submission of the next buton 
  const handleSubmitNext=()=>{
    const cleanSelectedEthnicity = cleanString(selectedEthnicity);
    const cleanCurrentImageEthnicity = cleanString(currentImageEthnicity); 

    if (cleanSelectedEthnicity == cleanCurrentImageEthnicity) {
      setUserScore(userScore+1);
      console.log("CORRECT GUESSS");
    } else {
      console.log("INCORRECT GUESS");
    }
    console.log("current score: ", userScore);
    console.log(cleanSelectedEthnicity, cleanCurrentImageEthnicity);
    setCounter(counter+1)
    handleNextImage(); 
  };

  // Gets the color selected from the home screen
  //Stack overflow post: https://stackoverflow.com/questions/74188240/passing-data-to-other-screens-in-react-native
  // Maybe put this in a function dummy
  const route = useRoute();
  const options = route.params?.options;


  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
      <Image 
      style = {styles.image} 
      source={{ uri: currentImageUrl }}>
      </Image>
      </View>

      <View style={styles.options}> 

        <EthnicityButton style ={styles.optionButton}
          ethnicity={options[0]}
          setSelectedEthnicity={setSelectedEthnicity}
          selectedEthnicity={selectedEthnicity}
        />

        <EthnicityButton style ={styles.optionButton}
          ethnicity={options[1]}
          setSelectedEthnicity={setSelectedEthnicity}
          selectedEthnicity={selectedEthnicity}
        />
        
        <EthnicityButton style ={styles.optionButton}
          ethnicity={options[2]}
          setSelectedEthnicity={setSelectedEthnicity}
          selectedEthnicity={selectedEthnicity}
        />

        <EthnicityButton style ={styles.optionButton}
          ethnicity={options[3]}
          setSelectedEthnicity={setSelectedEthnicity}
          selectedEthnicity={selectedEthnicity}
        />

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
  image: {
    width: 400, 
    height: 400,
    resizeMode : "contain"
  },
  imageContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,

  }

}); 
