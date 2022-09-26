let express = require("express")

let PORT = 8000;

let app = express();

/**
 * 
 */
app.get("/hi", function(req, res){
    // execute this logic when hi comes in
    console.log("GET /hi");

    //res.json - sends json obj back
    let blob = {};
    blob.message = "Hi";
    blob.time = new Date();
    res.json(blob);
});

app.get("/hello", function(req, res){
    console.log("GET /hello")

    let string = "<html><body>Hello there!<br>Hope you are having a swell day</body></html>"

    res.send(string);

})

app.get("/sup", function(req, res){
    console.log("GET /sup")
    res.sendStatus(204);
})

app.get("/hey", function(req, res){  
    console.log("GET /hey")
    res.status(400).send("hey is for horses")

})

app.listen(PORT,function(){
    console.log("Application started listening on port", PORT)
})

