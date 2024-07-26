/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import {useNotification} from './hooks/useNotification';

function App(): React.JSX.Element {
  const {onCreateTriggerNotification, onDisplayNotification} =
    useNotification();

  return (
    <SafeAreaView>
      <View>
        <Button
          title="Display Notification"
          onPress={() => onDisplayNotification()}
        />

        <Button
          title="Trigger background Notification"
          onPress={() => onCreateTriggerNotification()}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
