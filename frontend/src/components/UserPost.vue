<template>
  <div class="max-w-2xl py-8">
    <h1 class="mb-2 text-indigo-700 text-sm font-semibold uppercase tracking-wide">{{ category }}</h1>
    <router-link class="text-blue-900 font-bold text-2xl" :to="'/post/'+postId">{{ title }}</router-link>
    <p class="mt-2 text-gray-700 text-md font-normal tracking-wide">{{ description }}</p>
    <p class="mt-4 text-gray-500">
      <span class="bg-gray-200 text-black text-xs px-2 py-2 rounded-sm">{{ category }}</span>
      <span>
        <button type="submit" @click="$emit('onDelete')">
          <i class="im im-trash-can align-middle text-sm text-red-600 ml-2"></i>
        </button>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: [
    'category',
    'title',
    'description',
    'postId'
  ]
}
</script>
