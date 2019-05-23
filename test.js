let Request = require('./lib/request');

let data =  require("./API/user/register.json"); 
let request = new Request('localhost:8002','121223')
request.request(data)

