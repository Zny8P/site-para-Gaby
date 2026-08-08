const buttonContainer0 = document.getElementById("buttonContainer0");
const button0 = document.getElementById("button0");


button0.onclick = function() {
    button0.classList.toggle("noite");
    button0.classList.toggle("dia");

    if(button0.classList.contains("noite")){
        buttonContainer0.classList.add("sol_lua");
        button0.innerHTML = "🌙";
    }else{
        button0.innerHTML = "☀️";
        buttonContainer0.classList.add("lua_sol");
    }
};
buttonContainer0.addEventListener("animationend", function() {
    buttonContainer0.classList.remove("sol_lua");
    buttonContainer0.classList.remove("lua_sol");

    buttonContainer0.classList.toggle("dia");
    buttonContainer0.classList.toggle("noite");


    if(button0.classList.contains("noite")){
        buttonContainer0.classList.add("noite");
        buttonContainer0.classList.remove("dia");
    }else{
        buttonContainer0.classList.add("dia");
        buttonContainer0.classList.remove("noite");
    }

});