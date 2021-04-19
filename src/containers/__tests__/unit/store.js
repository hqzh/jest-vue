import store from '@/store'

it('当 store 接受 changInputValue 的commit时，inputValue 发生变化', () => {
  const value = '点赞少年'
  store.commit('changeInputValue', value)
  expect(store.state.inputValue).toBe(value)
})
