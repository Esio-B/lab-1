'use strict'

module.exports = {
    
    reverseString: function(x)
    
    {
       
      if(x=='') {
        return null;
    }
    else if(x==NaN){
        return true;

    }
    else{ var newStr = '';
        var countLen = x.length - 1;

        for(var i=countLen;i>=0;i--) {
            newStr +=  x[i];        
        }
        if(newStr==x) {
            return true;
        }else{
            return newStr;
        }
    }
       

    }





}




 


