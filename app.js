require("dotenv").load()
const express = require("express");
const app = express();

// REQUIRE MIDDLEWARE
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const morgan = require("morgan");
const userRoutes = require("./routes/users")
const session = require("cookie-session");
const knex = require("./db/knex")
const flash = require("connect-flash")

// SET UP MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.set("view engine", "jade");

app.use(session({secret: process.env.SECRET}));

app.use(flash());

app.use('/users',userRoutes)

// ROOT ROUTE
app.get('/',function(req,res){
  res.render('index')
})


// ERROR
app.get('*', function(req, res){
  res.render('404')
});


// listen
app.listen(3000, () => {
  console.log("server starting on port 3000")
})
