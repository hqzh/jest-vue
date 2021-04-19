<template>
  <div >
    <input type="text" data-test="input-header" v-model="inputValue" @keyup.enter="handleAdd" placeholder="请输入">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Header',
  computed: {
    inputValue: {
      get () {
        return this.$store.state.inputValue
      },
      set (value) {
        this.changeInputValue(value)
      }
    }
  },
  methods: {
    ...mapMutations(['changeInputValue']),
    handleAdd () {
      if (this.inputValue.length) {
        this.$emit('add', this.inputValue)
        this.changeInputValue('')
      }
    }
  }
}
</script>
