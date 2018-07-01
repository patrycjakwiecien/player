
//// Get the modal
//var modal = document.getElementById('.playlist_popup');
//
//// Get the button that opens the modal
//var btn = document.getElementById("playlist_button img");
//
//// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
//
//// When the user clicks the button, open the modal 
//btn.onclick = function() {
//    modal.style.display = "block";
//}
//
//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}


function myFunction() {
    var x = document.getElementById("playlist_popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
























//$(function() {
// $('#playlist_button a').click(function(e) {
//   e.preventDefault();
//   animateSlider(this.hash);
// });
// function animateSlider(hash) {
//   if (!$('#playlist div.open').length) {
//    
//     if (hash == '#songs') {
//       openPopup(hash);
//     }
//   } else {
//     
//     if (hash == '#songs') {
//       openAndClose(hash)
//     }
//   }
// }
// function openPopup(hash) {
//   $(hash + '_popup').slideToggle().addClass('open');
// }
// function openAndClose(hash) {
//   if ($(hash + '_popup').hasClass('open')) {
//     $($(hash + '_popup')).slideToggle().removeClass();
//   } else {
//     $('#playlist div.open').slideToggle().removeClass();
//     $(hash + '_popup').slideToggle().addClass('open');
//   }
// }
//});



//$(function() {
// $('#playlist_button a').click(function(e) {
//   e.preventDefault();
//   animateSlider(this.hash);
// });
// function animateSlider(hash) {
//   if (!$('#square div.open').length) {
//    
//     if (hash == '#songs') {
//       openPopup(hash);
//     }
//   } else {
//     
//     if (hash == '#songs') {
//       openAndClose(hash)
//     }
//   }
// }
// function openPopup(hash) {
//   $(hash + '_popup').slideToggle().addClass('open');
// }
// function openAndClose(hash) {
//   if ($(hash + '_popup').hasClass('open')) {
//     $($(hash + '_popup')).slideToggle().removeClass();
//   } else {
//     $('#square div.open').slideToggle().removeClass();
//     $(hash + '_popup').slideToggle().addClass('open');
//   }
// }
//});