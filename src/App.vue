<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  components: {
    HeaderComponent: Header,
    FooterComponent: Footer
  }
}
</script>

<template>
  <HeaderComponent />

  <main>
    <RouterView />
  </main>

  <FooterComponent />
</template>

<style scoped></style>
