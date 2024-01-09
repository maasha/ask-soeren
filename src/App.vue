<script setup lang="ts">
import { FormDataType } from './common/static/form-data.type'
import AvatarPanel from './components/AvatarPanel.vue'
import QuestionPanel from './components/QuestionPanel.vue'
import AnswerPanel from './components/AnswerPanel.vue'

const props = defineProps({
  blablabla: {
    type: Boolean,
    default: false,
  },
  answerText: {
    type: String,
    default: undefined,
  },
})

const questionSubmitHandler = (formData: FormDataType) => {
  console.log('Question Text:', formData.questionText)
  console.log('Selected Style:', formData.selectedStyle)
}
</script>

<template>
  <div class="px-8 py-6 flex justify-center items-baseline">
    <h1 data-testid="title" class="text-center text-6xl pr-4">Ask Søren</h1>
    <h2 data-testid="subtitle" class="text-center text-3xl">(... about Pharma & IT)</h2>
  </div>

  <QuestionPanel @form-data="questionSubmitHandler" />

  <div class="px-24 pt-3 flex justify-center gap-12">
    <AnswerPanel :answerText="props.answerText" />
    <AvatarPanel :blablabla="props.blablabla" />
  </div>
</template>
