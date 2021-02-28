import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import { advancedGroup } from '@test/sample/menu/advanced'
import nbaTeams from '@test/sample/nba-teams'
import sm from '@/VueSelectMenu'

describe('vue-select-menu advanced mode', () => {
  describe('basic advanced menu', () => {
    const w = mount(sm, {
      propsData: {
        data: nbaTeams,
        title: false,
        query: false
      }
    })
    it('"title" option set to false, the menu header bar should not exist', () => {
      expect(w.find('div.sm-header').exists()).to.equal(false)
    })
    it('"query" option set to false, the search bar should not exist', () => {
      expect(w.find('div.sm-search').exists()).to.equal(false)
    })
    it('"value/v-model" option set value "7", the chosen item should be "Boston Celtics"', async () => {
      await w.setProps({ value: '7' })
      const picked = w.findAll('ul.sm-results li.sm-selected')
      expect(picked.length).to.equal(1)
      expect(picked.at(0).text()).to.equal('Boston Celtics')
    })
    it('The selected and highlight item in results list should be one and "Boston Celtics"', () => {
      const picked = w.findAll('.sm-results li.sm-selected')
      expect(picked.length).to.equal(1)
      expect(picked.at(0).find('.sm-item-text').text()).to.equal('Boston Celtics')
    })
    it('Click the selected item(Boston Celtics), the item should be canceled selected', async () => {
      await w.find('div.sm-caller-container').trigger('click')
      await w.find('.sm-results li.sm-selected').trigger('click')
      expect(w.find('.sm-results li.sm-selected').exists()).to.equal(false)
    })
  })
  describe('multiple selection advanced menu', () => {
    const w = mount(sm, {
      propsData: {
        data: nbaTeams,
        multiple: true,
        showField: function (row) {
          return `${row.name}(${row.desc})`
        }
      }
    })
    it('"showField" option set to a function, then text of the first item text in the list should be "Chicago Bulls(芝加哥公牛)"', () => {
      expect(w.find('.sm-results li').find('.sm-item-text').text()).to.equal('Chicago Bulls(芝加哥公牛)')
    })
    it('Click the first item, its should be selected', async () => {
      await w.find('div.sm-caller-container').trigger('click')
      await w.findAll('.sm-results li').at(0).trigger('click')
      expect(w.find('.sm-results li.sm-selected').find('.sm-item-text').text()).to.equal('Chicago Bulls(芝加哥公牛)')
    })
    it('After "Clear all" icon button click, should no item is selected', async () => {
      await w.find('div.sm-caller-container').trigger('click')
      await w.find('span.sm-removeall-button').trigger('click')
      expect(w.vm.picked.length).to.equal(0)
    })
    it('Click "Select all" icon button, all of items should be selected ', async () => {
      await w.find('div.sm-caller-container').trigger('click')
      await w.find('span.sm-selectall-button').trigger('click')
      expect(w.vm.picked.length).to.equal(30)
    })
    it('enter query keyword "sa", the result list should only have 2 items("Sacramento Kings(萨克拉门托国王)" and "San Antonio Spurs(圣安东尼奥马刺)")', async () => {
      await w.find('.sm-search input').setValue('sa')
      /**
       * simulate keyboard enter, because in the real case "processKey" method will trigger by keyup event
       */
      await w.vm.processKey()
      const items = w.findAll('ul.sm-results li')
      expect(items.length).to.equal(2)
      expect(items.at(0).find('.sm-item-text').text()).to.equal('Sacramento Kings(萨克拉门托国王)')
      expect(items.at(1).find('.sm-item-text').text()).to.equal('San Antonio Spurs(圣安东尼奥马刺)')
    })
  })
  describe('advanced menu with group type', () => {
    const w = mount(sm, {
      propsData: {
        data: advancedGroup,
        multiple: true,
        maxSelected: 5,
        value: '3,5,17'
      }
    })
    it('The group tabs should be exist', () => {
      expect(w.find('.sm-tabs').exists()).to.equal(true)
    })
    it('The number of group tabs should be 2', () => {
      expect(w.findAll('.sm-tabs ul li').length).to.equal(2)
    })
    it('"value/v-model" set to "3,5,17", the selected item should be "Detroit Pistons", "Milwaukee Bucks" and "Minnesota Timberwolves"', () => {
      expect(w.vm.picked.some(val => val.name === 'Detroit Pistons')).to.equal(true)
      expect(w.vm.picked.some(val => val.name === 'Milwaukee Bucks')).to.equal(true)
      expect(w.vm.picked.some(val => val.name === 'Minnesota Timberwolves')).to.equal(true)
    })
    it('"East" group should have 2 selected items', async () => {
      await w.find('div.sm-caller-container').trigger('click')
      expect(w.findAll('ul.sm-results li.sm-selected').length).to.equal(2)
    })
    it('"West" group should have 1 selected item', async () => {
      await w.findAll('div.sm-tabs li').at(1).find('a').trigger('click')
      expect(w.findAll('ul.sm-results li.sm-selected').length).to.equal(1)
    })
    it('Set activeGroup to 1, the active tab should be "West"', async () => {
      await w.setProps({ activeGroup: 1 })
      expect(w.find('.sm-tabs ul li.active').text()).to.equal('West')
    })
    it('Click on selected item, the active tab should not be changed', async () => {
      await w.findAll('ul.sm-results li.sm-selected').at(0).trigger('click')
      expect(w.find('.sm-tabs ul li.active').text()).to.equal('West')
    })
    it('Click on unselected item, the active tab should not be changed', async () => {
      await w.findAll('ul.sm-results li:not(.sm-selected)').at(0).trigger('click')
      expect(w.find('.sm-tabs ul li.active').text()).to.equal('West')
    })
    it('Click "Clear all" icon button, should no items be selected', async () => {
      await w.find('span.sm-removeall-button').trigger('click')
      expect(w.vm.picked.length).to.equal(0)
    })
    it('"maxSelected" option set to 5, Click "Select all" icon button, the number of selected item should be 5', async () => {
      await w.find('span.sm-selectall-button').trigger('click')
      expect(w.vm.picked.length).to.equal(5)
    })
    it('The text of header bar should be "5 items selected"', () => {
      expect(w.find('.sm-header h3').text()).to.equal('5 items selected')
    })
    it('Set keepTitle to true, the text of header bar should be "Custom Title"', async () => {
      await w.setProps({ title: 'Custom Title', keepTitle: true })
      expect(w.find('.sm-header h3').text()).to.equal('Custom Title')
    })
    it('Set keepTitle to false, text of header bar should be "5 items selected"', async () => {
      await w.setProps({ title: 'Custom Title', keepTitle: false })
      expect(w.find('.sm-header h3').text()).to.equal('5 items selected')
    })
    it('enter query keyword "sa", "East" group should only display "Not found", "West" group should have 2 items("Sacramento Kings" and "San Antonio Spurs")', async () => {
      await w.find('.sm-search input').setValue('sa')
      /**
       * simulate keyboard enter, because in the real case "processKey" method will trigger by keyup event
       */
      await w.vm.processKey()
      await w.findAll('div.sm-tabs li').at(0).find('a').trigger('click')
      expect(w.find('li.sm-message-box span').text()).to.equal('Not found')
      await w.findAll('div.sm-tabs li').at(1).find('a').trigger('click')
      const items = w.findAll('ul.sm-results li')
      expect(items.length).to.equal(2)
      expect(items.at(0).find('.sm-item-text').text()).to.equal('Sacramento Kings')
      expect(items.at(1).find('.sm-item-text').text()).to.equal('San Antonio Spurs')
    })
    it('Change group data, the active tab should not be changed', async () => {
      const newAdvancedGroup = [{
        title: 'Design',
        list: [
          { id: 1, name: 'Adobe' },
          { id: 2, name: 'Corel' }
        ]
      }, {
        title: 'Game',
        list: [
          { id: 3, name: 'Riot Games' },
          { id: 4, name: 'Blizzard' }
        ]
      }]
      await w.setProps({ data: newAdvancedGroup, multiple: true, group: true })
      expect(w.vm.tabIndex).to.equal(1)
      expect(w.findAll('.sm-tabs ul li').length).to.equal(2)
      expect(w.findAll('.sm-tabs ul li.active').at(0).text()).to.equal('Game')
    })
  })
})
