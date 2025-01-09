document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar-menu");
  const closeButton = document.querySelector(".close-sidebar");
  const body = document.body;

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  body.appendChild(overlay);

  // Open sidebar
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
  });

  // Close sidebar
  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "";
  }

  closeButton.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});
