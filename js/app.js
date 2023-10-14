// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});


let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');
  if (themeToggler.classList.contains('fa-sun')) {
    document.querySelector('body').classList.add('active');
    document.getElementsByClassName("footer")[0].classList.add('active');
    document.getElementsByClassName("hero-banner")[0].classList.add('active');
    document.getElementsByClassName("tour-btn")[0].classList.add('active');
    document.getElementsByClassName("btn-submit")[0].classList.add('active');
    document.getElementsByClassName("contact-title")[0].classList.add('active');
    document.querySelector('.nav-logo #back-text').classList.add('active');
  } else {
    document.querySelector('body').classList.remove('active');
    document.getElementsByClassName("footer")[0].classList.remove('active');
    document.getElementsByClassName("hero-banner")[0].classList.remove('active');
    document.getElementsByClassName("tour-btn")[0].classList.remove('active');
    document.getElementsByClassName("btn-submit")[0].classList.remove('active');
    document.getElementsByClassName("contact-title")[0].classList.remove('active');
    document.querySelector('.nav-logo #back-text').classList.remove('active');
  }
}