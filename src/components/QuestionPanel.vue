<template>
  <div data-testid="question-panel" class="p-4 flex justify-center">
    <div class="w-1/2">
      <form @submit.prevent="submitForm">
        <label for="questionInput" class="text-3xl">Post your question</label>
        <input
          id="questionInput"
          data-testid="question-input"
          class="border w-full mt-5 text-3xl p-3"
          type="text"
          placeholder="here..."
          v-model="questionText"
        />

        <div class="flex justify-end items-center">
          <label for="styleSelect" class="text-xl pr-2">Select answer style:</label>
          <select
            id="styleSelect"
            data-testid="style-select"
            class="mt-2 p-2 border text-xl"
            v-model="selectedStyle"
          >
            <option value="legalese">Legalese</option>
            <option value="british">British High Class</option>
            <option value="gangsta">New York Gangsta</option>
          </select>
        </div>

        <footer class="pt-6 flex justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Ask Søren
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { AnswerStyleType } from '../common/static/answer-style.type'
import { FormDataType } from '../common/static/form-data.type'

/**
 * Panel to display the question form.
 */
export default {
  data() {
    return {
      // Data properties to bind to form elements
      questionText: '',
      selectedStyle: 'legalese',
    }
  },
  computed: {
    isValidQuestion() {
      // Add validation logic here
      return this.questionText.trim() !== ''
    },
  },
  methods: {
    submitForm() {
      if (!this.isValidQuestion) {
        alert('Please enter a valid question!')
        return
      }

      const formData: FormDataType = {
        questionText: this.questionText,
        selectedStyle: this.selectedStyle as AnswerStyleType,
      }

      this.$emit('form-data', formData)
    },
  },
}
</script>
