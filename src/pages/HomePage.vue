<template>
  <div class="app">
    <h1>Список задач</h1>
    <div class="wrapper">
      <router-link :to="{ name: 'NotePage', params: { id: 'new' } }">Создать заметку</router-link>
      <div class="flex">
        <ul>
          <li v-for="note in notes" :key="note.id">
            {{ note.title }}
            <router-link :to="{ name: 'NotePage', params: { id: note.id } }">Изменить</router-link>
            <button @click="deleteNoteHandler(note.id)">Удалить</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['notes'])
  },
  methods: {
    ...mapActions(['deleteNote']),
    deleteNoteHandler(id) {
      if (confirm('Вы уверены, что хотите удалить эту заметку?')) {
        this.deleteNote(id)
      }
    }
  }
}
</script>

<style>
body {
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0;
  padding: 0;
}

.app {
  max-width: 600px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(5, 0, 0, 0.1);
  padding: 20px;
  padding-top: 70px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.flex {
  display: flex;
  gap: 20px;
  justify-content: center;
}

h1 {
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

ul {
  padding: 0;
}

li {
  color: #ffffff;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  transition: color 0.3s ease;
  padding-left: 30px; 
}

a:hover {
  color: #000851;
}

button {
  color: #c49999;
  border: none;
  font-size: 14px;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s ease;
  padding-left: 30px;
}

button:hover {
  color: #000000;
}
</style>