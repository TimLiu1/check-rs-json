const request = require("supertest");
const checkJson = require("./typecheck");
class Common {
  constructor(host, objects) {
    this.host = host;
    this.objects = objects;
    this.keys = Object.keys(objects);
  }

  request(json) {
    console.log("this.keys", this.keys);
    let jsonNameArr = json.data;
    describe(json.name, () => {
      let that = this;
      for (let i = 0; i < jsonNameArr.length; i++) {
        let element = jsonNameArr[i];
        it(element.name, function(done) {
          request(that.host)
            [element.request.method](element.request.url)
            .set(
              that.keys[0] || "jsoncheck",
              that.objects[that.keys[0]] || "jsoncheck"
            )
            .set(
              that.keys[1] || "jsoncheck",
              that.objects[that.keys[1]] || "jsoncheck"
            )
            .set(
              that.keys[2] || "jsoncheck",
              that.objects[that.keys[2]] || "jsoncheck"
            )
            .set(
              that.keys[3] || "jsoncheck",
              that.objects[that.keys[3]] || "jsoncheck"
            )
            .set(
              that.keys[4] || "jsoncheck",
              that.objects[that.keys[4]] || "jsoncheck"
            )
            .set(
              that.keys[5] || "jsoncheck",
              that.objects[that.keys[5]] || "jsoncheck"
            )
            .set(
              that.keys[6] || "jsoncheck",
              that.objects[that.keys[6]] || "jsoncheck"
            )
            .set(
              that.keys[7] || "jsoncheck",
              that.objects[that.keys[7]] || "jsoncheck"
            )
            .set(
              that.keys[8] || "jsoncheck",
              that.objects[that.keys[8]] || "jsoncheck"
            )
            .set(
              that.keys[9] || "jsoncheck",
              that.objects[that.keys[9]] || "jsoncheck"
            )
            .set(
              that.keys[10] || "jsoncheck",
              that.objects[that.keys[10]] || "jsoncheck"
            )
            .set(
              that.keys[11] || "jsoncheck",
              that.objects[that.keys[11]] || "jsoncheck"
            )
            .set(
              that.keys[12] || "jsoncheck",
              that.objects[that.keys[12]] || "jsoncheck"
            )
            .set(
              that.keys[13] || "jsoncheck",
              that.objects[that.keys[13]] || "jsoncheck"
            )
            .set(
              that.keys[14] || "jsoncheck",
              that.objects[that.keys[14]] || "jsoncheck"
            )
            .set(
              that.keys[15] || "jsoncheck",
              that.objects[that.keys[15]] || "jsoncheck"
            )
            .set(
              that.keys[16] || "jsoncheck",
              that.objects[that.keys[16]] || "jsoncheck"
            )
            .set(
              that.keys[17] || "jsoncheck",
              that.objects[that.keys[17]] || "jsoncheck"
            )
            .set(
              that.keys[18] || "jsoncheck",
              that.objects[that.keys[18]] || "jsoncheck"
            )
            .set(
              that.keys[19] || "jsoncheck",
              that.objects[that.keys[19]] || "jsoncheck"
            )
            .set(
              that.keys[20] || "jsoncheck",
              that.objects[that.keys[20]] || "jsoncheck"
            )
            .expect(200)
            .send(element.request.data)
            .end(function(err, res) {
              checkJson.check(element.response, res.body);
              done();
            });
        });
      }
    });
  }
}

module.exports = Common;
