function removeStringValuesLongerThan(num, obj) {
  let myObjectinarray = Object.values(obj);
  let myKeyinarray = Object.keys(obj);
let response = new Object();
  for(let i = 0; i<myObjectinarray.length; i++){
    if(typeof myObjectinarray[i] === 'string'){
        if(myObjectinarray[i].length<num){
            response[myKeyinarray[i]]=myObjectinarray[i]
        }
    }else{
        response[myKeyinarray[i]]=myObjectinarray[i]
    }
  }
  return response;
 }
 var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  
  console.log(removeStringValuesLongerThan(6, obj)); // { age: 20, location: 'Texas' }