# 📋 Gestión de Riesgos - Laboratorio Chopo

## Identificación de Riesgos

| Riesgo | Tipo |
|:---|:---|
| Fallos en el flujo de GitHub Actions | Técnico |
| Cobertura de pruebas insuficiente | Calidad |
| Errores en integración de ramas | Gestión de configuración |
| Cambios de requisitos de último momento | Gestión de proyecto |
| Desactualización de dependencias (npm) | Mantenimiento técnico |

---

## Evaluación de Riesgos

| Riesgo | Probabilidad | Impacto | Riesgo Total (P x I) |
|:---|:---|:---|:---|
| Fallos en Actions | Alta (4) | Alto (5) | 20 |
| Cobertura insuficiente | Media (3) | Media (3) | 9 |
| Errores en merges | Media (3) | Alta (4) | 12 |
| Cambios de requisitos | Baja (2) | Alta (4) | 8 |
| Dependencias desactualizadas | Media (3) | Media (3) | 9 |

---

## Planes de Mitigación

- **Fallos en Actions**: Monitorear cada ejecución de Actions y corregir errores inmediatamente.
- **Cobertura insuficiente**: Agregar nuevos casos de prueba regularmente.
- **Errores en merges**: Aplicar revisiones estrictas en Pull Requests.
- **Cambios de requisitos**: Documentar todos los cambios y actualizaciones en issues.
- **Dependencias npm**: Realizar actualizaciones programadas y verificar compatibilidad.

---

## Conclusión

Se identificaron y evaluaron los principales riesgos del proyecto, proponiendo acciones correctivas para mitigar su impacto y garantizar la calidad y continuidad del desarrollo.
