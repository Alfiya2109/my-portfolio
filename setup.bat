@echo off
title Install Dependencies - 3D Portfolio
echo ======================================================
echo   Installing All Project Dependencies...
echo   Please wait a moment...
echo ======================================================
echo.

call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Installation failed! Please make sure Node.js is installed on your computer.
    echo Download Node.js from: https://nodejs.org/
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ======================================================
echo   SUCCESS! All dependencies installed successfully.
echo   You can now double click 'start-project.bat' to run.
echo ======================================================
echo.
pause
