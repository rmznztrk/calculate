document.addEventListener("DOMContentLoaded", function () {
  let isOnBtnActive = false;
  let isOffBtnActive = false;

  function writeToScreen(value) {
    if (value == "=") {
      document.getElementById("screen-calculate").value = value;
    } else {
      document.getElementById("screen-calculate").value += value;
      const x = document.getElementById("screen-calculate").value;
      console.log(x);
    }
  }

  const btnOn = document.getElementById("btn-on");
  const btnOff = document.getElementById("btn-off");

  function setOn() {
    isOnBtnActive = !isOnBtnActive;
    console.log("OnBtn: " + isOnBtnActive);
    if (isOnBtnActive) {
      isOffBtnActive = false;
      btnOn.style.backgroundColor = "rgb(0, 205, 0)";
      btnOff.style.backgroundColor = "rgb(255, 0, 0, 0.562)";
    } else {
      btnOn.style.backgroundColor = "rgb(0, 210, 0, 0.450)";
      btnOff.style.backgroundColor = "rgb(255, 0, 0)";
    }
  }

  function setOff() {
    isOffBtnActive = !isOffBtnActive;
    console.log("OffBtn: " + isOffBtnActive);
    if (isOffBtnActive) {
      isOnBtnActive=false;
      btnOff.style.backgroundColor = "rgb(255, 0, 0)";
      btnOn.style.backgroundColor = "rgb(0, 210, 0, 0.450)";
    } else {
      btnOff.style.backgroundColor = "rgb(255, 0, 0, 0.562)";
      btnOn.style.backgroundColor = "rgb(0, 205, 0)";
    }
  }

  // `writeToScreen` ve `setOn` fonksiyonlarını global yaparak HTML'deki `onclick` işlevselliğini koruyalım
  window.writeToScreen = writeToScreen;
  window.setOn = setOn;
  window.setOff = setOff;
});
