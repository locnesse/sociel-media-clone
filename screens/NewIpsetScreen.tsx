import * as React from 'react';
import { StyleSheet,TouchableOpacity,SafeAreaView,TextInput} from 'react-native';
import {API,Auth,graphqlOperation} from 'aws-amplify';

import { Text, View } from '../components/Themed';
import {AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from '../components/ProfilePicture';
import {useState} from "react";
import {createIpset} from '../graphql/mutations';
import { useNavigation } from '@react-navigation/native';


export default function NewIpsetScreen() {


const [Ipset, setIpset]= useState("");
const [imageUrl, setImageUrl]= useState("");




const onPostIpset = async () => {
try {

const currentUser = await Auth.currentAuthenticatedUser(  { bypassCache: true });



  const newIpset = {
    content: Ipset,
    image: imageUrl,
    userID: currentUser.attributes.sub ,
  }  
  await API.graphql(graphqlOperation(createIpset, {input: newIpset}));
  navigation.goBack();
} catch (e) {
  console.log (e);
}
}


  const navigation = useNavigation();

  const OnCancel = () => {
      navigation.navigate('HomeScreen');
  }
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={OnCancel}>
           <AntDesign name="close" size={30} color={Colors.light.tint} />
        </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={onPostIpset}>
         <Text style={styles.buttonText}>Ipset</Text>
       </TouchableOpacity>
     </View>
     <View style={styles.NewIpsetContainer}>
       <ProfilePicture image={'https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/120426173_4536864283052527_5986015926137631131_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=unIu1yxiimwAX_4z3vb&_nc_ht=scontent.ftun4-1.fna&oh=0d10fce29cda8162035aeda38ece9c06&oe=5FB3142E'}/>
       <View style={styles.inputsContainer}>
       <TextInput
         value={Ipset}
         onChangeText={(value)  => setIpset(value)}
         multiline={true}
         numberOfLines={3}
         style={styles.IpsetInput}
         placeholder={"whats up?"}
       />
       <TextInput
         value={imageUrl} 
         onChangeText={(value) => setImageUrl(value)}
         style={styles.imageInput}
         placeholder={"image url (optional)"}
       />
       </View>
     </View>
    </SafeAreaView>
  );  
}


const styles = StyleSheet.create({
  container: {
     flex: 1,
     alignItems: 'flex-start',
     backgroundColor: 'white'
  },
  headerContainer: {
     width: '102%',
     flexDirection: 'row',
     justifyContent: 'space-between',
     padding: 30,
  },
  button: {
     backgroundColor:Colors.light.tint,
     borderRadius: 30,
  },
  buttonText : {
    paddingHorizontal: 20,
    paddingVertical: 9,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  NewIpsetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  IpsetInput: {
    height: 100,
    maxHeight:300,
    fontSize:20,
  },
  imageInput: {

  }
});
