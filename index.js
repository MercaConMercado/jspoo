/**
 * DEFINIT ATRIBUTOS UI
 */

let usuario = prompt('Escribe tu usuario')
export let clave1 = prompt('Escribe tu clave')
export let clave2 = prompt('Confirma tu tu clave')

/**
 * SETEAR clase de (datos) con contrusctor de los datos apartir de UI
 */
import { datos } from "./datos.js";

/**
 * INICIALIZAR clase de (datos) con contrusctor de los datos apartir de UI
 */
const Objeto = new datos(usuario, clave1, clave2)
console.log(Objeto)

/**
 * SETEAR clase de (metodos) con metodo (validarClave() para las operaciones
 */
import { metodos } from "./metodo.js";

//inicializar clase de (metodos) con metodo (validarClave() para las operaciones
let vali = metodos.prototype.validarClave(toString.respuesta)
console.log(vali)
