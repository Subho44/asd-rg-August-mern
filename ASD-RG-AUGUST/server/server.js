const http = require('http');
 //personal details use variable

 var name = "subhojit santra";
 var name = "raj";
 let username = "virat kohli";
     username ="virat";
 const location = "howrah liluah";
 const phone = "6289619338";
//create server
const server = http.createServer((req,res)=>{
    res.write("welcome to  Asd & Ardent computech pvt ltd...\n");
    res.write(`Name:${name}\n`);
    res.write(`Username:${username}\n`);
    res.write(`Location:${location}\n`);
    res.write(`Phone:${phone}\n`);
    res.end();
});
const PORT = 5000;
server.listen(PORT,()=>{
    console.log("server is running port 5000");
});