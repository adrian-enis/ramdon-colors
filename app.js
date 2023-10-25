const boton = document.querySelector("button")
const colorTexto = document.getElementById("color")

/* Generar Colores Aleatorios */

const generarColorHexAleatorio = () => {
  let digitos = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16);
    color += digitos[indiceAleatorio]
  }

  return color
}

boton.addEventListener("click", function(){
  let colorAleatorio = generarColorHexAleatorio();
  //actualizar texto
  color.textContent = colorAleatorio;
  //actualizar color de fondo
  document.body.style.backgroundColor = colorAleatorio
  boton.style.backgroundColor = colorAleatorio;
  boton.style.borderColor = colorAleatorio;
} )