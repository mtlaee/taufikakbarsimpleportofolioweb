document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Menghapus class 'active' dari semua item
      navItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Menambahkan class 'active' ke item yang diklik
      this.classList.add("active");
    });
  });

  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector('header nav a[href*="' + id + '"]')
            .classList.add("active");
        });
      }
    });
  };

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
});
