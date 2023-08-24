import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return (
        <View style={styles.container}> 
            <Text style={styles.titleText}>RACEDAR</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 36, 
        fontWeight: '600',
      },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

  });
  