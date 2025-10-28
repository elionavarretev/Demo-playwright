const { test, expect } = require('@playwright/test');

test.describe('Demo Guru99 - Automatización Avanzada', () => {
  
  test('Prueba completa del flujo del sitio', async ({ page }) => {
    // 1. Navegar a la página principal
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    console.log('✓ Navegado a la página principal');
    
    // 2. Verificar que el logo de Mercury Tours está visible
    const logo = page.locator('img[alt*="Mercury"]').first();
    await expect(logo).toBeVisible();
    console.log('✓ Logo de Mercury Tours visible');
    
    // 3. Verificar los enlaces principales del header
    await expect(page.locator('a:has-text("Home")')).toBeVisible();
    await expect(page.locator('a:has-text("Flights")')).toBeVisible();
    await expect(page.locator('a:has-text("Hotels")')).toBeVisible();
    console.log('✓ Enlaces del header verificados');
    
    // 4. Interactuar con el menú SEO
    await page.click('a:has-text("SEO")');
    console.log('✓ Clic en menú SEO');
    
    // 5. Esperar y verificar submenú
    const page1Link = page.locator('a:has-text("Page-1")');
    await expect(page1Link).toBeVisible();
    console.log('✓ Submenú SEO visible');
    
    // 6. Capturar screenshot del estado actual
    await page.screenshot({ 
      path: 'screenshots/menu-seo-abierto.png',
      fullPage: true 
    });
    console.log('✓ Screenshot capturado');
  });

  test('Verificar formulario de login', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Verificar que los campos del formulario de login están presentes
    const userNameInput = page.locator('input[name="userName"]');
    const passwordInput = page.locator('input[name="password"]');
    
    await expect(userNameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    
    // Llenar el formulario (sin enviar, solo para demostración)
    await userNameInput.fill('usuario_demo');
    await passwordInput.fill('password_demo');
    
    console.log('✓ Formulario de login verificado y llenado');
    
    // Capturar screenshot
    await page.screenshot({ path: 'screenshots/formulario-login.png' });
  });

  test('Verificar especiales de vuelos', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Buscar las ofertas especiales de vuelos
    // Los precios están en el HTML según la información proporcionada
    const pageContent = await page.content();
    
    // Verificar que hay información de precios
    expect(pageContent).toContain('Atlanta to Las Vegas');
    expect(pageContent).toContain('Boston to San Francisco');
    expect(pageContent).toContain('Los Angeles to Chicago');
    
    console.log('✓ Especiales de vuelos encontrados');
  });

  test('Navegar entre múltiples secciones', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Navegar a REGISTER
    await page.click('a:has-text("REGISTER")');
    await expect(page).toHaveURL(/.*register.*/);
    console.log('✓ Navegado a REGISTER');
    
    // Volver atrás
    await page.goBack();
    console.log('✓ Vuelto a la página principal');
    
    // Navegar a SUPPORT
    await page.click('a:has-text("SUPPORT")');
    await expect(page).toHaveURL(/.*support.*/);
    console.log('✓ Navegado a SUPPORT');
    
    // Volver atrás nuevamente
    await page.goBack();
    console.log('✓ Vuelto a la página principal');
  });

  test('Prueba de accesibilidad básica', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
    
    // Verificar que la página tiene un título
    const title = await page.title();
    expect(title).toBeTruthy();
    console.log(`✓ Título de la página: ${title}`);
    
    // Verificar que hay imágenes con atributo alt
    const imagesWithAlt = await page.locator('img[alt]').count();
    expect(imagesWithAlt).toBeGreaterThan(0);
    console.log(`✓ Imágenes con texto alternativo: ${imagesWithAlt}`);
    
    // Verificar que hay enlaces accesibles
    const links = await page.locator('a').count();
    expect(links).toBeGreaterThan(0);
    console.log(`✓ Enlaces encontrados: ${links}`);
  });
});

