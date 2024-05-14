import TaskApi from '../../../utils/taskApi.js'
import TaskModal from '../../taskModal/TaskModal.vue'
import { mapMutations } from 'vuex'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal
  },
  data() {
    return {
      task: null,
      isEditModalOpen: false
    }
  },
  created() {
    this.getTask()
  },

  computed: {
    createdAt() {
      return this.task.created_at.slice(0, 10)
    },
    dueDate() {
      return this.task.date?.slice(0, 10) || 'none'
    }
  },
  methods: {
    ...mapMutations(['toggleLoading']),
    toggleTaskModal() {
      this.isEditModalOpen = !this.isEditModalOpen
    },
    getTask() {
      const taskId = this.$route.params.taskId
      taskApi
        .getSingleTask(taskId)
        .then((task) => {
          this.task = task
        })
        .catch(this.handleError)
    },
    onSave(editedTask) {
      return this.onTaskUpdate(editedTask)
        .then(() => {
          this.isTaskModalOpen = false

          this.$toast.success('The task has been updated successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    onTaskUpdate(editedTask) {
      this.toggleLoading()
      return taskApi.updateTask(editedTask).then(() => {
        this.$router.push('/')
      })
    },
    onDelete() {
      const taskId = this.task._id
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.$router.push('/')
          this.$toast.success('Task has been deleted successfully!')
        })
        .catch(this.handleError)
    },
    onStatusChange(task) {
      this.onSave(task)
        .then(() => {
          let message
          if (task.status === 'done') {
            message = 'Task has been completed!'
          } else {
            message = 'Task has been restored!'
          }
          this.$toast.success(message)
        })
        .catch(this.handleError)
    },
    handleError(error) {
      this.$toast.error(error.message)
    }
  }
}
