<template>
  <div class="home">
    <!-- Hero Landing -->
    <section>
      <div class="grid grid-cols-1">
        <div class="bg-orange-400 py-16 text-center">
          <h1 class="text-white font-bold text-4xl">These are your posts.</h1>
          <p class="text-white font-normal text-lg mt-2">Here you can view them and delete them.</p>
        </div>
      </div>
    </section>
    <!-- Posts Section -->
    <section>
      <div class="container mx-auto">
        <div class="flex flex-auto justify-center">
          <div>
            <Posts
              v-for="post in userPosts"
              :key="post.id"
              :category="post.category"
              :title="post.title"
              :description="post.description"
              :postId="post.id"
              @onDelete="deletePost(post)"
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
  mounted () {
    this.fetchUserPosts()
  },
  computed: {
    ...mapState('posts', [
      'userPosts'
    ])
  },
  methods: {
    ...mapMutations('posts', [
      'setFetchUserPosts',
      'setDeletePost'
    ]),
    ...mapActions('posts', [
      'fetchUserPosts',
      'deletePost'
    ])
  },
  components: {
    Posts: () => import('../components/UserPost')
  }
}
</script>
