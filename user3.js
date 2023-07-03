const posts = [{ title: 'POST1' }];
let lastActivityTime = null;
async function start(post){
    const cr=new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    });
    const up= new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
    const de=new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
    const cre=await cr;
    console.log(`${cre}  createddddd`);
    const upd=await up;
    console.log(`${upd}  updatedddddddd`);
    const dele=await de;
    console.log(`${dele}  deletedddd`);

}


start({title:'post2'}).then((oo)=>{
    console.log(oo);
}).catch((error)=>{
    console.log(error);
});