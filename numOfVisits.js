const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();
app.use(cookieParser())

app.get('/', (req, res) => {
  let visitCount = req.cookies.visitsCount;
  let lastVisitDate;
  if (isNaN(visitCount)) {
    visitCount = 1;
    res.cookie("visitsCount", visitCount);
    res.cookie("lastVisitDate", getDate())
    res.send("Hellllllllooooo there lad. First time visiting?");
  } else {
    visitCount++;
    res.cookie("visitsCount", visitCount);
    const lastVisitDate = req.cookies.lastVisitDate;
    res.cookie("lastVisitDate", getDate());
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<p>This be yer visit #${visitCount}. Get that number up, lad!</p>`);
    res.write("<p>I remember yer last visit fondly. When was it again? Oh yes! It was ");
    res.write(lastVisitDate + "</p>");
    res.end();
  }
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log("Crazy server up and running");
})

function getDate() {
  let date = new Date();
  return date.toString().substring(0, 24) + " EST ";
}
