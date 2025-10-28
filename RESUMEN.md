# 🎯 Resumen del Proyecto - Pruebas Automatizadas con Playwright

## 📁 Estructura del Proyecto

```
demo-playwright/
├── tests/
│   ├── ejemplo-seo.spec.js           ⭐ EMPEZAR AQUÍ
│   ├── seo-menu.spec.js              Pruebas completas del menú SEO
│   ├── advanced-tests.spec.js        Pruebas avanzadas del sitio
│   └── tecnicas-avanzadas.spec.js    Ejemplos de técnicas de automatización
├── screenshots/                       Screenshots generados automáticamente
├── playwright.config.js               Configuración de Playwright
├── package.json                       Dependencias y scripts
├── GUIA_RAPIDA.md                     Guía paso a paso
└── README.md                          Documentación completa
```

## 🚀 Inicio Rápido

### 1️⃣ Instalar dependencias
```bash
npm install
npx playwright install
```

### 2️⃣ Ejecutar tu primera prueba
```bash
# Ver el navegador en acción
npm run test:ejemplo -- --headed
```

### 3️⃣ Ver resultados
Los screenshots se guardan automáticamente en la carpeta `screenshots/`

## 📝 Archivos de Prueba Creados

### 🌟 ejemplo-seo.spec.js (Recomendado para empezar)
**Qué hace:**
- ✅ Click en el menú SEO
- ✅ Navegación a Page-1
- ✅ Recorre todas las páginas SEO (Page-1 a Page-6)
- ✅ Captura screenshots de cada paso

**Comandos:**
```bash
# Ejecutar con navegador visible
npm run test:ejemplo -- --headed

# Ejecutar en modo headless (sin ventana)
npm run test:ejemplo

# Ejecutar en modo debug
npx playwright test ejemplo-seo.spec.js --debug
```

**Salida esperada:**
```
Paso 1: Navegando a la página de Guru99...
Paso 2: Esperando a que la página cargue...
Paso 3: Haciendo clic en el menú SEO...
Paso 4: Verificando que el submenú SEO está visible...
Paso 5: Capturando screenshot...
✅ ¡Prueba completada exitosamente!
```

### 📋 seo-menu.spec.js
**Qué hace:**
- ✅ Verifica visibilidad del menú SEO
- ✅ Valida estructura del submenú
- ✅ Navega a todas las páginas SEO
- ✅ Verifica todos los menús principales

**Comandos:**
```bash
npm run test:seo
npm run test:seo -- --headed
```

**Pruebas incluidas:**
1. Verificar que el menú SEO está visible
2. Hacer clic en el menú SEO y verificar submenú
3. Navegar a SEO Page-1
4. Navegar a todas las páginas del menú SEO
5. Verificar estructura del menú completo
6. Interacción completa con el menú SEO

### 🎓 advanced-tests.spec.js
**Qué hace:**
- ✅ Flujo completo del sitio
- ✅ Verificación del formulario de login
- ✅ Verificación de especiales de vuelos
- ✅ Navegación entre secciones
- ✅ Pruebas de accesibilidad básica

**Comandos:**
```bash
npm run test:advanced
npm run test:advanced -- --headed
```

### 🔧 tecnicas-avanzadas.spec.js
**Qué hace:**
Muestra 11 técnicas diferentes de automatización:
1. Diferentes tipos de selectores
2. Tipos de esperas
3. Manejo de elementos múltiples
4. Verificaciones y aserciones
5. Navegación avanzada
6. Capturas y grabaciones
7. Interacción con formularios
8. Eventos del mouse
9. Extraer información
10. Timeouts personalizados
11. Configuración personalizada

**Comandos:**
```bash
npm run test:tecnicas
npm run test:tecnicas -- --headed
```

## 🎮 Comandos Disponibles

### Ejecutar Pruebas
```bash
# Todas las pruebas
npm test

# Prueba específica del menú SEO (simple)
npm run test:ejemplo

# Pruebas completas del menú SEO
npm run test:seo

# Pruebas avanzadas
npm run test:advanced

# Técnicas de automatización
npm run test:tecnicas

# Con navegador visible
npm run test:headed

# Modo UI interactivo
npm run test:ui

# Modo debug
npm run test:debug
```

### Generar Código Automáticamente
```bash
# Inspector de Playwright
npm run codegen

# Específico para Guru99
npm run codegen:guru99
```

### Ver Reportes
```bash
npm run test:report
```

## 📸 Screenshots Generados

Los siguientes screenshots se generan automáticamente:

| Archivo | Descripción |
|---------|-------------|
| `menu-seo-click.png` | Menú SEO después del clic |
| `seo-page-1-resultado.png` | Vista de SEO Page-1 |
| `seo-page-1.png` a `seo-page-6.png` | Cada página del menú SEO |
| `menu-seo-abierto.png` | Página completa con menú abierto |
| `formulario-login.png` | Formulario de login llenado |
| `pagina-completa.png` | Screenshot de página completa |
| `menu-seo-elemento.png` | Screenshot del elemento menú |
| `area-especifica.png` | Screenshot de área específica |

## 🎯 Sitio de Prueba

**URL:** https://demo.guru99.com/test/newtours/index.php

**Qué automatizamos:**
- Menú SEO con 6 sub-páginas (Page-1 a Page-6)
- Formulario de login
- Navegación entre secciones
- Verificación de contenido
- Interacción con elementos

## 💡 Ejemplos de Código

### Ejemplo 1: Click Simple
```javascript
await page.goto('https://demo.guru99.com/test/newtours/index.php');
await page.click('a:has-text("SEO")');
```

### Ejemplo 2: Verificar Elemento
```javascript
await expect(page.locator('a:has-text("Page-1")')).toBeVisible();
```

### Ejemplo 3: Capturar Screenshot
```javascript
await page.screenshot({ 
  path: 'screenshots/mi-screenshot.png',
  fullPage: true 
});
```

### Ejemplo 4: Llenar Formulario
```javascript
await page.fill('input[name="userName"]', 'usuario_test');
await page.fill('input[name="password"]', 'password123');
```

## 🐛 Solución de Problemas

### Error: "browserType.launch"
```bash
npx playwright install
```

### Error: "Cannot find module"
```bash
npm install
```

### Las pruebas fallan
1. Verifica la conexión a internet
2. Revisa los screenshots en la carpeta `screenshots/`
3. Ejecuta con `--headed` para ver qué pasa
4. Usa `--debug` para depurar paso a paso

## 📚 Archivos de Documentación

- **README.md** - Documentación completa del proyecto
- **GUIA_RAPIDA.md** - Guía paso a paso para principiantes
- **RESUMEN.md** - Este archivo (resumen ejecutivo)

## 🎓 Aprender Más

### Recursos incluidos en el proyecto
- Ejemplos comentados línea por línea
- 4 archivos de prueba con diferentes niveles
- Configuración lista para usar
- Scripts npm para todas las necesidades

### Recursos externos
- [Documentación Playwright](https://playwright.dev/)
- [Sitio de prueba Guru99](https://demo.guru99.com/test/newtours/index.php)

## ✨ Próximos Pasos

1. ✅ Instala las dependencias
2. ✅ Ejecuta `npm run test:ejemplo -- --headed`
3. ✅ Revisa los screenshots generados
4. ✅ Explora los otros archivos de prueba
5. ✅ Usa `npm run codegen:guru99` para generar tu propio código
6. ✅ Modifica las pruebas según tus necesidades

## 🤝 Contribuciones

Este proyecto fue creado como ejemplo educativo para aprender automatización con Playwright.

**Autor:** Elio Navarrete  
**GitHub:** [@elionavarretev](https://github.com/elionavarretev)  
**Repositorio:** [Demo-playwright](https://github.com/elionavarretev/Demo-playwright)

---

**¿Listo para empezar?** 🚀

```bash
npm install
npx playwright install
npm run test:ejemplo -- --headed
```

**¡Disfruta automatizando!** 🎉

