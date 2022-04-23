<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeUser: { ...this.user }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('updateUser', { ...this.activeUser })
      this.$emit('closeEdit')
    },
    closeEdit () {
      this.$emit('closeEdit')
    }
  }
}
</script>

<template>
  <div class="profile-card">
    <form @submit.prevent="save">
      <p class="text-center">
        <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge img-update">
      </p>

      <div class="form-group">
          <input type="text" v-model="activeUser.username" placeholder="Username" class="form-input text-lead text-bold">
      </div>

      <div class="form-group">
          <input type="text" v-model="activeUser.name" placeholder="Full Name" class="form-input text-lead">
      </div>

      <div class="form-group">
          <label for="user_bio">Bio</label>
          <textarea class="form-input" id="user_bio" placeholder="Write a few words about yourself."
          v-model="activeUser.bio"></textarea>
      </div>

      <div class="stats">
          <span>{{user.postsCount}} posts</span>
          <span>{{user.threadsCount}} threads</span>
      </div>

      <hr>

      <div class="form-group">
          <label class="form-label" for="user_website">Website</label>
          <input autocomplete="off" class="form-input" id="user_website" value="batman.com">
      </div>

      <div class="form-group">
          <label class="form-label" for="user_email">Email</label>
          <input autocomplete="off" class="form-input" id="user_email" value="joker@batmail.com">
      </div>

      <div class="form-group">
          <label class="form-label" for="user_location">Location</label>
          <input autocomplete="off" class="form-input" id="user_location" value="You wish!">
      </div>

      <div class="btn-group space-between">
          <button class="btn-ghost" @click="closeEdit">Cancel</button>
          <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>
