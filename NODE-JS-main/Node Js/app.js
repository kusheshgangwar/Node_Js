// console.log("Hello");

// console.log(5+4);

const fs=require('fs');

// fs.writeFileSync('kk.txt','Hello KK');

const http=require('http');

const server=http.createServer((req,res)=>{
   // console.log(req.url,req.method,req.headers);
   const url=req.url;
   const method=req.method;
   if(url=='/'){
      res.setHeader('content-type','text/html');
      res.write('<html><head><title>SectionE</title></head><body><form action="/message" method="POST"><input type="text" name="message"/><input type="submit"/></form></body></html>')
     return res.end();
   }
   if(url=="/message" && method=="POST"){
      const body=[];
      req.on('data',(chunk)=>{
         console.log(chunk);
         body.push(chunk);
      });
      req.on('end',()=>{
      const parsedBody=Buffer.concat(body).toString();
      console.log(parsedBody);
      const  message=parsedBody.split('=')[1];
      fs.writeFileSync('message.txt',message);
      res.statusCode=302;
      res.setHeader('Location','/');
      return res.end();
      })

   }
   // res.setHeader('content-type','text/html');
   // res.write('<html><head><title>NodeJs Section E</title></head><body><h1>Hii From Section E Node JS</h1></body></html>');
   // res.end();
  
});

server.listen(3000);
 
//  process.exit();