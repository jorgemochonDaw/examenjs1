import {
    min,
    h,
    reset,
  } from "./../selectores/selectores.js";
  
  export function iniciarCronometro(e) {
    e.preventDefault();
    reset.disabled = true;
    if (h.textContent == "02" && min.textContent == "00") {
      h.textContent = "01";
      min.textContent = "59";
      let contador = setInterval(() => {
        let decreMin = parseInt(min.textContent--);
        if (decreMin == 1) {
          clearInterval(contador);
          h.textContent = "0";
          min.textContent = "59";
          let final = setInterval(() => {
            let decreMin = parseInt(min.textContent--);
            if (decreMin == 1) {
              clearInterval(final);
              h.textContent = "00";
              min.textContent = "00";
              reset.disabled = false;
            }
          }, 1000);
        }
      }, 1000);
    }
  }
  
  export function resetear(e) {
    e.preventDefault();
    h.textContent = "02";
    min.textContent = "00";
  }
  