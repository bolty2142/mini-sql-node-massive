var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = module.exports = express();
var massive = require("massive");
var connectionString = "postgres://postgres:@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString});
var controller = require('./controller.js');




app.set("db", massiveInstance);
var db = app.get("db");
app.use(bodyParser.json());
app.use(cors());

controller.getPlanes();
// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });

// db.get_planes((err, planes) =>{
//   console.log(planes)
// });

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")	
})

