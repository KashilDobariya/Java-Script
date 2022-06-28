function add(num, callback) {
    return callback(num + 5, false);
  } //10,false
  function sub(num, callback) {
    return callback(num - 3, false);
  }
  function mul(num, callback) {
    return callback(num * 2, false);
  }
  function div(num, callback) {
    return callback(num / 2, false);
  }

let sum = new Promise((resolve,reject)=>{
  
})