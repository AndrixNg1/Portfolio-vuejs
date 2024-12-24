import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router'; // Importez votre fichier router ici
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css';
import "@fortawesome/fontawesome-free/css/all.css";




// Créez une seule instance de l'application
const app = createApp(App);

// Utilisez le router
app.use(router);

// Montez l'application sur #app
app.mount('#app');
