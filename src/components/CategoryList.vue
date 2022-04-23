<script>
import ForumList from './ForumList.vue'

export default {
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      required: true
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
  <forum-list v-for="category in categories" :key="category.id" :forums="getForumsForCategory(category)"
    :title="category.name" :category-id="category.id"
  />
</template>
