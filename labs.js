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
        // TODO
	return 0;
    }
}
