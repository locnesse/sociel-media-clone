import { Ionicons,FontAwesome, } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {API, Auth, graphqlOperation} from 'aws-amplify';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import { BottomTabParamList,HomeNavigatorParamList, SearchNavigatorParamList,NotificationNavigatorParamList,MessageNavigatorParamList } from '../types';
import ProfilePicture from '../components/ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {getUser} from '../graphql/queries';



const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
         }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color  }) => <TabBarIcon name="md-search" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Notification"
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ color  }) => <TabBarIcon name="md-notifications-outline" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Messages"
        component={MessageNavigator}
        options={{
          tabBarIcon: ({ color  }) => <TabBarIcon name="ios-mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {

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



  
  const navigation = useNavigation();


  const OnCancel = () => {
      navigation.navigate('Profile');
  }
  

  
  
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerLeftContainerStyle: {
            marginLeft:15,
          },
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            marginRight: 15,         
          },
          headerTitle: () => (
           <FontAwesome name={"graduation-cap"} size={35} color={Colors.light.tint}/>
          
          ),
          headerRight:() => (
            
            <TouchableOpacity >
            <FontAwesome  name={"pied-piper-alt"} size={40} color={Colors.light.tint} />
            </TouchableOpacity>
           ),
           headerLeft:() => (
            <TouchableOpacity onPress={OnCancel}>
            <ProfilePicture size={40} image= {user?.image}/>
            </TouchableOpacity>
           )
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<SearchNavigatorParamList>();

function SearchNavigator() {

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



  
  const navigation = useNavigation();

  const OnCancel = () => {
      navigation.navigate('Profile');
  }
  
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerLeftContainerStyle: {
            marginLeft:15,
          },
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            marginRight: 15,         
          },
          headerTitle: () => (
           <FontAwesome name={"graduation-cap"} size={35} color={Colors.light.tint}/>
          
          ),
          headerRight:() => (
            
            <FontAwesome  name={"pied-piper-alt"} size={40} color={Colors.light.tint}/>
           ),
           headerLeft:() => (
            <TouchableOpacity onPress={OnCancel}>
            <ProfilePicture size={40} image= {user?.image}/>
            </TouchableOpacity>
           )
         }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<NotificationNavigatorParamList>();

function NotificationNavigator() {

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



  
  const navigation = useNavigation();

  const OnCancel = () => {
      navigation.navigate('Profile');
  }


  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ 
          headerLeftContainerStyle: {
            marginLeft:15,
          },
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            marginRight: 15,         
          },
          headerTitle: () => (
           <FontAwesome name={"graduation-cap"} size={35} color={Colors.light.tint}/>
          
          ),
          headerRight:() => (
            
            <FontAwesome name={"pied-piper-alt"} size={40} color={Colors.light.tint}/>
           ),
           headerLeft:() => (
            <TouchableOpacity onPress={OnCancel}>
            <ProfilePicture size={40} image= {user?.image}/>
            </TouchableOpacity>
           )
         }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<MessageNavigatorParamList>();

function MessageNavigator() {

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



  
  const navigation = useNavigation();

  const OnCancel = () => {
      navigation.navigate('Profile');
  }

  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{ 
          headerLeftContainerStyle: {
            marginLeft:15,
          },
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            marginRight: 15,         
          },
          headerTitle: () => (
           <FontAwesome name={"graduation-cap"} size={35} color={Colors.light.tint}/>
          
          ),
          headerRight:() => (
            <FontAwesome name={"pied-piper-alt"} size={40} color={Colors.light.tint}/>
           ),
           headerLeft:() => (
            <TouchableOpacity onPress={OnCancel}>
            <ProfilePicture size={40} image= {user?.image}/>
            </TouchableOpacity>
           )
         }}
      />
    </TabFourStack.Navigator>
  );
}
