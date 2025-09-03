const express = require('express');
const app = express();
const port = 6700;

const players = [
    {id:1, name:"virat kohli", age:36, location:"delhi"},
    {id:2, name:"rohit", age:37, location:"mumbai"},
    {id:3, name:"msd", age:42, location:"ranchi"},
    {id:4, name:"virat kohli", age:36, location:"delhi"},
];
app.use(express.json());

//default page
app.get('/',(req,res)=>{
    res.json(players);
});
//data insert
app.post('/add',(req,res)=>{
    const {name,age,location} = req.body;
    const newdata = {id:players.length +1, name,age,location};
    players.push(newdata);
    res.json(newdata);
});

app.get('/about',(req,res)=>{
    res.json({message:"this is about page"});
});
app.get('/players',(req,res)=>{
    res.json(players);
});
app.listen(port,()=>{
    console.log("server is running port 6700");
})