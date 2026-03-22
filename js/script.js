function toggleTheme(){
  document.body.classList.toggle("light");
}

function toggleMenu(){
  document.getElementById("sidebar").classList.toggle("active");
}

function initSidebar() {
  const sections = document.querySelectorAll('.section-title');

  sections.forEach(title => {
    title.addEventListener('click', () => {
      const section = title.parentElement;
      section.classList.toggle('open');
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {

  fetch("/style/side_bar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("sidebar").innerHTML = data;
      initSidebar();
    });

});