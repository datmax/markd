import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.green.lighten2,
    secondary: colors.grey.lighten2,
    danger: colors.red.lighten2,
    accent: colors.blue.lighten2,
    background: colors.grey.lighten5
  }
})
