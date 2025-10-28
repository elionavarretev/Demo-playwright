const { test, expect } = require('@playwright/test');

/**
 * Técnicas avanzadas de automatización con Playwright
 * Ejemplos de diferentes formas de interactuar con elementos
 */

test.describe('Técnicas de Automatización - Guru99', () => {
  
  // 1. Uso de diferentes selectores
  test('Técnica 1: Diferentes tipos de selectores', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Selector por texto
    await page.click('a:has-text("SEO")');
    console.log('✓ Selector por texto: a:has-text("SEO")');
    
    // Selector por XPath
    const menuSeoXPath = '//a[contains(text(), "SEO")]';
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    await page.locator(`xpath=${menuSeoXPath}`).click();
    console.log('✓ Selector por XPath:', menuSeoXPath);
    
    // Selector CSS
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    await page.locator('a:text("SEO")').click();
    console.log('✓ Selector CSS: a:text("SEO")');
  });

  // 2. Esperas inteligentes
  test('Técnica 2: Diferentes tipos de esperas', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Esperar a que un elemento sea visible
    await page.waitForSelector('a:has-text("SEO")', { state: 'visible' });
    console.log('✓ Esperado elemento visible');
    
    // Esperar a que la red esté inactiva
    await page.waitForLoadState('networkidle');
    console.log('✓ Esperado networkidle');
    
    // Esperar a que el DOM se cargue
    await page.waitForLoadState('domcontentloaded');
    console.log('✓ Esperado DOM cargado');
    
    // Esperar un tiempo específico (no recomendado, pero a veces necesario)
    await page.waitForTimeout(1000);
    console.log('✓ Esperado 1 segundo');
  });

  // 3. Manejo de elementos múltiples
  test('Técnica 3: Trabajar con múltiples elementos', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    await page.click('a:has-text("SEO")');
    
    // Obtener todos los elementos que coinciden
    const seoPages = page.locator('a:has-text("Page-")');
    
    // Contar elementos
    const count = await seoPages.count();
    console.log(`✓ Encontrados ${count} elementos`);
    
    // Iterar sobre elementos
    for (let i = 0; i < Math.min(count, 3); i++) {
      const text = await seoPages.nth(i).textContent();
      console.log(`  - Elemento ${i}: ${text}`);
    }
    
    // Obtener todos los textos de una vez
    const allTexts = await seoPages.allTextContents();
    console.log('✓ Todos los textos:', allTexts);
  });

  // 4. Verificaciones y aserciones
  test('Técnica 4: Diferentes tipos de aserciones', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Verificar que un elemento está visible
    await expect(page.locator('a:has-text("SEO")')).toBeVisible();
    console.log('✓ Elemento visible verificado');
    
    // Verificar que la URL contiene un texto
    await expect(page).toHaveURL(/newtours/);
    console.log('✓ URL verificada');
    
    // Verificar que un elemento tiene un texto
    const logo = page.locator('img[alt*="Mercury"]').first();
    await expect(logo).toBeVisible();
    console.log('✓ Logo verificado');
    
    // Verificar que un elemento existe en el DOM (aunque no sea visible)
    const seoLink = page.locator('a:has-text("SEO")');
    await expect(seoLink).toHaveCount(1);
    console.log('✓ Existencia del elemento verificada');
  });

  // 5. Navegación y manejo de páginas
  test('Técnica 5: Navegación avanzada', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    const initialUrl = page.url();
    console.log('✓ URL inicial:', initialUrl);
    
    // Navegar a REGISTER
    await page.click('a:has-text("REGISTER")');
    const registerUrl = page.url();
    console.log('✓ URL de registro:', registerUrl);
    
    // Navegar hacia atrás
    await page.goBack();
    console.log('✓ Navegado hacia atrás');
    
    // Navegar hacia adelante
    await page.goForward();
    console.log('✓ Navegado hacia adelante');
    
    // Recargar la página
    await page.reload();
    console.log('✓ Página recargada');
  });

  // 6. Capturas de pantalla y videos
  test('Técnica 6: Capturas y grabaciones', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Screenshot de página completa
    await page.screenshot({ 
      path: 'screenshots/pagina-completa.png',
      fullPage: true 
    });
    console.log('✓ Screenshot de página completa guardado');
    
    // Screenshot de un elemento específico
    const menuSeo = page.locator('a:has-text("SEO")');
    await menuSeo.screenshot({ 
      path: 'screenshots/menu-seo-elemento.png' 
    });
    console.log('✓ Screenshot del elemento guardado');
    
    // Screenshot con clip personalizado
    await page.screenshot({ 
      path: 'screenshots/area-especifica.png',
      clip: { x: 0, y: 0, width: 500, height: 300 }
    });
    console.log('✓ Screenshot del área específica guardado');
  });

  // 7. Manejo de formularios
  test('Técnica 7: Interacción con formularios', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Llenar campos de texto
    const userNameInput = page.locator('input[name="userName"]');
    const passwordInput = page.locator('input[name="password"]');
    
    // Diferentes formas de llenar inputs
    await userNameInput.fill('usuario_test');
    console.log('✓ Campo llenado con fill()');
    
    await userNameInput.clear();
    await userNameInput.type('usuario_test', { delay: 100 }); // Simula escritura humana
    console.log('✓ Campo llenado con type() y delay');
    
    await passwordInput.fill('password123');
    console.log('✓ Password llenado');
    
    // Verificar el valor del input
    const userName = await userNameInput.inputValue();
    expect(userName).toBe('usuario_test');
    console.log('✓ Valor del input verificado:', userName);
  });

  // 8. Manejo de hover y eventos del mouse
  test('Técnica 8: Eventos del mouse', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Hacer hover sobre un elemento
    const seoMenu = page.locator('a:has-text("SEO")');
    await seoMenu.hover();
    console.log('✓ Hover sobre el menú SEO');
    
    // Esperar un momento para ver el efecto
    await page.waitForTimeout(500);
    
    // Click derecho
    await seoMenu.click({ button: 'right' });
    console.log('✓ Click derecho ejecutado');
    
    // Doble click
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    await seoMenu.dblclick();
    console.log('✓ Doble click ejecutado');
  });

  // 9. Obtener información de la página
  test('Técnica 9: Extraer información', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Obtener título de la página
    const title = await page.title();
    console.log('✓ Título:', title);
    
    // Obtener URL actual
    const url = page.url();
    console.log('✓ URL:', url);
    
    // Obtener texto de un elemento
    await page.click('a:has-text("SEO")');
    const firstPage = page.locator('a:has-text("Page-1")');
    const text = await firstPage.textContent();
    console.log('✓ Texto del elemento:', text);
    
    // Obtener atributo de un elemento
    const href = await firstPage.getAttribute('href');
    console.log('✓ Atributo href:', href);
    
    // Evaluar JavaScript en la página
    const userAgent = await page.evaluate(() => navigator.userAgent);
    console.log('✓ User Agent:', userAgent.substring(0, 50) + '...');
  });

  // 10. Manejo de timeouts personalizados
  test('Técnica 10: Timeouts personalizados', async ({ page }) => {
    // Timeout específico para esta prueba
    test.setTimeout(60000); // 60 segundos
    
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Timeout para una acción específica
    await page.click('a:has-text("SEO")', { timeout: 5000 });
    console.log('✓ Click con timeout de 5 segundos');
    
    // Timeout para una espera específica
    await page.waitForSelector('a:has-text("Page-1")', { 
      timeout: 10000 
    });
    console.log('✓ Espera con timeout de 10 segundos');
  });
});

// 11. Ejemplo de prueba con fixtures y configuración personalizada
test.describe('Técnicas avanzadas con configuración', () => {
  
  // Configurar el timeout para todo el grupo
  test.use({ 
    viewport: { width: 1920, height: 1080 },
    screenshot: 'on',
    video: 'retain-on-failure'
  });
  
  test('Técnica 11: Configuración personalizada', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Obtener información del viewport
    const viewport = page.viewportSize();
    console.log('✓ Viewport:', viewport);
    
    // Realizar acciones con la configuración personalizada
    await page.click('a:has-text("SEO")');
    await page.click('a:has-text("Page-1")');
    
    console.log('✓ Prueba ejecutada con configuración personalizada');
  });
});

