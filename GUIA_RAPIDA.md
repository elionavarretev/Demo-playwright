# 🚀 Guía Rápida - Prueba del Menú SEO en Guru99

Este documento te guiará paso a paso para ejecutar la prueba automatizada del menú SEO en el sitio de Guru99.

## 📋 Pre-requisitos

Asegúrate de tener instalado:
- Node.js (versión 14 o superior)
- npm (viene con Node.js)

## 🛠️ Instalación

### 1. Instalar dependencias
```bash
npm install
```

### 2. Instalar navegadores de Playwright
```bash
npx playwright install
```

## ▶️ Ejecutar las Pruebas

### Ejecutar la prueba del menú SEO (recomendado para empezar)
```bash
npm run test:seo
```

### Ejecutar con interfaz gráfica (ver el navegador en acción)
```bash
npm run test:headed
```

### Ejecutar en modo UI interactivo
```bash
npm run test:ui
```

### Ejecutar todas las pruebas
```bash
npm test
```

## 📝 ¿Qué hace cada archivo de prueba?

### `tests/ejemplo-seo.spec.js` ⭐ (Recomendado para empezar)
Pruebas simples y bien comentadas que:
- Hacen clic en el menú SEO
- Navegan a Page-1
- Recorren todas las páginas del menú SEO (Page-1 a Page-6)
- Capturan screenshots de cada página

**Ejecutar:**
```bash
npx playwright test ejemplo-seo.spec.js
```

### `tests/seo-menu.spec.js`
Pruebas más completas que verifican:
- Visibilidad del menú SEO
- Estructura del submenú
- Navegación entre páginas
- Validaciones múltiples

**Ejecutar:**
```bash
npx playwright test seo-menu.spec.js
```

### `tests/advanced-tests.spec.js`
Pruebas avanzadas del sitio completo:
- Pruebas del flujo completo
- Verificación de formularios
- Pruebas de navegación
- Pruebas de accesibilidad básica

**Ejecutar:**
```bash
npx playwright test advanced-tests.spec.js
```

## 📸 Screenshots

Los screenshots se guardan automáticamente en la carpeta `screenshots/`:
- `menu-seo-click.png` - Menú SEO después del clic
- `seo-page-1.png` - Captura de SEO Page-1
- `seo-page-2.png` hasta `seo-page-6.png` - Capturas de cada página

## 🎨 Generar Código Automáticamente

Playwright puede generar código automáticamente mientras navegas:

```bash
# Generar código mientras navegas
npm run codegen

# Generar código específicamente para Guru99
npm run codegen:guru99
```

Esto abrirá un navegador y un editor donde verás el código generado en tiempo real según las acciones que realices en el navegador.

## 📊 Ver Reportes

Después de ejecutar las pruebas, puedes ver un reporte detallado:

```bash
npm run test:report
```

Esto abrirá un reporte HTML en tu navegador con:
- ✅ Pruebas exitosas
- ❌ Pruebas fallidas
- 📸 Screenshots
- 🎥 Videos (si están habilitados)
- ⏱️ Tiempos de ejecución

## 🐛 Depuración

Para depurar una prueba paso a paso:

```bash
npm run test:debug
```

Esto abrirá el inspector de Playwright donde puedes:
- Ejecutar la prueba paso a paso
- Ver el estado de la página en cada paso
- Inspeccionar selectores
- Ver logs de consola

## 💡 Consejos

1. **Primera vez:** Ejecuta `npm run test:headed` para ver el navegador en acción
2. **Problemas:** Si las pruebas fallan, revisa los screenshots en la carpeta `screenshots/`
3. **Aprender:** Usa `npm run codegen:guru99` para ver cómo Playwright genera el código
4. **Reportes:** Siempre revisa el reporte HTML después de las pruebas

## 🔗 Sitio de Prueba

URL: https://demo.guru99.com/test/newtours/index.php

Este es un sitio de demostración público de Guru99 diseñado específicamente para practicar automatización de pruebas.

## ❓ Solución de Problemas

### Error: "browserType.launch"
```bash
npx playwright install
```

### Error: "Cannot find module @playwright/test"
```bash
npm install
```

### Las pruebas son muy lentas
Ejecuta en modo headless (sin interfaz gráfica):
```bash
npm test
```

### Quiero ejecutar solo una prueba específica
```bash
npx playwright test --grep "nombre de la prueba"
```

Por ejemplo:
```bash
npx playwright test --grep "Click en menú SEO"
```

## 📚 Recursos Adicionales

- [Documentación oficial de Playwright](https://playwright.dev/)
- [Selectores en Playwright](https://playwright.dev/docs/selectors)
- [Mejores prácticas](https://playwright.dev/docs/best-practices)

---

**¡Listo para empezar!** 🎉

Ejecuta tu primera prueba:
```bash
npm run test:seo
```

