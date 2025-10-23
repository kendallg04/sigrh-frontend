import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// VUE ROUTER
import { router } from './router'

createApp(App).use(router).mount('#app')
