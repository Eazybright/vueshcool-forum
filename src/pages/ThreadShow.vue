<script>
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: { PostList, PostEditor },
  data () {
    return {
      threads: this.$store.state.threads,
      posts: this.$store.state.posts
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }

      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<template>
  <div class="col-large push-top">

    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts"/>
    <post-editor @save-post="addPost"/>
  </div>
</template>

<style scoped>

</style>
