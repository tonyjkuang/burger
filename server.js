// dependenices
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("express-hbs");
const burgercontroller = require("./controllers/burgers_controller.js")
// CONFIGURE EXPRESS

// Tells node that we are creating an "express" server
const app = express();
app.set('view engine', 'hbs')
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('hbs', hbs.express4({  
  defaultLayout: __dirname + '/views/layouts/main.handlebars',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));
app.set('views',path.join(__dirname,'/views'));

app.use('/',burgercontroller)
// ROUTER

//require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});