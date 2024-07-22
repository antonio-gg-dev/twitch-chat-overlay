<template>
  <div>
    <span
      :style="{ color }"
    >
      {{ user }}
    </span>

    {{ message }}
  </div>
</template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue'

export default defineComponent({
  props: {
    user: {
      required: true,
      type: String as PropType<string>,
    },
    color: {
      required: true,
      type: String as PropType<string>,
    },
    message: {
      required: true,
      type: String as PropType<string>,
    },
  }
})
</script>

<style scoped>

</style>