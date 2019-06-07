var newButton = document.getElementById("button")
newButton.addEventListener("click", doStuff)

function doStuff() {
  var paragraph = document.getElementById("text")
  paragraph.textContent = "hello"
  var sound = new Audio("that_was_easy.mp3")
  sound.play()
  
}

