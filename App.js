import * as React from 'react';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
import ScreenD from './screens/ScreenD';
import ButtonScreen from './screens/ButtonScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StyleSheet} from 'react-native';

import GoalInput from './screens/Goalinput';

const Tab = createNativeStackNavigator();

function App() {
  return (
    <View style={styles.Input}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Bottom Navigation Screen" component={GoalInput} />
          <Tab.Screen
            name="user"
            component={ScreenA}
            options={{
              title: 'Screen A!',
            }}
          />
          <Tab.Screen
            name="profile"
            component={ScreenB}
            options={{
              title: 'Screen B!',
            }}
          />

          <Tab.Screen
            name="camera"
            component={ScreenC}
            options={{
              title: 'Screen C!',
            }}
          />
          <Tab.Screen
            name="video"
            component={ScreenD}
            options={{
              title: 'Screen D!',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   width: '100%',
  //   alignSelf: 'flex-start',
  //   alignContent: 'space-between',
  //   position: 'absolute',
  //   bottom: 0,

  //   flexDirection: 'row',
  //   backgroundColor: 'blue',
  // },

  Input: {
    flex: 1,

    alignItems: 'center',

    // alignContent: 'space-between',

    // bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  // selectedText: {color: '#ff8c', textAlign: 'center', fontSize: 16},
  // unselectedText: {color: '#ff4500', textAlign: 'center', fontSize: 16},
  // box: {
  //   flex: 1,

  //   marginLeft: 5,
  //   marginRight: 5,
  // },
});
export default App;
