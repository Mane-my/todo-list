const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export default {
  data: () => ({
    name: '',
    email: '',
    message: '',
    nameRules: [(v) => !!v || 'Name is required'],
    emailRules: [(v) => !!v || 'Email is required', (v) => emailRegex.test(v) || 'Invalid email']
  }),

  methods: {
    async sendForm() {
      const isValid = await this.validate()
      console.log('isValid', isValid)
      if (!isValid) {
        return
      }
      const form = {
        name: this.name,
        emeil: this.email,
        message: this.message
      }
      // send form
      // formApi.sendForm(form)
      // if success this.reset()
      // show notification
    },
    async validate() {
      const { valid } = await this.$refs.form.validate()
      return valid
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
