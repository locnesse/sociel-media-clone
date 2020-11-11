import React from 'react';
import {TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const NewIpsetButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('NewIpset');
    }

return (
    <TouchableOpacity
       activeOpacity={0.8}
       style={styles.button} 
       onPress={onPress}
    >
      <MaterialCommunityIcons name={"feather"} size={30} color="white" />
    </TouchableOpacity>
)
}


export default NewIpsetButton;