<template>
  <div >
    <Header @add="handleAdd"/>
    <ul>
        <li v-for="item in undoList" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'TodoList',
  components: { Header },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    handleAdd (value) {
      this.undoList.push(value)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
