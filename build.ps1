# Build Block MS APK
$ErrorActionPreference = "Continue"

$projectRoot = "C:\Users\eard1\Desktop\MS Technology\Block MS"
$androidDir = Join-Path $projectRoot "android"

Write-Host "Building Block MS APK..." -ForegroundColor Cyan
Write-Host "Android Directory: $androidDir" -ForegroundColor Gray
Write-Host ""

Write-Host "Compiling web assets (npm run build)..." -ForegroundColor Yellow
npm run build

Write-Host "Syncing with Capacitor (npx cap sync)..." -ForegroundColor Yellow
& npx cap sync android

Set-Location $androidDir

# Run gradle
$gradlewPath = Join-Path $androidDir "gradlew.bat"
Write-Host "Executing: $gradlewPath clean assembleDebug" -ForegroundColor Yellow
Write-Host ""

& $gradlewPath clean assembleDebug

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "BUILD SUCCESSFUL!" -ForegroundColor Green
    Write-Host ""

    $apkPath = Join-Path $androidDir "app\build\outputs\apk\debug\app-debug.apk"
    if (Test-Path $apkPath) {
        $size = (Get-Item $apkPath).Length / 1MB
        Write-Host "APK: $apkPath" -ForegroundColor Green
        Write-Host "Size: $([math]::Round($size, 2)) MB" -ForegroundColor Green
    } else {
        Write-Host "APK not found at: $apkPath" -ForegroundColor Yellow
        Write-Host "Searching for APK files..." -ForegroundColor Yellow
        Get-ChildItem -Path $androidDir -Filter "*.apk" -Recurse
    }
} else {
    Write-Host ""
    Write-Host "BUILD FAILED!" -ForegroundColor Red
    Write-Host "Exit Code: $LASTEXITCODE" -ForegroundColor Red
}

Set-Location $projectRoot
