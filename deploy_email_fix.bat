@echo off
:: ==========================================
:: 🚀 AifNN Auto-Deploy Script
:: ==========================================
echo.
echo ==========================================
echo   🚀 Deploying AifNN Website (Email Fix)
echo ==========================================
echo.

:: 1️⃣ Move to your project directory
cd /d "C:\Users\mkshy\ai-company-website"

:: 2️⃣ Pull latest changes first (optional but safe)
echo 🔄 Pulling latest from GitHub...
git pull origin main
echo.

:: 3️⃣ Stage all changes
echo 🌀 Staging project files...
git add .
echo.

:: 4️⃣ Commit (only if there are changes)
echo 📝 Checking for changes to commit...
git diff --cached --quiet
IF %ERRORLEVEL% EQU 0 (
    echo ⚠️  No changes detected — skipping commit.
) ELSE (
    git commit -m "Update: Email validation + Modal Contact Form Integration"
    echo ✅ Changes committed successfully!
)
echo.

:: 5️⃣ Push to GitHub
echo 📤 Pushing to GitHub (main branch)...
git push origin main
echo.

:: 6️⃣ Deploy to Vercel Production
echo 🚀 Deploying to Vercel Production...
vercel --prod --force
echo.

echo ==========================================
echo   ✅ Deployment complete!
echo   🌐 https://www.aifnn.com
echo ==========================================
pause
