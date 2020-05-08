const CONSTANTS = require("../constants");
const express = require("express");
const sampleData = require("../sampleMeterData");


const router = express.Router();
// LIST ENDPOINTS
router.get(CONSTANTS.ENDPOINT.LIST, function (req, res) {
  res.json(sampleData.listTextAssets);
});

router.get(CONSTANTS.ENDPOINT.METERSERIALNUMBERS, async function (req, res) {
  sampleData.getMeterData().then((result) => {
    // console.log(result);
    result = result.map(({ Serial }) => Serial)
    result = [... new Set(result)]
    res.json(result);
  });

});

router.get(CONSTANTS.ENDPOINT.METERSERIALNUMBERS, async function (req, res) {
  sampleData.getMeterData().then((result) => {
    // console.log(result);
    result = result.map(({ Serial }) => Serial)
    result = [... new Set(result)]
    res.json(result);
  });

});

router.get(CONSTANTS.ENDPOINT.METERDETAILS + "/:_id", async function (req, res) {
  const { _id } = req.params;
  sampleData.getMeterData().then((result) => {
    // console.log(result);
    result.sort(function (a, b) {
      var dateA = new Date(a.ReadingDateTimeUTC), dateB = new Date(b.ReadingDateTimeUTC);
      return dateA - dateB;
    });
    result = result.filter(x => x.Serial == _id);
    result = [...new Set(result)]
    // console.log("result::", result);

    const xaxisresult = result.map(({ ReadingDateTimeUTC }) => ReadingDateTimeUTC)
    // console.log("xaxisresult", xaxisresult);

    const yaxisWHresult = result.map(({ WH }) => Number(WH))
    // console.log("yaxis1result::", yaxis1result);

    const WHresult = diff(yaxisWHresult);
    let WHresultSum = WHresult.reduce((previous, current) => current += previous);
    let WHresultAvg = WHresultSum / WHresult.length;


    xaxisresult.shift();

    const yaxisVARHresult = result.map(({ VARH }) => Number(VARH))
    const VARHresult = diff(yaxisVARHresult);
    let VARHresultSum = VARHresult.reduce((previous, current) => current += previous);
    let VARHresultAvg = VARHresultSum / VARHresult.length;
    const obj = {
      serialnumber: _id,
      xaxis: xaxisresult,
      yaxisWHresult: WHresult,
      yaxisVARHresult: VARHresult,
      averageWH: WHresultAvg,
      averageVARH: VARHresultAvg
    }
    console.log("Final return Object::", obj);

    res.json(obj);
  });

});


function diff(ary) {
  var newA = [];
  for (var i = 1; i < ary.length; i++)  newA.push(ary[i] - ary[i - 1])
  return newA;
}


module.exports = router;
