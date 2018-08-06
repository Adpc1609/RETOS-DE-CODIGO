const objectPropertiesCounter = (obj) => {
  
    return Object.keys(obj).length;
  
  };
  console.log(objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' }));