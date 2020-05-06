import  { createApp } from 'vue'
import App from './App.vue'
import './styles/index.styl'

// import { contextmenu, directive }  from '../dist/index'

const app = createApp(App)
// app.use(contextmenu)
// app.use(directive)

app.directive('contextmenu', (el, binding, vnode) => {
  const instance = vnode.dirs[0].instance
  instance.contextmenu.registerHandlers({el, vnode})
})

app.mount('#app')
