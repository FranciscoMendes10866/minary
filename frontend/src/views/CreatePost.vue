<template>
  <section>
    <Form
      title="Title field"
      subTitle="Subtitle field"
      description="Description field"
      content="Content field"
      :titleValue="postTitle"
      :subTitleValue="postSubTitle"
      :categoryValue="postCategory"
      :descriptionValue="postDescription"
      :contentValue="postContent"
      @titleInput="setPostTitle"
      @subTitleInput="setPostSubTitle"
      @categoryInput="setPostCategory"
      @descriptionInput="setPostDescription"
      @contentInput="setPostContent"
      @submitForm="createPost"
    />
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('posts', [
      'postTitle',
      'postSubTitle',
      'postCategory',
      'postDescription',
      'postContent'
    ])
  },
  methods: {
    ...mapMutations('posts', [
      'setPostTitle',
      'setPostSubTitle',
      'setPostCategory',
      'setPostDescription',
      'setPostContent'
    ]),
    ...mapActions('posts', [
      'createPost'
    ])
  },
  components: {
    Form: () => import('../components/CreatePostForm')
  }
}
</script>
