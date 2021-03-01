import { REGULAR, ADVANCED, EVENT_SELECT_ALL_TAB_ITEMS, EVENT_SELECT, EVENT_UNSELECT } from '../constants'
const UP = 38
const DOWN = 40
const ESC = 27
const TAB = 9
const ENTER = 13

export default {
  methods: {
    showChange (val) {
      this.show = val
      if (val) {
        // swith to target group
        if (this.activeGroup > -1 && this.group && this.data.length) {
          this.tabIndex = this.activeGroup
        }
        this.$emit('show')
        if (this.type === ADVANCED) this.inputFocus()
      } else {
        this.reset()
        this.$emit('hide')
      }
    },
    selectAll () {
      if (this.results.length && !this.message) {
        const arr = this.results
          .filter(val => !this.picked.includes(val))

        const self = this
        let addedItems = []
        if (this.maxSelected) {
          const left = this.maxSelected - this.picked.length
          addedItems = arr.filter((val, idx) => idx < left)
        } else {
          addedItems = arr
        }

        this.picked = [...this.picked, ...addedItems]
        // emit events
        if (this.selectAllTabItemsEvents.includes(EVENT_SELECT_ALL_TAB_ITEMS)) {
          this.$emit(EVENT_SELECT_ALL_TAB_ITEMS, addedItems)
        }
        if (this.selectAllTabItemsEvents.includes(EVENT_SELECT)) {
          addedItems.forEach(self.emitSelectEvent)
        }
      }
    },
    processKey () {
      this.results = this.filter()
    },
    processControl (e) {
      if (this.show && [UP, DOWN, ESC, ENTER, TAB].includes(e.keyCode)) {
        switch (e.keyCode) {
          case UP:// up
            this.$refs.list.prev()
            break
          case DOWN:// down
            this.$refs.list.next()
            break
          case TAB: // tab
          case ENTER:// return
            if (this.highlight !== -1) this.selectItem(this.results[this.highlight])
            break
          case ESC:// escape
            this.close()
            break
        }
      }
    },
    selectItem (item) {
      if (this.multiple) {
        const idx = this.inPickedIndex(item)
        if (idx === -1) {
          if (this.maxSelected && this.picked.length === this.maxSelected) {
            if (!this.message) {
              this.notice()
              // auto clear message in 3 seconds
              setTimeout(() => {
                this.notice(true)
              }, 3000)
            }
          } else {
            this.picked.push(item)
            this.emitSelectEvent(item)
            this.emitEvent()
          }
        } else {
          // remove item when it has been selected
          this.picked.splice(idx, 1)
          this.emitUnselectEvent(item)
          this.emitEvent()
        }
      } else { // single selection
        this.picked = this.inPicked(item) ? [] : [item]
        this.emitSelectEvent(item)
        this.emitEvent()
        this.close()
      }
    },
    filter () {
      const list = this.group ? this.data[this.tabIndex].list.slice() : this.data.slice()
      return list.filter(val => new RegExp(this.search.toLowerCase()).test(this.getRowText(val).toLowerCase()))
    },
    switchGroup () {
      const tabIndex = this.tabIndex < this.data.length && this.tabIndex > -1 ? this.tabIndex : 0
      this.results = this.type === REGULAR
        ? this.data[tabIndex].list
        : this.search
          ? this.filter()
          : this.data[tabIndex].list
    },
    /**
     * check if it is a group type
     */
    checkDataType () {
      if (this.data && Array.isArray(this.data) && this.data.length) {
        this.group = this.data.every(val => 'title' in val && 'list' in val)
      }
    },
    getRowText (row) {
      switch (typeof this.showField) {
        case 'string': return row[this.showField]
        case 'function': return this.showField(row)
      }
    },
    notice (clear = false) {
      if (clear) {
        this.message = ''
      } else {
        const maximum = this.i18n.max_selected
        this.message = maximum.replace('max_selected_limit', `<b>${this.maxSelected}</b>`)
      }
    },
    init () {
      if (!this.value || this.type !== ADVANCED) return
      let vals = this.value.split(',')
      if (!this.multiple) vals = [vals[0]]
      if (this.group) {
        const arr = []
        this.data.forEach(value => {
          arr.push(...value.list.filter(val => {
            return vals.includes(String(val[this.keyField]))
          }))
        })
        this.picked = arr
      } else {
        this.picked = this.data.filter(val => vals.includes(String(val[this.keyField])))
      }
    },
    populate () {
      this.checkDataType()

      if (this.data.length) {
        if (this.group) {
          if (this.tabIndex > this.data.length - 1) {
            this.tabIndex = 0
          } else {
            const isActiveGroupChanged = Object.keys(this.$options.propsData).some(p => p === 'activeGroup')
            if (isActiveGroupChanged === true) {
              this.tabIndex = this.activeGroup
            }
            this.switchGroup()
          }
        } else {
          this.results = this.data.slice()
        }
      }

      this.init()
    },
    emitSelectEvent (item) {
      this.$emit(EVENT_SELECT, item)
    },
    emitUnselectEvent (item) {
      this.$emit(EVENT_UNSELECT, item)
    },
    emitEvent () {
      this.$emit('input', this.picked.slice().map(value => value[this.keyField]).join(','))
      this.$emit('values', this.picked.slice())
    }
  }
}
