// let i;
// let display;
// for(i=1;i<=3;i++)
// {
//     console.log(i,display)
// }

// var i = 'Out of scope ';
// if(true)
// {
//     var i = 'Block scope  '
//     console.log('block scope i is :',i)
// }
// console.log('function scope i is : ',i)

// const i=10
// i=100
// {
//     console.log(i)
// }

// const i =10
// if(true)
// {
//     const i=20
//     console.log('Block scope is :',i)
// }
// console.log('function scope i is : ',i)

// const i='Out of scope '
// if(true)
// {
//     const i='Blank of scope'
//     console.log('Block scope is :',i)
// }
// console.log('Function scope is :',i)

// let num = 100n+200n
// console.log(typeof num);

let b = 100
const a = b
const c = b
{
    console.log(a);
}
console.log(c);