import ContextMenu from './components/ContextMenu.vue'
import ContextMenuItem from './components/ContextMenuItem.vue'
import ContextMenuSub from './components/ContextMenuSub.vue'
import ContextMenuGroup from './components/ContextMenuGroup.vue'


const useDirective = (app) => { 
  app.directive('contextmenu', (el, binding, vnode) => {
    const instance = vnode.dirs[0].instance
    instance.contextmenu.registerHandlers({el, vnode})
  })
}


export {
  ContextMenu,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuGroup,
}

export default {
  useDirective
}

