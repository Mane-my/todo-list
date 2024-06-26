import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: {
    Datepicker
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '',
      description: '',
      dueDate: ''
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onSave() {
      const newTask = {
        title: this.title.trim(),
        description: this.description,
        date: this.dueDate
      }
      if (this.dueDate) {
        newTask.date = this.dueDate.toISOString().slice(0, 10)
      }
      this.$emit('taskSave', newTask)
    },
    onTitleInput(event) {
      this.title = event.target.value
    }
  },
  computed: {
    isTitleValid() {
      return !!this.title.trim()
    }
  }
}
