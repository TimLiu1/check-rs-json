let Request = require('../lib/request');

let data =  require("./oneSting.json"); 
let request = new Request('localhost:3008','121223')
request.request(data)
