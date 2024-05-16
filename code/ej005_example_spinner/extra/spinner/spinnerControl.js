// make spinner
//
// <div class="overlay" id="overlay">
//    <div class="spinner"></div>
// </div>
//
//
//  part 1 -- Making Spinner
var overlaySpinner=document.getElementById("overlay");
overlaySpinner.style.distplay="block";
overlaySpinner.classList.add("overlay");
var overlaySpinnerDiv= document.createElement("div");
overlaySpinnerDiv.classList.add("spinner");
overlaySpinner.appendChild(overlaySpinnerDiv);

// Functión to hide spinner
function hideSpinner() {
  var spinner = document.getElementById('overlay');
  spinner.style.display = 'none';
}

