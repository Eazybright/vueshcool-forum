<script>
import PostList from '@/components/PostList'
import { mapGetters } from 'vuex'
import UserProfileCard from '@/components/UserProfileCard'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'

export default {
  components: { PostList, UserProfileCard, UserProfileCardEditor },
  computed: {
    ...mapGetters({ user: 'authUser' })
  },
  data () {
    return {
      isUpdateProfile: false
    }
  }
}
</script>

<template>
   <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCardEditor :user="user" v-if="isUpdateProfile" @closeEdit="isUpdateProfile = false"/>
        <user-profile-card :user="user" v-else/>

        <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

        <div class="text-center">
          <hr>
          <a href="#" class="btn-green btn-small" @click="isUpdateProfile = true" v-if="!isUpdateProfile">Edit Profile</a>
        </div>

      </div>

      <div class="col-7 push-top">

          <div class="profile-header">
              <span class="text-lead">
                  Joker's recent activity
              </span>
              <a href="#">See only started threads?</a>
          </div>

          <hr>

          <post-list :posts="user.posts" />
      </div>
  </div>
</template>
