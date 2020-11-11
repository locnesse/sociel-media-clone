import * as React from 'react';
import { StyleSheet } from 'react-native';
import NewIpsetButton from "../components/NewIpsetButton";
import { Text, View } from '../components/Themed';



export default function NotificationScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>notification screen .</Text>
      <NewIpsetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
