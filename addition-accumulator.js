var add = function(arr) {

  var i      = 0,
      result = 0;

  while(i < arr.length) {

    result = result + arr[i]; //adds through array
    i++;
  }
  return result;
};

var myTotal = add([5,5,5]);

console.log(myTotal);
