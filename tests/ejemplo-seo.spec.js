const { test, expect } = require('@playwright/test');

/**
 * Script de demostración específico para el menú SEO de Guru99
 * Este script muestra cómo automatizar la interacción con el menú SEO
 */
test.describe('Guru99 - Ejemplo simple del menú SEO', () => {
  
  test('Ejemplo básico: Click en menú SEO', async ({ page }) => {
    // Paso 1: Navegar a la página
    console.log('Paso 1: Navegando a la página de Guru99...');
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Paso 2: Esperar a que la página cargue completamente
    console.log('Paso 2: Esperando a que la página cargue...');
    await page.waitForLoadState('networkidle');
    
    // Paso 3: Hacer clic en el menú SEO
    console.log('Paso 3: Haciendo clic en el menú SEO...');
    await page.click('a:has-text("SEO")');
    
    // Paso 4: Verificar que el submenú se muestra
    console.log('Paso 4: Verificando que el submenú SEO está visible...');
    await expect(page.locator('a:has-text("Page-1")')).toBeVisible();
    
    // Paso 5: Capturar screenshot
    console.log('Paso 5: Capturando screenshot...');
    await page.screenshot({ 
      path: 'screenshots/menu-seo-click.png',
      fullPage: true 
    });
    
    console.log('✅ ¡Prueba completada exitosamente!');
  });

  test('Ejemplo: Click en Page-1 del menú SEO', async ({ page }) => {
    // Navegar a la página
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Click en SEO
    await page.click('a:has-text("SEO")');
    
    // Click en Page-1
    console.log('Haciendo clic en Page-1...');
    await page.click('a:has-text("Page-1")');
    
    // Esperar navegación
    await page.waitForLoadState('networkidle');
    
    // Capturar screenshot de Page-1
    await page.screenshot({ 
      path: 'screenshots/seo-page-1-resultado.png',
      fullPage: true 
    });
    
    console.log('✅ Navegación a Page-1 completada');
  });

  test('Ejemplo: Recorrer todas las páginas SEO', async ({ page }) => {
    const pages = ['Page-1', 'Page-2', 'Page-3', 'Page-4', 'Page-5', 'Page-6'];
    
    for (let i = 0; i < pages.length; i++) {
      const pageName = pages[i];
      
      console.log(`\n${'='.repeat(50)}`);
      console.log(`Navegando a ${pageName} (${i + 1}/${pages.length})...`);
      console.log('='.repeat(50));
      
      // Ir a la página principal
      await page.goto('https://demo.guru99.com/test/newtours/index.php');
      
      // Click en menú SEO
      await page.click('a:has-text("SEO")');
      
      // Click en la página específica
      await page.click(`a:has-text("${pageName}")`);
      
      // Esperar a que cargue
      await page.waitForLoadState('networkidle');
      
      // Obtener URL actual
      const currentUrl = page.url();
      console.log(`✓ URL actual: ${currentUrl}`);
      
      // Capturar screenshot
      await page.screenshot({ 
        path: `screenshots/seo-${pageName.toLowerCase()}.png`,
        fullPage: true 
      });
      
      console.log(`✓ Screenshot guardado: seo-${pageName.toLowerCase()}.png`);
    }
    
    console.log('\n✅ ¡Todas las páginas SEO fueron visitadas exitosamente!');
  });
});

