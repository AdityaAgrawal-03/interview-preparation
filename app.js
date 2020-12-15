var translateButton = document.querySelector("#button");
var divContainer = document.querySelector("#container");
var inputText = document.querySelector("#input-text");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function addTextParameterToURL(textParameter) {
  return `${serverURL}?text=${textParameter}`;
}

function clickHandler() {
  var textParameter = inputText.value;

  var finalURL = addTextParameterToURL(textParameter);
 
  fetch(finalURL)
  .then(response => response.json())
  .then(json => {
    divContainer.innerText = json.contents.translated;
  })
}

translateButton.addEventListener("click", clickHandler);



