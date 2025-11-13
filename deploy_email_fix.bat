@echo off
:: ==========================================
:: 🚀 AifNN Auto-Deploy Script
:: ==========================================
echo.
echo ==========================================
echo  🚀 Deploying AifNN Website (Email Fix)
echo ==========================================
echo.

:: 1️⃣ Move to your project directory
cd /d "C:\Users\mkshy\ai-company-website"

:: 2️⃣ Add your latest code
echo 🌀 Staging updated App.jsx ...
git add . 

:: 3️⃣ Commit with message
echo 📝 Committing changes ...
git commit -m "Improve email validation for real domain check"

:: 4️⃣ Push to GitHub
echo 📤 Pushing to GitHub (main branch) ...
git push origin main

:: 5️⃣ Deploy to Vercel (Production)
echo 🚀 Deploying to Vercel Production ...
vercel --prod --force

echo.
echo ✅ Deployment complete!
echo 🌐 Visit your site: https://www.aifnn.com
echo ------------------------------------------
pause
