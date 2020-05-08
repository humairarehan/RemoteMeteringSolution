const path = require('path');
// const csvFilePath = 'metering_data.csv'
const csv = require('csvtojson')
var sampleData = [];
const getMeterData = () => {
    return new Promise((resolve, reject) => {
        csv()
            .fromFile(path.resolve(__dirname, "metering_data.csv"))
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


