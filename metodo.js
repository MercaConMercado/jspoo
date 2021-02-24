/**
 * Exportar atributos/propiedades de UI para que interactue con los Metodos/Operaciones
 */

import { clave1, clave2 } from "./index.js";

/**
* Metodos/Operaciones metodo 
* @type {validarClave()}
* @returns {alert,respuesta}
* 
*/
export class metodos {
    validarClave() {
        if (clave1 == clave2) {

            alert("las Claves coinciden Correctamente")
            let respuesta = "las Claves coinciden Correctamente"
            return respuesta

       
    } else {

            alert("las Claves NO coinciden")
            let respuesta = "las Claves NO coinciden"
            metodos.prototype.validarClave;
            return respuesta
            

        }
    }

}