let Request = require('../lib/request');

let data =  require("./twoObject.json"); 
let request = new Request('localhost:3008',{"authentication":"12qd"})
request.request(data)
