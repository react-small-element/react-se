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

## 使用说明

#### 组件

###### Button 按钮

**属性**

| 参数           | 说明                                   | 类型    | 可选值 | 默认值 |
| :------------- | -------------------------------------- | ------- | ------ | ------ |
| disabled       | 是否禁用                               | boolean | -      | false  |
| leftIcon       | 按钮左侧图标 icon class(classfont.css) | string, | -      | -      |
| leftIconStyle  | 左侧图标行内样式                       | object  | -      | -      |
| rightIcon      | 按钮右侧图标(同左侧图标)               | string  | -      | -      |
| rightIconStyle | 同左侧图标                             | object  | -      | -      |
| style          | 行内样式                               | object  | -      | -      |
| edef           | 是否阻止默认事件(任何非空值表示 true)  | string  | -      | null   |
| className      | 类名                                   | string  | -      | -      |
| children       | props.children                         | any     | -      | -      |
| otherProps     | 其他自有属性                           | -       | -      | -      |

**事件**

| 事件名称     | 说明     | 回调参数 |
| :----------- | -------- | -------- |
| onClick      | 点击     | -        |
| onMouseEnter | 鼠标进入 | -        |
| onMouseLeave | 鼠标离开 | -        |

###### UploadFile 选择文件按钮

**属性**

| 参数               | 说明                                                   | 类型    | 可选值 | 默认值 |
| :----------------- | ------------------------------------------------------ | ------- | ------ | ------ |
| src                | 图片地址(当有值时显示为图片按钮)                       | string  | -      | -      |
| alt                | 图片说明(当 src 有值时有效)                            | string  | -      | -      |
| imgClassName       | 图片按钮类名(当 src 有值时有效)                        | string  | -      | -      |
| imgStyle           | 图片按钮行内样式(当 src 有值时有效)                    | object  | -      | -      |
| btnStyle           | 按钮行内样式 (当 src 空时有效)                         | object  | -      | -      |
| btnClassName       | 按钮类名(当 src 空时有效)                              | string  | -      | -      |
| leftIcon           | 按钮左侧图标 icon class(classfont.css.当 src 空时有效) | string, | -      | -      |
| leftIconClassName  | 左侧图标类名(当 src 空时有效)                          | object  | -      | -      |
| rightIcon          | 按钮右侧图标(同左侧图标)                               | string  | -      | -      |
| rightIconClassName | 同左侧图标                                             | object  | -      | -      |
| boxStyle           | 盒子按钮行内样式                                       | object  | -      | -      |
| accept             | 限制文件类型                                           | string  | -      | -      |

**事件**

| 事件名称 | 说明           | 回调参数  |
| :------- | -------------- | --------- |
| onChange | 文件改变时触发 | file 对象 |

###### AutoSize 一个随窗口变化而宽高自变化的 div

**属性**

| 参数         | 说明           | 类型   | 可选值 | 默认值 |
| :----------- | -------------- | ------ | ------ | ------ |
| style        | 行内样式       | object | -      | -      |
| className    | 类名           | string | -      | -      |
| reduceHeight | 保留的高度     | number | -      | -      |
| reduceWidth  | 保留的宽度     | number | -      | -      |
| children     | props.children | any    | -      | -      |

###### ImgZoom 图片容器。自带功能：查看原图，旋转，放大，缩小

**属性**

| 参数                | 说明                                  | 类型    | 可选值 | 默认值 |
| :------------------ | ------------------------------------- | ------- | ------ | ------ |
| style               | 行内样式                              | object  | -      | -      |
| boxStyle            | 盒子行内样式                          | object  | -      | -      |
| src                 | 图片地址                              | string  | -      | -      |
| alt                 | 图片说明                              | string  | -      | -      |
| className           | 类名                                  | string  | -      | -      |
| smallImgIconName    | 查看原图 icon class(classfont.css)    | string, | -      | -      |
| bigImgIconName      | 原图关闭 icon class(classfont.css)    | string, | -      | -      |
| toolsRotateIconName | 工具栏-旋转 icon class(classfont.css) | string, | -      | -      |
| toolsBigIconName    | 工具栏-放大 icon class(classfont.css) | string, | -      | -      |
| toolsSmallIconName  | 工具栏-缩小 icon class(classfont.css) | string, | -      | -      |

###### Input 输入框

**属性**

| 参数          | 说明                               | 类型    | 可选值 | 默认值 |
| :------------ | ---------------------------------- | ------- | ------ | ------ |
| style         | 行内样式                           | object  | -      | -      |
| className     | 类名                               | string  | -      | -      |
| iconName      | 输入框内 icon class(classfont.css) | string, | -      | -      |
| iconClassName | icon 类名 (iconName 有值时有效)    | string, | -      | -      |
| iconStyle     | icon 行内样式(iconName 有值时有效) | object  | -      | -      |
| placeholder   | 提示信息                           | string  | -      | -      |
| otherProps    | 其他自有属性                       | -       | -      | -      |

**事件**

| 事件名称    | 说明               | 回调参数 |
| :---------- | ------------------ | -------- |
| onChange    | 内容改变时触发     | value    |
| onKeyUp     | 键盘按键弹起时触发 | event    |
| onFocus     | input 聚焦是触发   | -        |
| onIconClick | 点击 icon 时触发   | -        |

###### Textarea 输入文本框

**属性**

| 参数       | 说明         | 类型   | 可选值 | 默认值 |
| :--------- | ------------ | ------ | ------ | ------ |
| className  | 类名         | string | -      | -      |
| rows       | 行数         | number | -      | -      |
| otherProps | 其他自有属性 | -      | -      | -      |

**事件**

| 事件名称 | 说明           | 回调参数 |
| :------- | -------------- | -------- |
| onChange | 内容改变时触发 | value    |

###### Modal 遮罩层

**属性**

无

###### PopupPanels 弹出窗

**属性**

| 参数      | 说明           | 类型    | 可选值 | 默认值 |
| :-------- | -------------- | ------- | ------ | ------ |
| style     | 行内样式       | object  | -      | -      |
| className | 类名           | string  | -      | -      |
| isDrag    | 是否可拖动     | boolean | -      | false  |
| children  | props.children | any     | -      | -      |

###### PopupPanelsHeader 弹出窗头部。与弹出窗配合使用

**属性**

| 参数      | 说明           | 类型   | 可选值 | 默认值 |
| :-------- | -------------- | ------ | ------ | ------ |
| style     | 行内样式       | object | -      | -      |
| className | 类名           | string | -      | -      |
| children  | props.children | any    | -      | -      |

###### PopupPanelsContent 弹出窗主体。与弹出窗配合使用

**属性**

| 参数      | 说明           | 类型   | 可选值 | 默认值 |
| :-------- | -------------- | ------ | ------ | ------ |
| style     | 行内样式       | object | -      | -      |
| className | 类名           | string | -      | -      |
| children  | props.children | any    | -      | -      |

###### PopupPanelsFooter 弹出窗脚部。与弹出窗配合使用

**属性**

| 参数      | 说明           | 类型   | 可选值 | 默认值 |
| :-------- | -------------- | ------ | ------ | ------ |
| style     | 行内样式       | object | -      | -      |
| className | 类名           | string | -      | -      |
| children  | props.children | any    | -      | -      |

###### Circle 圆圈

**属性**

| 参数      | 说明             | 类型   | 可选值 | 默认值 |
| :-------- | ---------------- | ------ | ------ | ------ |
| style     | 行内样式         | object | -      | -      |
| className | 类名             | string | -      | -      |
| diameter  | 直径(如: "10px") | string | -      | -      |
| children  | props.children   | any    | -      | -      |

###### Sliver 提示框。位于文档流里。

**属性**

| 参数          | 说明                                                   | 类型   | 可选值                     | 默认值 |
| :------------ | ------------------------------------------------------ | ------ | -------------------------- | ------ |
| message       | 提示内容                                               | string | -                          | -      |
| leftIcon      | 左侧图标 icon class(classfont.css)                     | string | -                          | -      |
| leftIconStyle | 左侧图标行内样式(leftIcon 有值时有效)                  | object | -                          | -      |
| second        | 自动关闭时间 /秒 (0,则永不自动关闭)                    | number | -                          | 3      |
| type          | 提示类型                                               | string | error, success, warn, info | "info" |
| closeIcon     | 关闭图标 icon class(classfont.css, second 为 0 时有效) | string | -                          | -      |

**事件**

| 事件名称 | 说明              | 回调参数 |
| :------- | ----------------- | -------- |
| callback | Sliver 关闭时触发 | -        |

#### 主题

主题样式开发使用**sass**，若想修改主题样式，建议直接下载 **/src/asset/scss/index.scss** 进行修改然后覆盖。<br/>
此方式比较方便快捷

#### 工具
