<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app 
      class="grey lighten-2"
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/docs">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Docs</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Files</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
          <v-subheader>Recent files</v-subheader>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class="green lighten-3" dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Markd</v-toolbar-title>
    </v-toolbar>
    <v-content  class="grey lighten-4">
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view></router-view>
            <v-btn class="float" color="blue darken-1" to="/new" fab absolute bottom right>
              <v-icon>add</v-icon>
            </v-btn>
          {{storage}}
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    computed:{
      storage(){
        return this.$store.state.storage;
      }
    },
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    mounted(){
      this.$store.dispatch("getStorage");
    }
  }
</script>
<style>
.v-navigation-drawer__border{
  display: none;
}
.float{
  margin: 0px 30px 60px 0;
}
</style>