<template>
  <div>
    <h1>Task View</h1>
    <p v-if="note">Note ID: {{ note.id }}, Title: {{ note.title }}</p>
    <router-link :to="{ name: 'HomePage' }">Back to Home</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TaskView',
  computed: {
    ...mapGetters(['getNoteById']),
    note() {
      return this.getNoteById(parseInt(this.$route.params.id));
    }
  }
};
</script>