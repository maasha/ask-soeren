<script setup lang="ts">
import OpenAI from 'openai'
import { ref } from 'vue'
import { FormDataType } from './common/static/form-data.type'
import AvatarPanel from './components/AvatarPanel.vue'
import QuestionPanel from './components/QuestionPanel.vue'
import AnswerPanel from './components/AnswerPanel.vue'
import { AnswerStyleType } from './common/static/answer-style.type'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
})

const answerText = ref<string | null>()
const blablabla = ref<boolean>(false)

const askOpenAI = async (userQuestion: string) => {
  const stream = await openai.beta.chat.completions.stream({
    messages: [{ role: 'user', content: userQuestion }],
    model: 'gpt-3.5-turbo',
    stream: true,
  })

  blablabla.value = true

  stream.on('content', (delta) => {
    answerText.value ??= ''
    answerText.value += delta
  })

  await stream.finalChatCompletion()

  blablabla.value = false
}

const formulateQuestion = (questionText: string, selectedStyle: AnswerStyleType) => {
  let question = 'Answer the this in the most complicated way possible using the style of'

  switch (selectedStyle) {
    case 'legalese':
      question += ' impossible to understand law language'
      break
    case 'british':
      question += ' upper class british english'
      break
    case 'gangsta':
      question += ' New York gangsta slang'
      break

    default:
      throw new Error(`Invalid answer style selected: ${selectedStyle}`)
  }

  return `${question}: ${questionText}`
}

const questionSubmitHandler = async (formData: FormDataType) => {
  answerText.value = ''
  const userQuestion = formulateQuestion(formData.questionText, formData.selectedStyle)
  await askOpenAI(userQuestion)
}
</script>

<template>
  <div class="px-8 py-6 flex justify-center items-baseline">
    <h1 data-testid="title" class="text-center text-6xl pr-4">Ask Søren</h1>
    <h2 data-testid="subtitle" class="text-center text-3xl">(... about Pharma & IT)</h2>
  </div>

  <QuestionPanel @form-data="questionSubmitHandler" />

  <div class="px-24 pt-3 flex justify-center gap-12">
    <AnswerPanel :answerText="answerText" />
    <AvatarPanel :blablabla="blablabla" />
  </div>
</template>
