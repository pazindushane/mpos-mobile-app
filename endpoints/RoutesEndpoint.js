import axios from 'axios';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export var datasource3 = []
export var isLoading = true
export var val7 = ''
export var val8 = ''
export var val9 = ''
export var datasource4 = []
export var datasource11 = []
export var datasource12 = []

export var disablebtn = true;

export const getRoutes1 = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
        
        val7 = JSON.parse(value)
        console.log(val7.data);
        val8 = val7.data.companyId
        val9 = val7.data.jwt
        getRoutes()
        
      }
    } catch (error) {
      alert(error.message);
    }
  
  }
  
  
  export const getRoutes = () => {
    axios.get('http://192.168.8.187:8082/api/v1/routes', {
    params: { 
        companyId: val8,
        status: 'ACTIVATED',
        page: '0',
        size: '20', 
    },
      headers: {
         Accept : 'application/json',
        'Authorization': 'mPos '+val9, 
        'Content-type': 'application/json',
      }
    })
    .then((response) => 
   
  {
    datasource3 = response.data.data.list,
    datasource11 = response.data.data.list
    datasource12=[];
    for(var i = 0; i < datasource11.length; i++){
      datasource12.push(datasource11[i].routeId);
  }
  console.log(datasource12);

  }
                         
    )
   
      .catch(function (error) {
        
        console.log(error.message);
      });
  
  }

  export const getOutletbyRoutes = (item) => {
    axios.get('http://192.168.8.187:8082/api/v1/outlets', {
    params: { 
        companyId: val8,
        page: '0',
        size: '10',
        routeId: item
    },
      headers: {
         Accept : 'application/json',
        'Authorization': 'mPos '+val9, 
        'Content-type': 'application/json',
      }
    })
    .then((response) => 
    
    datasource4 = response.data.data.list,
    
    )
    
      .catch(function (error) {
       
        console.log(error.message);
      });
  
  }


  