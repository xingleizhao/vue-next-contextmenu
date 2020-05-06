import  {createApp} from 'vue'
import App from './App.vue'
import './styles/index.styl'

//import vm from '../dist/index'

const app = createApp(App)
//vm.useDirective(app)

app.directive('contextmenu', (el, binding, vnode) => {
  const instance = vnode.dirs[0].instance
  instance.contextmenu.registerHandlers({el, vnode})
})

app.mount('#app')
