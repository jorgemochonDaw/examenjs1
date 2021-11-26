import { tbody } from "./../selectores/selectores.js";

export function insertarTabla(nombre, edad, altura, dni, email, d) {
  if (d == "editar") {
    console.log("s");
  } else {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");

    const i1 = document.createElement("input");
    const i2 = document.createElement("input");
    const i3 = document.createElement("input");
    const i4 = document.createElement("input");
    const i5 = document.createElement("input");
    const i6 = document.createElement("input");

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    td1.appendChild(i1);
    td2.appendChild(i2);
    td3.appendChild(i3);
    td4.appendChild(i4);
    td5.appendChild(i5);

    i1.value = nombre;
    i2.value = edad;
    i3.value = altura;
    i4.value = dni;
    i5.value = email;

    i1.disabled = true;
    i2.disabled = true;
    i3.disabled = true;
    i4.disabled = true;
    i5.disabled = true;
  }
}
export function eliminarFila() {
  tbody.textContent = "";
}

export function editarFila(d) {
  d = 'editar';
  insertarTabla(d);
}
