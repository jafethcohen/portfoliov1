let menuVisible = false;
function mostraryocultarmenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible= true;
    }
}

function seleccionar(){
    //oculta el hamburger cuando este seleccionado
    document.getElementById("nav").classList = "";
    menuVisible=false;
}
function animacion(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight  - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("HTML");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("photo");
        habilidades[4].classList.add("ai");
        habilidades[5].classList.add("com");
        habilidades[6].classList.add("tw");
        habilidades[7].classList.add("creativity");
        habilidades[8].classList.add("performance");
        habilidades[9].classList.add("pm");
    }
}
//animaciones auto con el scrpll
window.onscroll = function(){
    animacion()
}