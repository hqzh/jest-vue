import { shallowMount } from '@vue/test-utils'
import UndoList from '@/containers/UndoList'
import { findTestWrapper } from '@/utils/testUtils'

describe('UndoList 组件', () => {
  it(' 参数为空数组，count值应该为0，且列表无内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [] }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    expect(countElem.at(0).text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })

  it(' 参数为[a,b,c]，count值应该为3，且列表有内容，且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'view', value: 1 },
          { status: 'view', value: 2 },
          { status: 'view', value: 3 }
        ]
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    const deleteButtons = findTestWrapper(wrapper, 'delete-button')
    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toEqual(3)
    expect(deleteButtons.length).toEqual(3)
  })

  it(' 删除按钮点击时，向外触发删除事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'view', value: 1 },
          { status: 'view', value: 2 },
          { status: 'view', value: 3 }
        ]
      }
    })
    const deleteButton = findTestWrapper(wrapper, 'delete-button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
  })

  it(' 列表项被点击时，向外触发状态改变事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'view', value: 1 },
          { status: 'view', value: 2 },
          { status: 'view', value: 3 }
        ]
      }
    })
    const item = findTestWrapper(wrapper, 'item').at(1)
    item.trigger('click')
    expect(wrapper.emitted().status).toBeTruthy()
  })

  it(' 列表项显示一个输入框，两个正常列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'view', value: 1 },
          { status: 'edit', value: 2 },
          { status: 'view', value: 3 }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'edit')
    expect(input.at(0).element.value).toBe('2')
    expect(input.length).toBe(1)
  })

  it(' 输入框失去焦点时，向外触发 reset 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'view', value: 1 },
          { status: 'edit', value: 2 },
          { status: 'view', value: 3 }
        ]
      }
    })
    const inputElem = findTestWrapper(wrapper, 'edit').at(0)
    inputElem.trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
  })

  it(' 输入框变化时，向外触发 changeItemValue 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'view', value: 1 },
          { status: 'edit', value: 2 },
          { status: 'view', value: 3 }
        ]
      }
    })
    const inputElem = findTestWrapper(wrapper, 'edit').at(0)
    inputElem.trigger('change')
    expect(wrapper.emitted().changeItemValue).toBeTruthy()
  })
})
