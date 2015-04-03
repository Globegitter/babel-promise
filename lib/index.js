// lib/index.js
console.log('' + this);

var promise = new Promise(function (resolve, reject) {
  resolve(0);
});
