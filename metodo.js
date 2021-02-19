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

            alert("claves correctas")
            let respuesta = "claves correctas"
            return respuesta

       
    } else {

            alert("colocaste la clave indicada mal")
            let respuesta = "colocaste la clave indicada mal"
            metodos.prototype.validarClave;
            return respuesta
            

        }
    }

}