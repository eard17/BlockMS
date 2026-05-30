# Block MS 🧩

Block MS es un videojuego casual e interactivo de rompecabezas de bloques (estilo *block puzzle* 2D) desarrollado para dispositivos móviles (Android) y web. El proyecto está diseñado como una aplicación familiar libre de anuncios, con controles sencillos de arrastrar y soltar (*drag & drop*), sistema de puntuación con combos, selección de skins y modos dedicados para niños de diferentes edades con tableros y pools de fichas adaptados.

---

## 🎮 Modos de Juego

### 1. Modo Clásico (8x8)
*   **Tablero:** Cuadrícula de 8x8.
*   **Piezas:** Set completo de 25 piezas (piezas pequeñas de 1x1, 2 y 3 bloques, medianas de 4 bloques, y piezas complejas de 5 bloques y cuadrados de 3x3).
*   **Reglas:** El jugador arrastra fichas desde la bandeja inferior al tablero. Al completar líneas horizontales o verticales, estas se eliminan otorgando puntos y activando combos. La partida termina cuando ninguna de las fichas disponibles en la bandeja cabe en el tablero.

### 2. Modo Duelo (Challenge) (8x8)
*   **Tablero:** Cuadrícula de 8x8.
*   **Reglas:** Funciona bajo la misma mecánica del Modo Clásico, pero el jugador compite para alcanzar una puntuación objetivo (*target score*) generada bajo una semilla (*seed*) específica compartida.

### 3. Nivel 1 – Exploradores (5x5)
*   **Tablero:** Reducido a 5x5, diseñado para niños pequeños (4-6 años).
*   **Piezas:** Pool limitado de 10 piezas pequeñas y fáciles de colocar (1x1, líneas de 2 y 3 bloques, L pequeñas de 2x2 y cuadrados de 2x2).
*   **Objetivo:** Introducir a los niños en la lógica espacial con piezas simples y baja probabilidad de bloqueo rápido.

### 4. Nivel 2 – Constructores (6x6)
*   **Tablero:** Mediano de 6x6 (7-10 años).
*   **Piezas:** Pool intermedio de 20 piezas (incluye todas las del Nivel 1 más líneas de 4 bloques, formas en L y T de 4 bloques, y fichas en Z/S pequeñas).
*   **Objetivo:** Aumentar gradualmente el desafío estratégico sin abrumar al jugador.

### 5. Nivel 3 – Familiar (8x8)
*   **Tablero:** Completo de 8x8.
*   **Piezas:** Pool completo de 25 piezas (idéntico al Modo Clásico).
*   **Objetivo:** Permitir a los niños más grandes experimentar el juego completo con sesiones de tiempo controlado.

---

## 🛠️ Arquitectura del Proyecto

El proyecto está construido con un enfoque híbrido, utilizando **Angular** para la interfaz de usuario, navegación y servicios de estado, y **Phaser.js** como motor gráfico para el tablero interactivo.

### Estructura de Carpetas

```text
Block MS/
├── android/                   # Proyecto nativo de Android (Capacitor wrapper)
├── assets/                    # Imágenes base para generar iconos y splash screens
├── scripts/                   # Scripts auxiliares del proyecto (generación de assets, etc.)
├── src/                       # Código fuente de la aplicación Angular + Phaser
│   ├── app/                   # Capa Angular (UI y Servicios)
│   │   ├── components/        # Componentes compartidos (ScoreBar, SleepOverlay, ParentalGate)
│   │   ├── pages/             # Páginas y vistas (auth, challenge, game, home, leaderboard, settings)
│   │   └── services/          # Gestión de estado (auth, child-mode, game-state, save-progress, theme, etc.)
│   ├── assets/                # Assets web estáticos (sonidos, imágenes y formas)
│   ├── game/                  # Capa Phaser (Lógica del Videojuego)
│   │   ├── models/            # Modelos lógicos (board.ts, piece-definitions.ts)
│   │   ├── scenes/            # Escenas de Phaser (game.scene.ts)
│   │   └── systems/           # Sistemas matemáticos (piece-generator.ts, score-calculator.ts, prng.ts)
│   └── environments/          # Configuraciones de variables (Supabase URL y claves)
├── www/                       # Compilación de producción web (Angular dist)
├── angular.json               # Configuración del Angular CLI
├── capacitor.config.ts        # Configuración del Capacitor CLI para Android
└── package.json               # Dependencias y scripts de npm
```

### Tecnologías Utilizadas
*   **Core:** HTML5, CSS3, SCSS y TypeScript.
*   **Framework SPA:** Angular 20 (Standalone Components).
*   **Motor de Videojuegos:** Phaser.js (v4.0.0-beta).
*   **Wrapper Móvil:** Capacitor 8.x (Plugins: `@capacitor/app`, `@capacitor/haptics`, `@capacitor/keyboard`, `@capacitor/splash-screen`, `@capacitor/status-bar`).
*   **Base de Datos y Auth:** Supabase Client (`@supabase/supabase-js`) para almacenamiento de puntuaciones y autenticación mediante Google OAuth.

### Flujo General y Sistemas Principales
1.  **Gestión de Estado:** Centralizado en servicios Angular (`GameStateService`, `SaveProgressService`, `ChildModeService`). Se utiliza la reactividad nativa de Angular (Signals) para propagar cambios de puntuación, récords y estado del temporizador infantil.
2.  **Puente Angular-Phaser (`game-context.ts`):** Un archivo de contexto global inicializa y transfiere la configuración de la partida (dimensión del tablero, semilla aleatoria, pool de piezas, skin activo) desde la página de Angular hacia la escena del juego en Phaser sin problemas de sincronización de hilos.
3.  **Generación de Piezas (`piece-generator.ts`):** 
    *   Implementa una generación **100% aleatoria (RNG puro)** utilizando un generador pseudo-aleatorio basado en semillas (`prng.ts`).
    *   No tiene asistencia inteligente ni algoritmos de trampa.
    *   **Detección de Fin de Partida (Game Over):** Evalúa si al menos una de las piezas del pool actual cabe en alguna celda disponible del tablero. Si ninguna cabe, se retorna `null` y el motor finaliza la partida.
4.  **Sistema de Puntuación (`score-calculator.ts`):** Calcula los puntos ganados por colocar piezas individuales, multiplicados por los combos conseguidos al destruir líneas consecutivas en turnos seguidos.

---

## 📋 Requisitos Previos

Antes de configurar el proyecto, asegúrate de tener instalado:
*   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
*   [npm](https://www.npmjs.com/) (instalado automáticamente con Node).
*   [Android Studio](https://developer.android.com/studio) (para compilar y emular en Android).
*   [Java JDK 17 o 21](https://www.oracle.com/java/technologies/downloads/) (esencial para la compilación de Gradle).
*   [Android SDK API Level 35 y 36](https://developer.android.com/studio/releases/platforms) (instalados mediante el SDK Manager de Android Studio).

---

## 🚀 Instalación desde Cero

Sigue estos comandos en tu terminal para configurar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/eard17/BlockMS.git
    cd BlockMS
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Generar recursos móviles nativos (Iconos y Splashes):**
    ```bash
    npx @capacitor/assets generate --android
    ```

4.  **Sincronizar plataforma nativa:**
    ```bash
    npx cap sync android
    ```

---

## 💻 Ejecución en Desarrollo

### Iniciar servidor web de desarrollo local
Para probar la aplicación en tu navegador web con recarga automática:
```bash
npm start
```
*(Abre `http://localhost:4200` en tu navegador).*

### Compilación Web Local (Generar carpeta `www`)
Para generar los archivos web listos para ser consumidos por Capacitor:
```bash
npm run build
```

---

## 📱 Generación de APK para Android

Para generar el APK ejecutable de Android, realiza los siguientes pasos:

1.  **Compilar los recursos web:**
    ```bash
    npm run build
    ```
2.  **Sincronizar los cambios con la plataforma Android:**
    ```bash
    npx cap sync android
    ```
3.  **Compilar el APK de depuración (Debug) desde la consola:**
    ```bash
    # En Windows PowerShell / CMD
    # Asegúrate de apuntar JAVA_HOME al JDK correcto (p. ej., el incorporado de Android Studio)
    set JAVA_HOME=C:\Program Files\Android\Android Studio\jbr
    cd android
    gradlew.bat clean assembleDebug --no-daemon
    ```
    *El APK compilado se generará en:* `android/app/build/outputs/apk/debug/app-debug.apk`

4.  **Generar el APK para Producción (Release firmada):**
    *   Abre la carpeta `android` en Android Studio.
    *   Ve a **Build > Generate Signed Bundle / APK**.
    *   Selecciona **APK**, ingresa tus claves del Keystore de producción, selecciona la variante `release` y haz clic en **Finish**.

---

## 📜 Scripts Disponibles

Los siguientes comandos están definidos en el archivo `package.json`:
*   `npm run ng`: Ejecuta el CLI global de Angular.
*   `npm start`: Levanta el servidor local de desarrollo (`ng serve`).
*   `npm run build`: Compila la versión de producción web a la carpeta `www` (`ng build`).
*   `npm run watch`: Compila el proyecto Angular de forma continua en modo desarrollo (`ng build --watch --configuration development`).
*   `npm test`: Ejecuta los tests unitarios configurados mediante Karma (`ng test`).
*   `npm run lint`: Ejecuta el linter ESLint para analizar la calidad del código TypeScript (`ng lint`).

---

## ⚙️ Configuración

### Base de Datos y Autenticación (Supabase)
El proyecto utiliza Supabase para las tablas de clasificación. La configuración de las claves se encuentra en:
*   `src/environments/environment.ts` (Desarrollo)
*   `src/environments/environment.prod.ts` (Producción)

Campos obligatorios:
*   `production`: Variable booleana que indica si la compilación es para producción.
*   `supabaseUrl`: URL del cliente Supabase. Si deseas deshabilitar la base de datos de manera local, asegúrate de cambiar esta URL por una que no comience con `https://` (ej. `tech.mstechnology.blockms://auth-callback`), lo cual desactivará el cliente automáticamente.
*   `supabaseKey`: Clave pública de acceso a Supabase API (anon key).

---

## 🔍 Troubleshooting (Resolución de Problemas)

### 1. Error: "Unsupported class file major version 69" en Gradle
*   **Causa:** Tu entorno del sistema está utilizando una versión de Java demasiado moderna (como Java 25) que no es soportada por la versión actual de Gradle (v8.14).
*   **Solución:** Configura la variable de entorno `JAVA_HOME` para apuntar a un JDK de Java 17 o 21 (como el JBR incorporado en Android Studio) antes de compilar:
    ```bash
    set JAVA_HOME=C:\Program Files\Android\Android Studio\jbr
    ```

### 2. Error: "Installed Build Tools revision 35.0.0 is corrupted"
*   **Causa:** Faltan archivos en las herramientas del SDK instaladas (como `core-lambda-stubs.jar`).
*   **Solución:** Abre Android Studio > SDK Manager > SDK Tools. Desmarca la casilla de **Android SDK Build-Tools 35**, haz clic en Apply para desinstalar, vuelve a marcarla y presiona Apply para reinstalarla limpiamente.

### 3. Error: "Conflictos con un paquete existente" al instalar el APK
*   **Causa:** Ya tienes una versión instalada de Block MS en tu dispositivo móvil firmada con una clave distinta (keystore previo).
*   **Solución:** Desinstala la aplicación Block MS actual de tu celular (asegúrate de borrarla de carpetas seguras o perfiles secundarios) y procede con la instalación del nuevo APK de depuración.

---

## 🗺️ Roadmap

### Funcionalidades Implementadas
*   [x] Integración de motor Phaser con Angular 20.
*   [x] 3 niveles infantiles (5x5, 6x6, 8x8) con pools de piezas específicos.
*   [x] Control de tiempo de juego en modo infantil con overlays de bloqueo.
*   [x] Guardado automático del progreso de la partida en LocalStorage.
*   [x] Sistema de skins e integración de Habilitación de Gestos en móviles.
*   [x] Generación RNG pura sin manipulación de probabilidad en tablero.

### Próximas Funcionalidades (Futuras)
*   [ ] Modo Duelo mejorado multijugador asíncrono.
*   [ ] Integración de efectos de sonido y música de fondo premium.
*   [ ] Localización del juego en múltiples idiomas.

---

## 📄 Licencia

Este proyecto es para uso **personal, familiar y educativo**. No está permitida su redistribución comercial sin la autorización explícita de los autores.

---

## 👥 Créditos

*   **Desarrollador Principal:** eard17
*   **Tecnología y Soporte:** MS Technology
*   **Frameworks:** Ionic Framework, Angular Team y Phaser.js.
