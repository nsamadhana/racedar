import React from 'react';
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default function Result({navigation}) {
  const[resultImageUrl, setResultImageUrl] = useState(null);
  const[message, setMessage] = useState("");
  const route = useRoute();
  const finalScore = route.params?.userScore; 

  
  const getMessageFromScore =(score, setResultImageUrl)=>{
    let message = "";
    let imageUrl = "";

    if (score == 0) {
      imageUrl = "https://images.seattletimes.com/wp-content/uploads/2023/06/urnpublicidap.orgd50264cc69b9a6eefd8e47821359ff5eElection_2024_Trump_Georgia_Republican_Convention_28319.jpg?d=780x520";
      message = "You are probably a key member of MAGA.";
    } else if (score <= 3) {
      imageUrl = "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABY-vFmQHpj9BDBVJJBpcuz1h1qqdfAEr55rRHzh9yPDIkzhyC9N_RXn1jp-D4eNNR_pmsf8FqUNsFr76RmGXRFU5zGAON9NXGIBTjQk1vnUYpT261FpPELCq.jpg?r=e7a";
      message = "MLK would be dissapointed.";
    } else if (score <= 6) {
      imageUrl = "https://static.wikia.nocookie.net/theoffice/images/5/53/Diversity_Day.png/revision/latest?cb=20190227025918";
      message = "Looks like someone paid attention during DEI training.";
    } else if (score <= 9) {
      imageUrl = "https://media.cnn.com/api/v1/images/stellar/prod/150122104348-bill-clinton-basketball.jpg?q=x_0,y_80,h_863,w_1535,c_crop/h_720,w_1280/f_webp";
      message = "Absolutely stellar. You are a man of the people.";
    } else {
      imageUrl = "https://www.usatoday.com/gcdn/presto/2019/01/21/USAT/79aeb6e5-4f9a-4a10-8f43-8ad0f642a0ec-AFP_AFP_13C6FH.JPG?crop=2499,1428,x0,y169&width=2499&height=1428&format=pjpg&auto=webp";
      message = "You do not see color. Congratulations, you are the racedar. ";
    }

    setResultImageUrl(imageUrl);
    return message; 
  };



  useEffect(() => {
    // Grab the  message based on the score without triggering re-renders
    const msg = getMessageFromScore(finalScore, setResultImageUrl);

    // Can now use the message in the component for display or other purposes
    setMessage(msg);
  }, [finalScore]);

  return (
    <View style={styles.container} >

      <View style={styles.bannerContainer}>
      <Image 
        style={styles.banner}
        source={{ uri: resultImageUrl }}>
        </Image>


      <View>
      <Text style={styles.scoreText}>You scored {finalScore}/10</Text>
      <Text style={styles.message}>{message}</Text>
      </View>
    </View>

    <View> 
      <TouchableOpacity style = {styles.goHomeButton} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.goHome}>Go Home</Text>
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
    height: 400,
    width: 350,
    resizeMode:"contain"  
  },
  bannerContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 24, 
    fontWeight: '600',    
    marginBottom: 12
  },
  message: {
    fontSize: 24, 
    fontWeight: '600', 
    marginBottom: 12
  },
  goHomeButton: {
    backgroundColor: '#1A759F',
    padding: 12, 
    borderRadius: 12, 
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  }, 
  goHome: {
    paddingHorizontal: 24, 
    fontSize: 24, 
    fontWeight: '600',
    color:'white'
  },
});
