const getTextBtn = document.getElementById("button1");
const getJsonBtn = document.getElementById("button2");
const getFromExternalSourceBtn = document.getElementById("button3");
const outputDiv = document.getElementById("output");

getTextBtn.addEventListener("click", getTextEvent);
getJsonBtn.addEventListener("click", getJsonEvent);
getFromExternalSourceBtn.addEventListener("click", getFromExternalSourceEvent);

function getTextEvent() {
  fetch("test.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      outputDiv.innerHTML = `<p>${data}</p>`;
    });
}
function getJsonEvent() {
  fetch("sample.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      let output = `<ul> JSON OBJECT
            <li>Id : ${jsonObject.id}</li>
            <li>Name : ${jsonObject.name}</li>
            <li>Content : ${jsonObject.content}</li>
        </ul>`;
      outputDiv.innerHTML = `<p>${output}</p>`;
    });
}
function getFromExternalSourceEvent() {
  fetch("https://api.github.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObjects) {
      let output = "";
      jsonObjects.forEach(function (element) {
        output += `<ul>Git hub User id : ${element.id} 
        <li> Login : ${element.login} </li>
        <li> Type : ${element.type} </li>
      </ul>`;
      });
      outputDiv.innerHTML = `<p>${output}</p>`;
    });
}
