import * as React from 'react';
import { StyleSheet } from 'react-native';
import NewIpsetButton from "../components/NewIpsetButton";
import { Text, View } from '../components/Themed';
import Search from '../components/Search';



export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View
 style={{
   position: 'absolute',
   left: 0,
   right: 0,
   top: 0,
   height: 70,
   backgroundColor: 'orange',
   flexDirection: 'row',
   alignItems: 'center',
   paddingHorizontal: 5,
 }}>
   
 </View>
     <NewIpsetButton />
     <Search />
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
