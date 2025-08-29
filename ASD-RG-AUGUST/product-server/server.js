const http = require("http"); // http module import
const url = require("url");
const products = [
    { id: 1, name: "Laptop", price: 67000 },
    { id: 2, name: "Mobile", price: 670000 },
    { id: 3, name: "Watch", price: 6700 },
    { id: 4, name: "Tab", price: 670 },

];

//create server

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':"application/json"});
    //parse url
    const x = url.parse(req.url,true).query;
    //filter product
    if(x.name) {
        const searchname = x.name.toLowerCase();
        const result = products.filter(p=>p.name.toLowerCase().includes(searchname));
         res.end(JSON.stringify(result));
    }
    else {
         res.end(JSON.stringify(products));
    }
   
});
const port = 6700;
server.listen(port, () => {
    console.log("server is running port 6700");
});