import Vue from 'vue'
import * as Cookies from 'js-cookie'
import XDrag from 'x-dragandresize'
import VueQuillEditor, { Quill } from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'

import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'
import './registerServiceWorker'

import utils from './global/utils'
import components from './global/components'
import config from './config'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './assets/styles/main.less'


let isDev = process && process.env.NODE_ENV !== 'production'
Vue.config.debug = isDev
Vue.config.devtools = isDev
Vue.config.productionTip = isDev
Vue.config.performance = isDev


Vue.prototype.$X = {
  isDev,
  utils,
  config,
  Cookies
}


const i18nInstance = i18n(Vue, 'zh-cn')

Vue.use(XDrag)

Vue.use(VueQuillEditor)
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)

Vue.use(components)

new Vue({
  i18n: i18nInstance,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
