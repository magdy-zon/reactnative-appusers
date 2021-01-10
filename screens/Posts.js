import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <FlatList
        data = { users }
        keyExtrator = { x => x.id }
        renderItem = { ({item}) => <ListItem title={item.name} /> }
      />
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