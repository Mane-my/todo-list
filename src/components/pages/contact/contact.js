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

      if (!isValid) {
        return
      }
      const form = {
        name: this.name,
        emeil: this.email,
        message: this.message
      }
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
