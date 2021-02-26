import VueSelectMenu from './VueSelectMenu'

const Plugin = {
  install (Vue, options = {}) {
    const props = VueSelectMenu.mixins[0].props
    if (Object.keys(options).length) {
      if (typeof options.title !== 'undefined') props.title.default = options.title
      if (typeof options.language === 'string') props.language.default = options.language
      if (typeof options.i18n === 'object') props.i18n.default = props.default.language
      if (typeof options.query === 'boolean') props.query.default = options.query
      if (typeof options.scroll === 'boolean') props.scroll.default = options.scroll
    }
    Vue.component(VueSelectMenu.name, VueSelectMenu)
  }
}

export { VueSelectMenu }
export default Plugin
