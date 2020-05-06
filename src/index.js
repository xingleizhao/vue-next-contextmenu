import ContextMenu from './components/ContextMenu.vue'
import ContextMenuItem from './components/ContextMenuItem.vue'
import ContextMenuSub from './components/ContextMenuSub.vue'
import ContextMenuGroup from './components/ContextMenuGroup.vue'
import './styles/index.styl'



const useDirective = (app) => { 
  app.component(ContextMenu.name, ContextMenu)
  app.component(ContextMenuItem.name, ContextMenuItem)
  app.component(ContextMenuSub.name, ContextMenuSub)
  app.component(ContextMenuGroup.name, ContextMenuGroup)
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

