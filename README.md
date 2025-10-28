# Demo Playwright

Un proyecto de demostración para aprender y experimentar con Playwright, una herramienta moderna de automatización de pruebas end-to-end para aplicaciones web.

## 📑 Índice

- [Descripción](#-descripción)
- [Inicio Rápido](#-inicio-rápido)
- [Características](#-características)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Scripts disponibles](#-scripts-disponibles)
- [Ejemplos de pruebas](#-ejemplos-de-pruebas)
- [Comandos útiles](#-comandos-útiles)
- [Reportes](#-reportes)
- [Archivos del proyecto](#-archivos-del-proyecto)
- [Recursos adicionales](#-recursos-adicionales)

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Instalar navegadores de Playwright
npx playwright install

# 3. Ejecutar tu primera prueba (con navegador visible)
npm run test:ejemplo -- --headed

# 4. Ver el reporte
npm run test:report
```

## 📋 Descripción

Este proyecto contiene ejemplos básicos y avanzados de cómo usar Playwright para automatizar pruebas en navegadores web. Playwright permite escribir pruebas que funcionan en múltiples navegadores (Chromium, Firefox, Safari) y proporciona APIs potentes para interactuar con páginas web.

**Sitio de prueba:** [Demo Guru99 - New Tours](https://demo.guru99.com/test/newtours/index.php)

Este proyecto incluye ejemplos específicos para automatizar el menú SEO y otras funcionalidades del sitio de prueba.

## 🚀 Características

- ✅ Automatización de pruebas end-to-end
- ✅ Soporte para múltiples navegadores (Chromium, Firefox, Safari)
- ✅ Interceptación de red y mocking
- ✅ Capturas de pantalla y videos
- ✅ Pruebas en modo headless y con interfaz gráfica
- ✅ Generación automática de código de pruebas

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd demo-playwright
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Instala los navegadores de Playwright:**
   ```bash
   npx playwright install
   ```

## 🛠️ Configuración

### Configuración básica de Playwright

Crea un archivo `playwright.config.js` en la raíz del proyecto:

```javascript
// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

## 📝 Scripts disponibles

Actualiza el `package.json` con los siguientes scripts:

```json
{
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:ui": "playwright test --ui",
    "test:debug": "playwright test --debug",
    "test:report": "playwright show-report",
    "codegen": "playwright codegen"
  }
}
```

## 🧪 Ejemplos de pruebas

### Prueba del menú SEO de Guru99 (NUEVO)

Se incluye un ejemplo completo para automatizar el sitio [Demo Guru99](https://demo.guru99.com/test/newtours/index.php):

```javascript
const { test, expect } = require('@playwright/test');

test('Ejemplo básico: Click en menú SEO', async ({ page }) => {
  // Navegar a la página
  await page.goto('https://demo.guru99.com/test/newtours/index.php');
  
  // Click en el menú SEO
  await page.click('a:has-text("SEO")');
  
  // Verificar que el submenú se muestra
  await expect(page.locator('a:has-text("Page-1")')).toBeVisible();
  
  // Capturar screenshot
  await page.screenshot({ path: 'screenshots/menu-seo-click.png' });
});
```

**Archivos de prueba disponibles:**
- `tests/ejemplo-seo.spec.js` - Ejemplo simple y comentado para el menú SEO
- `tests/seo-menu.spec.js` - Pruebas completas del menú SEO
- `tests/advanced-tests.spec.js` - Pruebas avanzadas del sitio completo

### Prueba básica

Crea un archivo `tests/example.spec.js`:

```javascript
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

### Prueba con formularios

```javascript
const { test, expect } = require('@playwright/test');

test('formulario de contacto', async ({ page }) => {
  await page.goto('https://example.com/contact');
  
  // Llenar el formulario
  await page.fill('#name', 'Juan Pérez');
  await page.fill('#email', 'juan@example.com');
  await page.fill('#message', 'Este es un mensaje de prueba');
  
  // Enviar el formulario
  await page.click('#submit-button');
  
  // Verificar que se muestra el mensaje de éxito
  await expect(page.locator('.success-message')).toBeVisible();
});
```

## 🎯 Comandos útiles

### Ejecutar pruebas
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar solo las pruebas del menú SEO
npm run test:seo

# Ejecutar pruebas avanzadas
npm run test:advanced

# Ejecutar pruebas con interfaz gráfica
npm run test:headed

# Ejecutar pruebas en modo UI
npm run test:ui

# Ejecutar pruebas en modo debug
npm run test:debug
```

### Generar código de pruebas
```bash
# Generar código automáticamente mientras navegas
npm run codegen

# Generar código específicamente para el sitio Guru99
npm run codegen:guru99
```

### Ver reportes
```bash
# Ver el reporte HTML de las pruebas
npm run test:report
```

## 📂 Archivos del Proyecto

```
demo-playwright/
├── 📁 tests/                           # Archivos de prueba
│   ├── ejemplo-seo.spec.js            # ⭐ Ejemplo simple (EMPEZAR AQUÍ)
│   ├── seo-menu.spec.js               # Pruebas completas del menú SEO
│   ├── advanced-tests.spec.js         # Pruebas avanzadas
│   └── tecnicas-avanzadas.spec.js     # Técnicas de automatización
├── 📁 screenshots/                     # Screenshots generados
├── 📁 playwright-report/               # Reportes HTML
├── 📄 playwright.config.js             # Configuración de Playwright
├── 📄 package.json                     # Dependencias y scripts
├── 📄 .gitignore                       # Archivos ignorados por git
├── 📄 README.md                        # Este archivo
├── 📄 GUIA_RAPIDA.md                   # Guía paso a paso
└── 📄 RESUMEN.md                       # Resumen ejecutivo
```

## 📊 Reportes

Playwright genera reportes HTML detallados que incluyen:
- Resultados de las pruebas
- Capturas de pantalla en caso de fallos
- Videos de las pruebas
- Trazas de ejecución
- Métricas de rendimiento

## 🔧 Configuración avanzada

### Variables de entorno

Crea un archivo `.env` para configuraciones específicas:

```env
BASE_URL=http://localhost:3000
HEADLESS=true
SLOW_MO=100
```

### Configuración para CI/CD

Para ejecutar en GitHub Actions, crea `.github/workflows/playwright.yml`:

```yaml
name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: lts/*
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

## 📚 Recursos adicionales

### 📖 Documentación del Proyecto

- **[RESUMEN.md](RESUMEN.md)** - Resumen ejecutivo con toda la información en un solo lugar
- **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - Guía paso a paso para principiantes
- **[README.md](README.md)** - Este archivo (documentación completa)

### 🎯 Archivos de Prueba

| Archivo | Nivel | Descripción | Comando |
|---------|-------|-------------|---------|
| `tests/ejemplo-seo.spec.js` | ⭐ Básico | Ejemplo simple del menú SEO | `npm run test:ejemplo` |
| `tests/seo-menu.spec.js` | 📋 Intermedio | Pruebas completas del menú SEO | `npm run test:seo` |
| `tests/advanced-tests.spec.js` | 🎓 Avanzado | Pruebas del sitio completo | `npm run test:advanced` |
| `tests/tecnicas-avanzadas.spec.js` | 🔧 Experto | 11 técnicas de automatización | `npm run test:tecnicas` |

### 🌐 Enlaces Externos

- [Documentación oficial de Playwright](https://playwright.dev/)
- [Guía de mejores prácticas](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Ejemplos de código](https://github.com/microsoft/playwright/tree/main/examples)
- [Sitio de prueba - Guru99](https://demo.guru99.com/test/newtours/index.php)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Elio Navarrete**
- GitHub: [@elionavarretev](https://github.com/elionavarretev)
- Website: [https://elionavarretev.github.io/](https://elionavarretev.github.io/)
- ORCID: [0000-0001-8810-2068](https://orcid.org/0000-0001-8810-2068)

---

⭐ ¡No olvides darle una estrella al proyecto si te resulta útil!

