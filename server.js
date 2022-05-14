require('dotenv').config()
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();


app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayout);
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.get("/explore",(req,res)=>{
    res.render('home');
})
app.get("/about",(req,res)=>{
    res.render('about');
})


app.listen(process.env.PORT|| "3000",(req,res) =>{
    console.log("server has started")
});