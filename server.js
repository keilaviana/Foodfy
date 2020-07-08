const express = require("express")
const nunjucks = require("nunjucks")

const server = express() 

server.get("view engine", "html")
nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.send("enviando msg")
})

server.listen(5500, function(){
    console.log("servidor rodando")
})