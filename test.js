let name = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (name) 
    {
      setTimeout(() => 
      {
        resolve(work());
      }, time);
    } else {
      reject(console.log("reject"));
    }
  });
};

order(0000,()=>console.log("1"))

.then(()=>{
  return order(0000,()=>console.log("2"))
})

.then(()=>{
  return order(5000, ()=>console.log("3"))
})

.then(()=>{
  return order(5000, ()=>console.log("4"))
})

.then(()=>{
  return order(0000, ()=>console.log("5"))
})

.then(()=>{
  return order(0000, ()=>console.log("6"))
})

.then(()=>{
  return order(0000, ()=>console.log("7"))
})