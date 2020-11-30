import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <Text style={styles.text}>Hello, World.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'yellow',
    color: 'white',
  },
  text: {
    fontSize: 24,
  }
});

export default App;
