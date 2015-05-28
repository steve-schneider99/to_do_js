var countUp = function(number, divisor) {
  var list = 1
  var numbers = []
  for (var i = 0; i < Math.floor(number/divisor); i++) {
    numbers.push(divisor*(i+1))
  }
 return numbers
};
