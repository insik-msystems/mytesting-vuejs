# mytesting-vuejs
This is my test application for vue.js.

$ npm i -g @vue/cli
$ vue create wisejin-vue-app

# BootstrapVue
$ cd wisejin-vue-app
$ npm install vue bootstrap-vue bootstrap

# add to main.js
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

# Navbar in Header.vue 
