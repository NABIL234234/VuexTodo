<!-- HomePage.vue -->
<template>
  <div>
    <h1>Список задач</h1>
    <router-link :to="{ name: 'AboutPage', params: { id: 'new' }}">Create New Note</router-link>
    <ul>
      <li v-for="note in notes" :key="note.id">
        {{ note.title }} 
        <router-link :to="{ name: 'AboutPage', params: { id: note.id }}">Edit</router-link>
        <button @click="deleteNote(note.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['notes'])
  },
  methods: {
    ...mapActions(['deleteNote'])
  }
}
</script>