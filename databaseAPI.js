const API_URL = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.1.111:3000';
var isLoading= false;
export async function  getSchedule(){ fetch( `${API_URL}/getSchedule`, {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`, 
  },
})
.then(async res => { 
  try {
isLoading = true;
      const jsonRes = await res.json();
      console.log('HIII');
      if (res.status === 200) {
        
          console.log(jsonRes);
          return (jsonRes);
          isLoading=false;

      }
  } catch (err) {
      console.log(err);
  };

})
.catch(err => {
  console.log(err);
})};
