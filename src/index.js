import { usePlugin, useDirective } from './install'
import './styles/index.styl'



const contextmenu = { 
  install(app) {
    usePlugin(app, this)
  }
}

const directive = { 
  install(app) {
    useDirective(app, this)
  }
}

export {
  contextmenu,
  directive
}

