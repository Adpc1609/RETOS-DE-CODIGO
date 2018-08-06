function transformFirstAndLast(paramArray) {
 let response = {};
response[paramArray[0]] = paramArray[paramArray.length-1];  
 return response;
}
console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));