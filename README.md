# vue-next-contextmenu

基于 vue-next 3.0.0-beta.7 的 contextmenu 组件

![效果图](https://imgkr.cn-bj.ufileos.com/a17942a1-18b0-4ce4-8a44-d91251dbcfbf.png)

## 概览

暴露如下组件：

- `ContextMenu`
- `ContextMenuItem`
- `ContextMenuSub`
- `ContextMenuGroup`

## 安装

### Prerequisites
- Node & NPM

### Install
```sh
npm install vue-next-contextmenu --save
```

## 使用

```js
import  { createApp } from 'vue'
import vm, { ContextMenu, ContextMenuItem } from 'vue-next-contextmenu'
import 'vue-next-contextmenu/index.css'
import App from './App.vue'

const app = createApp(App)
vm.useDirective(app)

app.mount('#app')
```

```js
<template>
  <context-menu width="100">
    <context-menu-item>菜单1</context-menu-item>
    <context-menu-item>菜单2</contex-menu-item>
    <context-menu-item>菜单3</context-menu-item>
  </context-menu>

  <div v-contextmenu>右键点击此区域</div>
</template>
```



