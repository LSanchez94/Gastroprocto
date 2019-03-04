const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

var app = express();

//dont remember what this method does
app.use(express.static(__dirname + '/../public'));

//Change the route of the views of Express Default
app.set('views', __dirname + '/../views');

//Set the route of the partials views
hbs.registerPartials(__dirname + '/../views/partials');

//Set engine for rendering views
app.set('view engine', 'hbs');

app.listen(port, () =>{
    console.log(`server running ${port}`)
}); 

app.get("/", (req,res) =>{
    res.render("index.hbs");
});

app.get('/quienessomos', (req,res) =>{
    res.render("quienessomos.hbs");
});

app.get('/servicios', (req,res) =>{
    res.render("servicios2.hbs");
});

app.get('/enfermedades', (req,res) =>{
    res.render("enfermedades.hbs");
});

app.get('/promociones', (req,res) =>{
    res.render("promociones.hbs");
});

app.get('/contacto', (req,res) =>{
    res.render("contacto.hbs");
});