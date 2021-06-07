const router = require("express").Router();
const bodyParser = require("body-parser");
const https = require("https");

router.use(bodyParser.urlencoded({
  extended: true
}));


// router.route("/").get( function(req, res) {
//   res.send("hello")
// });

router.route("/total").get(function(req, res) {

  https.get('https://api.rootnet.in/covid19-in/stats/latest', function(response) {
    var stockData = "";
    response.on("data", function(data) {
      stockData += data;
    });

    response.on("end", function() {
      stockData = JSON.parse(stockData);
      //res.json(stockData.data.summary.confirmedCasesIndian);
      const dailyData = [{
        confirmed: stockData.data.summary.confirmedCasesIndian,
        recovered: stockData.data.summary.discharged,
        death: stockData.data.summary.deaths

      }];
      res.json(dailyData)

    })
  });
});
router.route("/daily").get(function(req, res) {

  https.get('https://api.rootnet.in/covid19-in/stats/history', function(response) {
    var stockData = "";
    response.on("data", function(data) {
      stockData += data;
    });

    response.on("end", function() {
      stockData = JSON.parse(stockData);

      var today = new Date();
      var date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();


      let index = 0;
      stockData.data.forEach((item, i) => {
        if (item.day == "2021-06-06") {
          index = i;
        }
      });

      const dateData = [{
        dateconfirmed: stockData.data[index].summary.confirmedCasesIndian - stockData.data[index - 1].summary.confirmedCasesIndian,
        daterecovered: stockData.data[index].summary.discharged - stockData.data[index - 1].summary.discharged,
        datedeath: stockData.data[index].summary.deaths - stockData.data[index - 1].summary.deaths

      }]
      res.json(dateData)
    })
  });
});

router.route("/state").get(function(req, res) {
  https.get("https://api.rootnet.in/covid19-in/stats/history", function(response) {
    var stockData = "";
    response.on("data", function(data) {
      stockData += data;
    });

    response.on("end", function() {
      stockData = JSON.parse(stockData);


      let index = 0;
      stockData.data.forEach((item, i) => {
        if (item.day == "2021-06-06") {
          index = i;
        }
      });
      res.json(stockData.data[453].regional)
    })
  })
})


module.exports = router;
