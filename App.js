import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SplashScreen from './src/screens/Splashscreen'
import WellcomeScreen from './src/screens/Wellcome'
import LoginScreen from './src/screens/Login'
import RegisterScreen from './src/screens/Register'
import Dashboard from './src/screens/Dashboard'
import Searchbar from './src/screens/Searchbar'
import lainnya from './src/screens/lainnya'
import Tulismessanger from './src/screens/Tulismessanger'
import Messanger from './src/screens/Messanger'
import Sukses from './src/screens/Sukses'
import Notifikasi from './src/screens/Notifikasi'
import Account from './src/screens/Account'
import Editprofile from './src/screens/Editprofile'
import Detailpage from './src/screens/Detailpage'
import Submit from './src/screens/Detailpage'
import Tambahhewan from './src/screens/Tambahhewan';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Dashboard'
    screenOptions={{
      tabBarActiveTintColor: 'yellow',
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle:{
        backgroundColor: '#fff'
      },
    }}
    >
    <Tab.Screen
    name="Dashboard"
    component={Dashboard}
    options={{
      tabBarLabel: 'Dashboard',
      tabBarIcon:({ color, size}) => (
        <Icon name='home' color={color} size={size}/>
      ),
    }}
    />
    <Tab.Screen
    name='Searchbar'
    component={Searchbar}
    options={{
      tabBarLabel: 'Searchbar',
      tabBarIcon: ({ color, size}) => (
        <Icon name='search' color={color} size={size}/>
      ),
    }}
    />
    <Tab.Screen
    name='Messanger'
    component={Messanger}
    options={{
      tabBarLabel: 'Messanger',
      tabBarIcon: ({ color, size}) => (
        <Icon name='message' color={color} size={size}/>
      ),
    }}
    />
     <Tab.Screen
    name='Notifikasi'
    component={Notifikasi}
    options={{
      tabBarLabel: 'Notifikasi',
      tabBarIcon: ({ color, size}) => (
        <Icon name='notifications' color={color} size={size}/>
      ),
    }}
    />
    <Tab.Screen
    name='Account'
    component={Account}
    options={{
      tabBarLabel: 'Account',
      tabBarIcon: ({ color, size}) => (
        <Icon name='account-circle' color={color} size={size}/>
      ),
    }}
    />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='WellcomeScreen' component={WellcomeScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
        <Stack.Screen name='Dashboard' component={RootHome}/>
        <Stack.Screen name='Tulismessanger' component={Tulismessanger}/>
        <Stack.Screen name='lainnyascreen' component={lainnya}/>
        <Stack.Screen name='Sukses' component={Sukses}/>
        <Stack.Screen name='Editprofile' component={Editprofile}/>
        <Stack.Screen name='Detailpage' component={Detailpage}/>
        <Stack.Screen name='Submit' component={Submit}/>
        <Stack.Screen name='Tambahhewan' component={Tambahhewan}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App