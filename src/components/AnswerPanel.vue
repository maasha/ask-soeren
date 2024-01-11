<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  answerText: {
    type: String as PropType<string | null>,
    default: null,
  },
})
</script>

<template>
  <div
    data-testid="answer-panel"
    class="border w-1/3 p-4 max-h-96 overflow-y-auto flex flex-col-reverse"
  >
    <p v-if="answerText" data-testid="answer-text" class="text-xl mt-5">{{ props.answerText }}</p>
    <h3 v-if="answerText" data-testid="answer-heading" class="text-3xl mt-5">Søren says:</h3>
  </div>
</template>
