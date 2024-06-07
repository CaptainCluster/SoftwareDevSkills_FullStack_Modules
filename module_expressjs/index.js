const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const members = require("./Members")

const app = express();

const PORT_NUMBER = process.env.PORT || 5000;

// Initialize middleware
//app.use(logger);

// Handlebars middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({  extended: false }));

// Homepage router
app.get("/", (req, res) => res.render("index", {
    title: "Member App",
    members
}));


// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(PORT_NUMBER, () => console.log(`Listening on port ${PORT_NUMBER}`));