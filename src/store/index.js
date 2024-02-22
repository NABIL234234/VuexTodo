import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: [
      { id: 1, title: 'Note 1', content: '' },
      { id: 2, title: 'Note 2', content: '' },
      { id: 3, title: 'Note 3', content: '' }
    ]
  },
  mutations: {
    updateNote(state, payload) {
      const noteIndex = state.notes.findIndex((note) => note.id === payload.id)
      if (noteIndex !== -1) {
        state.notes[noteIndex].title = payload.title
        state.notes[noteIndex].content = payload.content
      }
    },
    addNote(state, payload) {
      const newNote = {
        id: state.notes.length + 1,
        title: payload.title,
        content: payload.content
      }
      state.notes.push(newNote)
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter((note) => note.id !== id)
    }
  },
  actions: {
    updateNote({ commit }, payload) {
      commit('updateNote', payload)
    },
    addNote({ commit }, payload) {
      commit('addNote', payload)
    },
    deleteNote({ commit }, id) {
      commit('deleteNote', id)
    }
  },
  getters: {
    getNoteById: (state) => (id) => {
      return state.notes.find((note) => note.id == id)
    }
  }
})
