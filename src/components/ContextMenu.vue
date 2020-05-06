<template>
  <div>
    <ul 
      class="next-context-menu" 
      v-show="state.isVisible" 
      :style="{height: `${height}px`, width: `${width}px`}" 
      ref="contextmenu">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { defineComponent, provide, reactive, ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'

export default defineComponent({
  props: {
    width: String,
    height:  String
  },
  name: 'ContextMenu',
  setup(props, { slots, attrs }) {
    provide('instance', getCurrentInstance())
    const contextmenu = ref(null)
    const state = reactive({ isVisible: false })

    const registerHandlers = (ref) => {
      let target = ref.el
      target.addEventListener('contextmenu', handleContextMenu)
      document.addEventListener('mousedown', handleOutsideClick, false)
    }
    const unregisterHandlers = () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.addEventListener('mousedown', handleOutsideClick, false)
    }


    const handleContextMenu = (e) => {
      e.preventDefault()
      const { value: menuEl } = contextmenu
      const { pageX: x, pageY: y } = e
      state.isVisible = true
      nextTick(() => {
        const { left, top } = getMenuPosition(x, y)
        menuEl.style.top = `${top + 5}px`
        menuEl.style.left = `${left + 5}px`
      })
    }
    const getMenuPosition = (x, y) => {
      const { value: menuEl } = contextmenu
      const menuStyles = { top: y, left: x }
      const { innerWidth, innerHeight } = window;
      const { clientWidth: menuElWidth, clientHeight: menuElHeight } = menuEl
      if (y + menuElHeight > innerHeight) 
        menuStyles.top -= menuElHeight
      if (x + menuElWidth > innerWidth)  
        menuStyles.left -= menuElWidth
      if (menuStyles.top < 0) 
        menuStyles.top = menuElHeight < innerHeight ? (innerHeight - menuElHeight) / 2 : 0
      if (menuStyles.left < 0) 
        menuStyles.left = menuElWidth < innerWidth ? (innerWidth - menuElWidth) / 2 : 0
      return menuStyles
    }
    const handleOutsideClick = (e) => {
      const { target } = e
      const { value: menuEl } = contextmenu
      const containsHit = menuEl.contains(target)
      if (!containsHit) hideMenu()
    }
    const hideMenu = () => {
      state.isVisible = false
    }
    onMounted(() => {
     //registerHandlers()
    })

    onUnmounted(() => {
      unregisterHandlers()
    })
    return {
      state,
      contextmenu,
      hideMenu,
      registerHandlers
    }
  }
})
</script>

<style>
  
</style>