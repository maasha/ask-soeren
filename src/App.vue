<script setup lang="ts">
import AvatarPanel from './components/AvatarPanel.vue'
import QuestionPanel from './components/QuestionPanel.vue'
import AnswerPanel from './components/AnswerPanel.vue'
</script>

<template>
  <div class="p-8 flex justify-center items-baseline">
    <h1 data-testid="title" class="text-center text-6xl pr-4">Ask Søren</h1>
    <h2 data-testid="subtitle" class="text-center text-3xl">(... about Pharma & IT)</h2>
  </div>

  <QuestionPanel />

  <div class="px-24 pt-3 flex justify-center gap-12">
    <AnswerPanel />
    <AvatarPanel :blablabla="true" />
  </div>
</template>
