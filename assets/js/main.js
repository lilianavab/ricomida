$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente!");
    });
});

$("h2").on("dblclick", function() {
    $(this).css({
            "color": "red",
            "font-size": "1.5rem"
    });
});

var texto = document.getElementById("texto");
texto.style.fontsize = "24px";
texto.style.color = "#FFFFFF";
texto.style.fontFamily = "Lobster"

var footer = document.getElementById("footer");
footer.style.fontsize = "24px";
footer.style.color = "#FFFFFF";
footer.style.fontFamily = "Lobster";
footer.style.textAlign = "center";








var suscribete = document.getElementById("suscribete");
suscribete.style.color = "#FFFFFF";
suscribete.style.textAlign = "center";

var suscribetee = document.getElementById("suscribetee");
suscribetee.style.fontFamily = "Cabin-Bold";









var obten = document.getElementById("obten");
obten.style.fontFamily = "Lobster-Regular";

var rico = document.getElementById("rico");
rico.style.fontFamily = "Lobster";

$('.card-title').click(function(){
    $('.recetas-relacionadas p').toggle("hide");
})

