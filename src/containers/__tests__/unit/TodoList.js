import { shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList'
import Header from '@/containers/Header'

describe('TodoList 初始化时，undoList 为空数组', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })
})

// describe('TodoList 执行addItem的时候，会增加一个内容', () => {
//   it('renders props.msg when passed', () => {
//     const wrapper = shallowMount(TodoList)
//     wrapper.vm.handleAdd('hqzh')
//     const undoList = wrapper.vm.$data.undoList
//     expect(undoList).toEqual(['hqzh'])
//   })
// })

describe('TodoList 监听到Header的add事件时，会增加一个内容', () => {
  it('renders props.msg when passed', () => {
    const item = 'hqzh'
    const wrapper = shallowMount(TodoList)
    const header = wrapper.findComponent(Header)
    header.vm.$emit('add', item)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([item])
  })
})
