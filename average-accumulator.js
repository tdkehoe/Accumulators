var sum = function(arr) {

  var i      = 0,
      result = 0;

  while(i < arr.length) {

    result = result + arr[i]; //adds through array
    i++;
  }
  return result;
};

var myTotal = sum([8,5,3]);

var myAverage = (myTotal / arr.length);

console.log(myAverage);
