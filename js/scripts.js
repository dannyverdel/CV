/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  var dob = "20020725";
  var year = Number(dob.substr(0, 4));
  var month = Number(dob.substr(4, 2)) - 1;
  var day = Number(dob.substr(6, 2));
  var today = new Date();
  var age = today.getFullYear() - year;
  if (
    today.getMonth() < month ||
    (today.getMonth() == month && today.getDate() < day)
  ) {
    age--;
  }

  document.getElementById("intro").innerText = document
    .getElementById("intro")
    .innerText.replace("@age", age);

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
