<template>
  <div class="border w-2/3 p-4">
    <form @submit.prevent="">
      <label for="questionInput" class="text-3xl">Post your question</label>
      <input
        class="border w-full mt-5 text-3xl p-3"
        type="text"
        id="questionInput"
        placeholder="here..."
      />

      <div class="flex justify-end items-center">
        <label for="styleSelect" class="text-xl pr-2">Select answer style:</label>
        <select id="exampleSelect" class="mt-2 p-2 border text-xl">
          <option value="" disabled>Select answer style</option>
          <option value="option1">Legalese</option>
          <option value="option2">British High Class</option>
          <option value="option3">New York Gansta</option>
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

    <div>
      <h3 class="text-3xl mt-5">Søren says</h3>
      <p class="text-3xl mt-5">I am a chatbot</p>
    </div>
  </div>
</template>
