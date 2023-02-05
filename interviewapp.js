var inputText = document.querySelector("#input-user");
console.log(inputText);

var btnSubmit = document.querySelector("#btnIdresponse");
console.log(btnSubmit);

var outputResponse = document.querySelector("#output");
console.log(outputResponse);

function clickHandler() {
  console.log("Clicked");
  var userInput = inputText.value;
  console.log(userInput);
  if (userInput < 18) {
    console.log("You are currently not eligible to drive");
    outputResponse.innerText = "You are currently not eligible to drive";
  } else console.log("Yay! You can drive");
}
btnSubmit.addEventListener("click", clickHandler);
