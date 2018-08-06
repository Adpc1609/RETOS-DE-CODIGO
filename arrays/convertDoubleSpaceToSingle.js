function convertDoubleSpaceToSingle(){
    let cadena = "string  with  double  spaces";
    let arregloDeSubCadenas = cadena.split('  ');
       subcadenas = arregloDeSubCadenas.join(' ');    
}
console.log(subcadenas);