<template>
    <div>
        <div>
            正在进行
            <span data-test="count">{{ list.length }}</span>
        </div>
        <ol>
            <li v-for="(item, index) in list" :key="index" data-test="item" @click="changeStatus(index)">
                <span v-if="item.status=== 'view'">{{ item.value
                }}</span>
                <input type="text" v-else data-test="edit" v-model="item.value" @blur="handleBlur(index)" @change="changeItemValue($event,index)">
                <button
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
    },
    changeStatus (index) {
      this.$emit('status', index)
    },
    handleBlur (index) {
      this.$emit('reset', index)
    },
    changeItemValue (e, index) {
      this.$emit('changeItemValue', { value: e.target.value, index })
    }
  }
}
</script>
