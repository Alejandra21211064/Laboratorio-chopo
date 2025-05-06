# Laboratorio Chopo - Sistema de Órdenes Médicas

## 📖 Introducción

Este proyecto es una aplicación web sencilla para la gestión de órdenes médicas en un laboratorio de análisis clínicos.  
Permite consultar un catálogo de pruebas, armar órdenes y generar tickets oficiales.

## ⚙️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Alejandra21211064/Laboratorio-chopo.git
   cd Laboratorio-chopo
Instalar dependencias:
npm install
(Opcional) Correr un servidor local para ver index.html.

## 🖥️ Uso básico
Desde el menú principal puedes:
Ver el Catálogo de pruebas.
Agregar pruebas a tu Orden Actual.
Generar Ticket de estudios realizados.
Al generar el ticket recibirás un aviso de éxito (alert) y verás las instrucciones importantes para el paciente.

## 🔎 Ejecución de Pruebas
Para ejecutar las pruebas unitarias:
npm test
Se correrán automáticamente todas las pruebas definidas en la carpeta __tests__.

## 🛡️ Integración Continua
Este proyecto utiliza GitHub Actions para:
Correr pruebas automáticas en cada Push y Pull Request.
Analizar la calidad de código automáticamente usando SonarCloud.

## 📊 Calidad del Código
El análisis estático es realizado por SonarCloud, detectando:
Cobertura de código.
Errores potenciales.
Código duplicado.
Vulnerabilidades.

#### Puedes consultar el reporte en el panel de SonarCloud vinculado al repositorio.

## 🚀 Tecnologías usadas
HTML5

CSS3

JavaScript (ES6+)

Node.js + Jest

GitHub Actions

SonarCloud

# 📊 Informe de Métricas de Calidad

## Revisión en SonarCloud

- **Fiabilidad:** A (1 issue leve)
- **Seguridad:** A (1 issue leve)
- **Revisión de Seguridad:** > 80%
- **Cobertura de Código:** < 30%
- **Duplicaciones:** < 3%
- **Tamaño del Código:** < 1k líneas

## Análisis

- El proyecto mantiene un **alto nivel de fiabilidad y seguridad**, con calificación A.
- No existen problemas graves de vulnerabilidades o errores críticos.
- La **duplicación de código es mínima**, manteniéndose bajo estándares óptimos (< 3%).

## Áreas de mejora

- **Cobertura de código**: Actualmente es inferior al 30%.  
  Se sugiere agregar más pruebas unitarias para cubrir más funciones y casos de uso, especialmente en métodos de interfaz de usuario (DOM).

## Acciones Correctivas

- Añadir más pruebas en componentes interactivos.
- Mejorar los casos de prueba de paquetes y funciones de ticket.

## Conclusión

Las métricas indican que el sistema es **estable, seguro** y con **buena calidad de código**.  
Sólo se recomienda **incrementar la cobertura de pruebas** para garantizar una mayor robustez a largo plazo.

