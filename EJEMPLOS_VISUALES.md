# 🎬 Ejemplos Visuales - Demo Playwright

Este documento muestra ejemplos de cómo se ven las pruebas en ejecución y sus resultados.

## 📺 Ejecución de Pruebas

### Modo Headless (Sin ventana)

```bash
npm run test:ejemplo
```

**Salida en consola:**

```
Running 3 tests using 3 workers

  ✓  1 ejemplo-seo.spec.js:7:3 › Guru99 - Ejemplo simple del menú SEO › Ejemplo básico: Click en menú SEO (2.5s)
Paso 1: Navegando a la página de Guru99...
Paso 2: Esperando a que la página cargue...
Paso 3: Haciendo clic en el menú SEO...
Paso 4: Verificando que el submenú SEO está visible...
Paso 5: Capturando screenshot...
✅ ¡Prueba completada exitosamente!

  ✓  2 ejemplo-seo.spec.js:23:3 › Guru99 - Ejemplo simple del menú SEO › Ejemplo: Click en Page-1 del menú SEO (1.8s)
Haciendo clic en Page-1...
✅ Navegación a Page-1 completada

  ✓  3 ejemplo-seo.spec.js:39:3 › Guru99 - Ejemplo simple del menú SEO › Ejemplo: Recorrer todas las páginas SEO (12.3s)
==================================================
Navegando a Page-1 (1/6)...
==================================================
✓ URL actual: https://demo.guru99.com/test/...
✓ Screenshot guardado: seo-page-1.png
[... continúa para todas las páginas ...]
✅ ¡Todas las páginas SEO fueron visitadas exitosamente!

  3 passed (16.6s)
```

### Modo Headed (Con ventana visible)

```bash
npm run test:ejemplo -- --headed
```

**Lo que verás:**
- Se abre una ventana del navegador Chromium
- Navega automáticamente a la página de Guru99
- Hace clic en el menú SEO
- Puedes ver cada acción en tiempo real
- La ventana se cierra automáticamente al terminar

### Modo UI Interactivo

```bash
npm run test:ui
```

**Interfaz interactiva que incluye:**
- ✅ Lista de todas las pruebas
- ✅ Vista del código de cada prueba
- ✅ Reproducción paso a paso
- ✅ Visor de elementos inspeccionados
- ✅ Timeline de acciones
- ✅ Network calls
- ✅ Console logs

### Modo Debug

```bash
npm run test:debug
```

**Herramientas de depuración:**
- ⏸️ Pausa automática antes de cada acción
- ▶️ Botón "Play" para continuar
- ⏭️ Botón "Step Over" para siguiente paso
- 🔍 Inspector de elementos
- 📝 Editor de selectores en tiempo real

## 📸 Screenshots Generados

### Estructura de la carpeta screenshots/

```
screenshots/
├── menu-seo-click.png              # Menú SEO abierto
├── seo-page-1-resultado.png        # Vista de Page-1
├── seo-page-1.png                  # Page-1 individual
├── seo-page-2.png                  # Page-2 individual
├── seo-page-3.png                  # Page-3 individual
├── seo-page-4.png                  # Page-4 individual
├── seo-page-5.png                  # Page-5 individual
├── seo-page-6.png                  # Page-6 individual
├── menu-seo-abierto.png           # Vista completa con menú
├── formulario-login.png           # Formulario llenado
├── pagina-completa.png            # Screenshot full page
├── menu-seo-elemento.png          # Solo el elemento menú
└── area-especifica.png            # Área recortada
```

### Descripción de cada screenshot

**menu-seo-click.png**
- Página completa
- Menú SEO con submenú desplegado
- Muestra Page-1 a Page-6 visibles

**seo-page-*.png**
- Screenshot de cada página individual del menú SEO
- Vista completa de la página
- Útil para comparaciones visuales

**formulario-login.png**
- Formulario con campos llenados
- Username: "usuario_demo"
- Password: "password_demo" (oculto)

## 📊 Reporte HTML

### Ejecutar y ver reporte

```bash
# 1. Ejecutar pruebas
npm test

# 2. Ver reporte
npm run test:report
```

### Contenido del reporte

El reporte HTML incluye:

#### 📋 Resumen General
```
✅ 3 passed
❌ 0 failed
⏭️  0 skipped
⏱️  Total time: 16.6s
🌐 Browsers: Chromium, Firefox, WebKit
```

#### 📝 Lista de Pruebas

| Test | Status | Duration | Browser |
|------|--------|----------|---------|
| Ejemplo básico: Click en menú SEO | ✅ Passed | 2.5s | chromium |
| Click en Page-1 del menú SEO | ✅ Passed | 1.8s | chromium |
| Recorrer todas las páginas SEO | ✅ Passed | 12.3s | chromium |

#### 🔍 Detalles por Prueba

Para cada prueba verás:
- ✅ Estado (Passed/Failed)
- ⏱️ Duración
- 📸 Screenshots capturados
- 🎥 Video (si está habilitado)
- 📜 Trace (trazas de ejecución)
- 📋 Steps realizados
- 🐛 Errores (si los hay)

#### 📸 Vista de Screenshots

- Thumbnails clickeables
- Vista ampliada al hacer clic
- Comparación antes/después (en caso de fallo)

## 🎥 Videos (Opcional)

Para habilitar grabación de videos, actualiza `playwright.config.js`:

```javascript
use: {
  video: 'on', // Grabar siempre
  // o
  video: 'retain-on-failure', // Solo al fallar
}
```

Los videos se guardan en la carpeta `test-results/` y muestran:
- Navegación completa
- Interacciones del usuario
- Transiciones de página
- Útil para debugging

## 📈 Métricas y Estadísticas

### Tiempo de Ejecución

```
ejemplo-seo.spec.js           16.6s
  ├─ Básico: Click SEO         2.5s
  ├─ Click Page-1              1.8s
  └─ Recorrer todas           12.3s

seo-menu.spec.js             24.3s
  ├─ Verificar visible         1.2s
  ├─ Click y verificar         2.1s
  ├─ Navegar a Page-1          1.8s
  ├─ Navegar todas            15.7s
  ├─ Verificar estructura      2.0s
  └─ Interacción completa      1.5s

advanced-tests.spec.js       18.9s
  ├─ Flujo completo            4.2s
  ├─ Formulario login          2.1s
  ├─ Especiales vuelos         1.8s
  ├─ Navegar secciones         8.3s
  └─ Accesibilidad básica      2.5s
```

### Cobertura de Pruebas

```
Elementos Probados:
  ✅ Menú SEO
  ✅ 6 sub-páginas (Page-1 a Page-6)
  ✅ Formulario de login
  ✅ Enlaces de navegación
  ✅ Logo y elementos visuales
  ✅ Especiales de vuelos
  ✅ Botones REGISTER y SUPPORT
  ✅ Accesibilidad básica

Navegadores:
  ✅ Chromium
  ✅ Firefox (opcional)
  ✅ WebKit/Safari (opcional)
```

## 🎯 Ejemplo de Flujo Completo

### Comando
```bash
npm run test:ejemplo -- --headed --project=chromium
```

### Flujo Visual

```
1. 🚀 Iniciar navegador Chromium
   └─ Ventana del navegador se abre

2. 🌐 Navegar a Guru99
   └─ https://demo.guru99.com/test/newtours/index.php

3. ⏳ Esperar carga
   └─ networkidle detectado

4. 🖱️ Click en menú "SEO"
   └─ Menú se despliega mostrando Page-1 a Page-6

5. ✅ Verificar submenú
   └─ Page-1 está visible

6. 📸 Capturar screenshot
   └─ Guardado en screenshots/menu-seo-click.png

7. ✅ Prueba completada
   └─ Navegador se cierra

8. 📊 Generar reporte
   └─ playwright-report/index.html
```

## 💡 Tips para Visualización

### 1. Ejecutar con slowMo (cámara lenta)

Crea un archivo `playwright.config.js` temporal:

```javascript
use: {
  launchOptions: {
    slowMo: 500, // 500ms de delay entre acciones
  }
}
```

### 2. Mantener navegador abierto después del test

```bash
npx playwright test --headed --debug
```

### 3. Inspeccionar elementos durante la prueba

```javascript
await page.pause(); // Pausa la ejecución
```

### 4. Ver todas las acciones en consola

```javascript
page.on('console', msg => console.log('PAGE LOG:', msg.text()));
```

## 🔍 Ejemplo de Debugging

### Escenario: Una prueba falla

**Console output:**
```
  ❌  1 ejemplo-seo.spec.js:7:3 › Ejemplo básico: Click en menú SEO

    Error: Timeout 30000ms exceeded.
    waiting for selector "a:has-text('SEO')" to be visible

    Call log:
      - navigating to https://demo.guru99.com/test/newtours/index.php
      - waiting for selector "a:has-text('SEO')"
```

**Archivos generados:**
```
test-results/
└── ejemplo-seo-Ejemplo-básico-chromium/
    ├── test-failed-1.png          # Screenshot del error
    ├── video.webm                 # Video hasta el fallo
    └── trace.zip                  # Trace completo
```

**Acciones:**
1. Abrir screenshot para ver el estado
2. Ver video para entender qué pasó
3. Abrir trace en Playwright Trace Viewer
4. Analizar network calls
5. Revisar console errors

## 📱 Ejemplo de Prueba en Móvil

```javascript
test.use({ 
  viewport: { width: 375, height: 667 },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
});
```

**Resultado:**
- Screenshot muestra vista móvil
- Navegación adaptada a pantalla pequeña
- Interacciones táctiles simuladas

## 🎨 Personalización de Reportes

### Agregar metadata a las pruebas

```javascript
test('Mi prueba', async ({ page }, testInfo) => {
  testInfo.annotations.push({ 
    type: 'issue', 
    description: 'Relacionado con ticket #123' 
  });
  
  // ... prueba ...
});
```

### Agregar attachments

```javascript
await testInfo.attach('Mi screenshot', {
  body: await page.screenshot(),
  contentType: 'image/png',
});
```

---

## 🚀 Empezar Ahora

```bash
# Ver todo en acción
npm run test:ejemplo -- --headed

# Ver en modo UI interactivo
npm run test:ui

# Ejecutar y ver reporte
npm test && npm run test:report
```

**¡Disfruta viendo tus pruebas automatizadas!** 🎉

---

**Proyecto creado por:** [Elio Navarrete](https://github.com/elionavarretev) | QA Lead & Test Automation Specialist  
**Repositorio:** [Demo-playwright](https://github.com/elionavarretev/Demo-playwright)  
**Website:** [elionavarretev.github.io](https://elionavarretev.github.io/)

