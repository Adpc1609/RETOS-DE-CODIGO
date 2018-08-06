function compare(name1, name2,name3){
  let rs=null
  if(name1.length<name2.length)
  {
      rs=name1;
  }else
      rs=name2;
  if(rs.length>name3.length)
      rs=name3
  
  if(name1.length==name2.length||name1.length==name3.length)
      rs=name1;
  if(name2.length==name3.length)
      rs=name2;
 
      return rs;
}
console.log(compare('adriana', 'ana','oso'));