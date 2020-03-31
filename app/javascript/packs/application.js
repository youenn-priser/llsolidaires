require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require('google-maps');

//= require sweetalert2
//= require sweet-alert2-rails

import "bootstrap";
import { initAutocomplete } from "./map";

var bouton = document.querySelector("#soignant");
var rr = document.querySelector("#rr");
var aa = document.querySelector(".login-wrap");
var dd = document.querySelector("#aa");
function check() {
  bouton.checked = true;
  if (bouton.value = true) {
    rr.style.display = "block";
    dd.classList.remove("col-12");
    rr.classList.add("col-6");
    dd.classList.add("col-6");
    aa.style.maxWidth = "750px";
  }

}

function checkOut() {
  rr.style.display = "none";
  aa.style.maxWidth = "450px";
  dd.classList.add("col-12");
  rr.classList.remove("col-6");
  dd.classList.remove("col-6");
}

window.check = check;
window.checkOut = checkOut;


//  // Get the modal
var modal = document.querySelector("#myModal");
// var close = document.getElementById("close");


// J'ai commenté ca pour pas que la map pète merci
// close.onclick = function() {
//   modal.style.display = "none";


// }

window.onclick = function(event) {
  if (event.target == modal) {
   modal.style.display = "none";
 }
}

function modalForm() {
  var modal = document.querySelector("#myModal");

  modal.style.display = "block";

}

function modalOpen(name,firstname,about,link) {
  var modal = document.querySelector("#myModal");
  var close = document.querySelector("#close");
  var modal = document.querySelector("#myModal");
  var modalName = document.querySelector("#modalName");
  var modalFirstname =document.querySelector("#modalFirstname");
  var modalAbout =document.querySelector("#modalAbout");
  var modalLink =document.querySelector("#modalLink");
  var modalLinkSpan =document.querySelector("#modalLinkSpan");

  modal.style.display = "block";
  modalName.innerText =  name ;
  modalFirstname.innerText = firstname ;
  modalAbout.innerText =  about ;
  if (link){
    modalLink.href =  link ;
    modalLink.innerText =  `justificatif_${name}_${firstname}` ;
  } else{
    modalLinkSpan.innerText = ' Non chargé';
  }

}

function modalMap(type,pmr,addresse,about,date1, date2, requestLink) {
  var modal = document.querySelector("#myModal");


  var modalType = document.querySelector("#modalType");
  var modalPMR =document.querySelector("#modalPMR");
  var modalAbout =document.querySelector("#modalAbout");
  var modalAdresse =document.querySelector("#modalAdresse");
  var modalDate1 =document.querySelector("#modalDate1");
  var modalDate2 =document.querySelector("#modalDate2");
  var modalRequestLink =document.querySelector("#modalRequestLink");


  modal.style.display = "block";
  modalType.innerText =  type ;
  if (pmr === "true"){
    modalPMR.innerText = "Oui";
  } else {
    modalPMR.innerText = "Non" ;
  }
  modalAdresse.innerText =  addresse ;
  modalDate1.innerText =  date1 ;
  modalDate2.innerText =  date2 ;
  if (date2 === "") {
    modalDate2.innerText =  "n. d." ;
  }
  modalAbout.innerText =  about ;
  modalRequestLink.href =  requestLink ;

}


window.modalForm = modalForm;
window.modalOpen = modalOpen;
window.modalMap = modalMap;


setTimeout(function () {
  $('.alert').fadeOut('fast');
}, 4000);




initAutocomplete();
