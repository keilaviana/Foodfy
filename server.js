const express = require("express")

const server = express() 

server.get("/", function(req, res){
    return res.send("enviando msg")
})

server.listen(5500, function(){
    console.log("servidor rodando")
})