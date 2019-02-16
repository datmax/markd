
 <template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      class="secondary"
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
        <v-list-tile to="/files">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Files</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <div v-if="storage">
          <v-subheader>Recent files</v-subheader>
          <div v-for="file in recentStorage" :key="file.id">
            <v-list-tile @click="navigateTo(file.id)">
          <v-list-tile-content>
            <v-list-tile-title>{{file.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class="primary" dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Markd</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
      {{$route.name}}
      </v-toolbar-title>
    </v-toolbar>
    <v-content  class="background">
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view></router-view>
              <v-btn dark class="float primary" to="/new" v-if="showButton"
               fab absolute fixed bottom right>
              <v-icon>add</v-icon>
            </v-btn>
            <notifications class="nfstyle" group="notification"
                   position="bottom right"
                   :speed="500" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed: {
    storage () {
      return this.$store.state.storage
    },
    recentStorage () {
      if (this.storage.length > 5) {
        return this.storage.slice(0, 5)
      } else return this.storage
    },
    showButton () {
      if (this.$route.name === 'Edit File' || this.$route.name === 'New File') {
        return false
      } else {
        return true
      }
    }
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    navigateTo (id) {
      this.$router.replace(id)
    }
  },
  props: {
    source: String
  },
  mounted () {
    this.$store.dispatch('updateStorage')
  }
}
</script>
<style scoped>
.v-navigation-drawer__border{
  display: none;
}
.float{
  margin-bottom: 60px;
  margin-right: 20px;
  z-index: 3
}
.nfstyle{
  border-radius: 3px;
}
</style>
