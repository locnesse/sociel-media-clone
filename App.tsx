import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify,{Auth,API,graphqlOperation} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import config from './aws-exports';

import {createUser} from './graphql/mutations';
import {getUser} from './graphql/queries';
import { CreateUserInput } from './API';


Amplify.configure(config)



function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

 const getRandomImage =() => {
    return 'https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/120426173_4536864283052527_5986015926137631131_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=unIu1yxiimwAX_4z3vb&_nc_ht=scontent.ftun4-1.fna&oh=0d10fce29cda8162035aeda38ece9c06&oe=5FB3142E'
  }

  const saveUserToDB = async (user:CreateUserInput) => {
    console.log(user);
  await API.graphql(graphqlOperation(createUser,   {input: user }))
  }


  useEffect(() => {
    const updateUser = async () => {
     //get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true });

       if(userInfo) {
      // Check if user already exists in database
      const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub})); 
      console.log (userData)
      if(!userData.data.getUser) {
        const user = {
          id : userInfo.attributes.sub,
          username : userInfo.username,
          name : userInfo.username,
          email : userInfo.attributes.email,
          image : getRandomImage(),
        }
        await saveUserToDB(user);
      } else {
        console.log('user already exists');
      }
       }
     

     // If it dosen't, create the user in the database
    }
    updateUser ();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)