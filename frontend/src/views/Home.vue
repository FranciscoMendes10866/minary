<template>
  <div class="home">
    <!-- Hero Landing -->
    <section>
      <div class="grid grid-cols-1">
        <div class="bg-indigo-700 py-24 text-center">
          <h1 class="text-white font-bold text-4xl">BLOG</h1>
          <p class="text-white font-normal text-lg mt-2">Let's share some knowledge.</p>
          <input
            v-model="search"
            class="mt-8 rounded-sm px-32 sm:px-48 md:px-64 py-4 text-center text-lg"
            type="text"
            placeholder="Search an article"
          />
        </div>
      </div>
    </section>
    <!-- Posts Section -->
    <section>
      <div class="container mx-auto">
        <div class="flex flex-auto justify-center">
          <div>
            <Posts
              class="px-8 sm:px-10 md:px-0"
              v-for="post in filteredPosts"
              :key="post.id"
              :category="post.category"
              :title="post.title"
              :description="post.description"
              :authorUsername="post.authorUsername"
              :postId="post.id"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    this.fetchPosts()
  },
  computed: {
    ...mapState('posts', [
      'posts'
    ]),
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search)
      })
    }
  },
  methods: {
    ...mapMutations('posts', [
      'setFetchPosts'
    ]),
    ...mapActions('posts', [
      'fetchPosts'
    ])
  },
  components: {
    Posts: () => import('../components/Post')
  }
}
</script>
