<template>
  <ul class="context-menu-group">
    <span v-if="name" class="context-menu-group-name">{{name}}</span>
    <slot></slot>
  </ul>
</template>

<script>
import { reactive } from "vue";
export default {
  name: 'ContextMenuGroup',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>