#!/usr/bin/env bash
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git remote add origin git@github.com:nicholas-lay/webpack-demo.git &&
git add . &&
git commit -m 'update' &&
git branch -M gh-pages &&
git push -f &&
exit 0



