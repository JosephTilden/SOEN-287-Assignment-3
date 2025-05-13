const express = require("express");
const app = express();

app.get("/", (red, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>J DILLA !!!</title>
</head>
<body>
<fieldset>
    <form name="posIntegerForm" action="/findSummation" method="GET">
        <label for="posInteger">Enter a positive integer: </label>
        <input type="number"  id="posInteger" name="posInteger" required>
        <button type="submit">Find Summation</button>
        <br><br>
    </form>
    <form name="stringChangeForm" action="/upperCaseFirstAndLast" method="GET">
        <label for="stringToChange">Enter some text: </label>
        <input type="text"  id="stringToChange" name="stringToChange" required>
        <button type="submit">Capitalize the First and Last Letters</button>
        <br><br>
    </form>
    <form name="avgAndMedianForm" action="/findAverageAndMedian" method="GET">
        <label for="numbersArray">Enter an array of numbers surrounded by []: </label>
        <input type="text"  id="numbersArray" name="numbersArray" required>
        <button type="submit">Find Average and Median</button>
        <br><br>
    </form>
    <form name="find4DigitsForm" action="/find4Digits" method="GET">
        <label for="numbersString">Enter some numbers seperated by a space: </label>
        <input type="text"  id="numbersString" name="numbersString" required>
        <button type="submit">Find the first 4 digit number</button>
    </form>
</fieldset>
</body>
</html>
`)
})

const backButton = "<br><br><a href=\"/\"><button>I'M SCARED TAKE ME HOME</button></a>";
app.get("/findSummation", (req, res) => {
  const posInteger = req.query.posInteger;
  const result = findSummation(posInteger)
  if (result === false) {
    res.send("You put a bad number buddy... Try that again and see what happens." + backButton)
  } else {
    res.send(`THE SUMMATION OF ${posInteger} IS ${result} YAAAAAAY!!!` + backButton)
  }
  res.end();
})

app.get("/upperCaseFirstAndLast", (req, res) => {
  const stringToChange = req.query.stringToChange;
  const result = upperCaseFirstAndLast(stringToChange);
  res.send(`Here's your new text: ${result} <br>Oh you don't like it?` + backButton);
  res.end();
})

app.get("/findAverageAndMedian", (req, res) => {
  const numbersArray = JSON.parse(req.query.numbersArray);
  const result = findAverageAndMedian(numbersArray);
  res.send(`The average is: ${result[0]} <br>
The median is: ${result[1]}` + backButton);
  res.end();
})

app.get("/find4Digits", (req, res) => {
  const numbersString = req.query.numbersString;
  const result = find4Digits(numbersString);
  if (result === false) {
    res.send("There was no 4 digit number there 😔" + backButton);
  } else {
    res.send(`The first 4 digit number is: ${result}` + backButton);
  }
  res.end();
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log("GET OUT OF MY ROOM I'M PLAYING MINECRAFT!");
})

function findSummation(num = 1) {
  num = Number(num);
  if (isNaN(num) || num <= 0) {
    return false;
  }
  let sum = num;
  for (let i = 1; i < num; i++) {
    sum += i;
  }
  return sum;
}

function upperCaseFirstAndLast(string) {
  if (string.length === 0) {
    return "";
  }
  if (string.length <= 2) {
    return string.toUpperCase();
  }

  let modifiedString = string.charAt(0).toUpperCase();
  for (let i = 1; i < string.length - 1; i++) {
    modifiedString += string.charAt(i);
  }
  modifiedString += string.charAt(string.length - 1).toUpperCase();
  return modifiedString;
}

function findAverageAndMedian(numbers) {
  if (numbers.length === 0) {
    return [0, 0];
  }
  let avg, med;
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  avg = sum / numbers.length;
  let midIndex = Math.round((numbers.length)/ 2 - 1);
  med = numbers[midIndex];
  return [avg, med]
}

// DOES NOT ACCOUNT FOR FLOATS
function find4Digits(string) {
  let numbers = string.split(" ");
  for (const number of numbers) {
    if (!isNaN(number) && number.length === 4) {
      return parseInt(number);
    }
  }
  return false;
}

console.log(findAverageAndMedian(JSON.parse("[5,6,7,8]")));
