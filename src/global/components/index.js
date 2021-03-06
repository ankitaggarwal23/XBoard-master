import {
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  ColorPicker,
  InputNumber,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Message,
  Modal,
  Input,
  Form,
  FormItem,
  Slider,
  Select,
  Option
} from 'iview'

import { Sketch } from 'vue-color'

import XIcon from './Icon/Index'
import XTooltip from './Tooltip/Index'

const obj = {
 
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  ColorPicker,
  InputNumber,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Message,
  Modal,
  Input,
  Form,
  FormItem,
  Slider,
  Select,
  Option,
  
  SketchPicker: Sketch,
  
  XIcon,
  XTooltip
}

const components = {}
components.install = function (Vue, options) {
  for (let name in obj) {
    if (name && obj[name]) {
      Vue.component(name, obj[name])
      if (['Message', 'Modal'].includes(name)) {
        Vue.prototype[`$${name}`] = obj[name]
      }
    }
  }
}

export default components
