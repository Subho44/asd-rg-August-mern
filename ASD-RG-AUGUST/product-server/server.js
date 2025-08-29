const http = require("http"); // http module import

const fs = require('fs');
const path = require('path');
const querystring = require("querystring");


const products = [];
console.log(products);

//how to access static file in server
function servefile(res,filepath,contentType) {
    fs.readFile(filepath,(err,data)=>{
        if(err){
           res.writeHead(404,{'Content-Type':"text/plain"});
           res.end("404 not found");
        } else {
             res.writeHead(200,{'Content-Type':contentType});
             res.end(data);
        }
    })
}
//create server

const server = http.createServer((req, res) => {
    //show form
   if(req.method === "GET" && req.url ==="/") {
    servefile(res,path.join(__dirname,"public","index.html"),"text/html");

   }
   //insert form
    else if (req.method === "POST" && req.url ==="/add"){
        let body = "";
        req.on("data",chunk =>{body += chunk;});
        req.on("end",()=>{
            const data = querystring.parse(body);
            products.push({id:products.length +1, name:data.name,price:data.price});
            let html = "<h2>all product</h2><ul>";
            products.forEach(x => {
                html += `<li>${x.id} - ${x.name}-${x.price}</li>`
            });
            html += "</ul><a href='/'>AddMore</a>";
            res.writeHead(200,{'Content-Type':"text/html"});
            res.end(html);
        })

    }

  
   
});
const port = 6700;
server.listen(port, () => {
    console.log("server is running port 6700");

});