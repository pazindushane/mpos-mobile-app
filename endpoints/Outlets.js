import axios from 'axios';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRefT = createNavigationContainerRef()

export var datasource = []
export var isLoading = true
export var val = ''
export var val2 = ''
export var val3 = ''




export function navigate(FindOutletScreen1) {
  console.log("abcd")
  return navigationRefT.current?.navigate('FindOutletScreen1');
}

export const getData1 = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if (value !== null) {
      
      val = JSON.parse(value)
      console.log(val.data);
      val2 = val.data.companyId
      val3 = val.data.jwt
      getoutlets()
     
    }
  } catch (error) {
    alert(error.message);
  }

}

export const getout = () => {
  console.log("getout");
 
}

export const getoutlets = () => {
  axios.get('http://192.168.8.187:8082/api/v1/outlets', {
  params: { 
      companyId: val2,
      page: '0',
      size: '20',
      status: 'ACTIVATED', 
  },
    headers: {
       Accept : 'application/json',
      'Authorization': 'mPos '+val3, 
      'Content-type': 'application/json',
    }
  })
  .then((response) => 
  
  datasource = response.data.data.list,
  // console.log(response.data.data.list),
  navigationRefT.current?.navigate('FindOutletScreen1')
  )
  
    .catch(function (error) {
    
      console.log(error.message);
    });

}


export const getoutletsByroute = () => {
  axios.get('http://192.168.8.187:8082/api/v1/outlets', {
  params: { 
      companyId: val2,
      page: '0',
      size: '20',
      routeId: 'ACTIVATED', 
      value: ''
  },
    headers: {
       Accept : 'application/json',
      'Authorization': 'mPos '+val3, 
      'Content-type': 'application/json',
    }
  })
  .then((response) => 
  
  datasource = response.data.data.list,
  // console.log(response.data.data.list),
  navigationRefT.current?.navigate('FindOutletScreen1')
  )
  
    .catch(function (error) {
    
      console.log(error.message);
    });

}