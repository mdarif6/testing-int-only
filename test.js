let inputText = document.querySelector(".text");
let btn = document.querySelector(".button");
let output = document.querySelector(".output");

btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((recvdData) => {
      console.log(recvdData);
      recvdData.map((item) => {
        output.textContent = item;
      });
    });
});
