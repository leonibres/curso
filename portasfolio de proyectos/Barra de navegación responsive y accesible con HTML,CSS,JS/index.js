const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () =>{
  navMenu.classList.toggle("nav-menu_visible");

  // vamos hace que nuestra pagina sea accesible a las personas con discapacidad visual
  if(navMenu.classList.contains("nav-menu-visible")){
    navToggle.setAttribute("aria-label", "Cerrar menu");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menu");
  }
});
