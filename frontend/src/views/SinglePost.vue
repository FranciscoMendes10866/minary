<template>
  <section>
    <div class="container max-auto">
      <div class="flex flex-auto justify-center">
        <div>
          <header class="mt-12">
            <h1
              class="text-orange-500 text-lg font-semibold uppercase tracking-wide"
            >{{ post.category }}</h1>
            <h2 class="text-blue-900 font-bold text-3xl mt-2">{{ post.title }}</h2>
            <h3 class="text-blue-900 font-normal text-2xl mt-2">{{ post.subTitle }}</h3>
          </header>
          <div class="mt-12">
            <h4 class="text-blue-900 font-semibold">By: {{ post.authorUsername }}</h4>
            <h5 class="text-blue-900 font-semibold mt-2">Email: {{ post.authorEmail }}</h5>
          </div>
          <div class="mt-12">
            <h6
              class="text-gray-700 text-lg font-normal tracking-wide leading-loose"
            >{{ post.body }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: this.$route.params.id,
      post: {}
    }
  },
  created () {
    axios.get(`http://localhost:3030/api/v1/posts/${this.id}`)
      .then((res) => {
        this.post = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
