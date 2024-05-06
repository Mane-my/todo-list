<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

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

      <!-- <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list :items="items"></v-list>
      </v-navigation-drawer> -->

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
