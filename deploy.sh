#!/usr/bin/env sh

set -e

# build
yarn build

# dist
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/choijinwon/blog-ah.git master:gh-pages 

cd -
