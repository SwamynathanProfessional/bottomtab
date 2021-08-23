import React from 'react';
import {WebView} from 'react-native-webview';
import {View, StyleSheet} from 'react-native';
const ScreenA = props => {
  return (
    <View style={styles.box}>
      <WebView
        source={{
          uri: 'https://www.google.com/',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default ScreenA;
