import { mount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList'
import { findTestWrapper } from '@/utils/testUtils'
import store from '@/store'

it(`
1、用户会在header输入框输入内容
2、用户会点击回车按钮
3、列表项应该增加用户输入内容的列表项
`, async () => {
  const wrapper = mount(TodoList, { store })
  const textInput = findTestWrapper(wrapper, 'input-header').at(0)
  const text = '烂命华'
  await textInput.setValue(text)
  await textInput.trigger('keyup.enter')
  const items = findTestWrapper(wrapper, 'list-item')
  expect(items.length).toBe(1)
  expect(items.at(0).text()).toContain(text)
})
