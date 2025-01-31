// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = () => {
  let nombre = document.getElementById("amigo").value;
  if (nombre == "") {
    // alert('Debe ingresar un nombre');
    snackbar("Debe ingresar un nombre");
    return;
  }
  amigos.push(nombre);
  mostrarAmigos();
  document.getElementById("amigo").value = "";
  console.log(nombre);
};

const mostrarAmigos = () => {
  let amigosList = document.getElementById("listaAmigos");
  amigosList.innerHTML = "";
  amigos.forEach((amigo) => {
    amigosList.innerHTML += `<li>${amigo}</li>`;
  });
};

const sortearAmigo = () => {
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").innerHTML = amigoSorteado;
};

const snackbar = (mensaje) => {
  let snackbarElement = document.getElementById("snackbar");
  snackbarElement.className = "show";
  snackbarElement.innerHTML = mensaje;
  setTimeout(function () {
    snackbarElement.className = snackbarElement.className.replace("show", "");
  }, 3000);
};
