import {
  nombre,
  altura,
  dni,
  edad,
  email,
  r1,
  r2,
  r3,
  r4,
  r5,
} from "./../selectores/selectores.js";
import { insertarTabla } from "./ejercicio3.js";

let error = false;
export function validarForm(e) {
  e.preventDefault();
  const validarNombre = /[a-zA-Z ]/;
  let isCorrectNombre = validarNombre.test(nombre.value);
  if (isCorrectNombre == false) {
    alert("Nombre mal escrito");
    error = true;
  } else {
    r1.textContent = nombre.value;
  }

  if (edad.value >= 18 && edad.value <= 35) {
    r2.textContent = edad.value;
  } else {
    alert("Edad incorrecta");
    error = true;
  }

  if (altura.value >= 1.5 && altura.value <= 2.1) {
    r3.textContent = altura.value;
  } else {
    alert("Altura incorrecta");
    error = true;
  }

  const validarDni = /\d{8}[A-Z]$/;
  let isCorrectDni = validarDni.test(dni.value);
  if (isCorrectDni == false) {
    alert("DNi mal escrito");
    error = true;
  } else {
    r4.textContent = dni.value;
  }

  const validarCorreo =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isCorreo = validarCorreo.test(email.value);
  if (isCorreo == false) {
    alert("Correo mal escrito");
    error = true;
  } else {
    r5.textContent = email.value;
  }

  if (error == false) {
    insertarTabla(nombre.value, edad.value, altura.value, dni.value, email.value);
  } else {
      alert('No se pudo enviar los datos a la tabla');
  }
}
