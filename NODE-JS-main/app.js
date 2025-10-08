const http=require('http');

const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    const url=req.url;
    res.write('<html><head><body><input type="text"></input><br><br><input type="password"></input><br><br><button>Submit</button></body></head></html>');
    res.end();
});

const route=require('./route');
module.exports={
    handler:server,
    someText:'Some hard coded text'
};
server.listen(3000);