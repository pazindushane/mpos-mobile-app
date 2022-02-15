import axios from 'axios';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export var val13 = ''
export var val14 = ''
export var val15 = ''
export var datasource15 = []


export const makeTrips = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
        
        val13 = JSON.parse(value)
        console.log(val13.data);
        val14 = val13.data.companyId
        val15 = val13.data.jwt
        makeTrip()
        
      }
    } catch (error) {
      alert(error.message);
    }
  
  }

  export const makeTrip = (item) => {
    axios.post('http://192.168.8.187:8082/api/v1/trips', {

      headers: {
         Accept : 'application/json',
        'Authorization': 'mPos '+val15, 
        'Content-type': 'application/json',
      }
    })
    .then((response) => 
    
    datasource15 = response.data,
    
    )
    
      .catch(function (error) {
       
        console.log(error.message);
      });
  
  }