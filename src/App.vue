<script setup lang="ts">
import AvatarPanel from './components/AvatarPanel.vue'
import ChatPanel from './components/ChatPanel.vue'
</script>

<template>
  <div class="p-8">
    <h1 class="text-center text-6xl">Ask Søren</h1>
    <h2 class="text-center text-4xl">... about Pharma & IT</h2>
  </div>

  <div class="p-8 flex justify-between">
    <ChatPanel />
    <AvatarPanel />
  </div>
</template>
