//sets up variable for add button
var addButton = document.querySelector("#addButton");

//sets up variable for subtract button
var subButton = document.querySelector("#subButton");

//sets up variable for multiply button
var multButton = document.querySelector("#multButton");

//sets up variable for divide button
var divButton = document.querySelector("#divButton");

//Calculate Function
var element = document.querySelector("#calculate");
var eventname = "click";
var calculate = function() {

  //grab input values
  var textbox1 = document.querySelector("#input1");
  var num1 = parseInt(textbox1.value);

  var textbox2 = document.querySelector("#input2");
  var num2 = parseInt(textbox2.value);

  var finalAnswer = [];

  if (addButton.checked === true) {
    var add = function(num1, num2) {
      var answer1 = num1 + num2;
      finalAnswer.push(answer1);
    };

    add(num1, num2);
  };

  if (subButton.checked === true) {
    var sub = function(num1, num2) {
      var answer2 = num1 - num2;
      finalAnswer.push(answer2);
    };

    sub(num1, num2);
  };

  if (multButton.checked === true) {
    var mult = function(num1, num2) {
      var answer3 = num1 * num2;
      finalAnswer.push(answer3);
    };
    mult(num1, num2);
  };

  if (divButton.checked === true) {
    var divide = function(num1, num2) {
      var answer4 = num1 / num2;
      finalAnswer.push(answer4);
    };
    divide(num1, num2);
  };

  var textbox3 = document.querySelector("#finalAnswer");
  textbox3.value = finalAnswer;

};

element.addEventListener(eventname, calculate);

//Clear Function
var clearButton = document.querySelector("#clearAll");
var eventname = "click";
var clearAll = function() {

  var textbox1 = document.querySelector("#input1");
  textbox1.value = 0;

  var textbox2 = document.querySelector("#input2");
  textbox2.value = 0;

  var textbox3 = document.querySelector("#finalAnswer");
  textbox3.value = 0;

};

clearButton.addEventListener(eventname, clearAll);
