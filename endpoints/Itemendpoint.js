import axios from 'axios';

export const getitems = (companyId, token) => {
    axios.get('http://192.168.8.187:8082/api/v1/items', {
    params: { 
        companyId: companyId,
        page: '0',
        size: '10',
        status: 'ACTIVATED', 
        batchStatus: true
    },
      headers: {
         Accept : 'application/json',
        'Authorization': 'mPos '+token, 
        'Content-type': 'application/json',
      }
    })
    .then((response) => 
    
    datasource = response.data.data.list,
    
    )
    
      .catch(function (error) {
        
        console.log(error.message);
      });
  
  }
  