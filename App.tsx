import React from 'react';
import ToastExample from './ToastExample';
import {Alert, Button, View} from 'react-native';

const App = () => {
  const show = async () => {
    await ToastExample.show('トーストを表示しました！', ToastExample.SHORT);
    Alert.alert('ちゃんと呼ばれています！');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title={'BUTTON'} onPress={show} />
    </View>
  );
};

export default App;
