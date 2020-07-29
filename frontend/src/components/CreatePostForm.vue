<template>
  <div class="flex flex-auto justify-center items-center py-12">
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="$emit('submitForm')"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Title</label>
          <input
            :value="titleValue"
            @input="$emit('titleInput', $event.target.value)"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="title"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Subtitle</label>
          <input
            :value="subTitleValue"
            @input="$emit('subTitleInput', $event.target.value)"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="subTitle"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Category</label>
          <select
            :value="categoryValue"
            @input="$emit('categoryInput', $event.target.value)"
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Design">Design</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Description</label>
          <textarea
            :value="descriptionValue"
            @input="$emit('descriptionInput', $event.target.value)"
            rows="4"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="description"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Content</label>
          <textarea
            :value="contentValue"
            @input="$emit('contentInput', $event.target.value)"
            rows="4"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="content"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create
            <span>
              <i class="im im-plus align-middle text-xs"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'subTitle',
    'description',
    'content',
    'titleValue',
    'subTitleValue',
    'categoryValue',
    'descriptionValue',
    'contentValue'
  ]
}
</script>
