const csvFilePath = 'server/metering_data.csv'
const csv = require('csvtojson')
var sampleData = [];
const getMeterData = () => {
    return new Promise((resolve, reject) => {
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                //console.log(jsonObj);
                /**
                 * [
                 * 	{a:"1", b:"2", c:"3"},
                 * 	{a:"4", b:"5". c:"6"}
                 * ]
                 */

                // long operation for each json e.g. transform / write into database.
                resolve(jsonObj)



            })
    })
}


module.exports.getMeterData = getMeterData;


