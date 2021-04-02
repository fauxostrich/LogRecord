/**
 * This JS file allows the user to add any number of
 * record logs. Each log has date and time included.
 */
let read = require("readline-sync");
let fs = require("fs");
let recordArr = new Array();

let n = read.question("Enter Number of Records: ");
for(var i = 0; i < n; i++)
{
    let fname = read.question("\nEnter First Name: ");
    let lname = read.question("Enter Last Name: ");
    let gender = read.question("Enter Gender: ");
    let email = read.question("Enter Email: ");
    
    let date = new Date();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ms = date.getMilliseconds();
    var now = month +"/"+ day +"/"+ year +" "+ hour +":"+ minute +":"+ second +":"+ ms;

    let json = {"fname": fname, "lname": lname, "gender": gender, "email": email, "date-time": now};
    debugger; // to see if json has the value of the users inputs
    recordArr.push(json);
}

// writing
let jsonStr = JSON.stringify(recordArr);
fs.writeFileSync("records.json", jsonStr);                      

// reading and exporting
let data = fs.readFileSync("records.json");                                             
jsonStr = data.toString();
module.exports.jsonArr = JSON.parse(jsonStr);
