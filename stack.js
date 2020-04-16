function Stack() {
  var items = [];
  this.push = function () {
    items = items.concat(Array.prototype.slice.call(arguments));
  }
  this.pop = function () {
    return items.pop();
  }
  this.peek = function () {
    return items[items.length - 1];
  }
  this.size = function () {
    return items.length;
  }
  this.clear = function () {
    items = [];
  }
  this.isEmpty = function () {
    return items.length === 0;
  }
  this.toString = function () {
    return items.toString();
  }
}

//binary convert
function convertBinary2(number) {
  var stack = new Stack();
  var remainder;
  while (number > 0) {
    remainder = number % 2;
    stack.push(remainder);
    number = ~~(number / 2);
  }
  var binaryStr = '';
  while (!stack.isEmpty()) {
    binaryStr += stack.pop();
  }
  return binaryStr;
}

var digits = '0123456789ABCDEF'
//binary convert
function convertBinary(number, base) {
  var stack = new Stack();
  var remainder;
  while (number > 0) {
    remainder = number % base;
    stack.push(remainder);
    number = ~~(number / base);
  }
  var binaryStr = '';
  while (!stack.isEmpty()) {
    binaryStr += digits[stack.pop()];
  }
  return binaryStr;
}