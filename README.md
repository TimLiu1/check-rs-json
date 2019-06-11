# BASE ON CONFIG  TEST PLUGIN 


 let data = { code: 200, data: [{ name: "tim", age: 15 }] }
 let json = {
     "code": 200,
     "data": {
         "type": "array", "children": [{
             "name": { "type": "string", "value": "tim" },
             "age": { "type": "number", "value": 15 }
         }]
     }
 }