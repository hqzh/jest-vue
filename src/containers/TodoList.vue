<template>
  <div >
    <Header @add="handleAdd"/>
    <!-- 测试监听自定义事件较复杂，后面再讲 -->
    <UndoList :list="undoList" @delete="handleDelete"/>
  </div>
</template>

<script>
import Header from './Header.vue'
import UndoList from './UndoList.vue'
export default {
  name: 'TodoList',
  components: { Header, UndoList },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    handleAdd (value) {
      this.undoList.push({ status: 'view', value })
    },
    handleDelete (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
