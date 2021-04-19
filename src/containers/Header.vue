<template>
  <div >
    <input type="text" data-test="input-header" v-model="inputValue" @keyup.enter="handleAdd" placeholder="请输入">
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleAdd () {
      if (this.inputValue.length) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>
