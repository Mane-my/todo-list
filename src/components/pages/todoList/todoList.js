import { mapMutations } from 'vuex'
import ConfirmDialog from '../../confirmDialog/ConfirmDialog.vue'
import TaskModal from '../../taskModal/TaskModal.vue'
import Task from '../../task/Task.vue'
import TaskApi from '../../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
  components: {
    ConfirmDialog,
    TaskModal,
    Task
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: [],
      editingTask: null,
      selectedTasks: new Set(),
      isDeleteDialogOpen: false
    }
  },
  created() {
    this.getTasks()
  },
  watch: {
    editingTask(newValue) {
      if (newValue) {
        this.isTaskModalOpen = true
      }
    },
    isTaskModalOpen(isOpen) {
      if (!isOpen && this.editingTask) {
        this.editingTask = null
      }
    }
  },
  computed: {
    isDeleteSelectedBtnDisabled() {
      return !this.selectedTasks.size
    },
    confirmDialogText() {
      return `You are going to delete ${this.selectedTasks.size} task(s)`
    }
  },
  methods: {
    ...mapMutations(['toggleLoading']),
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
    getTasks() {
      this.toggleLoading()
      taskApi
        .getTasks()
        .then((tasks) => {
          this.tasks = tasks
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    onTaskAdd(task) {
      this.toggleLoading()
      taskApi
        .addNewTask(task)
        .then((newTask) => {
          this.tasks.push(newTask)
          this.toggleTaskModal()
          this.$toast.success('Task has been created successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    onTaskSave(editedTask) {
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
      return taskApi.updateTask(editedTask).then((updatedTask) => {
        this.findAndReplaceTask(updatedTask)
      })
    },
    findAndReplaceTask(updatedTask) {
      const index = this.tasks.findIndex((t) => t._id === updatedTask._id)
      this.tasks[index] = updatedTask
    },
    handleError(error) {
      this.$toast.error(error.message)
    },
    onTaskEdit(editingTask) {
      this.editingTask = editingTask
    },
    onTaskStatusChange(task) {
      this.onTaskSave(task)
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
    onTaskDelete(taskId) {
      this.toggleLoading()
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.tasks = this.tasks.filter((t) => t._id !== taskId)
          this.$toast.success('Task has been deleted successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    toggleDeleteDialog() {
      this.isDeleteDialogOpen = !this.isDeleteDialogOpen
      if (!this.isDeleteDialogOpen) {
        this.selectedTasks.clear()
      }
    },
    onDeleteSelected() {
      this.toggleLoading()
      taskApi
        .deleteTasks([...this.selectedTasks])
        .then(() => {
          this.toggleDeleteDialog()
          this.tasks = this.tasks.filter((t) => {
            if (this.selectedTasks.has(t._id)) {
              return false
            }
            return true
          })
          this.selectedTasks.clear()
          this.$toast.success('Selected Tasks have been deleted successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    toggleTaskId(taskId) {
      if (this.selectedTasks.has(taskId)) {
        this.selectedTasks.delete(taskId)
      } else {
        this.selectedTasks.add(taskId)
      }
    }
  }
}
