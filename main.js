
const nav = () =>{ 
    const links = document.querySelector(".nav-links");
    const menu = document.querySelector(".menu");
    const navlinks = document.querySelectorAll(".nav-links li");
    menu.addEventListener("click",()=>{ 
        links.classList.toggle("active");
        navlinks.forEach((link,index)=>{ 
            if(link.style.animation){ 
                link.style.animation = "";
            }
            else { 
                link.style.animation = `navanim 0.5s ease forwards ${index / 7 + 0.01}s`;
            }
        });
        menu.classList.toggle("toggle");
    });
}
nav();
const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})