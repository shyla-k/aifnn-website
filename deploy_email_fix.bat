@echo off
echo ============================
echo   Cleaning Project
echo ============================

REM Delete node_modules
echo Deleting node_modules...
rmdir /s /q node_modules

REM Delete dist folder
echo Deleting dist folder...
rmdir /s /q dist

REM Delete Vite cache (if exists)
echo Deleting Vite cache...
rmdir /s /q .vite

echo ============================
echo   Reinstalling dependencies
echo ============================
npm install

echo ============================
echo   Building Project
echo ============================
npm run build

echo ============================
echo   Git Commit & Push
echo ============================
git add .
git commit -m "Cleanup + fresh build + deploy"
git push origin main

echo ============================
echo   Deploying to Vercel
echo ============================
vercel --prod --force

echo ============================
echo   DONE!
echo ============================
pause
