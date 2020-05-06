
import ContextMenu from './components/ContextMenu.vue'
import ContextMenuItem from './components/ContextMenuItem.vue'
import ContextMenuSub from './components/ContextMenuSub.vue'
import ContextMenuGroup from './components/ContextMenuGroup.vue'


export const usePlugin = (app) => { 
  app.component(ContextMenu.name, ContextMenu)
  app.component(ContextMenuItem.name, ContextMenuItem)
  app.component(ContextMenuSub.name, ContextMenuSub)
  app.component(ContextMenuGroup.name, ContextMenuGroup)
}

export const useDirective = (app) => { 
  app.directive('contextmenu', (el, binding, vnode) => {
    const instance = vnode.dirs[0].instance
    instance.contextmenu.registerHandlers({el, vnode})
  })
}


