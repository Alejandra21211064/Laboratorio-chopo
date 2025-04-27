const { Componente, PruebaIndividual, PaquetePruebas } = require('../app');

// 1. Crear una prueba individual y validar sus datos
test('Crear PruebaIndividual con nombre y costo correctos', () => {
  const prueba = new PruebaIndividual('Perfil Tiroideo', 600);
  expect(prueba.nombre).toBe('Perfil Tiroideo');
  expect(prueba.obtenerCosto()).toBe(600);
});

// 2. Verificar que un Paquete vacío tiene costo 0
test('Costo de Paquete vacío debe ser 0', () => {
  const paquete = new PaquetePruebas('Paquete Vacío');
  expect(paquete.obtenerCosto()).toBe(0);
});

// 3. Agregar hijo a un Paquete y validar que se agrega
test('Agregar hijo a PaquetePruebas', () => {
  const paquete = new PaquetePruebas('Paquete Control');
  const prueba = new PruebaIndividual('Prueba de VIH', 450);
  paquete.agregarHijo(prueba);
  expect(paquete.hijos.length).toBe(1);
  expect(paquete.hijos[0].nombre).toBe('Prueba de VIH');
});

// 4. Calcular costo total de un Paquete con varios hijos
test('Calcular costo total de PaquetePruebas', () => {
  const paquete = new PaquetePruebas('Paquete Premium');
  paquete.agregarHijo(new PruebaIndividual('Perfil Tiroideo', 600));
  paquete.agregarHijo(new PruebaIndividual('Prueba de VIH', 450));
  expect(paquete.obtenerCosto()).toBe(1050);
});

// 5. Validar que el método mostrar() genera contenido HTML correcto
test('Método mostrar() de PruebaIndividual genera contenido correcto', () => {
  const prueba = new PruebaIndividual('Prueba COVID-19', 700);
  const div = prueba.mostrar();
  expect(div.innerHTML).toContain('Prueba COVID-19');
  expect(div.innerHTML).toContain('700');
});
