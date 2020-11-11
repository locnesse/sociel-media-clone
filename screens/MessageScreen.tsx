import * as React from 'react';
import { StyleSheet } from 'react-native';
import NewIpsetButton from "../components/NewIpsetButton";
import { Text, View } from '../components/Themed';

export default function MessageScreen() {
  return (
    <View style={styles.container}>
     <NewIpsetButton />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
