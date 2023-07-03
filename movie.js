console.log("first ticket");
console.log("second Ticket");
async function demo()
{
const newmovie=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket3');
    },3000);});
const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
const addbutter=new Promise((resolve,reject)=>resolve('butter'));
const getcolddrink=new Promise((resolve,reject)=>resolve('colddrink'));

let ticket=await newmovie;
console.log(`i have a ${ticket}`);
console.log(`but i am hungry`);
let popcorn=await getpopcorn;
console.log(`Here is your${popcorn}`);
console.log(`I need some butter`);
let butter=await addbutter;
console.log(`Here is popcorn with ${butter}`);
console.log(`I need colddrink toooo`);
let colddrink=await getcolddrink;
console.log(`Hey take your ${colddrink}`);

}
console.log("foutrh ticket");
console.log("fifth ticket");
demo();