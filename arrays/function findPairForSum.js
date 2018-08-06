function findPairForSum(array, number) {
    for (let i=0; i<array.length; i++){
      for (let j=i+1; j<array.length; j++){
        let suma= array[i]+ array[j];
        if( suma == number){
           return [array[i],array[j]];
          
        }
      } 
     }
   }