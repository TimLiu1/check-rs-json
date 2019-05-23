const request = require('supertest');
const checkJson = require('check-rs-json');
class Common {
    constructor(host, authorization) {
        this.host = host
        this.authorization = authorization
    }
    request(json) {
        let jsonNameArr = json.data
        describe(json.name, () => {
        let that = this
        for (let i = 0; i < jsonNameArr.length; i++) {
            let element = jsonNameArr[i]
            it(element.name, function (done) {
                request(that.host)
                    [element.request.method](element.request.url)
                    .set('authorization', that.authorization|'')
                    .expect(200)
                    .send(element.request.data)
                    .end(function (err, res) {
                        checkJson.check(element.response,res.body)
                        done()
                    });
            });
        }
    })
    }
}

module.exports = Common