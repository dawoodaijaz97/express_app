console.log("application has started");

var express = require("express");
var app = express();
var hbs = require("hbs");
var port = process.env.PORT || 3000;
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")
hbs.registerHelper("get_year", () => {
    return new Date().getFullYear();
});

app.listen(port, function() {
    console.log("app has started on port" + port);
});

app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res) {
    res.render("home", {
        heading: "This is home page"
    })
});

app.get("/about", function(req, res) {
    res.render("about", {
        heading: "About"
    });
});