const buttonContainer0 = document.getElementById("buttonContainer0");
const button0 = document.getElementById("button0");
let indoParaNoite = false

let inicio = null;
function animarSol_lua(tempo){
    if(inicio === null) inicio = tempo;

    let progress = (tempo - inicio) / 1000;
    if (progress > 1) progress = 1;

    let x = progress
    let y = -4*x*x + 4*x 

    let distanciax = window.innerWidth * 0.83;
    let alturaArco = window.innerHeight * 0.30;

    let deslocamentox = 0;
    let deslocamentoy = 0;

    if (indoParaNoite){        
        distanciax =  window.innerWidth * 0.83;
        alturaArco = window.innerHeight * 0.30;

        deslocamentox = distanciax * x
        deslocamentoy = -alturaArco * y    
    }else{        
        deslocamentox = -distanciax * x
        deslocamentoy = alturaArco * y    
    };

    buttonContainer0.style.transform =
    `translate(${deslocamentox}px, ${deslocamentoy}px)`;

    if(progress < 1){
        requestAnimationFrame(animarSol_lua);
    }else{
        inicio = null

        if(indoParaNoite){
            button0.classList.remove("day");
            buttonContainer0.classList.remove("day");
            button0.classList.add("night");
            buttonContainer0.classList.add("night");
        }else{
            button0.classList.remove("night");
            buttonContainer0.classList.remove("night");
            button0.classList.add("day");
            buttonContainer0.classList.add("day");
        }

        buttonContainer0.style.transform = "translate(0px, 0px)";
    }
}

button0.onclick = function() {

    indoParaNoite = button0.classList.contains("day")
    // alert(indoParaNoite)

    if(indoParaNoite){
        button0.innerHTML = "🌙";
    }else{
        button0.innerHTML = "☀️";
    }
    requestAnimationFrame(animarSol_lua);
};
