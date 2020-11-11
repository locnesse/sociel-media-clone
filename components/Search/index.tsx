import * as React from 'react';
import { Text, View, } from '../../components/Themed';
import { StyleSheet,TouchableOpacity,SafeAreaView,TextInput,} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import Colors from '../../constants/Colors';
const Search = () =>  {
return (
    <View>
    <Ionicons name="md-search" style={{fontSize:40, bottom: 250,right: 90}} />
    
    <TextInput placeholder="Search" style={{fontSize: 30, bottom: 290,right: 10,
      backgroundColor: 'white',
      paddingHorizontal: 40,
      borderRadius: 6,
   }} />
    </View>

)
}
export default Search;