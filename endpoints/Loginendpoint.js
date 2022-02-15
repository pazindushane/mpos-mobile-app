import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef()

import SignInScreen from '../screens/SiginScreen/SignInScreen';
import HomeScreen from '../screens/HomeScreenRoutes/HomeScreen';

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
    console.log(value)
  } catch (error) {
    alert(error.message);
  }
}

export function navigate(HomeScreen) {
  return navigationRef.current?.navigate('HomeScreen');
}

export const loginuser = (emails, passwords) => {
  axios.get('http://192.168.8.187:7070/authenticate', {
    headers: {
      email: emails,
      password: passwords
    }
  })
  .then((response) => {
   
    if(response.data.code == 200){
     
      storeData(JSON.stringify(response.data));
      
      navigate()
     
    }else{
      console.log("error");
    }
    
    })
    .catch(function (error) {
      
      console.log(error.message);
    });

}



export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if (value !== null) {
      
      console.log(JSON.parse(value));
      
    }
  } catch (error) {
    alert(error.message);
  }

}

