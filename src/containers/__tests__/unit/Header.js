import { shallowMount } from '@vue/test-utils'
import Header from '@/containers/Header'

it('Header 包含input框', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"')
  expect(input.exists()).toBe(true)
})

it('Header 中input框初始内容为空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('')
})

it('Header 中input框值发生改变，数据应该跟着变', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"')
  input.setValue('hqzh')
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('hqzh')
})

it('Header 中input框输入回车，无内容时，无反应', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"')
  input.setValue('')
  input.trigger('keyup.enter')
  // assert event has been emitted
  expect(wrapper.emitted().add).toBeFalsy()
})

it('Header 中input框输入回车，有内容时，向外触发事件，同时清空inputValue', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"')
  input.setValue('hqzh')
  input.trigger('keyup.enter')
  // assert event has been emitted
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.$data.inputValue).toBe('')
})
