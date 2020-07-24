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

server.get("/recipes/:index", function(req, res){
    const receitasIndex = req.params.index
    return res.render('preparo', {item: receitas[receitasIndex]})
})

const PORT = process.env.PORT || 5500

server.listen(PORT, function(){
    console.log("servidor rodando")
})