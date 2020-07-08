const express = require("express")
const nunjucks = require("nunjucks")

const server = express() 

server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("about")
})

server.listen(5500, function(){
    console.log("servidor rodando")
})