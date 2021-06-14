const router = require("express").Router();
const bodyParser = require("body-parser");
const https = require("https");

router.use(bodyParser.urlencoded({
  extended: true
}));
router.route("/total").get(function(req, res) {

  https.get('https://api.rootnet.in/covid19-in/stats/latest', function(response) {
    var stockData = "";
    response.on("data", function(data) {
      stockData += data;
    });

    response.on("end", function() {
      stockData = JSON.parse(stockData);

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
        if (item.day == "2021-06-13") {
          index = i;
        }
      });
      console.log(index);

      const dateData = [{
        dateconfirmed: stockData.data[index].summary.confirmedCasesIndian - stockData.data[index - 1].summary.confirmedCasesIndian,
        daterecovered: stockData.data[index].summary.discharged - stockData.data[index - 1].summary.discharged,
        datedeath: stockData.data[index].summary.deaths - stockData.data[index - 1].summary.deaths

      }]
      console.log(dateData);
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
        if (item.day == "2021-06-13") {
          index = i;
        }
      });
      res.json(stockData.data[index].regional)
    })
  })
})

router.route("/datestate").post(function(req,res){
  https.get("https://api.rootnet.in/covid19-in/stats/history",function(response){
    var stockData = "";
    response.on("data", function(data) {
      stockData += data;
    });

    response.on("end", function() {
      stockData = JSON.parse(stockData);

      res.json([stockData])


  })
})

})


module.exports = router;
