import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // импортируем хранилище Vuex

const app = createApp(App);

app.use(router);
app.use(store); // используем хранилище Vuex
app.mount('#app');