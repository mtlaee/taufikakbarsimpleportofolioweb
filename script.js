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
});
