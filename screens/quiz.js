import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Quiz() {
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
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  }, 
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
  }
});
