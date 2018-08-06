function convertObjectToList(obj) {
    return Object.entries(obj);
  }

  obj = {
    name: 'Holly',
    edad: 35,
    papel: 'productor'
  }

  console.log(convertObjectToList(obj));