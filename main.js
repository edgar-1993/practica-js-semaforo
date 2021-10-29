//semaforo

//capturar boton por su id

//manejo el evento = creamos una funcion que responda al avento(modifica el estado del semaforo)

//funcion que maneja el color del semaforo

//manejamos el estado del semaforo con switch

//funcion que maneja el color del semaforo (id,prendido(boolean))

let cambiarLuz = (id, prendido) => {
    let div = document.querySelector(`#${id}`)
    //console.log(div);
    /*  if(prendido) {
          div.style.backgroundColor = id; 
      }else{
          div.style.backgroundColor = 'gray';
      } */
    div.style.backgroundColor = prendido ? id : 'gray';
}

//cambiarLuz('red',true);

let nuevoEstado = 0;

let cambioEstado = () => {
    switch (nuevoEstado) {
        case 0:
            cambiarLuz('green',false);
            cambiarLuz('red',true);
            nuevoEstado++;

            break;
        case 1:
            cambiarLuz('yellow',true);
            cambiarLuz('red',false);
            nuevoEstado++;
            break;
        case 2:
            cambiarLuz('red',false);
            cambiarLuz('yellow',false);
            cambiarLuz('green',true);
            nuevoEstado++;
          //nuevoEstado = 0; reseteo contador
            break;
        default:
            console.log("error en el switch manejo de estado")
            break;
    }
    //reseteo contador
    if (nuevoEstado > 2) nuevoEstado = 0;
    console.log(nuevoEstado);
}

const btn = document.querySelector(`#boton`)
console.log(btn);
btn.addEventListener('click', cambioEstado)