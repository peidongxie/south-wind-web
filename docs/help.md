# 晋沐南风帮助文档

## 版本

- 晋沐南风网站1.0构建于2018年4月，是一个基于HTML+CSS+JS的简单静态网站。
- 晋沐南风网站2.0构建于2019年5月，是一个基于VuePress的渐进式Web应用。

目前版本2.x

## 特性

- 响应式布局，不同平台上都有较好的适配（包括移动端横屏适配）
- PWA，在现代化的浏览器首次加载后会提升下次加载速度，部分移动端浏览器（如chrome、firefox、小米浏览器）可以将其添加至桌面，提供近乎Native的体验
- 标题检索，匹配若干级文档标题

## 开始之前

- 网站的维护人员请阅读[快速上手](#快速上手)部分
- 网站的开发人员请阅读[快速上手](#快速上手)、[搭建流程](#搭建流程)和[目标任务](#目标任务)部分

## 快速上手

### 准备

- 适合前端开发的系统：Windows 10、Mac OS、Linux发行版（以下用Manjaro演示）
- JavaScript运行的非浏览器环境：Node.js
- 至少一个JavaScript包管理器：npm、Yarn（以下使用Yarn演示）
- 至少一个编辑器：VS code、Sublime Text、Atom、 WebStorm

## 架构

![架构图](/img/architecture.png)

双分离：

- 源码仓库与产品仓库分离，便于开发部署
- 国内产品仓库与海外产品仓库分离，不同的部署平台配合跳转脚本，加快访问速度

### 目录

``` filetree
.
├── .git (Git配置信息)
│
├── docs (内容目录)
│   ├── .vuepress (非文档内容目录)
│   │   ├── components (组件目录)
│   │   │   └── ...
│   │   │
│   │   ├── dist (构建输出目录)
│   │   │   └── ...
│   │   │
│   │   ├── public (公共资源目录)
│   │   │   ├── img (公共图片目录)
│   │   │   ├── js (公共脚本目录)
│   │   │   └── manifest.json (PWA清单)
│   │   │
│   │   └── config.js (VuePress配置信息)
│   │
│   ├── courses (课程设置文档目录)
│   │   └── ...
│   │
│   ├── details (支教详情文档目录)
│   │   └── ...
│   │
│   ├── glimpses (活动掠影文档目录)
│   │   └── ...
│   │
│   ├── help.md (帮助文档)
│   └── README.md (主页文档)
│
├── node_modules (依赖模块目录)
│   └── ...
│
├── .gitignore (Git忽略信息)
├── deploy.sh (部署脚本)
├── package.json (Node.js配置信息)
└── yarn.lock (Yarn配置信息)
```

### 本地构建项目

在项目根目录

``` shell
yarn docs:build
```

构建输出目录为docs/.vuepress/dist，仅用来查错，不用来预览效果

### 本地启动项目

在项目根目录

``` shell
yarn docs:dev
```

根据提示访问本地端口，一般为localhost:8080或127.0.0.1:8080

::: tip
改动一般会自动重启，无需手动重启；一些改动后自动重启得不到预期效果，需要手动重启
:::

::: warning
若要关闭使用Ctrl+C而不是Ctrl+Z
:::

::: danger
在本地启动项目前先本地构建项目，否则可能启动失败且难以看到报错信息
:::

### 改动文档

在docs目录

文件的相对路径与页面路由地址一一对应，非README文档的相对路径与相应的页面路由地址一致，README文档的相对路径与它父文件夹相应的页面路由地址一致。如：

- /help.md 与 /help.html 对应
- /details/summary.md 与 /details/summary.html 对应
- /README.md 与 / 对应
- /courses/README.md 与 /courses/ 对应

md文档第一部分可以加入YAML front matter，如以下实例可以隐藏页面下方指向前一篇和后一篇的链接：

``` markdown
---
prev: false
next: false

---
```

::: warning
在每个部分的第一份文档和最后一份文档，可能需要隐藏链接；增删文档时需要注意是否需要改动原有文档的YAML front matter
:::

::: danger
YAML front matter是可选的，有则必须是第一部分；文档第一级的标题（用“#”标注的）是必需的、唯一的，必须是紧跟YAML front matter的第二部分
:::

增删文档可能需要修改目录，在docs/.vuepress/config.js中增删页面路由地址

### 改动图片

将所需要用到的图片注入docs/.vuepress/public/img目录，然后在docs/glimpses/README.md中改动组件，组件photo示例如下：

``` html
<photo initName='晋沐南风教师课后为同学们答疑解惑' initTime='2018年8月12日' initImgName='答疑' initImgUrl='answer.jpg'/>
```

其中initName是图片标题名称，initTime是图片记录时间，initImgName是下载后的图片名称，initImgUrl是图片相对路径

::: warning
initImgName不用加文件扩展名
:::

::: danger
initImgUrl省略了“/img/”，不用加入“/img/”或是“/”，否则会解析错误
:::

### 部署项目

将改动同步到远程仓库

``` shell
git add -A
git commit -m "comment"
git push
```

在项目根目录

``` shell
yarn deploy
```

如果仅部署到腾讯云

``` shell
yarn deploy tencent
```

如果仅部署到GitHub

``` shell
yarn deploy github
```

::: info
出现权限相关问题，发邮件至peidongxie@outlook.com
:::

::: warning
先将项目同步至远程仓库后再部署，以显示正确的编辑时间
:::

::: danger
在部署项目前先本地启动项目，否则可能部署失败，直接影响网站
:::

## 搭建流程

创建项目目录，并进入

``` shell
mkdir south-wind-web
cd south-wind-web
```

初始化git，创建.gitignore文件

``` shell
git init
touch .gitignore
```

向.gitignore文件追加内容

``` gitignore
.idea/
node_modules/
docs/.vuepress/dist/
```

初始化yarn，创建deploy.sh文件

``` shell
yarn init
# 按8次Enter
yarn add vuepress --dev
yarn add @vuepress/plugin-back-to-top --dev
yarn add @vuepress/plugin-medium-zoom --dev
yarn add @vuepress/plugin-nprogress --dev
yarn add @vuepress/plugin-pwa --dev
touch deploy.sh
```

向deploy.sh文件追加内容

``` shell
#!/usr/bin/env sh

cnames[0]='southwind.peaceandlove.top'
cnames[1]='jmnf.peaceandlove.top\nhxzm.peaceandlove.top'
repos[0]='git@github.com:peidongxie/south-wind-pages.git'
repos[1]='git@git.dev.tencent.com:peidongxie/south-wind-pages.git'
deploy() {
    echo -e $1 > CNAME
    git add -A
    git commit -m 'deploy'
    git push -f $2 master
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
```

向package.json文件的对象追加内容

``` json
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
}
```

创建内容目录、非文档内容目录，进入非文档内容目录，创建config.js文件

``` shell
mkdir docs
mkdir docs/.vuepress
cd docs/.vuepress
touch config.js
```

向deploy.sh文件中追加内容

``` js
module.exports = {
    title: '晋沐南风',
    description: '晋沐南风支教官网——山西学子回乡筑梦',
    head: [
        ['link', { rel: 'icon', href: '/img/logo/logo-without-name.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['script', { src: '/js/jump.js' }]
    ],
    themeConfig: {
        nav: [
            { text: '支教详情', link: '/details/summary' },
            { text: '课程设置', link: '/courses/' },
            { text: '活动掠影', link: '/glimpses/' }
        ],
        sidebar: [
            {
                title: '支教详情',
                path: '/details/summary',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/details/summary',
                    '/details/team',
                    '/details/commonweal',
                    '/details/entrepreneurship',
                    '/details/practicality'
                ]
            },
            {
                title: '课程设置',
                path: '/courses/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/courses/biology',
                    '/courses/computer',
                    '/courses/debate',
                    '/courses/earth',
                    '/courses/economics',
                    '/courses/game',
                    '/courses/korean',
                    '/courses/math',
                    '/courses/physics',
                    '/courses/read-and-write',
                    '/courses/russia',
                    '/courses/science-fiction'
                ]
            },
            {
                title: '活动掠影',
                path: '/glimpses/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                ]
            }
        ],
        lastUpdated: '编辑时间',
    },
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/medium-zoom': {},
        '@vuepress/nprogress': {},
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: '发现支教新动态～',
                buttonText: '刷新一下',
            }
        }
    }
};
```

创建组件目录、公共资源目录，回到项目目录

``` shell
mkdir components
mkdir public
cd -
```

向docs目录注入文档
向docs/.vuepress/components目录注入组件
向docs/.vuepress/public目录注入公共资源

将项目推送远程仓库

``` shell
git add -A
git commit -m 'init'
git remote add origin git@github.com:peidongxie/south-wind-web.git
git push -u origin master
```

部署项目

``` shell
yarn deploy
```

## 目标任务

- 重新创作logo，使得logo更加简练大气
- 重写默认颜色常量，使得主题色配合logo
- 新增本地主题，优化UI
- 新增全局组件，丰富呈现
- 新增后端，部署在云服务器上，使得更多功能有实现可能
- 新增不依赖于GitHub的评论功能，需要依赖于后端账户和评论两类接口
- 新增在线编辑功能，需要依赖于部署平台的Webhooks（源码仓库更新实时pull）和后端的自动部署（修改源码实时build、deploy）
