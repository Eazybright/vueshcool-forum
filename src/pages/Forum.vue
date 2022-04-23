<script>
import ThreadList from '@/components/ThreadList'

export default {
  components: { ThreadList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum () {
      return this.sourceData.forums.find(forum => forum.id === this.id)
    },
    threads () {
      return this.sourceData.threads.filter(thread => thread.forumId === this.id)
    }
  },
  data () {
    return {
      sourceData: this.$store.state
    }
  }
}
</script>

<template>
<div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  <!-- </div> -->

  <div class="col-full">
    <thread-list :threads="threads"/>
  </div>
</div>
</template>
