<template>
  <footer class="footer-1 bg-white py-8 sm:py-12">
    <div class="container mx-auto px-4">
      <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
        <div class="sm:w-full px-4 md:w-1/6">
          <router-link to="/">
            <i class="im im-quote-left text-3xl text-indigo-700"></i>
          </router-link>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 class="font-bold mb-2">Made by:</h6>
          <a
            href="https://locise.vercel.app"
            target="blank"
            class="not-italic mb-4 text-sm text-indigo-700"
          >Francisco Mendes</a>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 class="font-bold mb-2">Source code:</h6>
          <a
            href="https://github.com/FranciscoMendes10866/minary"
            target="blank"
            class="not-italic mb-4 text-sm text-indigo-700"
          >Github</a>
        </div>
        <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
          <h6 class="font-bold mb-2">License:</h6>
          <a
            href="https://choosealicense.com/licenses/mit/"
            target="blank"
            class="not-italic mb-4 text-sm text-indigo-700"
          >MIT</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>
