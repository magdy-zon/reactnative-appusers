import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Open up  to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
