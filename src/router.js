import { createWebHistory, createRouter } from 'vue-router'
import TodoList from './components/pages/todoList/TodoList.vue'
import About from './components/pages/about/About.vue'
import Contact from './components/pages/contact/Contact.vue'
import SingleTask from './components/pages/singleTask/SingleTask.vue'
import NotFound from './components/pages/notFound/NotFound.vue'

const routes = [
  { path: '/', component: TodoList },
  { path: '/about', component: About },
  { path: '/task/:taskId', component: SingleTask },
  { path: '/contact-us', component: Contact },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
