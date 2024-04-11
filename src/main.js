import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives
})

// app.use(BootstrapVue)
app.mount('#app')
createApp(App).use(vuetify).mount('#app')
