<script>
import sourceData from '@/data.json'

export default {
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div class="thread"  v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <router-link :to="{ name: 'ThreadShow', params: { id: thread.id} }">
              {{ thread.title }}
            </router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a>, <app-date :timestamp="thread.publishedAt" />.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length - 1 }} replies
          </p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="avatar">
          <div>
            <p class="text-xsmall">
              <a href="#">Bruce Wayne</a>
            </p>
            <p class="text-xsmall text-faded">
              <app-date :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>

      <!-- <div class="pagination">
          <button class="btn-circle" disabled><i class="fa fa-angle-left"></i></button>
          1 of 3
          <button class="btn-circle"><i class="fa fa-angle-right"></i></button>
      </div> -->
  </div>
</template>

<style scoped>

</style>
