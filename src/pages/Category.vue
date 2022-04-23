<script>
import ForumList from '@/components/ForumList'

export default {
  components: { ForumList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    category () {
      return this.sourceData.categories.find(category => category.id === this.id)
    }
  },
  data () {
    return {
      sourceData: this.$store.state
    }
  },
  methods: {
    getForumsForCategory (category) {
      return this.sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<template>
  <!-- <h1> {{ category.name }}</h1> -->
  <forum-list
    :title="category.name"
    :forums="getForumsForCategory(category)"
  />
</template>
