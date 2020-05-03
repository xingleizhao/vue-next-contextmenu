import  {createApp} from 'vue'
import App from './App.vue'
import './styles/index.styl'
import './styles/font-awesome.min.styl'


const app = createApp(App)
app.directive('contextmenu', (el, binding, vnode) => {
  const instance = vnode.dirs[0].instance
  instance.contextmenu.registerHandlers({el, vnode})
})

//app.mount(App, '#app')
app.mount('#app')
