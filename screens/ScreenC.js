import React from 'react';
import {WebView} from 'react-native-webview';
import {View, StyleSheet} from 'react-native';
const ScreenC = props => {
  return (
    <View style={styles.box}>
      <WebView
        source={{
          uri: 'https://www.youtube.com/watch?v=B75yZwYS4z8',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ff00ff',
    textAlign: 'center',
    fontSize: 16,
  },

  box: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default ScreenC;
