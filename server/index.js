const http = require('http');
const url = require('url');
http.createServer(app).listen(3008, () => {
    console.log('server is listen 3008')
})

function app(req, res) {
    let model = { test: "ok" }
    let type = url.parse(req.url, true).query.type;
    switch (type) {
        case 'one-string': 
            model = {
                code: 200,
                name: "jsoncheck"}
                 break;
        case 'one-number': 
            model = {
                code: 200,
                age: 20
        }
         break;
        case 'two-object': 
            model = {
                code: 200,
                info: { name: "jsoncheck", age: 20 }
        } 
        break;
        case 'array': 
            model = {
                code: 200,
                info: [{ name: "jsoncheck", age: 20 },{ name: "tim", age: 21 }]
            
        } 
        break;
        default: {
            model = { test: "ok" }
        }
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(Buffer.from(JSON.stringify(model)))
}