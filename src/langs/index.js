import _en from 'iview/dist/locale/en-US'
import _zh from 'iview/dist/locale/zh-CN'

import zh from './zh-CN'
import en from './en-US'

export default {
  label: {
    'zh-cn': '简体中文',
    'en-us': 'English'
  },
  icon: {
    'zh-cn': require('../assets/images/langs/zh-cn.png'),
    'en-us': require('../assets/images/langs/en-us.png')
  },
  data: {
    'zh-cn': { ..._zh, ...zh },
    'en-us': { ..._en, ...en }
  }
}
