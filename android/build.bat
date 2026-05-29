@echo off
REM Build script for Block MS Android APK
cd /d "%~dp0"
echo Building Block MS APK...
call gradlew.bat clean assembleDebug
if %ERRORLEVEL% EQU 0 (
    echo.
    echo BUILD SUCCESSFUL!
    echo APK location: app\build\outputs\apk\debug\
    dir /s app\build\outputs\apk\debug\*.apk
) else (
    echo BUILD FAILED with exit code %ERRORLEVEL%
)
pause
