<template>
  <div data-testid="avatar-panel" class="w-1/3 ml-8">
    <div class="w-80" :class="{ 'animated-head': blablabla }">
      <img id="avatar-top" src="../assets/soeren-top-anonymous.jpg" alt="avatar top" />
    </div>
    <div class="w-80" :class="{ 'animated-jaw': blablabla }">
      <img id="avatar-bottom" src="../assets/soeren-bottom.jpg" alt="avatar bottom" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    /**
     * Flag indicating that the avatar must be talking.
     */
    blablabla: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
})
</script>

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
