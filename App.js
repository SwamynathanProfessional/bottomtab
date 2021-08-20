import * as React from 'react';
import {useState} from 'react';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenD from './screens/ScreenD';

function App() {
  const [idno, setidno] = useState(0);

  var content;

  var array = [
    {title: 'users', name: 'users'},
    {title: 'id-badge', name: 'profile'},
    {title: 'camera', name: 'camera'},
    {title: 'video', name: 'video'},
  ];

  if (idno === 0) {
    content = <ScreenA />;
  } else if (idno === 1) {
    content = <ScreenB />;
  } else if (idno === 2) {
    content = <ScreenC />;
  } else if (idno === 3) {
    content = <ScreenD />;
  }
  return (
    <View style={styles.Input}>
      {content}

      <View style={styles.container}>
        {array.map((item, index) => (
          <View style={styles.box}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                setidno(index);
              }}>
              <FontAwesome5
                style
                name={item.title}
                size={index === idno ? 35 : 25}
                color={index === idno ? '#ff6347' : '#fff'}
              />
              <Text
                style={
                  index === idno ? styles.selectedText : styles.unselectedText
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'flex-start',
    alignContent: 'space-between',
    position: 'absolute',
    bottom: 0,

    flexDirection: 'row',
    backgroundColor: 'blue',
  },

  Input: {
    flex: 1,

    alignItems: 'center',

    // alignContent: 'space-between',

    // bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  selectedText: {color: '#ff8c', textAlign: 'center', fontSize: 16},
  unselectedText: {color: '#ff4500', textAlign: 'center', fontSize: 16},
  box: {
    flex: 1,

    marginLeft: 5,
    marginRight: 5,
  },
});
export default App;
