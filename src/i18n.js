import VueI18n from 'vue-i18n'
import langs from './langs'
import locale from 'iview/src/locale/index'

export default function (Vue, defLang) {
  let { config, Cookies } = Vue.prototype.$X
  let key = config.cookie.getItem('locale')
  let val = Cookies.get(key)
  if (!defLang) {
    let keys = Object.keys(langs.label)
    defLang = val || keys[0]
  }
  
  Vue.use(VueI18n)
  Vue.locale = () => {}
  
  Vue.prototype.$X.langs = langs
  Vue.prototype.$X.locale = defLang
 
  let i18nInstance = new VueI18n({
    locale: defLang,
    messages: langs.data
  })
 
  locale.i18n((path, options) => i18nInstance.t(path, options))
  return i18nInstance
}
