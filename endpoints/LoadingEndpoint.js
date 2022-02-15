import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export var datasourceL = []
export var datasourceM = []
export var valL = ''
export var valL2 = ''
export var valL3 = ''

export const getLoadings1 = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
       
        valL = JSON.parse(value)
        console.log(valL.data);
        valL2 = valL.data.companyId
        valL3 = valL.data.jwt
        getLoadings()
        
      }
    } catch (error) {
      alert(error.message);
    }
  
  }

  export const getLoadings = () => {
    axios.get('http://192.168.8.187:8082/api/v1/loadings', {
    params: { 
        companyId: valL2,
        page: '0',
        size: '10',
        status: 'ACTIVATED', 
    },
      headers: {
         Accept : 'application/json',
        'Authorization': 'mPos '+valL3, 
        'Content-type': 'application/json',
      }
    })
    .then((response) => 
    
   { datasourceL = response.data.data.list,
    datasourceM = response.data.data.list[0].productList.itemLists}
    )
   
      .catch(function (error) {
       
        console.log(error.message);
      });
  
  }