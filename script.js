document.addEventListener("DOMContentLoaded", function () {
  let isOnBtnActive = false;
  let isOffBtnActive = false;
  let result = 0;

if(!isOnBtnActive){
  document.getElementById("screen-calculate").disabled = true;
}


 const buttons = document.querySelectorAll('.button');
  buttons.forEach(btn => {
    if (!isOnBtnActive) {
        btn.classList.add('no-hover');
        btn.disabled = true;
    } else {
        btn.classList.remove('no-hover');
        btn.disabled = false;
    }
});

  function writeToScreen(value) {

 

    if (value == "=") {
      if (result==null || result==undefined) {
        document.getElementById("screen-calculate").value = "Error!";
      }else
      document.getElementById("screen-calculate").value = result;
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
      isOnBtnActive = false;
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





// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Disable Button Hover</title>
//     <style>
//         /* Normal buton stili */
//         button {
//             padding: 10px 20px;
//             font-size: 16px;
//             cursor: pointer;
//         }
        
//         /* Normal hover durumu */
//         button:hover {
//             background-color: rgb(165, 184, 184);
//         }

//         /* Hover'ı devre dışı bırakacak sınıf */
//         .no-hover:hover {
//             background-color: initial; /* Veya istediğiniz herhangi bir renk */
//         }
//     </style>
// </head>
// <body>
//     <button id="screen-calculate" class="button">Calculate</button>
//     <button id="btn-on" onclick="setOn()">On</button>
//     <button id="btn-off" onclick="setOff()">Off</button>

//     <script>
//         document.addEventListener("DOMContentLoaded", function () {
//             let isOnBtnActive = false;
//             let isOffBtnActive = false;
//             let result = 0;

//             const buttons = document.querySelectorAll('.button');
//             const screenCalculate = document.getElementById("screen-calculate");
//             screenCalculate.disabled = true;

//             function updateButtonStates() {
//                 buttons.forEach(btn => {
//                     if (!isOnBtnActive) {
//                         btn.classList.add('no-hover');
//                         btn.disabled = true;
//                     } else {
//                         btn.classList.remove('no-hover');
//                         btn.disabled = false;
//                     }
//                 });
//             }

//             function writeToScreen(value) {
//                 if (value == "=") {
//                     if (result == null || result == undefined) {
//                         screenCalculate.value = "Error!";
//                     } else {
//                         screenCalculate.value = result;
//                     }
//                 } else {
//                     screenCalculate.value += value;
//                     const operationTemplate = screenCalculate.value;
//                     result = safeEvaluate(operationTemplate);
//                     console.log("result: " + result);
//                 }
//             }

//             function safeEvaluate(operationTemplate) {
//                 console.log(operationTemplate);
//                 if (/^[0-9+\-*/().\s]+$/.test(operationTemplate)) {
//                     try {
//                         return eval(operationTemplate);
//                     } catch (error) {
//                         console.error("Operation Template is faulty!!");
//                     }
//                 } else {
//                     console.error("Detected invalid characters!");
//                     return null;
//                 }
//             }

//             function setOn() {
//                 isOnBtnActive = true;
//                 isOffBtnActive = false;
//                 console.log("OnBtn: " + isOnBtnActive);
//                 updateButtonStates();
//                 btnOn.style.backgroundColor = "rgb(0, 205, 0)";
//                 btnOff.style.backgroundColor = "rgb(255, 0, 0, 0.562)";
//             }

//             function setOff() {
//                 isOffBtnActive = true;
//                 isOnBtnActive = false;
//                 console.log("OffBtn: " + isOffBtnActive);
//                 updateButtonStates();
//                 btnOff.style.backgroundColor = "rgb(255, 0, 0)";
//                 btnOn.style.backgroundColor = "rgb(0, 210, 0, 0.450)";
//             }

//             // `writeToScreen` ve `setOn` fonksiyonlarını global yaparak HTML'deki `onclick` işlevselliğini koruyalım
//             window.writeToScreen = writeToScreen;
//             window.setOn = setOn;
//             window.setOff = setOff;
//         });
//     </script>
// </body>
// </html>
