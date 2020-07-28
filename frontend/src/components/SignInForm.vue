<template>
  <div class="w-full max-w-xs">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="$emit('submitForm')"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Email</label>
        <input
          :value="emailValue"
          @input="$emit('emailInput', $event.target.value)"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="email"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          :value="passwordValue"
          @input="$emit('passwordInput', $event.target.value)"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
          <span>
            <i class="im im-sign-in align-middle text-sm"></i>
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'email',
    'password',
    'emailValue',
    'passwordValue'
  ]
}
</script>
