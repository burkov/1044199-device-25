// var sliders = document.querySelectorAll(".slides-list-item");
// if (sliders.length !== 0) {
//   var slidersNav = document.querySelector(".slider-dots");
//   var activeSlider = document.querySelector(".slides-list-item-shown");

//   var sliderLinkWrapper = activeSlider.querySelector(".slides-list-item-description-link-wrapper");
//   document.querySelector(".slider-dots").remove;
//   sliderLinkWrapper.appendChild(slidersNav);

//   slidersNav.addEventListener("click", function (evt) {
//     var target = evt.target;
//     if (target.classList.contains("slider-cb")) {
//       document.querySelector(".slider-dots").remove();
//       var slideNum = target.id.split('-')[1];
//       for (var j = 0; j < sliders.length; j++) {
//         sliders[j].classList.remove("slides-list-item-shown");
//       }
//       sliders[slideNum - 1].classList.add("slides-list-item-shown");
//       activeSlider = sliders[slideNum - 1];
//       sliderLinkWrapper = activeSlider.querySelector(".slides-list-item-description-link-wrapper");
//       sliderLinkWrapper.appendChild(slidersNav);
//       slidersNav.querySelector("input:checked").focus();
//     }
//   });
// }
