<template>
  <li class="context-menu-item" :class="itemClass" @click="handleClickItem"> 
    <slot/>
  </li>
</template>

<script>
import { reactive, computed, inject } from "vue"
export default {
  props: {
    disabled: Boolean,
    hideMenu: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const rootInstance = inject('instance')
    const itemClass = reactive({
      'context-menu-item-disabled': computed(() => props.disabled)
    })
    
    const handleClickItem = (event) => {
      props.hideMenu && rootInstance.ctx.hideMenu()
    }
    return {
      rootInstance,
      itemClass,
      handleClickItem,
    }
  }
}
</script>

<style>

</style>