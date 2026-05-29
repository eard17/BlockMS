@echo off
setlocal enabledelayedexpansion

REM Gradle wrapper - Windows native batch script

set SCRIPT_DIR=%~dp0
cd /d "%SCRIPT_DIR%"

REM Call the actual gradle wrapper batch file with all arguments
call "%SCRIPT_DIR%gradlew.bat" %*

REM Propagate exit code
exit /b %ERRORLEVEL%
