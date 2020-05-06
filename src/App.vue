<template>
<div>
  <context-menu width="100" ref="contextmenu">
    <context-menu-group name="分组标题">
        <context-menu-item>菜单项</context-menu-item>
        <context-menu-item disabled>item11</context-menu-item>
        <context-menu-item @click="handleSelect">菜单项</context-menu-item>
      </context-menu-group>
      <context-menu-group>
        <context-menu-item>菜单项</context-menu-item>
        <context-menu-item :hideMenu="false">不隐藏菜单</context-menu-item>
        <context-menu-sub label="子菜单">
          <context-menu-item>菜单项</context-menu-item>
          <context-menu-item>菜单项</context-menu-item>
          <context-menu-group name="分组标题">
            <context-menu-item>菜单项</context-menu-item>
            <context-menu-item disabled>菜单项</context-menu-item>
            <context-menu-item @click="handleSelect">菜单项</context-menu-item>
          </context-menu-group>
        </context-menu-sub>
      </context-menu-group>
  </context-menu>
  <div v-contextmenu>
    <div style="width: 100%; height: 200px; background: #fdf9e1;"></div>
  </div>
</div>
</template>

<script>
import ContextMenu from './components/ContextMenu.vue'
import ContextMenuItem from './components/ContextMenuItem.vue'
import ContextMenuGroup from './components/ContextMenuGroup.vue'
import ContextMenuSub from "./components/ContextMenuSub.vue"

import { defineComponent, ref, nextTick, createApp } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    ContextMenu,
    ContextMenuGroup,
    ContextMenuSub,
    ContextMenuItem,
  },
  setup(props) {
    const contextmenu = ref(null)
    const handleSelect = (e) => {
      console.log(`当前点击的菜单：${e.target.innerHTML}`)
    }
    return {
      contextmenu,
      handleSelect
    }
  }
})
</script>

<style scoped>

</style>
