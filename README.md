# vue-next-contextmenu


基于 vue-next 3.0.0-beta.7 的 contextmenu 组件

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


### Prerequisites
- Node & NPM

### Install
```sh
npm install
```
### Usage
##### Develop
```sh
# run dev server at localhost:8080
npm run dev
```
##### Build
```sh
# transpile js for deployment
npm run build
```
=======
Experimental package based on Vue next

