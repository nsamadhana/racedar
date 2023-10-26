import { StyleSheet, Text, View, TouchableOpacity, Touchable, Image} from 'react-native';
import { useRoute } from "@react-navigation/native"
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from '../firebaseConfig.js';
import { collection, getDocs} from "firebase/firestore"; 

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
        <Text style={styles.checkButtonText}>{ethnicity}</Text>
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
  const handleImageIndex= () => {
    if (currentImageIndex + 1 < imageUrls.length) {
      setCurrentImageIndex(currentImageIndex + 1); 
    }else {
      setCurrentImageIndex(0);
    }
  }

  // Handle submission of the next buton 
  // Checks if 
  const handleSubmitCheck=()=>{
    const cleanSelectedEthnicity = cleanString(selectedEthnicity);
    const cleanCurrentImageEthnicity = cleanString(currentImageEthnicity); 

    if (cleanSelectedEthnicity == cleanCurrentImageEthnicity) {
      setUserScore(userScore+1);
    } 
    setCounter(counter+1)
    handleImageIndex(); 

    //Sets the check button back to grey 
    setSelectedEthnicity(null);
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
        <View style={styles.scoreContainer}>

        {counter !== 10 && (
          <TouchableOpacity
            style={[
              styles.checkButton,
              selectedEthnicity ? {} : { backgroundColor: 'gray' }, // Disable button if no ethnicity is selected
            ]}
            onPress={selectedEthnicity ? handleSubmitCheck : null}
          >
            <Text style={styles.checkButtonText}>CHECK</Text>
          </TouchableOpacity>
        )}
        {counter===10 && <TouchableOpacity style={styles.checkButton} onPress={()=>navigation.navigate("Result")}>
          <Text style={styles.checkButtonText}>See Results</Text>
        </TouchableOpacity> }

        <Text style = {styles.score}>{userScore}/10</Text>

        </View>

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
    justifyContent: 'center',

  }, 
  scoreContainer: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Create space between the items
    margin: 12,
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
  checkButton: {
    backgroundColor: '#1A759F',
    padding: 12, 
    borderRadius: 12, 
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  }, 
  checkButtonText : {
    fontSize: 24, 
    fontWeight: '600', 
    color: 'white',
  }, 
  score : {
    fontSize: 48, 
    fontWeight: '500', 
    color: 'black',
    paddingHorizontal: 24,
  }, 
  image: {
    width: 300, 
    height: 300,
    resizeMode : "contain",
    borderWidth: 7, 
    borderColor: 'black',
    borderRadius:12,
  },
  imageContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    
  }
}); 
