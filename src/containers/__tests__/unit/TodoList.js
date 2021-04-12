import { shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList'
import UndoList from '@/containers/UndoList'

describe('TodoList 组件', () => {
  it(' 初始化时，undoList 为空数组', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  //   it('TodoList 执行addItem的时候，会增加一个内容', () => {
  //     const wrapper = shallowMount(TodoList)
  //     wrapper.vm.handleAdd('hqzh')
  //     const undoList = wrapper.vm.$data.undoList
  //     expect(undoList).toEqual(['hqzh'])
  //   })

  it(' handleAdd执行时，会增加一个内容', () => {
    // it('TodoList 监听到Header的add事件时，会增加一个内容', () => {
    //   const item = 'hqzh'
    //   const wrapper = shallowMount(TodoList)
    //   const header = wrapper.findComponent(Header)
    //   header.vm.$emit('add', item)
    //   const undoList = wrapper.vm.$data.undoList
    //   expect(undoList).toEqual([item])
    // 上面注释的写法为集成测试，因为是测试了子组件，下面的才是组件内的单元测试
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'view', value: 1 },
        { status: 'view', value: 2 },
        { status: 'view', value: 3 }
      ]
    })
    wrapper.vm.handleAdd(4)
    expect(wrapper.vm.$data.undoList).toEqual([{ status: 'view', value: 1 },
      { status: 'view', value: 2 },
      { status: 'view', value: 3 },
      { status: 'view', value: 4 }
    ])
  })

  it(' 调用UndoList，应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.findComponent(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  // 测试监听自定义事件较复杂，后面再讲

  it(' 中 handleDelete方法被调用时，UndoList列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'view', value: 1 },
        { status: 'view', value: 2 },
        { status: 'view', value: 3 }
      ]
    })
    wrapper.vm.handleDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'view', value: 1 },
      { status: 'view', value: 3 }
    ])
  })
  // 到这里可以发现，数据结构变更要测试文件也业务文件两边都要改，可以发现这种测试只适合lodash这类库，不和业务耦合，只有传参、入参、返回之类

  it(' 中 changeStatus方法被调用时，目标选项切换成输入框', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'view', value: 1 },
        { status: 'view', value: 2 },
        { status: 'view', value: 3 }
      ]
    })
    wrapper.vm.changeStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'view', value: 1 },
      { status: 'edit', value: 2 },
      { status: 'view', value: 3 }
    ])
  })

  it(' 中 changeReset方法被调用时，目标选项切换成视图', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'view', value: 1 },
        { status: 'edit', value: 2 },
        { status: 'view', value: 3 }
      ]
    })
    wrapper.vm.changeReset(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'view', value: 1 },
      { status: 'view', value: 2 },
      { status: 'view', value: 3 }
    ])
  })

  it(' 中 changeItemValue方法被调用时，目标选项切换成视图', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'view', value: 1 },
        { status: 'edit', value: 2 },
        { status: 'view', value: 3 }
      ]
    })
    wrapper.vm.changeItemValue({ index: 1, value: 2222 })
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'view', value: 1 },
      { status: 'edit', value: 2222 },
      { status: 'view', value: 3 }
    ])
  })
})
