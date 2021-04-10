<template>
    <div>
        <div data-test="count">{{ list.length }}</div>
        <ul>
            <li v-for="(item, index) in list" :key="index" data-test="item">
                {{ item }}<button data-test="delete-button" type="button" @click="handleDelete(index,$event)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    }
  }
}
</script>
