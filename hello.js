const ht=require('http');

const server=ht.createServer((req,res)=>{
    const ur=req.url;
if(ur==='/home')
{
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('Welcome home');
    res.end();
}
else if(ur==='/about')
{
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('Welcome to about u page');
    res.end();
}
else if(ur==='/node')

{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.write('Welcome to node js project');
     res.end();

}
else{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('404 page not found');

}
})
const port=4000;
server.listen(port);

