# Guía Paso a Paso: Gestión y Cambio de Firma de la Aplicación en Android (Google Play)

Este documento sirve como manual de referencia para generar una nueva clave de firma, configurar la firma en el proyecto y realizar el cambio o restablecimiento de la clave en **Google Play Console** en caso de pérdida o actualización.

---

## 📌 1. Conceptos Clave
Antes de iniciar, es importante entender la diferencia entre las dos claves en Google Play:
*   **Clave de firma de la aplicación (App Signing Key):** Es la clave que Google utiliza para firmar los APKs que finalmente se descargan los usuarios desde la Play Store.
*   **Clave de carga (Upload Key):** Es la clave con la que tú firmas el archivo `.aab` (Android App Bundle) o `.apk` en tu máquina antes de subirlo a Google Play Console. Google verifica esta clave y, si coincide, reemplaza la firma por la *App Signing Key*.

> [!WARNING]
> Si pierdes la **Clave de carga (Upload Key)**, no podrás subir nuevas versiones. Sin embargo, gracias a la gestión de firmas de Google Play, puedes solicitar un restablecimiento sin tener que publicar la aplicación como una app nueva.

---

## 🛠️ 2. Cómo generar una Nueva Clave de Firma (Keystore)

Para generar un nuevo archivo de almacén de claves (`keystore` o `.jks`), usaremos la herramienta `keytool` que viene incluida con el JDK de Java.

### Paso 2.1: Ejecutar el comando de generación
Abre una terminal (PowerShell o CMD) y ejecuta el siguiente comando:

```bash
keytool -genkeypair -v -keystore blockms-upload-key.jks -alias blockms-alias -keyalg RSA -keysize 2048 -validity 10000
```

*   **`-keystore blockms-upload-key.jks`**: Es el nombre del archivo que se creará (puedes cambiarlo, ej: `blockms-release.jks`).
*   **`-alias blockms-alias`**: El alias identificador de la clave dentro del keystore.
*   **`-validity 10000`**: Validez en días (aprox. 27 años).

### Paso 2.2: Responder a las preguntas
Durante la ejecución te pedirá:
1.  **Una contraseña segura:** Escríbela y guárdala muy bien (no se muestra mientras escribes).
2.  **Información sobre ti/organización:** Nombre, unidad organizativa, organización, ciudad, estado y código de país de dos letras (ej: `CO` para Colombia, `ES` para España, etc.).
3.  **Confirmación:** Escribe `sí` o `yes` cuando te pregunte si los datos son correctos.

> [!IMPORTANT]
> Guarda el archivo `.jks` generado, el alias y la contraseña en un lugar seguro (por ejemplo, en un gestor de contraseñas como 1Password, Bitwarden o Keepass). ¡No los subas a repositorios públicos de GitHub!

---

## 📤 3. Exportar el Certificado PEM para Google Play Console
Si necesitas subir la nueva clave a Google Play Console (para restablecer una clave de carga perdida o configurar una clave personalizada), debes exportar el certificado público en formato **PEM**.

Ejecuta el siguiente comando apuntando al keystore que acabas de generar:

```bash
keytool -export -rfc -alias blockms-alias -file upload_certificate.pem -keystore blockms-upload-key.jks
```

*   Esto generará un archivo llamado `upload_certificate.pem`.
*   Este archivo `.pem` es el que subirás a Google Play Console cuando te lo solicite.

---

## 🌐 4. Proceso en Google Play Console

Dependiendo de tu situación, sigue uno de estos caminos:

### Caso A: Si perdiste la clave de carga actual (Restablecimiento)
1.  Inicia sesión en [Google Play Console](https://play.google.com/console/).
2.  Selecciona tu aplicación.
3.  En el menú izquierdo, ve a **Versión** > **Configuración** > **Integridad de la app** (*Release* > *Setup* > *App integrity*).
4.  Ve a la pestaña **Firma de apps** (*App signing*).
5.  Haz clic en **Solicitar restablecimiento de la clave de carga** (*Request upload key reset*).
6.  Selecciona el motivo (ej. "He perdido la clave de carga").
7.  Sube el archivo `upload_certificate.pem` que generaste en el **Paso 3**.
8.  Haz clic en **Solicitar**.
9.  *Google tardará entre 24 y 48 horas en procesar la solicitud.* Te llegará un correo de confirmación indicando a partir de qué fecha y hora podrás empezar a firmar y subir versiones con tu nueva clave.

### Caso B: Si estás configurando/cambiando la clave de firma de la aplicación (Tus capturas)
Como se observa en tus capturas de pantalla:
1.  Al hacer clic en **Cambiar clave de firma** en la sección de integridad:
2.  Se te advierte que las versiones de prueba previas dejarán de ser válidas para los usuarios de canales cerrados/internos.
3.  En **Preferencias de firma de aplicaciones**, tienes las siguientes opciones:
    *   **Deja que Google gestione y proteja tu clave (Recomendado):** Google generará y guardará de forma segura la clave de firma definitiva. Tú solo tendrás que firmar localmente con tu clave de carga (Upload Key).
    *   **Exportar y subir una clave del almacén de claves de Java:** Si quieres definir tú mismo la clave de firma final usando el archivo `.jks` que creaste. Deberás usar una herramienta proporcionada por Google (PEPKEY) para cifrar y subir el Keystore.

---

## 💻 5. Configurar la firma automática en el proyecto (Opcional pero Recomendado)

Para evitar firmar manualmente desde Android Studio cada vez, puedes configurar el archivo Gradle del proyecto para que lea la firma automáticamente.

### Paso 5.1: Mover el Keystore
Copia tu archivo `blockms-upload-key.jks` dentro de la carpeta:
`android/app/`

### Paso 5.2: Modificar `android/app/build.gradle`
Puedes declarar los datos de tu firma en el bloque `signingConfigs`.

```groovy
android {
    ...
    signingConfigs {
        release {
            storeFile file('blockms-upload-key.jks')
            storePassword 'TU_CONTRASEÑA_DEL_KEYSTORE'
            keyAlias 'blockms-alias'
            keyPassword 'TU_CONTRASEÑA_DE_LA_CLAVE'
        }
    }
    
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            // Aplicar la firma de release
            signingConfig signingConfigs.release
        }
    }
}
```

> [!TIP]
> Por seguridad, es mejor no escribir las contraseñas en texto plano dentro de `build.gradle` si el código se sube a repositorios compartidos. En su lugar, se pueden usar variables de entorno o un archivo local `local.properties` que esté en el `.gitignore`.

---

## 🚀 6. Generar el archivo de producción (.aab)

Una vez que tengas la firma configurada o lista para usar en Android Studio:

### Método A: Desde Android Studio (Recomendado)
1. Abre la carpeta `android` en **Android Studio**.
2. Ve a **Build** > **Generate Signed Bundle / APK...**
3. Selecciona **Android App Bundle** y haz clic en **Next**.
4. Selecciona tu archivo `blockms-upload-key.jks`, introduce el alias y las contraseñas.
5. Elige la carpeta de destino y el tipo de compilación (**release**).
6. Haz clic en **Create**.
7. Sube el archivo `.aab` generado (en `android/app/release/app-release.aab`) a Google Play Console.

### Método B: Desde consola (Si configuraste el paso 5.2)
Ejecuta en la raíz del proyecto:
```bash
npm run build
npx cap sync
cd android
./gradlew bundleRelease
```
El archivo final firmado estará en:
`android/app/build/outputs/bundle/release/app-release.aab`
