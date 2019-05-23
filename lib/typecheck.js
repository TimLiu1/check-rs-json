const chai = require('chai'),
    expect = chai.expect;



// let data = { code: 200, data: [{ name: "tim", age: 15 }] }
// let json = {
//     "code": 200,
//     "data": {
//         "type": "array", "children": [{
//             "name": { "type": "string", "value": "tim" },
//             "age": { "type": "number", "value": 15 }
//         }]
//     }
// }
// check(json, data)
function check(json, data) {
    let keys = Object.keys(json);
    keys.forEach((key) => {
        expect(data).to.have.property(key)
        if (typeof json[key] !== 'object') {
            expect(data[key]).to.equal(json[key]);
        } else if (typeof json[key].type == 'array') {
            if (json[key].children) {
                expect(data[key]).to.be.a(json[key].type);
                json[key].children.forEach((child, index) => {
                    check(child, data[key][index])
                })
            }
        } else {
            if (json[key].type)
                expect(data[key]).to.be.a(json[key].type);
            if (json[key].value)
                expect(data[key]).to.equal(json[key].value);
            if (json[key].children)
                check(json[key].children, data[key])
        }
    })
}

exports.check = check