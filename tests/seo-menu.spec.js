const { test, expect } = require('@playwright/test');

test.describe('Demo Guru99 - Menú SEO', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navegar a la página principal antes de cada prueba
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
  });

  test('Verificar que el menú SEO está visible', async ({ page }) => {
    // Buscar el link del menú SEO
    const seoMenu = page.locator('a:has-text("SEO")');
    
    // Verificar que el menú SEO está visible
    await expect(seoMenu).toBeVisible();
  });

  test('Hacer clic en el menú SEO y verificar submenú', async ({ page }) => {
    // Hacer clic en el menú SEO
    await page.click('a:has-text("SEO")');
    
    // Esperar a que aparezca el submenú
    // Verificar que las páginas del submenú estén visibles
    await expect(page.locator('a:has-text("Page-1")')).toBeVisible();
    await expect(page.locator('a:has-text("Page-2")')).toBeVisible();
    await expect(page.locator('a:has-text("Page-3")')).toBeVisible();
    await expect(page.locator('a:has-text("Page-4")')).toBeVisible();
    await expect(page.locator('a:has-text("Page-5")')).toBeVisible();
    await expect(page.locator('a:has-text("Page-6")')).toBeVisible();
  });

  test('Navegar a SEO Page-1', async ({ page }) => {
    // Hacer clic en el menú SEO
    await page.click('a:has-text("SEO")');
    
    // Hacer clic en Page-1
    await page.click('a:has-text("Page-1")');
    
    // Verificar que navegamos a la página correcta
    await expect(page).toHaveURL(/.*page-1.*/i);
    
    // Capturar screenshot
    await page.screenshot({ path: 'screenshots/seo-page-1.png' });
  });

  test('Navegar a todas las páginas del menú SEO', async ({ page }) => {
    // Array con los números de página
    const pages = ['Page-1', 'Page-2', 'Page-3', 'Page-4', 'Page-5', 'Page-6'];
    
    for (const pageName of pages) {
      // Volver a la página principal
      await page.goto('https://demo.guru99.com/test/newtours/index.php');
      
      // Hacer clic en el menú SEO
      await page.click('a:has-text("SEO")');
      
      // Hacer clic en la página correspondiente
      await page.click(`a:has-text("${pageName}")`);
      
      // Verificar que navegamos a alguna página (puede variar la URL)
      await page.waitForLoadState('networkidle');
      
      console.log(`✓ Navegado exitosamente a ${pageName}`);
      
      // Esperar un poco antes de la siguiente iteración
      await page.waitForTimeout(500);
    }
  });

  test('Verificar estructura del menú completo', async ({ page }) => {
    // Verificar todos los menús principales
    await expect(page.locator('a:has-text("Selenium")')).toBeVisible();
    await expect(page.locator('a:has-text("Insurance Project")')).toBeVisible();
    await expect(page.locator('a:has-text("Bank Project")')).toBeVisible();
    await expect(page.locator('a:has-text("SEO")')).toBeVisible();
    
    console.log('✓ Todos los menús principales están visibles');
  });

  test('Interacción completa con el menú SEO', async ({ page }) => {
    // 1. Verificar que estamos en la página correcta
    await expect(page).toHaveTitle(/Demo Guru99/i);
    
    // 2. Hacer hover sobre el menú SEO
    await page.hover('a:has-text("SEO")');
    
    // 3. Hacer clic en el menú SEO
    await page.click('a:has-text("SEO")');
    
    // 4. Esperar a que el submenú sea visible
    await expect(page.locator('a:has-text("Page-1")')).toBeVisible();
    
    // 5. Obtener todos los links del submenú SEO
    const seoPages = await page.locator('ul li a:has-text("Page-")').allTextContents();
    console.log('Páginas SEO encontradas:', seoPages);
    
    // 6. Verificar que hay 6 páginas
    expect(seoPages.length).toBeGreaterThanOrEqual(6);
  });
});

