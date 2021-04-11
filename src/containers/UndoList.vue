<template>
    <div>
        <div>
            正在进行
            <span data-test="count">{{ list.length }}</span>
        </div>
        <ol>
            <li v-for="(item, index) in list" :key="index" data-test="item">
                {{ item.value
                }}<button
                    data-test="delete-button"
                    type="button"
                    @click="handleDelete(index, $event)"
                >
                    X
                </button>
            </li>
        </ol>
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
