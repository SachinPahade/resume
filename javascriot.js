console.log("object");

let header = document.querySelector(".horisontal_heading");
let links = document.querySelector(".horisontal_heading");
let sections = document.querySelector(".sections");

window.onscroll = function () {
  if (window.pageYOffset > header.offsetHeight) {
    header.style.background = "rgb(0,0,0,0.5)";
    }
  else {
      header.style.background = "black"
    }
    let current = "education";
    sections.forEach((sections) => {
        const sectionsTop = sections.offsetTop;
        if (pageYOffset >= sectionsTop - 60) {
            current = sections.getAttribute("id")
        }
    })
    links.forEach(item){
        item.classList.remove("active");
        if (item.href.includes(current)) {
            item.classList.add("active")
        }
        else {
            item.classList.remove("active")
        }
    }
};
