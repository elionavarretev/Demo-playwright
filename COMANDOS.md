# 📋 Comandos Rápidos - Demo Playwright

Referencia rápida de todos los comandos disponibles en el proyecto.

## 🚀 Instalación Inicial

```bash
# Clonar el repositorio (si aplica)
git clone <url-del-repo>
cd demo-playwright

# Instalar dependencias de Node.js
npm install

# Instalar navegadores de Playwright (Chromium, Firefox, WebKit)
npx playwright install

# O instalar solo un navegador específico
npx playwright install chromium
```

---

## ▶️ Ejecutar Pruebas

### Pruebas Básicas

```bash
# Ejecutar TODAS las pruebas (headless)
npm test

# Ejecutar todas las pruebas con navegador visible
npm run test:headed

# Ejecutar pruebas en modo UI interactivo (RECOMENDADO para aprender)
npm run test:ui
```

### Pruebas Específicas por Archivo

```bash
# ⭐ Ejemplo simple del menú SEO (RECOMENDADO para empezar)
npm run test:ejemplo

# Con navegador visible
npm run test:ejemplo -- --headed

# 📋 Pruebas completas del menú SEO
npm run test:seo
npm run test:seo -- --headed

# 🎓 Pruebas avanzadas del sitio
npm run test:advanced
npm run test:advanced -- --headed

# 🔧 Técnicas de automatización (11 ejemplos)
npm run test:tecnicas
npm run test:tecnicas -- --headed
```

### Ejecutar Prueba Individual por Nombre

```bash
# Ejecutar solo una prueba específica por su nombre
npx playwright test --grep "Click en menú SEO"

# Ejecutar todas las pruebas que contengan "Page-1"
npx playwright test --grep "Page-1"

# Ejecutar todas EXCEPTO las que coincidan
npx playwright test --grep-invert "Recorrer todas"
```

### Ejecutar en Navegador Específico

```bash
# Solo en Chromium
npx playwright test --project=chromium

# Solo en Firefox
npx playwright test --project=firefox

# Solo en WebKit/Safari
npx playwright test --project=webkit

# Ejemplo con navegador visible
npx playwright test --project=chromium --headed
```

---

## 🐛 Debug y Desarrollo

### Modo Debug

```bash
# Abrir inspector de Playwright (pausa antes de cada acción)
npm run test:debug

# Debug de archivo específico
npx playwright test ejemplo-seo.spec.js --debug

# Debug de una prueba específica
npx playwright test --grep "Click en menú SEO" --debug
```

### Inspector de Playwright

```bash
# Abrir el inspector sin ejecutar pruebas
npx playwright inspector
```

### Modo Paso a Paso

```bash
# Ejecutar con inspector y pausas
npx playwright test --debug

# En el código, agregar:
# await page.pause();  // Pausa en este punto
```

---

## 🎨 Generador de Código (Codegen)

### Generar Código Automáticamente

```bash
# Abrir codegen (genera código mientras navegas)
npm run codegen

# Codegen en sitio específico (Guru99)
npm run codegen:guru99

# Codegen en cualquier URL
npx playwright codegen https://example.com

# Codegen con dispositivo móvil emulado
npx playwright codegen --device="iPhone 12" https://example.com

# Codegen con viewport personalizado
npx playwright codegen --viewport-size=1280,720 https://example.com
```

### Grabar Acciones

```bash
# Guardar el código generado directamente en un archivo
npx playwright codegen --output tests/mi-nueva-prueba.spec.js https://example.com
```

---

## 📊 Reportes y Resultados

### Ver Reportes

```bash
# Ver reporte HTML de la última ejecución
npm run test:report

# O manualmente
npx playwright show-report

# Generar y abrir reporte después de ejecutar pruebas
npm test && npm run test:report
```

### Ver Traces (Trazas de Ejecución)

```bash
# Ver trace de una ejecución fallida
npx playwright show-trace test-results/*/trace.zip

# Ver trace específico
npx playwright show-trace test-results/ejemplo-seo-Click-chromium/trace.zip
```

---

## 📸 Screenshots y Videos

### Capturar Screenshots

Los screenshots se generan automáticamente en las pruebas. Para ver:

```bash
# Listar screenshots generados
ls -la screenshots/

# Abrir carpeta de screenshots (macOS)
open screenshots/

# Abrir carpeta de screenshots (Linux)
xdg-open screenshots/

# Abrir carpeta de screenshots (Windows)
start screenshots/
```

### Ver Videos

```bash
# Listar videos generados
ls -la test-results/*/video.webm

# Los videos se guardan solo si están habilitados en playwright.config.js
# video: 'on' o video: 'retain-on-failure'
```

---

## 🔍 Filtros y Opciones

### Ejecutar con Opciones

```bash
# Ejecutar en modo headless (sin ventana, por defecto)
npx playwright test

# Ejecutar con navegador visible
npx playwright test --headed

# Ejecutar con reintento automático (retry)
npx playwright test --retries=3

# Ejecutar con workers específicos (paralelismo)
npx playwright test --workers=4

# Ejecutar con timeout personalizado
npx playwright test --timeout=60000

# Ejecutar en modo maximized
npx playwright test --headed --max-failures=1
```

### Ejecutar por Archivo

```bash
# Ejecutar un archivo específico
npx playwright test tests/ejemplo-seo.spec.js

# Ejecutar múltiples archivos
npx playwright test tests/ejemplo-seo.spec.js tests/seo-menu.spec.js

# Ejecutar todos los archivos en una carpeta
npx playwright test tests/
```

---

## 📝 Información y Listados

### Listar Pruebas

```bash
# Listar todas las pruebas sin ejecutarlas
npx playwright test --list

# Listar pruebas con descripción detallada
npx playwright test --list --reporter=json
```

### Ver Configuración

```bash
# Ver la configuración de Playwright
npx playwright show-config

# Ver información de los navegadores instalados
npx playwright --version
```

### Verificar Instalación

```bash
# Verificar que Playwright está instalado correctamente
npx playwright --help

# Ver versión de Playwright
npx playwright --version
```

---

## 🧹 Limpieza

### Limpiar Archivos Generados

```bash
# Eliminar reporte HTML
rm -rf playwright-report/

# Eliminar resultados de pruebas
rm -rf test-results/

# Eliminar screenshots (CUIDADO: elimina todos los screenshots)
rm -rf screenshots/*.png

# Limpiar todo (reporte, resultados y screenshots)
rm -rf playwright-report/ test-results/ screenshots/*.png
```

---

## 🔧 Mantenimiento

### Actualizar Playwright

```bash
# Actualizar Playwright a la última versión
npm install -D @playwright/test@latest

# Reinstalar navegadores después de actualizar
npx playwright install
```

### Desinstalar Navegadores

```bash
# Limpiar navegadores instalados
npx playwright uninstall --all

# Limpiar caché de Playwright
rm -rf ~/Library/Caches/ms-playwright  # macOS
rm -rf ~/.cache/ms-playwright          # Linux
```

---

## 🎯 Comandos Útiles para CI/CD

### GitHub Actions

```bash
# Instalar Playwright con dependencias del sistema
npx playwright install --with-deps

# Ejecutar pruebas en modo CI
CI=true npm test

# Ejecutar con sharding (dividir pruebas en múltiples máquinas)
npx playwright test --shard=1/3  # Ejecuta 1er tercio
npx playwright test --shard=2/3  # Ejecuta 2do tercio
npx playwright test --shard=3/3  # Ejecuta 3er tercio
```

---

## 📦 Scripts del Proyecto

Todos los scripts disponibles en `package.json`:

```bash
npm test              # Ejecutar todas las pruebas
npm run test:headed   # Ejecutar con navegador visible
npm run test:ui       # Modo UI interactivo
npm run test:debug    # Modo debug
npm run test:report   # Ver reporte HTML
npm run test:seo      # Pruebas del menú SEO
npm run test:ejemplo  # Ejemplo simple
npm run test:advanced # Pruebas avanzadas
npm run test:tecnicas # Técnicas de automatización
npm run codegen       # Generador de código
npm run codegen:guru99 # Codegen para Guru99
```

---

## 🎓 Comandos para Aprender

### Para Principiantes

```bash
# 1. Instalar todo
npm install && npx playwright install

# 2. Ver el ejemplo más simple (con ventana)
npm run test:ejemplo -- --headed

# 3. Explorar en modo UI
npm run test:ui

# 4. Generar tu propio código
npm run codegen:guru99
```

### Para Desarrolladores

```bash
# Ejecutar suite completa
npm test

# Debug de prueba fallida
npx playwright test --debug --grep "nombre-de-prueba-fallida"

# Ver trace de ejecución
npx playwright show-trace test-results/*/trace.zip

# Generar código para nueva funcionalidad
npx playwright codegen --output tests/nueva-prueba.spec.js https://sitio.com
```

---

## 💡 Tips de Comandos

### Combinar Opciones

```bash
# Ejecutar en Chrome, visible, con debug
npx playwright test --project=chromium --headed --debug

# Ejecutar prueba específica en Firefox visible
npx playwright test --grep "Click SEO" --project=firefox --headed

# Ejecutar con timeout personalizado y reintentos
npx playwright test --timeout=60000 --retries=2

# Ejecutar y generar reporte
npm test && npm run test:report
```

### Variables de Entorno

```bash
# Ejecutar con variable de entorno personalizada
HEADLESS=false npm test

# Ejecutar con modo debug activado
DEBUG=pw:api npm test

# Ejecutar con slowMo (cámara lenta)
PWDEBUG=1 npm test
```

---

## 🚀 Comandos Más Usados (Top 10)

```bash
1.  npm run test:ejemplo -- --headed    # Ver ejemplo simple
2.  npm run test:ui                     # Modo interactivo
3.  npm test                            # Ejecutar todas
4.  npm run test:report                 # Ver reporte
5.  npm run codegen:guru99              # Generar código
6.  npx playwright test --debug         # Debug
7.  npx playwright test --headed        # Ver navegador
8.  npx playwright test --grep "texto"  # Buscar prueba
9.  npm run test:seo                    # Pruebas SEO
10. npx playwright show-trace *.zip     # Ver trace
```

---

## 📚 Ayuda Adicional

```bash
# Ayuda general de Playwright
npx playwright --help

# Ayuda del comando test
npx playwright test --help

# Ayuda del codegen
npx playwright codegen --help

# Ver documentación online
open https://playwright.dev/docs/intro
```

---

**¿Necesitas ayuda?**

1. Revisa la [documentación oficial](https://playwright.dev/)
2. Lee `GUIA_RAPIDA.md` para una guía paso a paso
3. Consulta `RESUMEN.md` para información completa
4. Explora `EJEMPLOS_VISUALES.md` para ver ejemplos visuales

---

**¡Comienza ahora!** 🚀

```bash
npm install && npx playwright install && npm run test:ejemplo -- --headed
```

