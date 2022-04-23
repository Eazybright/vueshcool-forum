<script>
export default {
  props: {
    forums: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    categoryId: String
  },
  methods: {
    forumThreadsCount (forum) {
      if (forum.threads?.length) {
        return forum.threads?.length > 0 ? 'threads' : 'thread'
      } else {
        return 'no threads'
      }
    }
  }
}
</script>

<template>
  <div class="forum-list">
      <h2 class="list-title">
        <router-link :to="{name: 'Category', params: { id: categoryId }}" v-if="categoryId">
        {{ title }}
        </router-link>
        <a href="#" v-else>{{title}}</a>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
          <div class="forum-details">
              <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="forum-name">
                {{ forum.name }}
              </router-link>

              <p class="forum-description">{{ forum.description }}</p>
          </div>

          <div class="threads-count">
            <p>
              <span class="count text-lead">
                {{ forum.threads?.length ?? 0 }}
              </span> {{ forumThreadsCount(forum) }}
            </p>
          </div>

          <div class="last-thread"></div>
      </div>
  </div>
</template>
