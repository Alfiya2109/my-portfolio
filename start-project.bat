@echo off
title Start 3D Portfolio - Alfiya Khan
echo ======================================================
echo   Starting 3D Portfolio Local Development Server...
echo ======================================================
echo.

call npm run dev

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Could not start the server. 
    echo Please run 'setup.bat' first to install all required dependencies.
    pause
    exit /b %ERRORLEVEL%
)

pause
