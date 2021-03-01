import { ADVANCED, EVENT_SELECT, EVENT_UNSELECT, EVENT_SELECT_ALL_TAB_ITEMS, EVENT_CLEAR_ALL } from '../constants'

export default {
  props: {
    /**
     * basic options
     */
    data: {
      type: Array,
      required: true
    },
    translations: {
      type: Object,
      default: undefined
    },
    language: {
      type: String,
      default: 'en'
    },
    align: {
      type: String,
      default: 'left'
    },
    embed: {
      type: Boolean,
      default: false
    },
    rightClick: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // the width of drop down menu
    width: Number,
    /**
     * menu caller container with
     * false: inline-block
     * true: block
     */
    fullWidth: {
      type: Boolean,
      default: false
    },
    // the group that needs to be activated before the menu is opened
    activeGroup: {
      type: Number,
      default: 0
    },
    /**
     * the menu type
     * 'regular'
     * 'advanced'
     */
    type: {
      type: String,
      default: ADVANCED
    },
    // Boolean type to close header bar
    title: {
      type: [String, Boolean],
      default: undefined
    },
    // Boolean type to keep the title on selected item was changed
    keepTitle: {
      type: [Boolean],
      default: false
    },
    /**
     * advanced mode options
     */
    value: String,
    keyField: {
      type: String,
      default: 'id'
    },
    showField: {
      type: [String, Function],
      default: 'name'
    },
    query: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    // maximum number of selected items in advanced mode
    maxSelected: {
      type: Number,
      default: 0
    },
    scroll: {
      type: Boolean,
      default: true
    },
    rtl: {
      type: Boolean,
      default: false
    },
    // valid events: selectAllTabItems, select
    selectAllTabItemsEvents: {
      type: Array,
      default: () => [EVENT_SELECT_ALL_TAB_ITEMS],
      validator: (v) => v.every((e) => [EVENT_SELECT_ALL_TAB_ITEMS, EVENT_SELECT].includes(e))
    },
    // valid events: clearAll, unselect
    clearAllEvents: {
      type: Array,
      default: () => [EVENT_CLEAR_ALL],
      validator: (v) => v.every((e) => [EVENT_CLEAR_ALL, EVENT_UNSELECT].includes(e))
    }
  }
}
