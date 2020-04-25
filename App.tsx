import React from 'react';
import {NativeModules} from 'react-native';
import {Alert, Button, View} from 'react-native';

const {ToastExample} = NativeModules;

const App = () => {
  const show = async () => {
    await ToastExample.show('Hello!', ToastExample.SHORT);
    Alert.alert('Hello^^');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title={'BUTTON'} onPress={show} />
    </View>
  );
};

export default App;
