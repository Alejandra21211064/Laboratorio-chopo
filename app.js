class Componente {
    constructor(nombre, costo = 0) {
        this.nombre = nombre;
        this.costo = costo;
        this.hijos = [];
    }
    agregarHijo(componente) {
        throw new Error("Método no implementado");
    }
    obtenerCosto() {
        return this.costo;
    }
    mostrar(profundidad = 0) {
        const div = document.createElement('div');
        div.className = 'item-orden';
        div.style.marginLeft = `${profundidad * 20}px`;
        return div;
    }
}
class PruebaIndividual extends Componente {
    constructor(nombre, costo) {
        super(nombre, costo);
    }
    mostrar(profundidad = 0) {
        const div = super.mostrar(profundidad);
        div.innerHTML = `${this.nombre} - $${this.costo}`;
        return div;
    }
}
class PaquetePruebas extends Componente {
    constructor(nombre) {
        super(nombre);
    }
    agregarHijo(componente) {
        this.hijos.push(componente);
    }
    obtenerCosto() {
        return this.hijos.reduce((total, hijo) => total + hijo.obtenerCosto(), 0);
    }
    mostrar(profundidad = 0) {
        const div = super.mostrar(profundidad);
        div.innerHTML = ` ${this.nombre} (Total: $${this.obtenerCosto()})`;
        this.hijos.forEach(hijo => {
            div.appendChild(hijo.mostrar(profundidad + 1));
        });
        return div;
    }
}
module.exports = { Componente, PruebaIndividual, PaquetePruebas };
        // Crear catálogo
        const catalogo = (() => {
            const crearCatalogo = () => {
                const catalogo = new PaquetePruebas("Paquetes Principales");

                const perfilBasico = new PaquetePruebas("Perfil Básico");
             

                const perfilPremium = new PaquetePruebas("Perfil Premium");
                perfilPremium.agregarHijo(perfilBasico);
                perfilPremium.agregarHijo(new PruebaIndividual("Perfil Tiroideo", 600));
                perfilPremium.agregarHijo(new PruebaIndividual("Prueba de VIH", 450));

                const embarazo = new PaquetePruebas("Control de Embarazo");
                embarazo.agregarHijo(new PruebaIndividual("Ultrasonido Obstétrico", 850));

                catalogo.agregarHijo(perfilBasico);
                catalogo.agregarHijo(perfilPremium);
                catalogo.agregarHijo(embarazo);
                catalogo.agregarHijo(new PruebaIndividual("Prueba COVID-19", 1000));
                catalogo.agregarHijo(new PruebaIndividual("Perfil Renal", 500));

                return catalogo;
            };

            return crearCatalogo();
        })();

        let ordenActual = new PaquetePruebas("Mi Orden");

        // Funciones
        function mostrarCatalogo() {
            document.getElementById('menuPrincipal').style.display = 'none';
            document.getElementById('catalogo').style.display = 'block';
            const lista = document.getElementById('listaCatalogo');
            lista.innerHTML = '';
            
            const todosComponentes = [];
            obtenerTodosComponentes(catalogo, todosComponentes);
            
            todosComponentes.forEach((componente, index) => {
                const btn = document.createElement('button');
                btn.innerHTML = `${componente.nombre} - $${componente.obtenerCosto()}`;
                btn.onclick = () => {
                    ordenActual.agregarHijo(componente);
                    alert(`${componente.nombre} agregado a la orden!`);
                };
                lista.appendChild(btn);
            });
        }

        function obtenerTodosComponentes(componente, lista) {
            lista.push(componente);
            if (componente.hijos) {
                componente.hijos.forEach(hijo => obtenerTodosComponentes(hijo, lista));
            }
        }

        function mostrarOrden() {
            document.getElementById('menuPrincipal').style.display = 'none';
            document.getElementById('orden').style.display = 'block';
            const detalle = document.getElementById('detalleOrden');
            detalle.innerHTML = '';
            detalle.appendChild(ordenActual.mostrar());
            detalle.innerHTML += `<h3>Total: $${ordenActual.obtenerCosto()}</h3>`;
        }

        function generarTicket() {
            document.getElementById('menuPrincipal').style.display = 'none';
            document.getElementById('ticket').style.display = 'block';
            const detalle = document.getElementById('detalleTicket');
            detalle.innerHTML = `
                <p>Fecha: ${new Date().toLocaleString()}</p>
                <h3>Estudios solicitados:</h3>
            `;
            detalle.appendChild(ordenActual.mostrar());
            detalle.innerHTML += `
                <h3>Total: $${ordenActual.obtenerCosto()}</h3>
                <h4>Información importante:</h4>
                <ul>
                    <li>Presentarse en ayuno de 8 horas</li>
                    <li>Traer identificación oficial</li>
                    <li>Resultados en 24-48 horas</li>
                </ul>
                <p>Teléfono: 55 1234 5678</p>
            `;
        }

        function ocultarCatalogo() {
            document.getElementById('catalogo').style.display = 'none';
            document.getElementById('menuPrincipal').style.display = 'block';
        }

        function ocultarOrden() {
            document.getElementById('orden').style.display = 'none';
            document.getElementById('menuPrincipal').style.display = 'block';
        }
