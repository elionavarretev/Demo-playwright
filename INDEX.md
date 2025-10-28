# 📚 Índice General - Demo Playwright

Bienvenido al proyecto de demostración de Playwright para automatización de pruebas.

## 🎯 ¿Qué es este proyecto?

Un proyecto completo de ejemplos y tutoriales para aprender Playwright desde cero hasta nivel avanzado, con ejemplos prácticos usando el sitio de prueba [Demo Guru99 - New Tours](https://demo.guru99.com/test/newtours/index.php).

---

## 📖 Documentación Disponible

| Documento | Descripción | Para quién |
|-----------|-------------|------------|
| **[README.md](README.md)** | Documentación completa del proyecto | Todos |
| **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** | Guía paso a paso para principiantes | 🆕 Principiantes |
| **[RESUMEN.md](RESUMEN.md)** | Resumen ejecutivo con toda la info | ⚡ Referencia rápida |
| **[COMANDOS.md](COMANDOS.md)** | Todos los comandos disponibles | 💻 Desarrolladores |
| **[EJEMPLOS_VISUALES.md](EJEMPLOS_VISUALES.md)** | Ejemplos visuales y salidas | 👁️ Visual learners |
| **[INDEX.md](INDEX.md)** | Este archivo (índice general) | 🗺️ Navegación |

---

## 🎓 Archivos de Prueba

| Archivo | Nivel | Líneas | Pruebas | Tiempo | Descripción |
|---------|-------|--------|---------|--------|-------------|
| **[ejemplo-seo.spec.js](tests/ejemplo-seo.spec.js)** | ⭐ Básico | ~80 | 3 | ~17s | **EMPEZAR AQUÍ** - Ejemplo simple del menú SEO |
| **[seo-menu.spec.js](tests/seo-menu.spec.js)** | 📋 Intermedio | ~120 | 6 | ~24s | Pruebas completas del menú SEO |
| **[advanced-tests.spec.js](tests/advanced-tests.spec.js)** | 🎓 Avanzado | ~150 | 5 | ~19s | Pruebas del sitio completo |
| **[tecnicas-avanzadas.spec.js](tests/tecnicas-avanzadas.spec.js)** | 🔧 Experto | ~400 | 11 | ~45s | 11 técnicas de automatización |

---

## 🚀 Inicio Rápido por Perfil

### 🆕 Soy Principiante (Nunca he usado Playwright)

1. **Lee primero:** [GUIA_RAPIDA.md](GUIA_RAPIDA.md)
2. **Instala:**
   ```bash
   npm install
   npx playwright install
   ```
3. **Ejecuta tu primera prueba:**
   ```bash
   npm run test:ejemplo -- --headed
   ```
4. **Aprende generando código:**
   ```bash
   npm run codegen:guru99
   ```

### 💼 Tengo Experiencia con Testing (Pero nuevo en Playwright)

1. **Lee primero:** [README.md](README.md) - Sección "Ejemplos de pruebas"
2. **Instala:**
   ```bash
   npm install && npx playwright install
   ```
3. **Explora en modo UI:**
   ```bash
   npm run test:ui
   ```
4. **Revisa técnicas avanzadas:**
   ```bash
   npm run test:tecnicas -- --headed
   ```

### 🚀 Soy Experto (Quiero ver ejemplos específicos)

1. **Revisa:** [RESUMEN.md](RESUMEN.md) para vista general
2. **Consulta:** [COMANDOS.md](COMANDOS.md) para referencia rápida
3. **Explora:** Directamente los archivos en `tests/`
4. **Personaliza:** `playwright.config.js` según tus necesidades

---

## 📂 Estructura del Proyecto

```
demo-playwright/
│
├── 📁 tests/                              # Archivos de prueba
│   ├── ejemplo-seo.spec.js               # ⭐ Ejemplo básico
│   ├── seo-menu.spec.js                  # 📋 Pruebas SEO completas
│   ├── advanced-tests.spec.js            # 🎓 Pruebas avanzadas
│   └── tecnicas-avanzadas.spec.js        # 🔧 11 técnicas
│
├── 📁 screenshots/                        # Screenshots automáticos
│   ├── menu-seo-click.png
│   ├── seo-page-*.png
│   └── ... más screenshots
│
├── 📁 playwright-report/                  # Reportes HTML
│   └── index.html
│
├── 📁 test-results/                       # Resultados de pruebas
│   ├── traces/
│   └── videos/
│
├── 📄 playwright.config.js                # Configuración
├── 📄 package.json                        # Dependencias y scripts
├── 📄 .gitignore                          # Archivos ignorados
│
└── 📚 Documentación/
    ├── README.md                          # Doc principal
    ├── GUIA_RAPIDA.md                     # Guía paso a paso
    ├── RESUMEN.md                         # Resumen ejecutivo
    ├── COMANDOS.md                        # Lista de comandos
    ├── EJEMPLOS_VISUALES.md               # Ejemplos visuales
    └── INDEX.md                           # Este archivo
```

---

## 🎯 Flujos de Aprendizaje Recomendados

### Flujo 1: Aprendizaje Básico (1-2 horas)

```
1. Leer GUIA_RAPIDA.md (15 min)
   ↓
2. Instalar dependencias (5 min)
   npm install && npx playwright install
   ↓
3. Ejecutar ejemplo básico (5 min)
   npm run test:ejemplo -- --headed
   ↓
4. Explorar en modo UI (20 min)
   npm run test:ui
   ↓
5. Generar código propio (30 min)
   npm run codegen:guru99
   ↓
6. Modificar ejemplo-seo.spec.js (30 min)
   Agregar tus propias pruebas
```

### Flujo 2: Aprendizaje Intermedio (3-4 horas)

```
1. Leer README.md completo (30 min)
   ↓
2. Ejecutar todos los tests (10 min)
   npm test
   ↓
3. Revisar reportes (15 min)
   npm run test:report
   ↓
4. Estudiar seo-menu.spec.js (45 min)
   Entender estructura de pruebas
   ↓
5. Estudiar advanced-tests.spec.js (45 min)
   Ver técnicas avanzadas
   ↓
6. Crear tu propio archivo de prueba (60 min)
   tests/mi-prueba.spec.js
```

### Flujo 3: Aprendizaje Avanzado (5-8 horas)

```
1. Leer toda la documentación (60 min)
   README, GUIA, RESUMEN, COMANDOS
   ↓
2. Estudiar tecnicas-avanzadas.spec.js (90 min)
   Las 11 técnicas una por una
   ↓
3. Experimentar con configuración (60 min)
   Modificar playwright.config.js
   ↓
4. Probar diferentes navegadores (30 min)
   chromium, firefox, webkit
   ↓
5. Crear suite de pruebas completa (120+ min)
   Proyecto propio con múltiples archivos
   ↓
6. Configurar CI/CD (60 min)
   GitHub Actions o similar
```

---

## 📋 Casos de Uso Comunes

### Caso 1: "Quiero automatizar el menú SEO"

**Archivo:** `tests/ejemplo-seo.spec.js`
**Comando:** `npm run test:ejemplo -- --headed`
**Documentación:** [GUIA_RAPIDA.md](GUIA_RAPIDA.md) - Sección "ejemplo-seo.spec.js"

### Caso 2: "Quiero probar un formulario"

**Archivo:** `tests/advanced-tests.spec.js` - Prueba "Verificar formulario de login"
**Comando:** `npx playwright test --grep "formulario de login" --headed`
**Documentación:** [EJEMPLOS_VISUALES.md](EJEMPLOS_VISUALES.md) - Sección "Formularios"

### Caso 3: "Quiero capturar screenshots"

**Archivo:** `tests/tecnicas-avanzadas.spec.js` - Técnica 6
**Comando:** `npx playwright test --grep "Técnica 6" --headed`
**Documentación:** [README.md](README.md) - Sección "Capturas de pantalla"

### Caso 4: "Quiero debuggear una prueba"

**Comando:** `npm run test:debug`
**Documentación:** [COMANDOS.md](COMANDOS.md) - Sección "Debug y Desarrollo"

### Caso 5: "Quiero generar código automáticamente"

**Comando:** `npm run codegen:guru99`
**Documentación:** [COMANDOS.md](COMANDOS.md) - Sección "Generador de Código"

---

## 🎓 Recursos de Aprendizaje

### Por Tema

| Tema | Archivo de Prueba | Documentación | Comando |
|------|------------------|---------------|---------|
| **Selectores** | tecnicas-avanzadas.spec.js | [Playwright Docs](https://playwright.dev/docs/selectors) | `--grep "Técnica 1"` |
| **Esperas** | tecnicas-avanzadas.spec.js | [Playwright Docs](https://playwright.dev/docs/actionability) | `--grep "Técnica 2"` |
| **Aserciones** | tecnicas-avanzadas.spec.js | [Playwright Docs](https://playwright.dev/docs/test-assertions) | `--grep "Técnica 4"` |
| **Navegación** | tecnicas-avanzadas.spec.js | [Playwright Docs](https://playwright.dev/docs/navigations) | `--grep "Técnica 5"` |
| **Screenshots** | tecnicas-avanzadas.spec.js | [Playwright Docs](https://playwright.dev/docs/screenshots) | `--grep "Técnica 6"` |
| **Formularios** | tecnicas-avanzadas.spec.js | [Playwright Docs](https://playwright.dev/docs/input) | `--grep "Técnica 7"` |

### Por Nivel de Dificultad

**Nivel 1 - Principiante:**
- ejemplo-seo.spec.js
- GUIA_RAPIDA.md
- [Playwright Getting Started](https://playwright.dev/docs/intro)

**Nivel 2 - Intermedio:**
- seo-menu.spec.js
- advanced-tests.spec.js
- README.md
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

**Nivel 3 - Avanzado:**
- tecnicas-avanzadas.spec.js
- playwright.config.js
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

---

## 🔧 Herramientas Incluidas

### Scripts NPM

```bash
npm test                  # Ejecutar todas las pruebas
npm run test:headed       # Ver navegador en acción
npm run test:ui           # Modo UI interactivo
npm run test:debug        # Modo debug
npm run test:report       # Ver reporte HTML
npm run test:ejemplo      # Ejemplo simple SEO
npm run test:seo          # Pruebas SEO completas
npm run test:advanced     # Pruebas avanzadas
npm run test:tecnicas     # Técnicas de automatización
npm run codegen           # Generador de código
npm run codegen:guru99    # Codegen para Guru99
```

### Configuración

- `playwright.config.js` - Configuración principal
- `.gitignore` - Archivos ignorados
- `package.json` - Dependencias y scripts

---

## 📊 Estadísticas del Proyecto

```
Total de archivos de prueba:    4
Total de pruebas:               25
Tiempo total de ejecución:      ~105 segundos
Líneas de código de prueba:     ~750
Documentación:                  6 archivos
Screenshots generados:          ~12
```

---

## 🎯 Próximos Pasos Sugeridos

### Para Principiantes
1. ✅ Completar el flujo de "Aprendizaje Básico"
2. ✅ Crear tu primer archivo de prueba
3. ✅ Compartir tus resultados

### Para Intermedios
1. ✅ Completar todas las pruebas existentes
2. ✅ Personalizar playwright.config.js
3. ✅ Agregar tus propios casos de uso

### Para Avanzados
1. ✅ Integrar con CI/CD
2. ✅ Crear suite completa para tu proyecto
3. ✅ Contribuir al proyecto con mejoras

---

## 💡 Tips y Mejores Prácticas

### Do's ✅
- Lee la documentación antes de empezar
- Usa modo `--headed` para aprender visualmente
- Aprovecha el `codegen` para generar código rápido
- Revisa los screenshots cuando algo falla
- Usa el modo UI para debugging
- Mantén tus selectores simples y robustos

### Don'ts ❌
- No uses `waitForTimeout()` sin razón
- No hagas selectores demasiado específicos
- No olvides los navegadores instalados
- No ignores los reportes de error
- No uses `page.pause()` en CI/CD
- No asumas que el DOM está listo sin verificar

---

## 🆘 Solución de Problemas

### Problema: "browserType.launch failed"
**Solución:** `npx playwright install`

### Problema: "Cannot find module @playwright/test"
**Solución:** `npm install`

### Problema: "Timeout waiting for element"
**Solución:** Revisar el selector o aumentar timeout

### Problema: "Las pruebas son muy lentas"
**Solución:** Ejecutar en modo headless: `npm test`

### Más ayuda:
- [GUIA_RAPIDA.md](GUIA_RAPIDA.md) - Sección "Solución de Problemas"
- [COMANDOS.md](COMANDOS.md) - Todos los comandos disponibles
- [Playwright Docs](https://playwright.dev/docs/troubleshooting)

---

## 🤝 Contribuir

¿Quieres mejorar este proyecto?

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Haz commit: `git commit -m 'Agrega nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📞 Contacto y Soporte

- **Autor:** Elio Navarrete
- **GitHub:** [@elionavarretev](https://github.com/elionavarretev)
- **Website:** [https://elionavarretev.github.io/](https://elionavarretev.github.io/)
- **Repositorio:** [Demo-playwright](https://github.com/elionavarretev/Demo-playwright)
- **Documentación:** Este repositorio
- **Issues:** [GitHub Issues](https://github.com/elionavarretev/Demo-playwright/issues)
- **Playwright Docs:** https://playwright.dev/

---

## 🌟 Agradecimientos

Este proyecto fue creado como material educativo para aprender automatización de pruebas con Playwright.

Sitio de prueba cortesía de [Guru99](https://demo.guru99.com/).

---

## 🚀 Empezar Ahora

```bash
# 1. Instalar
npm install && npx playwright install

# 2. Ejecutar primera prueba
npm run test:ejemplo -- --headed

# 3. Explorar
npm run test:ui

# ¡Listo! 🎉
```

---

**¿Tienes dudas?** Revisa la documentación correspondiente:

- 🆕 **Principiante:** [GUIA_RAPIDA.md](GUIA_RAPIDA.md)
- 📚 **Completa:** [README.md](README.md)
- ⚡ **Rápida:** [RESUMEN.md](RESUMEN.md)
- 💻 **Comandos:** [COMANDOS.md](COMANDOS.md)
- 👁️ **Visual:** [EJEMPLOS_VISUALES.md](EJEMPLOS_VISUALES.md)

---

**¡Feliz automatización con Playwright!** 🎭✨

