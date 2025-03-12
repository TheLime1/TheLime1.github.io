document
  .getElementById("loadScriptsButton")
  .addEventListener("click", function () {
    var easterEgg = document.querySelector(".easter-egg");
    easterEgg.parentNode.removeChild(easterEgg);
  });
