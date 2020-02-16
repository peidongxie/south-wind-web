#!/usr/bin/env sh

set -e
yarn docs:build
cd docs/.vuepress/dist
git init

if [ "$1" = '' ]; then
  git add -A
  git commit -m 'deploy'
  git push -f 'https://e.coding.net/peidongxie/south-wind-pages.git' master
  echo 'www.southwind.peaceandlove.top' >CNAME
  git add -A
  git commit -m 'deploy'
  git push -f 'https://github.com/peidongxie/south-wind-web.git' master

elif [ "$1" = 'github' ]; then
  echo 'www.southwind.peaceandlove.top' >CNAME
  git add -A
  git commit -m 'deploy'
  git push -f 'https://github.com/peidongxie/south-wind-web.git' master

elif [ "$1" = 'coding' ]; then
  git add -A
  git commit -m 'deploy'
  git push -f 'https://e.coding.net/peidongxie/south-wind-pages.git' master

else
  echo '请重新输入部署地址或追加部署脚本'
fi

cd -
