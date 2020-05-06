<template>
  <li 
    class="context-menu-item context-menu-sub"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    >
    <div class="menu-sub-label">
      <span><slot name="label">{{label}}</slot></span>
      <i class="fa fa-angle-right"></i>
    </div>
    <ul class="next-context-menu" :class="getClassName" ref="contextmenuSub" v-show="hover">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import { onMounted, onUnmounted, ref, reactive, nextTick, computed } from 'vue'
export default {
  name: 'ContextMenuSub',
  props: {
    label: String
  },
  setup() {
    const contextmenuSub = ref(null)
    const hover = ref(false)
    const dynamicClass = reactive({ name: [] })
    const handleMouseEnter = (e) => {
      console.log(e)
      hover.value = true
      nextTick(() => {
        dynamicClass.name = setDynamicClass(e)
      })
    }
    const handleMouseLeave = (e) => {
      hover.value = false
    }
    const setDynamicClass = (e) => {
      const dynamicClassName = []
      const { target } = e
      const { innerWidth, innerHeight } = window
      const { clientWidth: subMenuWidth, clientHeight: subMenuHeight} = contextmenuSub.value
      const rect = target.getBoundingClientRect()
      if (rect.bottom + subMenuHeight > innerHeight) {
        dynamicClassName.push('bottom')         /** position.bottom = 0 */
      } else dynamicClassName.push('top')       /** position.top = 0 */
      if (rect.right + subMenuWidth > innerWidth) {
        dynamicClassName.push('left')           /** position.left = 0 */
      } else dynamicClassName.push('right')     /** position.right = 0 */
      return dynamicClassName
    }
    const getClassName = computed(() => dynamicClass.name)
    return {
      contextmenuSub,
      hover,
      handleMouseEnter,
      handleMouseLeave,
      dynamicClass,
      getClassName,
      setDynamicClass
    }
  }
}
</script>

<style>

</style>