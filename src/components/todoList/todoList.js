import TaskModal from '../taskModal/TaskModal.vue'

export default {
  components: {
    TaskModal
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: []
    }
  },
  methods: {
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
    onTaskSave(task) {
      console.log(task)
      this.tasks.push(task)
      this.toggleTaskModal()
    }
  }
}
