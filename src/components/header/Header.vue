<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-toolbar-title>TODO LIST</v-toolbar-title>

        <v-toolbar-title>
          <RouterLink to="/" class="header-menu home">Home</RouterLink>
        </v-toolbar-title>
        <v-toolbar-title>
          <RouterLink to="/contact-us" class="header-menu contact">Contact us</RouterLink>
        </v-toolbar-title>
        <v-toolbar-title>
          <RouterLink to="/about" class="header-menu about">About us</RouterLink>
        </v-toolbar-title>
      </v-app-bar>

      <v-main style="height: 50px"> </v-main>
    </v-layout>
  </v-card>
</template>

<script src="./header.js"></script>
<style scoped>
.header-menu {
  color: aliceblue;
  text-decoration: none;
}
</style>
