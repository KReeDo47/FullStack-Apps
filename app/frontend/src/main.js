import { createApp } from 'vue' // импорт вью
import App from './App.vue' // импорт главного файла vue
import router from './router' // импорт маршрутов 

createApp(App).use(router).mount('#app') // сохдание экземпляра 

