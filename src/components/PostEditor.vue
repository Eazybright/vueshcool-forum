<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.text
      }

      this.$emit('save-post', { post })
      this.text = ''
    }
  }
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" cols="30" rows="10" class="form-input"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue" type="submit">Submit post </button>
      </div>
    </form>
  </div>
</template>
