const title = document.querySelector("div.hello:first-child h1");

function handleTiltleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTiltleClick);
