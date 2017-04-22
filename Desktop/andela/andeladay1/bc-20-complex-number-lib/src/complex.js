// Complex numbers 
var Complex = function(real, im) {
  this.r = real;
  this.i = im;
}
// Complex multiplication
// (a, b)(c, d) = (ac - bd), (ad + bc) 
Complex.prototype.mult = function(complex) {
  var a = this.r;
  var b = this.i;
  var c;
  var d;
  if(arguments.length === 1 && typeof arguments[0] === "number") {
    c = arguments[0];
    d = 0;
  } else if(arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number") {
    c = arguments[0];
    d = arguments[1];
  } else {
    c = complex.r;
    d = complex.i;
  }
  var real = a * c - b * d;
  var im = a * d + b * c;
  return new Complex(real, im);
};

// Complex division
// (a, b)/(c, d) = ((ac+bd)/(c^2+d^2), (bc-ad)/(c^2+d^2))
Complex.prototype.div = function(complex) {
  var a = this.r;
  var b = this.i;
  var c = complex.r;
  var d = complex.i;
  var real = (a*c+b*d)/(c*c+d*d);
  var im = (b*c-a*d)/(c*c+d*d)
  return new Complex(real, im);
};

Complex.prototype.add = function(complex) {
  var c;
  var d;
  if(arguments.length === 1 && typeof arguments[0] === "number") {
    c = arguments[0];
    d = 0;
  } else if(arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number") {
    c = arguments[0];
    d = arguments[1];
  } else {
    c = complex.r;
    d = complex.i;
  }
  return new Complex(this.r + c, this.i + d);
};

Complex.prototype.sub = function(complex) {
  return new Complex(this.r - complex.r, this.i - complex.i);
};

module.exports = Complex;
