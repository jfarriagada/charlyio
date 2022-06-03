<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <div class="d-flex align-center">
			<v-btn
				href=""
				target="_blank"
				text
			>
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://www.charly.io/wp-content/themes/charly-theme/img/logo-charly-n.png"
          width="100"
        />
			</v-btn>
			</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
