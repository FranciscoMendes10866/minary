<template>
  <div>
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div class="flex-1 flex justify-between items-center">
        <router-link to="/">
          <i class="im im-quote-left text-3xl text-indigo-700"></i>
        </router-link>
      </div>

      <label for="menu-toggle" class="pointer-cursor lg:hidden block">
        <i class="im im-menu text-2xl text-gray-700"></i>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li v-if="isLoggedIn">
              <router-link to="/" class="lg:p-4 py-3 px-0 block font-medium">Blog</router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link to="/create" class="lg:p-4 py-3 px-0 block font-medium">Create post</router-link>
            </li>
            <li v-if="!isLoggedIn">
              <router-link to="/signin" class="lg:p-4 py-3 px-0 block font-medium">Sign In</router-link>
            </li>
            <li v-if="!isLoggedIn">
              <router-link
                to="/signup"
                class="px-5 py-3 shadow-md lg:ml-5 block bg-orange-500 hover:bg-orange-600 text-white font-medium rounded"
              >Sign Up</router-link>
            </li>
            <li v-if="isLoggedIn">
              <button
                @click.prevent="LogOut"
                class="px-5 py-3 shadow-md lg:ml-5 block bg-gray-700 hover:bg-white text-white hover:text-gray-700 font-medium rounded"
              >Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'LogOut'
    ])
  }
}
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
