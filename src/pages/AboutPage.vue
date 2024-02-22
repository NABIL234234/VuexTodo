<!-- src/pages/AboutPage.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <textarea v-model="editedNote.title"></textarea>
    <button @click="saveEdit">Save</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AboutPage',
  data() {
    return {
      editedNote: { id: null, title: '' }
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.editedNote = this.getNoteById(id);
  },
  computed: {
    ...mapGetters(['getNoteById'])
  },
  methods: {
    ...mapActions(['updateNoteTitle']),
    saveEdit() {
      this.updateNoteTitle({ id: this.editedNote.id, title: this.editedNote.title });
      this.$router.push({ name: 'HomePage' });
    }
  }
}
</script>