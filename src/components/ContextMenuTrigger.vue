<template>
  <div>
    <slot/>
  </div>
</template>

<script>
import { onMounted, nextTick } from 'vue'
export default {
  props: {
    targetRef: Proxy
  },
  setup(props) {
    onMounted(() => {
      // console.log(props)
    })
  }
}
</script>

<style>

</style>