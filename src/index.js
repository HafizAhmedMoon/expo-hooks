import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  const [hasError, showError] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: 20,
        }}
      />
      <Text
        style={{
          paddingVertical: 20,
          fontSize: 20,
          color: '#5a16ff',
        }}>
        Expo with Hooks!
      </Text>
      <View style={{flex: 1}}></View>
    </View>
  );
}
