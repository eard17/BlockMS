@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo.
echo Building Block MS - Android APK
echo.

echo Compiling web assets (npm run build)...
call npm run build

echo Syncing with Capacitor (npx cap sync)...
call npx cap sync android

set ANDROID_DIR=%CD%\android
cd /d "%ANDROID_DIR%"

echo Running: gradlew.bat clean assembleDebug
call gradlew.bat clean assembleDebug

if %ERRORLEVEL% EQU 0 (
    echo.
    echo BUILD SUCCESSFUL
    echo.
    echo APK Location:
    dir app\build\outputs\apk\debug\*.apk
    echo.
) else (
    echo.
    echo BUILD FAILED - Exit Code: %ERRORLEVEL%
    echo.
)

cd /d "%~dp0"
