const userName1 = "Hi Andy!!! ...";
console.log(userName1);

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", () => {
    console.log("Clicked");
  });
}

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}

function addWithReturn(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}
