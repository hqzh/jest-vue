import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const root = document.createElement('div')
    root.className = 'root'
    document.body.appendChild(root)
    new Vue({
      render: h => h(HelloWorld, {
        props: {
          msg: 'hqzh'
        }
      })
    }).$mount('.root')
    expect(document.getElementsByClassName('hello').length).toBe(1)
  })
})
