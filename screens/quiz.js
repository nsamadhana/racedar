import { StyleSheet, Text, View, TouchableOpacity, Touchable} from 'react-native';

export default function Quiz({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text>Imagine this is an image</Text>
      </View>

      <View style={styles.options}> 
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Option 3</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Option 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}> 
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate("Result")}>
          <Text>Go to Result</Text>
        </TouchableOpacity>
      </View>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50, 
    paddingHorizontal: 20,
    height: '100%',
  }, 
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12, 
    paddingVertical: 16, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
