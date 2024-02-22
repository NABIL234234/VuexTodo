<!-- src/pages/AboutPage.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <textarea v-model="editedNote.title"></textarea>
    <button @click="saveEdit">{{ isNewNote ? 'Create' : 'Save' }}</button>
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
  computed: {
    ...mapGetters(['getNoteById']),
    isNewNote() {
      return this.$route.params.id === 'new';
    }
  },
  methods: {
    ...mapActions(['updateNoteTitle', 'addNote']),
    saveEdit() {
      if (this.isNewNote) {
        // Создаем новую запись
        this.addNote({ title: this.editedNote.title });
      } else {
        // Обновляем существующую запись
        this.updateNoteTitle({ id: this.editedNote.id, title: this.editedNote.title });
      }
      // После сохранения возвращаемся на домашнюю страницу
      this.$router.push({ name: 'HomePage' });
    }
  },
  mounted() {
    const id = this.$route.params.id;
    if (id !== 'new') {
      this.editedNote = this.getNoteById(id);
    }
  }
}
</script>