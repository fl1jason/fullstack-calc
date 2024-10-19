console.log("Advanced Calculator from the future loaded successfully! 🚀");

const onClickAdd = () => {
  // get the values of the two numbers
  const num1 = document.getElementById("first_number").value;
  const num2 = document.getElementById("second_number").value;

  // check if the input is empty
  if (num1 === "" || num2 === "") {
    displayMessage("Please enter two numbers");
    return;
  }

  // do the calculation
  const result = parseInt(num1) + parseInt(num2);

  // display the result
  displayResult(result);

  // send the data to the server
  postAdd(num1, num2, result);
};

const postAdd = async (num1, num2, result) => {
  // make a POST request to the server
  const response = await fetch("/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      num1: num1,
      num2: num2,
      operation: "add",
      result: result,
    }),
  });

  // get the response data
  const data = await response.json();
  displayMessage(data.message);

  return data;
};

const getPastCalcs = async () => {
  // make a GET request to the server
  const response = await fetch("/api/data");

  // get the response data
  const data = await response.json();

  // display the data
  displayPastCalcs(data);

  // update the past calcs
  getPastCalcs();
};

const displayPastCalcs = (data) => {
  const pastCalcs = document.getElementById("past_calcs");

  // clear the previous data
  pastCalcs.innerHTML = "";

  // add the new data
  data.forEach((calc) => {
    const li = document.createElement("li");
    li.innerText = `${calc.num1} + ${calc.num2} = ${calc.result}`;
    pastCalcs.appendChild(li);
  });
};

// display the result to the user
const displayResult = (result) => {
  document.getElementById("result").style.display = "block";

  document.getElementById("result_value").innerText = result;

  // clear the input fields
  document.getElementById("first_number").value = "";
  document.getElementById("second_number").value = "";
};

// display a message to the user for general errors and information
const displayMessage = (message) => {
  const messageEl = document.getElementById("message");
  messageEl.innerText = message;
  messageEl.style.display = "block";

  // clear the message after 3 seconds
  setTimeout(() => {
    messageEl.textContent = "";
    messageEl.style.display = "none";
  }, 3000);
};

// add an event listener to the add button
const addButton = document.getElementById("add_button");
addButton.addEventListener("click", onClickAdd);

// get the past calculations
getPastCalcs();
