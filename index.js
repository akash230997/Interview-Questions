const express = require('express');
const app = express();
const fs = require('fs');

const store = fs.readFileSync('data.json','utf-8');


app.get('/',(req,res)=>{
    res.send(store)
}).listen(5000);