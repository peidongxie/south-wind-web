#!/usr/bin/env sh

cnames[0]='southwind.peaceandlove.top'
cnames[1]='jmnf.peaceandlove.top\nhxzm.peaceandlove.top'
repos[0]='git@github.com:peidongxie/south-wind-pages.git'
repos[1]='git@git.dev.tencent.com:peidongxie/south-wind-pages.git'
deploy() {
    echo -e $1 > CNAME
    git add -A
    git commit -m 'deploy'
    git push -f $2 master:gh-pages
}

set -e
yarn docs:build
cd docs/.vuepress/dist
git init

if [ "$1" == '' ]
then
deploy ${cnames[0]} ${repos[0]}
deploy ${cnames[1]} ${repos[1]}

elif [ $1 == 'github' ]
then
deploy ${cnames[0]} ${repos[0]}

elif [ $1 == 'tencent' ]
then
deploy ${cnames[1]} ${repos[1]}

else
echo '请重新输入部署地址或追加部署脚本'
fi

cd -
