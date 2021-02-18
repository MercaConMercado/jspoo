/**
 * CLASE datos
 * @type {{usuario: string,clave1: string, clave1: string}}
 * @param {string}
 */

class datos {
    constructor(usuariox, clave1x, clave2x) {
        this.usuariox = usuariox;
        this.clave1x = clave1x;
        this.clave2x = clave2x;

    }

}

/**
* metodo metodos 
* @returns {void}
*/
class metodos {
    validarClave() {
        if (clave1 === clave2) {

            alert("claves correctas")
            let respuesta = "claves correctas"
            return respuesta

        } else {

            alert("colocaste la clave indicada mal")
            let respuesta = "colocaste la clave indicada mal"
            return respuesta
        }
    }

}

// UI
usuario = prompt('usuario')
clave1 = prompt('clave1')
clave2 = prompt('clave2')

//setear clase de (datos) con contrusctor de los datos
const Objeto = new datos(usuario, clave1, clave1)
console.log(Objeto)

//setear clase de (metodos) con metodo (validarClave()
let vali = metodos.prototype.validarClave(toString.respuesta)
console.log(vali)
