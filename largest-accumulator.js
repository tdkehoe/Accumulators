var largest = function(arr) {

  var i      = 0,
      result = arr[0];

  while(i < arr.length) {

    if (result < arr[i]) {
        result = arr[i];
      }

    i++;
  }
  return result;
};

var myTotal = largest([7,-3,9]);

console.log(myTotal);
