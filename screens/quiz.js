import { StyleSheet, Text, View, TouchableOpacity, Touchable, Image} from 'react-native';
import { useRoute } from "@react-navigation/native"
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs} from "firebase/firestore"; 


// Initialize Firebase with your project config
const firebaseConfig = {
  apiKey: 'AIzaSyBu_pvGVemZGaPAOhz39eoPcfpSFK2SKp0',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'racedar-60157',
  storageBucket: 'racedar-60157.appspot.com',
  messagingSenderId: '282688212196',
  appId: '1:282688212196:ios:cd3c86e8fbb48aa40eb0f1',
};

//Uploads data to firestore 
async function addDocumentToFireStore() {
  try {
    const docRef = await addDoc(collection(db, "Images"), {
      genre: "black",
      name: "Alek Wek",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Alek_Wek%2C_Red_Dress_Collection_2007.jpg"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


/* 
Retrieves data within a collection 
param: collectionName 
returns a list of image URLs 
*/ 
async function getDocumentsFromFireStore(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const urls = [];
  const imageData = []; 
  querySnapshot.forEach((doc) => {
    urls.push(`${doc.data().url}`);
    imageData.push(doc.data());
  });

  return imageData; 
}

  //Initialize firebase app/firestore, and get a reference to the server
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


export default function Quiz({navigation}) {
  const [counter, setCounter] = useState(0);
  const [imageUrls, setImageObjects] = useState([]); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const [currentImageUrl, setCurrentImageUrl] = useState(0); 

  // Retrieving image URLs is an async operation so we must await 
  useEffect(() => {
    // Use an effect to fetch the list of image URLs when the component mounts
    const fetchData = async () => {
      const imageObjects = await getDocumentsFromFireStore(route.params.color);
      setImageObjects(imageObjects);
      setCurrentImageUrl(imageObjects[currentImageIndex].url); 
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
