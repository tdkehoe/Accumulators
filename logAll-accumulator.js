var logAll = function(arr) {

  var i      = 1,
      result = arr[0].toString();

  while(i < arr.length) {
    string = arr[i].toString();
    result = result + ' ' + string;
    i++;
  }
  return result;
};

var string = logAll([8,3,5]);

console.log(string);
