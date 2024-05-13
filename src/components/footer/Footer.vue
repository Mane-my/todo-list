<template>
  <v-container class="footer">
    <div class="footer-links">
      <v-btn variant="plain">
        <RouterLink to="/" class="header-menu home">Home</RouterLink>
      </v-btn>

      <v-btn variant="plain">
        <RouterLink to="/contact-us" class="header-menu contact">Contact us</RouterLink>
      </v-btn>

      <v-btn variant="plain">
        <RouterLink to="/about" class="header-menu about">About us</RouterLink>
      </v-btn>
    </div>

    <div class="btns">
      <v-btn variant="plain">
        <v-icon icon="mdi mdi-facebook" />
      </v-btn>
      <v-btn variant="plain">
        <v-icon icon="mdi mdi-instagram" />
      </v-btn>
      <v-btn variant="plain">
        <v-icon icon="mdi mdi-youtube" />
      </v-btn>
    </div>

    <div class="footer-txt">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
      interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Orci variu montes,
      nascetur ridiculus mus.
    </div>

    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-container>
</template>

<style scoped>
.footerContainer {
}
.footer {
  /* height: 50px;
  flex-shrink: 0;
  width: 100%; */
}
.footer-links .header-menu {
  color: white;
  text-decoration: none;
}
.footer-links,
.btns,
.footer-txt {
  text-align: center;
  width: 50%;
  margin: 10px auto;
}
</style>

<script src="./footer.js"></script>
