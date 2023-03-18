var indiceActual = 0;

function anteriorContenido() {
  var contenedores = document.querySelectorAll("[id^='contenido']");
  contenedores[indiceActual].style.display = "none";
  indiceActual = (indiceActual - 1 + contenedores.length) % contenedores.length;
  contenedores[indiceActual].style.display = "block";
}

function siguienteContenido() {
  var contenedores = document.querySelectorAll("[id^='contenido']");
  contenedores[indiceActual].style.display = "none";
  indiceActual = (indiceActual + 1) % contenedores.length;
  contenedores[indiceActual].style.display = "block";
}




window.onload = function() {
  // Asignar los elementos HTML a variables
  var alex = document.getElementById("personaje-alex");
  var red = document.getElementById("personaje-red");
  var rodri = document.getElementById("personaje-rodri");
  var no3 = document.getElementsByClassName("no3")[0];
  var no4 = document.getElementsByClassName("no4")[0];
  var no5 = document.getElementsByClassName("no5")[0];

  // Ocultar el contenedor de Red y Rodri cuando se pasa el cursor sobre el de Alex
  alex.addEventListener("mouseover", function() {
    red.style.display = "none";
    rodri.style.display = "none";
  });

  // Mostrar el contenedor de Red y Rodri cuando se aleja el cursor del de Alex
  alex.addEventListener("mouseout", function() {
    red.style.display = "inline-block";
    rodri.style.display = "inline-block";
  });

  // Ocultar el contenedor de Alex y Rodri cuando se pasa el cursor sobre el de Red
  red.addEventListener("mouseover", function() {
    alex.style.display = "none";
    rodri.style.display = "none";
  });

  // Mostrar el contenedor de Alex y Rodri cuando se aleja el cursor del de Red
  red.addEventListener("mouseout", function() {
    alex.style.display = "inline-block";
    rodri.style.display = "inline-block";
  });

  // Ocultar el contenedor de Alex y Red cuando se pasa el cursor sobre el de Rodri
  rodri.addEventListener("mouseover", function() {
    alex.style.display = "none";
    red.style.display = "none";
  });

  // Mostrar el contenedor de Alex y Red cuando se aleja el cursor del de Rodri
  rodri.addEventListener("mouseout", function() {
    alex.style.display = "inline-block";
    red.style.display = "inline-block";
  });
  // ////////////////////////////////////////////////////////////
  // Ocultar el elemento .no4 y .no5 cuando se pasa el cursor sobre Alex
  alex.addEventListener("mouseover", function() {
    no4.style.display = "none";
    no5.style.display = "none";
    no3.style.display = "none";
  });

  // Mostrar el elemento .no4 y .no5 cuando se aleja el cursor de Alex
  alex.addEventListener("mouseout", function() {
    no4.style.display = "block";
    no5.style.display = "block";
  });

  // Ocultar el elemento .no3 y .no5 cuando se pasa el cursor sobre Red
  red.addEventListener("mouseover", function() {
    no3.style.display = "none";
    no5.style.display = "none";
  });

  // Mostrar el elemento .no3 y .no5 cuando se aleja el cursor de Red
  red.addEventListener("mouseout", function() {
    no3.style.display = "block";
    no5.style.display = "block";
  });

  // Ocultar el elemento .no3 y .no4 cuando se pasa el cursor sobre Rodri
  rodri.addEventListener("mouseover", function() {
    no3.style.display = "none";
    no4.style.display = "none";
  });

  // Mostrar el elemento .no3 y .no4 cuando se aleja el cursor de Rodri
  rodri.addEventListener("mouseout", function() {
    no3.style.display = "block";
    no4.style.display = "block";
  });
}












  
