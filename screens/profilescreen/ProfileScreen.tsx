import * as React from 'react';
import { StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {API, Auth, graphqlOperation} from 'aws-amplify';

import { Text, View } from '../../components/Themed';
import Colors from "../../constants/Colors";
import ProfilePicture from '../../components/ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import Feed from '../../components/Feed';
import {getUser} from '../../graphql/queries';
import NewIpsetButton from '../../components/NewIpsetButton';




export default function ProfileScreen() {
  const navigation = useNavigation();

  const OnCancel = () => {
      navigation.navigate('HomeScreen');
  }

  const [user,setUser] = React.useState(null);

  React.useEffect(() => {
  // get the current user  
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true });
    if (!userInfo) {
      return;
    }
    try {
      const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
      
      if(userData) {
        setUser(userData.data.getUser);
        
      }
    } catch (e) {
      console.log(e);
    }
  }
  fetchUser();
  }, [])
  React.useEffect(() => {
    // get the current user  
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true });
      if (!userInfo) {
        return;
      }
      try {
        const userData = await API.graphql(graphqlOperation(getUser, { username : userInfo.username}))
        
        if(userData) {
          setUser(userData.data.getUser);
          
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchUser();
    }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}></View>
     <View style={styles.headerContainer}>
     <TouchableOpacity onPress={OnCancel}>
       <MaterialIcons  name="arrow-back" size={30} color={Colors.light.tint}  />
       </TouchableOpacity>
     </View>
    <View style={styles.ProfileContainer}>
    <ProfilePicture size={95} image= {user?.image}/>
       <Text style={styles.name}> 
       {user?.username}
                 
               </Text>
         </View>  
         <View style={styles.profileDetail}>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Post</Text>
                <Text style={styles.count}>200</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Followers</Text>
                <Text style={styles.count}>200</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Following</Text>
                <Text style={styles.count}>200</Text>
              </View>
            </View>
            <View style={styles.feed}></View>
      <View style={styles.detailContent}></View>

            <Feed  />
            <NewIpsetButton />
    </SafeAreaView>


    
  );
}  


const styles = StyleSheet.create({
  container: {
     flex:7,
     backgroundColor: 'white'
  },
  feed:{
    margin:110,

    alignItems: 'center'

  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  
  headerContainer: {
    width: '102%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    marginTop: -200 ,
    backgroundColor: "#00BFFF",

 },
 ProfileContainer: {
  width: 110,
  height: 130,
  borderWidth: 3,
  borderColor: "white",
  flex:1,
  alignSelf:"center",
  position: 'absolute',
  alignItems: 'center',
  borderRadius: 70,
  marginTop:130
},
name:{
  alignItems: 'center',
  fontSize:14,
  color:"black",
  fontWeight:'700',
},
profileDetail:{
  alignSelf: 'center',
  marginTop:250,
  alignItems: 'center',
  flexDirection: 'row',
  position:'absolute',
  backgroundColor: "#ffffff"
},
detailContent:{
  margin:10,
  alignItems: 'center'
},
title:{
  fontSize:20,
  color: "black"
},
count:{
  fontSize:18,
},
});  
