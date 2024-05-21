document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navMenu = document.getElementById("nav-menu");

  navbarToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  const viewHoursButton = document.getElementById("view-hours");
  const businessHours = document.getElementById("business-hours");

  if (viewHoursButton && businessHours) {
    viewHoursButton.addEventListener("click", () => {
      businessHours.classList.toggle("hidden");
    });
  }
});
