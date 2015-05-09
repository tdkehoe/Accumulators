var subtract = function(arr) {

  var i      = 0,
      result = 0;

  while(i < arr.length) {

    result = result - arr[i]; //subtracts through the array
    i++;
  }
  return result;
};

var myTotal = subtract([5,5,5]);
console.log(myTotal);
