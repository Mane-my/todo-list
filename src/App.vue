<script>
import { mapGetters } from 'vuex'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import Loader from './components/loader/Loader.vue'

export default {
  components: {
    HeaderComponent: Header,
    FooterComponent: Footer,
    Loader
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<template>
  <Loader v-if="isLoading" />

  <HeaderComponent />

  <main>
    <RouterView />
  </main>

  <FooterComponent />
</template>

<style>
main {
  flex-grow: 1;
}
</style>
