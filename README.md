## react-se

一个简单的自由的 React 基础 UI 库<br/>
一些常用的小工具集

## 环境

node v11.2.0 +<br/>
npm v6.4.1 +<br/>
react v16.8.6 +

## 描述

该项目基于 [Create React App](https://github.com/facebook、create-react-app) 创建<br/>
npm 上的项目是该项目打包后上传的<br/>
打包命令

```javascript
npm run public
```

打包之后生成三个项目位于根目录，分别是<br/>
lib -->主要的 UI 组件<br/>
theme -->UI 样式<br/>
tools -->小工具集

## 安装

```javascript
npm install react-se --save
```

## 示例

#### 引入组件

```javascript
import { Button } from "react-se";
```

#### 引入样式

```javascript
import "react-se/theme/index.css";
```

#### 引入小工具

```javascript
import { getBodyHeight } from "react-se/tools/index.js";
```

## 目录

> README.md //help
>
> src
>
> > asset
>
> > > scss
>
> > > > index.scss //UI 库样式
>
> > > > \_reset.scss //重置浏览器基本样式
>
> > > component //UI 组件
>
> > > tools //小工具目录
>
> package.json
