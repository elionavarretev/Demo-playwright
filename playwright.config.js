// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Timeout máximo para cada test */
  timeout: 30000,
  /* Ejecutar pruebas en paralelo */
  fullyParallel: true,
  /* Fallar el build en CI si dejaste test.only accidentalmente */
  forbidOnly: !!process.env.CI,
  /* Reintentos en CI */
  retries: process.env.CI ? 2 : 0,
  /* Número de workers para pruebas paralelas */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter que muestra los resultados de las pruebas */
  reporter: 'html',
  /* Configuración compartida para todos los proyectos */
  use: {
    /* URL base a usar en actions como `await page.goto('/')` */
    baseURL: 'https://demo.guru99.com',
    /* Capturar trazas en el primer reintento al fallar */
    trace: 'on-first-retry',
    /* Capturar screenshot al fallar */
    screenshot: 'only-on-failure',
    /* Capturar video al fallar */
    video: 'retain-on-failure',
  },

  /* Configurar proyectos para diferentes navegadores */
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

    /* Pruebas en dispositivos móviles */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});

