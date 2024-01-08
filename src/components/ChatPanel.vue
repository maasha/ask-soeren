<template>
  <div class="border w-full p-4">
    <form @submit.prevent="">
      <label for="textInput" class="text-3xl">Post your question</label>
      <input
        class="border w-full mt-5 text-3xl p-3"
        type="text"
        id="textInput"
        placeholder="here..."
      />
      <footer class="flex justify-center mt-5">
        <button
          class="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Ask Søren
        </button>
      </footer>
    </form>
  </div>
</template>
