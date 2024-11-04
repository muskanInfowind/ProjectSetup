import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Add} from './assets/images';

const App = () => {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>{myIcon}</Text>
        <Text style={{fontFamily: 'Roboto-Italic'}}>React native</Text>
        <Text style={{fontFamily: 'Roboto-BoldItalic'}}>React native</Text>
        <Text>React native</Text>
        <Add />
      </View>
    </SafeAreaView>
  );
};

export default App;
