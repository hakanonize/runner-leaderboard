const CSVToJSON = require('csvtojson');
const fs = require('fs');
// convert users.csv file to JSON array
CSVToJSON().fromFile('pace.csv')
    .then(users => {
      fs.writeFile('paces.json', JSON.stringify(users, null, 4), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON array is saved.");
    });
    }).catch(err => {
        // log error if any
        console.log(err);
    });