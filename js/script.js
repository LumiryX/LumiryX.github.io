function toggleTheme(){
document.body.classList.toggle("light");
}

function toggleMenu(){
document.getElementById("sidebar").classList.toggle("active");
}

const sections = document.querySelectorAll('.section-title');
sections.forEach(title => {
  title.addEventListener('click', () => {
    const section = title.parentElement;
    section.classList.toggle('open');
  });
});

