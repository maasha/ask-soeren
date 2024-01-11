<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  blablabla: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})
</script>

<template>
  <div data-testid="avatar-panel" class="w-1/3 ml-8 h-96">
    <div class="w-60" :class="{ 'animated-head': props.blablabla }">
      <img id="avatar-top" src="../assets/soeren-top.jpg" alt="avatar top" />
    </div>
    <div class="w-60" :class="{ 'animated-jaw': props.blablabla }">
      <img id="avatar-bottom" src="../assets/soeren-bottom.jpg" alt="avatar bottom" />
    </div>
  </div>
</template>

<style scoped>
@keyframes moveJaw {
  0% {
    padding-top: 0;
  }
  50% {
    padding-top: 20px;
  }
  100% {
    padding-top: 0;
  }
}

@keyframes rotateHead {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animated-head {
  animation: rotateHead 1s infinite;
}

.animated-jaw {
  animation: moveJaw 0.2s infinite;
}
</style>
