let Request = require("../lib/request");

let data = require("./oneSting.json");
let request = new Request("localhost:3008", { authentication: "12qd" });
request.request(data);
