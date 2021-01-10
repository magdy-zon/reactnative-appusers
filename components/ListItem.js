import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  text: {
    fontSize: 18
  }
});

export default ({ title }) => {
  return (
    <View style = { styles.container }>
      <Text style =  { styles.text }>{title}</Text>
    </View>
  )
};
