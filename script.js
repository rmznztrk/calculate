document.addEventListener("DOMContentLoaded", function () {
  let isOnBtnActive = false;
  let isOffBtnActive = false;
  let result = 0;
  const buttons = document.querySelectorAll(".button");
  const screenCalculate = document.getElementById("screen-calculate");
  screenCalculate.disabled = true;
  const clickButtonSound = document.getElementById("click-button-sound");

  function updateButtonStates() {
    buttons.forEach((btn) => {
      if (!isOnBtnActive) {
        btn.classList.add("no-hover");
        btn.disabled = true;
        document.getElementById("screen-calculate").value="";
        // screenCalculate.disabled = true;
      } else {
        btn.classList.remove("no-hover");
        btn.disabled = false;
        // screenCalculate.disabled = false;
      }
    });
    screenCalculate.disabled = !isOnBtnActive;
  }

  function writeToScreen(value) {

    clickButtonSound.play();

    if (screenCalculate.disabled) {
      return;
    }

    if (value == "=") {
      if (result == null || result == undefined) {
        document.getElementById("screen-calculate").value = "Error!";
      } else document.getElementById("screen-calculate").value = result;
    } else {
      document.getElementById("screen-calculate").value += value;
      const operationTemplate =
        document.getElementById("screen-calculate").value;

      result = safeEvaluate(operationTemplate);
      console.log("result: " + result);
    }
  }

  function safeEvaluate(operationTemplate) {
    console.log(operationTemplate);

    if (/^[0-9+\-*/().\s]+$/.test(operationTemplate)) {
      try {
        return eval(operationTemplate);
      } catch (error) {
        console.error("Operation Template is faulty!!");
      }
    } else {
      console.error("detected invalid characters!");
      return null;
    }
  }

  const btnOn = document.getElementById("btn-on");
  const btnOff = document.getElementById("btn-off");
  const onSound = document.getElementById("on-sound");
  const offSound = document.getElementById("off-sound");

  function setOn() {
    isOnBtnActive = true;
    isOffBtnActive = false;
    console.log("clicked OnButon: ", isOnBtnActive);
    updateButtonStates();
    btnOn.style.backgroundColor = "rgb(0, 205, 0)";
    btnOff.style.backgroundColor = "rgb(255, 0, 0, 0.562)";
    onSound.play();
  }

  function setOff() {
    isOffBtnActive = true;
    isOnBtnActive = false;
    console.log("clicked OffButon: ", isOffBtnActive);
    updateButtonStates();
    btnOff.style.backgroundColor = "rgb(255, 0, 0)";
    btnOn.style.backgroundColor = "rgb(0, 210, 0, 0.450)";
    offSound.play();
  }

  // `writeToScreen` ve `setOn` fonksiyonlarını global yaparak HTML'deki `onclick` işlevselliğini koruyalım
  window.writeToScreen = writeToScreen;
  window.setOn = setOn;
  window.setOff = setOff;
});
