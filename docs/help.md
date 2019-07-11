# 晋沐南风网站文档

## 写在前面

- 晋沐南风网站1.0构建于2018年4月，是一个基于HTML+CSS+JS的简单静态网站。
- 晋沐南风网站2.0构建于2019年5月，是一个基于Vuepress的简单静态网站。

目前版本2.x

- 网站的维护人员请阅读[快速上手](#快速上手)和[目标任务](#目标任务)部分
- 网站的开发人员请阅读[搭建流程](#搭建流程)和[目标任务](#目标任务)部分

## 快速上手

TODO

## 搭建流程

### 准备

- 适合前端开发的系统：Windows 10、Mac OS、Linux发行版（以下用Manjaro演示）
- JavaScript运行的非浏览器环境：Node.js
- 至少一个JavaScript包管理器：npm、yarn（以下使用yarn演示）
- 至少一个文本编辑器：VS code、Sublime Text、Atom

### 初始化

创建项目位置，进入项目目录。

```shell
mkdir south-wind-web
cd south-wind-web
```

创建目录结构。

```shell
mkdir docs
mkdir docs/.vuepress
mkdir docs/.vuepress/components
mkdir docs/.vuepress/theme
mkdir docs/.vuepress/public
mkdir docs/.vuepress/styles
mkdir docs/.vuepress/templates
touch docs/.vuepress/config.js
touch docs/.vuepress/enhanceApp.js
touch docs/README.md
```

编辑README.md文档，示例如下。

```markdown
# Hello World!
```

利用yarn初始化。通常为默认配置，在命令行提示下按Enter键至结束。项目目录下应该出现了package.json。

```shell
yarn init
```

为当前项目安装Vuepress，稍等几分钟（建议使用了1.x版本）。项目目录下应该出现了node_modules、yarn.lock。

```shell
yarn add -D vuepress@next
```

向package.json加入两条脚本。改动后package.json如下图所示（Vuepress版本可能有所不同）。

```json
{
  "name": "south-wind-web",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.0.0-alpha.48"
  },
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

在本地启动，通过浏览器访问http://127.0.0.1:8080，或http://localhost:8080（端口默认为8080，如果被占用则依次顺延至8081、8082）。

```shell
yarn docs:dev
```

正常显示则初始化完成。

### 文本注入

TODO

### 本地配置

TODO

### GitHub配置

TODO

## 目标任务

TODO
