import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export var datasource2 = []
export var val4 = ''
export var val5 = ''
export var val6 = ''


export const getCustomers = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {

        val4 = JSON.parse(value)
        val5 = val4.data.companyId
        val6 = val4.data.jwt
        getAllCust()
        
      }
    } catch (error) {
      alert(error.message);
    }
  
  }

  export const getAllCust = () => {
    axios.get('http://192.168.8.187:8082/api/v1/customers', {
    params: { 
        companyId: val5,
        page: '0',
        size: '20',
        status: 'ACTIVATED', 
    },
      headers: {
         Accept : 'application/json',
        'Authorization': 'mPos '+val6, 
        'Content-type': 'application/json',
      }
    })
    .then((response) => 
    
    datasource2 = response.data.data.list,
   
    )
   
      .catch(function (error) {
        
        console.log(error.message);
      });
  
  }
  