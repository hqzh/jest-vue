import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('组件正常渲染', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'hqzh' }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
