@echo off
title Git Push Updates - Alfiya Khan
echo ======================================================
echo   Staging, Committing, and Pushing Updates to GitHub...
echo ======================================================
echo.

git add .
git commit -m "Add automatic setup scripts and developer configurations"
echo.
echo [*] Pushing changes to GitHub repository...
git push origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Git push failed. 
    echo Please make sure you are logged into GitHub in your terminal.
) else (
    echo.
    echo ======================================================
    echo   SUCCESS! Your GitHub repository is now fully updated!
    echo ======================================================
)
echo.
pause
