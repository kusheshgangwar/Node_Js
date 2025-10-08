// const fs = require('fs');
// const route=require('http');

// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.headers);
//     const url=req.url;
//         res.write('<html><head><body><input type="text"></input><br><br><input type="password"></input><br><br><button>Submit</button></body></head></html>');
//         res.end();
    
// });

// // server.listen(3000);
// module.exports=route;
// // const  route=require('.route');
// // const server=http.createServer(route);
// server.listen(3000);


const fs=require('fs');
// const http=require('http');
server=http=.createServer((req,res))

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    const url=req.url;
    if(url==='/'){
        res.write('<html><head><body><input type="text"></input><br><br><input type="password"></input><br><br><button>Submit</button></body></head></html>');
        return res.end();
    }
    if(url=='./message' && req.method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        });
    }
});

// module.exports{
//     handler.
// }
module.exports=server;

// const  route=require('.route');
// const server=http.createServer(route);
server.listen(3000);