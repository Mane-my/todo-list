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
      // dialog: false,
      title: '',
      description: '',
      dueDate: '',
      rules: [
        (value) => {
          if (value) {
            return true
          } else {
            return 'You must enter title'
          }
        }
      ]
    }
  },
  methods: {
    onInput(event) {
      this.name = event.target.value
    },
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
    },
    computed: {
      isSaveDisabled() {
        return !this.title.trim()
      }
    }
  }
}