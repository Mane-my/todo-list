import TaskModal from '../taskModal/TaskModal.vue'
import Task from '../task/Task.vue'
import TaskApi from '../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal,
    Task
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: []
    }
  },
  created() {
    this.getTasks()
  },
  methods: {
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
    getTasks() {
      taskApi
        .getTasks()
        .then((tasks) => {
          this.tasks = tasks
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    onTaskSave(task) {
      taskApi
        .addNewTask(task)
        .then((newTask) => {
          this.tasks.push(newTask)
          this.toggleTaskModal()
          this.$toast.success('Task has been created successfully!')
        })
        .catch((err) => {
          console.log('err', err)
          this.$toast.error('yo')
        })
    }
  }
}
