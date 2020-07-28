<template>
  <div>
    <h1>{{ post.title }}</h1>
    <h2>{{ post.subTitle }}</h2>
    <h3>{{ post.category }}</h3>
    <h4>{{ post.body }}</h4>
    <h5>{{ post.authorUsername }}</h5>
    <h6>{{ post.authorEmail }}</h6>
  </div>
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
