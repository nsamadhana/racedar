import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return (
        <View style={StyleSheet.container}> 
            <Text style={StyleSheet.titleText}>RACEDAR</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40, 
        fontWeight: '600',
      },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

  });
  