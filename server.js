const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const https = require("https");

const app =express();
app.use(cors());


app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));



const mainRouter = require("./route/main");
app.use("",mainRouter)

if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(process.env.PORT||"5000", function() {

  console.log("ser working");
});
