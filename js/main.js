// Make sure sw are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_pages.js")
      .then(reg => console.log("Service Worker: Registered"))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}

const menuIconEl = $(".menu-icon");
const sidenavEl = $(".sidenav");
const sidenavCloseEl = $(".sidenav__close-icon");

// Add and remove provided class names
function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// Open the sidenav on click
menuIconEl.on("click", function() {
  toggleClassName(sidenavEl, "active");
});

// Close the sidenav on click
sidenavCloseEl.on("click", function() {
  toggleClassName(sidenavEl, "active");
});
