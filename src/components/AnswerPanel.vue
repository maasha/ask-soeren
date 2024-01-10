<template>
  <div
    data-testid="answer-panel"
    class="border w-1/3 p-4 max-h-96 overflow-y-auto flex flex-col-reverse"
  >
    <p v-if="answerText" class="text-xl mt-5">{{ answerText }}</p>
    <h3 v-if="answerText" class="text-3xl mt-5">Søren says:</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

/**
 * Panel to display the answer from Søren.
 */
export default defineComponent({
  props: {
    /**
     * The answer text to display.
     */
    answerText: {
      type: String as PropType<string | null>,
      default: null,
    },
  },
})
</script>
