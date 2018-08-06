function getLongestOfThreeWords(word1, word2, word3) {
    let rs=null
    if(word1.length>word2.length)
    {
        rs=word1;
    }else
        rs=word2;
    if(rs.length<word3.length)
        rs=word3;
    
    if(word1.length==word2.length||word1.length==word3.length)
        rs=word1;
    if(word2.length==word3.length)
        rs=word2;
   
        return rs;

  }
  console.log(getLongestOfThreeWords('adriana','adrianp','ana'));