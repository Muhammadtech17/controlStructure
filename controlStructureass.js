const { connect } = require("net");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.questions("do you have skill?, if yes press 1; if no press 2: ", (userinput) => {
if (userinput === "1") {
    console.log("we can employ you");
} else if (userinput === "2") {
    console.log("we cant employ you");
    } else {
        console.log ("exit");

     });
     
