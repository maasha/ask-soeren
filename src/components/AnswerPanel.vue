<template>
  <div data-testid="answer-panel" class="border w-1/3 p-4">
    <h3 v-if="answerText" class="text-3xl mt-5">Søren says:</h3>
    <p v-if="answerText" class="text-3xl mt-5">{{ answerText }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    /**
     * The answer text to display.
     */
    answerText: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
  },
})
</script>
