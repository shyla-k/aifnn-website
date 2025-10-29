@echo off
REM -------------------------------
REM Safe Deploy Script for AifNN Website
REM -------------------------------

REM 1. Build the React project
npm run build

REM 2. Go into build folder
cd build

REM 3. Initialize git (if not already initialized)
git init

REM 4. Add all files and commit
git add .
git commit -m "Deploy React site"

REM 5. Switch to gh-pages branch
git branch -M gh-pages

REM 6. Remove old remote and add new remote
git remote remove origin
git remote add origin https://github.com/shyla-k/aifnn-website.git

REM 7. Force push build to gh-pages
git push -u origin gh-pages --force

REM 8. Return to project root
cd ..

echo Deployment complete!
echo Your site is live at:
echo https://shyla-k.github.io/aifnn-website/
pause
