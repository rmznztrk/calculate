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

  // getElement type-1:
  function setOn() {
    const btnOn = document.getElementById("btn-on");

    isOnBtnActive = !isOnBtnActive;
    console.log("OnBtn: " + isOnBtnActive);
    isOnBtnActive
      ? (btnOn.style.backgroundColor = "rgb(0, 205, 0)")
      : (btnOn.style.backgroundColor = "rgb(0, 210, 0, 0.450)");
  }

  // getElement type-2:
  document.getElementById("btn-off").addEventListener("click", function () {
    // Butonun arka plan rengini değiştir
    isOffBtnActive = !isOffBtnActive;
    console.log("OffBtn: " + isOffBtnActive);
    isOffBtnActive
      ? (this.style.backgroundColor = "rgb(255, 0, 0)")
      : (this.style.backgroundColor = "rgb(255, 0, 0, 0.562)");
  });

  // `writeToScreen` ve `setOn` fonksiyonlarını global yaparak HTML'deki `onclick` işlevselliğini koruyalım
  window.writeToScreen = writeToScreen;
  window.setOn = setOn;
  
});
