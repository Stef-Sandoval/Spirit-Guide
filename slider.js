let slider = document.getElementById("slider");
let ForwardButton = document.getElementById("flecha_forward");
let PlayButton = document.getElementById("play");
let BackButton = document.getElementById("flecha_back");

ForwardButton.addEventListener("click", handleClickForward);
PlayButton.addEventListener("click", handleClickForward);
BackButton.addEventListener("click", handleClickBack);

let position = 0;
function handleClickForward(e) {
  e.preventDefault();
  if (position < 3000) {
    position = position + 500;
    console.log(position);
    slider.style.transform = `translateY(-${position}px)`;
  }
}

function handleClickBack(e) {
  e.preventDefault();
  position = position - 500;
  console.log(position);
  slider.style.transform = `translateY(-${position}px)`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault(); // Prevent default tab behavior
    handleClickForward();
  }
});
