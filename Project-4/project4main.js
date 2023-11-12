// save your sheet ID and name of the tab as variables for use
let sheetID = "1ldVnyJrQqH5YEfouNe9L6qGe8bMWsgLeCB7HdNnfcZI";
let tabName = 'sheet1'

// format them into Ben's uri
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
			
        

    })

    .catch(function (err) {
        console.log("Something went wrong!", err);
    });