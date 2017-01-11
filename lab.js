'use strict'

 module.exports = {
 	
 	words: function (x){
 		var newStr = x.split(' ');
    var jsonData = "";
    for(var i=0;i<newStr.length;i++) {        
        var strCount = 0;
        for(var a=0;a<newStr.length;a++) {            
            if(newStr[i]==newStr[a]) {
                strCount +=1;
            }
        }
        jsonData += "\""+newStr[i]+"\":\""+strCount+"\"";    
    }
    return "{"+jsonData+"}";
 	}
 }