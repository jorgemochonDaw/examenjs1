import { iniciarCronometro, resetear } from "../funciones/ejercicio1.js";
import { validarForm } from "../funciones/ejercicio2.js";
import {
  editarFila,
  eliminarFila,
} from "../funciones/ejercicio3.js";
import {
  btnEditar,
  btnEliminar,
  cronometro,
  reset,
  validar,
} from "./../selectores/selectores.js";

class Examen {
  constructor() {
    this.event();
  }

  event() {
    cronometro.addEventListener("click", iniciarCronometro);
    reset.addEventListener("click", resetear);
    validar.addEventListener("click", validarForm);
    btnEliminar.addEventListener("click", eliminarFila);
    btnEditar.addEventListener("click", editarFila);
  }
}

export default Examen;
