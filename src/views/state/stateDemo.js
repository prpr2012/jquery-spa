import StateChange from '@/common/lib/store/stateChange'
import store from '@/common/lib/store/store'
export default class StateDemo extends StateChange {
  constructor($root) {
    super()
    this.$root = $root
    this.render()
    this.events = {
      'click #add1': 'mutationsAdd',
      'click #add2': 'dispatchAdd'
    }
  }
  render() {
    var stateTmpl = require('./stateDemo.art')
    this.$root.html(stateTmpl({
      count: store.state.count
    }))
  }
  update() {
    console.log('store组件更新了')
    this.$el.find("#count1").text(store.state.count)
  }
  mutationsAdd() {
    var count = store.state.count;
    count++
    store.commit('addCount', count)

  }
  dispatchAdd() {
    var count = store.state.count;
    count += 2
    store.dispatch('updateCount', count)
  }
}