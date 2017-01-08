'use strict'

module.exports = {

    findMinMax: function (arr) {
	// TODO
    arr = arr.sort();
    var tempArray = [];
    for (var i= 0; i<arr.length; i++){
        tempArray.push(parseInt(arr[i]))
    }
    
    if(tempArray[0]== tempArray[tempArray.length - 1]){
        return [tempArray[0]];
    }
	return [tempArray[0], tempArray[tempArray.length - 1]];

    },

    fizzBuzz: function (n) {
        // TODO
        if ((n % 3 == 0) && (n % 5 == 0))
        return  "FizzBuzz";
        if(n % 3 == 0)
        return "Fizz";
        if (n % 5 == 0)
        return "Buzz";
        
    return n;
    },

    aritGeo: function (arr) {
        if(arr.length < 1) return 0;
        if(module.exports.isGeometric(arr)) 
            return "Geometric";
        if(module.exports.isArithmetic(arr)) 
            return "Arithmetic";
        return -1;
       
    },

    isGeometric: function(arr)
     {
        var isgeometric = false;
        var result =0;
        var temp = 0;
        for (var i =0; i < arr.length; i++){
            if (i< arr.length-1)
            {
                if(i==0)
                result =arr[i]/arr[i + 1]
                temp = arr[i]/arr[i + 1]
                if (temp == result){
                    isgeometric = true;
                }
                else{
                    isgeometric = false;
                    break;
                }
            }
        }
        return isgeometric;
    },
    isArithmetic: function(arr)
    {
        var isarithmetic = false;
        var result = 0;
        var temp = 0;
        for(var i = 0; i < arr.length; i++)
            {
                if (i< arr.length-1)
                {
                    if(i==0)
                    result = arr[i] - arr[i + 1]
                    temp = arr[i] - arr[i + 1]
                    if (temp == result){
                        isarithmetic = true;
                    }
                    else{
                        isarithmetic = false;
                        break;
                    }
                }
            }
            return isarithmetic;
    }
        
}
