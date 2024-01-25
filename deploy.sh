#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigation to output directory
cd dist
cp index.html 404.html
# git instrucction

git init 
git add -A
git commit -m "deploy"

git push -f https://github.com/copugarute/bigmobile-app.git master

cd -