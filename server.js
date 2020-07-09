const express = require("express")
const nunjucks = require("nunjucks")

const receitas = require('./data')

const server = express() 

server.use(express.static('public'))

server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("index", {items: receitas})
})

server.get("/about", function(req, res){
    return res.render('about')
})

server.get("/recipes", function(req, res){
    return res.render("recipes", {items: receitas})
})

server.listen(5500, function(){
    console.log("servidor rodando")
})