<template>
  <div >
    <input type="text" data-test="input" v-model="inputValue" @keyup.enter="handleAdd">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
