<template>
  <div class="about-page">
    <div class="content">
      <h1>{{ isNewNote ? 'Create New Note' : 'Edit Note' }}</h1>
      <div class="container">
        <input v-model="editedNote.title" placeholder="Enter title" class="note-title" />
        <textarea
          v-model="editedNote.content"
          placeholder="Enter content"
          class="note-content"
        ></textarea>
        <button @click="saveEdit" class="action-button">{{ isNewNote ? 'Create' : 'Save' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AboutPage',
  data() {
    return {
      editedNote: { id: null, title: '', content: '' }
    }
  },
  computed: {
    ...mapGetters(['getNoteById']),
    isNewNote() {
      return this.$route.params.id === 'new'
    }
  },
  methods: {
    ...mapActions(['updateNote', 'addNote']),
    saveEdit() {
      if (this.isNewNote) {
        if (this.editedNote.title.trim() !== '') {
          this.addNote({
            title: this.editedNote.title,
            content: this.editedNote.content
          })
        }
      } else {
        this.updateNote({
          id: this.editedNote.id,
          title: this.editedNote.title,
          content: this.editedNote.content
        })
      }

      this.$router.push({ name: 'HomePage' })
    }
  },
  mounted() {
    const id = this.$route.params.id
    if (id !== 'new') {
      this.editedNote = { ...this.getNoteById(id) }
    }
  }
}
</script>

<style scoped>
.about-page {
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

input {
  width: 98%;
  height: 20%;
}
.container {
  display: flex;
  flex-direction: column;
}
.content {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flex {
  display: flex;
  padding-left: 45px;
}

h1 {
  color: #000000;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.note-input {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
}

.action-button {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #000851;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #000628;
}

button {
  color: #ccc;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 19px;
}

button:hover {
  color: #e9e9e9;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 19px;
}
</style>
